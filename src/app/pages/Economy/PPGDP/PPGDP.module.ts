import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PPGDPRoutingModule } from './PPGDP-routing.module';
import { PPGDPComponent } from './PPGDP.component';


@NgModule({
  declarations: [
    PPGDPComponent
  ],
  imports: [
    CommonModule,
    PPGDPRoutingModule
  ],
  bootstrap: [PPGDPComponent]
})
export class PPGDPModule { }