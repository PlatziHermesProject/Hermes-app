import { AuthService } from './../../../core/services/auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() section: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.section);
  }

  sideMenu(): void {
    console.log('sideMenu');
    const showMenu = document.querySelector('ul');
    showMenu.classList.toggle('showMenu');
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/landing']);
  }
}
