import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from '../services.module';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(@Inject(API_CONFIG) private uri: string, private http: HttpClient ) { }

  getShortAnnos(page: string) {
    const params = new HttpParams().set('page', page)
    return this.http.get(this.uri + 'announce', {params});
  }
  getPageNum() {
    return this.http.get(this.uri + 'announce' + '/page_num');
  }
  getAnnoDetail(id: string) {
    const params = new HttpParams().set('id', id)
    return this.http.get(this.uri + 'announce',{params});
  }
  postAnnouncement() {
    return this.http.post(this.uri + 'announce', {});
  }
}
