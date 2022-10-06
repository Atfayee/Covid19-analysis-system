import { Component } from "@angular/core";
import { EChartOption } from 'echarts';
import China from '../../../../assets/中华人民共和国.json';
import * as echarts from 'echarts';

@Component({
    selector: 'PPGDP',
    templateUrl: 'PPGDP.component.html',

    styleUrls: ['PPGDP.component.css']
})

export class PPGDPComponent {



    chinaoption: EChartOption = {
        title: {
            text: '人均国民生产总值（元）',
            // subtext: '数据来源 GISAID',
            // sublink: 'https://www.gisaid.org/',
            left: 'center'
        },

        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2
        },
        visualMap: [{
            type: 'piecewise',
            pieces: [
                { max: 48528 },
                { min: 48528, max: 66234 },
                { min: 66234, max: 87896 },
                { min: 87896, max: 121205 },
                { min: 121205, label: "人均GDP最高" },
            ],

            left: 'right',
            inRange: {
                color: [
                    '#2892c7',
                    '#a0c29b',
                    '#fafa64',
                    '#fa8d34',
                    '#e81014',
                ]
            },
        }],
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'GDP',
                type: 'map',
                roam: true,
                map: 'China',
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    { name: "甘肃省", value:36038.21305},
                    { name: "宁夏回族自治区", value:41950.5088},
                    { name: "黑龙江省", value:43009.30032},
                    { name: "广西壮族自治区", value:44201.28201},
                    { name: "贵州省", value:46228.13024},
                    { name: "西藏自治区", value:46539.84266},
                    { name: "河北省", value:48528.06053},
                    { name: "山西省", value:50555.97472},
                    { name: "青海省", value:50741.75927},
                    { name: "吉林省", value:51140.64858},
                    { name: "新疆维吾尔自治区", value:53370.7097},
                    { name: "海南省", value:54878.1141},
                    { name: "河南省", value:55348.24409},
                    { name: "江西省", value:56853.897},
                    { name: "四川省", value:58080.52325},
                    { name: "辽宁省", value:58967.29357},
                    { name: "云南省", value:59452.63247},
                    { name: "湖南省", value:62881.44408},
                    { name: "安徽省", value:63382.58741},
                    { name: "陕西省", value:66234.56364},
                    { name: "山东省", value:72028.79402},
                    { name: "内蒙古自治区", value:72185.48843},
                    { name: "湖北省", value:75223.43989},
                    { name: "重庆市", value:78001.7033},
                    { name: "广东省", value:87896.78104},
                    { name: "浙江省", value:100070.3325},
                    { name: "天津市", value:101570.1778},
                    { name: "福建省", value:105690.4167},
                    { name: "江苏省", value:121205.1973},
                    { name: "上海市", value:155525.5651},
                    { name: "北京市", value:164904.0485},
                    

                ]
            }
        ]
    };

    baroption: EChartOption = {
        yAxis: {
            type: 'category',
            data: ["甘肃省",
            "宁夏回族自治区",
            "黑龙江省",
            "广西壮族自治区",
            "贵州省",
            "西藏自治区",
            "河北省",
            "山西省",
            "青海省",
            "吉林省",
            "新疆维吾尔自治区",
            "海南省",
            "河南省",
            "江西省",
            "四川省",
            "辽宁省",
            "云南省",
            "湖南省",
            "安徽省",
            "陕西省",
            "山东省",
            "内蒙古自治区",
            "湖北省",
            "重庆市",
            "广东省",
            "浙江省",
            "天津市",
            "福建省",
            "江苏省",
            "上海市",
            "北京市",
            
            ]
        },
        xAxis: {
            type: 'value'

        },
        series: [

            {
                data: ["36038.21305",
                    "41950.5088",
                    "43009.30032",
                    "44201.28201",
                    "46228.13024",
                    "46539.84266",
                    "48528.06053",
                    "50555.97472",
                    "50741.75927",
                    "51140.64858",
                    "53370.7097",
                    "54878.1141",
                    "55348.24409",
                    "56853.897",
                    "58080.52325",
                    "58967.29357",
                    "59452.63247",
                    "62881.44408",
                    "63382.58741",
                    "66234.56364",
                    "72028.79402",
                    "72185.48843",
                    "75223.43989",
                    "78001.7033",
                    "87896.78104",
                    "100070.3325",
                    "101570.1778",
                    "105690.4167",
                    "121205.1973",
                    "155525.5651",
                    "164904.0485",

                ],
                type: 'bar',

                // showBackground: true,
                // ser-this.baroption.backgroundColor='rgba(180,180,180,0.2)'
                // backgroundStyle: {
                // color: 'rgba(180, 180, 180, 0.2)'
                // type: 'bar',

                //   showBackground: true,
                //   backgroundStyle: {
                //     color: 'rgba(180, 180, 180, 0.2)'
                //   }
            }
        ],
        visualMap: [{
            type: 'piecewise',
            pieces: [
                { min: 0, max: 2 },
                { min: 2, max: 6 },
                { min: 6, max: 14 },
                { min: 14, max: 27 },
                { min: 27, label: "人均GDP最高" },
            ],

            left: 'right',
            inRange: {
                color: [
                    '#2892c7',
                    '#a0c29b',
                    '#fafa64',
                    '#fa8d34',
                    '#e81014',
                ]
            },
        }],
    };

    private currentOption;
    private charts;

    ngOnInit(): void {
        echarts.registerMap("China", China);
        this.charts = echarts.init(document.getElementById('PPGDPcharts') as HTMLDivElement);
        this.currentOption = this.chinaoption;
        this.charts.setOption(this.currentOption);
        window.addEventListener('resize', () => {
            this.charts.resize();
        });
    }

    public set() {
        this.currentOption = this.currentOption == this.chinaoption ? this.baroption : this.chinaoption;
        this.charts.setOption(this.currentOption, true);
    }
}