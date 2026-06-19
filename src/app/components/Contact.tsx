import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Download, Github, FolderGit2, ArrowUpRight } from "lucide-react";
import { type Lang, translations } from "../i18n";

const linkIcons = [Github, FolderGit2, Download];
const linkHrefs = [
  "https://github.com/antoniodg517",
  "https://github.com/antoniodg517/the-postural-interview",
  "/Antonio_Del_Giudice_CV.pdf",
];

interface ContactProps { lang: Lang }

export function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="lambo-label mb-6">
            {t.label}
          </p>
          <h2
            className="lambo-heading mb-5"
            style={{
              fontSize: "clamp(2.5rem,6vw,5rem)",
            }}
          >
            {t.headline1}
            <br />
            <span style={{ color: "#FFCE3E" }}>{t.headline2}</span>
          </h2>
          <p className="lambo-copy max-w-md mx-auto mb-16" style={{ fontSize: "1.0625rem" }}>
            {t.sub}
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-2xl mx-auto">
          {t.links.map((link, i) => {
            const Icon = linkIcons[i];
            return (
              <motion.a
                key={link.label}
                href={linkHrefs[i]}
                target={linkHrefs[i].startsWith("http") ? "_blank" : undefined}
                rel={linkHrefs[i].startsWith("http") ? "noopener noreferrer" : undefined}
                download={linkHrefs[i].endsWith(".pdf") ? true : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="lambo-card group flex-1 flex flex-col items-center gap-3 p-6 transition-colors duration-300"
                style={{
                  background: "#202020",
                  border: "1px solid #202020",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#000000";
                  (e.currentTarget as HTMLAnchorElement).style.border = "1px solid #FFC000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#202020";
                  (e.currentTarget as HTMLAnchorElement).style.border = "1px solid #202020";
                }}
              >
                <div className="rounded-2xl w-11 h-11 flex items-center justify-center" style={{ background: "#FFC000" }}>
                  <Icon size={18} style={{ color: "#000000" }} />
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-white text-sm font-medium uppercase mb-1" style={{ letterSpacing: "0.04em" }}>
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "#FFC000" }} />
                  </div>
                  <div className="text-white/45 text-xs">{link.sub}</div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
