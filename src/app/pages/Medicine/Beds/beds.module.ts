import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BedsRoutingModule } from './beds-routing.module';
import { BedsComponent } from './beds.component';


@NgModule({
  declarations: [
    BedsComponent
  ],
  imports: [
    CommonModule,
    BedsRoutingModule
  ],
  bootstrap: [BedsComponent]
})
export class BedsModule { }