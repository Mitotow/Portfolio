import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideTranslateService } from "@ngx-translate/core";

import { HomePageComponent } from "./home";

describe("HomePageComponent", () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HomePageComponent],
            providers: [provideTranslateService({ lang: "fr", fallbackLang: "fr" })],
        });
        fixture = TestBed.createComponent(HomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
