import { Component } from "@angular/core";
import { EChartOption } from 'echarts';
import China from '../../../../assets/中华人民共和国.json';
import * as echarts from 'echarts';
import '../../../../../node_modules/echarts/extension/bmap/bmap.js';

@Component({
    selector: 'institutions',
    templateUrl: './institutions.component.html',
    styleUrls: ['./institutions.component.css']
})

export class InstitutionsComponent {
    constructor() { }

    Options: any;

    data: any = [
        { name: "北京市", value: 10599 },
        { name: "天津市", value: 5838 },
        { name: "河北省", value: 86939 },
        { name: "山西省", value: 41140 },
        { name: "内蒙古自治区", value: 24549 },
        { name: "辽宁省", value: 34131 },
        { name: "吉林省", value: 25616 },
        { name: "黑龙江省", value: 20461 },
        { name: "上海市", value: 5897 },
        { name: "江苏省", value: 35747 },
        { name: "浙江省", value: 34400 },
        { name: "安徽省", value: 29391 },
        { name: "福建省", value: 28105 },
        { name: "江西省", value: 36716 },
        { name: "山东省", value: 84872 },
        { name: "河南省", value: 74644 },
        { name: "湖北省", value: 35447 },
        { name: "湖南省", value: 56042 },
        { name: "广东省", value: 55900 },
        { name: "广西壮族自治区", value: 33875 },
        { name: "海南省", value: 6127 },
        { name: "重庆市", value: 20922 },
        { name: "四川省", value: 82793 },
        { name: "贵州省", value: 28880 },
        { name: "云南省", value: 26626 },
        { name: "西藏自治区", value: 6939 },
        { name: "陕西省", value: 34983 },
        { name: "甘肃省", value: 26204 },
        { name: "青海省", value: 6407 },
        { name: "宁夏回族自治区", value: 4574 },
        { name: "新疆维吾尔自治区", value: 18158 }
    ];

    geoCoordMap: any = {
        "北京市": [116.42, 40.188],
        "天津市": [117.348, 39.284],
        "河北省": [116.137, 39.542],
        "山西省": [112.295, 37.572],
        "内蒙古自治区": [113.926, 44.09],
        "辽宁省": [122.601, 41.279],
        "吉林省": [126.195, 43.67],
        "黑龙江省": [127.774, 47.864],
        "上海市": [121.487, 31.209],
        "江苏省": [119.494, 32.965],
        "浙江省": [120.137, 29.181],
        "安徽省": [117.231, 31.824],
        "福建省": [118.007, 26.052],
        "江西省": [115.727, 27.611],
        "山东省": [118.181, 36.361],
        "河南省": [113.619, 33.882],
        "湖北省": [112.276, 30.974],
        "湖南省": [111.714, 27.607],
        "广东省": [113.418, 23.307],
        "广西壮族自治区": [108.793, 23.818],
        "海南省": [110.205, 18.064],
        "重庆市": [107.88, 30.055],
        "四川省": [102.695, 30.627],
        "贵州省": [106.878, 26.813],
        "云南省": [101.488, 24.973],
        "西藏自治区": [88.444, 31.489],
        "陕西省": [108.875, 35.191],
        "甘肃省": [100.609, 37.88],
        "青海省": [96.041, 35.67],
        "宁夏回族自治区": [106.168, 37.271],
        "新疆维吾尔自治区": [85.193, 41.117]
    };

    convertData(data: any) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = this.geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    }

    ngOnInit(): void {
        const charts = echarts.init(document.getElementById('institutionscharts') as HTMLDivElement);
        this.Options =
        {
            title: {
                text: '全国各省医疗机构数量',
                // subtext: 'data from PM25.in',
                // sublink: 'http://www.pm25.in',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            bmap: {
                center: [104.114129, 37.550339],
                zoom: 5,
                roam: true,
                mapStyle: {
                    styleJson: [{
                        'featureType': 'water',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'land',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#f3f3f3'
                        }
                    }, {
                        'featureType': 'railway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'highway',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#fdfdfd'
                        }
                    }, {
                        'featureType': 'highway',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#fefefe'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#fefefe'
                        }
                    }, {
                        'featureType': 'poi',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'green',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'subway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'manmade',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'local',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'boundary',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#fefefe'
                        }
                    }, {
                        'featureType': 'building',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'label',
                        'elementType': 'labels.text.fill',
                        'stylers': {
                            'color': '#999999'
                        }
                    }]
                }
            },
            series: [
                {
                    name: '医疗机构数',
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: this.convertData(this.data),
                    symbolSize: function (val) {
                        return val[2] / 1500;
                    },
                    encode: {
                        value: 2
                    },
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'bmap',
                    data: this.convertData(this.data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function (val) {
                        return val[2] / 1500;
                    },
                    encode: {
                        value: 2
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    },
                    zlevel: 1
                }
            ]
        };
        charts.setOption(this.Options, true);
        window.addEventListener('resize', () => {
            charts.resize();
        });
    }
}
