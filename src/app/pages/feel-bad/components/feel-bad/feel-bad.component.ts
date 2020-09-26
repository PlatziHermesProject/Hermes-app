import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feel-bad',
  templateUrl: './feel-bad.component.html',
  styleUrls: ['./feel-bad.component.scss'],
})
export class FeelBadComponent implements OnInit {
  organizations = [
    {
      name: 'Organization',
      phone: '333-333-333',
      country: 'Mexico',
      image: 'assets/images/salud_mental.jpg',
    },
    {
      name: 'Organization',
      phone: '333-333-333',
      country: 'Colombia',
      image: 'assets/images/terapia.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
