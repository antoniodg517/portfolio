import { motion } from "motion/react";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { type Lang, translations } from "../i18n";

const hrefs = ["https://www.linkedin.com/in/antonio-del-giudice-1a7069387/", "https://github.com/antoniodg517", "/Antonio_Del_Giudice_CV.pdf"];

export function Contact({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  return (
    <section id="contact" className="contact-section section-shell">
      <div className="section-kicker"><span>07</span>{t.label}<i /></div>
      <motion.div className="contact-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }}>
        <div className="contact-main"><span className="contact-overline">{lang === "it" ? "Hai un progetto o un’idea?" : "Have a project or an idea?"}</span><h2>{t.headline1}<br /><em>{t.headline2}</em></h2><p>{t.sub}</p><a className="contact-email" href="mailto:antoniodg517@gmail.com"><Mail />antoniodg517@gmail.com<ArrowUpRight /></a></div>
        <div className="contact-aside"><div className="contact-location"><MapPin /><span><small>{lang === "it" ? "Dove mi trovo" : "Based in"}</small>Poggiomarino (NA), Italia</span></div><div className="contact-links">{t.links.map((link, index) => { const Icon = [Linkedin, Github, Download][index]; return <a key={link.label} href={hrefs[index]} target={hrefs[index].startsWith("http") ? "_blank" : undefined} rel={hrefs[index].startsWith("http") ? "noreferrer" : undefined} download={index === 2 ? true : undefined}><Icon /><span><strong>{link.label}</strong><small>{link.sub}</small></span><ArrowUpRight /></a>; })}</div></div>
      </motion.div>
    </section>
  );
}
