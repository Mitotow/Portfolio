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
      text: "Mon portfolio représente une réalisation dont je suis particulièrement fier. En tant que développeur front-end en herbe, je n'avais pas d'expérience préalable avec Angular, mais ce projet m'a offert l'opportunité d'acquérir de nouvelles compétences. Je suis heureux de partager mon parcours à travers ce site, qui me sert à me présenter et à mettre en valeur mes réalisations.",
      used: ['Angular', 'Typescript', 'HTML', 'SCSS'],
    },
    {
      title: "Emplois du temps IUT",
      subtitle: "Site internet",
      text: "J'ai créé un emploi du temps universitaire plus esthétique et fonctionnel en utilisant React pour le frontend et Express.js pour le backend. Ce projet m'a permis d'acquérir de précieuses compétences en développement web.",
      used: ['React', 'NodeJS', 'Typescript', 'HTML', 'CSS'],
    },
    {
      title: "Pickomino Game",
      subtitle: "Jeu Vidéo",
      text: "En collaboration avec deux coéquipiers, j'ai développé une adaptation en Kotlin du jeu de société 'Pickomino' en une expérience de jeu vidéo. Mon rôle était de créer la logique backend, tandis que mes collègues se sont concentrés sur la partie graphique en utilisant JavaFX et les tests. Cette réalisation, réalisée dans le cadre de ma formation universitaire à l'IUT de Nantes, m'a permis d'explorer la conception de jeux et de renforcer mes compétences en développement.",
      used: ['Kotlin', 'JavaFX'],
    },
    {
      title: "Générateur Particule",
      subtitle: "Projet Découverte",
      text: "Mon premier projet Go a consisté en la création d'un générateur de particules à l'aide du moteur de jeu 'Ebiten'. Réalisé dans le cadre de ma formation universitaire, ce projet m'a permis de découvrir Go et d'explorer le développement de jeux. Il représente ma première incursion réussie dans le monde de la programmation Go.",
      used: ['Go', 'Ebiten'],
    },
    {
      title: "Plugin",
      subtitle: "Jeu vidéo",
      text: "Ce projet réalisé en Java consistait à créer un plugin pour Minecraft en utilisant Spigot. Ce projet m'a servi de tremplin pour apprendre le Java et explorer l'utilisation de bibliothèques. Le plugin actuel offre des fonctionnalités de commandes simples, et j'ai l'intention de le développer davantage en y ajoutant un système de factions. Cette expérience a été cruciale pour mon apprentissage en tant que débutant en Java et pour ma compréhension de la création de plugins Minecraft.",
      used: ['Java', 'Spigot'],
    },
    {
      title: "Convertisseur d'unité",
      subtitle: "Application",
      text: "Mon tout premier projet en Java a été la création d'un convertisseur d'unités, accompagné d'une interface graphique réalisée avec la bibliothèque Swing. Cette expérience m'a initié à la création d'interfaces graphiques et m'a permis d'apprendre les bases du langage Java. Ce projet marque mes premiers pas dans le développement d'applications Java avec une interface utilisateur.",
      used: ['Java', 'Swing']
    }
  ];

  constructor() {}
}
