import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PGDPRoutingModule } from './PGDP-routing.module';
import { PGDPComponent } from './PGDP.component';


@NgModule({
  declarations: [
    PGDPComponent
  ],
  imports: [
    CommonModule,
    PGDPRoutingModule
  ],
  bootstrap: [PGDPComponent]
})
export class PGDPModule { }