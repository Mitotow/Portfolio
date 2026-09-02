import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { EXPERIENCE, WORK_EXPERIENCE } from "src/app/data/experience.data";
import LocalizedText from "src/app/interfaces/LocalizedText";

@Component({
    selector: "app-experience-page",
    standalone: true,
    templateUrl: "./experience.html",
    styleUrls: ["./experience.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslatePipe],
    animations: [
        trigger("listStagger", [
            transition("* => *", [
                query(
                    ":enter",
                    [
                        style({ opacity: 0, transform: "translateX(-20px)" }),
                        stagger(
                            "200ms",
                            animate("0.6s ease", style({ opacity: 1, transform: "translateX(0)" }))
                        ),
                    ],
                    { optional: true }
                ),
            ]),
        ]),
    ],
})
export class ExperiencePageComponent {
    private translate = inject(TranslateService);

    steps = EXPERIENCE;
    workExperience = WORK_EXPERIENCE;

    text(value: LocalizedText): string {
        const lang = this.translate.currentLang();
        return (lang && value[lang as keyof LocalizedText]) || value.fr;
    }
}
