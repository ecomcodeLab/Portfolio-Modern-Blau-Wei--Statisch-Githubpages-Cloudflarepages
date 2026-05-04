// Version: 1.4.0 - Die ultimative zentrale Konfigurationsdatei
// Hier kannst du ALLE Texte der Website anpassen, ohne den Code anzufassen.
// HINWEIS ZU BILDERN: Empfohlene Größen sind in den Kommentaren vermerkt.

export const CONTENT = {
  // 1. PERSÖNLICHE DATEN & BRANDING
  personal: {
    name: "MAX",
    lastName: "MUSTERMANN",
    fullName: "Max Mustermann",
    role: "Senior Product Designer & Web Developer",
    email: "hello@maxmustermann.de",
    phone: "+49 123 4567890",
    address: "Musterstraße 123, 10115 Berlin",
    taxId: "DE123456789",
    about: "Ich entwickle digitale Lösungen, die durch Performance und exzellentes Design überzeugen. Mein Fokus liegt auf messbarem Erfolg für meine Kunden.",
  },

  // 2. NAVIGATION & LINKS
  navigation: {
    links: [
      { name: "Home", path: "/" },
      { name: "Projekte", path: "/faq" },
      { name: "FAQ", path: "/faq" },
      { name: "Impressum", path: "/impressum" },
      { name: "Datenschutz", path: "/datenschutz" },
    ]
  },

  // 3. STARTSEITE (HOME)
  home: {
    hero: {
      badge: "Verfügbar für neue Projekte",
      titleMain: "MODERNE WEB-ERLEBNISSE",
      titleAccent: "DIE VERKAUFEN.",
      description: "Vergiss langsame Baukasten-Seiten. Ich entwickle High-End Interfaces mit React & Tailwind – Clean Code, krasse UX und messbare Ergebnisse.",
      ctaPrimary: "Projekt anfragen",
      ctaSecondary: "Mehr erfahren",
    },
    services: {
      title: "Services",
      heading: "WIE ICH DIR\nHELFEN KANN.",
      // HINWEIS ICONS: Diese werden aktuell über React-Icons gesteuert (vektorbasiert).
      items: [
        { 
          title: "High-End Development", 
          text: "Moderne Tech-Stacks wie React und Next.js sorgen für blitzschnelle Ladezeiten und eine skalierbare Architektur." 
        },
        { 
          title: "UI/UX Strategie", 
          text: "Ich gestalte Interfaces, die nicht nur schön aussehen, sondern Ihre Nutzer intuitiv zum Ziel führen." 
        },
        { 
          title: "Performance & SEO", 
          text: "Optimierung für Suchmaschinen und Bestnoten in den Core Web Vitals sind bei mir Standard." 
        }
      ]
    },
    projects: {
      title: "Ausgewählte Arbeiten",
      heading: "PROJEKTE.",
      viewAll: "Alle Projekte ansehen"
    },
    partners: {
      title: "Vertraut von",
      heading: "REFERENZEN."
    },
    cta: {
      heading: "BEREIT FÜR\nDAS NÄCHSTE LEVEL?",
      description: "Lass uns unverbindlich über dein Projekt sprechen und schauen, wie wir deine Vision Realität werden lassen.",
      button: "Jetzt Projekt anfragen"
    }
  },

  // 4. PROJEKTDATEN
  // HINWEIS BILDER: Empfohlene Größe ca. 800x600px (4:3 Format) für optimale Darstellung.
  projects: [
    {
      title: 'E-Commerce Redesign',
      category: 'Webentwicklung',
      description: 'Eine saubere, moderne E-Commerce-Plattform mit nahtloser Benutzererfahrung und Stripe Integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tailwind', 'Stripe']
    },
    {
      title: 'Real Estate Platform',
      category: 'Web-App',
      description: 'Umfassendes Dashboard für Immobilienverwaltungen mit interaktiven Karten und CRM-Anbindung.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'PostgreSQL', 'Maps']
    },
    {
      title: 'Corporate Identity',
      category: 'Branding',
      description: 'Ganzheitliche Neugestaltung der Markenidentität für ein internationales Logistikunternehmen.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Branding', 'Design System']
    }
  ],

  // 5. PARTNER (HORIZONTAL SCROLL)
  // HINWEIS LOGOS: Empfohlene Größe ca. 200x80px. Am besten als transparentes PNG oder SVG.
  partners: [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&h=80&fit=crop&auto=format&q=80" },
    { name: "FutureLabs", logo: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=200&h=80&fit=crop&auto=format&q=80" },
    { name: "InnovateX", logo: "https://images.unsplash.com/photo-1614850523598-8111808336c7?w=200&h=80&fit=crop&auto=format&q=80" },
    { name: "GlobalMind", logo: "https://images.unsplash.com/photo-1614850523020-c058821158f3?w=200&h=80&fit=crop&auto=format&q=80" },
    { name: "Nexus", logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&h=80&fit=crop&auto=format&q=80" },
    { name: "Apex", logo: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=200&h=80&fit=crop&auto=format&q=80" },
  ],

  // 6. FAQ SEITE
  faqs: {
    title: "Häufige Fragen",
    description: "Hier findest du Antworten auf die meistgestellten Fragen zu meiner Arbeitsweise und den Preisen.",
    items: [
      {
        question: "Was kostet ein Projekt durchschnittlich?",
        answer: "Ich arbeite meistens mit Festpreisen, basierend auf dem Projektumfang. Ein einfaches Portfolio startet bei ca. 1.500€, komplexe Web-Apps liegen höher. Wir klären das im Erstgespräch."
      },
      {
        question: "Welchen Tech-Stack nutzt du?",
        answer: "Ich spezialisiere mich auf React, Tailwind CSS und Node.js. Das garantiert schnelle Ladezeiten und eine moderne Code-Basis."
      },
      {
        question: "Wie lange dauert die Umsetzung?",
        answer: "Ein Standard-Projekt dauert in der Regel 3-5 Wochen von der Konzeption bis zum Live-Gang."
      }
    ]
  },

  // 7. RECHTLICHES (IMPRESSUM & DATENSCHUTZ)
  legal: {
    impressum: {
      title: "Impressum",
      sections: [
        {
          heading: "Angaben gemäß § 5 TMG",
          content: "{fullName}\n{address}"
        },
        {
          heading: "Kontakt",
          content: "Telefon: {phone}\nE-Mail: {email}"
        },
        {
          heading: "Umsatzsteuer-ID",
          content: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:\n{taxId}"
        },
        {
          heading: "Streitbeilegung",
          content: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum."
        }
      ]
    },
    datenschutz: {
      title: "Datenschutz",
      intro: "Datenschutz muss nicht kompliziert sein. Hier erfährst du kurz und knapp, was mit deinen Daten passiert. Sicher, fair und transparent.",
      sections: [
        {
          heading: "1. Verantwortliche Stelle",
          content: "Verantwortlich für die Datenverarbeitung auf dieser Website ist:\n{fullName}\n{address}\nE-Mail: {email}"
        },
        {
          heading: "2. Datenerfassung",
          content: "Wenn du meine Website besuchst, werden automatisch technische Informationen (Logfiles) durch deinen Browser übermittelt. Dazu gehören IP-Adresse, Browsertyp und Uhrzeit. Dies dient der Sicherheit und Stabilität der Website.\n\nPersönliche Daten wie Name oder E-Mail werden nur erfasst, wenn du mir diese freiwillig (z.B. per E-Mail oder Kontaktformular) mitteilst."
        },
        {
          heading: "3. Deine Rechte",
          content: "Du hast jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten personenbezogenen Daten. Du hast außerdem ein Recht auf Berichtigung oder Löschung dieser Daten."
        }
      ],
      footerNote: "Kurz gesagt: Ich behandle deine Daten so, wie ich möchte, dass man mit meinen umgeht. Mit Respekt und höchster Sorgfalt."
    }
  }
};