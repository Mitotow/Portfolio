import Project from "src/app/interfaces/Project";

export const PROJECTS: Project[] = [
    {
        title: "M8DLE",
        subtitle: {
            fr: "Site internet",
            en: "Website",
        },
        text: {
            fr: "Chaque jour, vous devez deviner quel est le joueur (ancien ou actuel) de l'équipe e-sport Gentlemates du jour. J'ai rejoint ce projet en cours de route pour y reprendre la partie API et ainsi pouvoir améliorer la stabilité ainsi que la logique du jeu.",
            en: "",
        },
        git: "https://github.com/Swaannnn/M8DLE",
        deployment: "https://m8dle.com",
        used: ["NextJS", "Postgresql", "Vercel"],
        image: "/assets/projects/m8dle.png",
    },
    {
        title: "Les 3 Moustiquaires",
        subtitle: {
            fr: "Site internet E-commerce",
            en: "E-commerce Website",
        },
        text: {
            fr: "Les 3 Moustiquaires est un site e-commerce qui a pour but de commercialiser des moustiquaires de luxe. Ce projet a eu lieu dans le cadre de ma deuxième année de BUT Informatique et a été réalisé avec trois autres personnes. Personnellement, je me suis majoritairement occupé de la partie back-end avec gestion des produits en base de données.",
            en: "PLACEHOLDER",
        },
        git: "https://github.com/Mitotow",
        used: ["PHP", "Laravel", "MariaDB"],
        image: "/assets/projects/l3m.png",
    },
    {
        title: "HTTP Server",
        subtitle: {
            fr: "Serveur HTTP développé en C",
            en: "HTTP Server made in C",
        },
        text: {
            fr: "Serveur HTTP très simple qui permet de faire des requêtes de types GET ou HEAD. Le but a été durant ems études de comprendre le développement bas niveau en C incluant la gestion de la mémoire, des pointeurs, ...",
            en: "PLACEHOLDER",
        },
        git: "https://github.com/Mitotow/c-http-server",
        used: ["C"],
        image: "/assets/projects/chttp.png",
    },
    {
        title: "Sovereign Stallion",
        subtitle: {
            fr: "Jeu Vidéo",
            en: "Video Game",
        },
        text: {
            fr: "Jeu vidéo développé en python avec la bibliothèque Pygame. C'est un jeu de plateforme dans lequel avec deux autres personnes nous avons essayer de faire un jeu fluide et beau. Le jeu 'na pas été finalisé car nous avons trop misé sur la beauté et la fluidité au lieu des fonctionnalités importantes, nous en avons beaucoup appris.",
            en: "PLACEHOLDER",
        },
        git: "https://github.com/Mitotow/sovereign_stallion",
        used: ["Python", "Pygame"],
        image: "/assets/projects/sast.png",
    },
    {
        title: "Hardcore Redemption",
        subtitle: {
            fr: "Plugin Minecraft",
            en: "Plugin Minecraft",
        },
        text: {
            fr: 'Durant mes années de développement, j\'ai voulu explorer le développement de différents plugins pour le jeu vidéo Minecraft. Un plugin m\'a permis de découvrir un peu plus en profondeur l\'API Spigot : HardcoreRedemption. Le but est simple : permettre à des nouveaux joueurs de faire un monde minecraft en multijoueur dans un mode ressemblant à du Hardcore. Vous avez 3 vies, au bout de ces 3 vies vous êtes "banni" du serveur et pour pouvoir y revenir, vous devez vous faire "réanimer" par un autre joueur qui doit créer un item spécial.',
            en: "PLACEHOLDER",
        },
        git: "https://github.com/Mitotow/HardcoreRedemption",
        used: ["Java", "Spigot"],
    },
    {
        title: "Particles",
        subtitle: {
            fr: "Générateur de particules développé en Go",
            en: "Particle generator made in Go",
        },
        text: {
            fr: "Pendant ma première année de BUT Informatique, j'ai pu réaliser un \"générateur de particule\" en Go. J'ai pu explorer pour la première fois les bases sur les pointeurs et le développement par structure.",
            en: "PLACEHOLDER",
        },
        git: "https://github.com/Mitotow/GoParticleGenerator",
        used: ["Go", "Ebiten"],
        image: "/assets/projects/pg.png",
    },
];
