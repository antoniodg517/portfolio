import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { type Lang, translations } from "../i18n";

interface HobbyProps { lang: Lang }

const itemStyles = [
  {
    glow: "rgba(212,175,55,0.24)",
    ring: "rgba(212,175,55,0.42)",
  },
  {
    glow: "rgba(212,175,55,0.2)",
    ring: "rgba(212,175,55,0.36)",
  },
  {
    glow: "rgba(37,99,235,0.22)",
    ring: "rgba(37,99,235,0.42)",
  },
  {
    glow: "rgba(30,58,138,0.25)",
    ring: "rgba(37,99,235,0.36)",
  },
];

function BarbellVisual({ small = false }: { small?: boolean }) {
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full" role="img" aria-label="Barbell">
      <defs>
        <linearGradient id="steel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="35%" stopColor="#A1A1AA" />
          <stop offset="70%" stopColor="#27272A" />
          <stop offset="100%" stopColor="#FAFAFA" />
        </linearGradient>
        <linearGradient id="plate" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27272A" />
          <stop offset="50%" stopColor="#09090B" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>
      </defs>
      <ellipse cx="210" cy="205" rx={small ? "130" : "170"} ry="18" fill="rgba(0,0,0,0.32)" />
      <rect x="72" y="119" width="276" height="18" rx="9" fill="url(#steel)" />
      {[34, 58, 318, 342].map((x, i) => (
        <rect key={x} x={x} y={70 + (i % 2) * 7} width="30" height={i % 2 ? 106 : 120} rx="9" fill="url(#plate)" stroke="#27272A" strokeWidth="3" />
      ))}
      <rect x="95" y="100" width="24" height="56" rx="7" fill="#18181B" stroke="#A1A1AA" strokeWidth="2" />
      <rect x="301" y="100" width="24" height="56" rx="7" fill="#18181B" stroke="#A1A1AA" strokeWidth="2" />
      <rect x="150" y="116" width="120" height="24" rx="12" fill="rgba(212,175,55,0.15)" />
      <path d="M153 130h114" stroke="#E6C76A" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
      {!small && (
        <g opacity="0.42">
          <path d="M108 88c18-28 46-42 84-42" stroke="#D4AF37" strokeWidth="3" fill="none" />
          <path d="M229 47c40 3 68 21 84 54" stroke="#2563EB" strokeWidth="3" fill="none" />
        </g>
      )}
    </svg>
  );
}

