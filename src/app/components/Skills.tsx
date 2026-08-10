import { motion } from "motion/react";
import { BrainCircuit, CodeXml, Database, UsersRound } from "lucide-react";
import { type Lang, translations } from "../i18n";

const groups = [
  { key: "languages", en: "Languages", it: "Linguaggi", icon: CodeXml, skills: ["Java", "JavaScript", "Python", "Kotlin", "PHP", "SQL"] },
  { key: "web", en: "Web & Databases", it: "Web & Database", icon: Database, skills: ["HTML", "CSS", "Web development", "MySQL", "Git", "Linux"] },
  { key: "ai", en: "AI & Research", it: "AI & Ricerca", icon: BrainCircuit, skills: ["Large Language Models", "Prompt engineering", "Human-Robot Interaction", "AI-assisted development", "GitHub Copilot"] },
  { key: "professional", en: "Professional Skills", it: "Competenze trasversali", icon: UsersRound, skills: ["Problem solving", "Team working", "Cybersecurity", "Project Management", "Figma Basics"] },
];

export function Skills({ lang }: { lang: Lang }) {
  const t = translations[lang].skills;
  return (
    <section id="skills" className="content-section content-section--tinted">
      <div className="section-shell">
        <div className="section-kicker"><span>02</span>{t.label}</div>
        <div className="section-heading section-heading--row"><h2>{t.headline}</h2><p>{lang === "it" ? "Un quadro chiaro delle tecnologie e delle competenze che porto nei progetti." : "A clear overview of the technologies and skills I bring to projects."}</p></div>
        <div className="skills-grid">
          {groups.map((group, index) => { const Icon = group.icon; return <motion.article className="skill-group glass-surface" key={group.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .08 }}><div><Icon /><span>0{index + 1}</span></div><h3>{group[lang]}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></motion.article>; })}
        </div>
      </div>
    </section>
  );
}
