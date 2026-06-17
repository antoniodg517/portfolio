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
        className="absolute left-0 top-1 w-2 h-2 rounded-full"
        style={{
          background: type === "work" ? "#D4AF37" : "#2563EB",
          boxShadow: type === "work" ? "0 0 12px rgba(212,175,55,0.5)" : "0 0 12px rgba(37,99,235,0.35)",
        }}
      />
      <div className="pb-12">
        <div className="flex flex-wrap items-start gap-3 mb-2">
          <h3 className="text-white" style={{ fontSize: "1.0625rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
            {item.role}
          </h3>
          <span
            className="px-2.5 py-0.5 rounded-full text-xs mt-0.5"
            style={{
              background: "#18181B",
              border: "1px solid #27272A",
              color: "#A1A1AA",
            }}
          >
            {item.period}
          </span>
        </div>
        <p className="text-white/40 text-sm mb-3">{item.org}</p>
        <p className="text-white/40 text-sm leading-relaxed mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs"
              style={{
                background: type === "work" ? "rgba(212,175,55,0.08)" : "rgba(37,99,235,0.12)",
                border: type === "work" ? "1px solid rgba(212,175,55,0.18)" : "1px solid rgba(37,99,235,0.28)",
                color: type === "work" ? "#E6C76A" : "#2563EB",
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

        <div className="max-w-2xl">
          <div className="relative">
            <div
              className="absolute left-[3px] top-2 bottom-0 w-px"
              style={{ background: "#27272A" }}
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
