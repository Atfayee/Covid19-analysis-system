import { Component } from "@angular/core";
import { EChartOption } from 'echarts';
import China from '../../../../assets/中华人民共和国.json';
import * as echarts from 'echarts';

@Component({
    selector: 'GDP',
    templateUrl: 'GDP.component.html',
    
    styleUrls: ['GDP.component.css']
})

export class GDPComponent {



    chinaoption: EChartOption = {
        title: {
            text: '国民生产总值（万元）',
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
                { max: 9016 },
                { min: 9016, max: 26181 },
                { min: 26181, max: 48598 },
                { min: 48598, max: 73129 },
                { min: 73129, label: "GDP最高" },
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
                    { name: "北京市", value: 36102.6 },
                    { name: "天津市", value: 14083.73 },
                    { name: "河北省", value: 36206.9 },
                    { name: "山西省", value: 17651.93 },
                    { name: "内蒙古自治区", value: 17360 },
                    { name: "辽宁省", value: 25115 },
                    { name: "吉林省", value: 12311.32 },
                    { name: "黑龙江省", value: 13698.5 },
                    { name: "上海市", value: 38680.6 },
                    { name: "江苏省", value: 102719 },
                    { name: "浙江省", value: 64613 },
                    { name: "安徽省", value: 38680.6 },
                    { name: "福建省", value: 43903.89 },
                    { name: "江西省", value: 25691.5 },
                    { name: "山东省", value: 73129 },
                    { name: "河南省", value: 54997.07 },
                    { name: "湖北省", value: 43443.46 },
                    { name: "湖南省", value: 41781.49 },
                    { name: "广东省", value: 110760.94 },
                    { name: "广西壮族自治区", value: 22156.69 },
                    { name: "海南省", value: 5532.39 },
                    { name: "重庆市", value: 25002.79 },
                    { name: "四川省", value: 48598.8 },
                    { name: "贵州省", value: 17826.56 },
                    { name: "云南省", value: 24500 },
                    { name: "西藏自治区", value: 1697.82 },
                    { name: "陕西省", value: 26181.86 },
                    { name: "甘肃省", value: 9016.7 },
                    { name: "青海省", value: 3005.92 },
                    { name: "宁夏回族自治区", value: 3021.55 },
                    { name: "新疆维吾尔自治区", value: 13797.58 },

                ]
            }
        ]
    };

    baroption: EChartOption = {
        yAxis: {
            type: 'category',
            data: ["西藏自治区",
                "青海省",
                "宁夏回族自治区",
                "海南省",
                "甘肃省",
                "吉林省",
                "黑龙江省",
                "新疆维吾尔自治区",
                "天津市",
                "内蒙古自治区",
                "山西省",
                "贵州省",
                "广西壮族自治区",
                "云南省",
                "重庆市",
                "辽宁省",
                "江西省",
                "陕西省",
                "北京市",
                "河北省",
                "上海市",
                "安徽省",
                "湖南省",
                "湖北省",
                "福建省",
                "四川省",
                "河南省",
                "浙江省",
                "山东省",
                "江苏省",
                "广东省"
            ]
        },
        xAxis: {
            type: 'value'

        },
        series: [

            {
                data: ["1697.82",
                    "3005.92",
                    "3021.55",
                    "5532.39",
                    "9016.7",
                    "12311.32",
                    "13698.5",
                    "13797.58",
                    "14083.73",
                    "17360",
                    "17651.93",
                    "17826.56",
                    "22156.69",
                    "24500",
                    "25002.79",
                    "25115",
                    "25691.5",
                    "26181.86",
                    "36102.6",
                    "36206.9",
                    "38680.6",
                    "38680.6",
                    "41781.49",
                    "43443.46",
                    "43903.89",
                    "48598.8",
                    "54997.07",
                    "64613",
                    "73129",
                    "102719",
                    "110760.94"
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
                { min: 0,max:2 },
                { min: 2, max: 6 },
                { min: 6, max: 14 },
                { min: 14, max: 27 },
                { min: 27, label: "GDP最高" },
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
        this.charts = echarts.init(document.getElementById('GDPcharts') as HTMLDivElement);
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