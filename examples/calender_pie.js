/**
 * Created by yuyu on 2020/2/3.
 */

 let cellSize = [80, 80];
 let pieRadius = 30;
 let app = {};
 let myCalPie = echarts.init(document.getElementById('cal_pie'));
 let current_month = new Date().getMonth() + 1; // 当前月份
 let selected_month = current_month;
 let start_date = '2021-'+selected_month+'-01';
 let end_date = '2021-'+(selected_month+1)+'-01';
 
 function getVirtulData(start_date, end_date) {
     // console.log(selected_month)
     // console.log(selected_month+1)
     // console.log(start_date)
     // console.log(end_date)
     let pie_date = {}; // 日历图中需要涉及到的日期
     let date = +echarts.number.parseDate(start_date);
     let end = +echarts.number.parseDate(end_date);
     let dayTime = 3600 * 24 * 1000;
     for (let time = date; time < end; time += dayTime) {
         pie_date[echarts.format.formatTime('yyyy-MM-dd', time)] = true
     }
     // console.log(pie_date)
     return pie_date;
 }
 
 function getPieSeriesUpdate(scatterData, chart) {
     return echarts.util.map(scatterData, function (item, index) {
         let center = chart.convertToPixel('calendar', item);
         return {
             id: index + 'pie',
             center: center
         };
     });
 }
 
 draw_calPie('中国');
 
 function draw_calPie(area) {
     console.log(area)
     $("#"+myCalPie['_dom']['id']).show();
     myCalPie.clear();
     myCalPie.showLoading();
     $.getJSON('./data/data/calPie/'+area+'.json')
         .done(function (seriesData) {
             console.log(seriesData)
             let pie_date = getVirtulData(start_date, end_date);
 
             for (let i = 0; i < seriesData.length; i++){
                 seriesData[i][0]['name'] = '现存确诊';
                 seriesData[i][0]['value'] = seriesData[i][0]['value'] - seriesData[i][1]['value'] - seriesData[i][2]['value'];
             }
             let pieData= [];
             seriesData.forEach(function (item) {
                 if (pie_date[item[0]['date']] == true){
                     pieData.push(item);
                     pie_date[item[0]['date']] = false;
                 }
             });
             seriesData = pieData;
             console.log(seriesData)
             let scatterData = []; // 日历图语法中的占位数据
             Object.keys(pie_date).forEach(function(key){
                 if (pie_date[key] == false)
                     scatterData.push([key, 1])
             });
             console.log("scatterData: ",scatterData)
             let option = {
                 title: {
                     text: '2021年'+selected_month+'月病患类型比例',
                     subtext: area,
                     left: 'center',
                     top: 'top'
                 },
                 toolbox: {
                     show: true,
                     // orient: 'vertical',
                     left: '70%',
                     // top: 'center',
                     itemSize: 22,
                     itemGap: 25,
                     feature: {
                         myLastMonth: {
                             show: true,
                             title: '上个月',
                             icon: 'image:///images/left.svg',
                             onclick: function (){
                                 selected_month = selected_month - 1;
                                 if (selected_month < 1){
                                     alert('无上个月数据!');
                                     selected_month = selected_month + 1;
                                 }
                                 else{
                                     start_date = '2021-'+selected_month+'-01';
                                     end_date = '2021-'+(selected_month+1)+'-01';
                                     draw_calPie(area);
                                 }
                             }
                         },
                         myNextMonth: {
                             show: true,
                             title: '下个月',
                             icon: 'image:///images/right.svg',
                             onclick: function (){
                                 selected_month = selected_month + 1;
                                 if (selected_month > current_month){
                                     alert('无下个月数据!');
                                     selected_month = selected_month - 1;
                                 }else{
                                     start_date = '2021-'+selected_month+'-01';
                                     end_date = '2021-'+(selected_month+1)+'-01';
                                     draw_calPie(area);
                                 }
                             }
                         },
                         saveAsImage: {
                             pixelRatio: 5
                         }
                     }
                 },
                 tooltip: {},
                 color: ['#d48265','#749f83','#c23531', '#2f4554'],
                 legend: {
                     orient: 'vertical',
                     data: [ '现存确诊', '治愈','死亡'],
                     // top: '10%',
                     left: 'left',
                     selected: {
                         '现存确诊': false,
                     }
                 },
                 grid: {
                     left: '0%',
                     right: '10%',
                     bottom: '3%',
                     top: '23%',
                 },
                 calendar: {
                     top: '20%',
                     left: 'left',
                     orient: 'vertical',
                     cellSize: cellSize,
                     yearLabel: {
                         show: false,
                         textStyle: {
                             fontSize: 30
                         }
                     },
                     dayLabel: {
                         margin: 20,
                         firstDay: 1,
                         nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
                     },
                     monthLabel: {
                         show: true
                     },
                     range: ['2021-'+selected_month]
                 },
                 series: [{
                     id: 'label',
                     type: 'scatter',
                     coordinateSystem: 'calendar',
                     symbolSize: 1,
                     label: {
                         normal: {
                             show: true,
                             formatter: function (params) {
                                 return echarts.format.formatTime('dd', params.value[0]);
                             },
                             offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                             textStyle: {
                                 color: '#000',
                                 fontSize: 14
                             }
                         }
                     },
                     data: scatterData
                 }]
             };
             function getPieSeries(scatterData, chart) {
                 return echarts.util.map(scatterData, function (item, index) {
                     let center = chart.convertToPixel('calendar', item);
                     return {
                         id: index + 'pie',
                         type: 'pie',
                         center: center,
                         label: {
                             normal: {
                                 formatter: '{c}',
                                 position: 'inside'
                             }
                         },
                         radius: pieRadius,
                         data:seriesData[index]
                     };
                 });
             }
             if (!app.inNode) {
                 let pieInitialized;
                 setTimeout(function () {
                     pieInitialized = true;
                     myCalPie.setOption({
                         series: getPieSeries(scatterData, myCalPie)
                     });
                 }, 20);
 
                 app.onresize = function () {
                     if (pieInitialized) {
                         myCalPie.setOption({
                             series: getPieSeriesUpdate(scatterData, myCalPie)
                         });
                     }
                 };
             }
             myCalPie.hideLoading();
             myCalPie.setOption(option);
             // 刷新调整
             window.onresize = function () {
                 myCalPie.resize();
             };
         })
         .fail(function () {
             $("#"+myCalPie['_dom']['id']).hide();
         })
 }
 
 
 
 