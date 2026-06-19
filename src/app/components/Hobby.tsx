import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { type Lang, translations } from "../i18n";

interface HobbyProps { lang: Lang }

const CARD_INDEX = 1;
const RONALDO_CARD_SRC = "/hobby-assets/psa-ronaldo-front.jpg";
const BACKPACK_SRC = "/hobby-assets/backpack.webp";

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
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="absolute rounded-full"
        style={{
          bottom: small ? "4%" : "-5%",
          width: small ? "70%" : "92%",
          height: small ? "14%" : "18%",
          background: "rgba(0,0,0,0.24)",
          filter: "blur(18px)",
        }}
      />
      <div
        className="relative"
        style={{
          height: small ? "92%" : "100%",
          width: "auto",
          transform: small ? "rotate(-6deg)" : "rotate(-2deg)",
          transformOrigin: "50% 75%",
          filter: small
            ? "drop-shadow(0 18px 18px rgba(0,0,0,0.22))"
            : "drop-shadow(0 34px 24px rgba(0,0,0,0.32))",
        }}
      >
        <img
          src={RONALDO_CARD_SRC}
          alt="PSA graded Cristiano Ronaldo trading card"
          className="block h-full w-auto select-none"
          draggable={false}
          style={{
            borderRadius: small ? 8 : 14,
            boxShadow: small
              ? "inset 0 0 0 1px rgba(255,255,255,0.5)"
              : "inset 0 0 0 1px rgba(255,255,255,0.45), 0 0 0 1px rgba(0,0,0,0.1)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: small ? 8 : 14,
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.32) 0%, transparent 18%, transparent 58%, rgba(255,255,255,0.18) 66%, transparent 74%)",
            mixBlendMode: "screen",
            opacity: small ? 0.42 : 0.72,
          }}
        />
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
    <div className="relative flex h-full w-full items-center justify-center" role="img" aria-label="Black North Face backpack">
      <div
        className="absolute rounded-full"
        style={{
          bottom: small ? "3%" : "-2%",
          width: small ? "62%" : "72%",
          height: small ? "12%" : "15%",
          background: "rgba(0,0,0,0.56)",
          filter: "blur(20px)",
        }}
      />
      <img
        src={BACKPACK_SRC}
        alt="Black North Face backpack"
        className="relative block h-full w-auto select-none"
        draggable={false}
        style={{
          mixBlendMode: "multiply",
          filter: small
            ? "contrast(1.18) brightness(1.02) drop-shadow(0 22px 18px rgba(0,0,0,0.38))"
            : "contrast(1.2) brightness(1.04) drop-shadow(0 42px 30px rgba(0,0,0,0.48))",
        }}
      />
    </div>
  );
}

const visuals = [BarbellVisual, CardVisual, JerseyVisual, BackpackVisual];

export function Hobby({ lang }: HobbyProps) {
  const t = translations[lang].hobby;
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const ActiveVisual = visuals[active];
  const PrevVisual = visuals[(active + visuals.length - 1) % visuals.length];
  const NextVisual = visuals[(active + 1) % visuals.length];
  const activeIsCard = active === CARD_INDEX;
  const activeIsBackpack = active === 3;
  const activeIsVertical = activeIsCard || activeIsBackpack;

  return (
    <section id="hobby" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <p className="lambo-label mb-4">
            {t.label}
          </p>
        </motion.div>

        <div
          className="relative min-h-[760px] overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 50% 32%, #202020 0%, #101010 44%, #000000 100%)",
            color: "#FFFFFF",
            boxShadow: "inset 0 0 0 1px #202020",
          }}
        >
          <div
            className="absolute inset-0 opacity-28"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1.8px)",
              backgroundSize: "17px 17px",
              maskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.08) 70%, rgba(0,0,0,0.7))",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 z-30 h-56"
            style={{
              background: "linear-gradient(to top, #000000 0%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div
            className="absolute left-1/2 top-[420px] z-10 h-24 w-[620px] -translate-x-1/2 rounded-full"
            style={{
              background: activeIsVertical ? "rgba(0,0,0,0.58)" : "rgba(0,0,0,0.42)",
              filter: "blur(34px)",
            }}
          />

          <div
            className="pointer-events-none absolute left-1/2 top-[210px] z-10 w-[1280px] -translate-x-1/2 text-center"
            aria-hidden="true"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={t.items[active].title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-light"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: activeIsVertical
                    ? "clamp(4rem, 9vw, 7rem)"
                    : "clamp(4rem, 10vw, 7.5rem)",
                  letterSpacing: "-0.045em",
                  lineHeight: 0.9,
                  opacity: activeIsVertical ? 0.48 : 0.62,
                }}
              >
                {t.items[active].title}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 0.45, x: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-[-150px] top-[154px] z-20 h-[250px] w-[360px] md:left-[-84px] md:h-[320px] md:w-[430px]"
            style={{ filter: "drop-shadow(0 22px 18px rgba(0,0,0,0.46))" }}
          >
            <PrevVisual small />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 0.45, x: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute right-[-160px] top-[154px] z-20 h-[250px] w-[360px] md:right-[-92px] md:h-[320px] md:w-[430px]"
            style={{ filter: "drop-shadow(0 22px 18px rgba(0,0,0,0.46))" }}
          >
            <NextVisual small />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.88, y: 26 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -18 }}
              transition={{ duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
              className={
                activeIsVertical
                  ? "absolute left-1/2 top-[30px] z-30 h-[500px] w-[360px] max-w-[82vw] -translate-x-1/2 md:h-[535px] md:w-[390px]"
                  : "absolute left-1/2 top-[118px] z-30 h-[300px] w-[540px] max-w-[92vw] -translate-x-1/2 md:h-[370px] md:w-[720px]"
              }
              style={{
                filter: activeIsVertical
                  ? "drop-shadow(0 44px 32px rgba(0,0,0,0.36))"
                  : "drop-shadow(0 34px 30px rgba(0,0,0,0.42))",
              }}
            >
              <ActiveVisual />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-6 bottom-9 z-40 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${active}-copy`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mb-6 max-w-2xl text-center"
              >
                <p className="mb-2 text-[11px] uppercase" style={{ color: "#FFCE3E", letterSpacing: "0.16em" }}>
                  {t.items[active].kicker}
                </p>
                <p className="line-clamp-2 text-sm leading-relaxed text-white/70">
                  {t.items[active].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div
              className="flex max-w-full flex-wrap justify-center gap-2 rounded-full p-1"
              style={{
                background: "rgba(32,32,32,0.92)",
                border: "1px solid #494949",
                boxShadow: "0 18px 40px rgba(0,0,0,0.34)",
              }}
            >
              {t.items.map((item, index) => {
                const selected = active === index;
                return (
                  <button
                    key={item.title}
                    onClick={() => setActive(index)}
                    className="px-5 py-3 text-xs transition-colors duration-200"
                    style={{
                      background: selected ? "#FFC000" : "transparent",
                      borderRadius: "999px",
                      color: selected ? "#000000" : "#969696",
                      letterSpacing: "0",
                    }}
                    aria-label={item.title}
                  >
                    {item.title}
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
