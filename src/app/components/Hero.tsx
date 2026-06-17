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
      {/* Ambient glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.18) 0%, rgba(30,58,138,0.08) 35%, transparent 72%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(212,175,55,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
            style={{
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.2)",
              color: "#D4AF37",
              letterSpacing: "0.12em",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#D4AF37" }} />
            {t.badge}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-white mb-6 leading-none tracking-tight"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
          }}
        >
          {t.title1}
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #FAFAFA 0%, #E6C76A 52%, #A1A1AA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.title2}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4 text-white/40 tracking-widest uppercase"
          style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}
        >
          {t.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-xl mx-auto text-white/50 leading-relaxed mb-12"
          style={{ fontSize: "1.0625rem" }}
        >
          {t.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <button
            onClick={scrollToProjects}
            className="px-7 py-3 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #E6C76A 100%)",
              color: "#09090B",
              boxShadow: "0 14px 40px rgba(212,175,55,0.18)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #E6C76A 0%, #D4AF37 100%)";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #D4AF37 0%, #E6C76A 100%)";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            {t.viewProjects}
          </button>
          <a
            href="/Antonio_Del_Giudice_CV.pdf"
            download
            className="px-7 py-3 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: "#18181B",
              border: "1px solid #27272A",
              color: "#A1A1AA",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(30,58,138,0.22)";
              (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(37,99,235,0.55)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#FAFAFA";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#18181B";
              (e.currentTarget as HTMLAnchorElement).style.border = "1px solid #27272A";
              (e.currentTarget as HTMLAnchorElement).style.color = "#A1A1AA";
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors duration-200"
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
