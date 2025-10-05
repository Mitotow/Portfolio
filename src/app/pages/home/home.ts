import { Component } from "@angular/core";

@Component({
    selector: "app-home-page",
    standalone: true,
    templateUrl: "./home.html",
    styleUrls: ["./home.scss"],
})
export class HomePageComponent {
    open(link: string) {
        window.open(link, "_blank");
    }
}
