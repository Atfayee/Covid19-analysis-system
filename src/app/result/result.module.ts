import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';

import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';

@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    DemoNgZorroAntdModule
  ],
  bootstrap: [ResultComponent]
})
export class ResultModule { }