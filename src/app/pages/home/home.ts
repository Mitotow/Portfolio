import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import LinksUtils from "src/utils/LinksUtils";

@Component({
    selector: "app-home-page",
    standalone: true,
    templateUrl: "./home.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./home.scss"],
})
export class HomePageComponent implements OnInit {
    linksUtils!: LinksUtils;

    ngOnInit() {
        this.linksUtils = new LinksUtils();
    }
}
