import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Backpack, Dumbbell, Shirt, Sparkles } from "lucide-react";
import { type Lang, translations } from "../i18n";

const meta = [
  { image: "/hobby-assets/barbell.png", icon: Dumbbell },
  { image: "/hobby-assets/psa-ronaldo-front.jpg", icon: Sparkles },
  { image: "/hobby-assets/jersey.png", icon: Shirt },
  { image: "/hobby-assets/backpack-north.png", icon: Backpack },
];

export function Hobby({ lang }: { lang: Lang }) {
  const t = translations[lang].hobby;
  const [active, setActive] = useState(0);
  const item = t.items[active];
  return (
    <section id="hobby" className="content-section content-section--tinted">
      <div className="section-shell">
        <div className="section-kicker"><span>06</span>{t.label}</div>
        <div className="section-heading section-heading--row"><h2>{t.headline}</h2><p>{t.intro}</p></div>
        <div className="hobby-selector" role="tablist">{t.items.map((hobby, index) => { const Icon = meta[index].icon; return <button role="tab" aria-selected={active === index} key={hobby.title} className={active === index ? "is-active" : ""} onClick={() => setActive(index)}><Icon /><span><strong>{hobby.title}</strong><small>{hobby.kicker}</small></span></button>; })}</div>
        <AnimatePresence mode="wait"><motion.article className="hobby-feature glass-surface" key={item.title} initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .99 }}><div className={`hobby-image hobby-image--${active}`}><img src={meta[active].image} alt={item.title} /></div><div><span>{String(active + 1).padStart(2, "0")} / 04</span><h3>{item.title}</h3><strong>{item.kicker}</strong><p>{item.description}</p></div></motion.article></AnimatePresence>
      </div>
    </section>
  );
}
