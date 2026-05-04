// Version: 1.2.0 - Central Content Configuration
export const CONTENT = {
  personal: {
    name: "MAX",
    lastName: "MUSTERMANN",
    fullName: "Max Mustermann",
    role: "Senior Product Designer & Web Developer",
    email: "hello@maxmustermann.de",
    phone: "+49 123 4567890",
    address: "Musterstraße 123, 10115 Berlin",
    about: "Ich entwickle digitale Lösungen, die durch Performance und exzellentes Design überzeugen. Mein Fokus liegt auf messbarem Erfolg für meine Kunden.",
    taxId: "DE123456789",
    disputeResolution: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum."
  },
  hero: {
    badge: "Available for new projects",
    titleMain: "MODERNE WEB-ERLEBNISSE",
    titleAccent: "DIE VERKAUFEN.",
    description: "Vergiss langsame Baukasten-Seiten. Ich entwickle High-End Interfaces mit React & Tailwind – Clean Code, krasse UX und messbare Ergebnisse.",
    ctaPrimary: "Projekt anfragen",
    ctaSecondary: "Projekte ansehen",
  },
  services: [
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
  ],
  partners: [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&h=80&fit=crop&auto=format&q=80" },
    { name: "FutureLabs", logo: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=200&h=80&fit=crop&auto=format&q=80" },
    { name: "InnovateX", logo: "https://images.unsplash.com/photo-1614850523598-8111808336c7?w=200&h=80&fit=crop&auto=format&q=80" },
    { name: "GlobalMind", logo: "https://images.unsplash.com/photo-1614850523020-c058821158f3?w=200&h=80&fit=crop&auto=format&q=80" },
    { name: "Nexus", logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&h=80&fit=crop&auto=format&q=80" },
    { name: "Apex", logo: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=200&h=80&fit=crop&auto=format&q=80" },
  ],
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
  faqs: [
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
    },
    {
      question: "Bietest du auch Wartung an?",
      answer: "Ja, ich biete monatliche Support-Pakete für Hosting, Updates und Security an, damit Sie sich um nichts kümmern müssen."
    }
  ]
};