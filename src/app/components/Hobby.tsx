import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { type Lang, translations } from "../i18n";

interface HobbyProps { lang: Lang }

const JERSEY_SRC = "/hobby-assets/jersey.png";
const BARBELL_SRC = "/hobby-assets/barbell.png";
const RONALDO_CARD_SRC = "/hobby-assets/psa-ronaldo-front.jpg";
const BACKPACK_SRC = "/hobby-assets/backpack-north.png";

function ProductVisual({ src, alt, small = false }: { src: string; alt: string; small?: boolean }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="absolute rounded-full"
        style={{
          bottom: small ? "2%" : "-3%",
          width: small ? "58%" : "72%",
          height: small ? "9%" : "13%",
          background: "rgba(0,0,0,0.52)",
          filter: "blur(22px)",
        }}
      />
      <img
        src={src}
        alt={alt}
        className="relative block h-full w-full select-none object-contain"
        draggable={false}
        style={{
          mixBlendMode: "multiply",
          filter: small
            ? "drop-shadow(0 14px 10px rgba(0,0,0,0.28))"
            : "drop-shadow(0 30px 22px rgba(0,0,0,0.44))",
        }}
      />
    </div>
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

function BarbellVisual({ small = false }: { small?: boolean }) {
  return <ProductVisual src={BARBELL_SRC} alt="45 LBS barbell plate" small={small} />;
}

function JerseyVisual({ small = false }: { small?: boolean }) {
  return <ProductVisual src={JERSEY_SRC} alt="Real Madrid jersey" small={small} />;
}

function BackpackVisual({ small = false }: { small?: boolean }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="absolute rounded-full"
        style={{
          top: "10%", left: "15%", right: "15%", bottom: "10%",
          background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          bottom: small ? "2%" : "-3%",
          width: small ? "58%" : "72%",
          height: small ? "9%" : "13%",
          background: "rgba(0,0,0,0.52)",
          filter: "blur(22px)",
        }}
      />
      <img
        src={BACKPACK_SRC}
        alt="North Face Borealis backpack"
        className="relative block h-full w-full select-none object-contain"
        draggable={false}
        style={{
          filter: small
            ? "brightness(1.06) drop-shadow(0 12px 10px rgba(0,0,0,0.5))"
            : "brightness(1.12) drop-shadow(0 0 28px rgba(255,255,255,0.08)) drop-shadow(0 28px 20px rgba(0,0,0,0.55))",
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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % visuals.length);
    }, 7000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const handleSelect = (index: number) => {
    setActive(index);
    startTimer();
  };
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const ActiveVisual = visuals[active];
  const PrevVisual = visuals[(active + visuals.length - 1) % visuals.length];
  const NextVisual = visuals[(active + 1) % visuals.length];

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
          className="relative min-h-[820px] sm:min-h-[760px] overflow-hidden"
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
            className="absolute inset-x-0 bottom-0 z-30 h-72 sm:h-56"
            style={{
              background: "linear-gradient(to top, #000000 0%, rgba(0,0,0,0.97) 52%, rgba(0,0,0,0) 100%)",
            }}
          />

          <div
            className="absolute left-1/2 top-[410px] z-10 h-24 w-[580px] -translate-x-1/2 rounded-full"
            style={{
              background: "rgba(0,0,0,0.48)",
              filter: "blur(34px)",
            }}
          />

          <div
            className="pointer-events-none absolute left-1/2 top-[200px] z-10 w-[1280px] -translate-x-1/2 text-center"
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
                  fontSize: "clamp(4rem, 10vw, 7.5rem)",
                  letterSpacing: "-0.045em",
                  lineHeight: 0.9,
                  opacity: 0.52,
                }}
              >
                {t.items[active].title}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 0.38, x: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-[-130px] top-[160px] z-20 h-[240px] w-[320px] md:left-[-70px] md:h-[310px] md:w-[400px]"
          >
            <PrevVisual small />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 0.38, x: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute right-[-140px] top-[160px] z-20 h-[240px] w-[320px] md:right-[-78px] md:h-[310px] md:w-[400px]"
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
              className="absolute left-1/2 top-[28px] z-30 h-[480px] w-[400px] max-w-[84vw] -translate-x-1/2 md:h-[510px] md:w-[420px]"
              style={{
                filter: "drop-shadow(0 44px 32px rgba(0,0,0,0.36))",
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
                <p className="text-sm leading-relaxed text-white/70">
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
                    onClick={() => handleSelect(index)}
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
