import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { type Lang, translations } from "../i18n";

const learnnCerts = [
  { name: "AI e ChatGPT", date: "30/09/2025", hours: 13, lessons: 109 },
  { name: "Email Marketing", date: "15/11/2025", hours: 9, lessons: 65 },
  { name: "Python", date: "22/09/2025", hours: 3, lessons: 63 },
  { name: "Graphic Design con Canva", date: "17/10/2025", hours: 5, lessons: 63 },
  { name: "JavaScript", date: "19/09/2025", hours: 4, lessons: 49 },
  { name: "Slide e Presentazioni", date: "18/02/2025", hours: 4, lessons: 35 },
  { name: "Remote Working", date: "20/10/2025", hours: 4, lessons: 38 },
  { name: "Canva Avanzato", date: "17/12/2025", hours: 4, lessons: 34 },
  { name: "Web Design con Webflow", date: "18/10/2025", hours: 4, lessons: 25 },
  { name: "Cybersecurity", date: "25/09/2025", hours: 3, lessons: 51 },
  { name: "Brand Management", date: "15/10/2025", hours: 3, lessons: 27 },
  { name: "Project Management", date: "14/10/2025", hours: 2, lessons: 47 },
  { name: "E-Commerce Operations", date: "13/10/2025", hours: 2, lessons: 20 },
  { name: "Figma Basics", date: "16/10/2025", hours: 1, lessons: 16 },
  { name: "Business English", date: "09/12/2025", hours: 1, lessons: 10 },
];

const anthropicCerts = [
  { name: "Claude 101" },
  { name: "Claude Code 101" },
  { name: "Claude Code in Action" },
  { name: "Claude Platform 101" },
  { name: "Introduction to Claude Cowork" },
  { name: "Introduction to Agent Skills" },
  { name: "Introduction to Subagents" },
  { name: "Introduction to Model Context Protocol" },
  { name: "Model Context Protocol: Advanced Topics" },
  { name: "Building with the Claude API" },
  { name: "Claude with Amazon Bedrock" },
  { name: "Claude with Google Vertex AI" },
  { name: "AI Fluency: Framework & Foundations" },
  { name: "AI Fluency: AI Capabilities & Limitations" },
  { name: "AI Fluency for Nonprofits" },
  { name: "AI Fluency for Small Businesses" },
  { name: "AI Fluency for Educators" },
  { name: "AI Fluency for Students" },
  { name: "AI Fluency for Builders" },
  { name: "Teaching the AI Fluency Framework" },
];

const cardBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "1rem",
};

const cardHover = {
  enter: (el: HTMLDivElement) => {
    el.style.background = "rgba(255,255,255,0.07)";
    el.style.border = "1px solid rgba(255,192,0,0.25)";
  },
  leave: (el: HTMLDivElement) => {
    el.style.background = "rgba(255,255,255,0.04)";
    el.style.border = "1px solid rgba(255,255,255,0.08)";
  },
};

interface CertificationsProps { lang: Lang }

export function Certifications({ lang }: CertificationsProps) {
  const t = translations[lang].certifications;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="lambo-label mb-4">{t.label}</p>
          <h2 className="lambo-heading" style={{ fontSize: "clamp(2.35rem,5vw,5rem)" }}>
            {t.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Anthropic column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "#FFC000", letterSpacing: "0.1em" }}
              >
                Anthropic
              </span>
              <span
                className="px-2 py-0.5 text-[10px]"
                style={{
                  background: "#000",
                  border: "1px solid #494949",
                  color: "#969696",
                  borderRadius: "999px",
                }}
              >
                20
              </span>
              <span className="text-white/30 text-xs">2026</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {anthropicCerts.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.035, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex flex-col justify-between p-3.5"
                  style={cardBase}
                  onMouseEnter={(e) => cardHover.enter(e.currentTarget)}
                  onMouseLeave={(e) => cardHover.leave(e.currentTarget)}
                >
                  <h3 className="text-white text-xs leading-snug mb-3" style={{ fontWeight: 400 }}>
                    {cert.name}
                  </h3>
                  <span
                    className="self-start flex items-center gap-1 px-2 py-0.5 text-[10px]"
                    style={{
                      background: "#FFC000",
                      borderRadius: "999px",
                      color: "#000000",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                    }}
                  >
                    ✓ {t.verified}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learnn column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "#FFC000", letterSpacing: "0.1em" }}
              >
                Learnn
              </span>
              <span
                className="px-2 py-0.5 text-[10px]"
                style={{
                  background: "#000",
                  border: "1px solid #494949",
                  color: "#969696",
                  borderRadius: "999px",
                }}
              >
                15
              </span>
              <span className="text-white/30 text-xs">2025</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {learnnCerts.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.035, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex flex-col justify-between p-3.5"
                  style={cardBase}
                  onMouseEnter={(e) => cardHover.enter(e.currentTarget)}
                  onMouseLeave={(e) => cardHover.leave(e.currentTarget)}
                >
                  <h3 className="text-white text-xs leading-snug mb-3" style={{ fontWeight: 400 }}>
                    {cert.name}
                  </h3>
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className="flex items-center gap-1 px-2 py-0.5 text-[10px] shrink-0"
                      style={{
                        background: "#FFC000",
                        borderRadius: "999px",
                        color: "#000000",
                        fontWeight: 500,
                        letterSpacing: "0.04em",
                      }}
                    >
                      ✓ {t.verified}
                    </span>
                    <span className="text-white/30 text-[10px] text-right">
                      {cert.hours}h · {cert.lessons} {t.lessons}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
