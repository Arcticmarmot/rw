import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnnoDetailComponent} from './anno-detail.component';
import {AnnoDetailRoutingModule} from './anno-detail-routing.module';
import {FooterModule} from '../../../share/footer/footer.module';


@NgModule({
  declarations: [AnnoDetailComponent],
  imports: [
    CommonModule,
    AnnoDetailRoutingModule,
    FooterModule
  ]
})
export class AnnoDetailModule { }
