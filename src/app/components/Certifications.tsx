import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown, Search, ShieldCheck } from "lucide-react";
import { type Lang, translations } from "../i18n";

const learnn = [
  ["AI e ChatGPT", "30/09/2025", "13h", "109"], ["Email Marketing", "15/11/2025", "9h", "65"], ["Python", "22/09/2025", "3h", "63"], ["Graphic Design con Canva", "17/10/2025", "5h", "63"], ["JavaScript", "19/09/2025", "4h", "49"], ["Slide e Presentazioni", "18/02/2025", "4h", "35"], ["Remote Working", "20/10/2025", "4h", "38"], ["Canva Avanzato", "17/12/2025", "4h", "34"], ["Web Design con Webflow", "18/10/2025", "4h", "25"], ["Cybersecurity", "25/09/2025", "3h", "51"], ["Brand Management", "15/10/2025", "3h", "27"], ["Project Management", "14/10/2025", "2h", "47"], ["E-Commerce Operations", "13/10/2025", "2h", "20"], ["Figma Basics", "16/10/2025", "1h", "16"], ["Business English", "09/12/2025", "1h", "10"],
];
const anthropic = ["Claude 101", "Claude Code 101", "Claude Code in Action", "Claude Platform 101", "Introduction to Claude Cowork", "Introduction to Agent Skills", "Introduction to Subagents", "Introduction to Model Context Protocol", "Model Context Protocol: Advanced Topics", "Building with the Claude API", "Claude with Amazon Bedrock", "Claude with Google Vertex AI", "AI Fluency: Framework & Foundations", "AI Fluency: AI Capabilities & Limitations", "AI Fluency for Nonprofits", "AI Fluency for Small Businesses", "AI Fluency for Educators", "AI Fluency for Students", "AI Fluency for Builders", "Teaching the AI Fluency Framework"];

export function Certifications({ lang }: { lang: Lang }) {
  const t = translations[lang].certifications;
  const [query, setQuery] = useState("");
  const [provider, setProvider] = useState<"all" | "Anthropic" | "Learnn">("all");
  const [expanded, setExpanded] = useState(false);
  const rows = useMemo(() => [...anthropic.map((name) => ({ provider: "Anthropic", name, date: "2026", hours: "—", lessons: "—" })), ...learnn.map(([name, date, hours, lessons]) => ({ provider: "Learnn", name, date, hours, lessons }))], []);
  const filtered = rows.filter((row) => (provider === "all" || row.provider === provider) && `${row.provider} ${row.name}`.toLowerCase().includes(query.toLowerCase()));
  const featured = [rows[0], rows[1], rows[20], rows[22]];
  const visible = expanded ? filtered : featured;
  const toggleArchive = () => {
    if (expanded) { setQuery(""); setProvider("all"); }
    setExpanded((value) => !value);
  };

  return (
    <section id="certifications" className="content-section section-shell certifications-section">
      <div className="section-kicker"><span>05</span>{t.label}</div>
      <div className="cert-header">
        <div className="section-heading"><h2>{t.headline}</h2><p>{lang === "it" ? "Formazione continua su intelligenza artificiale, sviluppo, design e gestione dei progetti." : "Continuous learning across artificial intelligence, development, design and project management."}</p></div>
        <div className="cert-summary glass-surface"><ShieldCheck /><strong>35</strong><span>{lang === "it" ? "certificazioni verificate" : "verified certifications"}</span></div>
      </div>
      {expanded && <motion.div className="cert-controls" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><div className="cert-search"><Search /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={lang === "it" ? "Cerca una certificazione…" : "Search a certification…"} /></div><div className="provider-filters" aria-label="Provider">{(["all", "Anthropic", "Learnn"] as const).map((item) => <button key={item} className={provider === item ? "is-active" : ""} onClick={() => setProvider(item)}>{item === "all" ? (lang === "it" ? "Tutte" : "All") : item}<span>{item === "all" ? 35 : item === "Anthropic" ? 20 : 15}</span></button>)}</div></motion.div>}
      {expanded && <p className="result-count">{filtered.length} {lang === "it" ? "risultati" : "results"}</p>}
      <div className={`cert-list ${expanded ? "is-expanded" : "is-preview"}`} role="list">
        <AnimatePresence initial={false}>{visible.map((row, index) => <motion.article role="listitem" key={`${row.provider}-${row.name}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: Math.min(index * .018, .14) }}><span className={`provider-mark provider-mark--${row.provider.toLowerCase()}`} /><div><small>{row.provider}</small><h3>{row.name}</h3></div><div className="cert-meta"><span>{row.date}</span>{row.hours !== "—" && <span>{row.hours} · {row.lessons} {lang === "it" ? "lezioni" : "lessons"}</span>}</div><span className="verified"><Check />{t.verified}</span></motion.article>)}</AnimatePresence>
      </div>
      <button className="show-more" onClick={toggleArchive} aria-expanded={expanded}>{expanded ? (lang === "it" ? "Chiudi archivio" : "Close archive") : (lang === "it" ? "Esplora l’archivio completo (35)" : "Explore the complete archive (35)")}<ChevronDown className={expanded ? "is-open" : ""} /></button>
    </section>
  );
}
