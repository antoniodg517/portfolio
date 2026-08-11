import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { type Lang, translations } from "../i18n";

interface NavProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  active: string;
  onNavigate: (id: string) => void;
}

export function Nav({ lang, onLangChange, active, onNavigate }: NavProps) {
  const t = translations[lang].nav;
  const [open, setOpen] = useState(false);
  const links = [
    ["about", t.about],
    ["projects", t.projects],
    ["experience", t.experience],
    ["skills", t.skills],
    ["certifications", t.certifications],
    ["hobby", t.hobby],
  ];
  const choose = (id: string) => { onNavigate(id); setOpen(false); };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <button className="brand" onClick={() => choose("hero")} aria-label="Antonio Del Giudice - Home">
          <span>ADG.</span><small>{lang === "it" ? "Portfolio 2026" : "Portfolio 2026"}</small>
        </button>
        <nav className="desktop-nav" aria-label={lang === "it" ? "Navigazione principale" : "Main navigation"}>
          {links.slice(0, 5).map(([id, label]) => <button key={id} className={active === id ? "is-active" : ""} onClick={() => choose(id)}>{label}</button>)}
        </nav>
        <div className="nav-actions">
          <div className="language-switch" aria-label={lang === "it" ? "Lingua" : "Language"}>
            {(["it", "en"] as Lang[]).map((item) => <button key={item} className={lang === item ? "is-active" : ""} onClick={() => onLangChange(item)}>{item.toUpperCase()}</button>)}
          </div>
          <button className="nav-contact" onClick={() => choose("contact")}>{t.cta}<ArrowUpRight /></button>
          <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? (lang === "it" ? "Chiudi menu" : "Close menu") : (lang === "it" ? "Apri menu" : "Open menu")}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          {links.map(([id, label], index) => <button key={id} className={active === id ? "is-active" : ""} onClick={() => choose(id)}><span>0{index + 1}</span>{label}</button>)}
          <button className="mobile-contact" onClick={() => choose("contact")}>{t.cta}<ArrowUpRight /></button>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}
