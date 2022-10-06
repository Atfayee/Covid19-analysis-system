/**
 * Created by yuyu on 2020/2/2.
 */

// 基于准备好的dom，初始化echarts实例
let bar_dom_id = echarts.init(document.getElementById('bar'));
let bar_cities_dom_id = echarts.init(document.getElementById('bar_cities'));
let bar_age_dom_id = echarts.init(document.getElementById('bar_age'));
let bar_ratio_dom_id = echarts.init(document.getElementById('bar_ratio'));
let bar_die_cure_ratio_dom_id = echarts.init(document.getElementById('bar_die_cure_ratio'));
let bar_density_dom_id = echarts.init(document.getElementById('bar_density'));


//设置容器高宽
resizeContainer('bar', 'secondBlock');
resizeContainer('bar_cities', 'secondBlock');
resizeContainer('bar_age', 'secondBlock');
resizeContainer('bar_ratio', 'secondBlock');
resizeContainer('bar_die_cure_ratio', 'secondBlock');
resizeContainer('bar_density', 'secondBlock');


draw_bar(bar_dom_id, '中国');
draw_cure_die_bar(bar_die_cure_ratio_dom_id, '中国');
draw_bar(bar_cities_dom_id, '中国', 'district_level');
draw_bar_age(bar_age_dom_id, '中国');
draw_bar_ratio(bar_ratio_dom_id, '中国', 'district_level');
draw_bar_density(bar_density_dom_id, '中国', 'district_level');

