import { useEffect, useRef, useState } from "react";
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
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const updatePageState = () => {
      const marker = window.scrollY + window.innerHeight * .35;
      const current = sections.reduce((selected, section) => section.offsetTop <= marker ? section : selected, sections[0]);
      if (current?.id) setActive(current.id);
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const progress = available > 0 ? Math.min(window.scrollY / available, 1) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };
    updatePageState();
    window.addEventListener("scroll", updatePageState, { passive: true });
    window.addEventListener("resize", updatePageState);
    return () => {
      window.removeEventListener("scroll", updatePageState);
      window.removeEventListener("resize", updatePageState);
    };
  }, []);

  const go = (id: string) => {
    setActive(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{lang === "it" ? "Vai al contenuto" : "Skip to content"}</a>
      <div className="scroll-progress" aria-hidden="true"><span ref={progressRef} /></div>
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
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
