import LocalizedText from "./LocalizedText";

export default interface Project {
    title: string;
    subtitle: LocalizedText;
    text: LocalizedText;
    git: string;
    deployment?: string;
    used: string[];
    image?: string;
}
