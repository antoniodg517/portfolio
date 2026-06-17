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
        className="max-w-6xl mx-auto py-20 px-8 md:px-16 rounded-3xl"
        style={{
          background: "linear-gradient(135deg, rgba(24,24,27,0.95) 0%, rgba(30,58,138,0.12) 100%)",
          border: "1px solid #27272A",
        }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-white/30 uppercase tracking-widest mb-4 text-xs" style={{ letterSpacing: "0.2em" }}>
            {t.label}
          </p>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(2rem,4vw,3.25rem)", fontWeight: 600, letterSpacing: "-0.03em" }}
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
              <p className="text-white/30 uppercase tracking-widest mb-5 text-xs" style={{ letterSpacing: "0.16em" }}>
                {group.category[lang]}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + gi * 0.06 + si * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
                    className="px-3.5 py-1.5 rounded-full text-sm cursor-default transition-colors duration-200"
                    style={{
                      background: "#09090B",
                      border: "1px solid #27272A",
                      color: "#A1A1AA",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.background = "rgba(212,175,55,0.1)";
                      (e.currentTarget as HTMLSpanElement).style.border = "1px solid rgba(212,175,55,0.2)";
                      (e.currentTarget as HTMLSpanElement).style.color = "#D4AF37";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.background = "#09090B";
                      (e.currentTarget as HTMLSpanElement).style.border = "1px solid #27272A";
                      (e.currentTarget as HTMLSpanElement).style.color = "#A1A1AA";
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
