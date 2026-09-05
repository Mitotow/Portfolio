import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { EXPERIENCE, WORK_EXPERIENCE } from "src/app/data/experience.data";
import LocalizedText from "src/app/interfaces/LocalizedText";
import { translateLocalizedText } from "src/app/utils/translateUtils";

@Component({
    selector: "app-experience-page",
    standalone: true,
    templateUrl: "./experience.html",
    styleUrls: ["./experience.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslatePipe],
})
export class ExperiencePageComponent {
    private translate = inject(TranslateService);

    steps = EXPERIENCE;
    workExperience = WORK_EXPERIENCE;

    text = (value: LocalizedText) =>
        translateLocalizedText(this.translate, value);
}
