import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NotfoundPageComponent } from "./notfound";

describe("NotfoundPageComponent", () => {
    let component: NotfoundPageComponent;
    let fixture: ComponentFixture<NotfoundPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NotfoundPageComponent],
        });
        fixture = TestBed.createComponent(NotfoundPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
