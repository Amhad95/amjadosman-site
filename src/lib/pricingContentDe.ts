import { STRIPE_PRICES } from "./stripe";
import type { ServicePricingTrack, SoftwarePricingSummary } from "./pricingContent";

const defaultBookHref = "/book";

export const servicePricingTracksDe: Record<ServicePricingTrack["id"], ServicePricingTrack> = {
  brand: {
    id: "brand",
    anchor: "brand-pricing",
    name: "Marken- und Wachstumssysteme",
    summary:
      "Preise für Marke, Website und Vertriebsmaterialien an einem Ort, von eingegrenzten Starter-Angeboten bis hin zu monatlichen Retainern.",
    detailHref: "/services/brand",
    pricingIntro:
      "Wählen Sie einen überschaubaren Ausgangspunkt, ein umfassenderes Projekt oder fortlaufenden Support, sobald die Grundlagen stehen.",
    recommended: {
      headline: "Empfohlene Startpunkte",
      description: "Häufige Einstiegsangebote mit festem Umfang und Zeitrahmen.",
      offers: [
        {
          name: "Brand-System-Sprint",
          inclusions: ["Identität und Richtlinien", "Vorlagenpaket", "Marken-Asset-Bibliothek"],
          timeline: "10–15 Werktage",
          price: "Ab EUR 3.500",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_sprint,
        },
        {
          name: "Website- und CMS-Erstellung",
          inclusions: ["Website-Architektur", "CMS-Einrichtung", "Konversionsseiten", "SEO-Grundlagen"],
          timeline: "2–4 Wochen",
          price: "Ab EUR 5.000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.web_build,
        },
        {
          name: "Vertriebsmaterialien-Kit",
          inclusions: ["Pitch-Deck-System", "Angebotsvorlagen", "Fallstudien-Format"],
          timeline: "7–12 Werktage",
          price: "Ab EUR 2.500",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sales_kit,
        },
      ],
    },
    menu: {
      headline: "Einzelne Services wählen",
      description:
        "Einzeln verfügbar, wenn Sie aktuell nur eine gezielte Verbesserung benötigen.",
      items: [
        {
          name: "Landingpage-Konversionsoptimierung",
          startingPrice: "Ab EUR 1.500",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.landing_page,
        },
        {
          name: "Marken-Vorlagenpaket",
          startingPrice: "Ab EUR 1.200",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_template,
        },
        {
          name: "Pitch-Deck-Überarbeitung",
          startingPrice: "Ab EUR 2.000",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.pitch_deck,
        },
      ],
    },
    retainer: {
      headline: "Retainer (Monatlicher Support)",
      description:
        "Monatliche Unterstützung für Updates, neue Assets und fortlaufende Verbesserungen, nachdem das Fundament live ist.",
      tiers: [
        {
          tier: "Lite",
          inclusions: ["Kleinere Content-Updates", "Design-Anpassungen", "Monatlicher Check-in"],
          responseTime: "Antwort innerhalb von 3 Werktagen",
          price: "EUR 800/Monat",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["Content-Updates", "Design-Änderungen", "Erstellung neuer Seiten", "Priorisierter Support"],
          responseTime: "Antwort innerhalb von 1 Werktag",
          price: "EUR 1.500/Monat",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Unbegrenzte Änderungen", "Strategie-Sitzungen", "Dedizierter Support", "Antwort am selben Tag"],
          responseTime: "Antwort am selben Tag",
          price: "EUR 2.500/Monat",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_priority,
        },
      ],
    },
  },
  ops: {
    id: "ops",
    anchor: "ops-pricing",
    name: "Interne Operationssysteme",
    summary:
      "Preise für die operative Einrichtung, einschließlich Audits, SharePoint-Struktur, SOP-Erstellung und monatlicher Pflege.",
    detailHref: "/services/ops",
    pricingIntro:
      "Starten Sie mit einem Audit, einem umfassenderen Einrichtungsprojekt oder fortlaufendem Support, sobald die operative Hauptebene steht.",
    recommended: {
      headline: "Empfohlene Startpunkte",
      description: "Häufige Einstiegsangebote mit festem Umfang und Zeitrahmen.",
      offers: [
        {
          name: "Ops-Audit",
          inclusions: ["Ist-Zustand-Bewertung", "Gap-Analyse", "Empfehlungsbericht"],
          timeline: "5–7 Werktage",
          price: "Ab EUR 2.000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_audit,
        },
        {
          name: "SharePoint-Einrichtung",
          inclusions: ["Website-Architektur", "Dokumentenbibliotheken", "Berechtigungsmodell", "Governance-Regeln"],
          timeline: "2–3 Wochen",
          price: "Ab EUR 4.000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sharepoint_setup,
        },
        {
          name: "SOP-Bibliothekspaket",
          inclusions: ["15–25 dokumentierte SOPs", "Rollen-Mapping", "Qualitätssicherungs-Checklisten", "Aktualisierungs-Workflow"],
          timeline: "2–3 Wochen",
          price: "Ab EUR 3.500",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sop_pack,
        },
      ],
    },
    menu: {
      headline: "Einzelne Services wählen",
      description:
        "Einzeln verfügbar, wenn Sie eher eine gezielte Bereinigung als einen kompletten Reset benötigen.",
      items: [
        {
          name: "Berechtigungs-Überarbeitung",
          startingPrice: "Ab EUR 1.500",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.permissions_overhaul,
        },
        {
          name: "SOP-Erstellung (pro SOP)",
          startingPrice: "Ab EUR 800",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sop_creation,
        },
        {
          name: "Einrichtung der Vorlagenbibliothek",
          startingPrice: "Ab EUR 1.200",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.template_library,
        },
      ],
    },
    retainer: {
      headline: "Retainer (Monatlicher Support)",
      description:
        "Monatliche Unterstützung für Updates, neue Dokumentationen und die operative Pflege nach Abschluss der Haupteinrichtung.",
      tiers: [
        {
          tier: "Ops-Pflege Lite",
          inclusions: ["SOP-Aktualisierungen", "Kleinere SharePoint-Änderungen", "Monatliche Überprüfung"],
          responseTime: "Antwort innerhalb von 3 Werktagen",
          price: "EUR 600/Monat",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["SOP-Erstellung und -Aktualisierung", "SharePoint-Änderungen", "Neue Workflows", "Priorisierter Support"],
          responseTime: "Antwort innerhalb von 1 Werktag",
          price: "EUR 1.200/Monat",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Unbegrenzte Änderungen", "Aufbau neuer Systeme", "Schulungen", "Antwort am selben Tag"],
          responseTime: "Antwort am selben Tag",
          price: "EUR 2.000/Monat",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_priority,
        },
      ],
    },
  },
  agents: {
    id: "agents",
    anchor: "agents-pricing",
    name: "KI-Agenten und Automatisierung",
    summary:
      "Preise für Automatisierung, einschließlich Pilot-Workflows, gezielter Anwendungsfälle und verwaltetem Monitoring nach dem ersten Live-Gang.",
    detailHref: "/services/agents",
    pricingIntro:
      "Starten Sie mit einem eingegrenzten KI-Pilotprojekt, erweitern Sie es zu einem umfassenderen Workflow-Paket oder halten Sie das System über einen verwalteten Retainer auf dem neuesten Stand.",
    recommended: {
      headline: "Empfohlene Startpunkte",
      description: "Automatisierungsprojekte mit kontrolliertem Umfang, die schnell Werte schaffen.",
      offers: [
        {
          name: "Agenten-Pilotprojekt",
          inclusions: ["Ein Anwendungsfall", "Kontrollierter Umfang", "Freigabe-Workflows", "Monitoring-Einrichtung"],
          timeline: "10–15 Werktage",
          price: "Ab EUR 4.000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agent_pilot,
        },
        {
          name: "Agenten-Workflow-Paket",
          inclusions: ["2–3 Anwendungsfälle", "Workflow-übergreifende Orchestrierung", "Governance-Einrichtung", "Team-Schulung"],
          timeline: "3–5 Wochen",
          price: "Ab EUR 8.000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agent_pack,
        },
        {
          name: "Wissensagenten-Einrichtung",
          inclusions: ["Berechtigungsbewusste Suche", "Quellenangaben", "Rollenspezifischer Zugriff", "Monitoring-Dashboard"],
          timeline: "2–4 Wochen",
          price: "Ab EUR 5.000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.knowledge_agent,
        },
      ],
    },
    menu: {
      headline: "Einzelne Services wählen",
      description:
        "Gezielte Workflows sind separat verfügbar, wenn Sie aktuell nur einen bestimmten Automatisierungs-Anwendungsfall benötigen.",
      items: [
        {
          name: "Workflow-Triage-Agent",
          startingPrice: "Ab EUR 2.500",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.triage_agent,
        },
        {
          name: "Berichts-Zusammenfassungs-Workflow",
          startingPrice: "Ab EUR 2.000",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.report_summarization,
        },
        {
          name: "Eingangs- und Weiterleitungs-Workflow",
          startingPrice: "Ab EUR 2.000",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.intake_routing,
        },
      ],
    },
    retainer: {
      headline: "Verwalteter Support (Retainer)",
      description:
        "Fortlaufendes Monitoring, Workflow-Optimierung und Support, sobald die erste Automatisierungsebene live ist.",
      tiers: [
        {
          tier: "Monitoring Lite",
          inclusions: ["Leistungs-Monitoring", "Monatliche Überprüfung", "Fehlerbehebungen"],
          responseTime: "Antwort innerhalb von 3 Werktagen",
          price: "EUR 1.000/Monat",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["Monitoring und Optimierung", "Prompt-Anpassungen", "Workflow-Änderungen", "Priorisierter Support"],
          responseTime: "Antwort innerhalb von 1 Werktag",
          price: "EUR 2.000/Monat",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Vollständige Verwaltung", "Erstellung neuer Workflows", "Strategie-Sitzungen", "Antwort am selben Tag"],
          responseTime: "Antwort am selben Tag",
          price: "EUR 3.500/Monat",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_priority,
        },
      ],
    },
  },
};

