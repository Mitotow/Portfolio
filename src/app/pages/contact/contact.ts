import {
    Component,
    inject,
    signal,
    ChangeDetectionStrategy,
} from "@angular/core";
import { Clipboard } from "@angular/cdk/clipboard";

@Component({
    selector: "app-contact-page",
    standalone: true,
    templateUrl: "./contact.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./contact.scss"],
})
export class ContactPageComponent {
    private clip = inject(Clipboard);

    alert = signal("copyVerif");
    alertText = signal("Cliquez pour copier");

    onMouseEnter() {
        if (this.alert().includes("copyVerif--show")) return;
        this.alert.set("copyVerif copyVerif--show");
        this.alertText.set("Cliquez pour copier");
    }

    onMouseLeave() {
        if (this.alert().includes("copyVerif--copied copyVerif--show")) return;
        else this.alert.set("copyVerif");
    }

    onCopy(text: string) {
        if (this.alert().includes("copyVerif--copied copyVerif--show")) return;
        this.clip.copy(text);
        this.alert.set("copyVerif copyVerif--copied copyVerif--show");
        this.alertText.set("Copié !");
        clearTimeout(1);
        setTimeout(() => {
            this.alert.set("copyVerif copyVerif--copied");
        }, 1000);
    }
}
