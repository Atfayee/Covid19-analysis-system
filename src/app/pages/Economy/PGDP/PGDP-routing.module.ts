import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PGDPComponent } from './PGDP.component';

const routes: Routes = [
  { path: '', component: PGDPComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PGDPRoutingModule { }