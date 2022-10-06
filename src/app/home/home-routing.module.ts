import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'Content',
    loadChildren: () => import('../content/content.module').then(m => m.ContentModule)
  },
  {
    path: 'Result',
    loadChildren: () => import('../result/result.module').then(m => m.ResultModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }