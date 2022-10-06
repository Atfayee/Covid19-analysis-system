import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeoGlobalComponent } from './geo-global.component';
const routes: Routes = [
  { path: '', component: GeoGlobalComponent },
  {
    path: 'China',
    loadChildren: () =>
      import('../China/geo-china.module').then((m) => m.GeoChinaModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoGlobalRoutingModule {}
