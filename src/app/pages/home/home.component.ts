import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners = [
    {name: 'demo'},
    {name: 'demo2'},
    {name: 'demo3'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
