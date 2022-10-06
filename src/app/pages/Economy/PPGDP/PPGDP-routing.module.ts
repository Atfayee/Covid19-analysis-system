import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PPGDPComponent } from './PPGDP.component';

const routes: Routes = [
  { path: '', component: PPGDPComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PPGDPRoutingModule { }