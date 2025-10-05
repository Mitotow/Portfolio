import { Component, inject } from "@angular/core";
import { Clipboard } from "@angular/cdk/clipboard";

@Component({
    selector: "app-contact-page",
    standalone: true,
    templateUrl: "./contact.html",
    styleUrls: ["./contact.scss"],
})
export class ContactPageComponent {
    private clip = inject(Clipboard);

    alert = "copyVerif";
    alertText = "Cliquez pour copier";

    onMouseEnter() {
        if (this.alert.includes("copyVerif--show")) return;
        this.alert = "copyVerif copyVerif--show";
        this.alertText = "Cliquez pour copier";
    }

    onMouseLeave() {
        if (this.alert.includes("copyVerif--copied copyVerif--show")) return;
        else this.alert = "copyVerif";
    }

    onCopy(text: string) {
        if (this.alert.includes("copyVerif--copied copyVerif--show")) return;
        this.clip.copy(text);
        this.alert = "copyVerif copyVerif--copied copyVerif--show";
        this.alertText = "Copié !";
        clearTimeout(1);
        setTimeout(() => {
            this.alert = "copyVerif copyVerif--copied";
        }, 1000);
    }
}
