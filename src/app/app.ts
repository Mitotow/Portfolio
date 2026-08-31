import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavComponent } from "./components/nav/nav";

@Component({
    selector: "app-root",
    imports: [CommonModule, RouterOutlet, NavComponent],
    templateUrl: "./app.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: "./app.scss",
})
export class App {
    title = "portfolio";
}
