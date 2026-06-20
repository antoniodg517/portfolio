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

/* ─── Orbital decoration ─────────────────────────────────────────────── */

const ORBIT_CSS = `
  @keyframes orb-cw  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
  @keyframes orb-ccw { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
  @keyframes cnt-cw  { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
  @keyframes cnt-ccw { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
  @keyframes ring-spin { 0% { background-position:0% 0%; } 100% { background-position:200% 200%; } }
  @keyframes node-pulse {
    0%,100% { opacity:.55; box-shadow: 0 0 5px var(--nc,#FFC000); }
    50%      { opacity:1;   box-shadow: 0 0 12px var(--nc,#FFC000), 0 0 22px var(--nc,#FFC000); }
  }
  @keyframes data-travel {
    0%   { opacity:0; offset-distance:0%; }
    10%  { opacity:1; }
    90%  { opacity:1; }
    100% { opacity:0; offset-distance:100%; }
  }
`;

function OrbitalNode({
  color, size = 6, glyph, glyphColor,
}: {
  color: string; size?: number; glyph?: string; glyphColor?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        style={{
          width: size, height: size, borderRadius: "50%",
          background: color,
          ["--nc" as string]: color,
          animation: "node-pulse 2.8s ease-in-out infinite",
        }}
      />
      {glyph && (
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 10,
            color: glyphColor ?? color,
            opacity: 0.8,
            letterSpacing: 0,
            userSelect: "none",
          }}
        >
          {glyph}
        </span>
      )}
    </div>
  );
}

/**
 * A single orbit ring.
 * The outer div rotates; each child must use the counter-animation
 * to appear upright while orbiting.
 */
function Ring({
  size, tilt, scaleX = 1, color, duration, clockwise, nodes,
}: {
  size: string;            // CSS size for width & height
  tilt: number;            // initial rotation in deg
  scaleX?: number;         // squish to make it elliptical
  color: string;
  duration: number;
  clockwise: boolean;
  nodes: {
    pos: "top" | "bottom" | "left" | "right";
    color: string;
    glyph?: string;
    size?: number;
  }[];
}) {
  const spinAnim   = clockwise ? "orb-cw"  : "orb-ccw";
  const counterAnim= clockwise ? "cnt-cw"  : "cnt-ccw";

  const posStyle: Record<string, React.CSSProperties> = {
    top:    { position: "absolute", top: "-8px",  left: "50%", transform: "translateX(-50%)" },
    bottom: { position: "absolute", bottom: "-8px", left: "50%", transform: "translateX(-50%)" },
    left:   { position: "absolute", left: "-8px", top: "50%",  transform: "translateY(-50%)" },
    right:  { position: "absolute", right: "-8px", top: "50%", transform: "translateY(-50%)" },
  };

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: size, height: size,
        top: "50%", left: "50%",
        transform: `translate(-50%, -50%) rotate(${tilt}deg) scaleX(${scaleX})`,
        border: `1px solid ${color}`,
        borderRadius: "50%",
        animation: `${spinAnim} ${duration}s linear infinite`,
      }}
    >
      {nodes.map((n, i) => (
        <div
          key={i}
          style={{
            ...posStyle[n.pos],
            animation: `${counterAnim} ${duration}s linear infinite`,
          }}
        >
          <OrbitalNode color={n.color} glyph={n.glyph} size={n.size} glyphColor={n.color} />
        </div>
      ))}
    </div>
  );
}

/* Neural-net connector lines (static SVG, nodes animate separately) */
function NeuralSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 400 560"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* subtle connection lines between fixed points */}
      {[
        ["30,80",  "200,140"],
        ["370,100","200,140"],
        ["200,140","200,420"],
        ["200,420","40,480"],
        ["200,420","360,470"],
        ["30,80",  "40,480"],
        ["370,100","360,470"],
      ].map(([a, b], i) => {
        const [x1, y1] = a.split(",").map(Number);
        const [x2, y2] = b.split(",").map(Number);
        return (
          <line
            key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
        );
      })}
    </svg>
  );
}

/* Floating code fragments (gentle drift) */
const CODE_FRAGMENTS = [
  { text: "</>",    x: "8%",  y: "12%",  delay: 0,    dur: 5.2, color: "rgba(41,171,226,0.65)"  },
  { text: "AI",     x: "82%", y: "18%",  delay: 0.8,  dur: 6.1, color: "rgba(255,192,0,0.7)"    },
  { text: "{ }",    x: "5%",  y: "55%",  delay: 1.4,  dur: 4.8, color: "rgba(255,255,255,0.3)"  },
  { text: "λ",      x: "86%", y: "62%",  delay: 0.3,  dur: 7.0, color: "rgba(41,171,226,0.5)"   },
  { text: "async",  x: "72%", y: "84%",  delay: 1.9,  dur: 5.6, color: "rgba(255,255,255,0.22)" },
  { text: "∑",      x: "14%", y: "82%",  delay: 0.6,  dur: 6.4, color: "rgba(255,192,0,0.45)"   },
  { text: "=>",     x: "90%", y: "40%",  delay: 2.1,  dur: 5.0, color: "rgba(255,255,255,0.2)"  },
];

