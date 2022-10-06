import { Injectable } from "@angular/core";
import { EChartOption } from "echarts";
import culumativeData from "../../../assets/ConfirmedCase/culumative.json"
import dailyData from "../../../assets/ConfirmedCase/daily.json"
@Injectable({
    providedIn: 'root',
})
export class ConfirmedCaseService {
    data = [3341631, 2565258, 73041, 301107, 233961, 60470];
    className = ['Europe', 'Americas', 'Western Pacific', 'South-East Asia', 'Eastern Mediterranean', 'Africa'];
    colorList = ['#39b3ff', '#47e0e0', '#7891d9', '#83d978', '#c7a530', '#ff8439'];
    defaultData = [100, 100, 100, 100, 100, 100];

    private culumativeConfirmedCase: Object[] = [];
    private culumativeConfirmedCaseall: Object[] = [];

    private dailyConfirmedCase: Object[] = [];
    private dailyConfirmedCaseall: Object[] = [];

    // 累计/每天
    private _chartType: string = 'daily';
    get chartType() {
        return this._chartType;
    }
    set chartType(type: string) {
        this._chartType = type;
    }

    // 每月/每季度
    private _interval: number = 3;
    get interval() {
        return this._interval;
    }
    set interval(interval: number) {
        this._interval = interval;
    }

    // 区域/全球
    private _extent:string='region';
    get extent(){
        return this._extent;
    }
    set extent(extent:string){
        this._extent=extent;
    }

    private _comfirmedcaseOption2:EChartOption;
    get comfirmedcaseOption2(){
        return this._comfirmedcaseOption2;
    }
    set comfirmedcaseOption2(series:EChartOption){
        this._comfirmedcaseOption2=series;
    }
    constructor() {
        this.getallDatd();
        // let k=this.getValue();
        // console.log(k);
        // console.log(this.culumativeConfirmedCaseall);
    }

    getallDatd() {
        for (let i = 0; i < 7; i++) {
            this.culumativeConfirmedCase = [];
            this.dailyConfirmedCase = [];
            this.getData(i);
            this.culumativeConfirmedCaseall.push(this.culumativeConfirmedCase);
            this.dailyConfirmedCaseall.push(this.dailyConfirmedCase);
        }
    }
    getData(index: number) {
        let stringData = JSON.stringify(culumativeData[index]);
        let stringData2 = JSON.stringify(dailyData[index]);
        // console.log(stringData);
        // let sliceData=stringData.slice(1,-1);
        let splitData = stringData.split(',');
        let splitData2 = stringData2.split(',');
        for (let i = 0; i < splitData.length; i++) {
            let e = splitData[i].split(':');
            let e2 = splitData2[i].split(':');
            // console.log(e[0]);
            let datestring = e[0].slice(2, -1);
            let datestring2 = e2[0].slice(2, -1);
            // console.log(datestring);
            let obj = {
                date: datestring,
                value: e[1].slice(1, -1)
            };
            let obj2 = {
                date: datestring2,
                value: e2[1].slice(1, -1)
            };
            // console.log(obj);
            this.culumativeConfirmedCase.push(obj);
            this.dailyConfirmedCase.push(obj2);
        }
        // console.log(this.culumativeConfirmedCase);
    }

    getDate(index: number, category: string, interval: number) {
        let date = [];
        let d;
        if (category == "culumative") {
            d = this.culumativeConfirmedCaseall[index];
        } else {
            //category=="daily"
            d = this.dailyConfirmedCaseall[index];
        }

        if (interval == 1) {
            for (let i = 0; i < 24; i++) {
                date.push(d[i]["date"]);
            }
        }
        else {
            // interval==3
            for (let i = 0; i < 24; i += 3) {
                date.push(d[i]["date"]);
            }
        }
        return date;
    }

    getValue(index: number, category: string, interval: number) {
        let value = [];
        let d;
        if (category == "culumative") {
            d = this.culumativeConfirmedCaseall[index];
        } else {
            //category=="daily"
            d = this.dailyConfirmedCaseall[index];
        }
        if (interval == 1) {
            for (let i = 0; i < 24; i++) {
                value.push(d[i]["value"]);
            }
        }
        else {
            //interval==3
            for (let i = 0; i < 24; i += 3) {
                value.push(d[i]["value"]);
            }
        }
        return value;
    }
}
