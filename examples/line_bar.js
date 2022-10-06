/**
 * Created by yuyu on 2020/2/3.
 */

// 基于准备好的dom，初始化echarts实例
let myLineBar = echarts.init(document.getElementById('line_bar'));

//设置容器高宽
resizeContainer('line_bar', 'secondBlock');
var currentLineChartArea = null;
var SimilaritySearchTranslation = {
    '湖北': '湖北',
    '云南': '云南',
    '陕西': '陕西',
    '河南': '河南',
    '江苏': '江苏',
    '河北': '河北',
    '辽宁': '辽宁',
    '广东': '广东',
    '内蒙古': '内蒙古',
    '贵州': '贵州',
    '宁夏': '宁夏',
    '安徽': '安徽',
    '湖南': '湖南',
    '浙江': '浙江',
    '江西': '江西',
    '新疆': '新疆',
    '海南': '海南',
    '四川': '四川',
    '福建': '福建',
    '山东': '山东',
    '吉林': '吉林',
    '黑龙江': '黑龙江',
    '广西': '广西',
    '上海': '上海',
    '天津': '天津',
    '重庆': '重庆',
    '山西': '山西',
    '甘肃': '甘肃',
    '北京': '北京',
    '青海': '青海',
    '西藏': '西藏',
    'world': 'world',
    'US': '美国',
    'Qatar': '卡塔尔',
    'Canada': '加拿大',
    'Australia': '澳大利亚',
    'Japan': '日本',
    'Korea': '韩国',
    'Italy': '意大利',
    'China': '中国',
    '中国': '中国'
};

draw_lineBar('中国');

