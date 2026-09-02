import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideNoopAnimations } from "@angular/platform-browser/animations";
import { provideTranslateService } from "@ngx-translate/core";

import { ExperiencePageComponent } from "./experience";

describe("ExperiencePageComponent", () => {
    let component: ExperiencePageComponent;
    let fixture: ComponentFixture<ExperiencePageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ExperiencePageComponent],
            providers: [
                provideTranslateService({ lang: "fr", fallbackLang: "fr" }),
                provideNoopAnimations(),
            ],
        });
        fixture = TestBed.createComponent(ExperiencePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
