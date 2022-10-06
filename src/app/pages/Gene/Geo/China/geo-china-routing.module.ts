import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeoChinaComponent } from './geo-china.component';
import { GeoGlobalComponent } from '../Global/geo-global.component'

const routes: Routes = [
  { path: '', component: GeoChinaComponent },
  {
    path: '/Home/Content/Global', component: GeoGlobalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoChinaRoutingModule { }
