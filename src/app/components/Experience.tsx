import { motion } from "motion/react";
import { BriefcaseBusiness, Download, GraduationCap } from "lucide-react";
import { type Lang, translations } from "../i18n";

export function Experience({ lang }: { lang: Lang }) {
  const t = translations[lang].experience;
  return (
    <section id="experience" className="content-section content-section--tinted">
      <div className="section-shell experience-layout">
        <div className="experience-intro">
          <div className="section-kicker"><span>04</span>{t.label}<i /></div>
          <div className="section-heading"><h2>{t.headline}</h2><p>{lang === "it" ? "Esperienze professionali e formazione che hanno costruito il mio modo di lavorare." : "Professional experiences and education that shaped how I work."}</p></div>
          <a className="text-link" href="/Antonio_Del_Giudice_CV.pdf" download>{lang === "it" ? "Scarica il CV completo" : "Download full résumé"}<Download /></a>
        </div>
        <div className="timeline">
          {t.items.map((entry, index) => {
            const Icon = index < 3 ? BriefcaseBusiness : GraduationCap;
            return <motion.article key={entry.role} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .08 }}><span className="timeline-index">0{index + 1}</span><div className="timeline-marker"><Icon /></div><div><time>{entry.period}</time><h3>{entry.role}</h3><strong>{entry.org}</strong><p>{entry.description}</p></div></motion.article>;
          })}
        </div>
      </div>
    </section>
  );
}
