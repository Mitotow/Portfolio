import { Component } from '@angular/core';
import Project from 'src/interfaces/Project';
import data from '@data/projects.json';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss'],
    standalone: false
})
export class ProjectsPageComponent {
  projects : Project[] = data;

  constructor() {}
  
  openSource = (url : string) => window.open(url, '_blank');
}
