import { Component } from "@angular/core";
import { EChartOption } from 'echarts';
import China from '../../../../assets/中华人民共和国.json';
import * as echarts from 'echarts';
import { precipitationService } from "./precipitation.service";
import { center } from "@turf/turf";

@Component({
    selector: 'precipitation',
    templateUrl: './precipitation.component.html',
    styleUrls: ['./precipitation.component.css']
})

export class PrecipitationComponent {

    chinaoption: EChartOption = {
        backgroundColor: '#efefef',
        tooltip: {
            show: true,
            trigger: 'item',
            triggerOn: 'mousemove',
            padding: 0,
            enterable: true,
            transitionDuration: 1,
            textStyle: {
                color: '#000',
            },
            formatter: '<div style="color: #fff; background: rgba(22, 80, 158, 0.8); border: 1px solid rgba(7,166,255,0.7);">{a}</br>{b}:{c}</div>',
        },
        title: {
            text: '全国各省份年平均降水与新冠致死率',
            left: 'center'
        },
        toolbox: {
            show: true,
            left: 'left',
            top: 'top',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: [{
            type: 'continuous',
            color: ['#00467f', '#a5cc82'],
            text: ['高', '低'],
            max: 140000,
            min: 3000,
            bottom: 60,
            seriesIndex: [0, 3,],
        }],
        geo: [
            {
                show: true,
                map: 'China',
                left: 55,
                top: 100,
                label: {
                    normal: {
                        show: true,
                        color: '#fff',
                    },
                    emphasis: {
                        show: true,
                        color: '#000000',
                        fontSize: 14,
                    },
                },
                roam: true,
                // scaleLimit: {
                //     max: 15,
                //     min: 1.2,
                // },
                zoom: 1.2,
                itemStyle: {
                    normal: {
                        // color: document.getElementById('img1'),
                        // repeat: 'repeat',
                        borderWidth: 1,
                        borderColor: '#08a4db',
                        areaColor: '#2f639a',
                    },
                    emphasis: {
                        areaColor: '#ffffff',
                    },
                },
            },
        ],//geo
        grid: {
            left: '60%',
            bottom: '10%',
            top: '50%',
        },//grid
        yAxis: {
            name: '降水量/mm',
            type: 'value',
            scale: true,
            min: 0,
            boundaryGap: true,
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: true,
                interval: 2,
            },
            axisLabel: {
                margin: 20,
                color: '#242424',
            },
        },//xAxis
        xAxis: {
            name: '省/市',
            position: 'top',
            type: 'category',
            nameGap: 15,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#242424',
                },
            },
            boundaryGap: true,
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#242424',
                },
                alignWithLabel: true,
            },

            axisLabel: {
                show: false,
                color: '#242424',
            },
            data: this.precipitationService.getCityNames(this.precipitationService.precipitationData),
        },//yAxis
        series: [
            {
                name: '平均降水量',
                type: 'map',
                map: 'China',
                geoIndex: 0,
                aspectScale: 0.75,// 长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                roam: 'scale',
                itemStyle: {
                    normal: {
                        // color:document.getElementById('img1'),
                        // repeat: 'repeat',
                        areaColor: '#031525',
                        borderColor: '#3b5077',
                    },
                    emphasis: {
                        areaColor: '#2b91b7',
                    },
                },
                animation: false,
                data: this.precipitationService.precipitationData,
            },
            {
                name: '平均降水量等线',
                type: 'lines',
                symbol: 'diamond',
                symbolSize: 10,
                coordinateSystem: 'geo',
                lineStyle: {
                    color: '#fff',
                    width: 5,
                    type: 'solid',
                },
                polyline: true,
                label: {
                    formatter: '{b}:</b>800mm',
                },
                data: this.precipitationService.precipitationLine800
            },
            {
                name: '平均降水量等线',
                type: 'lines',
                symbol: 'diamond',
                symbolSize: 10,
                coordinateSystem: 'geo',
                lineStyle: {
                    color: '#fff',
                    width: 5,
                    type: 'solid',
                },
                itemStyle: {
                    emphasis: {
                        label: {
                            formatter: '{b}:</b>400mm',
                        },
                    }
                },
                polyline: true,
                data: this.precipitationService.precipitationLine400,
            },
            {
                name: '平均降水量',
                zlevel: 1.5,
                type: 'bar',
                barMaxWidth: 30,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#242424',
                        barBorderRadius: [255, 30, 200, 1],
                    },
                },
                data: this.precipitationService.precipitationData,
            },
            {
                type: 'lines',
                zlevel: 5,
                effect: {
                    show: false,
                    symbolSize: 5,
                },
                lineStyle: {
                    width: 17,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#00F5FF',
                            },
                            {
                                offset: 0.5,
                                color: '#00F5FF'
                            },
                            {
                                offset: 0.5,
                                color: '#00C5CD'
                            },
                            {
                                offset: 1,
                                color: '#00C5CD'
                            },
                            {
                                offset: 1,
                                color: '#00F5FF'
                            },
                        ],
                        global: false,
                    },
                    opacity: 1,
                    curveness: 0,
                },
                label: {
                    show: false,
                    position: 'end',
                },
                silent: true,
                data: this.precipitationService.lineData(),
            },
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                geoIndex: 0,
                zlevel: 5,
                label: {
                    show: false,
                    // position: 'bottom',
                    // formatter:'{b}',
                    // padding: [4, 8],
                    // backgroundColor: '#003f5e',
                    // borderRadius: 5,
                    // borderColor: '#67f0ef',
                    // borderWidth: 1,
                    // color: '#67f0ef',
                },
                symbol: 'diamond',
                symbolSize: [17, 8],
                itemStyle: {
                    color: '#00FFFF',
                    opacity: 1,
                },
                silent: true,
                data: this.precipitationService.scatterData(),
            },
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                geoIndex: 0,
                zlevel: 4,
                label: {
                    show: false,
                    // position: 'bottom',
                    // formatter: '{b}',
                    // color: '#fff',
                    // fontSize: 12,
                    // distance: 10,
                },
                symbol: 'diamond',
                symbolSize: [17, 8],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#00F5FF',
                            },
                            {
                                offset: 0.5,
                                color: '#00F5FF',
                            },
                            {
                                offset: 0.5,
                                color: '#00C5CD',
                            },
                            {
                                offset: 1,
                                color: '#00C5CD',
                            },
                            {
                                offset: 1,
                                color: '#00F5FF',
                            },

                        ],
                        global: false
                    },
                    opacity: 1,
                },
                silent: true,
                data: this.precipitationService.scatterData2(),
            },
            {
                name: '新冠致死率',
                type: 'pie',
                minAngle: 15,
                roseType: 'radius',
                layoutSize: 5,
                center: ['75%', '20%'],
                radius: ['20%', '40%'],
                itemStyle: {
                    barBorderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2,
                    color: '#00C5CD',
                },
                avoidLabelOverlap: false,
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold',
                        formatter: '{b}: {d}%',
                        color:'	#00CDCD',
                    },
                    itemStyle: {
                        color: '#00CDCD',
                    },
                },
                data: this.precipitationService.deadData,
            }
        ],
    };



    constructor(private precipitationService: precipitationService) {

    }

    ngOnInit(): void {
        const charts1 = echarts.init(document.getElementById('precipitationcharts') as HTMLDivElement);
        echarts.registerMap("China", China);
        charts1.setOption(this.chinaoption, true);
        window.addEventListener('resize', () => {
            charts1.resize();
        });
    }
}
