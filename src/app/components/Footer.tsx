import { type Lang, translations } from "../i18n";

interface FooterProps { lang: Lang }

export function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  return (
    <footer className="py-10 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <p className="text-white/20 text-sm">
        © {new Date().getFullYear()} Antonio Del Giudice — {t}
      </p>
    </footer>
  );
}
