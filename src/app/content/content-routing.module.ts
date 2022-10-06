import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () =>
      //   import('../pages/Gene/Geo/Global/gene-global.module').then((m) => m.GeneGlobalModule),
      // },
      {
        path: 'Global',
        loadChildren: () => import('../pages/Gene/Geo/Global/geo-global.module').then((m) => m.GeoGlobalModule),
      },
      {
        path: 'Tree',
        loadChildren: () => import('../pages/Gene/Bio/bio-china.module').then((m) => m.BioChinaModule),
      },
      {
        path: 'Temperature',
        loadChildren: () => import('../pages/Environment/Temperature/temperature.module').then((m) => m.TemperatureModule
        ),
      },
      {
        path: 'Precipitation',
        loadChildren: () => import('../pages/Environment/Precipitation/precipitation.module').then((m) => m.PrecipitationModule),
      },
      {
        path: 'Institutions',
        loadChildren: () => import('../pages/Medicine/Institutions/institutions.module').then(m => m.InstitutionsModule)
      },
      {
        path: 'Beds',
        loadChildren: () => import('../pages/Medicine/Beds/beds.module').then(m => m.BedsModule)
      },
      {
        path: 'Personnel',
        loadChildren: () => import('../pages/Medicine/Personnel/personnel.module').then(m => m.PersonnelModule)
      },
      {
        path: 'GDP',
        loadChildren: () => import('../pages/Economy/GDP/GDP.module').then(m => m.GDPModule)
      },
      {
        path: 'PGDP',
        loadChildren: () => import('../pages/Economy/PGDP/PGDP.module').then(m => m.PGDPModule)
      },
      {
        path: 'PPGDP',
        loadChildren: () => import('../pages/Economy/PPGDP/PPGDP.module').then(m => m.PPGDPModule)
      },
      {
        path: 'ConfirmedCase',
        loadChildren: () => import('../pages/confirmed-case/confirmed-case.module').then(m => m.ConfirmedCaseModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
