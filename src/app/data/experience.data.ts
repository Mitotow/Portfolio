import ExperienceStep from "src/app/interfaces/Experience";
import WorkExperience from "src/app/interfaces/WorkExperience";

export const EXPERIENCE: ExperienceStep[] = [
    {
        period: "2019 - 2022",
        institution: "Lycée Gaspard Monge la Chauvinière - Orvault",
        title: { fr: "STI2D", en: "STI2D" },
        description: {
            fr: "Le bac STI2D option Systèmes d'information et numérique, forme aux fondamentaux du numérique : traitement de l'information, réseaux, programmation et interfaçage matériel-logiciel.",
            en: "PLACEHOLDER",
        },
        image: "/assets/experiences/monge.png",
    },
    {
        period: "2022 - 2025",
        institution: "IUT de Nantes - Nantes",
        title: { fr: "BUT Informatique", en: "BUT Computer Science" },
        description: {
            fr: "Le BUT Informatique à l'IUT de Nantes (parcours Réalisation d'applications : conception, développement, validation) forme à l'ensemble du cycle de vie logiciel, de la conception architecturale au développement applicatif et aux tests de validation, à travers une pédagogie par projets.",
            en: "PLACEHOLDER",
        },
        image: "/assets/experiences/iut.png",
    },
    {
        period: "2025 - 2028",
        institution: "ISEN Ouest - Nantes",
        title: { fr: "École d'ingénieur", en: "Engineering school" },
        description: {
            fr: "La formation d'ingénieur à l'ISEN Ouest repose sur un tronc commun fort en électronique, programmation sur microcontrôleurs, Big Data, suivi d'une spécialisation en cybersécurité (cryptographie, pentest, cloud computing).",
            en: "PLACEHOLDER",
        },
        image: "/assets/experiences/isen.jpg",
    },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
        image: "/assets/experiences/CGI.png",
        title: { fr: "CGI - Développeur Java en Alternance", en: "CGI" },
        subtitle: "2024 - 2028",
        description: {
            fr: "Développement et maintenance d'applications Java, participation aux rituels agiles et collaboration technique pour répondre aux besoins métiers du groupe La Poste.",
            en: "PLACEHOLDER — briefly describe your mission, the context and what you achieved.",
        },
    },
];
