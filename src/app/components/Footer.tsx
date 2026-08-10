import { ArrowUp, Github, Linkedin } from "lucide-react";
import { type Lang } from "../i18n";

export function Footer({ lang, onNavigate }: { lang: Lang; onNavigate: (id: string) => void }) {
  return (
    <footer className="site-footer section-shell">
      <button className="footer-brand" onClick={() => onNavigate("hero")}><span>ADG</span><i /></button>
      <p>© 2026 Antonio Del Giudice · {lang === "it" ? "Progettato e sviluppato con cura." : "Designed and developed with care."}</p>
      <div>
        <a href="https://github.com/antoniodg517" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
        <a href="https://www.linkedin.com/in/antonio-del-giudice-1a7069387/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
        <button onClick={() => onNavigate("hero")} aria-label={lang === "it" ? "Torna su" : "Back to top"}><ArrowUp /></button>
      </div>
    </footer>
  );
}
