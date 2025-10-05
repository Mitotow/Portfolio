import {
    Component,
    ElementRef,
    inject,
    QueryList,
    ViewChildren,
} from "@angular/core";
import { Router } from "@angular/router";
import Nav from "src/interfaces/Nav";

@Component({
    selector: "app-nav",
    standalone: true,
    templateUrl: "./nav.html",
    styleUrls: ["./nav.scss"],
})
export class NavComponent {
    private router = inject(Router);
    @ViewChildren("navButton") buttons!: QueryList<
        ElementRef<HTMLButtonElement>
    >;

    navs: Nav[] = [
        {
            label: "Accueil",
            url: "/",
            icon: "/assets/nav/home.svg",
            alt: "home",
        },
        {
            label: "Compétences",
            url: "/skills",
            icon: "/assets/nav/skills.svg",
            alt: "skills",
        },
        {
            label: "Projets",
            url: "/projects",
            icon: "/assets/nav/projects.svg",
            alt: "projects",
        },
        {
            label: "Contact",
            url: "/contact",
            icon: "/assets/nav/contact.svg",
            alt: "contact",
        },
    ];

    handle(id: string, path: string) {
        this.router.navigate([path]);
        this.buttons.find(b => b.nativeElement.id === id)?.nativeElement.blur();
    }
}
