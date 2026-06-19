import { type Lang, translations } from "../i18n";

interface FooterProps { lang: Lang }

export function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  return (
    <footer className="py-10 px-6 text-center" style={{ borderTop: "1px solid #202020", background: "#000000" }}>
      <p className="text-white/35 text-xs uppercase" style={{ letterSpacing: "0.12em" }}>
        © {new Date().getFullYear()} Antonio Del Giudice - {t}
      </p>
    </footer>
  );
}
