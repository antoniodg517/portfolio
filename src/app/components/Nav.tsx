import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { type Lang, translations } from "../i18n";

interface NavProps {
  lang: Lang;
  onLangChange: (l: Lang) => void;
}

export function Nav({ lang, onLangChange }: NavProps) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.about, href: "#about" },
    { label: t.projects, href: "#projects" },
    { label: t.experience, href: "#experience" },
    { label: t.certifications, href: "#certifications" },
    { label: t.contact, href: "#contact" },
    { label: t.hobby, href: "#hobby" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="transition-all duration-500"
        style={{
          background: scrolled ? "rgba(0,0,0,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(12px) saturate(140%)" : "none",
          borderBottom: scrolled ? "1px solid #202020" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white hover:text-[#FFC000] transition-colors duration-200"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            ADG
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-xs uppercase text-white/55 hover:text-white transition-colors duration-200"
                style={{ letterSpacing: "0.1em" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div
              className="flex items-center p-0.5 text-xs"
              style={{
                background: "#000000",
                border: "1px solid #494949",
              }}
            >
              {(["it", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => onLangChange(l)}
                  className="px-3 py-1 uppercase transition-colors duration-200"
                  style={{
                    background: lang === l ? "#FFC000" : "transparent",
                    color: lang === l ? "#000000" : "#969696",
                    letterSpacing: "0.08em",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNav("#contact")}
              className="lambo-primary inline-flex items-center gap-2 px-5 py-2 text-sm transition-colors duration-200"
              style={{
                background: "#FFC000",
                color: "#000000",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#917300";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#FFC000";
              }}
            >
              {t.cta}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-5 h-px bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-6 py-6 flex flex-col gap-4"
            style={{
              background: "rgba(0,0,0,0.98)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid #202020",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left text-base uppercase text-white/70 hover:text-white transition-colors duration-200 py-1"
                style={{ letterSpacing: "0.08em" }}
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-2 pt-2">
              {(["it", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => onLangChange(l)}
                  className="px-4 py-1.5 text-xs uppercase transition-colors duration-200"
                  style={{
                    background: lang === l ? "#FFC000" : "#202020",
                    border: "1px solid #494949",
                    color: lang === l ? "#000000" : "#969696",
                    letterSpacing: "0.08em",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
