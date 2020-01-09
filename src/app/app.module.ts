import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {PagesModule} from './pages/pages.module';
import {ServicesModule} from './services/services.module';
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatRippleModule,
  RippleGlobalOptions
} from '@angular/material';

registerLocaleData(zh);
const globalRippleConfig: RippleGlobalOptions = {
  animation: {
    enterDuration: 80,
    exitDuration: 8
  }
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatRippleModule,
    MatDividerModule,
  ],
  providers: [{
    provide: NZ_I18N, useValue: zh_CN },
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
