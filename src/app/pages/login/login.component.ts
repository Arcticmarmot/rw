import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PASSWORDPATTERN} from '../../utils/constant';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
import {UpdateAuthService} from '../../services/login/update-auth.service';

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
              private loginService: LoginService,
              private route: Router,
              private updateAuthService: UpdateAuthService
              ) { }

  ngOnInit() {
    this.isCookieEnable = navigator.cookieEnabled;
  }
  onSubmit() {
    this.loginService.login({
      account: this.loginFormData.controls.account.value,
      password: this.loginFormData.controls.password.value,
    }).subscribe(
      res => {
        console.log(res);
        this.updateAuthService.update();
        this.route.navigate(['/home']);
      },
      err => {
        if (err.error.tip === 'Account or password is wrong') {
          this.loginFormData.controls.password.setErrors({wrong: true});
        }
      }
    );
  }

}
