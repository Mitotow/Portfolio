import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-notfound-page",
    standalone: true,
    templateUrl: "./notfound.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./notfound.scss"],
})
export class NotfoundPageComponent {}
