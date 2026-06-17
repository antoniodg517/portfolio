import { useState } from "react";
import "../styles/fonts.css";
import { type Lang } from "./i18n";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

{/* MARKER-MAKE-KIT-INVOKED */}

const Divider = () => (
  <div className="max-w-6xl mx-auto px-6">
    <div style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />
  </div>
);

export default function App() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#09090B",
        color: "#F8F8F8",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Nav lang={lang} onLangChange={setLang} />
      <main>
        <Hero lang={lang} />
        <Divider />
        <About lang={lang} />
        <Divider />
        <Projects lang={lang} />
        <Divider />
        <Experience lang={lang} />
        <Divider />
        <Skills lang={lang} />
        <Divider />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
