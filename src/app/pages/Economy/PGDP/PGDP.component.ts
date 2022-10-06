import { Component } from "@angular/core";
import { EChartOption } from 'echarts';
import China from '../../../../assets/中华人民共和国.json';
import * as echarts from 'echarts';

@Component({
    selector: 'PGDP',
    templateUrl: 'PGDP.component.html',

    styleUrls: ['PGDP.component.css']
})

export class PGDPComponent {



    chinaoption: EChartOption = {
        title: {
            text: '居民消费价格指数',
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
                { max: 101.7 },
                { min: 101.7, max: 102.3 },
                { min: 102.3, max: 102.6 },
                { min: 102.6, max: 102.8 },
                { min: 102.8, label: "居民消费价格最高" },
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
                    { name: "北京市", value: 101.7 },
                    { name: "天津市", value: 102 },
                    { name: "河北省", value: 102.1 },
                    { name: "山西省", value: 102.9 },
                    { name: "内蒙古自治区", value: 101.9 },
                    { name: "辽宁省", value: 102.4 },
                    { name: "吉林省", value: 102.3 },
                    { name: "黑龙江省", value: 102.3 },
                    { name: "上海市", value: 101.7 },
                    { name: "江苏省", value: 102.5 },
                    { name: "浙江省", value: 102.3 },
                    { name: "安徽省", value: 102.7 },
                    { name: "福建省", value: 102.2 },
                    { name: "江西省", value: 102.6 },
                    { name: "山东省", value: 102.8 },
                    { name: "河南省", value: 102.8 },
                    { name: "湖北省", value: 102.7 },
                    { name: "湖南省", value: 102.3 },
                    { name: "广东省", value: 102.6 },
                    { name: "广西壮族自治区", value: 102.8 },
                    { name: "海南省", value: 102.3 },
                    { name: "重庆市", value: 102.3 },
                    { name: "四川省", value: 103.2 },
                    { name: "贵州省", value: 102.6 },
                    { name: "云南省", value: 103.6 },
                    { name: "西藏自治区", value: 102.2 },
                    { name: "陕西省", value: 102.5 },
                    { name: "甘肃省", value: 102 },
                    { name: "青海省", value: 102.6 },
                    { name: "宁夏回族自治区", value: 101.5 },
                    { name: "新疆维吾尔自治区", value: 101.5 },


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
            type: 'value',
            min: 101
        },
        series: [

            {
                data: [
                    "101.5",
                    "101.5",
                    "101.7",
                    "101.7",
                    "101.9",
                    "102",
                    "102",
                    "102.1",
                    "102.2",
                    "102.2",
                    "102.3",
                    "102.3",
                    "102.3",
                    "102.3",
                    "102.3",
                    "102.3",
                    "102.4",
                    "102.5",
                    "102.5",
                    "102.6",
                    "102.6",
                    "102.6",
                    "102.6",
                    "102.7",
                    "102.7",
                    "102.8",
                    "102.8",
                    "102.8",
                    "102.9",
                    "103.2",
                    "103.6",

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
                { min: 27, label: "居民消费价格指数最高" },
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
        this.charts = echarts.init(document.getElementById('PGDPcharts') as HTMLDivElement);
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