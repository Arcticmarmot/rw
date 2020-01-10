import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnnouncementComponent} from './announcement.component';
import {BulletinComponent} from './bulletin/bulletin.component';

const routes: Routes = [
  {
    path: 'announce',
    component: AnnouncementComponent,
    children: [
      {path: ':page', component: BulletinComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }
