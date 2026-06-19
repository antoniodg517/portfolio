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
import { Hobby } from "./components/Hobby";
import { Footer } from "./components/Footer";

{/* MARKER-MAKE-KIT-INVOKED */}

const Divider = () => (
  <div className="max-w-6xl mx-auto px-6">
    <div className="lambo-divider" />
  </div>
);

export default function App() {
  const [lang, setLang] = useState<Lang>("it");

  return (
    <div
      className="lambo-app min-h-screen"
      style={{
        background: "#000000",
        color: "#FFFFFF",
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
        <Divider />
        <Hobby lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
