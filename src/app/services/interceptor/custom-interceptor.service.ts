import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {NzMessageService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor {

  constructor(private message: NzMessageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true
    });
    // @ts-ignore
    return next.handle(req).pipe(
      mergeMap((res) => {
        if (res instanceof HttpResponse) {
          if (res.body.tip) {
            this.message.success(res.body.tip);
          }
        }
        return of(res);
      }),
      catchError(err => this.handleError(err))
    );
  }
  private handleError(err) {
    switch (err.status) {
      case 401:
        this.message.error(err.error.tip);
        break;
      case 403:
        this.message.error(err.error.tip);
        break;
      case 500:
        this.message.error(err.error.tip);
        break;
      default:
        this.message.error('fail');
    }
    return throwError(err);
  }
}
