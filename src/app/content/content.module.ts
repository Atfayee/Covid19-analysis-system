import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';

import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    DemoNgZorroAntdModule
  ],
  bootstrap: [ContentComponent]
})
export class ContentModule { }