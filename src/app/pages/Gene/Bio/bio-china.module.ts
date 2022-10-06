import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BioChinaRoutingModule } from './bio-china-routing.module';
import { BioChinaComponent } from './bio-china.component';


@NgModule({
  declarations: [
    BioChinaComponent
  ],
  imports: [
    CommonModule,
    BioChinaRoutingModule
  ],
  bootstrap: [BioChinaComponent]
})
export class BioChinaModule { }