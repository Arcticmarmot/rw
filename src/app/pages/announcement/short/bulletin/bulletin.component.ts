import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from '../../../../services/announcement/announcement.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.less']
})
export class BulletinComponent implements OnInit {
  shortAnnos;
  constructor(private announcementService: AnnouncementService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.refresh(params.get('page'));
      }
    );
  }
  refresh(page) {
    this.announcementService.getShortAnnos(page).subscribe(
      (res: {shortAnnos: any}) => {
        console.log(res);
        this.shortAnnos = res.shortAnnos;
      }
    );
  }

}
