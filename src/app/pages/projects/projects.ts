import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
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
    linksUtils = inject(LinksUtils);
    projects = PROJECTS;

    openSource = (url: string) => window.open(url, "_blank");
}
