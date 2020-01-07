import {Inject, Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../services.module';
import {Observable} from 'rxjs';
import {UserLogin} from '../data-types/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(@Inject(API_CONFIG) private uri: string, private http: HttpClient ) {
  }

  login(user: UserLogin): Observable<any> {
    return this.http.post(this.uri + 'login', {account: user.account, password: user.password});
  }
}
