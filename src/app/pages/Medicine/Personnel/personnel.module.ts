import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PersonnelRoutingModule } from './personnel-routing.module';
import { PersonnelComponent } from './personnel.component';


@NgModule({
  declarations: [
    PersonnelComponent
  ],
  imports: [
    CommonModule,
    PersonnelRoutingModule
  ],
  bootstrap: [PersonnelComponent]
})
export class PersonnelModule { }