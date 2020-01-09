import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from './services/login/auth.service';
import {LogoutService} from './services/login/logout.service';
import {UpdateAuthService} from './services/login/update-auth.service';
import {Router} from '@angular/router';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isLogin = false;
  role: 'user'|'admin'|'root';
  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;
  constructor(private authService: AuthService,
              private logoutService: LogoutService,
              private updateAuthService: UpdateAuthService,
              private route: Router) { }

  ngOnInit(): void {
    this.updateAuth();
    this.updateAuthService.authUpdate$.subscribe(
      _ => {
        this.updateAuth();
      }
    );
    this.updateAuthService.reLoginInformation$.subscribe(
      _ => {
        this.logout();
        this.route.navigate(['/login']);
      }
    );
  }
  logout() {
    this.logoutService.logout().subscribe(
      _ => {
        this.updateAuthService.update();
      }
    );
  }
  updateAuth() {
    this.authService.authorize().subscribe(
      (res: {auth: boolean, role: 'user'|'admin'|'root'}) => {
        this.isLogin = res.auth;
        this.role = res.role;
      }
    );
  }

  openPersonalMenu() {
    if (!this.isLogin) {
      this.trigger.closeMenu();
    }
  }
}
