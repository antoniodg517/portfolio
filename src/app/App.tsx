import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { type Lang } from "./i18n";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Hobby } from "./components/Hobby";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const sectionIds = ["hero", "about", "skills", "projects", "experience", "certifications", "hobby", "contact"];

export default function App() {
  const [lang, setLang] = useState<Lang>("it");
  const [active, setActive] = useState("hero");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: .3 });
  const auraY = useTransform(scrollYProgress, [0, 1], ["-8%", "74%"]);
  const auraRotate = useTransform(scrollYProgress, [0, 1], [0, 155]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -58%", threshold: [0, .15, .35, .6] });
    sectionIds.forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setActive(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = document.getElementById(id);
    if (!target) return;
    const distance = Math.abs(target.getBoundingClientRect().top);
    const behavior = reduce || distance > window.innerHeight * 2.5 ? ("instant" as ScrollBehavior) : "smooth";
    target.scrollIntoView({ behavior, block: "start" });
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{lang === "it" ? "Vai al contenuto" : "Skip to content"}</a>
      <div className="scroll-progress" aria-hidden="true"><motion.span style={{ scaleX: progress }} /></div>
      <div className="global-scene" aria-hidden="true">
        <motion.div className="global-orb" style={{ y: auraY, rotate: auraRotate }}><i /><i /></motion.div>
      </div>
      <Nav lang={lang} onLangChange={setLang} active={active} onNavigate={go} />
      <main id="main-content">
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Certifications lang={lang} />
        <Hobby lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} onNavigate={go} />
    </div>
  );
}
