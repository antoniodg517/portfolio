export type Lang = "en" | "it";

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      hobby: "Hobby",
      cta: "Get in touch",
    },
    hero: {
      badge: "Open to IT and web development opportunities",
      title1: "Antonio",
      title2: "Del Giudice",
      subtitle: "Web Developer & Computer Science Graduate",
      tagline: "I develop web solutions and AI-oriented software with a practical background in IT support, databases, and human-robot interaction.",
      viewProjects: "View Projects",
      downloadCV: "Download CV",
    },
    about: {
      label: "About",
      headline1: "Computer science,",
      headline2: "web and applied AI.",
      p1: "I'm Antonio Del Giudice, a Computer Science graduate from the University of Salerno with a technical background that started with an IT diploma.",
      p2: "My CV combines web development, IT support, database fundamentals, and AI-assisted software development. I have worked on websites, technical maintenance, and a human-robot interaction project integrating LLMs with a Furhat social robot.",
      p3: "I like practical software: clear interfaces, reliable systems, and tools that help people solve real problems.",
      stats: [
        { value: "2026", label: "Computer Science degree" },
        { value: "B2", label: "English level" },
        { value: "20", label: "Digital skills in CV" },
        { value: "HRI", label: "AI thesis project" },
      ],
    },
    projects: {
      label: "Real Work",
      headline: "Projects and work from my CV.",
      items: [
        {
          title: "The Postural Interview",
          description:
            "Human-Robot Interaction project integrating Large Language Models into a Furhat social robot. The work includes conversational AI, Kotlin and Java development, sEMG signal analysis, prompt engineering, and experimental data management.",
          year: "2025-2026",
          status: "HRI project",
        },
        {
          title: "Il Meridiano Sport Website",
          description:
            "Design and development of ilmeridianosport.it, including site structure, content management, user experience optimization, page organization, technical support, and maintenance.",
          year: "2025-2026",
          status: "Web development",
        },
        {
          title: "Pro Loco Poggiomarino",
          description:
            "IT support and operational work for the association, including computer maintenance, support for the 31st National Poetry Award 'Citta di Poggiomarino', administrative operations, and website management.",
          year: "2021-2022",
          status: "IT support",
        },
      ],
    },
    experience: {
      label: "Timeline",
      headline: "Experience & Education.",
      items: [
        {
          role: "Web Developer",
          org: "Il Meridiano Sport — Poggiomarino (NA)",
          period: "Nov 2025 – Jan 2026",
          description:
            "Designed and developed ilmeridianosport.it, managed the platform structure and content, optimized the user experience and page organization, and provided technical support and maintenance.",
        },
        {
          role: "IT Support",
          org: "Pro Loco Poggiomarino — Poggiomarino (NA)",
          period: "Sep 2021 – Jul 2022",
          description:
            "Handled maintenance and technical support for computers and IT devices, supported operational and administrative activities, helped organize the 31st National Poetry Award, and managed the association website.",
        },
        {
          role: "Computer Science Degree",
          org: "University of Salerno (UNISA) — Fisciano (SA)",
          period: "Sep 2017 – Mar 2026",
          description:
            "Studied software programming, web development, databases and SQL, algorithms and data structures, operating systems and networks, AI, Large Language Models, Human-Robot Interaction, Git, and collaborative software development.",
        },
        {
          role: "IT Diploma",
          org: "I.I.S. Enrico Fermi — Sarno (SA)",
          period: "Sep 2012 – Jul 2017",
          description:
            "Built foundations in software development, computer systems and networks, databases, computer architecture, electronics, problem solving, and teamwork.",
        },
      ],
    },
    skills: {
      label: "Technical Stack",
      headline: "Skills from my CV.",
    },
    contact: {
      label: "Contact",
      headline1: "Let's talk about",
      headline2: "web, IT and AI.",
      sub: "I'm based in Poggiomarino (NA) and open to opportunities in web development, IT support, and AI-assisted software development.",
      links: [
        { label: "GitHub", sub: "github.com/antoniodg517" },
        { label: "Project", sub: "The Postural Interview" },
        { label: "CV", sub: "Download PDF" },
      ],
    },
    hobby: {
      label: "Hobby",
      headline: "Passions beyond code.",
      intro: "Four interests that shape how I train, observe, collect and explore.",
      items: [
        {
          title: "Bodybuilding",
          kicker: "Training & discipline",
          description:
            "I train with weights and follow bodybuilding with dedication and consistency. A passion that has developed my discipline, attention to detail and a mindset focused on continuous improvement.",
        },
        {
          title: "Trading Cards",
          kicker: "Sports memorabilia",
          description:
            "I collect sports trading cards and football memorabilia. A hobby that combines sport, market research and attention to detail, with a focus on modern collecting and limited-run editions.",
        },
        {
          title: "Real Madrid",
          kicker: "Supporter",
          description:
            "Real Madrid Supporter. Fascinated by the culture of excellence, ambition and relentless improvement that distinguishes one of the most iconic clubs in the world.",
        },
        {
          title: "Backpacking",
          kicker: "Travel & cultures",
          description:
            "Backpacking & Travel. Exploring new countries and cultures develops curiosity, adaptability and open-mindedness — qualities I consider fundamental both in life and at work.",
        },
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
      hobby: "Hobby",
      cta: "Scrivimi",
    },
    hero: {
      badge: "Disponibile per opportunità IT e web development",
      title1: "Antonio",
      title2: "Del Giudice",
      subtitle: "Web Developer & Laureato in Informatica",
      tagline: "Sviluppo soluzioni web e software orientato all'AI con basi pratiche in supporto IT, database e Human-Robot Interaction.",
      viewProjects: "Vedi Progetti",
      downloadCV: "Scarica CV",
    },
    about: {
      label: "Chi sono",
      headline1: "Informatica, web",
      headline2: "e AI applicata.",
      p1: "Sono Antonio Del Giudice, laureato in Informatica presso l'Università degli Studi di Salerno, con un percorso tecnico iniziato dal diploma di Perito Informatico.",
      p2: "Il mio CV unisce sviluppo web, supporto IT, basi di database e sviluppo software assistito dall'AI. Ho lavorato su siti web, manutenzione tecnica e su un progetto di Human-Robot Interaction con integrazione di LLM in un robot sociale Furhat.",
      p3: "Mi interessa il software pratico: interfacce chiare, sistemi affidabili e strumenti che aiutano le persone a risolvere problemi reali.",
      stats: [
        { value: "2026", label: "Laurea in Informatica" },
        { value: "B2", label: "Livello inglese" },
        { value: "20", label: "Skill digitali nel CV" },
        { value: "HRI", label: "Progetto AI di tesi" },
      ],
    },
    projects: {
      label: "Lavori reali",
      headline: "Progetti ed esperienze dal mio CV.",
      items: [
        {
          title: "The Postural Interview",
          description:
            "Progetto di Human-Robot Interaction con integrazione di Large Language Models in un robot sociale Furhat. Include AI conversazionale, sviluppo in Kotlin e Java, analisi di segnali sEMG, prompt engineering e gestione di dati sperimentali.",
          year: "2025-2026",
          status: "Progetto HRI",
        },
        {
          title: "Sito Il Meridiano Sport",
          description:
            "Progettazione e sviluppo del sito ilmeridianosport.it, gestione della struttura e dei contenuti, ottimizzazione dell'esperienza utente, organizzazione delle pagine, supporto tecnico e manutenzione.",
          year: "2025-2026",
          status: "Web development",
        },
        {
          title: "Pro Loco Poggiomarino",
          description:
            "Supporto IT e operativo per l'associazione: manutenzione computer, supporto al 31º Premio Nazionale di Poesia 'Citta di Poggiomarino', gestione amministrativa e gestione del sito web.",
          year: "2021-2022",
          status: "Supporto IT",
        },
      ],
    },
    experience: {
      label: "Timeline",
      headline: "Esperienza & Formazione.",
      items: [
        {
          role: "Web Developer",
          org: "Il Meridiano Sport — Poggiomarino (NA)",
          period: "Nov 2025 – Gen 2026",
          description:
            "Progettazione e sviluppo del sito ilmeridianosport.it, gestione della struttura e dei contenuti della piattaforma, ottimizzazione dell'esperienza utente e dell'organizzazione delle pagine, supporto tecnico e manutenzione.",
        },
        {
          role: "Supporto IT",
          org: "Pro Loco Poggiomarino — Poggiomarino (NA)",
          period: "Set 2021 – Lug 2022",
          description:
            "Manutenzione e supporto tecnico di computer e dispositivi informatici, supporto alle attività operative e amministrative, organizzazione del 31º Premio Nazionale di Poesia e gestione del sito web dell'associazione.",
        },
        {
          role: "Laurea in Informatica",
          org: "Università degli Studi di Salerno (UNISA) — Fisciano (SA)",
          period: "Set 2017 – Mar 2026",
          description:
            "Percorso su programmazione software e sviluppo web, database e SQL, algoritmi e strutture dati, sistemi operativi e reti, Intelligenza Artificiale, Large Language Models, Human-Robot Interaction, Git e sviluppo collaborativo.",
        },
        {
          role: "Diploma di Perito Informatico",
          org: "I.I.S. Enrico Fermi — Sarno (SA)",
          period: "Set 2012 – Lug 2017",
          description:
            "Formazione su sviluppo software, sistemi informatici e reti, database, architettura dei computer, fondamenti di elettronica e informatica, problem solving e lavoro di gruppo.",
        },
      ],
    },
    skills: {
      label: "Stack Tecnico",
      headline: "Competenze dal mio CV.",
    },
    contact: {
      label: "Contatti",
      headline1: "Parliamo di",
      headline2: "web, IT e AI.",
      sub: "Sono a Poggiomarino (NA) e sono aperto a opportunità in sviluppo web, supporto IT e sviluppo software assistito dall'AI.",
      links: [
        { label: "GitHub", sub: "github.com/antoniodg517" },
        { label: "Progetto", sub: "The Postural Interview" },
        { label: "CV", sub: "Scarica PDF" },
      ],
    },
    hobby: {
      label: "Hobby",
      headline: "Passioni oltre il codice.",
      intro: "Quattro interessi che raccontano come mi alleno, osservo, colleziono ed esploro.",
      items: [
        {
          title: "Bodybuilding",
          kicker: "Allenamento & disciplina",
          description:
            "Mi alleno con i pesi e seguo il bodybuilding con dedizione e costanza. Una passione che ha sviluppato la mia disciplina, attenzione ai dettagli e una mentalità orientata al miglioramento continuo.",
        },
        {
          title: "Trading Card",
          kicker: "Memorabilia sportiva",
          description:
            "Appassionato di trading card sportive e memorabilia calcistica. Un interesse che unisce sport, ricerca di mercato e attenzione ai dettagli, con focus sul collezionismo moderno e le edizioni limitate.",
        },
        {
          title: "Real Madrid",
          kicker: "Supporter",
          description:
            "Real Madrid Supporter. Affascinato dalla cultura dell’eccellenza, dell’ambizione e del miglioramento continuo che contraddistingue uno dei club più iconici del mondo.",
        },
        {
          title: "Backpacking",
          kicker: "Travel",
          description:
            "Backpacking & Travel. Esplorare nuovi Paesi e culture sviluppa curiosità, adattabilità e apertura mentale — qualità che considero fondamentali sia nella vita che nel lavoro.",
        },
      ],
    },
    footer: "Realizzato con precisione.",
  },
} as const;
