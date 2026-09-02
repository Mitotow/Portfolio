import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { LinksUtils } from "src/app/utils/LinksUtils";
import { SKILLS } from "src/app/data/skills.data";
import SkillElement, { SkillType } from "src/app/interfaces/SkillElement";

interface SkillGroup {
    type: SkillType;
    titleKey: string;
    items: SkillElement[];
}

@Component({
    selector: "app-skills-page",
    standalone: true,
    templateUrl: "./skills.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./skills.scss"],
    imports: [TranslatePipe],
})
export class SkillsPageComponent {
    linksUtils = inject(LinksUtils);
    skills = SKILLS;

    groups: SkillGroup[] = (
        [
            { type: SkillType.LANGUAGE, titleKey: "skills.languages" },
            { type: SkillType.TOOL, titleKey: "skills.tools" },
            { type: SkillType.FRAMEWORK, titleKey: "skills.frameworks" },
        ] as const
    )
        .map(({ type, titleKey }) => ({
            type,
            titleKey,
            items: this.skills.filter((s) => s.type === type),
        }))
        .filter((group) => group.items.length > 0);
}
