import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { type Lang, translations } from "../i18n";

const projectMeta = [
  {
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
  },
  {
    tags: ["TypeScript", "Go", "Terraform", "AWS", "GitHub Actions"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=500&fit=crop&auto=format",
  },
  {
    tags: ["Python", "FastAPI", "React", "OpenAI", "SQLite"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop&auto=format",
  },
];

interface ProjectsProps { lang: Lang }

function ProjectCard({
  title, description, year, status, tags, image, index,
}: {
  title: string; description: string; year: string; status: string;
  tags: string[]; image: string; index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative rounded-3xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="relative overflow-hidden" style={{ height: "240px", background: "#111113" }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ opacity: 0.7 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(9,9,11,0.9) 100%)" }}
        />
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span
            className="px-2.5 py-1 rounded-full text-xs"
            style={{
              background: "rgba(9,9,11,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(8px)",
            }}
          >
            {year}
          </span>
          <span
            className="px-2.5 py-1 rounded-full text-xs"
            style={{
              background: "rgba(10,132,255,0.15)",
              border: "1px solid rgba(10,132,255,0.2)",
              color: "#0A84FF",
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
            className="text-white"
            style={{ fontSize: "1.375rem", fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            {title}
          </h3>
          <button
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 rounded-full hover:bg-white/5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <ArrowUpRight size={18} />
          </button>
        </div>
        <p className="text-white/40 leading-relaxed mb-6 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.4)",
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
          <p className="text-white/30 uppercase tracking-widest mb-4 text-xs" style={{ letterSpacing: "0.2em" }}>
            {t.label}
          </p>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(2rem,4vw,3.25rem)", fontWeight: 600, letterSpacing: "-0.03em" }}
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
