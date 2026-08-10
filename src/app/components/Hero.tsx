import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Code2, Cpu, Download, Sparkles } from "lucide-react";
import { type Lang, translations } from "../i18n";

export function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang].hero;
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="hero" className="hero section-shell">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
        <div className="availability"><i />{t.badge}</div>
        <h1><span>{t.title1}</span><span>{t.title2}</span></h1>
        <p className="hero-role">{t.subtitle}</p>
        <p className="hero-summary">{t.tagline}</p>
        <div className="hero-actions">
          <button className="button button--primary" onClick={() => go("projects")}>{t.viewProjects}<ArrowUpRight /></button>
          <a className="text-link" href="/Antonio_Del_Giudice_CV.pdf" download>{t.downloadCV}<Download /></a>
        </div>
        <div className="hero-services" aria-label={lang === "it" ? "Ambiti" : "Areas"}>
          <span><Code2 />Web development</span><span><Cpu />IT support</span><span><Sparkles />Applied AI</span>
        </div>
        <div className="code-ribbon" aria-hidden="true"><div><code><span className="syntax-purple">const</span> <span className="syntax-blue">ideas</span> = <span className="syntax-orange">"working software"</span>;</code><code><span className="syntax-purple">while</span> (<span className="syntax-yellow">learning</span>) {'{'} <span className="syntax-cyan">build</span>(); {'}'}</code><code><span className="syntax-purple">return</span> <span className="syntax-green">impact</span>;</code></div></div>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: .18, duration: .85 }}>
        <div className="portrait-frame glass-surface">
          <img src="/profile.jpg" alt="Antonio Del Giudice" loading="eager" />
          <div className="portrait-shade" />
          <div className="portrait-caption"><span>Antonio Del Giudice</span><small>Poggiomarino · Italy</small></div>
          <div className="focus-corners" aria-hidden="true"><i /><i /><i /><i /></div>
        </div>
        <motion.div className="micro-card micro-card--top code-card glass-surface" animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><code><span className="syntax-purple">const</span> <span className="syntax-blue">Antonio</span> = <span className="syntax-orange">"developer"</span>;<i className="code-caret" /></code></motion.div>
        <motion.div className="micro-card micro-card--bottom glass-surface" animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: .4 }}><code><span className="syntax-purple">build</span>: <b>successful</b></code><span>0 errors</span></motion.div>
      </motion.div>
      <button className="scroll-cue" onClick={() => go("about")}><ArrowDown /><span>{lang === "it" ? "Scopri il mio profilo" : "Discover my profile"}</span></button>
    </section>
  );
}
