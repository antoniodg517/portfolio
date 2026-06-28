import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { type Lang, translations } from "../i18n";

const projectMeta = [
  {
    tags: ["Kotlin", "Java", "LLMs", "Furhat", "sEMG"],
    image: "/project-assets/furhat.jpg",
    href: "https://github.com/antoniodg517/the-postural-interview",
  },
  {
    tags: ["Web development", "UX", "Content", "Maintenance"],
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=500&fit=crop&auto=format",
    href: "https://ilmeridianosport.it",
  },
  {
    tags: ["Next.js", "Supabase", "TypeScript", "Admin Panel", "Vercel"],
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=500&fit=crop&auto=format",
    href: "https://adg-merengue-vault.vercel.app/",
  },
];

interface ProjectsProps { lang: Lang }

function ProjectCard({
  title, description, year, status, tags, image, href, index,
}: {
  title: string; description: string; year: string; status: string;
  tags: string[]; image: string; href: string; index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="lambo-card group relative overflow-hidden"
      style={{
        background: "#202020",
        border: "1px solid #202020",
      }}
    >
      <div className="relative overflow-hidden" style={{ height: "240px", background: "#181818" }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{ opacity: 0.68, filter: "grayscale(0.25) contrast(1.12)" }}
        />
        <div
          className="lambo-media-overlay absolute inset-0"
        />
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span
            className="px-2.5 py-1 text-xs"
            style={{
              background: "rgba(0,0,0,0.72)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "999px",
              color: "#969696",
              backdropFilter: "blur(8px)",
            }}
          >
            {year}
          </span>
          <span
            className="px-2.5 py-1 text-xs"
            style={{
              background: "#FFC000",
              borderRadius: "999px",
              color: "#000000",
              backdropFilter: "blur(8px)",
            }}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <h3
            className="text-white uppercase"
            style={{ fontSize: "1.375rem", fontWeight: 400, letterSpacing: "0" }}
          >
            {title}
          </h3>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2"
              style={{ color: "#000000", background: "#FFC000" }}
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
        <p className="text-white/55 leading-relaxed mb-6 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="lambo-tag px-3 py-1 text-xs"
              style={{
                background: "#000000",
                border: "1px solid #494949",
                color: "#969696",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects({ lang }: ProjectsProps) {
  const t = translations[lang].projects;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="lambo-label mb-4">
            {t.label}
          </p>
          <h2
            className="lambo-heading"
            style={{ fontSize: "clamp(2.35rem,5vw,5rem)" }}
          >
            {t.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => (
            <ProjectCard
              key={item.title}
              index={i}
              {...item}
              tags={projectMeta[i].tags}
              image={projectMeta[i].image}
              href={projectMeta[i].href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
