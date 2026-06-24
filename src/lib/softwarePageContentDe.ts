import type { SoftwareDetailId, SoftwareDetailContent } from "./softwarePageContent";

export const softwarePageContentDe: Record<SoftwareDetailId, SoftwareDetailContent> = {
  crm: {
    hero: {
      productDescriptor: "für CRM",
      headline: "Beziehungsmanagement, konfiguriert für echte Akzeptanz.",
      subheadline:
        "Ein sauberes CRM-System, ausgestattet mit Ihren Pipeline-Phasen, Rollen und Follow-up-Workflows. Konfiguration und fortlaufender Administrator-Support inklusive.",
      primaryCtaLabel: "Demo buchen",
      secondaryCtaLabel: "Wie das Onboarding funktioniert",
    },
    previewSection: {
      headline: "Meridian in Aktion",
      subheadline: "Einheitliche Pipeline, Kontakte, Aufgaben und Berichterstattung.",
      frameTitle: "Meridian CRM",
      searchPlaceholder: "Kontakte, Deals suchen...",
      filters: ["Status", "Inhaber"],
      tabLabels: ["Pipeline", "Kontakte", "Aufgaben", "Berichte"],
    },
    personaSection: {
      headline: "Gebaut für Teams, die verkaufen",
      subheadline:
        "Egal, ob Sie Deals verfolgen, Konten verwalten oder Übergaben koordinieren.",
    },
    problemSection: {
      headline: "Ersetzen Sie das Chaos",
      subheadline:
        "Wechseln Sie von verstreuten Tools und manuellem Tracking zu strukturierten Abläufen.",
      items: [
        { before: "Deals in Tabellenkalkulationen verfolgt", after: "Visuelle Pipeline mit klaren Phasen" },
        { before: "Follow-ups in E-Mails verloren", after: "Automatisierte Aufgabenerinnerungen" },
        { before: "Keine Sichtbarkeit der Teamaktivität", after: "Echtzeit-Dashboards und -Berichte" },
        { before: "Übergaben verlieren den Kontext", after: "Die vollständige Historie reist mit den Kontakten mit" },
      ],
    },
    outcomesSection: {
      headline: "Was sich am ersten Tag ändert",
      subheadline: "Klarer, sofortiger Nutzen – keine Versprechungen.",
      snapshotLabel: "Aktivitäts-Schnappschuss",
      items: [
        {
          headline: "Klare Pipeline-Phasen und Zuständigkeiten",
          description: "Jeder Deal hat eine Phase, einen Inhaber und eine klare nächste Aktion.",
        },
        {
          headline: "Verlässliche Nachverfolgung und Aktivitäts-Tracking",
          description: "Keine verlorenen Fäden mehr – jede Interaktion wird automatisch protokolliert.",
        },
        {
          headline: "Einfache Berichterstattung für Entscheidungen",
          description: "Dashboards, die den Pipeline-Wert und die Teamaktivität anzeigen.",
        },
        {
          headline: "Saubere Übergabe bei Rollenwechseln",
          description: "Die vollständige Historie reist mit Kontakten und Deals mit.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Kernfunktionen",
      subheadline: "Alles, was Sie brauchen, konfiguriert und einsatzbereit.",
      items: [
        {
          title: "Pipeline-Management",
          description: "Visuelle Kanban-Boards mit anpassbaren Phasen und Deal-Werten.",
        },
        {
          title: "Kontaktverwaltung",
          description: "Einheitliche Profile mit Interaktionshistorie und verknüpften Deals.",
        },
        {
          title: "Aufgabenautomatisierung",
          description: "Geplante Follow-ups, Erinnerungen und Aktivitätsprotokollierung.",
        },
        {
          title: "Berichts-Dashboards",
          description: "Pipeline-Wert, Konversionsraten und Teamleistung.",
        },
        {
          title: "E-Mail-Integration",
          description: "Kommunikation protokollieren und mit Ihrem E-Mail-Client synchronisieren.",
        },
        {
          title: "Rollenspezifischer Zugriff",
          description: "Steuern Sie, wer auf jeder Ebene sieht, bearbeitet und freigibt.",
        },
      ],
    },
    workflowSection: {
      headline: "Ihr Weg zur Einrichtung",
      subheadline: "Vom ersten Login zum täglichen Betrieb in vier Schritten.",
      steps: [
        {
          title: "Struktur konfigurieren",
          description: "Pipeline-Phasen, benutzerdefinierte Felder und Deal-Werte einrichten.",
        },
        {
          title: "Rollen und Berechtigungen zuweisen",
          description: "Sichtbarkeitsregeln für das Team und Freigabeketten definieren.",
        },
        {
          title: "Daten importieren",
          description: "Bestehende Kontakte und Deals sauber migrieren.",
        },
        {
          title: "Täglichen Workflow ausführen",
          description: "Deals verfolgen, Aktivitäten protokollieren, Berichte erstellen.",
        },
      ],
    },
    governanceSection: {
      headline: "Steuern, wer was tut",
      subheadline: "Rollen, Berechtigungen und Freigabeketten von Tag eins an integriert.",
    },
    onboardingSection: {
      headline: "Für Ihr Team konfiguriert, nicht nur aktiviert",
      subheadline:
        "Wir kümmern uns um Bereitstellung, Konfiguration, Schulung und fortlaufenden Administrator-Support.",
    },
    pricingSection: {
      note:
        "Meridian™ für CRM startet ab EUR 500 pro Monat, je nach Benutzern und Konfiguration.",
      setupNote:
        "Die Einrichtung ist in den Foundation-Build-Paketen enthalten oder als feste Onboarding-Gebühr verfügbar.",
      ctaLabel: "Gespräch zur Preisgestaltung buchen",
    },
    finalCta: {
      headline: "CRM auf Ihren Prozess zuschneiden.",
      description:
        "Wir prüfen den Workflow, empfehlen das Setup und nennen den Startpreis.",
      primaryLabel: "Gespräch buchen",
      secondaryLabel: "Preise ansehen",
    },
  },
  accounting: {
    hero: {
      productDescriptor: "für Buchhaltung",
      headline: "Finanz-Workflows, konfiguriert für Klarheit statt Komplexität.",
      subheadline:
        "Rechnungsstellung, Ausgaben und grundlegende Finanzübersicht in einem sauberen System. Bereitgestellt mit Ihren Freigabepfaden, Kategorien und Berichtsanforderungen.",
      primaryCtaLabel: "Demo buchen",
      secondaryCtaLabel: "Wie das Onboarding funktioniert",
    },
    previewSection: {
      headline: "Ledger in Aktion",
      subheadline: "Rechnungsstellung, Ausgaben, Freigaben und Berichterstattung an einem Ort.",
      frameTitle: "Ledger Accounting",
      searchPlaceholder: "Rechnungen, Ausgaben suchen...",
      filters: ["Status", "Kategorie"],
      tabLabels: ["Rechnungen", "Ausgaben", "Freigaben", "Dashboard"],
    },
    personaSection: {
      headline: "Gebaut für Teams, die Geld verwalten",
      subheadline:
        "Egal, ob Sie Rechnungen senden, Ausgaben freigeben oder den Cashflow verfolgen.",
    },
    problemSection: {
      headline: "Ersetzen Sie das Chaos",
      subheadline:
        "Wechseln Sie von verstreuten Tabellenkalkulationen und manuellen Freigaben zu strukturierten Abläufen.",
      items: [
        { before: "Rechnungen in Word oder Excel erstellt", after: "Rechnungsvorlagen mit automatischer Nummerierung" },
        { before: "Ausgaben in Tabellenkalkulationen erfasst", after: "Strukturierte Einreichung mit Kategorieregeln" },
        { before: "Freigaben per E-Mail abgewickelt", after: "Integrierte Freigabeketten mit Audit-Trail" },
        { before: "Keine Echtzeit-Sichtbarkeit des Cashflows", after: "Live-Dashboards mit Zahlungsstatus" },
      ],
    },
    outcomesSection: {
      headline: "Was sich am ersten Tag ändert",
      subheadline: "Klarer, sofortiger Nutzen – keine Versprechungen.",
      snapshotLabel: "Aktivitäts-Schnappschuss",
      items: [
        {
          headline: "Schnellere Rechnungsstellung und Zahlungsverfolgung",
          description: "Erstellen, versenden und verfolgen Sie Rechnungen mit Vorlagen und Status-Updates.",
        },
        {
          headline: "Saubere Ausgabenerfassung und Freigaben",
          description: "Strukturierte Einreichung von Ausgaben mit Kategorieregeln und Freigabeketten.",
        },
        {
          headline: "Ein Dashboard, das lesbar bleibt",
          description: "Wichtige Kennzahlen ohne die Komplexität einer vollständigen Buchhaltungssoftware.",
        },
        {
          headline: "Prüfungsbereite Aufzeichnungen ohne manuelle Bereinigung",
          description: "Saubere Kategorisierung und ordnungsgemäße Dokumentation von Tag eins an.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Kernfunktionen",
      subheadline: "Alles, was Sie brauchen, konfiguriert und einsatzbereit.",
      items: [
        {
          title: "Rechnungsstellung",
          description: "Rechnungsvorlagen mit automatischer Nummerierung, Statusverfolgung und Zahlungserinnerungen.",
        },
        {
          title: "Ausgabenverfolgung",
          description: "Kategorisierte Ausgaben mit Beleg-Uploads und wiederkehrenden Einträgen.",
        },
        {
          title: "Freigabe-Workflows",
          description: "Mehrstufe Freigabeketten mit Ausgabenlimits und Eskalationsregeln.",
        },
        {
          title: "Finanz-Dashboards",
          description: "Echtzeit-Sichtbarkeit von Einnahmen, Ausgaben und Cashflow.",
        },
        {
          title: "Steuerkategorien",
          description: "Vorkonfigurierte Steuerregeln und Kategoriezuordnungen für Compliance.",
        },
        {
          title: "Audit-Trail",
          description: "Vollständige Historie jeder Transaktion, Bearbeitung und Freigabeentscheidung.",
        },
      ],
    },
    workflowSection: {
      headline: "Ihr Weg zur Einrichtung",
      subheadline: "Vom ersten Login zum täglichen Betrieb in vier Schritten.",
      steps: [
        {
          title: "Struktur konfigurieren",
          description: "Kategorien, Rechnungsvorlagen und Nummerierung einrichten.",
        },
        {
          title: "Rollen und Berechtigungen zuweisen",
          description: "Genehmigerrollen, Ausgabenlimits und Workflows definieren.",
        },
        {
          title: "Daten importieren",
          description: "Kunden- und Lieferantendaten mit Eröffnungsbilanzen migrieren.",
        },
        {
          title: "Täglichen Workflow ausführen",
          description: "Rechnungen erstellen, Zahlungen verfolgen, Ausgaben verwalten.",
        },
      ],
    },
    governanceSection: {
      headline: "Steuern, wer was tut",
      subheadline: "Rollen, Berechtigungen und Freigabeketten von Tag eins an integriert.",
    },
    onboardingSection: {
      headline: "Für Ihr Team konfiguriert, nicht nur aktiviert",
      subheadline:
        "Wir kümmern uns um Bereitstellung, Konfiguration, Schulung und fortlaufenden Administrator-Support.",
    },
    pricingSection: {
      note:
        "Ledger™ für Buchhaltung startet ab EUR 500 pro Monat, je nach Benutzern und Konfiguration.",
      setupNote:
        "Die Einrichtung ist in den Foundation-Build-Paketen enthalten oder als feste Onboarding-Gebühr verfügbar.",
      ctaLabel: "Gespräch zur Preisgestaltung buchen",
    },
    finalCta: {
      headline: "Sauberere Finanzabläufe einrichten.",
      description:
        "Wir prüfen den Finanz-Workflow, empfehlen das Setup und nennen den Startpreis.",
      primaryLabel: "Gespräch buchen",
      secondaryLabel: "Preise ansehen",
    },
  },
  inventory: {
    hero: {
      productDescriptor: "für Inventar",
      headline: "Inventar- und Anlagenverfolgung mit kontrolliertem Zugriff.",
      subheadline:
        "Wissen, was existiert, wo es ist und wer verantwortlich ist. Bereitgestellt mit Ihren Standorten, Kategorien und Nachbestell-Workflows.",
      primaryCtaLabel: "Demo buchen",
      secondaryCtaLabel: "Wie das Onboarding funktioniert",
    },
    previewSection: {
      headline: "Stockroom in Aktion",
      subheadline: "Artikel, Standorte, Nachbestellungsalarme und Anlagenverfolgung.",
      frameTitle: "Stockroom Inventory",
      searchPlaceholder: "Artikel, Standorte suchen...",
      filters: ["Standort", "Kategorie"],
      tabLabels: ["Artikel", "Standorte", "Nachbestellung", "Anlagen"],
    },
    personaSection: {
      headline: "Gebaut für Teams, die verfolgen und verwalten",
      subheadline:
        "Egal, ob Sie Bestände zählen, Ausrüstung verwalten oder Audits durchführen.",
    },
    problemSection: {
      headline: "Ersetzen Sie das Chaos",
      subheadline:
        "Wechseln Sie von manuellen Zählungen und fehlenden Aufzeichnungen zu strukturierten Inventarabläufen.",
      items: [
        { before: "Bestand manuell auf Papier gezählt", after: "Echtzeit-Bestandsberechnung mit Standortverfolgung" },
        { before: "Nachbestellungen nach Bauchgefühl", after: "Schwellenwertbasierte Alarme, bevor Artikel ausgehen" },
        { before: "Kein Nachweis, wer welche Ausrüstung hat", after: "Vollständige Verleih-Historie mit Rückgabe-Tracking" },
        { before: "Audit-Vorbereitung erfordert tagelange Bereinigung", after: "Stets aktuelle Aufzeichnungen, bereit zur Überprüfung" },
      ],
    },
    outcomesSection: {
      headline: "Was sich am ersten Tag ändert",
      subheadline: "Klarer, sofortiger Nutzen – keine Versprechungen.",
      snapshotLabel: "Aktivitäts-Schnappschuss",
      items: [
        {
          headline: "Wissen, was existiert und wo es ist",
          description: "Durchsuchbare Aufzeichnungen mit Standortverfolgung und Kategoriefilterung.",
        },
        {
          headline: "Nachbestellungsalarme und grundlegende Kontrollen",
          description: "Schwellenwertbasierte Alarme, bevor Artikel ausgehen.",
        },
        {
          headline: "Saubere Übergaben und Rechenschaftspflicht",
          description: "Zuweisungshistorie für Ausrüstung und Anlagen.",
        },
        {
          headline: "Prüfungsbereite Aufzeichnungen für Anlagen und Bestände",
          description: "Saubere Dokumentation für Compliance und Berichterstattung.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Kernfunktionen",
      subheadline: "Alles, was Sie brauchen, konfiguriert und einsatzbereit.",
      items: [
        {
          title: "Artikelverfolgung",
          description: "SKU-basierter Katalog mit Mengen, Kosten und Kategorieverwaltung.",
        },
        {
          title: "Standortverwaltung",
          description: "Lagerübergreifende Verfolgung mit Unterstandorten und Transfer-Workflows.",
        },
        {
          title: "Nachbestellungsalarme",
          description: "Konfigurierbare Schwellenwerte mit Benachrichtigungen und Mengenvorschlägen.",
        },
        {
          title: "Anlagenverfolgung",
          description: "Lebenszyklus der Ausrüstung von der Beschaffung bis zur Abschreibung und Entsorgung.",
        },
        {
          title: "Ausleihe und Rückgabe",
          description: "Verfolgen Sie, wer was hat, mit Ausleihfreigabe und Rückgabeerinnerungen.",
        },
        {
          title: "Audit-Trail",
          description: "Vollständige Historie jeder Bewegung, Anpassung und jedes Transfers.",
        },
      ],
    },
    workflowSection: {
      headline: "Ihr Weg zur Einrichtung",
      subheadline: "Vom ersten Login zum täglichen Betrieb in vier Schritten.",
      steps: [
        {
          title: "Struktur konfigurieren",
          description: "Standorte, Kategorien und Schwellenwerte einrichten.",
        },
        {
          title: "Rollen und Berechtigungen zuweisen",
          description: "Lagerrollen, Zugriffsebenen und Ausleihregeln definieren.",
        },
        {
          title: "Daten importieren",
          description: "Artikeldaten und Bestände importieren und validieren.",
        },
        {
          title: "Täglichen Workflow ausführen",
          description: "Bestände verfolgen, Nachbestellungen bearbeiten, Ausleihen verwalten.",
        },
      ],
    },
    governanceSection: {
      headline: "Steuern, wer was tut",
      subheadline: "Rollen, Berechtigungen und Freigabeketten von Tag eins an integriert.",
    },
    onboardingSection: {
      headline: "Für Ihr Team konfiguriert, nicht nur aktiviert",
      subheadline:
        "Wir kümmern uns um Bereitstellung, Konfiguration, Schulung und fortlaufenden Administrator-Support.",
    },
    pricingSection: {
      note:
        "Stockroom™ für Inventar startet ab EUR 500 pro Monat, je nach Benutzern und Konfiguration.",
      setupNote:
        "Die Einrichtung ist in den Foundation-Build-Paketen enthalten oder als feste Onboarding-Gebühr verfügbar.",
      ctaLabel: "Gespräch zur Preisgestaltung buchen",
    },
    finalCta: {
      headline: "Inventar mit klaren Kontrollen einrichten.",
      description:
        "Wir prüfen den Bestands-Workflow, empfehlen das Setup und nennen den Startpreis.",
      primaryLabel: "Gespräch buchen",
      secondaryLabel: "Preise ansehen",
    },
  },
  tasks: {
    hero: {
      productDescriptor: "für Aufgaben",
      headline: "Aufgaben- und Arbeitsmanagement, konfiguriert für verlässliche Ergebnisse.",
      subheadline:
        "Arbeit planen, Zuständigkeiten zuweisen und Fortschritte sichtbar halten. Bereitgestellt mit Ihren Projektstrukturen, Workflows und Teamrollen.",
      primaryCtaLabel: "Demo buchen",
      secondaryCtaLabel: "Wie das Onboarding funktioniert",
    },
    previewSection: {
      headline: "Cadence in Aktion",
      subheadline: "Boards, Listen, Freigaben und Zeitpläne in einem gemeinsamen Arbeitsbereich.",
      frameTitle: "Cadence Tasks",
      searchPlaceholder: "Aufgaben, Projekte suchen...",
      filters: ["Projekt", "Beauftragter"],
      tabLabels: ["Board", "Liste", "Freigaben", "Zeitplan"],
    },
    personaSection: {
      headline: "Gebaut für Teams, die Ergebnisse liefern",
      subheadline:
        "Egal, ob Sie Projekte verwalten, Teams koordinieren oder Freigaben verfolgen.",
    },
    problemSection: {
      headline: "Ersetzen Sie das Chaos",
      subheadline:
        "Wechseln Sie von verstreuten Chat-Threads und manuellem Tracking zu strukturiertem Aufgabenmanagement.",
      items: [
        { before: "Aufgaben in Chat-Threads verfolgt", after: "Strukturierte Aufgaben-Boards mit Fristen und Inhabern" },
        { before: "Keine klare Zuständigkeit oder Rechenschaftspflicht", after: "Jede Aufgabe mit sichtbarem Status zugewiesen" },
        { before: "Fortschritt manuell in Meetings berichtet", after: "Echtzeit-Boards und -Dashboards" },
        { before: "Wiederkehrende Arbeit geht unter", after: "Automatisierte wiederkehrende Aufgaben mit Erinnerungen" },
      ],
    },
    outcomesSection: {
      headline: "Was sich am ersten Tag ändert",
      subheadline: "Klarer, sofortiger Nutzen – keine Versprechungen.",
      snapshotLabel: "Aktivitäts-Schnappschuss",
      items: [
        {
          headline: "Klare Zuweisungen und Fristen",
          description: "Jede Aufgabe hat einen Inhaber, ein Fälligkeitsdatum und einen sichtbaren Status.",
        },
        {
          headline: "Weniger untergegangene Aufgaben",
          description: "Nichts geht in Chat-Threads oder verstreuten Tabellenkalkulationen verloren.",
        },
        {
          headline: "Bessere Koordination zwischen den Teams",
          description: "Teamübergreifende Sichtbarkeit ohne Mikromanagement.",
        },
        {
          headline: "Sichtbarer Fortschritt ohne manuelle Updates",
          description: "Status-Boards und Berichte aktualisieren sich automatisch, wenn Arbeit erledigt wird.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Kernfunktionen",
      subheadline: "Alles, was Sie brauchen, konfiguriert und einsatzbereit.",
      items: [
        {
          title: "Kanban-Boards",
          description: "Visuelle Boards mit Drag-and-Drop-Phasen und Swimlanes.",
        },
        {
          title: "Aufgabenzuweisungen",
          description: "Weisen Sie Inhaber, Beobachter und Fälligkeitstermine mit Benachrichtigungen zu.",
        },
        {
          title: "Freigabe-Workflows",
          description: "Integrierte Überprüfungs- und Abnahme-Schritte für Lieferergebnisse.",
        },
        {
          title: "Projekt-Zeitpläne",
          description: "Gantt-Ansichten mit Meilensteinen und Abhängigkeiten.",
        },
        {
          title: "Wiederkehrende Aufgaben",
          description: "Automatische Aufgabenerstellung nach Zeitplan mit Vorlagen.",
        },
        {
          title: "Fortschritts-Dashboards",
          description: "Abschlussraten, überfällige Elemente und Ansichten der Team-Arbeitslast.",
        },
      ],
    },
    workflowSection: {
      headline: "Ihr Weg zur Einrichtung",
      subheadline: "Vom ersten Login zum täglichen Betrieb in vier Schritten.",
      steps: [
        {
          title: "Struktur konfigurieren",
          description: "Projekte, Workflow-Phasen und Vorlagen einrichten.",
        },
        {
          title: "Rollen und Berechtigungen zuweisen",
          description: "Teamrollen, Aufgabensichtbarkeit und Freigabeabläufe definieren.",
        },
        {
          title: "Daten importieren",
          description: "Bestehende Aufgaben und wiederkehrende Elemente importieren.",
        },
        {
          title: "Täglichen Workflow ausführen",
          description: "Aufgaben zuweisen, Fortschritt verfolgen, Lieferergebnisse fertigstellen.",
        },
      ],
    },
    governanceSection: {
      headline: "Steuern, wer was tut",
      subheadline: "Rollen, Berechtigungen und Freigabeketten von Tag eins an integriert.",
    },
    onboardingSection: {
      headline: "Für Ihr Team konfiguriert, nicht nur aktiviert",
      subheadline:
        "Wir kümmern uns um Bereitstellung, Konfiguration, Schulung und fortlaufenden Administrator-Support.",
    },
    pricingSection: {
      note:
        "Cadence™ für Aufgaben startet ab EUR 500 pro Monat, je nach Benutzern und Konfiguration.",
      setupNote:
        "Die Einrichtung ist in den Foundation-Build-Paketen enthalten oder als feste Onboarding-Gebühr verfügbar.",
      ctaLabel: "Gespräch zur Preisgestaltung buchen",
    },
    finalCta: {
      headline: "Arbeit in einem System steuern.",
      description:
        "Wir prüfen den Aufgabenfluss, empfehlen das Setup und nennen den Startpreis.",
      primaryLabel: "Gespräch buchen",
      secondaryLabel: "Preise ansehen",
    },
  },
};
