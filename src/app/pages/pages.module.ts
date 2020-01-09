import { NgModule } from '@angular/core';
import {HomeModule} from './home/home.module';
import {LoginModule} from './login/login.module';
import {AnnouncementModule} from './announcement/announcement.module';



@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    LoginModule,
    AnnouncementModule,
  ],
  exports: [
    HomeModule,
    LoginModule,
    AnnouncementModule,
  ]
})
export class PagesModule { }