function draw_bar(dom_id, area, level = '') {
    $("#"+dom_id['_dom']['id']).show();
    dom_id.showLoading();
    $.getJSON('./data/data/bar/'+area+level+'.json')
        .done(function (data) {
            let title_text = '病患总数排名（'+area+'-下属一级行政区）';
            if (level == 'district_level'){
                title_text = '病患总数排名（各城市）';
            }
            // 累计确诊 --> 现存确诊
            for(let i = 0; i < data['data']['现存确诊'].length; i++){
                data['data']['现存确诊'][i] = data['data']['现存确诊'][i] - data['data']['死亡'][i] - data['data']['治愈'][i]
            }
            if (area == 'US' || area == 'Qatar' || area == 'Australia' || area == 'Canada' || area == "Japan" || area == "Korea" || area == "Italy"){
               for(let i = 0; i < data['areas'].length; i++){
                   data['areas'][i] = translation_dictionary[data['areas'][i]]
               }
            }

            // 指定图表的配置项和数据
            let bar_option = {
                title: {
                    text: title_text,
                    subtext: area,
                    left: 'center',
                    top: 'top',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                color: ['#2f4554','#d48265','#749f83', '#c23531'],
                legend: {
                    // orient: 'vertical',
                    left: 'center',
                    top: '15%',
                    data: ['现存确诊', '治愈', '死亡'],
                    selected: {
                        // '治愈': false,
                        // '死亡': false
                    }
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: data['areas'].length > 60 ? 20 : 100
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
                grid: {
                    left: '10%',
                    right: '10%',
                    bottom: '25%',
                    top: '23%',
                    containLabel: false
                },
                toolbox: {
                    show: true,
                    // orient: 'vertical',
                    right: '10%',
                    top: 'top',
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {
                            pixelRatio: 5
                        }
                    }
                },
                xAxis: {
                    axisLabel:{
                        interval:0,
                        formatter: function(value){
                            return value.split("").join('\n')
                        }
                    },
                    data: data['areas']
                },
                yAxis: {
                    type: 'value',
                    max: 'dataMax',
                    name: '人数'
                },
                series: [
                    {
                        name: '疑似',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['疑似']
                    },
                    {
                        name: '现存确诊',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['现存确诊'],
                        markPoint: {
                            data: [
                                {type: 'max', name: '', y: '30%'},
                            ]
                        }
                    },
                    {
                        name: '治愈',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['治愈']
                    },
                    {
                        name: '死亡',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['死亡']
                    },

                ]
            };
            // if (area == 'world')
            //     bar_option['yAxis']['max'] = 40000;
            if (area == '中国' )
                bar_option['yAxis']['max'] = 70000;
            else
                bar_option['yAxis']['max'] = 'dataMax';
            dom_id.hideLoading();
            dom_id.setOption(bar_option);
        })
        .fail(function () {
            $("#"+dom_id['_dom']['id']).hide();
        })
}

function draw_cure_die_bar(dom_id, area, level = '') {
    $("#"+dom_id['_dom']['id']).show();
    dom_id.showLoading();
    $.getJSON('./data/data/bar/'+area+level+'.json')
        .done(function (data) {
            if (area == 'US' || area == 'Qatar' || area == 'Australia' || area == 'Canada' || area == "Japan" || area == "Korea" || area == "Italy"){
                for(let i = 0; i < data['areas'].length; i++){
                    data['areas'][i] = translation_dictionary[data['areas'][i]]
                }
            }
            let sortJSON = [];
            let dataMax = -1;
            for (let i = 0; i < data['areas'].length; i++){
                if (data['data']['现存确诊'][i] > dataMax)
                    dataMax = data['data']['现存确诊'][i];
                sortJSON.push([data['data']['治愈率'][i], data['data']['死亡率'][i], data['data']['现存确诊'][i], data['areas'][i]])
            }

            let title_text = '治愈率-死亡率分布（'+area+'-下属一级行政区）';

            // 指定图表的配置项和数据
            let bar_option = {
                title: {
                    text: title_text,
                    left: 'center'
                },
                xAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    name: '治愈率'
                },
                yAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    scale: true,
                    name: '死亡率'
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
                grid:{
                    left: '10%'
                },
                visualMap: [
                    {
                        right: '5%',
                        top: '10%',
                        dimension: 2,
                        type : 'piecewise',
                        // orient: 'horizontal',
                        showLabel: true,
                        pieces: [
                            {min: 1000, color: "rgb(112,22,29)"}, // 不指定 max，表示 max 为无限大（Infinity）。
                            {min: 500, max: 999, color: 'rgb(203,42,47)'},
                            {min: 100, max: 499, color: 'rgb(229,90,78)'},
                            {min: 10, max: 99, color: 'rgb(245,158,131)'},
                            {min: 0, max: 9, color: 'rgb(253,235,207)'},
                        ],
                        text: ['颜色：确诊人数'],
                        // textGap: 30,
                        textStyle: {
                            color: '#060606'
                        }
                    },
                    {
                        right: 'right',
                        bottom: '15%',
                        dimension: 2,
                        min: 0,
                        max: dataMax > 2000 ? 2000 : dataMax,
                        itemWidth: 30,
                        itemHeight: 120,
                        calculable: true,
                        precision: 0.1,
                        text: ['圆形大小：确诊人数'],
                        textGap: 30,
                        textStyle: {
                            color: '#060606'
                        },
                        inRange: {
                            symbolSize: [10, 70]
                        },
                        outOfRange: {
                            symbolSize: [10, 70],
                            color: ['rgba(255,255,255,.2)']
                        },
                        controller: {
                            inRange: {
                                color: ['#c23531']
                            },
                            outOfRange: {
                                color: ['#444']
                            }
                        },

                    }],
                series: [ {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        }, {
                            offset: 1,
                            color: 'rgb(25, 183, 207)'
                        }])
                    },
                    label: {
                        normal: {
                            show: true,
                            position: '[-10,10]',
                            color: 'black',
                            textStyle: {
                                color: 'black',
                                backgroundColor: '#dedede',
                                borderRadius: 3,
                                padding: 0.5,
                            },
                            formatter: function (param) {
                                return param.data[3]
                            },
                        },
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                        }
                    },
                    data: sortJSON,
                    type: 'scatter',
                }]
            };

            dom_id.hideLoading();
            dom_id.setOption(bar_option);
        })
        .fail(function () {
            $("#"+dom_id['_dom']['id']).hide();
        })
}

function draw_bar_ratio(dom_id, area, level = '') {
    $("#"+dom_id['_dom']['id']).show();
    dom_id.showLoading();
    $.getJSON('./data/data/bar/ratio/'+area+level+'.json')
        .done(function (data) {
            // 累计确诊 --> 现存确诊
            for(let i = 0; i < data['data']['现存确诊'].length; i++){
                data['data']['现存确诊'][i] = data['data']['现存确诊'][i] - data['data']['死亡'][i] - data['data']['治愈'][i]
            }

            // 指定图表的配置项和数据
            let bar_option = {
                title: {
                    text: '感染按人口密度排名（感染数/每万人）',
                    subtext: area,
                    left: 'center',
                    top: 'top',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                color: ['#2f4554','#d48265','#749f83', '#c23531'],
                legend: {
                    // orient: 'vertical',
                    left: 'center',
                    top: '15%',
                    data: ['现存确诊', '治愈', '死亡','疑似'],
                    selected: {
                        '疑似': false,
                        // '治愈': false,
                        // '死亡': false
                    }
                },
                grid: {
                    left: '4%',
                    right: '10%',
                    bottom: '3%',
                    top: '23%',
                    containLabel: true
                },
                toolbox: {
                    show: true,
                    // orient: 'vertical',
                    right: '10%',
                    top: 'top',
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {
                            pixelRatio: 5
                        }
                    }
                },
                xAxis: {
                    axisLabel:{
                        interval:0,
                        formatter: function(value){
                            return value.split("").join('\n')
                        }
                    },
                    data: data['areas']
                },
                yAxis: {
                    type: 'value',
                    // max: 'dataMax',
                    name: '感染人数/每万人'
                },
                series: [
                    {
                        name: '疑似',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['疑似']
                    },
                    {
                        name: '现存确诊',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['现存确诊']
                    },
                    {
                        name: '治愈',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['治愈']
                    },
                    {
                        name: '死亡',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['死亡']
                    },

                ]
            };
            dom_id.hideLoading();
            dom_id.setOption(bar_option);
        })
        .fail(function () {
            $("#"+dom_id['_dom']['id']).hide();
        })
}

