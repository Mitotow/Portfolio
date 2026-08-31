import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideNoopAnimations } from "@angular/platform-browser/animations";
import { provideTranslateService } from "@ngx-translate/core";

import { ContactPageComponent } from "./contact";

describe("ContactPageComponent", () => {
    let component: ContactPageComponent;
    let fixture: ComponentFixture<ContactPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ContactPageComponent],
            providers: [
                provideTranslateService({ lang: "fr", fallbackLang: "fr" }),
                provideNoopAnimations(),
            ],
        });
        fixture = TestBed.createComponent(ContactPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
