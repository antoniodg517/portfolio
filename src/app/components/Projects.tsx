import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { type Lang, translations } from "../i18n";

const projectMeta = [
  { slug: "merengue-vault", image: "/project-assets/merengue-vault.jpg", href: "https://adg-merengue-vault.vercel.app/", tags: ["Vanilla JS", "Vite", "Supabase", "Vercel Functions", "Resend"] },
  { slug: "the-postural-interview", image: "/project-assets/furhat.jpg", href: "https://github.com/antoniodg517/the-postural-interview", tags: ["Kotlin", "Java", "LLMs", "Furhat", "sEMG"] },
  { slug: "il-meridiano-sport", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1400&h=950&fit=crop&auto=format", href: "https://ilmeridianosport.it", tags: ["Web", "UX", "Content", "Maintenance"] },
];

const projectOrder = [2, 0, 1];

export function Projects({ lang }: { lang: Lang }) {
  const t = translations[lang].projects;
  const [active, setActive] = useState(0);
  const projects = projectOrder.map((index) => t.items[index]);
  const item = projects[active];
  const meta = projectMeta[active];
  return (
    <section id="projects" className="content-section section-shell projects-section">
      <div className="section-kicker"><span>03</span>{t.label}</div>
      <div className="section-heading section-heading--row"><h2>{t.headline}</h2><p>{lang === "it" ? "Tre lavori diversi, raccontati con obiettivi, tecnologie e risultati concreti." : "Three different projects, presented through goals, technologies and tangible results."}</p></div>
      <div className="project-selector" role="tablist" aria-label={t.label}>
        {projects.map((project, index) => <button key={project.title} role="tab" aria-selected={active === index} className={active === index ? "is-active" : ""} onClick={() => setActive(index)}><span>0{index + 1}</span><strong>{project.title}</strong><small>{project.year}</small></button>)}
      </div>
      <AnimatePresence mode="wait">
        <motion.article className="featured-project glass-surface" key={meta.slug} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .3 }}>
          <div className="project-image"><img src={meta.image} alt={item.title} /><span>{item.status}</span></div>
          <div className="project-details">
            <span className="project-year">{item.year} · {String(active + 1).padStart(2, "0")}/03</span>
            <h3>{item.title}</h3><p>{item.description}</p>
            <div className="tag-list">{meta.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a className="button button--primary" href={meta.href} target="_blank" rel="noreferrer">{lang === "it" ? "Guarda il progetto" : "View project"}<ArrowUpRight /></a>
          </div>
        </motion.article>
      </AnimatePresence>
    </section>
  );
}
