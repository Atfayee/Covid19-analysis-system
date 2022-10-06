import { Injectable } from '@angular/core';
// import { EChartOption } from 'echarts';
import * as echarts from 'echarts';
type EChartOption = echarts.EChartOption;
@Injectable({
  providedIn: 'root',
})
export class OptionSourceService {
  optionbar: EChartOption = {
    dataset: [{ source: [] }],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true,
        },
      },
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      type: 'scroll',
      top: 50,
      data: [],
      itemGap: 2,
      selectedMode: 'single',
      selected: {
        '01/2020': true,
      },
      inactiveColor: '#808080',
    },
    grid: {
      top: '12%',
      left: '1%',
      right: '10%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'value',
        name: '测序数据',
        axisLabel: {
          formatter: function (a: number) {
            a = +a;
            return isFinite(a) ? +a / 1000 : '';
          },
        },
      },
    ],
    yAxis: [{ type: 'category', axisLabel: { rotate: 30 } }],
    dataZoom: [
      {
        show: true,
        xAxisIndex: 0,
        filterMode: 'empty',
        showDataShadow: 'false',
      },
      {
        type: 'inside',
        yAxisIndex: 0,
        start: 50,
        end: 100,
      },
      {
        show: true,
        start: 0,
        yAxisIndex: 0,
        end: 100,
        left: '93%',
      },
    ],
    series: [],
  };
  Options: Object = {
    map: {
      xAxis: {
        type: 'category',
        data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          name: '2015',
          data: [89.3, 92.1, 94.4, 85.4],
        },
        {
          type: 'bar',
          name: '2016',
          data: [95.8, 89.4, 91.2, 76.9],
        },
        {
          type: 'bar',
          name: '2017',
          data: [97.7, 83.1, 92.5, 78.1],
        },
      ],
    },
    mapTime: {
      baseOption: {
        timeline: {
          autoPlay: false,
          loop: true,
          top: 'auto',
          playInterval: 800,
          currentIndex: 0,
          axisType: 'category',
          data: [],
        },
        title: {
          text: 'COVID-19病毒基因测序数据分布图',
          subtext: '数据来源: GISAID',
          subtextStyle: {
            //副标题内容的样式
            color: 'green', //绿色
            fontStyle: 'normal', //主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontFamily: 'san-serif', //主题文字字体，默认微软雅黑
            fontSize: 14, //主题文字字体大小，默认为12px
          },
          sublink: 'https://www.gisaid.org/',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}的基因测序数据: {c}',
        },
        visualMap: {
          type: 'piecewise',
          showLabel: true,
          pieces: [
            { min: 0, max: 2, color: '#38a800' },
            { min: 3, max: 10, color: '#5aba00' },
            { min: 11, max: 15, color: '#83cf00' },
            { min: 16, max: 24, color: '#b0e000' },
            { min: 25, max: 37, color: '#e4f500' },
            { min: 38, max: 64, color: '#ffe100' },
            { min: 65, max: 100, color: '#ffaa00' },
            { min: 101, max: 120, color: '#ff7300' },
            { min: 121, max: 267, color: '#ff3700' },
            { min: 268, max: 5257, color: '#ff0000' },
            // { min: 50000, color: 'rgb(112,22,29)' }, // 不指定 max，表示 max 为无限大（Infinity）。
            // { min: 20000, max: 50000, color: 'rgb(203,42,47)' },
            // { min: 5000, max: 20000, color: 'rgb(229,90,78)' },
            // { min: 100, max: 5000, color: 'rgb(245,158,131)' },
            // { min: 1, max: 100, color: 'rgb(253,235,207)' },
            // { min: 0, max: 1, color: '' },
          ],
          left: 'left',
          top: 'bottom',
          // text: ['多','少'],           // 文本，默认为数值文本
          //calculable: true,
        },
        toolbox: {
          show: true,
          //orient: 'vertical',
          left: 'left',
          top: 'top',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        series: [],
      },
      options: [],
    },
    BarOption: {
      dataset: {
        source: [
          ['score', 'amount', 'product'],
          [89.3, 58212, 'Matcha Latte'],
          [57.1, 78254, 'Milk Tea'],
          [74.4, 41032, 'Cheese Cocoa'],
          [50.1, 12755, 'Cheese Brownie'],
          [89.7, 20145, 'Matcha Cocoa'],
          [68.1, 79146, 'Tea'],
          [19.6, 91852, 'Orange Juice'],
          [10.6, 101852, 'Lemon Juice'],
          [32.7, 20112, 'Walnut Brownie'],
        ],
      },
      grid: { containLabel: true },
      xAxis: { name: 'amount' },
      yAxis: { type: 'category' },
      visualMap: [
        {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['High Score', 'Low Score'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F'],
          },
        },
      ],
      series: [
        {
          type: 'bar',
          encode: {
            // Map the "amount" column to X axis.
            x: 'amount',
            // Map the "product" column to Y axis
            y: 'product',
          },
        },
      ],
    },
  };
  constructor() {}

  setTimeLineData(series_data: string[]) {
    this.Options['mapTime']['baseOption']['timeline']['data'] = series_data;
    console.log(this.Options['mapTime']['baseOption']['timeline']);
    return this;
  }
  setOptionSeries(series_data: Object[]) {
    this.Options['mapTime']['options'] = series_data;
    return this;
  }
  setBarData(data) {
    this.optionbar['series'] = [];
    this.optionbar['legend']['data'] = data[0].slice(1);
    this.optionbar['dataset'][0]['source'] = data;
    for (let i = 0; i < 24; i++) {
      let nameCon: string = data[0][i + 1];
      let row = {
        name: nameCon,
        type: 'bar',
        encode: { x: nameCon, y: 'country' },
      };
      this.optionbar['legend']['selected'][nameCon] = i === 0 ? true : false;
      this.optionbar['series'].push(row);
    }
    return this.optionbar;
  }
  getOptions(): Object {
    console.log(this.Options['mapTime']);
    return this.Options['mapTime'];
  }
}
