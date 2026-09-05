import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideTranslateService } from "@ngx-translate/core";

import { NotfoundPageComponent } from "./notfound";

describe("NotfoundPageComponent", () => {
    let component: NotfoundPageComponent;
    let fixture: ComponentFixture<NotfoundPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NotfoundPageComponent],
            providers: [provideTranslateService({ lang: "fr", fallbackLang: "fr" })],
        });
        fixture = TestBed.createComponent(NotfoundPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
