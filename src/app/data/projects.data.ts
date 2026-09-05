import Project from "src/app/interfaces/Project";

export const PROJECTS: Project[] = [
    {
        title: "M8DLE",
        subtitle: {
            fr: "Site internet",
            en: "Website",
        },
        text: {
            fr: "Chaque jour, vous devez deviner quel est le joueur du jour (ancien ou actuel) de l'équipe e-sport Gentlemates. J'ai rejoint ce projet en cours de route pour en reprendre la partie API et ainsi améliorer la stabilité ainsi que la logique du jeu.",
            en: "Every day, you have to guess the player of the day (past or present) from the Gentlemates e-sport team. I joined this project along the way to take over the API side, which allowed me to improve both the stability and the game logic.",
        },
        git: "https://github.com/Swaannnn/M8DLE",
        deployment: "https://m8dle.com",
        used: ["NextJS", "Postgresql", "Vercel"],
        image: "/assets/projects/m8dle.png",
    },
    {
        title: "MitoBoat",
        subtitle: {
            fr: "ChatBot Twitch",
            en: "Twitch ChatBot",
        },
        text: {
            fr: "Bot simple permettant la création de commandes par les streamers, avec la gestion du chat IRC ainsi que la possibilité d'interagir avec la chaîne directement via l'API Helix de Twitch. Au départ, ce projet était juste prévu pour apprendre la gestion d'un chat IRC Twitch en Go et rafraîchir mes connaissances sur ce langage de programmation. Finalement, je m'en suis servi comme base pour apprendre à manipuler l'IA Claude avec Claude Code intégré à NeoVim. J'ai donc intégré Claude à mon workflow de développement, ce qui m'assure des tests unitaires ainsi qu'une architecture optimale pour mes besoins.",
            en: "A simple bot that lets streamers create their own commands, handling the IRC chat as well as interacting with the channel directly through Twitch's Helix API. At first, this project was only meant to teach me how to handle a Twitch IRC chat in Go and to refresh my knowledge of that programming language. In the end, I used it as a base to learn how to work with Claude through Claude Code integrated into NeoVim. I therefore added Claude to my development workflow, which guarantees me unit tests as well as an architecture that fits my needs.",
        },
        git: "https://github.com/Mitotow/MitoBoat",
        used: ["Go", "Twitch"],
        image: "/assets/projects/twitch.jpg",
    },
    {
        title: "Les 3 Moustiquaires",
        subtitle: {
            fr: "Site internet E-commerce",
            en: "E-commerce Website",
        },
        text: {
            fr: "Les 3 Moustiquaires est un site e-commerce qui a pour but de commercialiser des moustiquaires de luxe. Ce projet a été réalisé dans le cadre de ma deuxième année de BUT Informatique, avec trois autres personnes. Personnellement, je me suis majoritairement occupé de la partie back-end, avec la gestion des produits en base de données.",
            en: "Les 3 Moustiquaires is an e-commerce website built to sell luxury mosquito nets. This project was carried out during my second year of the BUT in Computer Science, together with three other people. Personally, I mainly worked on the back-end side, handling the products in the database.",
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
            fr: "Serveur HTTP très simple qui permet de faire des requêtes de type GET ou HEAD. Le but, durant mes études, a été de comprendre le développement bas niveau en C, incluant la gestion de la mémoire, des pointeurs, etc.",
            en: "A very simple HTTP server that handles GET and HEAD requests. During my studies, the goal was to understand low-level development in C, including memory management, pointers, and so on.",
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
            fr: "Jeu vidéo développé en Python avec la bibliothèque Pygame. C'est un jeu de plateforme dans lequel, avec deux autres personnes, nous avons essayé de faire un jeu fluide et beau. Le jeu n'a pas été finalisé car nous avons trop misé sur la beauté et la fluidité au lieu des fonctionnalités importantes, mais nous en avons beaucoup appris.",
            en: "A video game developed in Python with the Pygame library. It is a platformer that two other people and I tried to make both smooth and good-looking. The game was never finished because we focused too much on looks and smoothness instead of the important features, but we learned a lot from it.",
        },
        git: "https://github.com/Mitotow/sovereign_stallion",
        used: ["Python", "Pygame"],
        image: "/assets/projects/sast.png",
    },
    {
        title: "Hardcore Redemption",
        subtitle: {
            fr: "Plugin Minecraft",
            en: "Minecraft Plugin",
        },
        text: {
            fr: "Durant mes années de développement, j'ai voulu explorer la création de différents plugins pour le jeu vidéo Minecraft. L'un d'eux m'a permis de découvrir un peu plus en profondeur l'API Spigot : HardcoreRedemption. Le but est simple : permettre à de nouveaux joueurs de jouer sur un monde Minecraft en multijoueur dans un mode ressemblant au Hardcore. Vous avez 3 vies ; une fois ces 3 vies perdues, vous êtes \"banni\" du serveur et, pour pouvoir y revenir, vous devez vous faire \"réanimer\" par un autre joueur, qui doit créer un item spécial.",
            en: 'Over my years of development, I wanted to explore building various plugins for the video game Minecraft. One of them let me dig a little deeper into the Spigot API: HardcoreRedemption. The idea is simple: it lets new players share a Minecraft world in multiplayer in a Hardcore-like mode. You have 3 lives, and once those 3 lives are gone you are "banned" from the server. To come back, you must be "revived" by another player, who has to craft a special item.',
        },
        git: "https://github.com/Mitotow/HardcoreRedemption",
        used: ["Java", "Spigot"],
        image: "/assets/projects/spigot.png",
    },
    {
        title: "Particles",
        subtitle: {
            fr: "Générateur de particules développé en Go",
            en: "Particle generator made in Go",
        },
        text: {
            fr: "Pendant ma première année de BUT Informatique, j'ai pu réaliser un \"générateur de particules\" en Go. J'ai exploré pour la première fois les bases des pointeurs et le développement par structures.",
            en: 'During my first year of the BUT in Computer Science, I built a "particle generator" in Go. It was my first look at the basics of pointers and of development with structs.',
        },
        git: "https://github.com/Mitotow/GoParticleGenerator",
        used: ["Go", "Ebiten"],
        image: "/assets/projects/pg.png",
    },
    {
        title: "Processing Kinect",
        subtitle: {
            fr: "Traqueur de mouvement",
            en: "Movement tracker",
        },
        text: {
            fr: "À l'aide de Processing et d'une Kinect Xbox, j'ai développé un programme capable de suivre les mouvements d'une personne grâce à la bibliothèque SimpleOpenNI. L'objectif final était de piloter une lampe de chevet articulée (type Luxo Junior) en reproduisant les mouvements de l'utilisateur placé devant la Kinect.",
            en: "Using Processing and an Xbox Kinect, I built a program able to track a person's movements with the SimpleOpenNI library. The end goal was to drive an articulated bedside lamp (Luxo Junior style) by mirroring the movements of the user standing in front of the Kinect.",
        },
        git: "https://github.com/Mitotow/Projet_TSTI2D_Kinect",
        used: ["Java", "Processing"],
        image: "/assets/projects/kinect.png",
    },
];
