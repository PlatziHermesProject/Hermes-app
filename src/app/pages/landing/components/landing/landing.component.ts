import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  section = 'landing';
  members = [
    {
      name: 'Jorge Pérez',
      image: 'assets/images/Jorge.jpg',
      github: '@joarpega',
      githubLink: 'https://github.com/joarpega',
      role: 'Backend',
    },
    {
      name: 'Francisco Moreno',
      image: 'assets/images/Francisco.png',
      github: '@frxncismor',
      githubLink: 'https://github.com/frxncismor',
      role: 'Frontend',
    },
    {
      name: 'Juan Jaramillo',
      image: 'assets/images/Juan.jpg',
      github: '@djaramilloj',
      githubLink: 'https://github.com/djaramilloj',
      role: 'Backend',
    },
    {
      name: 'Centli Garcés',
      image: 'assets/images/Centli.jpg',
      github: '@yosoycentli',
      githubLink: 'https://github.com/yosoycentli',
      role: 'Data Science',
    },
    {
      name: 'Oscar Guzmán',
      image: 'assets/images/Oscar.jpg',
      github: '@odguzmanv',
      githubLink: 'https://github.com/odguzmanv',
      role: 'Data Science',
    },
    {
      name: 'Luis Colunga',
      image: 'assets/images/Luis.jpg',
      github: '@luiscolungaperez',
      githubLink: 'https://github.com/luiscolungaperez',
      role: 'Frontend',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goLogin(): void {
    console.log('Go login');
    this.router.navigate(['/login']);
  }

  goNotion(): void{
    window.location.href = "https://www.notion.so/Hermes-Team-d119d2dee4a84a45abbc593d48cbbfa5";
  }
}
