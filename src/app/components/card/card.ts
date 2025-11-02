import { Component, Input } from "@angular/core";
import LinksUtils from "src/utils/LinksUtils";

interface CardButton {
    name: string;
    href: string;
    icon?: string;
}

@Component({
    selector: "app-card",
    standalone: true,
    templateUrl: "./card.html",
    styleUrls: ["./card.scss"],
})
export class CardComponent {
    @Input() title?: string;
    @Input() subtitle?: string;
    @Input() content?: string;
    @Input() buttons?: CardButton[];
    @Input() imgSrc?: string;
    @Input() imgAlt?: string;
    protected linkUtils = new LinksUtils();
}
