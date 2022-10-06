import { Component, OnInit } from '@angular/core';
import { GeoChinaService } from './geo-china.service';
import { OptionSourceService } from './lib/option-source.service';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'geo-china',
  templateUrl: './geo-china.component.html',
  styleUrls: ['./geo-china.component.css'],
})
export class GeoChinaComponent {
  private charts: echarts.ECharts;
  private chartsBar: echarts.ECharts;
  private chartsLine: echarts.ECharts;
  private SourceData;
  constructor(
    private geoChinaService: GeoChinaService,
    private optionSourceService: OptionSourceService
  ) {
    this.SourceData = this.geoChinaService.generateBarSeries();
    console.log('SourceData源数据', this.SourceData);
  }

  ngOnInit(): void {
    this.initEchart();
  }

  ngOnDestroy(): void {
    echarts.dispose(this.charts);
    echarts.dispose(this.chartsBar);
    echarts.dispose(this.chartsLine);
  }

  private initEchart(): void {
    //let SourceData = this.geneTimeService.generateBarSeries();
    echarts.registerMap('CHINA', this.geoChinaService.getBaseMap());
    this.charts = echarts.init(
      document.getElementById('china-time') as HTMLDivElement
    );
    // console.log(this.charts);

    this.optionSourceService.setTimeLineData(
      this.geoChinaService.getData()['months']
    );
    this.optionSourceService.setOptionSeries(
      this.geoChinaService.generateSeries()
    );
    this.charts.setOption(this.optionSourceService.getOptions());
    this.charts.resize();
    this.charts.on('click', (params: any) => {
      let countryName = params.name;
      let dateIndex = params.seriesIndex;
      this.updateEchartLine(dateIndex + 1, countryName);
    });
    //console.log(this.geneTimeService.getData());
    this.charts.on('timelinechanged', (params) => {
      let dateIndex = params.currentIndex;
      let dateName = this.SourceData[0][dateIndex + 1];
      //this.updateEchartLine(dateIndex + 1);
      this.chartsBar.dispatchAction({
        type: 'legendToggleSelect',
        name: dateName,
      });
      this.chartsBar.dispatchAction({
        type: 'legendScroll',
        scrollDataIndex: 24 - dateIndex,
      });
    });
    this.initEchartLine();
    this.initEchartBar();
  }

  private initEchartBar() {
    this.chartsBar = echarts.init(
      document.getElementById('china-bar') as HTMLDivElement
    );
    // let SourceData = this.geneTimeService.generateBarSeries();
    let barOption = this.optionSourceService.setBarData(this.SourceData);
    this.chartsBar.setOption(barOption);
    this.chartsBar.on('click', (params: any) => {
      let countryName = params.name;
      let dateIndex = params.seriesIndex;
      this.updateEchartLine(dateIndex + 1, countryName);
    });
    this.chartsBar.on('legendselectchanged', (params) => {
      let dateIndex = this.SourceData[0].indexOf(params.name);
      this.updateEchartLine(dateIndex);
    });
    window.addEventListener('resize', () => {
      this.charts.resize();
      this.chartsBar.resize();
      this.chartsLine.resize();
    });
  }

  private initEchartLine() {
    //let SourceData = this.geneTimeService.generateBarSeries();
    let initData = this.SourceData.find((item) => item[0] === '湖北省').slice(1,2);
    this.chartsLine = echarts.init(
      document.getElementById('china-line') as HTMLDivElement
    );
    let option: EChartOption = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.SourceData[0].slice(1,2),
      },
      yAxis: {
        type: 'value',
      },
      title: {
        left: 'center',
        text: '湖北省',
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          restore: {},
          saveAsImage: {},
        },
      },
      tooltip: {
        show: true,
        trigger: 'axis',
      },
      series: [
        {
          data: initData,
          type: 'line',
          areaStyle: {},
        },
      ],
    };
    this.chartsLine.setOption(option);
  }

  private updateEchartLine(dateIndex: number, title?: string) {
    //let dateIndex = SourceData[0].indexOf(params.name);
    let countryName = title
      ? title
      : this.chartsLine.getOption()['title'][0]['text'];
    let dateSeries = this.SourceData[0].slice(1, dateIndex + 1);
    let dataSeries = this.SourceData.find(
      (item: any[]) => item[0] === countryName
    ).slice(1, dateIndex + 1);
    let option = {
      xAxis: [{ data: dateSeries }],
      series: [{ data: dataSeries }],
    };
    if (title) {
      option['title'] = { text: title };
    }
    this.chartsLine.setOption(option);
  }
}
