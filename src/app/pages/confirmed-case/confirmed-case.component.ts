import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts';
import { ConfirmedCaseService } from './confirmed-case.service';

@Component({
  selector: 'app-confirmed-case',
  templateUrl: './confirmed-case.component.html',
  styleUrls: ['./confirmed-case.component.css']
})
export class ConfirmedCaseComponent implements OnInit {
  private comfirmedcaseOption: EChartOption;
  private comfirmedcaseOption2: EChartOption;
  private comfirmedcaseOption3: EChartOption;


  constructor(private service: ConfirmedCaseService) { }

  ngOnInit(): void {
    this.initEchart();
  }

  changeType(): void {
    const button = document.getElementById('type');
    if (this.service.chartType == "culumative") {
      this.service.chartType = "daily";
      button.innerText = "daily";
    }
    else {
      this.service.chartType = "culumative";
      button.innerText = "culumative";
    }
    this.comfirmedcaseOption2.series.forEach((element, index) => {
      element.data = this.service.getValue(index, this.service.chartType, this.service.interval);
    });
    const charts = echarts.init(document.getElementById('confirmedcasecharts2') as HTMLDivElement);
    charts.setOption(this.comfirmedcaseOption2);
  };
  changeInterval(): void {
    const button = document.getElementById('interval');
    if (this.service.interval == 1) {
      this.service.interval = 3;
      button.innerText = 'seasonly';
    }
    else {
      this.service.interval = 1;
      button.innerText = 'monthly';
    }
    this.comfirmedcaseOption2.series.forEach((element, index) => {
      element.data = this.service.getValue(index, this.service.chartType, this.service.interval);
    });
    this.comfirmedcaseOption2.xAxis[0].data = this.service.getDate(1, this.service.chartType, this.service.interval);
    const charts = echarts.init(document.getElementById('confirmedcasecharts2') as HTMLDivElement);
    charts.setOption(this.comfirmedcaseOption2);
  }
  // changeExtent(): void {
  //   const button = document.getElementById('extent');
  //   if (this.service.extent == 'region') {
  //     button.innerText = 'global';
  //     this.service.extent = 'global';
  //     const charts = echarts.init(document.getElementById('confirmedcasecharts2') as HTMLDivElement);
  //     for (var i = 0; i < this.comfirmedcaseOption2.series.length; i++) {
  //       this.comfirmedcaseOption2.series[i].data = [];
  //       this.comfirmedcaseOption2.series[i].name = "";
  //     }
  //     charts.setOption(this.comfirmedcaseOption2, true);
  //     this.comfirmedcaseOption3 = {
  //       legend: {
  //         data: ['global'],
  //       },
  //       toolbox: {
  //         feature: {
  //           magicType: {
  //             type: ['stack']
  //           },
  //           dataView: {},
  //           saveAsImage: {
  //             pixelRatio: 2,
  //           }
  //         },//feature
  //       },//toolbox
  //       tooltip: {},
  //       xAxis: {
  //         data: this.service.getDate(0, this.service.chartType, this.service.interval),
  //         splitLine: {
  //           show: false
  //         },
  //       },//xAxis
  //       yAxis: {
  //         show: false,
  //       },
  //       series: [{
  //         name: 'global',
  //         type: 'bar',
  //         data: this.service.getValue(0, this.service.chartType, this.service.interval),
  //         animationDelay: function (idx) {
  //           return idx * 5;
  //         }
  //       }]
  //     };
  //     charts.setOption(this.comfirmedcaseOption3);
  //   } else {
  //     // this.service.extent=='global'
  //     button.innerText = 'region';
  //     this.service.extent = 'region';
  //     const charts = echarts.init(document.getElementById('confirmedcasecharts2') as HTMLDivElement);
  //     charts.setOption(this.service.comfirmedcaseOption2);
  //   }
  // }
  private initEchart() {
    const charts = echarts.init(document.getElementById('confirmedcasecharts') as HTMLDivElement);
    this.comfirmedcaseOption = {
      title: {
        text: 'Situation by WHO Region',
        textStyle: {
          color: '#474747',
          fontFamily: 'Helvetica',
          fontSize: 30,
          fontWeight: 'bold'
        },
        left: '5%',
        top: "5%"
      },//title
      legend: {
        data: ['完成率'],
        icon: 'circle',
        bottom: 10,
        textStyle: {
          color: '#ffffff',
        },
      },//legend
      grid: {
        left: '5%',
        right: '55%',
        bottom: '60%',
        top: '20%',
        containLabel: true,
      },//grid
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: function (param) {
          return param[0].name + "</br>" + "<span style='display:inline-block;margin-right:5px;border-radius:10px:width:9px:height:9px;background-color:rgba(36,207,233,0.9)'></span>" + param[0].seriesName + ':' + param[0].value;
        },
      },//tooltip
      //backgroundColor: 'rgb(20,28,52)',
      xAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },//xAxis
      yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
          show: true,
          color: '#474747',
          // fontWeight:'bold',
          fontSize: 18,
          fontFamily: 'Helvetica',
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: this.service.className,
      },
      {
        type: 'category',
        inverse: true,
        show: true,
        axisLabel: {
          show: true,
          color: '#474747',
          fontFamily: 'Helvetica',
          fontSize: 15,
          formatter: function (value) {
            return value;
          },
        },
        axisTick: 'none',
        data: this.service.data,
      }],//yAxis
      series: [{
        name: '确诊人数',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 0,
            color: (params) => {
              return this.service.colorList[params.dataIndex];
            }
          },
        },//itemStyle,
        barWidth: 20,
        data: this.service.data,
      },
      ],//series
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
    charts.setOption(this.comfirmedcaseOption, true);

    const charts2 = echarts.init(document.getElementById('confirmedcasecharts2') as HTMLDivElement);
    this.comfirmedcaseOption2 = {
      color: ['#80ffa5', '#00ddff', '#37a2ff', '#ff0087', '#ffbf00', '#ff04231'],
      // title: {
      //   text: 'Gradient Stacked Area Chart',
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },//tooltip
      legend: {
        data: ['Europe', 'Eastern Mediterranean', 'South-East Asia', 'Americas', 'Africa', 'Western Pacific'],
        top: "10%",
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        },
      },//toolbox
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true,
      },//grid
      xAxis: [{
        show: false,
        type: 'category',
        boundaryGap: false,
        data: this.service.getDate(1, this.service.chartType, this.service.interval),
      }],//xAxis
      yAxis: [
        {
          show: false,
          type: 'value',
          boundaryGap: false,
        }
      ],//yaXis
      series: [
        {
          name: 'Europe',
          type: 'line',
          stack: 'total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.8,
                color: 'rgb(128,255,165)'
              },
              {
                offset: 1,
                color: 'rgb(1,191,236)',
              }
            ])
          },//areaStyle
          emphasis: {
            // focus:'series',
          },
          data: this.service.getValue(1, this.service.chartType, this.service.interval),
        },


        {
          name: 'Eastern Mediterranean',
          type: 'line',
          stack: 'total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.8,
                color: 'rgb(0,221,255)'
              },
              {
                offset: 1,
                color: 'rgb(77,19,255)',
              }
            ])
          },//areaStyle
          emphasis: {
            // focus:'series',
          },
          data: this.service.getValue(2, this.service.chartType, this.service.interval),
        },
        {
          name: 'South-East Asia',
          type: 'line',
          stack: 'total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.8,
                color: 'rgb(55,162,255)'
              },
              {
                offset: 1,
                color: 'rgb(116,21,219)',
              }
            ])
          },//areaStyle
          emphasis: {
            // focus:'series',
          },
          data: this.service.getValue(3, this.service.chartType, this.service.interval),
        },
        {
          name: 'Americas',
          type: 'line',
          stack: 'total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.8,
                color: 'rgb(255,0,135)'
              },
              {
                offset: 1,
                color: 'rgb(135,0,157)',
              }
            ])
          },//areaStyle
          emphasis: {
            // focus:'series',
          },
          data: this.service.getValue(4, this.service.chartType, this.service.interval),
        },
        {
          name: 'Africa',
          type: 'line',
          stack: 'total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.8,
                color: 'rgb(255,191,0)'
              },
              {
                offset: 1,
                color: 'rgb(224,62,76)',
              }
            ])
          },//areaStyle
          emphasis: {
            // focus:'series',
          },
          data: this.service.getValue(5, this.service.chartType, this.service.interval),
        },
      ]
    };
    charts2.setOption(this.comfirmedcaseOption2, true);
    this.service.comfirmedcaseOption2=this.comfirmedcaseOption2;
    window.addEventListener('resize', () => {
      charts.resize();
      charts2.resize();
    });

  }
}
