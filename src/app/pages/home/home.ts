import { Component, OnInit } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import LinksUtils from "src/utils/LinksUtils";

@Component({
    selector: "app-home-page",
    standalone: true,
    templateUrl: "./home.html",
    styleUrls: ["./home.scss"],
    imports: [NgOptimizedImage],
})
export class HomePageComponent implements OnInit {
    linksUtils!: LinksUtils;

    ngOnInit() {
        this.linksUtils = new LinksUtils();
    }
}
