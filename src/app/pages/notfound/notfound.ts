import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
    selector: "app-notfound-page",
    standalone: true,
    templateUrl: "./notfound.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./notfound.scss"],
    imports: [TranslatePipe],
})
export class NotfoundPageComponent {}
