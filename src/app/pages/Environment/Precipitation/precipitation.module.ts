import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrecipitationRoutingModule } from './precipitation-routing.module';
import { PrecipitationComponent } from './precipitation.component';
import { precipitationService } from './precipitation.service';


@NgModule({
  declarations: [
    PrecipitationComponent
  ],
  imports: [
    CommonModule,
    PrecipitationRoutingModule
  ],
  bootstrap: [PrecipitationComponent],
  providers:[precipitationService]
})
export class PrecipitationModule { }