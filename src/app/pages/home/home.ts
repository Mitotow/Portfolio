import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { LinksUtils } from "src/app/utils/LinksUtils";

@Component({
    selector: "app-home-page",
    standalone: true,
    templateUrl: "./home.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./home.scss"],
    imports: [TranslatePipe],
})
export class HomePageComponent {
    linksUtils = inject(LinksUtils);
}
