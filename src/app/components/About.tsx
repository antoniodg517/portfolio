import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { type Lang, translations } from "../i18n";

interface AboutProps { lang: Lang }

export function About({ lang }: AboutProps) {
  const t = translations[lang].about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-white/30 uppercase tracking-widest mb-6 text-xs" style={{ letterSpacing: "0.2em" }}>
              {t.label}
            </p>
            <h2
              className="text-white leading-tight mb-8 tracking-tight"
              style={{ fontSize: "clamp(2rem,4vw,3.25rem)", fontWeight: 600, letterSpacing: "-0.03em" }}
            >
              {t.headline1}
              <br />
              {t.headline2}
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed" style={{ fontSize: "1.0625rem" }}>
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 gap-4 pt-12 md:pt-0"
          >
            {t.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="text-white mb-1"
                  style={{ fontSize: "2.5rem", fontWeight: 600, letterSpacing: "-0.04em" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
