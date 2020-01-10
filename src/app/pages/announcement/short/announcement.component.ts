import { Component, OnInit } from '@angular/core';
import {AnnouncementService} from '../../../services/announcement/announcement.service';
import {getArrayByInt} from '../../../utils/fn';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.less']
})
export class AnnouncementComponent implements OnInit {
  pageNum: number[];
  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.announcementService.getPageNum().subscribe(
      (res: {pageNum: number}) => {
        this.pageNum = getArrayByInt(res.pageNum);
      }
    );
  }
}
