import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideTranslateService } from "@ngx-translate/core";

import { SkillsPageComponent } from "./skills";

describe("SkillsPageComponent", () => {
    let component: SkillsPageComponent;
    let fixture: ComponentFixture<SkillsPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SkillsPageComponent],
            providers: [provideTranslateService({ lang: "fr", fallbackLang: "fr" })],
        });
        fixture = TestBed.createComponent(SkillsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
