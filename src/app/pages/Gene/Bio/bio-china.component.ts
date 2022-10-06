import { Component } from "@angular/core";
import { EChartOption } from 'echarts';
import China from '../../../../assets/中华人民共和国.json';
import * as echarts from 'echarts';
import 'echarts/extension/bmap/bmap';
import * as fx from "../../../../assets/Gene/main.js";

@Component({
    selector: 'bio-china',
    templateUrl: './bio-china.component.html',
    styleUrls: ['./bio-china.component.css']
})

export class BioChinaComponent {

    ngOnInit() {
        
    }
}