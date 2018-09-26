import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  array = [
    '../../assets/banner_xxw2.jpg',
    '../../assets/banner_xxw3.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
