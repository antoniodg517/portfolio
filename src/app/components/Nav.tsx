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
    { label: t.skills, href: "#skills" },
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
          background: scrolled ? "rgba(9,9,11,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid #27272A" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-200"
            style={{ letterSpacing: "0.15em" }}
          >
            ADG
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <div
              className="flex items-center rounded-full p-0.5 text-xs"
              style={{
                background: "#18181B",
                border: "1px solid #27272A",
              }}
            >
              {(["it", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => onLangChange(l)}
                  className="px-3 py-1 rounded-full uppercase transition-all duration-200"
                  style={{
                    background: lang === l ? "rgba(212,175,55,0.16)" : "transparent",
                    color: lang === l ? "#E6C76A" : "#A1A1AA",
                    letterSpacing: "0.08em",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNav("#contact")}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm transition-all duration-200"
              style={{
                background: "rgba(212,175,55,0.12)",
                border: "1px solid rgba(212,175,55,0.3)",
                color: "#D4AF37",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.12)";
              }}
            >
              {t.cta}
            </button>
          </div>

          {/* Mobile burger */}
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
              background: "rgba(9,9,11,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid #27272A",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left text-base text-white/70 hover:text-white transition-colors duration-200 py-1"
              >
                {link.label}
              </button>
            ))}
            {/* Mobile lang toggle */}
            <div className="flex gap-2 pt-2">
              {(["it", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => onLangChange(l)}
                  className="px-4 py-1.5 rounded-full text-xs uppercase transition-all duration-200"
                  style={{
                    background: lang === l ? "rgba(212,175,55,0.16)" : "#18181B",
                    border: "1px solid #27272A",
                    color: lang === l ? "#E6C76A" : "#A1A1AA",
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
