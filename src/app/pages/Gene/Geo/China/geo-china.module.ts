import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GeoChinaRoutingModule } from './geo-china-routing.module';
import { GeoChinaComponent } from './geo-china.component';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    GeoChinaComponent
  ],
  imports: [
    CommonModule,
    GeoChinaRoutingModule,
    DemoNgZorroAntdModule,
    NgxEchartsModule,
  ],
  bootstrap: [GeoChinaComponent]
})
export class GeoChinaModule { }