import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { type Lang, translations } from "../i18n";

const skillGroups = [
  { category: { en: "Languages", it: "Linguaggi" }, skills: ["Java", "JavaScript", "Python", "Kotlin", "PHP", "SQL"] },
  { category: { en: "Web & Databases", it: "Web & Database" }, skills: ["HTML", "CSS", "Web development", "MySQL", "Git", "Linux"] },
  { category: { en: "AI & Research", it: "AI & Ricerca" }, skills: ["Large Language Models", "Prompt engineering", "Human-Robot Interaction", "AI-assisted development", "GitHub Copilot"] },
  { category: { en: "Professional Skills", it: "Competenze trasversali" }, skills: ["Problem solving", "Team working", "Cybersecurity", "Project Management", "Figma Basics"] },
];

interface SkillsProps { lang: Lang }

export function Skills({ lang }: SkillsProps) {
  const t = translations[lang].skills;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 px-6">
      <div
        className="lambo-card max-w-6xl mx-auto py-20 px-8 md:px-16"
        style={{
          background: "#202020",
          border: "1px solid #202020",
        }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="lambo-label mb-4">
            {t.label}
          </p>
          <h2
            className="lambo-heading"
            style={{ fontSize: "clamp(2.35rem,5vw,5rem)" }}
          >
            {t.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category.en}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + gi * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="lambo-label mb-5">
                {group.category[lang]}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + gi * 0.06 + si * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
                    className="lambo-tag px-3.5 py-1.5 text-sm cursor-default transition-colors duration-200"
                    style={{
                      background: "#000000",
                      border: "1px solid #494949",
                      color: "#969696",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.background = "#FFC000";
                      (e.currentTarget as HTMLSpanElement).style.border = "1px solid #FFC000";
                      (e.currentTarget as HTMLSpanElement).style.color = "#000000";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.background = "#000000";
                      (e.currentTarget as HTMLSpanElement).style.border = "1px solid #494949";
                      (e.currentTarget as HTMLSpanElement).style.color = "#969696";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
