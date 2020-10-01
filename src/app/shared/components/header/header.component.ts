import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() section: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.section);
  }

  sideMenu(): void {
    console.log('sideMenu');
    const showMenu = document.querySelector('ul');
    showMenu.classList.toggle('showMenu');
  }
}
