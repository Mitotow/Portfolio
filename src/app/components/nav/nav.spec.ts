import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideTranslateService } from "@ngx-translate/core";

import { NavComponent } from "./nav";

describe("NavComponent", () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NavComponent],
            providers: [provideTranslateService({ lang: "fr", fallbackLang: "fr" })],
        });
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
