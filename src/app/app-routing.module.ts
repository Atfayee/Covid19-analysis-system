import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/Home'
  },
  {
    path: 'Home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: 'Gene',
  //   loadChildren: () => import('./pages/Gene/gene.module').then(m => m.GeneModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
