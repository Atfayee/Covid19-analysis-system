import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioChinaComponent } from './bio-china.component';

const routes: Routes = [
  { path: '', component: BioChinaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioChinaRoutingModule { }