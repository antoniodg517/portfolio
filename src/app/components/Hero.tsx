import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { type Lang, translations } from "../i18n";

interface HeroProps { lang: Lang }

const PROFILE_SRC = "/profile.jpg";

const roles = {
  en: ["Web Developer", "CS Graduate", "AI Enthusiast", "IT Specialist"],
  it: ["Web Developer", "Laureato in Informatica", "Appassionato di AI", "Specialista IT"],
};

const floatingBadges = {
  en: [
    { label: "React & TypeScript", color: "#29ABE2" },
    { label: "AI / LLMs", color: "#FFC000" },
    { label: "HRI Thesis", color: "#29ABE2" },
    { label: "B2 English", color: "#969696" },
    { label: "Learnn × 15", color: "#FFC000" },
  ],
  it: [
    { label: "React & TypeScript", color: "#29ABE2" },
    { label: "AI / LLMs", color: "#FFC000" },
    { label: "Tesi HRI", color: "#29ABE2" },
    { label: "Inglese B2", color: "#969696" },
    { label: "15 Certificazioni", color: "#FFC000" },
  ],
};

function RoleCycler({ lang }: { lang: Lang }) {
  const list = roles[lang];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % list.length), 2400);
    return () => clearInterval(t);
  }, [list.length]);

  return (
    <span
      className="relative inline-block overflow-hidden"
      style={{ minWidth: "16ch" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={`${lang}-${idx}`}
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -28, opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block"
          style={{ color: "#FFC000" }}
        >
          {list[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const badges = floatingBadges[lang];

  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "#000000" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 65% 45%, rgba(255,192,0,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 30% 60%, rgba(41,171,226,0.04) 0%, transparent 65%)",
        }}
      />
      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[80vh] py-24 md:py-0">

          {/* LEFT — text content */}
          <div className="flex flex-col items-start order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6"
            >
              <span
                className="lambo-tag inline-flex items-center gap-2 px-4 py-1.5 text-xs"
                style={{ letterSpacing: "0.08em" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#FFC000" }} />
                {t.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-3"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.04em",
                lineHeight: 0.96,
                color: "#FFFFFF",
              }}
            >
              {t.title1}
              <br />
              {t.title2}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6 h-8 flex items-center"
              style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.05rem)", fontWeight: 400 }}
            >
              <span className="text-white/45 mr-2">{lang === "it" ? "Sono un" : "I'm a"}</span>
              <RoleCycler lang={lang} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
              className="lambo-copy mb-10 max-w-md"
              style={{ fontSize: "1rem", lineHeight: 1.65 }}
            >
              {t.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.52, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-3 flex-wrap"
            >
              <button
                onClick={scrollToProjects}
                className="lambo-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors duration-200"
                style={{ background: "#FFC000", color: "#000000" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#917300"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#FFC000"; }}
              >
                {t.viewProjects}
                <ArrowUpRight size={15} />
              </button>
              <a
                href="/Antonio_Del_Giudice_CV.pdf"
                download
                className="lambo-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200"
                style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.18)", color: "#FFFFFF" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.18)";
                }}
              >
                {t.downloadCV}
              </a>
            </motion.div>
          </div>

          {/* RIGHT — photo + floating badges */}
          <div className="relative flex items-center justify-center order-1 md:order-2">
            {/* Ambient glow behind photo */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "75%",
                height: "75%",
                background: "radial-gradient(circle, rgba(255,192,0,0.12) 0%, transparent 70%)",
                filter: "blur(32px)",
              }}
            />

            {/* Photo container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
              style={{ width: "clamp(240px, 38vw, 380px)", aspectRatio: "3/4" }}
            >
              {/* Animated gradient ring */}
              <div
                className="absolute -inset-[3px] rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, #FFC000 0%, rgba(41,171,226,0.6) 40%, transparent 60%, #FFC000 100%)",
                  backgroundSize: "200% 200%",
                  animation: "ring-spin 4s linear infinite",
                }}
              />
              <style>{`
                @keyframes ring-spin {
                  0%   { background-position: 0% 0%; }
                  100% { background-position: 200% 200%; }
                }
              `}</style>

              {/* Photo */}
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden"
                style={{ background: "#111111" }}
              >
                <img
                  src={PROFILE_SRC}
                  alt="Antonio Del Giudice"
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
                {/* Subtle bottom fade */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* Name chip on photo */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                style={{
                  background: "rgba(0,0,0,0.72)",
                  backdropFilter: "blur(14px)",
                  borderRadius: "0.875rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "10px 14px",
                }}
              >
                <div>
                  <p className="text-white text-xs font-medium" style={{ letterSpacing: "0" }}>
                    Antonio Del Giudice
                  </p>
                  <p className="text-white/45 text-[11px]">Poggiomarino, Italy</p>
                </div>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#4ADE80", boxShadow: "0 0 6px #4ADE80" }}
                />
              </motion.div>
            </motion.div>

            {/* Floating skill badges */}
            {badges.map((badge, i) => {
              const positions = [
                { top: "8%", right: "-14%", delay: 0.55 + i * 0.09, x: 20 },
                { top: "30%", left: "-18%", delay: 0.62 + i * 0.09, x: -20 },
                { top: "55%", right: "-16%", delay: 0.7 + i * 0.09, x: 20 },
                { top: "72%", left: "-14%", delay: 0.78 + i * 0.09, x: -20 },
                { top: "18%", right: "-12%", delay: 0.85 + i * 0.09, x: 20 },
              ];
              const pos = positions[i % positions.length];

              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, x: pos.x }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: pos.delay, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium whitespace-nowrap"
                  style={{
                    top: pos.top,
                    ...(pos.right ? { right: pos.right } : { left: pos.left }),
                    background: "rgba(0,0,0,0.82)",
                    border: `1px solid ${badge.color}30`,
                    borderRadius: "999px",
                    color: badge.color,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: badge.color, opacity: 0.9 }}
                  />
                  {badge.label}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        onClick={scrollToProjects}
        className="rounded-full absolute bottom-8 left-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center border border-white/15 text-white/40 hover:text-white/80 hover:border-white/35 transition-all duration-300"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.button>
    </section>
  );
}