function draw_lineBar(area) {
    $("#"+myLineBar['_dom']['id']).show();
    myLineBar.showLoading();
    currentLineChartArea = SimilaritySearchTranslation[area];
    console.log('lineBar: ', area);
    $.getJSON('./data/data/lineBar/'+area+'.json')
        .done(function (seriesData) {
            if (area == '中国'){
                let year = seriesData[0]['date'].split('-')[0];
                seriesData.forEach(element => {element['date']=element['date'].slice(5,element['date'].length)});
                let lineBar_option =  {
                    title: {
                        text: '每日新增情况',
                        subtext: area+'（'+year+'）',
                        left: '40%'
                    },
                    toolbox: {
                        show: true,
                        // orient: 'vertical',
                        left: '13%',
                        itemSize: 35,
                        itemGap: 20,
                        // top: 'center',
                        feature: {
                            // magicType: {
                            //     type: ['line', 'bar'],
                            // },
                            // dataView: {readOnly: false},
                            // restore: {},
                            saveAsImage: {
                                pixelRatio: 5
                            },
                            mySimilaritySearch: {
                                show: true,
                                title: '查找相似趋势',
                                icon: 'image:///images/TREND RESEARCH.svg',
                                onclick: function (){
                                    similarity_search(myLineBar)
                                }
                            },
                        }
                    },
                    color: ['#d48265','#749f83','#c23531','#d48265','#749f83','#c23531','#d48265','#749f83','#c23531'],
                    grid:{
                        left:'7%',
                        right:'20%'
                    },
                    legend: {
                        right: '5%',
                        top: 'top',
                        orient: 'vertical',
                        type: 'scroll',
                        selected: {
                            '重症（全国）': false,
                            '治愈（全国）': false,
                            '死亡（全国）': false,
                            "确诊（湖北）": false,
                            "治愈（湖北）": false,
                            "死亡（湖北）": false,
                            "确诊（非湖北）": false,
                            "治愈（非湖北）": false,
                            "死亡（非湖北）": false
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    dataZoom: [{
                        type: 'inside',
                        start: 0,
                        end: 100
                    }, {
                        start: 0,
                        end: 10,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }],
                    dataset: {
                        dimensions: [
                            'date',
                            "确诊（全国）", "治愈（全国）", "死亡（全国）",
                            "确诊（湖北）", "治愈（湖北）", "死亡（湖北）",
                            "确诊（非湖北）", "治愈（非湖北）", "死亡（非湖北）"
                        ],
                        // dimensions: [
                        //     'date', '确诊','重症','治愈', '死亡'
                        // ],
                        source: seriesData
                    },
                    xAxis: {
                        type: 'category',
                        axisLabel:{
                            interval: 'auto'
                        }
                    },
                    yAxis: {
                        name: '人数'
                    },
                    // Declare several bar series, each will be mapped
                    // to a column of dataset.source by default.
                    series: [
                        {type: 'line', smooth: true, },
                        {type: 'line', smooth: true,},
                        {type: 'line', smooth: true,},
                        {type: 'line', smooth: true, symbol: 'diamond'},
                        {type: 'line', smooth: true, symbol: 'diamond'},
                        {type: 'line', smooth: true, symbol: 'diamond'},
                        {type: 'line', smooth: true, symbol: 'triangle'},
                        {type: 'line', smooth: true, symbol: 'triangle'},
                        {type: 'line', smooth: true, symbol: 'triangle'}
                        // {type: 'line', smooth: true,lineStyle:{type: 'dotted'}}
                    ]
                };
                myLineBar.hideLoading();
                myLineBar.clear();
                myLineBar.setOption(lineBar_option);
            }
            else{
                console.log('seriesData: ', seriesData);
                let year = seriesData[0]['date'].split('-')[0];
                seriesData.forEach(element => {element['date']=element['date'].slice(5,element['date'].length)});
                let lineBar_option =  {
                    title: {
                        text: '每日新增情况',
                        subtext: area+'（'+year+'）',
                        left: '40%'
                    },
                    toolbox: {
                        show: true,
                        // orient: 'vertical',
                        left: '13%',
                        itemSize: 35,
                        itemGap: 20,
                        // top: 'center',
                        feature: {
                            // magicType: {
                            //     type: ['line', 'bar'],
                            // },
                            // dataView: {readOnly: false},
                            // restore: {},
                            saveAsImage: {
                                pixelRatio: 5
                            },
                            mySimilaritySearch: {
                                show: true,
                                title: '查找相似趋势',
                                icon: 'image:///images/TREND RESEARCH.svg',
                                onclick: function (){
                                    similarity_search(myLineBar)
                                }
                            },
                        }
                    },
                    color: ['#d48265','#749f83','#c23531','#2f4554'],
                    grid:{
                        left:'7%',
                        right:'15%'
                    },
                    legend: {
                        right: '5%',
                        top: 'top',
                        orient: 'vertical',
                        type: 'scroll',
                        selected: {
                            '疑似': false,
                            '治愈': false,
                            '死亡': false,
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    dataZoom: [{
                        type: 'inside',
                        start: 0,
                        end: 100
                    }, {
                        start: 0,
                        end: 10,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }],
                    dataset: {
                        dimensions: ['date', '确诊','治愈', '死亡', '疑似'],
                        source: seriesData
                    },
                    xAxis: {
                        type: 'category',
                        axisLabel:{
                            interval: 'auto'
                        }
                    },
                    yAxis: {
                        name: '人数'
                    },
                    // Declare several bar series, each will be mapped
                    // to a column of dataset.source by default.
                    series: [
                        {type: 'line', smooth: true,},
                        {type: 'line', smooth: true,},
                        {type: 'line', smooth: true,},
                        {type: 'line', smooth: true,},
                    ]
                };
                myLineBar.hideLoading();
                myLineBar.clear();
                myLineBar.setOption(lineBar_option);
            }

        })
        .fail(function () {
            $("#"+myLineBar['_dom']['id']).hide();
        })

}


function similarity_search() {
    console.log('call similarity search');
    console.log(currentLineChartArea);
    if (currentLineChartArea != null){
        let similarTrend = echarts.init(document.getElementById('similarity_lines'));
        similarTrend.clear();
        similarTrend.showLoading();

        $('#ModalSimilaritySearch').modal({backdrop: 'static', keyboard: false}, 'show');
        $.ajax({
            type: "GET",
            url: "/similarity_search",
            data: {
                area: currentLineChartArea
            },
            dataType: "json",
            success: function (data) {
                // TODO
                data = data['result'].split('\n');
                data.pop();
                draw_similarity_trend(data, similarTrend);
            }
        });
    }else{
        //TODO  ERROR alert here
    }
}

function draw_similarity_trend(data, similarTrend) {
    // process data here
    let legend_data = [];
    let x_axis = [];
    let series_data = [];
    for (let i = 0; i < data.length; i++){
        // TODO Draw data here
        let each_line = JSON.parse(data[i]);
        x_axis = each_line['x_axis'];
        legend_data.push(each_line['name']);
        // legend_data.push(each_line['name']);
        series_data.push({
            // name: translation_dictionary[each_line['name']],
            name: each_line['name'],
            type: 'line',
            data: each_line['y_axis']
        })
    }
    let option = {
        // title: {
        //     text: 'Similar Trend'
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: legend_data,
            top: '10%'
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        ],
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: x_axis
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: series_data
    };
    similarTrend.setOption(option);
    similarTrend.hideLoading();
}