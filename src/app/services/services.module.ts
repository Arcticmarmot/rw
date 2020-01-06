import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

export const API_CONFIG = new InjectionToken('ApiConfigToken');
const localhost = 'http://localhost:3000/';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: API_CONFIG, useValue: localhost}
  ]
})
export class ServicesModule { }
