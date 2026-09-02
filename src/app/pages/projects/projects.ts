import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { LinksUtils } from "src/app/utils/LinksUtils";
import { PROJECTS } from "src/app/data/projects.data";

@Component({
    selector: "app-projects-page",
    standalone: true,
    templateUrl: "./projects.html",
    styleUrls: ["./projects.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslatePipe],
})
export class ProjectsPageComponent {
    linksUtils = inject(LinksUtils);
    projects = PROJECTS;

    openSource = (url: string) => window.open(url, "_blank");
}
