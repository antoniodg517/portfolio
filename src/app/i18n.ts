export type Lang = "en" | "it";

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      badge: "Available for opportunities",
      title1: "Antonio",
      title2: "Del Giudice",
      subtitle: "Software Developer & Computer Science Graduate",
      tagline: "I build software that matters — with precision, clarity, and a deep commitment to craft.",
      viewProjects: "View Projects",
      downloadCV: "Download CV",
    },
    about: {
      label: "About",
      headline1: "Passion for craft,",
      headline2: "obsession with quality.",
      p1: "I'm Antonio — a Computer Science graduate and software developer who believes that great software is the intersection of rigorous engineering and thoughtful design.",
      p2: "I approach every problem with curiosity and precision. Whether building scalable backends, crafting polished frontends, or architecting systems that need to endure — I care deeply about the details that most people overlook.",
      p3: "When I'm not writing code, I'm reading about it, thinking about it, or finding new problems worth solving.",
      stats: [
        { value: "3+", label: "Years coding" },
        { value: "15+", label: "Projects built" },
        { value: "B.Sc.", label: "Computer Science" },
        { value: "∞", label: "Lines of curiosity" },
      ],
    },
    projects: {
      label: "Featured Work",
      headline: "Projects that define me.",
      items: [
        {
          title: "Nexus CRM",
          description:
            "A full-stack customer relationship management platform built for scale. Handles 100k+ contacts with real-time sync, role-based access control, and an analytics dashboard that surfaces actionable insights.",
          year: "2024",
          status: "Production",
        },
        {
          title: "Atlas CLI",
          description:
            "A developer toolchain CLI that automates deployment workflows, environment management, and infrastructure-as-code generation. Reduced deploy times by 60% for the teams that adopted it.",
          year: "2024",
          status: "Open source",
        },
        {
          title: "Meridian",
          description:
            "An AI-powered study companion that generates adaptive quizzes, tracks learning gaps, and delivers personalized revision schedules. Built as my CS dissertation project and used by 200+ students.",
          year: "2023",
          status: "Academic",
        },
      ],
    },
    experience: {
      label: "Timeline",
      headline: "Experience & Education.",
      items: [
        {
          role: "Software Developer",
          org: "Tech Startup — Remote",
          period: "2024 – Present",
          description:
            "Leading frontend architecture for a SaaS platform serving 10k+ users. Introduced a component library that reduced UI development time by 40%. Collaborated closely with product and design to ship features fast without compromising quality.",
        },
        {
          role: "Junior Developer",
          org: "Digital Agency",
          period: "2022 – 2024",
          description:
            "Built bespoke web applications for clients across e-commerce, fintech, and media. Gained strong full-stack fundamentals across diverse tech stacks and client requirements.",
        },
        {
          role: "B.Sc. Computer Science",
          org: "University — First Class Honours",
          period: "2019 – 2022",
          description:
            "Graduated with First Class Honours. Dissertation: AI-powered adaptive learning systems. Focus areas: algorithms, distributed systems, software engineering, machine learning.",
        },
      ],
    },
    skills: {
      label: "Technical Stack",
      headline: "Built on solid foundations.",
    },
    contact: {
      label: "Contact",
      headline1: "Let's build something",
      headline2: "great together.",
      sub: "I'm open to new opportunities, collaborations, and interesting conversations about technology.",
      links: [
        { label: "GitHub", sub: "github.com/antonio-delgiudice" },
        { label: "LinkedIn", sub: "linkedin.com/in/antonio-delgiudice" },
        { label: "Email", sub: "antonio@delgiudice.dev" },
      ],
    },
    footer: "Crafted with precision.",
  },
  it: {
    nav: {
      about: "Chi sono",
      projects: "Progetti",
      experience: "Esperienza",
      skills: "Competenze",
      contact: "Contatti",
      cta: "Scrivimi",
    },
    hero: {
      badge: "Disponibile per nuove opportunità",
      title1: "Antonio",
      title2: "Del Giudice",
      subtitle: "Sviluppatore Software & Laureato in Informatica",
      tagline: "Costruisco software che conta — con precisione, chiarezza e un profondo impegno per la qualità.",
      viewProjects: "Vedi Progetti",
      downloadCV: "Scarica CV",
    },
    about: {
      label: "Chi sono",
      headline1: "Passione per il mestiere,",
      headline2: "ossessione per la qualità.",
      p1: "Sono Antonio — laureato in Informatica e sviluppatore software convinto che il software eccellente sia l'intersezione tra ingegneria rigorosa e design consapevole.",
      p2: "Affronto ogni problema con curiosità e precisione. Che si tratti di backend scalabili, frontend curati nei dettagli o sistemi progettati per durare — mi importa profondamente di ogni sfumatura che la maggior parte delle persone trascura.",
      p3: "Quando non scrivo codice, lo leggo, ci penso o trovo nuovi problemi che meritano una soluzione.",
      stats: [
        { value: "3+", label: "Anni di coding" },
        { value: "15+", label: "Progetti realizzati" },
        { value: "B.Sc.", label: "Informatica" },
        { value: "∞", label: "Righe di curiosità" },
      ],
    },
    projects: {
      label: "Lavori in evidenza",
      headline: "I progetti che mi definiscono.",
      items: [
        {
          title: "Nexus CRM",
          description:
            "Una piattaforma CRM full-stack progettata per scalare. Gestisce oltre 100k contatti con sincronizzazione in tempo reale, controllo degli accessi basato su ruoli e una dashboard analitica che porta in superficie insight concreti.",
          year: "2024",
          status: "In produzione",
        },
        {
          title: "Atlas CLI",
          description:
            "Una CLI per sviluppatori che automatizza i workflow di deployment, la gestione degli ambienti e la generazione di infrastrutture as-code. Ha ridotto i tempi di deploy del 60% nei team che l'hanno adottata.",
          year: "2024",
          status: "Open source",
        },
        {
          title: "Meridian",
          description:
            "Un assistente di studio basato su AI che genera quiz adattativi, individua lacune nell'apprendimento e pianifica sessioni di ripasso personalizzate. Tesi di laurea, usato da oltre 200 studenti.",
          year: "2023",
          status: "Accademico",
        },
      ],
    },
    experience: {
      label: "Timeline",
      headline: "Esperienza & Formazione.",
      items: [
        {
          role: "Sviluppatore Software",
          org: "Tech Startup — Remoto",
          period: "2024 – Presente",
          description:
            "Guido l'architettura frontend di una piattaforma SaaS con oltre 10k utenti. Ho introdotto una component library che ha ridotto i tempi di sviluppo UI del 40%. Lavoro a stretto contatto con product e design per rilasciare feature velocemente senza compromettere la qualità.",
        },
        {
          role: "Junior Developer",
          org: "Agenzia Digitale",
          period: "2022 – 2024",
          description:
            "Ho realizzato applicazioni web su misura per clienti in ambito e-commerce, fintech e media. Ho consolidato solide basi full-stack su stack tecnologici diversi e requisiti di cliente variabili.",
        },
        {
          role: "Laurea in Informatica (B.Sc.)",
          org: "Università — 110 e Lode",
          period: "2019 – 2022",
          description:
            "Laureato con 110 e lode. Tesi: sistemi di apprendimento adattivo basati su AI. Aree di focus: algoritmi, sistemi distribuiti, ingegneria del software, machine learning.",
        },
      ],
    },
    skills: {
      label: "Stack Tecnico",
      headline: "Costruito su basi solide.",
    },
    contact: {
      label: "Contatti",
      headline1: "Costruiamo qualcosa",
      headline2: "di grande insieme.",
      sub: "Sono aperto a nuove opportunità, collaborazioni e conversazioni interessanti sulla tecnologia.",
      links: [
        { label: "GitHub", sub: "github.com/antonio-delgiudice" },
        { label: "LinkedIn", sub: "linkedin.com/in/antonio-delgiudice" },
        { label: "Email", sub: "antonio@delgiudice.dev" },
      ],
    },
    footer: "Realizzato con precisione.",
  },
} as const;
