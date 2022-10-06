import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrecipitationComponent } from './precipitation.component';

const routes: Routes = [
  { path: '', component: PrecipitationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrecipitationRoutingModule { }