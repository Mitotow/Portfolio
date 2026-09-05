import { Component, ChangeDetectionStrategy, effect, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { NavComponent } from "./components/nav/nav";
import { constants } from "src/constants";

@Component({
    selector: "app-root",
    imports: [RouterOutlet, NavComponent],
    templateUrl: "./app.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: "./app.scss",
})
export class App {
    title = "portfolio";
    private translate = inject(TranslateService);

    constructor() {
        effect(() => {
            const lang = this.translate.currentLang();
            if (!lang) return;
            document.documentElement.lang = lang;
            localStorage.setItem(constants.LANG_STORAGE_KEY, lang);
        });
    }
}
