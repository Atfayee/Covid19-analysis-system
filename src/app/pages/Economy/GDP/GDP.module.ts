import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GDPRoutingModule } from './GDP-routing.module';
import { GDPComponent } from './GDP.component';


@NgModule({
  declarations: [
    GDPComponent
  ],
  imports: [
    CommonModule,
    GDPRoutingModule
  ],
  bootstrap: [GDPComponent]
})
export class GDPModule { }