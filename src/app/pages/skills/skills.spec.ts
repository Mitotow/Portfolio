import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SkillsPageComponent } from "./skills";

describe("SkillsPageComponent", () => {
    let component: SkillsPageComponent;
    let fixture: ComponentFixture<SkillsPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SkillsPageComponent],
        });
        fixture = TestBed.createComponent(SkillsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
