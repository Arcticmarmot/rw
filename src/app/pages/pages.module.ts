import { NgModule } from '@angular/core';
import {HomeModule} from './home/home.module';
import {LoginModule} from './login/login.module';
import {AnnouncementModule} from './announcement/short/announcement.module';
import {AnnoDetailModule} from './announcement/detail/anno-detail.module';



@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    LoginModule,
    AnnouncementModule,
    AnnoDetailModule,
  ],
  exports: [
    HomeModule,
    LoginModule,
    AnnouncementModule,
    AnnoDetailModule,
  ]
})
export class PagesModule { }
