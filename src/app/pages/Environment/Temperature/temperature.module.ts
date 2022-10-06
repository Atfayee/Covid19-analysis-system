import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemperatureRoutingModule } from './temperature-routing.module';
import { TemperatureComponent } from './temperature.component';
import { temperatureService } from './temperature.service';

@NgModule({
  declarations: [
    TemperatureComponent
  ],
  imports: [
    CommonModule,
    TemperatureRoutingModule
  ],
  bootstrap: [TemperatureComponent],
  providers:[temperatureService],
})
export class TemperatureModule { }