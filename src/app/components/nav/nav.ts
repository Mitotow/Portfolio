import {
    Component,
    ElementRef,
    inject,
    QueryList,
    ViewChildren,
    ChangeDetectionStrategy,
} from "@angular/core";
import { Router } from "@angular/router";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import Nav from "src/app/interfaces/Nav";

@Component({
    selector: "app-nav",
    standalone: true,
    templateUrl: "./nav.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./nav.scss"],
    imports: [TranslatePipe],
})
export class NavComponent {
    private router = inject(Router);
    protected translate = inject(TranslateService);
    @ViewChildren("navButton") buttons!: QueryList<
        ElementRef<HTMLButtonElement>
    >;

    navs: Nav[] = [
        {
            labelKey: "nav.home",
            url: "/",
            icon: "/assets/nav/home.svg",
            alt: "home",
        },
        {
            labelKey: "nav.skills",
            url: "/skills",
            icon: "/assets/nav/skills.svg",
            alt: "skills",
        },
        {
            labelKey: "nav.projects",
            url: "/projects",
            icon: "/assets/nav/projects.svg",
            alt: "projects",
        },
        {
            labelKey: "nav.contact",
            url: "/contact",
            icon: "/assets/nav/contact.svg",
            alt: "contact",
        },
    ];

    handle(id: string, path: string) {
        this.router.navigate([path]).then(() => {
            this.buttons
                .find((b) => b.nativeElement.id === id)
                ?.nativeElement.blur();
        });
    }

    toggleLang() {
        this.translate.use(this.translate.currentLang() === "fr" ? "en" : "fr");
    }
}
