import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnnoDetailComponent} from './anno-detail.component';


const routes: Routes = [
  {path: 'anno-detail/:id', component: AnnoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnoDetailRoutingModule { }
