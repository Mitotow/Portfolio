enum SkillType {
    LANGUAGE = "language",
    TOOL = "tool",
    FRAMEWORK = "framework",
}

export { SkillType };

export default interface SkillElement {
    iconClass: string;
    type: SkillType;
    name: string;
}
