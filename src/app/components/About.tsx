import { motion } from "motion/react";
import { Bot, Code2, GraduationCap, Languages } from "lucide-react";
import { type Lang, translations } from "../i18n";

const statIcons = [GraduationCap, Languages, Code2, Bot];

export function About({ lang }: { lang: Lang }) {
  const t = translations[lang].about;
  return (
    <section id="about" className="content-section section-shell">
      <div className="section-kicker"><span>01</span>{t.label}</div>
      <div className="about-grid">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }}>
          <h2>{t.headline1}<br /><em>{t.headline2}</em></h2>
          <div className="code-note" aria-hidden="true"><span>const</span> approach = <b>human</b> + technology;</div>
        </motion.div>
        <motion.div className="about-copy" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: .1 }}>
          <p>{t.p1}</p><p>{t.p2}</p><p>{t.p3}</p>
          <blockquote>“{lang === "it" ? "Tecnologia utile, persone al centro." : "Useful technology, people at the center."}”</blockquote>
        </motion.div>
      </div>
      <div className="stat-grid">
        {t.stats.map((stat, index) => { const Icon = statIcons[index]; return <motion.article key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }}><Icon /><strong>{stat.value}</strong><span>{stat.label}</span></motion.article>; })}
      </div>
    </section>
  );
}
