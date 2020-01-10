import { Component, OnInit } from '@angular/core';
import {AnnouncementService} from '../../../services/announcement/announcement.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-anno-detail',
  templateUrl: './anno-detail.component.html',
  styleUrls: ['./anno-detail.component.less']
})
export class AnnoDetailComponent implements OnInit {
  annoDetail;
  constructor(private announceService: AnnouncementService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.announceService.getAnnoDetail(id).subscribe(
      res => {
        console.log(res);
        this.annoDetail = res;
      }
    );
  }
}
