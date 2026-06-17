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
          <p className="text-white/30 uppercase tracking-widest mb-6 text-xs" style={{ letterSpacing: "0.2em" }}>
            {t.label}
          </p>
          <h2
            className="text-white tracking-tight mb-5"
            style={{
              fontSize: "clamp(2.5rem,6vw,5rem)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
            }}
          >
            {t.headline1}
            <br />
            <span style={{ color: "#E6C76A" }}>{t.headline2}</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto mb-16 leading-relaxed" style={{ fontSize: "1.0625rem" }}>
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
                className="group flex-1 flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "#18181B",
                  border: "1px solid #27272A",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(30,58,138,0.24)";
                  (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(212,175,55,0.28)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#18181B";
                  (e.currentTarget as HTMLAnchorElement).style.border = "1px solid #27272A";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(212,175,55,0.1)" }}>
                  <Icon size={18} style={{ color: "#D4AF37" }} />
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-white text-sm font-medium mb-1">
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "#D4AF37" }} />
                  </div>
                  <div className="text-white/30 text-xs">{link.sub}</div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
