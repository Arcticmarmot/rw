import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {NzCarouselModule, NzIconModule} from 'ng-zorro-antd';
import {MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    NzIconModule
  ]
})
export class HomeModule { }
