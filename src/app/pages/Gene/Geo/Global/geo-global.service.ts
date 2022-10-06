import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import WorldGeneData from '../../../../../assets/Global/按月统计(累计).json';
import WorldGeojson from '../../../../../assets/Global.json';
@Injectable({
  providedIn: 'root',
})
export class GeoGlobalService {
  private data: Object;
  private baseMap: Object;
  constructor(private http: HttpClient) {
    this.data = WorldGeneData;
    //this.generateSeries(this.data);
    this.baseMap = WorldGeojson;
  }
  getData(): Object {
    return this.data;
  }

  getBaseMap(): Object {
    return this.baseMap;
  }

  generateSeries(data: Object = this.data): Object[] {
    let series: Object[] = [];
    for (let i = 0; i < 24; i++) {
      let oneSerie: Object = {
        series: {
          map: 'world',
          name: '测序数据',
          roam: true,

          type: 'map',
          emphasis: {
            label: {
              show: true,
            },
          },
          center: [1, 20],
          zoom: 1.4,
          data: [],
        },
      };
      for (let conName of this.data['countries']) {
        //conName = conName === "USA" ? "United States" : conName;
        let item = { name: conName, value: this.data[conName][i] };
        switch (item['name']) {
          case 'USA':
            item['name'] = 'United States';
            break;
          case 'Russia':
            item['name'] = 'Russian Federation';
            break;
        }
        oneSerie['series']['data'].push(item);
      }
      series.push(oneSerie);
    }
    console.log(series);

    return series;
  }

  generateBarSeries(data: Object = this.data): any {
    let series = [];
    let head = this.data['months'].slice(0);
    head.unshift('country');
    series.push(head);
    console.log(series);
    let dataCon = [];
    for (let con of this.data['countries']) {
      let oneRow = [con].concat(this.data[con]);
      dataCon.push(oneRow);
    }
    dataCon.sort((a, b) => {
      return a[24] - b[24];
    });
    series = series.concat(dataCon);
    //console.log(series);
    return series;
  }
}
