import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { type Lang, translations } from "../i18n";

const itemTypes = ["work", "work", "edu", "edu"] as const;
const itemTags = [
  ["Web development", "UX", "Maintenance"],
  ["IT support", "Operations", "Website management"],
  ["Java", "SQL", "AI", "HRI", "Git"],
  ["Software", "Networks", "Databases"],
];

interface ExperienceProps { lang: Lang }

function TimelineItem({
  item, type, tags, index,
}: {
  item: { role: string; org: string; period: string; description: string };
  type: "work" | "edu";
  tags: string[];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative pl-8"
    >
      <div
        className="lambo-hex absolute left-0 top-1 w-3 h-3"
        style={{
          background: type === "work" ? "#FFC000" : "#29ABE2",
        }}
      />
      <div className="pb-12">
        <div className="flex flex-wrap items-start gap-3 mb-2">
          <h3 className="text-white uppercase" style={{ fontSize: "1.0625rem", fontWeight: 400, letterSpacing: "0" }}>
            {item.role}
          </h3>
          <span
            className="lambo-tag px-2.5 py-0.5 text-xs mt-0.5"
            style={{
              background: "#000000",
              border: "1px solid #494949",
              color: "#969696",
            }}
          >
            {item.period}
          </span>
        </div>
        <p className="text-white/55 text-sm mb-3">{item.org}</p>
        <p className="text-white/55 text-sm leading-relaxed mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs uppercase"
              style={{
                background: "#000000",
                border: type === "work" ? "1px solid rgba(255,192,0,0.5)" : "1px solid rgba(41,171,226,0.5)",
                color: type === "work" ? "#FFCE3E" : "#29ABE2",
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

export function Experience({ lang }: ExperienceProps) {
  const t = translations[lang].experience;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 px-6">
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

        <div className="max-w-2xl">
          <div className="relative">
            <div
              className="absolute left-[3px] top-2 bottom-0 w-px"
              style={{ background: "#494949" }}
            />
            {t.items.map((item, i) => (
              <TimelineItem key={item.role} item={item} type={itemTypes[i]} tags={itemTags[i]} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