function draw_bar_density(dom_id, area, level = '') {
    $("#"+dom_id['_dom']['id']).show();
    dom_id.showLoading();
    $.getJSON('./data/data/bar/density/'+area+level+'.json')
        .done(function (data) {
            // 累计确诊 --> 现存确诊
            for(let i = 0; i < data['data']['现存确诊'].length; i++){
                data['data']['现存确诊'][i] = data['data']['现存确诊'][i] - data['data']['死亡'][i] - data['data']['治愈'][i]
            }
            // 指定图表的配置项和数据
            let bar_option = {
                title: {
                    text: '感染按面积密度排名（感染数/每万平方千米）',
                    subtext: area,
                    left: 'center',
                    top: 'top',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                color: ['#2f4554','#d48265','#749f83', '#c23531'],
                legend: {
                    // orient: 'vertical',
                    left: 'center',
                    top: '15%',
                    data: ['现存确诊', '治愈', '死亡','疑似'],
                    selected: {
                        '疑似': false,
                        // '治愈': false,
                        // '死亡': false
                    }
                },
                grid: {
                    left: '3%',
                    right: '10%',
                    bottom: '3%',
                    top: '23%',
                    containLabel: true
                },
                toolbox: {
                    show: true,
                    // orient: 'vertical',
                    right: '10%',
                    top: 'top',
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {
                            pixelRatio: 5
                        }
                    }
                },
                xAxis: {
                    axisLabel:{
                        interval:0,
                        formatter: function(value){
                            return value.split("").join('\n')
                        }
                    },
                    data: data['areas']
                },
                yAxis: {
                    type: 'value',
                    // max: 'dataMax',
                    name: '感染数/每万平方千米'
                },
                series: [
                    {
                        name: '疑似',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['疑似']
                    },
                    {
                        name: '现存确诊',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['现存确诊']
                    },
                    {
                        name: '治愈',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['治愈']
                    },
                    {
                        name: '死亡',
                        type: 'bar',
                        stack: '病例数',
                        data: data['data']['死亡']
                    },

                ]
            };
            dom_id.hideLoading();
            dom_id.setOption(bar_option);
        })
        .fail(function () {
            $("#"+dom_id['_dom']['id']).hide();
        })
}

function draw_bar_age(dom_id, area) {
    $("#"+dom_id['_dom']['id']).show();
    dom_id.showLoading();
    $.getJSON('./data/data/bar/age/'+area+'.json')
        .done(function (data) {
            // 指定图表的配置项和数据
            let bar_option = {
                title: {
                    text: '病患年龄分布',
                    subtext: area + '（注：部分数据可能缺失）',
                    left: 'center',
                    top: 'top',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                color: ['#2f4554','#d48265','#749f83', '#c23531'],
                legend: {
                    // orient: 'vertical',
                    left: '10%',
                    top: 'top',
                    data: ['男','女'],
                    selected: {
                        '女': false,
                    },
                    selectedMode: 'single'
                },
                toolbox: {
                    show: true,
                    // orient: 'vertical',
                    right: '10%',
                    top: 'top',
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {
                            pixelRatio: 5
                        }
                    }
                },
                xAxis: {
                    axisLabel:{
                        interval:0,
                        // formatter: function(value){
                        //     return value.split("").join('\n')
                        // }
                    },
                    type:'category',
                    data: data['age']
                },
                yAxis: {
                    type: 'value',
                    // max: 'dataMax',
                    name: '百分比',
                    axisLabel:{
                        formatter: function(value){
                            return (value*100)+'%';
                        }
                    }
                    // left:'10%'
                },
                series: [
                    {
                        name: '男',
                        type: 'bar',
                        // stack: '百分比',
                        data: data['data']['男']
                    },
                    {
                        name: '女',
                        type: 'bar',
                        // stack: '百分比',
                        data: data['data']['女']
                    }
                ]
            };
            dom_id.hideLoading();
            dom_id.setOption(bar_option);
        })
        .fail(function () {
            $("#"+dom_id['_dom']['id']).hide();
        })
}


