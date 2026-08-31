import { Component, inject, signal, computed, ChangeDetectionStrategy } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import SkillElement, { SkillType } from "src/app/interfaces/SkillElement";
import { LinksUtils } from "src/app/utils/LinksUtils";
import { DataStore } from "src/app/services/data.store";
import { loadResource } from "src/app/services/load-resource";
import { AsyncStateComponent } from "src/app/components/async-state/async-state";

interface SkillGroup {
    titleKey: string;
    items: SkillElement[];
}

@Component({
    selector: "app-skills-page",
    standalone: true,
    templateUrl: "./skills.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./skills.scss"],
    imports: [TranslatePipe, AsyncStateComponent],
})
export class SkillsPageComponent {
    private dataStore = inject(DataStore);
    linksUtils = inject(LinksUtils);
    loading = signal(true);
    skills = signal<SkillElement[]>([]);

    groups = computed<SkillGroup[]>(() => [
        { titleKey: "skills.languages", items: this.filter(SkillType.LANGUAGE) },
        { titleKey: "skills.tools", items: this.filter(SkillType.TOOL) },
        { titleKey: "skills.frameworks", items: this.filter(SkillType.FRAMEWORK) },
    ]);

    constructor() {
        loadResource(this.loading, this.skills, this.dataStore.getSkills());
    }

    private filter(type: SkillType) {
        return this.skills().filter((s) => s.type == type);
    }
}
