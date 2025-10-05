import { Component } from "@angular/core";
import Project from "src/interfaces/Project";
import data from "@data/projects.json";
import { NgStyle } from "@angular/common";

@Component({
    selector: "app-projects-page",
    standalone: true,
    templateUrl: "./projects.html",
    styleUrls: ["./projects.scss"],
    imports: [NgStyle],
})
export class ProjectsPageComponent {
    projects: Project[] = data;

    openSource = (url: string) => window.open(url, "_blank");
}
