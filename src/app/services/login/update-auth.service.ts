import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateAuthService {

  private reLoginInformation = new Subject();  // 重新登录
  private authUpdate = new Subject();  // auth状态更新
  reLoginInformation$ = this.reLoginInformation.asObservable();
  authUpdate$ = this.authUpdate.asObservable();
  constructor() { }

  reAuthorize() {
    this.reLoginInformation.next('reLogin');
  }
  update() {
    this.authUpdate.next('authUpdate');
  }
}
