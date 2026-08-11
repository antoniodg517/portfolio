import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { type Lang, translations } from "../i18n";

const projectMeta = [
  {
    slug: "merengue-vault",
    image: "/project-assets/merengue-vault-top-xi.jpg",
    href: "https://adg-merengue-vault.vercel.app/",
    tags: ["Vanilla JS", "Vite", "Supabase", "Vercel Functions", "Resend"],
    signature: "Real Madrid / Sports Cards / Private Collection",
  },
  {
    slug: "the-postural-interview",
    image: "/project-assets/furhat.jpg",
    href: "https://github.com/antoniodg517/the-postural-interview",
    tags: ["Kotlin", "Java", "LLMs", "Furhat", "sEMG"],
    signature: "Human-Robot Interaction / Experimental Research",
  },
  {
    slug: "il-meridiano-sport",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1600&h=1000&fit=crop&auto=format",
    href: "https://ilmeridianosport.it",
    tags: ["Web", "UX", "Content", "Maintenance"],
    signature: "Sports Media / Web Design / Maintenance",
  },
];

const projectOrder = [2, 0, 1];

export function Projects({ lang }: { lang: Lang }) {
  const t = translations[lang].projects;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const projects = projectOrder.map((index) => t.items[index]);
  const item = projects[active];
  const meta = projectMeta[active];

  return (
    <section id="projects" className="content-section section-shell projects-section">
      <div className="section-kicker"><span>03</span>{t.label}<i /></div>
      <div className="projects-intro">
        <div className="section-heading"><h2>{lang === "it" ? "Lavori selezionati." : "Selected work."}</h2></div>
        <p>{lang === "it" ? "Tre progetti diversi. Passa sui titoli per cambiare scena e apri quello che vuoi esplorare." : "Three different projects. Move across the titles to change the scene, then open the one you want to explore."}</p>
      </div>

      <div className="project-showcase">
        <div className="project-rail" role="tablist" aria-label={t.label}>
          {projects.map((project, index) => (
            <button
              key={project.title}
              role="tab"
              aria-selected={active === index}
              aria-controls="active-project"
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <span>0{index + 1}</span>
              <strong>{project.title}</strong>
              <small>{project.status}<br />{project.year}</small>
              <i aria-hidden="true" />
            </button>
          ))}
        </div>

        <article id="active-project" className="project-stage" role="tabpanel">
          <div className="project-stage-head">
            <span>N°0{active + 1} / 03</span>
            <p>{meta.signature}</p>
            <div aria-hidden="true">{projects.map((_, index) => <span key={index} className={active === index ? "is-active" : ""}>0{index + 1}</span>)}</div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="project-scene"
              key={meta.slug}
              initial={reduce ? false : { opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -22 }}
              transition={{ duration: .42, ease: [0.16, 1, .3, 1] }}
            >
              <a className="project-scene-image" href={meta.href} target="_blank" rel="noreferrer" aria-label={`${lang === "it" ? "Apri" : "Open"} ${item.title}`}>
                <motion.img
                  src={meta.image}
                  alt={lang === "it" ? `Anteprima del progetto ${item.title}` : `${item.title} project preview`}
                  initial={reduce ? false : { scale: 1.055 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: .8, ease: [0.16, 1, .3, 1] }}
                />
                <span className="project-scan" aria-hidden="true" />
                <span className="project-open"><ArrowUpRight /></span>
              </a>

              <div className="project-stage-copy">
                <div>
                  <span>{item.status}</span>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <p>{item.description}</p>
                  <div className="tag-list">{meta.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={meta.href} target="_blank" rel="noreferrer">{lang === "it" ? "Apri progetto" : "Open project"}<ArrowUpRight /></a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </section>
  );
}
