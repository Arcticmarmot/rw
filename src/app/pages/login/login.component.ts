import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PASSWORDPATTERN} from '../../utils/constant';
import {LoginService} from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginFormData = this.fb.group({
    account: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern(PASSWORDPATTERN)]]
  });
  isCookieEnable: boolean;
  constructor(private fb: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit() {
    this.isCookieEnable = navigator.cookieEnabled;
  }
  onSubmit() {
    this.loginService.login({
      account: this.loginFormData.controls.account.value,
      password: this.loginFormData.controls.password.value,
    }).subscribe(
      res => {
      },
      err => {
        if (err.error.tip === 'Account or password is wrong') {
          this.loginFormData.controls.password.setErrors({wrong: true});
        }
      }
    );
  }

}
