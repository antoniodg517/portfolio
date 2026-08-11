import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Download } from "lucide-react";
import { type Lang, translations } from "../i18n";

export function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang].hero;
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const portraitY = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 18]);
  const orbitRotate = useTransform(scrollY, [0, 1200], [0, reduce ? 0 : 42]);
  const summary = lang === "it"
    ? "Sviluppo prodotti web e software assistito dall'AI, con metodo tecnico e attenzione alle persone."
    : "I build web products and AI-assisted software with technical rigor and a human focus.";
  const lines = lang === "it"
    ? ["profilo: web developer", "focus: web, IT, AI", "metodo: capire, costruire, migliorare"]
    : ["profile: web developer", "focus: web, IT, AI", "method: understand, build, improve"];
  return (
    <section id="hero" className="hero">
      <div className="hero-stage section-shell">
        <motion.div className="hero-workbench" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.16, 1, .3, 1] }}>
          <div className="hero-editor-bar">
            <span className="editor-file"><i />portfolio.tsx</span>
            <span className="editor-path">src / antonio / index</span>
            <span className="editor-mode">UTF-8&nbsp;&nbsp; React + TypeScript</span>
          </div>
          <div className="hero-editor-body">
            <div className="hero-gutter" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <span key={index}>{String(index + 1).padStart(2, "0")}</span>)}</div>
            <div className="hero-copy">
              <motion.p className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>{t.subtitle}</motion.p>
              <h1 className="hero-title" aria-label={`${t.title1} ${t.title2}`}>
                <motion.span initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .12 }}>{t.title1}</motion.span>
                <motion.span initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .22 }}>{t.title2}</motion.span>
              </h1>
              <motion.p className="hero-summary" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48 }}>{summary}</motion.p>
              <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .58 }}>
                <button className="button button--light" onClick={() => go("projects")}>{t.viewProjects}<ArrowUpRight /></button>
                <a className="text-link" href="/Antonio_Del_Giudice_CV.pdf" download>{t.downloadCV}<Download /></a>
              </motion.div>
              <div className="hero-terminal" aria-label={lang === "it" ? "Profilo sintetico" : "Profile summary"}>
                {lines.map((line, index) => <motion.code key={line} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .68 + index * .1 }}><span>{index === lines.length - 1 ? "return" : "const"}</span> {line};</motion.code>)}
              </div>
            </div>
            <div className="hero-visual">
              <motion.div className="hero-orbit" style={{ rotate: orbitRotate }} initial={{ opacity: 0, scale: .82 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .2 }} aria-hidden="true"><i /><i /><i /></motion.div>
              <motion.div className="hero-portrait" style={{ y: portraitY }} initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .2, ease: [0.16, 1, .3, 1] }}>
                <div className="portrait-glow" aria-hidden="true" />
                <img src="/profile.jpg" alt="Antonio Del Giudice" loading="eager" />
              </motion.div>
              <motion.div className="hero-signal" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} aria-hidden="true"><span>build</span><span>learn</span><span>ship</span></motion.div>
            </div>
          </div>
          <div className="hero-statusbar"><span>main*</span><span>0 errors</span><span>{lang === "it" ? "pronto" : "ready"}</span></div>
        </motion.div>
      </div>
    </section>
  );
}
