import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomePageComponent } from "./home";

describe("HomePageComponent", () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HomePageComponent],
        });
        fixture = TestBed.createComponent(HomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
