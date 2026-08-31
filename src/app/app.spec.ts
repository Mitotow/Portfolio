import { TestBed } from "@angular/core/testing";
import { App } from "./app";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideTranslateService } from "@ngx-translate/core";

describe("AppComponent", () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [
                provideRouter(appRoutes),
                provideTranslateService({ lang: "fr", fallbackLang: "fr" }),
            ],
            imports: [App],
        })
    );

    it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'portfolio'`, () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app.title).toEqual("portfolio");
    });

    it("should render the nav and router outlet", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector("app-nav")).toBeTruthy();
        expect(compiled.querySelector("router-outlet")).toBeTruthy();
    });
});
