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
            <p className="lambo-label mb-6">
              {t.label}
            </p>
            <h2
              className="lambo-heading mb-8"
              style={{ fontSize: "clamp(2.35rem,5vw,5rem)" }}
            >
              {t.headline1}
              <br />
              {t.headline2}
            </h2>
            <div className="lambo-copy space-y-4" style={{ fontSize: "1.0625rem" }}>
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
                className="lambo-card p-6"
                style={{
                  background: "#202020",
                  border: "1px solid #202020",
                }}
              >
                <div
                  className="mb-1"
                  style={{ fontSize: "2.5rem", fontWeight: 400, letterSpacing: "0", color: "#FFCE3E" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/55 text-sm uppercase" style={{ letterSpacing: "0.04em" }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
