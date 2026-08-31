import { Component, inject, signal, ChangeDetectionStrategy } from "@angular/core";
import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import { TranslatePipe } from "@ngx-translate/core";
import Project from "src/app/interfaces/Project";
import { LinksUtils } from "src/app/utils/LinksUtils";
import { DataStore } from "src/app/services/data.store";
import { loadResource } from "src/app/services/load-resource";
import { AsyncStateComponent } from "src/app/components/async-state/async-state";

@Component({
    selector: "app-projects-page",
    standalone: true,
    templateUrl: "./projects.html",
    styleUrls: ["./projects.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslatePipe, AsyncStateComponent],
    animations: [
        trigger("listStagger", [
            transition("* => *", [
                query(
                    ":enter",
                    [
                        style({ opacity: 0, transform: "scale(0)" }),
                        stagger(
                            "250ms",
                            animate("1s ease", style({ opacity: 1, transform: "scale(1)" }))
                        ),
                    ],
                    { optional: true }
                ),
            ]),
        ]),
    ],
})
export class ProjectsPageComponent {
    private dataStore = inject(DataStore);
    linksUtils = inject(LinksUtils);
    loading = signal(true);
    projects = signal<Project[]>([]);

    constructor() {
        loadResource(this.loading, this.projects, this.dataStore.getProjects());
    }

    openSource = (url: string) => window.open(url, "_blank");
}
