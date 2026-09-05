import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideTranslateService } from "@ngx-translate/core";

import { ContactPageComponent } from "./contact";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Long enough for the 1150ms copy animation to finish and fire animationend.
const COPY_ANIMATION_TIMEOUT = 1500;

describe("ContactPageComponent", () => {
    let component: ContactPageComponent;
    let fixture: ComponentFixture<ContactPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ContactPageComponent],
            providers: [
                provideTranslateService({ lang: "fr", fallbackLang: "fr" }),
            ],
        });
        fixture = TestBed.createComponent(ContactPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    const button = (): HTMLElement =>
        fixture.nativeElement.querySelector("button");
    const toast = (): HTMLElement =>
        fixture.nativeElement.querySelector(".copyVerif");
    const isVisible = () =>
        getComputedStyle(toast()).transform === "matrix(1, 0, 0, 1, 0, 0)";

    const hover = () => {
        button().dispatchEvent(new MouseEvent("mouseenter"));
        fixture.detectChanges();
    };
    const unhover = () => {
        button().dispatchEvent(new MouseEvent("mouseleave"));
        fixture.detectChanges();
    };

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("shows the toast on hover and hides it on leave", async () => {
        hover();
        await wait(300);
        expect(isVisible()).toBe(true);

        unhover();
        await wait(300);
        expect(isVisible()).toBe(false);
    });

    // Regression: the copy animation must release the isCopied guard when it
    // ends, or every later hover is swallowed and the toast never returns.
    it("shows the toast again after a copy", async () => {
        hover();
        await wait(300);

        button().click();
        fixture.detectChanges();
        expect(component.isCopied()).toBe(true);

        // The pointer commonly leaves while the copy animation is still running.
        unhover();
        await wait(COPY_ANIMATION_TIMEOUT);
        fixture.detectChanges();
        expect(component.state()).toBe("idle");
        expect(component.isCopied()).toBe(false);

        hover();
        await wait(300);
        expect(isVisible()).toBe(true);
    });

    // Regression: repeated copies must alternate keyframe names, otherwise CSS
    // will not restart an animation that is already applied.
    it("replays the copy animation on a second copy", async () => {
        button().click();
        fixture.detectChanges();
        expect(toast().classList).toContain("copyVerif--copiedA");

        await wait(COPY_ANIMATION_TIMEOUT);
        fixture.detectChanges();

        button().click();
        fixture.detectChanges();
        expect(toast().classList).toContain("copyVerif--copiedB");
    });
});