export const softwarePricingSummaryDe: SoftwarePricingSummary = {
  anchor: "software-pricing",
  eyebrow: "Software-Preise",
  headline: "Verwaltete Software startet ab EUR 500 pro Monat und Produkt.",
  description:
    "Fheem konfiguriert und unterstützt fokussierte CRM-, Buchhaltungs-, Inventar- und Aufgabensysteme, damit Teams eine nutzbare operative Ebene erhalten, statt eines weiteren verwaisten Tools.",
  startingPrice: "Ab EUR 500/Monat pro Produkt",
  setupNote:
    "Die Einrichtung ist in einigen Paketen enthalten oder wird separat als feste Onboarding-Gebühr angeboten, je nach Komplexität und Datenmigrationsanforderungen.",
  products: [
    {
      name: "CRM",
      oneLiner: "Pipeline, Kontaktverwaltung, Nachverfolgung und Berichterstattung in einem kontrollierten Arbeitsbereich.",
    },
    {
      name: "Buchhaltung",
      oneLiner: "Rechnungsstellung, Ausgaben und Finanzübersicht in einem saubereren operativen Ablauf.",
    },
    {
      name: "Inventar und Anlagen",
      oneLiner: "Verfolgen Sie Bestände, Anlagen und Zuständigkeiten mit klarerem Zugriff und hoher Nachvollziehbarkeit.",
    },
    {
      name: "Aufgaben und Arbeitsmanagement",
      oneLiner: "Zuständigkeiten zuweisen, Arbeit sichtbar halten und Übergabeverluste reduzieren.",
    },
  ],
  supportIncludes: [
    "Rollen und Berechtigungen, konfiguriert um Ihre Teamstruktur",
    "Vorlagen und Workflows, eingerichtet vor dem Launch",
    "Datenimport und -validierung als Teil des Onboardings",
    "Fortlaufender Administrator-Support für eine verwaltete Instandhaltung",
  ],
  primaryCta: {
    label: "Gespräch zur Preisgestaltung buchen",
    href: "/book?intent=suite-pricing",
  },
  secondaryCta: {
    label: "Software ansehen",
    href: "/software",
  },
};
