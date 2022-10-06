/**
 * Created by yuyu on 2020/2/2.
 */

 let pie_dom_id = echarts.init(document.getElementById('pie'));
 let pie_gender_dom_id = echarts.init(document.getElementById('pie_gender'));
 //设置容器高宽
 resizeContainer('pie', 'pieBlock');
 resizeContainer('pie_gender', 'pieBlock');
 
 draw_pie(pie_dom_id, '中国' ,'');
 draw_pie(pie_gender_dom_id, '中国' ,'gender/');
 
 
 function draw_pie(dom_id, area, type) {
     $("#"+dom_id['_dom']['id']).show()
     dom_id.showLoading();
     let url = './data/data/pie/'+type+area+'.json';
     let legend = {
         // orient: 'vertical',
         top: '18%',
         left: 'center',
         data: ['现存确诊', '治愈', '死亡'],
         selected: {
             // '疑似': false,
             // '治愈': false,
             // '死亡': false
         }
     };
     if (type == 'gender/'){
         legend['data'] = ['男','女'];
         legend['selected'] = {}
     }
     $.getJSON(url)
         .done(function (seriesData) {
             if (seriesData[0]['name'] == '累计确诊'){
                 seriesData[0]['name'] = '现存确诊';
                 seriesData[0]['value'] = seriesData[0]['value'] - seriesData[1]['value'] - seriesData[2]['value'];
             }
 
             let pie_option = {
                 title: {
                     top: 'top',
                     text: '病患类型比例',
                     subtext: area,
                     left: 'center'
                 },
                 toolbox: {
                     show: true,
                     // orient: 'vertical',
                     left: '20%',
                     top: 'top',
                     feature: {
                         // dataView: {readOnly: false},
                         // restore: {},
                         saveAsImage: {
                             pixelRatio: 5
                         }
                     }
                 },
                 label:{
                     formatter: '{d}%',
                 },
                 tooltip: {
                     trigger: 'item',
                     formatter: '{a} <br/>{b} : {c} ({d}%)'
                 },
                 color: ['#d48265', '#749f83','#c23531',  '#2f4554'],
                 legend: legend,
                 series: [
                     {
                         name: '病患类型',
                         type: 'pie',
                         radius: '45%',
                         center: ['50%', '60%'],
                         data: seriesData,
                         emphasis: {
                             itemStyle: {
                                 shadowBlur: 10,
                                 shadowOffsetX: 0,
                                 shadowColor: 'rgba(0, 0, 0, 0.5)'
                             }
                         }
                     }
                 ]
             };
             dom_id.hideLoading();
             dom_id.setOption(pie_option);
         })
         .fail(function () {
             $("#"+dom_id['_dom']['id']).hide()
         })
 }
 
 
 