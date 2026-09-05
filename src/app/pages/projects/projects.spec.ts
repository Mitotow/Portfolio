import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideTranslateService } from "@ngx-translate/core";

import { ProjectsPageComponent } from "./projects";

describe("ProjectsPageComponent", () => {
    let component: ProjectsPageComponent;
    let fixture: ComponentFixture<ProjectsPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ProjectsPageComponent],
            providers: [
                provideTranslateService({ lang: "fr", fallbackLang: "fr" }),
            ],
        });
        fixture = TestBed.createComponent(ProjectsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
