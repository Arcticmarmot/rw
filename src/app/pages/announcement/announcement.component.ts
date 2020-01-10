import { Component, OnInit } from '@angular/core';
import {AnnouncementService} from '../../services/announcement/announcement.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.less']
})
export class AnnouncementComponent implements OnInit {
  shortAnnos;
  pageNum: number;
  constructor(private announcementService: AnnouncementService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const page = this.activatedRoute.snapshot.paramMap.get('page');
    this.announcementService.getAnnouncement(page).subscribe(
      (res: {shortAnnos: any, pageNum: number}) => {
        this.shortAnnos = res.shortAnnos;
        this.pageNum = res.pageNum;
      }
    );
  }

}
