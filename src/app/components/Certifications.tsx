import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { type Lang, translations } from "../i18n";

const certifications = [
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
          <div className="flex items-end gap-6 flex-wrap">
            <h2 className="lambo-heading" style={{ fontSize: "clamp(2.35rem,5vw,5rem)" }}>
              {t.headline}
            </h2>
            <p className="text-white/35 text-sm mb-1" style={{ letterSpacing: "0.04em" }}>
              {t.provider}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative flex flex-col justify-between p-5 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1.25rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,192,0,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.08)";
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-white text-sm leading-snug" style={{ fontWeight: 400 }}>
                  {cert.name}
                </h3>
                <span
                  className="shrink-0 flex items-center gap-1 px-2 py-0.5 text-[10px]"
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
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/35 text-xs">{cert.date}</span>
                <span className="text-white/35 text-xs">
                  {cert.hours}h · {cert.lessons} {t.lessons}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
