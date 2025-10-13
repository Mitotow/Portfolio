import { Component, OnInit } from "@angular/core";
import LinksUtils from "src/utils/LinksUtils";

@Component({
    selector: "app-home-page",
    standalone: true,
    templateUrl: "./home.html",
    styleUrls: ["./home.scss"],
})
export class HomePageComponent implements OnInit {
    linksUtils!: LinksUtils;

    ngOnInit() {
        this.linksUtils = new LinksUtils();
    }
}
