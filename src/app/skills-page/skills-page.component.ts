import { Component } from '@angular/core';
import Usage from 'src/interfaces/Usage';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent {
  languages:Usage[]=[
    {
      iconClass: 'devicon-html5-plain colored',
      name: 'HTML5',
    },
    {
      iconClass: 'devicon-css3-plain colored',
      name: 'CSS3',
    },
    {
      iconClass: 'devicon-javascript-plain colored',
      name: 'Javascript',
    },
    {
      iconClass: 'devicon-typescript-plain colored',
      name: 'Typescript',
    },
    {
      iconClass: 'devicon-php-plain colored',
      name: 'PHP',
    },
    {
      iconClass: 'devicon-java-plain colored',
      name: 'Java',
    },
    {
      iconClass: 'devicon-kotlin-plain colored',
      name: 'Kotlin',
    },
    {
      iconClass: 'devicon-csharp-plain colored',
      name: 'Csharp',
    },
    {
      iconClass: 'devicon-go-original-wordmark colored',
      name: 'Golang',
    },
  ]

  tools:Usage[]=[
    {
      iconClass: 'devicon-git-plain colored',
      name: 'git',
    },
    {
      iconClass: 'devicon-nodejs-plain colored',
      name: 'NodeJS',
    },
    {
      iconClass: 'devicon-postgresql-plain colored',
      name: 'Postgresql',
    },
    {
      iconClass: 'devicon-jetbrains-plain colored',
      name: 'Jerbrains',
    },
    {
      iconClass: 'devicon-visualstudio-plain colored',
      name: 'Visual Studio',
    },
    {
      iconClass: 'devicon-vscode-plain colored',
      name: 'Visual Studio Code',
    },
  ]

  frameworks:Usage[]=[
    {
      iconClass: 'devicon-angularjs-plain colored',
      name: 'Angular',
    },
    {
      iconClass: 'devicon-react-plain colored',
      name: 'React',
    },
    {
      iconClass: 'devicon-dotnetcore-plain colored',
      name: '.NET',
    },
  ]

  constructor() {}
}
