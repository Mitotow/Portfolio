import LocalizedText from "src/app/interfaces/LocalizedText";

export default interface ExperienceStep {
    period: string;
    institution: string;
    title: LocalizedText;
    description: LocalizedText;
    image: string;
}
