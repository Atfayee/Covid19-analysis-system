import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ConfirmedCaseComponent } from './confirmed-case.component';
import { ConfirmedCaseRoutingModule } from './confirmed-case-routing.module';
import { ConfirmedCaseService } from './confirmed-case.service';

const routes: Routes = [
    { path: '', component: ConfirmedCaseComponent },
  ];

  @NgModule({
    declarations: [
      ConfirmedCaseComponent
    ],
    imports: [
      CommonModule,
      ConfirmedCaseRoutingModule
    ],
    bootstrap: [ConfirmedCaseComponent],
    providers:[ConfirmedCaseService]
  })
  export class ConfirmedCaseModule { }