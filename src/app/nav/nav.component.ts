import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Nav from 'src/interfaces/Nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navs: Nav[] = [
    {
      label: 'Accueil',
      url: '/',
      icon: '/assets/nav/home.svg',
      alt: 'home',
    },
    {
      label: 'Compétences',
      url: '/skills',
      icon: '/assets/nav/skills.svg',
      alt: 'skills',
    },
    {
      label: 'Projets',
      url: '/projects',
      icon: '/assets/nav/projects.svg',
      alt: 'projects',
    },
    {
      label: 'Contact',
      url: '/contact',
      icon: '/assets/nav/contact.svg',
      alt: 'contact',
    }
  ]

  constructor(private router:Router) {}
  navigateTo(path:string) {this.router.navigate([path])}
  ngOnInit() {}
}
