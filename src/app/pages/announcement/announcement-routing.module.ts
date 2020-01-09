import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnnouncementComponent} from './announcement.component';


const routes: Routes = [
  {path: 'announce/:page', component: AnnouncementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }