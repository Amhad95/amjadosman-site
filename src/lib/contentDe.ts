import { type SiteContent } from "./content";

export const siteContentDe: SiteContent = {
  meta: {
    title: "Amjad Osman - Marke, Betrieb, Software und KI-Systeme",
    description:
      "Amjad Osman hilft wachsenden Teams, Marke, Websites, interne Abläufe und praktische KI-Workflows mit klarem Umfang und sauberer Übergabe zu verbessern.",
  },

  navigation: {
    primary: [
      { label: "Dienstleistungen", href: "/services" },
      { label: "Software", href: "/software" },
      { label: "Ressourcen", href: "/resources" },
      { label: "Arbeit", href: "/work" },
      { label: "Preise", href: "/pricing" },
      { label: "Über mich", href: "/about" },
    ],
    servicesDropdown: [
      { label: "Dienstleistungen Übersicht", href: "/services" },
      { label: "Marken- und Wachstumssysteme", href: "/services/brand" },
      { label: "Interne Betriebssysteme", href: "/services/ops" },
      { label: "KI-Agenten und Automatisierung", href: "/services/agents" },
    ],
    resourcesDropdown: [
      { label: "Selbsthilfe-Tools", href: "/tools" },
      { label: "Einblicke", href: "/resources" },
    ],
    cta: { label: "Gespräch buchen", href: "/book" },
    footer: [
      { label: "Services", href: "/services" },
      { label: "Software", href: "/software" },
      { label: "Arbeiten", href: "/work" },
      { label: "Preise", href: "/pricing" },
      { label: "Über mich", href: "/about" },
      { label: "Lieferprozess", href: "/process" },
      { label: "Einblicke", href: "/resources" },
      { label: "Selbsthilfe-Tools", href: "/tools" },
      { label: "Kontakt", href: "/contact" },
      { label: "Datenschutz", href: "/privacy" },
      { label: "Bedingungen", href: "/terms" },
    ],
    languageToggle: {
      english: "EN",
      arabic: "عربي",
      label: "Sprache",
    },
  },

  footer: {
    tagline:
      "Amjad Osman entwickelt Marken-, Betriebs-, Software- und KI-Systeme, die wachsenden Teams helfen, mit mehr Klarheit zu agieren.",
    pagesLabel: "Seiten",
    moreLabel: "Mehr",
    legalLabel: "Rechtliches",
    copyright: "Alle Rechte vorbehalten.",
  },

  common: {
    skipToContent: "Zum Hauptinhalt springen",
    backToResources: "Zurück zu den Ressourcen",
    backToWork: "Zurück zur Arbeit",
    articleNotFound: "Artikel nicht gefunden",
    articleUnavailable: "Dieser Artikel existiert nicht oder wurde entfernt.",
    caseStudyNotFound: "Fallstudie nicht gefunden",
    caseStudyUnavailable: "Die angeforderte Fallstudie ist derzeit nicht verfügbar.",
    readArticle: "Artikel lesen",
    caseStudies: "Fallstudien",
    caseStudiesSubheadline: "Die Herausforderung, die Umsetzung und was sich verändert hat.",
    lastUpdatedLabel: "Zuletzt aktualisiert",
    workSectionHeadline: "Was wir gebaut haben",
    workApproachLabel: "Ansatz",
    workDeliverablesLabel: "Ergebnisse",
    workChangesLabel: "Was sich geändert hat",
    clientProfileLabel: "Kundenprofil",
    challengeLabel: "Herausforderung",
    resourceCtaHeadline: "Verwandeln Sie dies in eine Lieferung.",
    resourceCtaDescription:
      "Ich kann das System hinter dem Leitfaden implementieren und die Preise aufzeigen.",
  },

  home: {
    hero: {
      headline:
        "Schärfere Marke, sauberere Abläufe und praktische KI-Systeme für wachsende Teams.",
      subheadline:
        "Ich helfe ehrgeizigen Teams, ihren Auftritt, ihre Abläufe und ihre Skalierung zu verbessern. Markensysteme, Websites, SOPs, Workflow-Design und Automatisierung, geliefert mit klarem Umfang und sauberer Übergabe.",
      credibilityStrip:
        "Klarer Umfang. Schnellere Entscheidungen. Saubere Übergabe. Laufende Unterstützung, wenn Sie sie brauchen.",
      primaryCta: { label: "Gespräch buchen", href: "/book" },
      secondaryCta: { label: "Kostenloses Audit durchführen", href: "/tools" },
    },
    whatWeDeliver: {
      headline: "Wo ich normalerweise einspringe.",
      subheadline:
        "Marken-, Web-, Betriebs- und Softwareunterstützung, geliefert als ein praktisches System.",
      eyebrow: "Dienstleistungen",
      cards: [
        {
          title: "Marke und Kommunikation",
          description:
            "Identität, Botschaften und Materialien, die das Unternehmen etablierter wirken lassen.",
        },
        {
          title: "Web und CMS",
          description:
            "Websites und Landingpages, die auf Konversion ausgelegt und leicht zu aktualisieren sind.",
        },
        {
          title: "Workflow-Apps",
          description:
            "Kundenportale, Dashboards und operative Werkzeuge, abgestimmt auf die Arbeitsweise Ihres Teams.",
        },
        {
          title: "Interne Abläufe",
          description:
            "SharePoint, SOPs, Vorlagen, Onboarding-Pakete und Governance-Grundlagen.",
        },
        {
          title: "Verwaltete Software",
          description:
            "CRM, Betriebs-Workspace und Dokumentensysteme, die auf Ihr Team zugeschnitten sind.",
        },
        {
          title: "KI-Agenten",
          description:
            "Praktische Agenten-Workflows für Routing, Entwürfe und Wissensunterstützung.",
        },
      ],
      cta: { label: "Pakete ansehen", href: "/pricing" },
    },
    outcomesImpact: {
      eyebrow: "Ergebnisse",
      headline: "Ein klareres Unternehmen für Kunden und Team",
      subheadline:
        "Die Arbeit soll das Unternehmen verständlicher, leichter zu führen und leichter zu verbessern machen.",
      items: [
        {
          title: "Kunden verstehen Ihr Angebot",
          body: "Positionierung, Leistungen und nächster Schritt bleiben auf der Website, in Angeboten und Vertriebsmaterialien konsistent.",
        },
        {
          title: "Jeder Kundenkontakt schafft Vertrauen",
          body: "Marke, Website und Präsentationsmaterial geben Interessenten einen stimmigen Grund, Ihnen zu vertrauen und das Gespräch zu beginnen.",
        },
        {
          title: "Der Arbeitsumfang steht vor dem Start fest",
          body: "Jedes Engagement hat ein definiertes Ergebnis, Liefergegenstände, eine verantwortliche Person und einen Zeitplan, damit Entscheidungen nicht nach Beginn abdriften.",
        },
        {
          title: "Das Team kann dem Prozess folgen",
          body: "Wichtige Abläufe, SOPs, Vorlagen und Übergaben sind dokumentiert, sodass die Lieferung nicht vom Gedächtnis einer einzelnen Person abhängt.",
        },
        {
          title: "Führungskräfte sehen, worum es sich zu kümmern gilt",
          body: "Nützliche Berichte machen Prioritäten, Engpässe und nächste Schritte sichtbar, ohne Updates von allen einzeln einzufordern.",
        },
        {
          title: "Mehr Kapazität ohne mehr Routinearbeit",
          body: "Software, Automatisierung und KI übernehmen wiederholbare Aufgaben mit klaren Kontrollen, damit Menschen sich auf Arbeit konzentrieren, die Urteilskraft braucht.",
        },
      ],
      primaryCta: { label: "20-Minuten-Passungsprüfung buchen", href: "/book" },
      secondaryCta: { label: "Fallstudien ansehen", href: "/work" },
    },
    deliveryProcess: {
      eyebrow: "Lieferung",
      headline: "Strukturierte Lieferung, weniger Meetings",
      subheadline:
        "Klare Artefakte, asynchrone Updates und fokussierte Checkpoints. Sie erhalten Dynamik ohne Kalender-Chaos.",
      rhythmLabel: "Lieferrhythmus",
      marqueeText:
        "[ aufnahme ] → [ karte ] → [ design ] → [ aufbau ] → [ start ] → [ iterieren ] → ",
      expectationsLabel: "Was Sie erwarten können",
      steps: [
        {
          title: "Ausrichtung",
          ascii: "[ AUSRICHTUNG ]",
          summary:
            "Umfang, Erfolgsmetriken, Einschränkungen und Risiken werden vor Beginn der Lieferung festgelegt.",
          artifacts: ["Einseitiges Briefing", "Erfolgsmetriken", "Risiken & Annahmen"],
          touchpoints: "1 Kickoff",
        },
        {
          title: "Karte",
          ascii: "[ KARTE ]",
          summary:
            "Forschungsergebnisse und Flow-Mapping schaffen ein gemeinsames Modell für Design und Implementierung.",
          artifacts: ["Journey / Flow-Map", "Anforderungssatz", "Priorisierungsliste"],
          touchpoints: "1 Überprüfung",
        },
        {
          title: "Design",
          ascii: "[ DESIGN ]",
          summary:
            "UX- und Schnittstellenentscheidungen werden frühzeitig mit asynchronen Feedbackschleifen validiert.",
          artifacts: ["Klickbarer Prototyp", "Designspezifikationen", "Inhaltsentwürfe"],
          touchpoints: "Asynchrone Überprüfungen + 1 Checkpoint",
        },
        {
          title: "Aufbau",
          ascii: "[ AUFBAU ]",
          summary:
            "Die Implementierung erfolgt in funktionierenden Inkrementen mit integrierter Integration und QA.",
          artifacts: ["Funktionierende Inkremente", "QA-Notizen", "Freigabeplan"],
          touchpoints: "Wöchentlicher 20-Minuten-Checkpoint (nur bei Bedarf)",
        },
        {
          title: "Start",
          ascii: "[ START ]",
          summary:
            "Start mit Übergabe, Schulung und einem praktischen Backlog für kontinuierliche Verbesserungen.",
          artifacts: ["Übergabepaket", "Tracking-Plan", "Iterations-Backlog"],
          touchpoints: "1 Übergabe",
        },
      ],
      expectations: [
        "Wöchentliches asynchrones Update",
        "Entscheidungsprotokoll",
        "Umfangskontrolle",
        "Funktionierende Demos statt Folien",
      ],
    },
    outcomes: {
      headline: "Was Kunden wirklich kaufen.",
      items: [
        "Glaubwürdigkeit, die Geschäfte schneller abschließt.",
        "Interne Systeme, die von den Leuten tatsächlich genutzt werden.",
        "Dokumentation, die Personalwechsel übersteht.",
        "Software, die angenommen bleibt.",
        "Weniger Meetings. Saubere Übergabe.",
      ],
    },
    howWeWork: {
      headline: "Strukturierte Lieferung. Minimale Meetings.",
      steps: [
        { title: "Aufnahme", description: "Kurzes Gespräch. Anforderungsdokument. Umfang festgelegt." },
        {
          title: "Architektur",
          description: "Struktur und Spezifikationen vor dem Aufbau bestätigt.",
        },
        { title: "Aufbau", description: "Ausführung in Sprints. Updates asynchron." },
        {
          title: "Übergabe",
          description: "Dokumentation, Schulung und sauberer Dateitransfer.",
        },
        {
          title: "Optionaler Retainer",
          description: "Monatliche Unterstützung, wenn Sie laufende Abdeckung wünschen.",
        },
      ],
      cta: { label: "Sehen Sie, wie die Lieferung funktioniert", href: "/process" },
    },
    proofTiles: {
      headline: "Ausgewählte Arbeit mit dem Kontext dahinter.",
      subheadline:
        "Sehen Sie Herausforderung, Umsetzung und Veränderung aus Strategie, Systemen, Produkt und Operations.",
      eyebrow: "Arbeit",
      tiles: [
        {
          title: "Radiance Co. Ltd.",
          description: "Solarstromsysteme für Gesundheitseinrichtungen in Red Sea und Kassala.",
        },
        {
          title: "TadmeenPro",
          description: "Ein Betriebskern für Versicherer, der bereit für KI ist.",
        },
        {
          title: "National Trade Facilitation Platform",
          description: "Eine Single-Window-Plattform mit der A4 Group für eine vertrauliche Behörde.",
        },
      ],
      tileCta: "Fallstudie ansehen",
      cta: { label: "Alle Fallstudien ansehen", href: "/work" },
    },
    aiTools: {
      eyebrow: "Selbsthilfe-Tools",
      headline: "Erhalten Sie in wenigen Minuten ein nützliches Ergebnis.",
      subheadline:
        "Diese kostenlosen Tools liefern oberflächliche Entwürfe und Audits. Nutzen Sie sie jetzt oder lassen Sie mich die Ergebnisse sauber umsetzen.",
      tools: [
        {
          title: "SOP-Entwurfsgenerator",
          description:
            "Generieren Sie einen strukturierten SOP-Entwurf aus einer chaotischen Prozessbeschreibung.",
        },
        {
          title: "Marken-Konsistenz-Audit",
          description:
            "Erhalten Sie einen Konsistenzbericht über Ihre Assets mit Prioritätsbehebungen.",
        },
        {
          title: "Landing-Page-Kritik",
          description: "Erhalten Sie Notizen zu Konversionsreibungen und Hierarchiebehebungen.",
        },
      ],
      cta: { label: "Selbsthilfe-Tools erkunden", href: "/tools" },
    },
    pricingTeaser: {
      headline: "Klare Pakete. Keine vage Abrechnung.",
      description:
        "Wählen Sie ein fokussiertes Paket, ein breiteres Lieferprojekt oder fortlaufende Unterstützung. Jedes Engagement beginnt mit Umfang, Timing und einem konkreten nächsten Schritt.",
      cta: { label: "Preise und Pakete ansehen", href: "/pricing" },
    },
    finalCta: {
      headline: "Buchen Sie den richtigen nächsten Schritt.",
      description: "Ich kann Ihnen helfen, das Startpaket auszuwählen und die Preise aufzuzeigen.",
      primaryCta: { label: "Gespräch buchen", href: "/book" },
      secondaryCta: { label: "Preise ansehen", href: "/pricing" },
    },
  },

  services: {
    hero: {
      headline: "Wählen Sie den Servicebereich, der zu Ihrem nächsten Engpass passt.",
      subheadline:
        "Egal, ob Sie eine stärkere Marktpräsenz, sauberere interne Abläufe oder praktische Automatisierung benötigen, ich skaliere die Arbeit um nutzbare Ergebnisse, auf denen Ihr Team weiter aufbauen kann.",
      primaryCta: { label: "Gespräch buchen", href: "/book" },
    },
    tracks: [
      {
        id: "external-credibility",
        title: "Bereich A: Externe Glaubwürdigkeit",
        description: "Was Kunden, Investoren und Partner sehen.",
        items: [
          { title: "Markensystem", description: "Logo, Identität, Richtlinien, Vorlagen." },
          {
            title: "Website und CMS",
            description: "Marketing-Website, die für Konversion und Aktualisierungen entwickelt wurde.",
          },
          {
            title: "Verkaufs- und Pitch-Materialien",
            description: "Decks, One-Pager, Vorschläge, die abschließen.",
          },
        ],
      },
      {
        id: "internal-execution",
        title: "Bereich B: Interne Ausführung",
        description: "Was Ihr Team jeden Tag nutzt.",
        items: [
          { title: "SharePoint", description: "Intranet, Dokumentenbibliotheken, Team-Hubs." },
          { title: "SOP-Bibliothek", description: "Verfahren, die befolgt werden." },
          {
            title: "Vorlagen und Governance",
            description: "Konsistente Ergebnisse, klare Verantwortlichkeit.",
          },
          { title: "Onboarding-Paket", description: "Neue Mitarbeiter schneller produktiv." },
        ],
      },
      {
        id: "workflow-automation",
        title: "Bereich C: Workflow-Automatisierung",
        description: "Benutzerdefinierte Tools, die zu Ihrem Prozess passen.",
        items: [
          { title: "Portale", description: "Schnittstellen für Kunden oder Anbieter." },
          {
            title: "Dashboards",
            description: "Operative Sichtbarkeit ohne Tabellenkalkulations-Chaos.",
          },
          { title: "Workflow-Apps", description: "Genehmigungen, Anfragen, Verfolgung." },
          {
            title: "Leichtgewichtige interne Tools",
            description: "Benutzerdefinierte Lösungen für spezifische Bedürfnisse.",
          },
        ],
      },
    ],
    ctaBand: {
      primaryCta: { label: "Preise und Pakete ansehen", href: "/pricing" },
      secondaryCta: { label: "Gespräch buchen", href: "/book" },
    },
  },

  software: {
    hero: {
      headline:
        "Betriebssoftware, die darauf abgestimmt ist, wie Ihr Team tatsächlich arbeitet.",
      subheadline:
        "Ich setze fokussierte CRM-, Betriebs- und Dokumenten-Workflows ein, damit Ihr Team ein nutzbares System erhält, und nicht noch ein Tool, das es alleine herausfinden muss.",
      primaryCta: { label: "Demo buchen", href: "/book" },
      secondaryCta: { label: "Gespräch buchen", href: "/book" },
    },
    modules: {
      headline: "Kernmodule im Abonnement verfügbar.",
      items: [
        {
          title: "CRM (Kern)",
          features: [
            "Kontakte",
            "Pipeline",
            "Aufgaben",
            "E-Mail-Vorlagen",
            "Grundlegendes Reporting",
          ],
        },
        {
          title: "Betriebs-Workspace",
          features: [
            "Anfragen und Genehmigungen",
            "Interne Tickets",
            "Dashboards",
            "Rollenbasierter Zugriff",
          ],
        },
        {
          title: "Dokumenten- und Vorlagenzentrum",
          features: [
            "Zentrale Bibliothek",
            "Versionskontrolle",
            "Genehmigungsworkflows",
            "Kontrollierte Freigabe",
          ],
        },
        {
          title: "Optionale Add-ons",
          features: ["Inventar-Lite", "Basis-Finanzen", "Feldberichterstattung"],
          note: "Nur wenn Sie sie wirklich wollen.",
        },
      ],
      keyLine:
        "Ich biete nur Module an, die ich ordnungsgemäß implementieren und langfristig unterstützen kann.",
    },
    differentiator: {
      headline: "Software ohne Adoptionsfehler.",
      points: [
        "Rollen und Berechtigungen für Ihre Struktur konfiguriert.",
        "Saubere Migration von Ihren aktuellen Tools.",
        "SharePoint-Integration, wo es Sinn macht.",
        "Monatlicher Support inbegriffen.",
      ],
    },
    pricing: {
      note: "Das Software-Abonnement beginnt bei 500 EUR pro Monat und Modul.",
      setupNote:
        "Die Einrichtung ist in den Foundation-Build-Paketen enthalten oder separat erhältlich.",
      cta: { label: "Preisgespräch buchen", href: "/book" },
    },
  },

  tools: {
    hero: {
      headline: "Selbsthilfe-Tools, die chaotische Eingaben in strukturierte Ausgaben verwandeln.",
      subheadline:
        "Führen Sie ein oberflächliches Audit durch oder generieren Sie einen praktischen Entwurf. Erhalten Sie in wenigen Minuten einen nützlichen Startpunkt. Entscheiden Sie dann, ob ich es richtig implementieren soll.",
      primaryCta: { label: "Kostenloses Audit durchführen", href: "#tools-list" },
      secondaryCta: { label: "Gespräch buchen", href: "/book" },
    },
    list: [
      {
        title: "SOP-Entwurfsgenerator",
        description:
          "Generieren Sie einen strukturierten SOP-Entwurf aus einer chaotischen Prozessbeschreibung.",
        illustration: "document" as const,
        href: "/tools/sop-builder",
      },
      {
        title: "Marken-Konsistenz-Audit",
        description:
          "Erhalten Sie einen Konsistenzbericht über Ihre Assets mit Prioritätsbehebungen.",
        illustration: "brand" as const,
        href: "/tools/brand-audit",
      },
      {
        title: "Landing-Page-Kritik",
        description: "Erhalten Sie Notizen zu Konversionsreibungen und Hierarchiebehebungen.",
        illustration: "website" as const,
        href: "/tools/page-critique",
      },
      {
        title: "Prozessablauf-Mapper",
        description: "Verwandeln Sie Workflow-Beschreibungen in visuelle Prozessdiagramme.",
        illustration: "tree" as const,
        href: "/tools/process-mapper",
      },
      {
        title: "Dashboard-Anforderungsgenerator",
        description: "Generieren Sie eine Dashboard-Spezifikation aus Ihren Berichtsanforderungen.",
        illustration: "dashboard" as const,
        href: "/tools/dashboard-builder",
      },
      {
        title: "KPI-Audit",
        description:
          "Analysieren Sie Ihre Kennzahlen und erhalten Sie Empfehlungen für das Tracking.",
        illustration: "chart" as const,
        href: "/tools/kpi-audit",
      },
    ],
    emailCapture: {
      headline: "Laden Sie den vollständigen Bericht als PDF herunter.",
      description:
        "Geben Sie Ihre E-Mail-Adresse ein und erhalten Sie einen herunterladbaren Bericht sowie einen einseitigen Implementierungsplan.",
      buttonLabel: "PDF anfordern",
      successMessage: "Überprüfen Sie Ihren Posteingang auf den Bericht.",
      downloadLabel: "PDF herunterladen",
      followUpCta: { label: "Gespräch buchen", href: "/book" },
    },
  },

  pricing: {
    hero: {
      headline: "Pakete mit klarem Umfang und Festpreisen.",
      subheadline: "Wählen Sie, was Sie brauchen. Erhalten Sie einen Zeitplan. Keine vage Abrechnung.",
    },
    decisionHelper: {
      headline: "Nicht sicher, was Sie wählen sollen?",
      options: [
        {
          label: "Wir brauchen externe Glaubwürdigkeit (Marke + Web)",
          anchor: "#external-credibility",
        },
        {
          label: "Wir brauchen interne Ausführung (SharePoint + SOPs)",
          anchor: "#internal-execution",
        },
        {
          label: "Wir brauchen beides (Foundation Build)",
          anchor: "#foundation-build",
        },
      ],
    },
    includedStrip: {
      headline: "In jedem Paket enthalten",
      items: [
        "Klarer Umfang",
        "Zeitplan",
        "Dokumentation",
        "Übergabesitzung",
        "Optionaler Retainer",
      ],
    },
    packages: {
      externalCredibility: {
        id: "external-credibility",
        title: "Externe Glaubwürdigkeit",
        description: "Marke, Web und Verkaufsmaterialien.",
        items: [
          {
            title: "Markensystem",
            whoFor: "Teams ohne eine einheitliche Identität.",
            startingPrice: "Ab 8.000 EUR",
            includes: [
              "Logo und Identität",
              "Markenrichtlinien",
              "Vorlagenpaket",
              "Materialdesign",
            ],
          },
          {
            title: "Website und CMS",
            whoFor: "Teams, die eine Marketing-Website benötigen, die konvertiert.",
            startingPrice: "Ab 12.000 EUR",
            includes: [
              "Marketing-Website",
              "CMS-Einrichtung",
              "SEO-Grundlage",
              "Analytik",
            ],
          },
          {
            title: "Verkaufsmaterialien",
            whoFor: "Teams, die Geschäfte mit veralteten Decks abschließen.",
            startingPrice: "Ab 5.000 EUR",
            includes: ["Pitch Deck", "One-Pager", "Vorschlagsvorlagen"],
          },
        ],
      },
      internalExecution: {
        id: "internal-execution",
        title: "Interne Ausführung",
        description: "SharePoint, SOPs und operative Infrastruktur.",
        items: [
          {
            title: "SharePoint-Einrichtung",
            whoFor: "Teams mit unordentlicher Dateispeicherung und ohne Intranet.",
            startingPrice: "Ab 10.000 EUR",
            includes: [
              "Intranet-Architektur",
              "Dokumentenbibliotheken",
              "Team-Hubs",
              "Berechtigungen",
            ],
          },
          {
            title: "SOP-Bibliothek",
            whoFor: "Teams ohne dokumentierte Prozesse.",
            startingPrice: "Ab 6.000 EUR",
            includes: [
              "Prozessdokumentation",
              "Rollenkartierung",
              "QA-Checklisten",
              "Aktualisierungsworkflow",
            ],
          },
          {
            title: "Onboarding-Paket",
            whoFor: "Teams mit langsamer Einarbeitung neuer Mitarbeiter.",
            startingPrice: "Ab 4.000 EUR",
            includes: [
              "Leitfaden für die erste Woche",
              "Rollenspezifische Schulung",
              "Checklisten",
              "Video-Walkthroughs",
            ],
          },
        ],
      },
      foundationBuild: {
        id: "foundation-build",
        title: "Foundation Build",
        description:
          "Alles, was Sie brauchen, um extern glaubwürdig zu wirken und intern sauber zu arbeiten.",
        whoFor:
          "Teams, die eine richtige Infrastruktur von Grund auf neu aufbauen oder fragmentierte Systeme ersetzen.",
        startingPrice: "Ab 35.000 EUR",
        includes: [
          "Markensystem",
          "Website und CMS",
          "SharePoint-Einrichtung",
          "SOP-Bibliothek",
          "Onboarding-Paket",
          "Software-Einrichtung (optional)",
        ],
        timeline: "Typische Lieferzeit: 8-12 Wochen",
      },
    },
    finalCta: {
      headline: "Erhalten Sie einen festen Umfang und Zeitplan.",
      primaryCta: { label: "Gespräch buchen", href: "/book" },
      secondaryCta: { label: "Kostenloses Audit durchführen", href: "/tools" },
    },
  },

  work: {
    hero: {
      headline: "Arbeit rund um geschäftliche Probleme.",
      subheadline:
        "Sehen Sie Herausforderung, Umsetzung und Veränderung aus Strategie, Systemen, Produkt und Operations.",
    },
    tiles: [
      {
        title: "Radiance Co. Ltd.",
        description:
          "Solarstromsysteme für Gesundheitseinrichtungen in Red Sea und Kassala.",
        thumbnail: null,
        href: "/work/radiance-co-ltd-solar-power-for-health-facilities-in-red-sea-and-kassala",
        cta: "Fallstudie ansehen",
      },
      {
        title: "TadmeenPro",
        description:
          "Ein Betriebskern für Versicherer, der bereit für KI ist.",
        thumbnail: null,
        href: "/work/tadmeenpro-an-operations-core-for-insurers-that-is-ready-for-ai",
        cta: "Fallstudie ansehen",
      },
      {
        title: "Talya Properties",
        description:
          "Steuerung eines Immobilienunternehmens durch einen abkühlenden Markt.",
        thumbnail: null,
        href: "/work/talya-properties-steering-a-real-estate-business-through-a-cooling-market",
        cta: "Fallstudie ansehen",
      },
      {
        title: "National Trade Facilitation Platform",
        description:
          "Eine Single-Window-Plattform mit der A4 Group für eine vertrauliche Behörde.",
        thumbnail: null,
        href: "/work/national-trade-facilitation-platform-with-a4-group-for-a-confidential-authority",
        cta: "Fallstudie ansehen",
      },
    ],
    requestCta: {
      headline: "Umfang ähnlicher Arbeit.",
      description:
        "Ich kann das erste Engagement rund um Ihren Engpass, Ihren Zeitplan und Ihren Preis gestalten.",
      primaryCta: { label: "Gespräch buchen", href: "/book" },
      secondaryCta: { label: "Preise ansehen", href: "/pricing" },
    },
  },

  about: {
    hero: {
      eyebrow: "Wie ich arbeite",
      headline: "Ich baue die Geschäftsebene um wachsende Teams auf.",
      subheadline:
        "Ich helfe Unternehmen, die Lücke zwischen starker zugrunde liegender Arbeit und den Marken-, Betriebs- und Workflow-Systemen, die diese unterstützen, zu schließen.",
      credibilityStrip:
        "Klarer Umfang. Praktische Lieferung. Saubere Übergabe. Laufende Unterstützung, falls nützlich.",
      primaryCta: { label: "Gespräch buchen", href: "/book" },
      secondaryCta: { label: "Preise ansehen", href: "/pricing" },
    },
    story: {
      eyebrow: "Über mich",
      headline:
        "Ich mache diese Arbeit, weil wachsende Unternehmen oft aus den Systemen um gute Arbeit herum herauswachsen.",
      subheadline:
        "Das Unternehmen liefert vielleicht schon starke Ergebnisse, aber die umgebende Ebene fällt mit dem Wachstum des Unternehmens oft zurück.",
      paragraphs: [
        "Diese Lücke kann sich extern zeigen. Die Website, die Marke oder die Verkaufsmaterialien schaffen nicht genug Klarheit oder Vertrauen für Käufer.",
        "Es kann sich auch intern zeigen. Dateien sind schwerer zu finden, SOPs sind zu dünn, das Onboarding hängt vom Gedächtnis ab und wiederkehrende Arbeiten werden immer wieder von Grund auf neu aufgebaut.",
        "Ich schließe diese Lücke mit praktischen Systemen. Ich helfe Teams, ihren Auftritt zu stärken, ihre Abläufe zu verbessern und herauszufinden, wo Automatisierung wiederholende Aufgaben beseitigen kann, ohne mehr Verwirrung zu stiften.",
      ],
    },
    drivers: {
      eyebrow: "Mein Warum",
      headline: "Was meine Arbeitsweise antreibt.",
      subheadline:
        "Die Arbeit ist geprägt von ein paar praktischen Überzeugungen darüber, was wachsenden Teams wirklich hilft, sich besser zu bewegen.",
      items: [
        {
          title: "Klarheit vor der Ausführung",
          body: "Wir definieren das Problem, die Ergebnisse und die Entscheidungspunkte, bevor sich die Arbeit vervielfacht.",
        },
        {
          title: "Adoption statt Politur am Starttag",
          body: "Wenn das Team das System nach der Lieferung nicht weiter nutzen kann, ist die Arbeit nicht richtig abgeschlossen.",
        },
        {
          title: "Struktur, die das Wachstum übersteht",
          body: "Das Ergebnis sollte nützlich bleiben, wenn das Unternehmen neue Mitarbeiter einstellt, Rollen ändert oder Komplexität hinzufügt.",
        },
        {
          title: "Praktische Automatisierung, kein KI-Theater",
          body: "Automatisierung lohnt sich nur, wenn sie echte Reibungen beseitigt und dennoch die richtigen Kontrollen beibehält.",
        },
      ],
    },
    fit: {
      eyebrow: "Mit wem ich am besten arbeite",
      headline:
        "Die Passform ist normalerweise am stärksten, wenn das Unternehmen bereits Dynamik hat.",
      subheadline:
        "Ich bin normalerweise am nützlichsten, wenn das Unternehmen bereits sinnvolle Arbeit leistet, aber die Geschäftsebene um diese Arbeit herum aufholen muss.",
      items: [
        {
          title: "Teams mit starker zugrunde liegender Arbeit",
          body: "Das Angebot, die Dienstleistung oder das Produkt ist bereits wertvoll, aber die Art und Weise, wie das Unternehmen es präsentiert oder ausführt, fühlt sich noch im Rückstand an.",
        },
        {
          title: "Unternehmen, die operativen Widerstand spüren",
          body: "Wachstum hat mehr Dateien, mehr Übergaben und mehr wiederkehrende Fragen eingeführt, als die aktuelle Struktur sauber bewältigen kann.",
        },
        {
          title: "Führungskräfte, die selbst zu viel Kontext tragen",
          body: "Zu viel vom Unternehmen hängt immer noch davon ab, dass sich einige wenige Personen daran erinnern, wie alles funktioniert.",
        },
        {
          title: "Teams, die bereit für praktische KI sind",
          body: "Das Unternehmen möchte durch Automatisierung Zeit sparen, aber keine Sichtbarkeit, Genehmigungen oder vernünftigen Grenzen aufgeben.",
        },
      ],
    },
    workingWithUs: {
      eyebrow: "Zusammenarbeiten",
      headline: "Die Arbeit ist so strukturiert, dass sie klar, ruhig und nützlich bleibt.",
      subheadline:
        "Kunden wollen normalerweise weniger Meetings, schnellere Entscheidungen und ein endgültiges System, das sie tatsächlich weiter nutzen können. So ist die Arbeit aufgebaut.",
      steps: [
        {
          title: "Den wahren Engpass ermitteln",
          description:
            "Wir identifizieren das Geschäftsproblem klar und wählen den richtigen Einstiegspunkt, anstatt zu versuchen, alles auf einmal zu beheben.",
        },
        {
          title: "Die richtige Ebene aufbauen",
          description:
            "Das kann Marken- und Website-Arbeit, interne Betriebsstruktur oder enthaltene Automatisierung bei sich wiederholenden Aufgaben bedeuten.",
        },
        {
          title: "Sauber übergeben",
          description:
            "Die Arbeit wird so dokumentiert und übertragen, dass das Team sie nach dem Start weiter nutzen kann.",
        },
        {
          title: "Nur fortfahren, wenn es nützlich ist",
          description:
            "Retainer sind verfügbar, wenn fortlaufende Unterstützung sinnvoll ist, aber die anfängliche Lieferung soll für sich allein stehen.",
        },
      ],
      expectationsTitle: "Was Kunden erwarten können",
      expectations: [
        "Ein klarer Umfang vor Baubeginn",
        "Funktionierende Meilensteine anstelle von Überraschungen in der Spätphase",
        "Dokumentation und Übergabeanleitung bei der Lieferung",
        "Optionale Retainer, wenn laufende Unterstützung nützlich ist",
      ],
    },
    cta: {
      headline: "Finden Sie heraus, ob ich der Richtige bin.",
      description:
        "Buchen Sie ein kurzes Gespräch und ich nenne Ihnen das richtige Startpaket.",
      primaryCta: { label: "Gespräch buchen", href: "/book" },
      secondaryCta: { label: "Preise ansehen", href: "/pricing" },
    },
  },

  book: {
    hero: {
      headline: "Buchen Sie ein kurzes Gespräch mit Amjad",
      subheadline:
        "Sie werden zur Live-Buchungsseite von Google Meet weitergeleitet, um direkt eine Zeit auszuwählen.",
    },
    redirectingMessage:
      "Sie werden jetzt zur Live-Buchungsseite von Google Meet weitergeleitet.",
    openBookingPage: "Buchungsseite öffnen",
  },

  process: {
    hero: {
      eyebrow: "Lieferprozess",
      headline: "Wie wir liefern",
      subheadline: "Strukturierter Prozess. Minimale Meetings. Saubere Übergabe.",
      credibilityStrip:
        "Klarer Einstieg. Arbeitende Meilensteine. Saubere Übergabe. Support nur, wenn er nützlich ist.",
    },
    steps: [
      {
        number: 1,
        title: "Aufnahme",
        description:
          "Kurzes Gespräch, um Ihre Bedürfnisse zu verstehen. Wir dokumentieren die Anforderungen und legen den Umfang fest, bevor mit der Aufbauarbeit begonnen wird.",
        outcome: "Anforderungsdokument + fester Umfang",
      },
      {
        number: 2,
        title: "Architektur",
        description:
          "Struktur und Spezifikationen bestätigt. Wir zeigen Ihnen den Bauplan vor der Ausführung.",
        outcome: "Architektur-Deck + Freigabe zum Fortfahren",
      },
      {
        number: 3,
        title: "Aufbau",
        description:
          "Ausführung in fokussierten Sprints. Updates asynchron geliefert. Keine unnötigen Meetings.",
        outcome: "Funktionierende Ergebnisse in Phasen",
      },
      {
        number: 4,
        title: "Übergabe",
        description:
          "Dokumentation, Schulung und sauberer Dateitransfer. Alles gehört Ihnen.",
        outcome: "Vollständige Dokumentation + Schulungssitzung",
      },
      {
        number: 5,
        title: "Optionaler Retainer",
        description:
          "Monatliche Unterstützung, wenn Sie laufende Abdeckung wünschen. Updates, Fehlerbehebungen und Optimierung.",
        outcome: "Dedizierte Support-Stunden pro Monat",
      },
    ],
    cta: {
      headline: "Beginnen Sie mit einem klaren Umfang.",
      description:
        "Ich passe den Lieferprozess an das erste Problem an, das Sie beheben müssen.",
      primaryCta: { label: "Gespräch buchen", href: "/book" },
      secondaryCta: { label: "Preise ansehen", href: "/pricing" },
    },
  },

  resources: {
    hero: {
      eyebrow: "Einblicke",
      headline: "Praktische Ressourcen für klarere Lieferung.",
      subheadline:
        "Artikel und Notizen für Teams, die Marke, Betrieb, Software und Automatisierung verbessern.",
      credibilityStrip:
        "Nützlicher Kontext. Kein Theater. Praktische nächste Schritte, wenn Sie bereit sind zu bauen.",
    },
    emptyState: {
      message:
        "Weitere Leitfäden sind in Vorbereitung. Wenn Sie etwas Bestimmtes benötigen, melden Sie sich, und ich kann Sie in die richtige Richtung weisen.",
      cta: { label: "Kontakt", href: "/contact" },
    },
  },

  contact: {
    hero: {
      eyebrow: "Kontakt",
      headline: "Sagen Sie mir, was Sie versuchen zu beheben",
      subheadline:
        "Fragen, Projektanfragen und Musteranfragen sind alle willkommen.",
      credibilityStrip:
        "Kurze Nachricht. Klarer nächster Schritt. Kein Druck, bevor die Passung offensichtlich ist.",
    },
    form: {
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "E-Mail", type: "email", required: true },
        { name: "message", label: "Nachricht", type: "textarea", required: true },
      ],
      submitLabel: "Nachricht senden",
      subject: "Website-Kontakt von",
      newMessage: "Neue Kontakt-Nachricht von der Website",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      messageLabel: "Nachricht",
      messageHeading: "Nachricht:",
    },
    directEmail: {
      label: "Bevorzugen Sie E-Mail?",
      email: "hello@amjadosman.com",
    },
  },

  privacy: {
    eyebrow: "Rechtliches",
    title: "Datenschutzrichtlinie",
    lastUpdated: "Juni 2026",
    subheadline:
      "Wie Kontaktdaten, Buchungsinformationen und Website-Nachrichten behandelt werden.",
    credibilityStrip:
      "Minimale Erfassung. Praktische Nutzung. Kein Verkauf personenbezogener Daten.",
    sections: [
      {
        title: "Verantwortliche Stelle",
        body: [
          "Diese Website wird von Amjad Osman / ADSI als unabhängiger Dienstleister mit Sitz in der EU betrieben, sofern ein Angebot oder Vertrag keine andere Vertragspartei nennt. Für Datenschutzfragen, Auskunft oder Löschung schreiben Sie an hello@amjadosman.com.",
          "Bei Website-Anfragen, Buchungen, Projektgesprächen und normaler Kommunikation entscheide ich über Zweck und Mittel der Datenverarbeitung. Bei Kundensystemen, Dokumenten oder Datensätzen in einem bezahlten Projekt kann der unterschriebene Umfang oder eine Datenverarbeitungsvereinbarung eine andere Rolle festlegen, auch als Auftragsverarbeiter oder Subunternehmer.",
        ],
      },
      {
        title: "Geltungsbereich",
        body: [
          "Diese Richtlinie gilt für personenbezogene Daten, die über die Website, Buchungslinks, E-Mail-Kommunikation, kostenlose Selbsthilfe-Tools, Projektanfragen und die normale Servicekommunikation verarbeitet werden.",
          "Sie ersetzt keine projektspezifische Auftragsverarbeitungsvereinbarung, Vertraulichkeitsvereinbarung, Leistungsbeschreibung oder Sicherheitsanforderung eines Kunden. Bei Widersprüchen gilt für das jeweilige Projekt das unterschriebene Projektdokument.",
        ],
      },
      {
        title: "Welche Daten erfasst werden können",
        body: [
          "Ich versuche, nur das zu erfassen, was nötig ist, um eine Anfrage zu verstehen, angemessen zu antworten und vereinbarte Arbeit zu liefern. Das kann umfassen:",
        ],
        bullets: [
          "Kontaktdaten wie Name, E-Mail, Unternehmen, Rolle, Land und bevorzugter Kommunikationskanal.",
          "Projektinformationen, die Sie senden, etwa Ziele, Website-URLs, Markenmaterial, Prozessbeschreibungen oder Workflow-Beispiele.",
          "Buchungsinformationen wie Termin, Notizen, Kalenderdaten und Nachrichten im Buchungsformular.",
          "Eingaben und Ausgaben kostenloser Tools, etwa Audit-Texte, SOP-Entwürfe, KPI-Reviews, Dashboard- oder Seitenkritiken.",
          "Technische Browser- und Hostingdaten wie IP-Adresse, Gerät, Browser, ungefähre Location, besuchte Seiten, Zeitstempel und Sicherheitslogs.",
          "Abrechnungs- und Geschäftsdaten, wenn Sie Kunde werden, etwa Angebote, Rechnungen, Zahlungsstatus, Steuer- oder Vertragsdaten.",
        ],
      },
      {
        title: "Sensible und vertrauliche Informationen",
        body: [
          "Bitte senden Sie keine Passwörter, Kartendaten, Ausweisdaten, Gesundheitsdaten, besondere Kategorien personenbezogener Daten, Kinderdaten oder hochvertrauliche Kundeninformationen über öffentliche Formulare oder kostenlose Tools, sofern keine sichere Methode vereinbart wurde.",
          "Wenn ein Projekt sensible, regulierte oder vertrauliche Daten benötigt, sollten Verarbeitung, Zugriff, Aufbewahrung und gegebenenfalls eine Datenverarbeitungsvereinbarung vorab festgelegt werden.",
        ],
      },
      {
        title: "Zwecke der Verarbeitung",
        body: [
          "Personenbezogene Daten werden für praktische Zwecke rund um Website und Services genutzt:",
        ],
        bullets: [
          "Anfragen beantworten, Angebote vorbereiten und Projekt-Fit prüfen.",
          "Termine planen und Kalendereinladungen verwalten.",
          "Kostenlose Tools ausführen und gewünschte Ergebnisse bereitstellen.",
          "Vereinbarte Services liefern, Kommunikation, Dokumente, Systeme und Übergabe verwalten.",
          "Geschäftsunterlagen, Rechnungen, Buchhaltung, Compliance und Steuerdokumente führen.",
          "Website schützen, Missbrauch verhindern, Fehler beheben und Verfügbarkeit überwachen.",
          "Inhalte, Services und Tools anhand aggregierter oder nicht identifizierender Nutzungsmuster verbessern.",
        ],
      },
      {
        title: "Rechtsgrundlagen für EU/EWR-Nutzer",
        body: [
          "Wenn DSGVO oder ähnliche EU/EWR-Regeln gelten, stütze ich mich je nach Kontext auf eine oder mehrere Rechtsgrundlagen:",
        ],
        bullets: [
          "Vertrag oder vorvertragliche Maßnahmen, wenn Sie ein Angebot anfragen, einen Call buchen oder eine Leistung beauftragen.",
          "Berechtigte Interessen, um geschäftliche Anfragen zu beantworten, Unterlagen zu führen, die Website zu sichern und Services zu verbessern.",
          "Einwilligung, wenn optionale Erlaubnis erbeten wird, etwa für Marketing-E-Mails oder nicht notwendige Cookies.",
          "Rechtliche Verpflichtung, wenn Unterlagen für Buchhaltung, Steuern, Compliance, Streitfälle oder Regulierung aufbewahrt werden müssen.",
        ],
      },
      {
        title: "Kostenlose Tools und KI-gestützte Ergebnisse",
        body: [
          "Die kostenlosen Tools liefern oberflächliche Audits, Entwürfe und strukturierte Startpunkte. Sie sind keine Rechts-, Finanz-, Sicherheits-, HR- oder Compliance-Beratung. Ergebnisse sollten vor operativer Nutzung geprüft werden.",
          "Einige Funktionen können Drittanbieter-Infrastruktur oder KI-Dienste nutzen, um eingegebenen Text zu verarbeiten. Fügen Sie keine vertraulichen, regulierten oder sensiblen Daten ein, wenn diese Verarbeitung nicht angemessen ist.",
        ],
      },
      {
        title: "Drittanbieter",
        body: [
          "Website und Projektarbeit können vertrauenswürdige Anbieter für Hosting, Diagnose, Buchung, E-Mail, Dokumentenspeicher, Zahlungen, Projektmanagement, Automatisierung und KI-gestützte Verarbeitung nutzen.",
          "Diese Anbieter verarbeiten Daten für den jeweiligen Betriebszweck und können eigene Datenschutzbedingungen haben, wenn Sie direkt mit ihnen interagieren.",
        ],
      },
      {
        title: "Internationale Übermittlungen",
        body: [
          "Da ich mit Kunden in der EU, im GCC und anderen Regionen arbeite und Cloud-Anbieter international tätig sein können, können Daten außerhalb Ihres Landes verarbeitet werden. Bei EU/EWR-Daten strebe ich geeignete Schutzmaßnahmen an, etwa seriöse Anbieter, vertragliche Schutzmechanismen, Angemessenheitsbeschlüsse oder Standardvertragsklauseln, wenn relevant.",
          "Für GCC-Kunden versuche ich, lokale Datenschutzanforderungen und schriftlich vereinbarte Projektanforderungen zu respektieren, einschließlich grenzüberschreitender Beschränkungen, wenn sie gelten.",
        ],
      },
      {
        title: "Aufbewahrung",
        body: [
          "Daten werden nur so lange aufbewahrt, wie es für den Zweck nötig ist, sofern kein längerer Zeitraum aus rechtlichen, steuerlichen, buchhalterischen, streitbezogenen oder berechtigten geschäftlichen Gründen erforderlich ist.",
        ],
        bullets: [
          "Anfragen und Kontaktmeldungen: in der Regel bis zu 24 Monate, sofern sie nicht Teil einer Kundenakte werden.",
          "Projekt- und Lieferunterlagen: in der Regel bis zu 7 Jahre für Geschäfts-, Steuer-, Gewährleistungs- oder Streitfallzwecke.",
          "Eingaben und Ausgaben kostenloser Tools: nur soweit nötig für Ergebnis, Fehlerbehebung, Missbrauchsprävention oder Verbesserung.",
          "Rechnungen, Verträge und Buchhaltung: entsprechend den gesetzlichen Aufbewahrungsfristen.",
          "Sicherheitslogs: für einen begrenzten, angemessenen Zeitraum.",
        ],
      },
      {
        title: "Ihre Rechte",
        body: [
          "Je nach Standort können Sie Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch oder eine Kopie Ihrer Daten verlangen. EU/EWR-Nutzer haben DSGVO-Rechte, einschließlich Beschwerde bei einer Aufsichtsbehörde.",
          "Datenschutzgesetze im GCC, etwa in den VAE und Saudi-Arabien, erkennen in verschiedenen Kontexten ebenfalls Transparenz und individuelle Rechte an.",
          "Anfragen senden Sie an hello@amjadosman.com. Ich kann eine Identitätsprüfung benötigen. Wenn die DSGVO gilt, strebe ich eine Antwort innerhalb eines Monats an, außer der Antrag ist komplex oder das Gesetz erlaubt mehr Zeit.",
        ],
      },
      {
        title: "Sicherheit",
        body: [
          "Ich nutze angemessene technische und organisatorische Maßnahmen, etwa kontrollierte Zugriffe, seriöse Hosting- und Cloud-Anbieter, Konto-Sicherheitspraktiken und projektspezifische Kontrollen.",
          "Keine Website, E-Mail oder Cloud kann vollständig sicher garantiert werden. Wenn Informationen versehentlich gesendet wurden oder Sie ein Sicherheitsproblem vermuten, kontaktieren Sie hello@amjadosman.com zeitnah.",
        ],
      },
      {
        title: "Cookies und Analytics",
        body: [
          "Diese Website hält Tracking möglichst gering. Werden optionale Analytics, Werbepixel oder nicht notwendige Cookies später ergänzt, sollte ein klarer Hinweis und, wo erforderlich, eine Einwilligungsmöglichkeit bereitgestellt werden.",
          "Notwendige technische Speicherung kann für Sicherheit, Spracheinstellungen, Routing, Formulare oder normalen Websitebetrieb genutzt werden.",
        ],
      },
      {
        title: "Änderungen",
        body: [
          "Diese Richtlinie kann aktualisiert werden, wenn sich Website, Services, Tools, Anbieter oder rechtliche Anforderungen ändern. Die neueste Version wird auf dieser Seite mit Datum veröffentlicht.",
        ],
      },
    ],
  },

  terms: {
    eyebrow: "Rechtliches",
    title: "Nutzungsbedingungen",
    lastUpdated: "Juni 2026",
    subheadline:
      "Klare Bedingungen für die Nutzung dieser Website und den Start eines Projektgesprächs.",
    credibilityStrip:
      "Die Website-Nutzung ist einfach. Bezahlte Arbeit folgt einem separaten schriftlichen Umfang.",
    sections: [
      {
        title: "Für wen diese Bedingungen gelten",
        body: [
          "Diese Bedingungen gelten, wenn Sie diese Website nutzen, Artikel lesen, kostenlose Tools verwenden, mich kontaktieren, einen Call buchen oder ein mögliches Projekt mit Amjad Osman / ADSI besprechen.",
          "Bezahlte Leistungen richten sich nach dem jeweiligen Angebot, Leistungsumfang, Rechnungstext, Datenverarbeitungsbedingungen oder Vertrag. Bei Konflikten gelten für die bezahlte Leistung die unterschriebenen Projektdokumente.",
        ],
      },
      {
        title: "Website-Inhalte sind allgemeine Informationen",
        body: [
          "Artikel, Beispiele, Tools, Preisbeschreibungen und Inhalte dieser Website dienen allgemeinen Geschäftsinformationen. Sie sind keine Rechts-, Steuer-, Finanz-, Anlage-, Arbeitsrechts-, Cybersecurity- oder regulierte Fachberatung.",
          "Sie sind verantwortlich, Ergebnisse, Entscheidungen, Workflows, Dokumente und Empfehlungen zu prüfen, bevor Sie sie in Ihrer Organisation nutzen.",
        ],
      },
      {
        title: "Kostenlose Selbsthilfe-Tools",
        body: [
          "Die kostenlosen Tools erstellen oberflächliche Audits, Entwürfe, Checklisten und strukturierte Startpunkte. Sie können unvollständig, ungenau oder für Ihren Kontext ungeeignet sein.",
          "Senden Sie keine Passwörter, geheimen Schlüssel, Zahlungsdaten, besonderen Kategorien personenbezogener Daten, Kinderdaten, regulierten Informationen oder vertraulichen Kundenmaterialien über kostenlose Tools, sofern keine sichere Methode vereinbart wurde.",
          "Tool-Ergebnisse schaffen ohne schriftlich vereinbarten bezahlten Umfang keine Kundenbeziehung, Garantie oder Umsetzungspflicht.",
        ],
      },
      {
        title: "Projektanfragen und Angebote",
        body: [
          "Ein Call, E-Mail-Austausch, Audit-Ergebnis oder Angebotsgespräch schafft für sich genommen keine bezahlte Beauftragung. Ein Projekt beginnt erst nach schriftlicher Einigung über Umfang, Ergebnisse, Preis, Zahlung, Zeitplan und Übergabe.",
          "Ich kann Projekte ablehnen, wenn der Umfang unklar, außerhalb meiner Services, rechtlich sensibel ohne passende Prüfung, konfliktbehaftet oder mit Zugängen oder Zusicherungen verbunden ist, die ich nicht verantwortbar geben kann.",
        ],
      },
      {
        title: "Leistungen",
        body: [
          "Services können Marken- und Kommunikationssysteme, Websites und CMS, interne Betriebssysteme, SOPs, Workflow-Design, Software-Konfiguration, Dashboards, Automatisierung und praktische KI-Agenten-Workflows umfassen.",
          "Sofern nicht anders vereinbart, handelt es sich um professionelle Design-, Operations-, Software- und Implementierungsunterstützung, nicht um Ersatz für Rechtsberatung, Steuerberatung, regulierte Finanzberatung, formale Cybersecurity-Zertifizierung oder Compliance-Freigabe.",
        ],
      },
      {
        title: "Verantwortung des Kunden",
        body: [
          "Für ein erfolgreiches Projekt müssen Sie genaue Informationen, rechtzeitiges Feedback, erforderliche Zugänge, verfügbare Entscheider und Nutzungsrechte an bereitgestellten Materialien liefern.",
        ],
        bullets: [
          "Sie dürfen keine rechtswidrigen, verletzenden, irreführenden oder unautorisierten Materialien bereitstellen.",
          "Sie sind für die finale geschäftliche Freigabe öffentlicher Aussagen, Rechtstexte, Preise, Compliance-Sprache und operativer Richtlinien verantwortlich.",
          "Sie müssen Liefergegenstände vor Veröffentlichung oder operativer Nutzung prüfen.",
          "Sie müssen eigene Backups, Zugriffskontrollen, interne Freigaben und Kontosicherheit pflegen, sofern der schriftliche Umfang nichts anderes sagt.",
        ],
      },
      {
        title: "Zahlung und Zeitplan",
        body: [
          "Preise, Anzahlungen, Meilensteine, Abos, Steuern, Auslagen, Verlängerungen und Zahlungsfristen werden im Angebot oder in der Rechnung festgelegt. Sofern nicht anders vereinbart, kann Arbeit pausieren, wenn Rechnungen, Feedback oder Zugänge ausstehen.",
          "Zeitpläne hängen von Kundeninput, Zugriff, Freigaben und Verfügbarkeit von Drittplattformen ab. Ein Zeitplan ist ein Arbeitsplan, keine Garantie, sofern nicht ausdrücklich schriftlich vereinbart.",
        ],
      },
      {
        title: "Geistiges Eigentum und Nutzungsrechte",
        body: [
          "Sofern ein Projektvertrag nichts anderes sagt, erhalten Sie nach Zahlung der relevanten Rechnungen das Recht, finale bezahlte Liefergegenstände für Ihr eigenes Geschäft zu nutzen. Entwürfe, ungenutzte Konzepte, interne Methoden, wiederverwendbare Templates, Code-Muster, Know-how und vorbestehende Materialien bleiben bei mir oder ihren Eigentümern.",
          "Sie dürfen Website-Inhalte, kostenlose Tools, Prompts, Workflows, visuelle Elemente oder Ergebnisse nicht ohne schriftliche Erlaubnis kopieren, weiterverkaufen, neu verpacken oder als konkurrierenden Service anbieten.",
          "Open-Source-Bibliotheken, Drittplattformen, Schriften, Stock-Assets, Plugins und externe Tools unterliegen ihren eigenen Lizenzen und Bedingungen.",
        ],
      },
      {
        title: "Portfolio-Nutzung",
        body: [
          "Sofern Vertraulichkeit oder schriftliche Vereinbarung nichts anderes sagen, kann ich nicht sensible Projektarbeit nach Lieferung in Portfolio, Case Study, Angebot oder Capability-Gespräch erwähnen. Vertrauliche Projekte oder NDAs bleiben maßgeblich.",
        ],
      },
      {
        title: "Vertraulichkeit",
        body: [
          "Nicht öffentliche Kundeninformationen, die für ein Projekt geteilt werden, behandle ich vertraulich und nutze sie nur für die jeweilige Diskussion oder Beauftragung. Wenn stärkere Bedingungen nötig sind, sollten wir vor sensibler Weitergabe ein NDA oder entsprechende Vertragsklauseln vereinbaren.",
        ],
      },
      {
        title: "Drittplattformen",
        body: [
          "Viele Projekte hängen von Drittplattformen ab, etwa Hosting, CMS, E-Mail, Zahlungen, Analytics, Cloudspeicher, Automatisierung, KI-Anbieter, CRM, Buchhaltung oder Kundeninfrastruktur.",
          "Ich bin nicht verantwortlich für Ausfälle, Preisänderungen, Richtlinienänderungen, Datenverlust, Sicherheitsvorfälle oder Funktionsänderungen dieser Plattformen. Unterstützung bei Konfiguration oder Verwaltung erfolgt nur im vereinbarten Umfang.",
        ],
      },
      {
        title: "Keine Ergebnisgarantie",
        body: [
          "Ich strebe nützliche, praktische Arbeit mit klarem Umfang und sauberer Übergabe an. Ich garantiere jedoch keine Umsätze, Investments, Rankings, Conversion Rates, Finanzierung, regulatorische Freigaben, Ausschreibungserfolge, operative Adoption oder KI-Leistung, sofern keine spezifische schriftliche Garantie vereinbart ist.",
        ],
      },
      {
        title: "Haftungsbegrenzung",
        body: [
          "Soweit gesetzlich zulässig, hafte ich nicht für indirekte, zufällige, Folge-, Sonder-, Straf- oder entgangene Gewinnschäden aus Website-Nutzung, kostenlosen Tools oder Servicegesprächen.",
          "Für bezahlte Projekte sollten Haftungsgrenzen oder Rechtsbehelfe im unterschriebenen Angebot oder Vertrag geregelt werden. Nichts begrenzt Haftung, die gesetzlich nicht begrenzt werden darf.",
        ],
      },
      {
        title: "Regionale Rechts- und Compliance-Prüfung",
        body: [
          "Da Kunden in der EU, im GCC und anderen Rechtsräumen tätig sein können, bleibt die finale rechtliche, steuerliche, regulatorische, arbeitsrechtliche, datenschutzrechtliche und branchenspezifische Prüfung Ihre Verantwortung, sofern nicht separat mit qualifizierten Fachleuten vereinbart.",
          "Wenn ein Ergebnis in regulierten Sektoren, öffentlicher Beschaffung, Gesundheit, Finanzen, Versicherung, Bildung, Regierung oder grenzüberschreitenden Datenumgebungen genutzt wird, sollte das früh genannt werden, damit der passende Review-Pfad eingeplant wird.",
        ],
      },
      {
        title: "Streitigkeiten",
        body: [
          "Anwendbares Recht, Gerichtsstand, Streitverfahren und Vertragspartei für bezahlte Arbeit sollten im Angebot oder Vertrag stehen. Ohne separate schriftliche Vereinbarung sollte jeder Streit zunächst in gutem Glauben über die Kontaktdaten der Website besprochen werden.",
        ],
      },
      {
        title: "Änderungen",
        body: [
          "Diese Bedingungen können aktualisiert werden, wenn sich Services, Tools, Anbieter oder rechtliche Anforderungen ändern. Die neueste Version wird auf dieser Seite mit Datum veröffentlicht.",
        ],
      },
    ],
  },
};
