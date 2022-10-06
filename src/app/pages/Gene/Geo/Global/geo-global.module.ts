import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeoGlobalRoutingModule } from './geo-global-routing.module';
import { GeoGlobalComponent } from './geo-global.component';


@NgModule({
  declarations: [
    GeoGlobalComponent
  ],
  imports: [
    CommonModule,
    GeoGlobalRoutingModule
  ],
  bootstrap: [GeoGlobalComponent]
})
export class GeoGlobalModule { }
