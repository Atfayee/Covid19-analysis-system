import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GDPComponent } from './GDP.component';

const routes: Routes = [
  { path: '', component: GDPComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GDPRoutingModule { }