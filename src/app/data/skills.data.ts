import SkillElement, { SkillType } from "src/app/interfaces/SkillElement";

export const SKILLS: SkillElement[] = [
  { name: "C", type: SkillType.LANGUAGE, iconClass: "devicon-c-original" },
  { name: "Go", type: SkillType.LANGUAGE, iconClass: "devicon-go-original-wordmark" },
  { name: "TypeScript", type: SkillType.LANGUAGE, iconClass: "devicon-typescript-plain" },
  { name: "Python", type: SkillType.LANGUAGE, iconClass: "devicon-python-plain" },
  { name: "Java", type: SkillType.LANGUAGE, iconClass: "devicon-java-plain" },
  { name: "Git", type: SkillType.TOOL, iconClass: "devicon-git-plain" },
  { name: "Docker", type: SkillType.TOOL, iconClass: "devicon-docker-plain" },
  { name: "VS Code", type: SkillType.TOOL, iconClass: "devicon-vscode-plain" },
  { name: "NeoVim", type: SkillType.TOOL, iconClass: "devicon-neovim-plain" },
  { name: "Angular", type: SkillType.FRAMEWORK, iconClass: "devicon-angularjs-plain" },
  { name: "React", type: SkillType.FRAMEWORK, iconClass: "devicon-react-original" },
  { name: "Spring Boot", type: SkillType.FRAMEWORK, iconClass: "devicon-spring-original" }
];
