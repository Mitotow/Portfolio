import { Component } from '@angular/core';
import Project from 'src/interfaces/Project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  projects:Project[]=[
    {
      title: "Portfolio",
      subtitle: "Site Internet",
      text: "Mon portfolio a été réalisé avec Angular, ce qui m'a permis de prendre en main cette technologie.",
      git: new URL('https://github.com/Mitotow/Portfolio'),
      used: ['Angular', 'Typescript', 'HTML', 'SCSS'],
    },
    {
      title: "Générateur Particule",
      subtitle: "Projet Découverte",
      text: "Projet universitaire réalisé en collaboration avec un autre étudiant, initiant à Golang et à la prise en main d'un moteur graphique.",
      git: new URL('https://github.com/Mitotow/GoParticleGenerator'),
      used: ['Go', 'Ebiten'],
    },
    {
      title: "Plugin",
      subtitle: "Jeu vidéo",
      text: "Plugin pour le jeu vidéo Minecraft qui permet différentes actions de modération, ainsi qu'un début de système de faction non finalisé.",
      git: new URL('https://github.com/Mitotow/TPlugin'),
      used: ['Java', 'Spigot'],
    },
    {
      title: "Convertisseur d'unité",
      subtitle: "Application de Console",
      text: "Premier programme réalisé en C++, j'ai pu me familiariser avec les bases du langage ainsi que la bibliothèque standard.",
      git: new URL('https://github.com/Mitotow/CppUnitConverter'),
      used: ['C++']
    },
    {
      title: "QueueManager",
      subtitle: "Application de Console",
      text: "Programme d'initiation à C# et .NET, j'avais déjà commencé à réaliser un serveur API, mais j'ai préféré recommencer depuis le début et créer ce petit programme de gestion de file d'attente basique.",
      git: new URL('https://github.com/Mitotow/QueueManager'),
      used: ['C#', ".NET 7.0"]
    }
  ];

  constructor() {}
  openSource = (url : URL) => window.open(url, '_blank');
}
