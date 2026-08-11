import { motion } from "motion/react";
import { BrainCircuit, CodeXml, Database, UsersRound } from "lucide-react";
import { type Lang, translations } from "../i18n";

const groups = [
  { key: "languages", en: "Languages", it: "Linguaggi", icon: CodeXml, skills: ["Java", "JavaScript", "Python", "Kotlin", "PHP", "SQL"] },
  { key: "web", en: "Web & Databases", it: "Web & Database", icon: Database, skills: ["HTML", "CSS", "Web development", "MySQL", "Git", "Linux"] },
  { key: "ai", en: "AI & Research", it: "AI & Ricerca", icon: BrainCircuit, skills: ["Large Language Models", "Prompt engineering", "Human-Robot Interaction", "AI-assisted development", "GitHub Copilot"] },
  { key: "professional", en: "Professional Skills", it: "Competenze trasversali", icon: UsersRound, skills: ["Problem solving", "Team working", "Cybersecurity", "Project Management", "Figma Basics"] },
];

const marqueeSkills = ["Java", "JavaScript", "Python", "Kotlin", "Supabase", "Vite", "React", "SQL", "LLMs", "Git"];

export function Skills({ lang }: { lang: Lang }) {
  const t = translations[lang].skills;
  return (
    <section id="skills" className="content-section content-section--tinted">
      <div className="section-shell">
        <div className="section-kicker"><span>02</span>{t.label}<i /></div>
        <div className="skills-lead"><div className="section-heading"><h2>{t.headline}</h2></div><p>{lang === "it" ? "Tecnologie, metodo e curiosità. Il mio stack cresce intorno ai problemi reali, non alle mode del momento." : "Technology, method and curiosity. My stack grows around real problems, not passing trends."}</p></div>
        <div className="skills-marquee" aria-hidden="true"><div>{[...marqueeSkills, ...marqueeSkills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}<i>/</i></span>)}</div></div>
        <div className="skills-grid">
          {groups.map((group, index) => { const Icon = group.icon; return <motion.article className="skill-group" key={group.key} initial={{ opacity: 0, x: index % 2 ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .06 }}><div className="skill-heading"><span>0{index + 1}</span><Icon /><h3>{group[lang]}</h3></div><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></motion.article>; })}
        </div>
      </div>
    </section>
  );
}