function CardVisual({ small = false }: { small?: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="relative rounded-[18px]"
        style={{
          width: small ? "72%" : "46%",
          minWidth: small ? 88 : 190,
          aspectRatio: "0.64",
          background: "linear-gradient(135deg, rgba(250,250,250,0.12), rgba(161,161,170,0.05))",
          border: "1px solid rgba(250,250,250,0.18)",
          boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.05), 0 24px 60px rgba(0,0,0,0.38)",
          padding: small ? 6 : 12,
        }}
      >
        <div className="h-[18%] rounded-t-[10px] bg-[#FAFAFA] border-b-4 border-[#D4AF37] px-3 py-2">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <div className="h-1.5 w-20 bg-[#18181B] rounded" />
              <div className="h-1.5 w-14 bg-[#18181B] rounded" />
              <div className="h-1.5 w-10 bg-[#18181B] rounded" />
            </div>
            <div className="text-right leading-none">
              <div className="text-[9px] font-semibold text-[#18181B]">MINT</div>
              <div className="text-lg font-semibold text-[#18181B]">9</div>
            </div>
          </div>
        </div>
        <div
          className="relative h-[82%] overflow-hidden rounded-b-[12px]"
          style={{
            background:
              "linear-gradient(135deg, #E6C76A 0%, #D4AF37 35%, #7C5E0A 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "radial-gradient(circle at 25% 20%, #FAFAFA 0 4px, transparent 5px), radial-gradient(circle at 70% 35%, #FAFAFA 0 5px, transparent 6px)" }} />
          <div className="absolute left-[18%] top-[18%] w-[42%] h-[47%] rounded-full bg-[#FAFAFA]/85 blur-[1px]" />
          <div className="absolute left-[30%] top-[12%] w-[18%] h-[18%] rounded-full bg-[#18181B]" />
          <div className="absolute left-[16%] bottom-[18%] right-[12%] h-[18%] skew-x-[-18deg] bg-[#09090B]" />
          <div className="absolute bottom-4 left-5 right-5 h-5 rounded bg-[#18181B] flex items-center justify-center">
            <span className="text-[10px] tracking-widest text-[#FAFAFA]">FOOTBALL CARD</span>
          </div>
          {!small && <div className="absolute top-4 right-4 text-[10px] font-semibold text-[#18181B]/80">PSA STYLE</div>}
        </div>
      </div>
    </div>
  );
}

function JerseyVisual({ small = false }: { small?: boolean }) {
  return (
    <svg viewBox="0 0 360 260" className="w-full h-full" role="img" aria-label="White football jersey">
      <defs>
        <linearGradient id="jerseyWhite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="55%" stopColor="#E8E8EA" />
          <stop offset="100%" stopColor="#A1A1AA" />
        </linearGradient>
      </defs>
      <ellipse cx="180" cy="226" rx={small ? "82" : "126"} ry="14" fill="rgba(0,0,0,0.35)" />
      <path d="M118 46l37 15c8 6 42 6 50 0l37-15 48 38-34 50-25-17 9 104H120l9-104-25 17-34-50 48-38z" fill="url(#jerseyWhite)" stroke="#27272A" strokeWidth="3" />
      <path d="M148 56c10 20 54 20 64 0" fill="none" stroke="#18181B" strokeWidth="6" strokeLinecap="round" />
      <path d="M104 78l30 38M256 116l30-38" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
      <path d="M114 64l26 9M246 73l26-9" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" />
      {!small && (
        <>
          <text x="180" y="132" textAnchor="middle" fontSize="22" fontWeight="700" fill="#18181B">MADRID</text>
          <text x="180" y="156" textAnchor="middle" fontSize="12" letterSpacing="3" fill="#1E3A8A">2026</text>
        </>
      )}
      <circle cx="218" cy="94" r="13" fill="none" stroke="#D4AF37" strokeWidth="3" />
      <path d="M210 94h16M218 86v16" stroke="#D4AF37" strokeWidth="2" />
    </svg>
  );
}

function BackpackVisual({ small = false }: { small?: boolean }) {
  return (
    <svg viewBox="0 0 360 260" className="w-full h-full" role="img" aria-label="Black backpack">
      <defs>
        <linearGradient id="pack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27272A" />
          <stop offset="55%" stopColor="#09090B" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>
      </defs>
      <ellipse cx="180" cy="228" rx={small ? "80" : "122"} ry="14" fill="rgba(0,0,0,0.42)" />
      <path d="M128 55c12-24 92-24 104 0" fill="none" stroke="#27272A" strokeWidth="9" strokeLinecap="round" />
      <path d="M106 82c10-34 138-34 148 0l15 116c3 23-16 36-38 36H129c-22 0-41-13-38-36l15-116z" fill="url(#pack)" stroke="#27272A" strokeWidth="4" />
      <path d="M124 104h112l-8 104H132l-8-104z" fill="#18181B" stroke="#27272A" strokeWidth="3" />
      <path d="M135 132c28 26 62 26 90 0M135 164c28 26 62 26 90 0" fill="none" stroke="#A1A1AA" strokeWidth="4" opacity="0.75" />
      <path d="M180 120v78" stroke="#27272A" strokeWidth="4" />
      <rect x="151" y="74" width="58" height="18" rx="6" fill="#FAFAFA" opacity="0.95" />
      {!small && <text x="180" y="87" textAnchor="middle" fontSize="10" fontWeight="800" fill="#18181B">BOREALIS</text>}
      <rect x="94" y="122" width="18" height="62" rx="8" fill="#18181B" stroke="#27272A" />
      <rect x="248" y="122" width="18" height="62" rx="8" fill="#18181B" stroke="#27272A" />
    </svg>
  );
}

const visuals = [BarbellVisual, CardVisual, JerseyVisual, BackpackVisual];

export function Hobby({ lang }: HobbyProps) {
  const t = translations[lang].hobby;
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const ActiveVisual = visuals[active];

  return (
    <section id="hobby" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14"
        >
          <p className="text-white/30 uppercase tracking-widest mb-4 text-xs" style={{ letterSpacing: "0.2em" }}>
            {t.label}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-white"
              style={{ fontSize: "clamp(2rem,4vw,3.25rem)", fontWeight: 600, letterSpacing: "-0.03em" }}
            >
              {t.headline}
            </h2>
            <p className="max-w-sm text-white/40 leading-relaxed text-sm">{t.intro}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
          <div
            className="relative min-h-[360px] rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #18181B 0%, rgba(30,58,138,0.16) 100%)",
              border: "1px solid #27272A",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 50% 35%, ${itemStyles[active].glow} 0%, transparent 48%)`,
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.94, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -12 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 p-8"
              >
                <ActiveVisual />
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="rounded-3xl p-7 md:p-8 flex flex-col justify-between"
            style={{
              background: "#18181B",
              border: "1px solid #27272A",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#D4AF37", letterSpacing: "0.16em" }}>
                  {t.items[active].kicker}
                </p>
                <h3 className="text-white mb-5" style={{ fontSize: "clamp(1.75rem,3vw,2.65rem)", fontWeight: 600, letterSpacing: "-0.03em" }}>
                  {t.items[active].title}
                </h3>
                <p className="text-white/50 leading-relaxed" style={{ fontSize: "1rem" }}>
                  {t.items[active].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-4 gap-3 mt-10">
              {t.items.map((item, index) => {
                const Thumb = visuals[index];
                const selected = active === index;
                return (
                  <button
                    key={item.title}
                    onClick={() => setActive(index)}
                    className="group relative aspect-square rounded-2xl overflow-hidden transition-all duration-300"
                    style={{
                      background: selected ? "rgba(212,175,55,0.08)" : "#09090B",
                      border: selected ? `1px solid ${itemStyles[index].ring}` : "1px solid #27272A",
                      boxShadow: selected ? `0 0 0 1px ${itemStyles[index].ring}, 0 16px 36px rgba(0,0,0,0.24)` : "none",
                    }}
                    aria-label={item.title}
                  >
                    <div className="absolute inset-2">
                      <Thumb small />
                    </div>
                    <div
                      className="absolute inset-x-0 bottom-0 px-2 py-2 text-[10px] font-medium text-center"
                      style={{
                        background: "linear-gradient(to top, rgba(9,9,11,0.96), transparent)",
                        color: selected ? "#E6C76A" : "#A1A1AA",
                      }}
                    >
                      {item.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
