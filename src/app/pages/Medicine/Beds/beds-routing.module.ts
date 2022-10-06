import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BedsComponent } from './beds.component';

const routes: Routes = [
  { path: '', component: BedsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BedsRoutingModule { }