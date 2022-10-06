import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InstitutionsRoutingModule } from './institutions-routing.module';
import { InstitutionsComponent } from './institutions.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    InstitutionsComponent
  ],
  imports: [
    CommonModule,
    InstitutionsRoutingModule,
  ],
  bootstrap: [InstitutionsComponent]
})
export class InstitutionsModule { }