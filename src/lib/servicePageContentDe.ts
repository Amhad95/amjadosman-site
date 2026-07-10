import type { ServiceDetailId, ServiceDetailContent } from "./servicePageContent";

export const servicePageContentDe: Record<ServiceDetailId, ServiceDetailContent> = {
  brand: {
    hero: {
      eyebrow: "Marken- und Wachstumssysteme",
      headline: "Geben Sie Käufern einen klareren Grund, Ihnen zu vertrauen.",
      subheadline:
        "Ich gestalte Marke, Website und Vertriebsmaterialien so, dass sich das Unternehmen klarer, etablierter und leichter wählbar anfühlt.",
      primaryCtaLabel: "Preise ansehen",
      secondaryCtaLabel: "Gespräch buchen",
    },
    summaryPanel: {
      mostRequested: {
        label: "Am häufigsten angefragt",
        title: "Website-Refresh",
        body: "Oft kombiniert mit klarerer Botschaft und Fallstudien-Struktur.",
      },
      typicalStart: {
        label: "Typischer Start",
        title: "Brand-Sprint",
        body: "Ein überschaubarer Weg, das Fundament zu festigen, bevor es über alle Kanäle hinweg skaliert wird.",
      },
      includedLabel: "In diesem Service enthalten",
      readyToScopeLabel: "Bereit zur Definition",
      includedItems: ["Markensystem", "Website und CMS", "Vertriebsmaterialien"],
    },
    outcomesSection: {
      eyebrow: "Was sich verbessert",
      headline:
        "Was sich ändert, wenn Ihre Marke und Website endlich an einem Strang ziehen",
      subheadline:
        "Dieser Service ist für Unternehmen gedacht, die bereits gute Arbeit leisten, diese Qualität aber den Käufern nicht klar genug präsentieren.",
      items: [
        {
          title: "Ein stärkerer erster Eindruck",
          body: "Das Unternehmen wirkt auf den ersten Blick etablierter, stimmiger und vertrauenswürdiger.",
        },
        {
          title: "Klarere Positionierung",
          body: "Interessenten verstehen sofort, was Sie tun, was Ihr Angebot auszeichnet und warum sie weiterlesen sollten.",
        },
        {
          title: "Einheitliche Vertriebsmaterialien",
          body: "Präsentationen, Angebote und One-Pager driften nicht mehr jedes Mal auseinander, wenn sie von Grund auf neu erstellt werden.",
        },
        {
          title: "Ein System, das dauerhaft funktioniert",
          body: "Vorlagen, CMS-Struktur und Richtlinien machen zukünftige Aktualisierungen weitaus weniger chaotisch.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "Warum Kunden uns beauftragen",
      headline:
        "Das Unternehmen fühlt sich intern gut an, aber der Außenauftritt hinkt noch hinterher",
      subheadline:
        "Wenn Glaubwürdigkeit, Konversion oder Konsistenz schwach sind, spüren Käufer das, noch bevor jemand aus dem Team die Details erklären kann.",
      reasons: [
        "Die Arbeit ist stark, aber Marke und Website verkaufen sie unter Wert.",
        "Käufer gewinnen auf der aktuellen Website nicht genügend Klarheit oder Vertrauen.",
        "Das Unternehmen ist gewachsen, aber seine Materialien wirken immer noch zusammengestückelt.",
        "Sie müssen Ihre Geschichte vor einem Launch, einem Wachstumsschub oder einem Vertriebszyklus schärfen.",
      ],
    },
    deliverablesSection: {
      title: "Was geliefert wird",
      items: [
        {
          title: "Markensystem",
          body: "Identitätsrichtung, visuelle Regeln, Botschaftshierarchie und wiederverwendbare Vorlagen, die verhindern, dass die Marke abdriftet.",
        },
        {
          title: "Website und CMS",
          body: "Seiten, Struktur und Veröffentlichungslogik, die sich an Käuferfragen und dem Konversionspfad orientieren, nicht nur an der Seitenzahl.",
        },
        {
          title: "Vertriebsmaterialien",
          body: "Präsentationen, Angebote und Fallstudien-Formate, die mit der Marke konsistent sind und sich unter Zeitdruck leichter aktualisieren lassen.",
        },
      ],
    },
    signalSection: {
      eyebrow: "Signalpunkte",
      headline: "Wo der Unterschied meist zuerst spürbar ist",
      subheadline:
        "Dies sind die Teile des Marken- und Wachstumssystems, die nach der Bereinigung tendenziell schneller Vertrauen bei Käufern aufbauen.",
      items: [
        {
          title: "Website-Hierarchie",
          body: "Klarere Seitenstruktur, stärkere Platzierung von Nachweisen und eindeutigere Logik für den nächsten Schritt.",
        },
        {
          title: "Wiederverwendbare Materialien",
          body: "Materialien, die so aufgebaut sind, dass das Team neue Inhalte erstellen kann, ohne jedes Mal das Design neu erfinden zu müssen.",
        },
        {
          title: "Markenkonsistenz",
          body: "Das Unternehmen präsentiert sich auf Websites, in Dokumenten und Präsentationen wieder wie aus einem Guss.",
        },
        {
          title: "Sicherheit im Gespräch",
          body: "Eine stärkere visuelle und verbale Stimmigkeit führt in der Regel dazu, dass das Unternehmen ernsthafter wahrgenommen wird.",
        },
      ],
    },
    controlsSection: {
      eyebrow: "Kontrollmechanismen",
      headline: "Was die Workflows benutzbar und sicher hält",
      subheadline:
        "Praktische Automatisierung erfordert mehr als nur ein Modell. Sie benötigt Freigaben, Transparenz und Regeln für Fälle, in denen die Zuverlässigkeit gering ist.",
      items: [
        "Menschliche Freigaben, wo der Workflow noch menschliches Urteilsvermögen erfordert",
        "Rollenspezifische Berechtigungen für Quellsysteme und Ausgaben",
        "Audit-Protokolle und Monitoring für Transparenz",
        "Fallback-Pfade, damit Fehler nicht unbemerkt bleiben",
      ],
    },
    pricingSection: {
      eyebrow: "Preise",
      headline: "Wie Kunden üblicherweise starten",
    },
    deliverySection: {
      subheadline:
        "Dieser Service ist so strukturiert, dass Entscheidungen frühzeitig getroffen werden, in Phasen gebaut wird und Sie ein System erhalten, das sich nach dem Launch problemlos weiterentwickeln lässt.",
      steps: [
        {
          title: "Positionierung klären",
          description:
            "Wir stimmen uns über Zielgruppe, Angebot, Nachweise und die Teile der aktuellen Marke ab, die beibehalten, geschärft oder ersetzt werden müssen.",
        },
        {
          title: "Das System formen",
          description:
            "Kernbotschaften, Seitenstruktur und wiederverwendbare Materialien werden definiert, bevor sich die Detailarbeit vervielfacht.",
        },
        {
          title: "Die sichtbare Ebene bauen",
          description:
            "Marke, Website und Vertriebsmaterialien werden in Meilensteinen umgesetzt, damit das Feedback fokussiert bleibt.",
        },
        {
          title: "Launch und Übergabe",
          description:
            "Vorlagen, Logik und Veröffentlichungsrichtlinien werden übergeben, damit das Unternehmen das System optimal weiterführen kann.",
        },
        {
          title: "Bei Bedarf weiter verbessern",
          description:
            "Support-Verträge (Retainer) können Aktualisierungen, neue Seiten und zukünftige Materialien abdecken, ohne bei Null anfangen zu müssen.",
        },
      ],
    },
    faqSection: {
      eyebrow: "FAQ",
      headline: "Häufige Fragen vor dem Start",
      subheadline:
        "Wenn Sie bereits wissen, dass Sie stärkere Marken- und Website-Fundamente benötigen, sind dies die praktischen Fragen, die als Nächstes auftauchen.",
      items: [
        {
          q: "Können wir nur mit der Website beginnen?",
          a: "Ja. Viele Kunden starten dort. Wenn die Botschaft oder Identität zuerst geschärft werden muss, weisen wir frühzeitig darauf hin, damit die Website nicht dieselben Schwachstellen übernimmt.",
        },
        {
          q: "Schreiben Sie die Texte?",
          a: "Ich kann das Messaging-Framework, die Seitenstruktur und die inhaltliche Ausrichtung gestalten. Ein vollständiges Copywriting kann bei Bedarf ebenfalls enthalten sein.",
        },
        {
          q: "Können wir nach dem Launch selbst Änderungen vornehmen?",
          a: "Ja. Das Ziel ist ein System, das Ihr Unternehmen selbstständig weiterverwenden kann, und kein einmaliger visueller Refresh, der schwer zu pflegen ist.",
        },
        {
          q: "Arbeiten Sie nur mit einem bestimmten CMS?",
          a: "Nein. We recommend the Setup, das zu Ihrer Veröffentlichungsfrequenz, Teamgröße und technischen Vorkenntnissen passt.",
        },
        {
          q: "Können Sie mit einer bestehenden Marke arbeiten?",
          a: "Ja. Ich kann das Bestehende verfeinern, fehlende Teile hinzufügen oder ein saubereres System erstellen, falls das aktuelle System hinderlich ist.",
        },
        {
          q: "Was ist in einem Retainer enthalten?",
          a: "Retainer decken Aktualisierungen, neue Seiten, Designanpassungen und iterative Verbesserungen ab, sobald die wichtigsten Grundlagen stehen.",
        },
      ],
    },
    ctaBand: {
      headline: "Stärken Sie das Vertrauen der Käufer.",
      description:
        "Ich werde das erste Marken-, Website- oder Vertriebsprojekt eingrenzen und die Preise aufzeigen.",
      primaryLabel: "Gespräch buchen",
      secondaryLabel: "Preise ansehen",
    },
  },
  ops: {
    hero: {
      eyebrow: "Interne Operationssysteme",
      headline: "Ersetzen Sie verstreute Dateien und internes Sonderwissen durch ein übersichtlicheres Betriebssystem.",
      subheadline:
        "Ich strukturiere die Systeme hinter dem Unternehmen, damit Informationen leichter zu finden sind, wiederkehrende Arbeiten einfacher ablaufen und das Onboarding weniger täglichen Aufwand erzeugt.",
      primaryCtaLabel: "Preise ansehen",
      secondaryCtaLabel: "Gespräch buchen",
    },
    summaryPanel: {
      mostRequested: {
        label: "Am häufigsten angefragt",
        title: "SOP-Bibliothek",
        body: "Meist kombiniert mit klarerer Dokumentenstruktur und Zuständigkeitsregeln.",
      },
      typicalStart: {
        label: "Typischer Start",
        title: "Ops-Audit",
        body: "Ein überschaubarer Weg, um zu sehen, was neu aufgebaut werden muss und was bleiben kann.",
      },
      includedLabel: "In diesem Service enthalten",
      readyToScopeLabel: "Bereit zur Definition",
      includedItems: [
        "SharePoint-Architektur",
        "SOP-Bibliothek",
        "Onboarding und Governance",
      ],
    },
    outcomesSection: {
      eyebrow: "Was sich verbessert",
      headline:
        "Was sich ändert, sobald die operative Ebene nicht mehr nur in den Köpfen der Mitarbeiter existiert",
      subheadline:
        "Dieser Service ist für Unternehmen gedacht, die hinter den Kulissen mehr Klarheit benötigen, damit die tägliche Arbeit einfacher läuft und leichter übergeben werden kann.",
      items: [
        {
          title: "Weniger Zeitverlust durch Dateichaos",
          body: "Die Mitarbeiter wissen, wo Dinge liegen, wie der Zugriff funktioniert und wo wiederkehrende Aufgaben starten sollen.",
        },
        {
          title: "Prozesse, denen man wirklich folgen kann",
          body: "Wiederkehrende Arbeit lässt sich einfacher wiederholen, da Schritte, Zuständigkeiten und Erwartungen klarer sind.",
        },
        {
          title: "Schnelleres Onboarding",
          body: "Neue Mitarbeiter erhalten einen strukturierteren Einarbeitungspfad, anstatt die Rolle durch das mühsame Erfragen von Sonderwissen zu erlernen.",
        },
        {
          title: "Bessere operative Übergaben",
          body: "Freigaben, Anfragen und wiederholte Arbeiten durchlaufen planbarere Pfade statt unendlicher E-Mail-Ketten.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "Warum Kunden uns beauftragen",
      headline:
        "Das Unternehmen hat Dynamik, aber die interne Struktur ist noch nicht hinterhergekommen",
      subheadline:
        "Diese Lücke zeigt sich meist in Form von sich wiederholenden Fragen, holprigen Übergaben, schleppendem Onboarding und zu großer operativer Abhängigkeit von wenigen Personen.",
      reasons: [
        "Das Unternehmen ist gewachsen, aber die interne Struktur dahinter wirkt noch immer improvisiert.",
        "Führungskräfte erklären dieselben Aufgaben immer wieder, weil die Prozessebene zu dünn ist.",
        "Dateien, Berechtigungen oder Dokumenten-Zuständigkeiten wirken ungeordnet und inkonsistent.",
        "Das Onboarding hängt zu sehr von persönlicher Begleitung und Gedächsleistung ab statt von einem wiederholbaren System.",
      ],
    },
    deliverablesSection: {
      title: "Was geliefert wird",
      items: [
        {
          title: "Informationsstruktur",
          body: "SharePoint-Architektur, Bibliothekslogik, Berechtigungen und eine Dokumentenorganisation, in der man sich leichter zurechtfindet.",
        },
        {
          title: "SOPs und Vorlagen",
          body: "Wiederkehrende Arbeit so klar dokumentiert, dass wiederholte Erklärungen, Fehler und die Abhängigkeit von Managern reduziert werden.",
        },
        {
          title: "Onboarding und Governance",
          body: "Rollenhandbücher, Governance-Notizen und operative Erwartungen, die eine solidere Basis für das Team schaffen.",
        },
      ],
    },
    signalSection: {
      eyebrow: "Signalpunkte",
      headline: "Wo der Unterschied meist zuerst spürbar ist",
      subheadline:
        "Dies sind die operativen Verbesserungen, die Kunden in der Regel schnell spüren, sobald die Struktur klarer wird.",
      items: [
        {
          title: "Auffindbarkeit verbessert sich",
          body: "Die richtigen Dokumente und Prozessreferenzen sind nicht mehr in persönlichen Ordnern oder im Gedächtnis vergraben.",
        },
        {
          title: "Anfragen laufen reibungsloser",
          body: "Freigaben und wiederkehrende Aufgaben folgen einem sichtbaren Pfad statt einem improvisierten.",
        },
        {
          title: "Dokumentation wird nutzbar",
          body: "SOPs sind so geschrieben, dass sie befolgt, aktualisiert und genau dort gefunden werden, wo die Arbeit stattfindet.",
        },
        {
          title: "Zuständigkeit wird deutlicher",
          body: "Berechtigungen, Aktualisierungszuständigkeiten und Governance-Regeln sind nicht mehr nur impliziert, sondern explizit.",
        },
      ],
    },
    pricingSection: {
      eyebrow: "Preise",
      headline: "Wie Kunden üblicherweise starten",
    },
    deliverySection: {
      subheadline:
        "Dieser Service ist so konzipiert, dass er operative Reibungsverluste schnell reduziert, ohne zu einer sechsmonatigen Dokumentationsübung zu werden.",
      steps: [
        {
          title: "Ist-Zustand auditieren",
          description:
            "Wir identifizieren die Reibungspunkte, sich wiederholenden Fragen und strukturellen Probleme, die den täglichen Arbeitsfluss hemmen.",
        },
        {
          title: "Betriebsmodell definieren",
          description:
            "Wir legen Zuständigkeiten, Zugriffsberechtigungen, Dokumentenstruktur und die Workflows fest, die wiederholbar werden müssen.",
        },
        {
          title: "Die neue Ebene aufbauen",
          description:
            "Die Struktur, SOPs, Vorlagen und Anfragepfade werden in einer logischen und nutzbaren Reihenfolge erstellt, nicht alle auf einmal.",
        },
        {
          title: "Schulen und übergeben",
          description:
            "Führungskräfte und Teammitglieder erhalten die nötige Anleitung, um das System optimal zu nutzen und aktuell zu halten.",
        },
        {
          title: "Bei Bedarf instand halten",
          description:
            "Support-Verträge (Retainer) können Aktualisierungen, die Erstellung neuer SOPs und fortlaufende Verbesserungen nach dem Start abdecken.",
        },
      ],
    },
    faqSection: {
      eyebrow: "FAQ",
      headline: "Häufige Fragen vor dem Start",
      subheadline:
        "Wenn Sie wissen, dass das Unternehmen sauberere Abläufe benötigt, sind dies die praktischen Fragen, die meist als Nächstes gestellt werden.",
      items: [
        {
          q: "Arbeiten Sie mit einem bestehenden SharePoint-Setup?",
          a: "Ja. Ich kann das Bestehende umstrukturieren, vereinfachen oder eine sauberere operative Ebene um die Teile herum aufbauen, die erhaltenswert sind.",
        },
        {
          q: "Wie viele SOPs sind normalerweise enthalten?",
          a: "Das hängt vom Umfang ab. Wir beginnen in der Regel mit den Workflows, die die meiste Reibung oder Wiederholung verursachen, damit die Dokumentation schnell Nutzen bringt.",
        },
        {
          q: "Können Sie die Mitarbeiter nach dem Rollout schulen?",
          a: "Ja. Die Übergabe kann Einweisungen, Schulungen und Richtlinien zur Systemverantwortung beinhalten, um die Pflege des Systems zu erleichtern.",
        },
        {
          q: "Was ist, wenn wir Google Workspace oder eine andere Plattform nutzen?",
          a: "Es gelten die gleichen operativen Prinzipien. Ich kann die Struktur an die Plattform anpassen, die Ihr Unternehmen tatsächlich nutzt.",
        },
        {
          q: "Wie lange dauert die Einrichtung normalerweise?",
          a: "Kleinere Bereinigungen können schnell gehen. Umfassendere Architektur- und SOP-Projekte dauern in der Regel einige Wochen, je nach Anzahl der beteiligten Workflows.",
        },
        {
          q: "Können Support-Verträge die Erstellung neuer SOPs beinhalten?",
          a: "Ja. Die Stufen Standard und Priority können neue Dokumentationen, Aktualisierungen und laufende Workflow-Verbesserungen abdecken, sobald die Haupteinrichtung abgeschlossen ist.",
        },
      ],
    },
    ctaBand: {
      headline: "Bereinigen Sie Ihre Abläufe.",
      description: "Ich werde das erste operative Projekt eingrenzen und die Preise aufzeigen.",
      primaryLabel: "Gespräch buchen",
      secondaryLabel: "Preise ansehen",
    },
  },
  agents: {
    hero: {
      eyebrow: "KI-Agenten und Automatisierung",
      headline: "Automatisieren Sie wiederkehrende Arbeit, ohne die Kontrolle abzugeben.",
      subheadline:
        "Ich entwerfe praktische Agenten-Workflows für Weiterleitung, Entwurfserstellung, Berichterstattung und Wissensunterstützung – mit von Anfang an integrierten Freigaben, Grenzen und sicherer Fehlerbehandlung.",
      primaryCtaLabel: "Preise ansehen",
      secondaryCtaLabel: "Gespräch buchen",
    },
    summaryPanel: {
      mostRequested: {
        label: "Am häufigsten angefragt",
        title: "Eingangsautomatisierung",
        body: "Ein sicherer Startpunkt, wenn die wiederkehrende Weiterleitung Zeit frisst.",
      },
      typicalStart: {
        label: "Typischer Start",
        title: "Agenten-Pilotprojekt",
        body: "Ein überschaubarer Weg, den Nutzen zu beweisen, bevor auf weitere Workflows skaliert wird.",
      },
      includedLabel: "In diesem Service enthalten",
      readyToScopeLabel: "Bereit zur Definition",
      includedItems: [
        "Workflow-Automatisierung",
        "Wissensunterstützung",
        "Freigaben und Kontrollen",
      ],
    },
    outcomesSection: {
      eyebrow: "Was sich verbessert",
      headline: "Was sich ändert, wenn die Automatisierung um den echten Workflow herum gebaut wird",
      subheadline:
        "Dieser Service ist für Teams gedacht, die durch Automatisierung Zeit sparen, Entscheidungen unterstützen und ausreichend Transparenz behalten möchten, um dem System im Alltag zu vertrauen.",
      items: [
        {
          title: "Weniger wiederkehrende administrative Arbeit",
          body: "Automatisierungen übernehmen wiederkehrende Weiterleitungen, Entwürfe, Zusammenfassungen und Vorbereitungsarbeiten, die nicht jedes Mal die volle menschliche Aufmerksamkeit erfordern sollten.",
        },
        {
          title: "Reibungslosere Übergaben",
          body: "Anfragen durchlaufen transparentere und planbarere Pfade, anstatt in einzelnen Posteingängen liegenzubleiben.",
        },
        {
          title: "Schnellerer Zugriff auf freigegebenes Wissen",
          body: "Teams erhalten fundierte Antworten und Kontext aus den richtigen Quellen, ohne in verschiedenen Tools suchen oder dieselben Fragen erneut stellen zu müssen.",
        },
        {
          title: "Sicherere Automatisierung",
          body: "Freigaben, Protokolle und Fallback-Logiken machen die Workflows vertrauenswürdiger, da Sie genau sehen können, was sie tun.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "Warum Kunden uns beauftragen",
      headline:
        "Die Chance ist offensichtlich, aber das Unternehmen benötigt einen sichereren Weg für den Anfang",
      subheadline:
        "Die meisten Teams benötigen anfangs keine große KI-Strategie. Sie brauchen einen einzigen, überschaubaren Workflow, der den Nutzen belegt, Freigaben beibehält und keine neuen Risiken schafft.",
      reasons: [
        "Dieselbe repetitive Arbeit raubt Zeit im Support, in den Abläufen oder in der Berichterstattung.",
        "Das Unternehmen ist neugierig auf KI, wünscht sich aber ein praktisches Betriebsmodell statt eines riskanten Sprungs ins Ungewisse.",
        "Wissen ist über Tools und Personen verstreut, was einfache Antworten langsamer macht, als sie sein sollten.",
        "Sie möchten durch Automatisierung Zeit sparen, ohne menschliche Kontrollpunkte zu entfernen, an denen es auf Urteilsvermögen ankommt.",
      ],
    },
    deliverablesSection: {
      title: "Was geliefert wird",
      items: [
        {
          title: "Workflow-Automatisierung",
          body: "Eingang, Weiterleitung, Entwürfe, Zusammenfassungen und wiederholbare operative Aufgaben, die um den tatsächlichen Workflow herum entwickelt wurden, statt eines Demo-Szenarios.",
        },
        {
          title: "Wissensunterstützung",
          body: "Berechtigungsbewusste Antworten und Suchabläufe, die auf freigegebenem Quellenmaterial basieren, bei Bedarf mit Kontext und Quellenangaben.",
        },
        {
          title: "Kontrollschicht",
          body: "Freigaben, Rollengrenzen, Protokollierung und Eskalationsregeln, die den Workflow transparent und vertrauenswürdig machen.",
        },
      ],
    },
    signalSection: {
      eyebrow: "Signalpunkte",
      headline: "Wo der Unterschied meist zuerst spürbar ist",
      subheadline:
        "Dies sind die Verbesserungen, die Kunden meist früh bemerken, wenn ein Automatisierungs-Pilotprojekt für die richtige repetitive Arbeit konzipiert wurde.",
      items: [
        {
          title: "Weniger manuelle Weiterleitung",
          body: "Anfragen und Eingaben gelangen schneller an den richtigen Ort, wodurch das Team weniger sortieren und nachfassen muss.",
        },
        {
          title: "Bessere erste Entwürfe",
          body: "Die Automatisierung schafft einen nützlichen Ausgangspunkt, sodass die Mitarbeiter mehr Zeit mit der Überprüfung und Verbesserung verbringen, anstatt bei Null anzufangen.",
        },
        {
          title: "Operative Transparenz",
          body: "Monitoring und Protokolle erleichtern es zu verstehen, wie sich der Workflow verhält und wo Anpassungen erforderlich sind.",
        },
        {
          title: "Sicherere Fehlerbehandlung",
          body: "Unsichere Fälle werden eskaliert, anstatt eine Antwort vorzutäuschen – das macht ein Pilotprojekt im echten Leben praxistauglich.",
        },
      ],
    },
    pricingSection: {
      eyebrow: "Preise",
      headline: "Wie Kunden üblicherweise starten",
    },
    deliverySection: {
      subheadline:
        "Dieser Service ist so konzipiert, dass er den Nutzen mit einem einzigen, überschaubaren Workflow beweist, bevor Sie entscheiden, wie weit Sie den Ansatz skalieren möchten.",
      steps: [
        {
          title: "Workflow abbilden",
          description:
            "Wir isolieren die repetitive Arbeit, Entscheidungspunkte und die am Anwendungsfall beteiligten Quellsysteme.",
        },
        {
          title: "Kontrollpunkte definieren",
          description:
            "Freigaben, Protokolle, Eskalationsregeln und Zugriffsgrenzen werden vor dem Start des Builds festgelegt.",
        },
        {
          title: "Piloten bauen",
          description:
            "Der Workflow wird kontrolliert implementiert und getestet, sodass sein tatsächliches Verhalten sichtbar wird.",
        },
        {
          title: "Vorsichtig launchen",
          description:
            "Das erste Release geht live, während das Monitoring und die menschlichen Kontrollpunkte weiterhin aktiv sind.",
        },
        {
          title: "Optimieren und erweitern",
          description:
            "Wenn sich das Pilotprojekt bewährt, verfeinern wir es oder übertragen dasselbe Betriebsmodell auf angrenzende Workflows.",
        },
      ],
    },
    faqSection: {
      eyebrow: "FAQ",
      headline: "Häufige Fragen vor dem Start",
      subheadline:
        "Wenn das Unternehmen praktische Automatisierung statt vager KI-Experimente wünscht, sind dies die Fragen, die meist als Nächstes kommen.",
      items: [
        {
          q: "Ersetzen Automatisierungen unsere Mitarbeiter?",
          a: "Nein. Das Ziel ist es, repetitive Arbeit zu entfernen und Übergaben zu verbessern, damit die Mitarbeiter mehr Zeit für Entscheidungen, Beziehungen und Ausnahmefälle haben.",
        },
        {
          q: "Können wir mit einem einzelnen Anwendungsfall starten?",
          a: "Ja. In den meisten Fällen ist dies der richtige Startweg. Ein eingegrenztes Pilotprojekt ist der schnellste Weg, den Nutzen zu belegen und die operative Eignung zu prüfen.",
        },
        {
          q: "Wie handhaben Sie Sicherheit und Berechtigungen?",
          a: "Wir grenzen den Zugriff sorgfältig ein, behalten Freigaben dort bei, wo sie benötigt werden, und fügen Protokolle hinzu, damit das Team überprüfen kann, was passiert ist und warum.",
        },
        {
          q: "Was passiert, wenn der Workflow unsicher ist?",
          a: "Er sollte sauber eskalieren, statt Antworten vorzutäuschen. Eine sichere Fehlerbehandlung ist Teil der Lieferung, kein nachträglicher Gedanke.",
        },
        {
          q: "Welche Plattformen nutzen Sie?",
          a: "Wir wählen den Stack basierend auf dem Workflow, den Zuverlässigkeitsanforderungen und den bereits vorhandenen Systemen. Das Betriebsmodell ist wichtiger als das trendigste Tool.",
        },
        {
          q: "Überwachen Sie Workflows nach dem Deployment?",
          a: "Ja. Retainer können das Monitoring, Logik-Updates, Tuning und fortlaufende Workflow-Verbesserungen nach dem Launch abdecken.",
        },
      ],
    },
    ctaBand: {
      headline: "Automatisierung sicher erproben.",
      description:
        "Ich werde den ersten Workflow identifizieren, dessen Automatisierung sich lohnt, und die Preise aufzeigen.",
      primaryLabel: "Gespräch buchen",
      secondaryLabel: "Preise ansehen",
    },
  },
};
