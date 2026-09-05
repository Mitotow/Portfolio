import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home/home";
import { ExperiencePageComponent } from "./pages/experience/experience";
import { SkillsPageComponent } from "./pages/skills/skills";
import { NotfoundPageComponent } from "./pages/notfound/notfound";
import { ProjectsPageComponent } from "./pages/projects/projects";
import { ContactPageComponent } from "./pages/contact/contact";

const appRoutes: Routes = [
    {
        path: "",
        component: HomePageComponent,
    },
    {
        path: "experience",
        component: ExperiencePageComponent,
    },
    {
        path: "skills",
        component: SkillsPageComponent,
    },
    {
        path: "projects",
        component: ProjectsPageComponent,
    },
    {
        path: "contact",
        component: ContactPageComponent,
    },
    {
        path: "**",
        component: NotfoundPageComponent,
    },
];

export { appRoutes };
