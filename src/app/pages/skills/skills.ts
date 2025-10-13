import { Component, inject, OnInit } from "@angular/core";
import SkillElement, { SkillType } from "src/interfaces/SkillElement";
import LinksUtils from "src/utils/LinksUtils";
import { DataStore } from "src/stores/ProjectsStore";

@Component({
    selector: "app-skills-page",
    standalone: true,
    templateUrl: "./skills.html",
    styleUrls: ["./skills.scss"],
})
export class SkillsPageComponent implements OnInit {
    private dataStore = inject(DataStore);
    linksUtils!: LinksUtils;
    loading = true;
    skills: SkillElement[] = [];

    ngOnInit() {
        this.fetchSkills();
        this.linksUtils = new LinksUtils();
    }

    getLanguages() {
        return this.filter(SkillType.LANGUAGE);
    }

    getTools() {
        return this.filter(SkillType.TOOL);
    }

    getFrameworks() {
        return this.filter(SkillType.FRAMEWORK);
    }

    fetchSkills() {
        this.dataStore.getSkills().subscribe({
            next: res => {
                if (res.status == 200 && res.body !== null) {
                    this.skills = res.body;
                }

                this.loading = false;
            },
            error: () => {
                this.loading = false;
            },
        });
    }

    private filter(type: SkillType) {
        return this.skills.filter(s => s.type == type);
    }
}
