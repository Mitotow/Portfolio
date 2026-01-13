import { Component, inject, OnInit } from "@angular/core";
import Project from "src/interfaces/Project";
import { NgStyle } from "@angular/common";
import LinksUtils from "src/utils/LinksUtils";
import { DataStore } from "src/stores/ProjectsStore";

@Component({
    selector: "app-projects-page",
    standalone: true,
    templateUrl: "./projects.html",
    styleUrls: ["./projects.scss"],
    imports: [NgStyle],
})
export class ProjectsPageComponent implements OnInit {
    private dataStore = inject(DataStore);
    linksUtils!: LinksUtils;
    loading = true;
    projects: Project[] = [];

    ngOnInit() {
        this.fetchProjects();
        this.linksUtils = new LinksUtils();
    }

    fetchProjects() {
        this.dataStore.getProjects().subscribe({
            next: (res) => {
                if (res.status == 200 && res.body !== null) {
                    this.projects = res.body;
                }

                this.loading = false;
            },
            error: () => {
                this.loading = false;
            },
        });
    }

    openSource = (url: string) => window.open(url, "_blank");
}
