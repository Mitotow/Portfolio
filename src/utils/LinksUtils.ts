import { constants } from "src/constants";

export default class LinksUtils {
    openGithub() {
        this.open(constants.GITHUB_URL);
    }

    openLinkedin() {
        this.open(constants.LINKEDIN_URL);
    }

    openBlank(href: string) {
        this.open(href);
    }

    private open(link: string) {
        window.open(link, "_blank");
    }
}
