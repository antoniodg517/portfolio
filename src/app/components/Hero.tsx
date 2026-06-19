import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { type Lang, translations } from "../i18n";

interface HeroProps { lang: Lang }

export function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "#000000",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 32%, rgba(255,192,0,0.08) 100%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/35" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <span
            className="lambo-tag inline-flex items-center gap-2 px-4 py-1.5 text-xs"
            style={{
              letterSpacing: "0.12em",
            }}
          >
            <span className="w-1.5 h-1.5 lambo-hex animate-pulse" style={{ background: "#FFC000" }} />
            {t.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="lambo-heading mb-6"
          style={{
            fontSize: "clamp(3rem, 10vw, 7.5rem)",
          }}
        >
          {t.title1}
          <br />
          <span
            style={{
              color: "#FFFFFF",
            }}
          >
            {t.title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="lambo-label mb-4"
        >
          {t.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="lambo-copy max-w-xl mx-auto mb-12"
          style={{ fontSize: "1.0625rem" }}
        >
          {t.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <button
            onClick={scrollToProjects}
            className="lambo-primary px-8 py-4 text-sm font-medium transition-colors duration-200"
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
            {t.viewProjects}
          </button>
          <a
            href="/Antonio_Del_Giudice_CV.pdf"
            download
            className="lambo-ghost px-8 py-4 text-sm font-medium transition-colors duration-200"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.5)",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#29ABE2";
              (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(255,255,255,0.7)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#FAFAFA";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(255,255,255,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
            }}
          >
            {t.downloadCV}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={scrollToProjects}
        className="lambo-hex absolute bottom-10 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center border border-white/50 text-white/60 hover:text-white transition-colors duration-200"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
