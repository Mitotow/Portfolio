import { Injectable } from "@angular/core";
import { constants } from "src/constants";

@Injectable({ providedIn: "root" })
export class LinksUtils {
    openGithub() {
        this.open(constants.GITHUB_URL);
    }

    openLinkedin() {
        this.open(constants.LINKEDIN_URL);
    }

    private open(link: string) {
        window.open(link, "_blank");
    }
}
