import { Component } from '@angular/core';
import SkillElement from 'src/interfaces/SkillElement';
import data from '@data/skills.json';

@Component({
    selector: 'app-skills-page',
    templateUrl: './skills-page.component.html',
    styleUrls: ['./skills-page.component.scss'],
    standalone: false
})
export class SkillsPageComponent {
  languages:SkillElement[]=data.filter(e => e.type == 'language');
  tools:SkillElement[]=data.filter(e => e.type == 'tool');
  frameworks:SkillElement[]=data.filter(e => e.type == 'framework');

  constructor() {}
}
