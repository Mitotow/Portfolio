import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { LinksUtils } from "src/app/utils/LinksUtils";
import { PROJECTS } from "src/app/data/projects.data";
import { translateLocalizedText } from "src/app/utils/translateUtils";
import LocalizedText from "src/app/interfaces/LocalizedText";

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
    translate = inject(TranslateService);
    projects = PROJECTS;

    openSource = (url: string) => window.open(url, "_blank");

    text = (value: LocalizedText) =>
        translateLocalizedText(this.translate, value);
}