function RoleCycler({ lang }: { lang: Lang }) {
  const list = roles[lang];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % list.length), 2400);
    return () => clearInterval(t);
  }, [list.length]);

  return (
    <span className="relative inline-block overflow-hidden" style={{ minWidth: "16ch" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={`${lang}-${idx}`}
          initial={{ y: 26, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -26, opacity: 0 }}
          transition={{ duration: 0.36, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block"
          style={{ color: "#FFC000" }}
        >
          {list[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ─── Main component ─────────────────────────────────────────────────── */

export function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [photoError, setPhotoError] = useState(false);

  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <style>{ORBIT_CSS}</style>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "#000" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 70% 48%, rgba(255,192,0,0.07) 0%, transparent 70%)," +
            "radial-gradient(ellipse 45% 40% at 28% 60%, rgba(41,171,226,0.04) 0%, transparent 65%)",
        }}
      />
      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 25%, transparent 100%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center min-h-[88vh] py-28 md:py-0">

          {/* LEFT — text */}
          <div className="flex flex-col items-start order-1">
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
              transition={{ duration: 0.6, delay: 0.30, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6 h-8 flex items-center"
              style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.05rem)", fontWeight: 400 }}
            >
              <span className="text-white/40 mr-2">
                {lang === "it" ? "Sono un" : "I'm a"}
              </span>
              <RoleCycler lang={lang} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
              className="lambo-copy mb-10 max-w-md"
              style={{ fontSize: "1rem", lineHeight: 1.68 }}
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
                style={{ background: "#FFC000", color: "#000" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#917300"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#FFC000"; }}
              >
                {t.viewProjects} <ArrowUpRight size={15} />
              </button>
              <a
                href="/Antonio_Del_Giudice_CV.pdf"
                download
                className="lambo-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200"
                style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "#FFF" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.38)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                {t.downloadCV}
              </a>
            </motion.div>
          </div>

          {/* RIGHT — photo + orbital decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden md:flex items-center justify-center order-2"
            style={{ minHeight: "420px" }}
          >
            {/* Ambient glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "60%", height: "60%",
                background: "radial-gradient(circle, rgba(255,192,0,0.13) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Neural net connector lines */}
            <NeuralSVG />

            {/* Orbit ring 1 — large, gold, slow CW */}
            <Ring
              size="138%"
              tilt={18}
              scaleX={0.72}
              color="rgba(255,192,0,0.14)"
              duration={20}
              clockwise
              nodes={[
                { pos: "top",    color: "#FFC000", glyph: "</>", size: 5 },
                { pos: "bottom", color: "rgba(255,192,0,0.6)", size: 4 },
              ]}
            />

            {/* Orbit ring 2 — medium, cyan, CCW */}
            <Ring
              size="108%"
              tilt={-12}
              scaleX={0.65}
              color="rgba(41,171,226,0.16)"
              duration={14}
              clockwise={false}
              nodes={[
                { pos: "top",   color: "#29ABE2", glyph: "AI",  size: 5 },
                { pos: "right", color: "rgba(41,171,226,0.55)", size: 4 },
              ]}
            />

            {/* Orbit ring 3 — small, dim, fast CW */}
            <Ring
              size="82%"
              tilt={40}
              scaleX={0.6}
              color="rgba(255,255,255,0.07)"
              duration={9}
              clockwise
              nodes={[
                { pos: "top", color: "rgba(255,255,255,0.45)", glyph: "λ", size: 4 },
              ]}
            />

            {/* Floating code fragments */}
            {CODE_FRAGMENTS.map((f, i) => (
              <motion.span
                key={i}
                className="absolute pointer-events-none select-none hidden md:block"
                style={{
                  left: f.x, top: f.y,
                  fontFamily: "monospace",
                  fontSize: 11,
                  color: f.color,
                  letterSpacing: "-0.02em",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
              >
                {f.text}
              </motion.span>
            ))}

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.85, delay: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10"
              style={{ width: "clamp(200px, 32vw, 320px)", aspectRatio: "3/4" }}
            >
              {/* Animated gradient ring border */}
              <div
                className="absolute -inset-[2px] rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg,#FFC000 0%,rgba(41,171,226,0.7) 38%,transparent 55%,#FFC000 100%)",
                  backgroundSize: "200% 200%",
                  animation: "ring-spin 5s linear infinite",
                }}
              />

              <div
                className="relative w-full h-full rounded-3xl overflow-hidden"
                style={{ background: "#111" }}
              >
                {!photoError ? (
                  <img
                    src={PROFILE_SRC}
                    alt="Antonio Del Giudice"
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  /* Placeholder when photo not yet added */
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3"
                    style={{ background: "linear-gradient(160deg,#141414 0%,#0a0a0a 100%)" }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{ width: 72, height: 72, background: "rgba(255,192,0,0.1)", border: "1px solid rgba(255,192,0,0.25)" }}
                    >
                      <span style={{ fontSize: 28, color: "rgba(255,192,0,0.6)", fontFamily: "monospace" }}>ADG</span>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, letterSpacing: "0.06em" }}>
                      Salva come /public/profile.jpg
                    </p>
                  </div>
                )}

                {/* Bottom fade */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                  style={{ background: "linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 100%)" }}
                />
              </div>

              {/* Glass name chip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                style={{
                  background: "rgba(0,0,0,0.68)",
                  backdropFilter: "blur(14px)",
                  borderRadius: "0.875rem",
                  border: "1px solid rgba(255,255,255,0.09)",
                  padding: "10px 14px",
                }}
              >
                <div>
                  <p className="text-white text-xs font-medium">Antonio Del Giudice</p>
                </div>
                <div className="w-2 h-2 rounded-full" style={{ background: "#4ADE80", boxShadow: "0 0 6px #4ADE80" }} />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        onClick={scrollToProjects}
        className="rounded-full absolute bottom-8 left-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center border border-white/12 text-white/35 hover:text-white/70 hover:border-white/30 transition-all duration-300"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ArrowDown size={15} />
        </motion.div>
      </motion.button>
    </section>
  );
}
