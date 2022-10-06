import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmedCaseComponent } from './confirmed-case.component';

const routes: Routes = [
    { path: '', component: ConfirmedCaseComponent },
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class ConfirmedCaseRoutingModule { }