import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import {FooterModule} from '../../../share/footer/footer.module';
import {MatButtonModule, MatListModule} from '@angular/material';
import { BulletinComponent } from './bulletin/bulletin.component';


@NgModule({
  declarations: [AnnouncementComponent, BulletinComponent],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    FooterModule,
    MatListModule,
    MatButtonModule
  ]
})
export class AnnouncementModule { }
