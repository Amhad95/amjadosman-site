import { type SiteContent } from "./content";

export const siteContentFr: SiteContent = {
  meta: {
    title: "Amjad Osman - Marque, Opérations, Logiciels et Systèmes d'IA",
    description:
      "Amjad Osman aide les équipes en croissance à améliorer leur marque, leurs sites web, leurs opérations internes et leurs flux de travail d'IA pratiques avec une portée claire et une transition propre.",
  },

  navigation: {
    primary: [
      { label: "Services", href: "/services" },
      { label: "Logiciels", href: "/software" },
      { label: "Ressources", href: "/resources" },
      { label: "Travail", href: "/work" },
      { label: "Tarifs", href: "/pricing" },
      { label: "À propos", href: "/about" },
    ],
    servicesDropdown: [
      { label: "Aperçu des services", href: "/services" },
      { label: "Systèmes de marque et de croissance", href: "/services/brand" },
      { label: "Systèmes d'opérations internes", href: "/services/ops" },
      { label: "Agents d'IA et automatisation", href: "/services/agents" },
    ],
    resourcesDropdown: [
      { label: "Notes et idées", href: "/resources" },
      { label: "Outils d'aide", href: "/tools" },
    ],
    cta: { label: "Réserver un appel", href: "/book" },
    footer: [
      { label: "Processus de livraison", href: "/process" },
      { label: "Notes et idées", href: "/resources" },
      { label: "Outils d'aide", href: "/tools" },
      { label: "Contact", href: "/contact" },
      { label: "Confidentialité", href: "/privacy" },
      { label: "Conditions", href: "/terms" },
    ],
    languageToggle: {
      english: "EN",
      arabic: "عربي",
      label: "Langue",
    },
  },

  footer: {
    tagline:
      "Amjad Osman conçoit des systèmes de marque, d'opérations, de logiciels et d'IA qui aident les équipes en croissance à avancer avec plus de clarté.",
    pagesLabel: "Pages",
    legalLabel: "Légal",
    copyright: "Tous droits réservés.",
  },

  common: {
    skipToContent: "Passer au contenu principal",
    backToResources: "Retour aux ressources",
    backToWork: "Retour au travail",
    articleNotFound: "Article introuvable",
    articleUnavailable: "Cet article n'existe pas ou a été supprimé.",
    caseStudyNotFound: "Étude de cas introuvable",
    caseStudyUnavailable: "L'étude de cas que vous avez demandée n'est pas disponible pour le moment.",
    readArticle: "Lire l'article",
    caseStudies: "Études de cas",
    caseStudiesSubheadline: "Projets réels, résultats et leçons d'implémentation.",
    lastUpdatedLabel: "Dernière mise à jour",
    workSectionHeadline: "Ce que nous avons construit",
    workApproachLabel: "Approche",
    workDeliverablesLabel: "Livrables",
    workChangesLabel: "Ce qui a changé",
    clientProfileLabel: "Profil du client",
    challengeLabel: "Défi",
    resourceCtaHeadline: "Transformez ceci en livraison.",
    resourceCtaDescription:
      "Je peux implémenter le système derrière le guide et en montrer le prix.",
  },

  home: {
    hero: {
      headline:
        "Marque plus nette, opérations plus propres et systèmes d'IA pratiques pour les équipes en croissance.",
      subheadline:
        "J'aide les équipes ambitieuses à améliorer leur présentation, leur fonctionnement et leur mise à l'échelle. Systèmes de marque, sites web, procédures opérationnelles (SOP), conception de flux de travail et automatisation livrés avec une portée claire et une transition propre.",
      credibilityStrip:
        "Portée claire. Décisions plus rapides. Transition propre. Support continu si vous en avez besoin.",
      primaryCta: { label: "Réserver un appel", href: "/book" },
      secondaryCta: { label: "Lancer un audit gratuit", href: "/tools" },
    },
    whatWeDeliver: {
      headline: "Où j'interviens habituellement.",
      subheadline:
        "Support en matière de marque, web, opérations et logiciels livré comme un système pratique unique.",
      eyebrow: "Services",
      cards: [
        {
          title: "Marque et Communications",
          description:
            "Identité, messages et supports qui rendent l'entreprise plus établie.",
        },
        {
          title: "Web et CMS",
          description:
            "Sites web et pages de destination conçus pour convertir et rester faciles à mettre à jour.",
        },
        {
          title: "Applications de flux de travail",
          description:
            "Portails clients, tableaux de bord et outils opérationnels façonnés autour des flux de travail réels.",
        },
        {
          title: "Opérations internes",
          description:
            "SharePoint, procédures opérationnelles (SOP), modèles, packs d'intégration et fondations de gouvernance.",
        },
        {
          title: "Logiciels gérés",
          description:
            "CRM, espace de travail des opérations et systèmes de documents configurés autour de votre équipe.",
        },
        {
          title: "Agents d'IA",
          description:
            "Flux de travail d'agents pratiques pour le routage, la rédaction et le support de connaissances.",
        },
      ],
      cta: { label: "Voir les forfaits", href: "/pricing" },
    },
    outcomesImpact: {
      eyebrow: "Résultats",
      headline: "Ce que travailler ensemble produit réellement",
      subheadline:
        "Six choses avec lesquelles les clients repartent systématiquement — que l'engagement concerne la marque, les opérations, le web ou l'IA.",
      items: [
        {
          title: "Vous savez exactement ce que vous obtenez",
          body: 'Un brief d\'une page par engagement — aucune ambiguïté sur la portée, le calendrier ou ce que "terminé" signifie.',
        },
        {
          title: "Votre marque tient le coup sous pression",
          body: "Identité, messages et normes visuelles qui ne s'effondrent pas lorsqu'un nouveau membre rejoint l'équipe.",
        },
        {
          title: "Votre site justifie son coût",
          body: "Une présence web qui convertit les visiteurs en conversations, et pas seulement une brochure numérique.",
        },
        {
          title: "Votre équipe arrête de réexpliquer les choses",
          body: "Procédures opérationnelles (SOP), gouvernance et modèles que les nouvelles personnes peuvent assimiler sans être tenues par la main.",
        },
        {
          title: "Les décisions sont prises plus rapidement",
          body: "Tableaux de bord et briefs qui coupent la boucle des opinions et donnent de la clarté aux responsables quand ça compte.",
        },
        {
          title: "Des outils d'IA que votre équipe utilise vraiment",
          body: "Flux de travail avec des garde-fous et des leviers d'adoption — pas d'automatisation pour le simple plaisir de l'automatisation.",
        },
      ],
      primaryCta: { label: "Réserver un appel de 20 minutes", href: "/book" },
      secondaryCta: { label: "Voir les études de cas", href: "/work" },
    },
    deliveryProcess: {
      eyebrow: "Livraison",
      headline: "Livraison structurée, moins de réunions",
      subheadline:
        "Artéfacts clairs, mises à jour asynchrones et points de contrôle ciblés. Vous obtenez de l'élan sans chaos dans votre calendrier.",
      rhythmLabel: "Rythme de livraison",
      marqueeText:
        "[ prise en charge ] → [ cartographie ] → [ conception ] → [ construction ] → [ lancement ] → [ itération ] → ",
      expectationsLabel: "À quoi vous pouvez vous attendre",
      steps: [
        {
          title: "Alignement",
          ascii: "[ ALIGNEMENT ]",
          summary:
            "La portée, les mesures de succès, les contraintes et les risques sont verrouillés avant le début de la livraison.",
          artifacts: ["Brief d'une page", "Mesures de succès", "Risques & hypothèses"],
          touchpoints: "1 réunion de lancement",
        },
        {
          title: "Cartographie",
          ascii: "[ CARTOGRAPHIE ]",
          summary:
            "Les résultats de recherche et la cartographie des flux créent un modèle partagé pour la conception et l'implémentation.",
          artifacts: ["Parcours / carte des flux", "Ensemble d'exigences", "Liste de priorisation"],
          touchpoints: "1 révision",
        },
        {
          title: "Conception",
          ascii: "[ CONCEPTION ]",
          summary:
            "Les décisions concernant l'UX et l'interface sont validées tôt grâce à des boucles de feedback asynchrones.",
          artifacts: ["Prototype cliquable", "Spécifications de conception", "Plans de contenu"],
          touchpoints: "Révisions asynchrones + 1 point de contrôle",
        },
        {
          title: "Construction",
          ascii: "[ CONSTRUCTION ]",
          summary:
            "L'implémentation avance par incréments fonctionnels avec intégration et assurance qualité (QA) intégrées.",
          artifacts: ["Incréments fonctionnels", "Notes de QA", "Plan de lancement"],
          touchpoints: "Point de contrôle hebdomadaire de 20 min (seulement si nécessaire)",
        },
        {
          title: "Lancement",
          ascii: "[ LANCEMENT ]",
          summary:
            "Lancement avec transition, formation et un backlog pratique pour des améliorations continues.",
          artifacts: ["Pack de transition", "Plan de suivi", "Backlog d'itération"],
          touchpoints: "1 transition",
        },
      ],
      expectations: [
        "Mise à jour hebdomadaire asynchrone",
        "Journal des décisions",
        "Contrôle de la portée",
        "Démos fonctionnelles plutôt que diapositives",
      ],
    },
    outcomes: {
      headline: "Ce que les clients achètent réellement.",
      items: [
        "Une crédibilité qui conclut les affaires plus rapidement.",
        "Des systèmes internes que les gens utilisent réellement.",
        "Une documentation qui survit au roulement du personnel.",
        "Des logiciels qui restent adoptés.",
        "Moins de réunions. Une transition propre.",
      ],
    },
    howWeWork: {
      headline: "Livraison structurée. Réunions minimales.",
      steps: [
        { title: "Prise en charge", description: "Appel bref. Document d'exigences. Portée verrouillée." },
        {
          title: "Architecture",
          description: "Structure et spécifications confirmées avant la construction.",
        },
        { title: "Construction", description: "Exécution par sprints. Mises à jour asynchrones." },
        {
          title: "Transition",
          description: "Documentation, formation et transfert propre des fichiers.",
        },
        {
          title: "Retainer Optionnel",
          description: "Support mensuel si vous souhaitez une couverture continue.",
        },
      ],
      cta: { label: "Voir comment fonctionne la livraison", href: "/process" },
    },
    proofTiles: {
      headline: "Études de cas que vous pouvez évaluer rapidement.",
      subheadline:
        "Sélection de projets réels de stratégie, systèmes, produits et travaux de livraison.",
      eyebrow: "Travail",
      tiles: [
        {
          title: "Radiance Co. Ltd.",
          description: "Systèmes d'énergie solaire pour les établissements de santé dans la mer Rouge et à Kassala.",
        },
        {
          title: "TadmeenPro",
          description: "Un noyau opérationnel pour les assureurs, prêt pour l'IA.",
        },
        {
          title: "Plateforme Nationale de Facilitation des Échanges",
          description: "Une plateforme à guichet unique avec A4 Group pour une autorité confidentielle.",
        },
      ],
      tileCta: "Voir l'étude de cas",
      cta: { label: "Voir toutes les études de cas", href: "/work" },
    },
    aiTools: {
      eyebrow: "Outils d'aide",
      headline: "Obtenez un résultat utile en quelques minutes.",
      subheadline:
        "Ces outils gratuits donnent des brouillons et audits de surface. Utilisez-les maintenant ou laissez-moi implémenter les résultats correctement.",
      tools: [
        {
          title: "Générateur de brouillon de SOP",
          description:
            "Générez un brouillon structuré de SOP à partir d'une description de processus désordonnée.",
        },
        {
          title: "Audit de cohérence de marque",
          description:
            "Obtenez un rapport de cohérence à travers vos actifs avec des correctifs prioritaires.",
        },
        {
          title: "Critique de page de destination",
          description: "Recevez des notes sur les frictions de conversion et des correctifs de hiérarchie.",
        },
      ],
      cta: { label: "Explorer les outils d'aide", href: "/tools" },
    },
    pricingTeaser: {
      headline: "Forfaits clairs. Pas de facturation floue.",
      description:
        "Choisissez un forfait ciblé, un projet de livraison plus large ou un support continu. Chaque engagement commence par une portée, un calendrier et une prochaine étape concrète.",
      cta: { label: "Voir les tarifs et les forfaits", href: "/pricing" },
    },
    finalCta: {
      headline: "Réservez la bonne prochaine étape.",
      description: "Je peux vous aider à choisir le forfait de départ et vous montrer le prix.",
      primaryCta: { label: "Réserver un appel", href: "/book" },
      secondaryCta: { label: "Voir les tarifs", href: "/pricing" },
    },
  },

  services: {
    hero: {
      headline: "Choisissez la voie de service qui correspond à votre prochain goulot d'étranglement.",
      subheadline:
        "Que vous ayez besoin d'une présence sur le marché plus forte, d'opérations internes plus propres ou d'une automatisation pratique, je définis le travail autour de livrables utilisables sur lesquels votre équipe peut continuer à construire.",
      primaryCta: { label: "Réserver un appel", href: "/book" },
    },
    tracks: [
      {
        id: "external-credibility",
        title: "Voie A : Crédibilité externe",
        description: "Ce que les clients, les investisseurs et les partenaires voient.",
        items: [
          { title: "Système de marque", description: "Logo, identité, directives, modèles." },
          {
            title: "Site web et CMS",
            description: "Site marketing conçu pour la conversion et les mises à jour.",
          },
          {
            title: "Matériel de vente et de présentation",
            description: "Présentations, résumés, propositions qui concluent des affaires.",
          },
        ],
      },
      {
        id: "internal-execution",
        title: "Voie B : Exécution interne",
        description: "Ce que votre équipe utilise chaque jour.",
        items: [
          { title: "SharePoint", description: "Intranet, bibliothèques de documents, hubs d'équipe." },
          { title: "Bibliothèque de SOP", description: "Des procédures qui sont suivies." },
          {
            title: "Modèles et gouvernance",
            description: "Résultats cohérents, responsabilisation claire.",
          },
          { title: "Pack d'intégration", description: "Les nouvelles recrues sont productives plus rapidement." },
        ],
      },
      {
        id: "workflow-automation",
        title: "Voie C : Automatisation des flux de travail",
        description: "Des outils sur mesure qui s'adaptent à votre processus.",
        items: [
          { title: "Portails", description: "Interfaces orientées clients ou fournisseurs." },
          {
            title: "Tableaux de bord",
            description: "Visibilité opérationnelle sans le chaos des feuilles de calcul.",
          },
          { title: "Applications de flux de travail", description: "Approbations, requêtes, suivi." },
          {
            title: "Outils internes légers",
            description: "Solutions personnalisées pour des besoins spécifiques.",
          },
        ],
      },
    ],
    ctaBand: {
      primaryCta: { label: "Voir les tarifs et les forfaits", href: "/pricing" },
      secondaryCta: { label: "Réserver un appel", href: "/book" },
    },
  },

  software: {
    hero: {
      headline:
        "Logiciel opérationnel configuré autour de la façon dont votre équipe travaille réellement.",
      subheadline:
        "Je déploie des flux de travail ciblés de CRM, d'opérations et de documents afin que votre équipe obtienne un système utilisable, et non un autre outil à comprendre seule.",
      primaryCta: { label: "Réserver une démo", href: "/book" },
      secondaryCta: { label: "Réserver un appel", href: "/book" },
    },
    modules: {
      headline: "Modules de base disponibles sur abonnement.",
      items: [
        {
          title: "CRM (Base)",
          features: [
            "Contacts",
            "Pipeline",
            "Tâches",
            "Modèles d'e-mails",
            "Rapports de base",
          ],
        },
        {
          title: "Espace de travail des opérations",
          features: [
            "Requêtes et approbations",
            "Tickets internes",
            "Tableaux de bord",
            "Accès basé sur les rôles",
          ],
        },
        {
          title: "Centre de documents et de modèles",
          features: [
            "Bibliothèque centrale",
            "Contrôle de version",
            "Flux d'approbation",
            "Partage contrôlé",
          ],
        },
        {
          title: "Modules complémentaires optionnels",
          features: ["Gestion allégée des stocks", "Finance de base", "Rapports de terrain"],
          note: "Seulement si vous les voulez vraiment.",
        },
      ],
      keyLine:
        "Je ne propose que les modules que je peux implémenter correctement et soutenir sur le long terme.",
    },
    differentiator: {
      headline: "Des logiciels sans échec d'adoption.",
      points: [
        "Rôles et autorisations configurés pour votre structure.",
        "Migration propre depuis vos outils actuels.",
        "Intégration SharePoint là où c'est judicieux.",
        "Support mensuel inclus.",
      ],
    },
    pricing: {
      note: "L'abonnement logiciel commence à partir de 500 EUR par mois et par module.",
      setupNote:
        "La configuration est incluse dans les forfaits Foundation Build ou disponible séparément.",
      cta: { label: "Réserver un appel tarifaire", href: "/book" },
    },
  },

  tools: {
    hero: {
      headline: "Des outils d'aide qui transforment les entrées désordonnées en résultats structurés.",
      subheadline:
        "Lancez un audit de surface ou générez un brouillon pratique. Obtenez un point de départ utile en quelques minutes. Ensuite, décidez si vous voulez que je l'implémente correctement.",
      primaryCta: { label: "Lancer un audit gratuit", href: "#tools-list" },
      secondaryCta: { label: "Réserver un appel", href: "/book" },
    },
    list: [
      {
        title: "Générateur de brouillon de SOP",
        description:
          "Générez un brouillon structuré de SOP à partir d'une description de processus désordonnée.",
        illustration: "document" as const,
        href: "/tools/sop-builder",
      },
      {
        title: "Audit de cohérence de marque",
        description:
          "Obtenez un rapport de cohérence à travers vos actifs avec des correctifs prioritaires.",
        illustration: "brand" as const,
        href: "/tools/brand-audit",
      },
      {
        title: "Critique de page de destination",
        description: "Recevez des notes sur les frictions de conversion et des correctifs de hiérarchie.",
        illustration: "website" as const,
        href: "/tools/page-critique",
      },
      {
        title: "Cartographe de flux de processus",
        description: "Transformez les descriptions de flux de travail en diagrammes de processus visuels.",
        illustration: "tree" as const,
        href: "/tools/process-mapper",
      },
      {
        title: "Générateur d'exigences de tableau de bord",
        description: "Générez une spécification de tableau de bord à partir de vos besoins de reporting.",
        illustration: "dashboard" as const,
        href: "/tools/dashboard-builder",
      },
      {
        title: "Audit KPI",
        description:
          "Analysez vos métriques et obtenez des recommandations de suivi.",
        illustration: "chart" as const,
        href: "/tools/kpi-audit",
      },
    ],
    emailCapture: {
      headline: "Télécharger le rapport complet au format PDF.",
      description:
        "Entrez votre adresse e-mail et recevez un rapport téléchargeable ainsi qu'un plan d'implémentation d'une page.",
      buttonLabel: "Obtenir le PDF",
      successMessage: "Vérifiez votre boîte de réception pour le rapport.",
      downloadLabel: "Télécharger le PDF",
      followUpCta: { label: "Réserver un appel", href: "/book" },
    },
  },

  pricing: {
    hero: {
      headline: "Forfaits avec portée claire et tarification fixe.",
      subheadline: "Choisissez ce dont vous avez besoin. Obtenez un calendrier. Pas de facturation floue.",
    },
    decisionHelper: {
      headline: "Vous ne savez pas quoi choisir ?",
      options: [
        {
          label: "Nous avons besoin de crédibilité externe (Marque + Web)",
          anchor: "#external-credibility",
        },
        {
          label: "Nous avons besoin d'exécution interne (SharePoint + SOPs)",
          anchor: "#internal-execution",
        },
        {
          label: "Nous avons besoin des deux (Foundation Build)",
          anchor: "#foundation-build",
        },
      ],
    },
    includedStrip: {
      headline: "Inclus dans chaque forfait",
      items: [
        "Portée claire",
        "Calendrier",
        "Documentation",
        "Session de transition",
        "Retainer optionnel",
      ],
    },
    packages: {
      externalCredibility: {
        id: "external-credibility",
        title: "Crédibilité Externe",
        description: "Marque, web et supports de vente.",
        items: [
          {
            title: "Système de Marque",
            whoFor: "Les équipes sans identité cohérente.",
            startingPrice: "À partir de 8 000 EUR",
            includes: [
              "Logo et identité",
              "Directives de marque",
              "Pack de modèles",
              "Conception de supports",
            ],
          },
          {
            title: "Site Web et CMS",
            whoFor: "Les équipes qui ont besoin d'un site marketing qui convertit.",
            startingPrice: "À partir de 12 000 EUR",
            includes: [
              "Site marketing",
              "Configuration CMS",
              "Base SEO",
              "Analytique",
            ],
          },
          {
            title: "Matériel de Vente",
            whoFor: "Les équipes qui concluent des affaires avec des présentations obsolètes.",
            startingPrice: "À partir de 5 000 EUR",
            includes: ["Présentation de vente", "Résumés (One-pagers)", "Modèles de propositions"],
          },
        ],
      },
      internalExecution: {
        id: "internal-execution",
        title: "Exécution Interne",
        description: "SharePoint, SOPs et infrastructure opérationnelle.",
        items: [
          {
            title: "Configuration SharePoint",
            whoFor: "Les équipes avec un stockage de fichiers désordonné et sans intranet.",
            startingPrice: "À partir de 10 000 EUR",
            includes: [
              "Architecture d'intranet",
              "Bibliothèques de documents",
              "Hubs d'équipe",
              "Autorisations",
            ],
          },
          {
            title: "Bibliothèque de SOP",
            whoFor: "Les équipes sans processus documentés.",
            startingPrice: "À partir de 6 000 EUR",
            includes: [
              "Documentation de processus",
              "Cartographie des rôles",
              "Listes de contrôle QA",
              "Flux de mise à jour",
            ],
          },
          {
            title: "Pack d'Intégration",
            whoFor: "Les équipes avec une montée en compétences lente pour les nouvelles recrues.",
            startingPrice: "À partir de 4 000 EUR",
            includes: [
              "Guide de la première semaine",
              "Formation spécifique au rôle",
              "Listes de contrôle",
              "Vidéos explicatives",
            ],
          },
        ],
      },
      foundationBuild: {
        id: "foundation-build",
        title: "Foundation Build",
        description:
          "Tout ce dont vous avez besoin pour paraître crédible à l'externe et fonctionner proprement en interne.",
        whoFor:
          "Les équipes qui construisent une infrastructure appropriée à partir de zéro ou qui remplacent des systèmes fragmentés.",
        startingPrice: "À partir de 35 000 EUR",
        includes: [
          "Système de marque",
          "Site Web et CMS",
          "Configuration SharePoint",
          "Bibliothèque de SOP",
          "Pack d'intégration",
          "Configuration logicielle (optionnelle)",
        ],
        timeline: "Livraison typique : 8-12 semaines",
      },
    },
    finalCta: {
      headline: "Obtenez une portée et un calendrier fixes.",
      primaryCta: { label: "Réserver un appel", href: "/book" },
      secondaryCta: { label: "Lancer un audit gratuit", href: "/tools" },
    },
  },

  work: {
    hero: {
      headline: "Des études de cas que vous pouvez évaluer.",
      subheadline:
        "Des projets réels en matière de stratégie, systèmes, produits et livraison. Passez en revue le travail avant de vous engager.",
    },
    tiles: [
      {
        title: "Radiance Co. Ltd.",
        description:
          "Systèmes d'énergie solaire pour les établissements de santé dans la mer Rouge et à Kassala.",
        thumbnail: null,
        href: "/work/radiance-co-ltd-solar-power-for-health-facilities-in-red-sea-and-kassala",
        cta: "Voir l'étude de cas",
      },
      {
        title: "TadmeenPro",
        description:
          "Un noyau opérationnel pour les assureurs, prêt pour l'IA.",
        thumbnail: null,
        href: "/work/tadmeenpro-an-operations-core-for-insurers-that-is-ready-for-ai",
        cta: "Voir l'étude de cas",
      },
      {
        title: "Talya Properties",
        description:
          "Piloter une entreprise immobilière à travers un marché qui se refroidit.",
        thumbnail: null,
        href: "/work/talya-properties-steering-a-real-estate-business-through-a-cooling-market",
        cta: "Voir l'étude de cas",
      },
      {
        title: "Plateforme Nationale de Facilitation des Échanges",
        description:
          "Une plateforme à guichet unique avec A4 Group pour une autorité confidentielle.",
        thumbnail: null,
        href: "/work/national-trade-facilitation-platform-with-a4-group-for-a-confidential-authority",
        cta: "Voir l'étude de cas",
      },
    ],
    requestCta: {
      headline: "Portée d'un travail similaire.",
      description:
        "Je peux façonner le premier engagement autour de votre goulot d'étranglement, de votre calendrier et de votre prix.",
      primaryCta: { label: "Réserver un appel", href: "/book" },
      secondaryCta: { label: "Voir les tarifs", href: "/pricing" },
    },
  },

  about: {
    hero: {
      eyebrow: "Ma façon de travailler",
      headline: "Je construis la couche métier autour des équipes en croissance.",
      subheadline:
        "J'aide les entreprises à combler le fossé entre un travail de fond solide et la marque, les opérations et les systèmes de flux de travail qui le soutiennent.",
      credibilityStrip:
        "Portée claire. Livraison pratique. Transition propre. Support continu si utile.",
      primaryCta: { label: "Réserver un appel", href: "/book" },
      secondaryCta: { label: "Voir les tarifs", href: "/pricing" },
    },
    story: {
      eyebrow: "À propos de moi",
      headline:
        "Je fais ce travail parce que les entreprises en croissance dépassent souvent les systèmes autour du bon travail.",
      subheadline:
        "L'entreprise peut déjà fournir de solides résultats, mais la couche environnante commence souvent à prendre du retard à mesure que l'entreprise grandit.",
      paragraphs: [
        "Cet écart peut se manifester à l'externe. Le site web, la marque ou le matériel de vente ne créent pas assez de clarté ou de confiance pour les acheteurs.",
        "Il peut aussi se manifester en interne. Les fichiers sont plus difficiles à trouver, les SOP sont trop minces, l'intégration dépend de la mémoire, et le travail répétitif est sans cesse reconstruit à partir de zéro.",
        "Je comble cet écart avec des systèmes pratiques. J'aide les équipes à renforcer la présentation de l'entreprise, son fonctionnement, et où l'automatisation peut supprimer le travail répétitif sans créer de confusion supplémentaire.",
      ],
    },
    drivers: {
      eyebrow: "Mon pourquoi",
      headline: "Ce qui motive ma façon de travailler.",
      subheadline:
        "Le travail est façonné par quelques croyances pratiques sur ce qui aide réellement les équipes en croissance à mieux avancer.",
      items: [
        {
          title: "La clarté avant l'exécution",
          body: "Nous définissons le problème, les livrables et les points de décision avant que le travail ne commence à se multiplier.",
        },
        {
          title: "L'adoption plutôt que le vernis du jour du lancement",
          body: "Si l'équipe ne peut pas continuer à utiliser le système après la livraison, le travail n'est pas terminé correctement.",
        },
        {
          title: "Une structure qui survit à la croissance",
          body: "Le résultat doit rester utile lorsque l'entreprise embauche, change de rôles ou ajoute de la complexité.",
        },
        {
          title: "Une automatisation pratique, pas du théâtre IA",
          body: "L'automatisation ne vaut la peine d'être réalisée que lorsqu'elle supprime de véritables frictions et maintient les bons contrôles en place.",
        },
      ],
    },
    fit: {
      eyebrow: "Avec qui je travaille le mieux",
      headline:
        "L'adéquation est généralement la plus forte lorsque l'entreprise a déjà de l'élan.",
      subheadline:
        "Je suis généralement le plus utile lorsque l'entreprise fait déjà un travail significatif, mais que la couche métier autour de ce travail a besoin d'être rattrapée.",
      items: [
        {
          title: "Des équipes avec un travail de fond solide",
          body: "L'offre, le service ou le produit est déjà précieux, mais la façon dont l'entreprise le présente ou l'exploite semble encore en retard.",
        },
        {
          title: "Des entreprises ressentant un frein opérationnel",
          body: "La croissance a introduit plus de fichiers, plus de transferts et plus de questions répétées que la structure actuelle ne peut gérer proprement.",
        },
        {
          title: "Des responsables portant trop de contexte eux-mêmes",
          body: "Une trop grande partie de l'entreprise dépend encore de quelques personnes qui se souviennent de comment tout fonctionne.",
        },
        {
          title: "Des équipes prêtes pour une IA pratique",
          body: "L'entreprise veut de l'automatisation pour gagner du temps, mais ne veut pas renoncer à la visibilité, aux approbations ou à des limites sensées.",
        },
      ],
    },
    workingWithUs: {
      eyebrow: "Travailler ensemble",
      headline: "Le travail est structuré pour rester clair, calme et utile.",
      subheadline:
        "Les clients veulent généralement moins de réunions, des décisions plus rapides et un système final qu'ils peuvent réellement continuer à utiliser. C'est ainsi que le travail est mis en place.",
      steps: [
        {
          title: "Définir le vrai goulot d'étranglement",
          description:
            "Nous identifions clairement le problème commercial et choisissons le bon point d'entrée au lieu d'essayer de tout réparer d'un coup.",
        },
        {
          title: "Construire la bonne couche",
          description:
            "Cela peut signifier un travail sur la marque et le site web, une structure d'opérations internes, ou une automatisation contenue autour de tâches répétitives.",
        },
        {
          title: "Transférer proprement",
          description:
            "Le travail est documenté et transféré d'une manière que l'équipe peut continuer à utiliser après le lancement.",
        },
        {
          title: "Continuer seulement si c'est utile",
          description:
            "Des retainers sont disponibles lorsqu'un soutien continu a du sens, mais la livraison initiale est censée se suffire à elle-même.",
        },
      ],
      expectationsTitle: "À quoi les clients peuvent s'attendre",
      expectations: [
        "Une portée claire avant le début de la construction",
        "Des jalons fonctionnels au lieu de surprises de dernière minute",
        "Documentation et conseils de transition à la livraison",
        "Retainers optionnels lorsqu'un soutien continu est utile",
      ],
    },
    cta: {
      headline: "Voir si je suis la bonne personne.",
      description:
        "Réservez un court appel et je vous indiquerai le bon forfait de départ.",
      primaryCta: { label: "Réserver un appel", href: "/book" },
      secondaryCta: { label: "Voir les tarifs", href: "/pricing" },
    },
  },

  book: {
    hero: {
      headline: "Réserver un court appel avec Amjad",
      subheadline:
        "Vous serez redirigé vers la page de réservation en direct de Google Meet pour choisir directement un moment.",
    },
    redirectingMessage:
      "Redirection vers la page de réservation en direct de Google Meet en cours.",
    openBookingPage: "Ouvrir la page de réservation",
  },

  process: {
    hero: {
      eyebrow: "Processus de livraison",
      headline: "Comment nous livrons",
      subheadline: "Processus structuré. Réunions minimales. Transition propre.",
      credibilityStrip:
        "Point d'entrée clair. Jalons concrets. Transition propre. Support seulement s'il est utile.",
    },
    steps: [
      {
        number: 1,
        title: "Prise en charge",
        description:
          "Appel bref pour comprendre vos besoins. Nous documentons les exigences et verrouillons la portée avant que tout travail de construction ne commence.",
        outcome: "Document d'exigences + portée fixe",
      },
      {
        number: 2,
        title: "Architecture",
        description:
          "Structure et spécifications confirmées. Nous vous montrons le plan avant l'exécution.",
        outcome: "Présentation de l'architecture + approbation pour continuer",
      },
      {
        number: 3,
        title: "Construction",
        description:
          "Exécution par sprints ciblés. Mises à jour livrées de manière asynchrone. Pas de réunions inutiles.",
        outcome: "Livrables fonctionnels par étapes",
      },
      {
        number: 4,
        title: "Transition",
        description:
          "Documentation, formation et transfert propre des fichiers. Vous possédez tout.",
        outcome: "Documentation complète + session de formation",
      },
      {
        number: 5,
        title: "Retainer Optionnel",
        description:
          "Support mensuel si vous souhaitez une couverture continue. Mises à jour, correctifs et optimisation.",
        outcome: "Heures de support dédiées chaque mois",
      },
    ],
    cta: {
      headline: "Commencez avec une portée claire.",
      description:
        "J'adapterai le processus de livraison au premier problème que vous devez résoudre.",
      primaryCta: { label: "Réserver un appel", href: "/book" },
      secondaryCta: { label: "Voir les tarifs", href: "/pricing" },
    },
  },

  resources: {
    hero: {
      eyebrow: "Notes et idées",
      headline: "Ressources pratiques pour une livraison plus claire.",
      subheadline:
        "Articles et notes pour les équipes qui améliorent la marque, les opérations, les logiciels et l'automatisation.",
      credibilityStrip:
        "Contexte utile. Pas de théâtre. Prochaines étapes pratiques quand vous êtes prêt à construire.",
    },
    emptyState: {
      message:
        "D'autres guides sont en route. Si vous avez besoin de quelque chose de spécifique, n'hésitez pas à me contacter et je pourrai vous orienter dans la bonne direction.",
      cta: { label: "Contact", href: "/contact" },
    },
  },

  contact: {
    hero: {
      eyebrow: "Contact",
      headline: "Dites-moi ce que vous essayez de résoudre",
      subheadline:
        "Questions, demandes de projet et demandes d'échantillons sont toutes les bienvenues.",
      credibilityStrip:
        "Message court. Prochaine étape claire. Aucune pression avant que l'adéquation soit évidente.",
    },
    form: {
      fields: [
        { name: "name", label: "Nom", type: "text", required: true },
        { name: "email", label: "E-mail", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true },
      ],
      submitLabel: "Envoyer le message",
      subject: "Contact depuis le site web de",
      newMessage: "Nouveau message de contact depuis le site web",
      nameLabel: "Nom",
      emailLabel: "E-mail",
      messageLabel: "Message",
      messageHeading: "Message :",
    },
    directEmail: {
      label: "Vous préférez l'e-mail ?",
      email: "hello@adsi.io",
    },
  },

  privacy: {
    eyebrow: "Légal",
    title: "Politique de confidentialité",
    lastUpdated: "Juin 2026",
    subheadline:
      "Comment les coordonnées, les informations de réservation et les messages du site sont traités.",
    credibilityStrip:
      "Collecte minimale. Usage pratique. Aucune revente de données personnelles.",
    sections: [
      {
        title: "Responsable du traitement",
        body: [
          "Ce site est exploité par Amjad Osman / ADSI en tant que prestataire indépendant basé dans l’Union européenne, sauf si une proposition ou un contrat indique une autre entité contractante. Pour toute question de confidentialité, demande d’accès ou suppression, écrivez à hello@adsi.io.",
          "Pour les demandes reçues via le site, les réservations, les discussions de projet et la communication courante, je décide des données collectées et de leur usage. Pour les systèmes, documents ou jeux de données traités dans une mission payée, le périmètre signé ou les conditions de traitement peuvent définir un autre rôle, y compris sous-traitant.",
        ],
      },
      {
        title: "Champ d’application",
        body: [
          "Cette politique couvre les données personnelles traitées via le site, les liens de réservation, les e-mails, les outils gratuits, les demandes de projet et la communication de livraison.",
          "Elle ne remplace pas un accord de traitement des données, un accord de confidentialité, un cahier des charges ou une exigence de sécurité propre au client. En cas de conflit, le document de projet signé prévaut pour la mission concernée.",
        ],
      },
      {
        title: "Données pouvant être collectées",
        body: [
          "Je cherche à collecter uniquement ce qui est nécessaire pour comprendre une demande, répondre correctement et livrer le travail convenu. Cela peut inclure :",
        ],
        bullets: [
          "Coordonnées : nom, e-mail, entreprise, rôle, pays et canal de contact préféré.",
          "Informations de projet que vous fournissez : objectifs, URLs, actifs de marque, documents opérationnels ou exemples de flux de travail.",
          "Informations de réservation : créneau choisi, notes, métadonnées de calendrier et messages ajoutés au formulaire.",
          "Entrées et sorties des outils gratuits : textes soumis à un audit, un générateur de SOP, une revue KPI, un tableau de bord ou une critique de page.",
          "Informations techniques habituelles : adresse IP, appareil, navigateur, localisation approximative, pages visitées, horodatage et journaux de sécurité.",
          "Informations commerciales si vous devenez client : propositions, factures, statut de paiement, données fiscales ou contractuelles.",
        ],
      },
      {
        title: "Données sensibles et confidentielles",
        body: [
          "N’envoyez pas de mots de passe, numéros de carte, pièces d’identité, données de santé, données particulières, données d’enfants ou informations très confidentielles via les formulaires publics ou les outils gratuits, sauf si une méthode sécurisée a été convenue.",
          "Si une mission nécessite des données sensibles, réglementées ou confidentielles, nous devons convenir à l’avance de la méthode de traitement, des accès, de la conservation et de tout accord de traitement nécessaire.",
        ],
      },
      {
        title: "Finalités d’utilisation",
        body: [
          "Les données personnelles sont utilisées pour des objectifs pratiques liés au site et aux services :",
        ],
        bullets: [
          "Répondre aux demandes, préparer des propositions et vérifier l’adéquation d’un projet.",
          "Planifier les appels et gérer les invitations de calendrier.",
          "Faire fonctionner les outils gratuits et fournir le résultat demandé.",
          "Livrer les services convenus, gérer la communication, les documents, les systèmes et la remise finale.",
          "Tenir les dossiers commerciaux, factures, comptabilité, conformité et fiscalité.",
          "Sécuriser le site, prévenir les abus, corriger les erreurs et surveiller la disponibilité.",
          "Améliorer les contenus, services et outils à partir de tendances agrégées ou non identifiantes.",
        ],
      },
      {
        title: "Bases légales pour l’UE/EEE",
        body: [
          "Lorsque le RGPD ou des règles similaires s’appliquent, le traitement repose sur une ou plusieurs bases légales selon le contexte :",
        ],
        bullets: [
          "Contrat ou mesures précontractuelles lorsque vous demandez une proposition, réservez un appel ou engagez une mission.",
          "Intérêts légitimes pour répondre aux demandes professionnelles, conserver des dossiers, sécuriser le site et améliorer les services.",
          "Consentement pour les permissions optionnelles, comme des e-mails marketing ou cookies non essentiels s’ils sont ajoutés.",
          "Obligation légale pour les documents comptables, fiscaux, réglementaires ou liés à un litige.",
        ],
      },
      {
        title: "Outils gratuits et IA",
        body: [
          "Les outils gratuits fournissent des audits de surface, brouillons et points de départ structurés. Ils ne constituent pas un conseil juridique, financier, sécurité, RH ou conformité. Vous devez revoir les résultats avant usage opérationnel.",
          "Certaines fonctionnalités peuvent utiliser une infrastructure ou des services d’IA tiers pour traiter le texte soumis. N’y insérez pas de données confidentielles, réglementées ou sensibles si ce traitement n’est pas approprié.",
        ],
      },
      {
        title: "Services tiers",
        body: [
          "Le site et les projets peuvent utiliser des prestataires fiables pour l’hébergement, le diagnostic, les réservations, l’e-mail, le stockage documentaire, les paiements, la gestion de projet, l’automatisation et le traitement assisté par IA.",
          "Ces prestataires traitent les données pour les besoins opérationnels concernés et peuvent appliquer leurs propres conditions lorsque vous interagissez directement avec eux.",
        ],
      },
      {
        title: "Transferts internationaux",
        body: [
          "Comme je travaille avec des clients dans l’UE, le GCC et d’autres régions, et comme les services cloud peuvent opérer internationalement, des données peuvent être traitées hors de votre pays. Pour les données UE/EEE transférées à l’international, je vise des garanties adaptées : prestataires réputés, protections contractuelles, décisions d’adéquation ou clauses contractuelles types lorsque pertinent.",
          "Pour les clients du GCC, je cherche à respecter les attentes locales de confidentialité et les exigences projet convenues par écrit, y compris les restrictions de transfert transfrontalier lorsqu’elles s’appliquent.",
        ],
      },
      {
        title: "Durée de conservation",
        body: [
          "Les données sont conservées uniquement aussi longtemps que nécessaire, sauf durée plus longue imposée ou justifiée par la loi, la fiscalité, la comptabilité, un litige ou un besoin commercial légitime.",
        ],
        bullets: [
          "Demandes et messages : généralement jusqu’à 24 mois, sauf s’ils deviennent un dossier client.",
          "Dossiers de projet : généralement jusqu’à 7 ans pour les besoins commerciaux, fiscaux, de garantie ou de litige.",
          "Entrées et sorties d’outils gratuits : seulement le temps nécessaire au résultat, au débogage, à la prévention des abus ou à l’amélioration.",
          "Factures, contrats et comptabilité : selon les durées légales applicables.",
          "Journaux de sécurité : durée limitée adaptée à la sécurité et au diagnostic.",
        ],
      },
      {
        title: "Vos droits",
        body: [
          "Selon votre localisation, vous pouvez demander l’accès, la rectification, la suppression, la limitation, l’opposition ou une copie de vos données. Les utilisateurs UE/EEE disposent aussi des droits RGPD, y compris le droit de saisir une autorité de contrôle.",
          "Les lois de protection des données du GCC, notamment aux Émirats arabes unis et en Arabie saoudite, reconnaissent aussi des principes de transparence et des droits individuels dans certains contextes.",
          "Pour exercer un droit, écrivez à hello@adsi.io. Une vérification d’identité peut être nécessaire. Lorsque le RGPD s’applique, je vise une réponse sous un mois, sauf complexité ou délai légal différent.",
        ],
      },
      {
        title: "Sécurité",
        body: [
          "J’utilise des mesures techniques et organisationnelles raisonnables : accès contrôlé, prestataires fiables, bonnes pratiques de sécurité des comptes et contrôles projet lorsque nécessaire.",
          "Aucun site, e-mail ou service cloud n’est totalement sécurisé. Si vous pensez qu’une information a été envoyée par erreur ou qu’un problème de sécurité existe, contactez hello@adsi.io rapidement.",
        ],
      },
      {
        title: "Cookies et analytics",
        body: [
          "Le site cherche à limiter le suivi. Si des analytics optionnels, pixels publicitaires ou cookies non essentiels sont ajoutés, un avis clair et un choix de consentement seront fournis lorsque requis.",
          "Un stockage technique essentiel peut être utilisé pour la sécurité, la langue, le routage, les formulaires ou le fonctionnement normal du site.",
        ],
      },
      {
        title: "Mises à jour",
        body: [
          "Cette politique peut être mise à jour lorsque le site, les services, les outils, les prestataires ou les exigences légales changent. La version la plus récente sera publiée ici avec sa date.",
        ],
      },
    ],
  },

  terms: {
    eyebrow: "Légal",
    title: "Conditions d'utilisation",
    lastUpdated: "Juin 2026",
    subheadline:
      "Conditions en langage simple pour utiliser ce site et commencer une conversation de projet.",
    credibilityStrip:
      "L'utilisation du site est simple. Le travail payé dépend d'un périmètre écrit séparé.",
    sections: [
      {
        title: "Personnes concernées",
        body: [
          "Ces conditions s’appliquent lorsque vous utilisez ce site, lisez les articles, utilisez les outils gratuits, me contactez, réservez un appel ou discutez d’un projet potentiel avec Amjad Osman / ADSI.",
          "Les services payés sont régis par la proposition, le cahier des charges, la facture, les conditions de traitement ou le contrat convenu pour la mission. En cas de conflit, les documents de projet signés prévalent.",
        ],
      },
      {
        title: "Information générale",
        body: [
          "Les articles, exemples, outils, descriptions de prix et contenus du site sont fournis comme information générale d’affaires. Ils ne constituent pas un conseil juridique, fiscal, financier, d’investissement, RH, cybersécurité ou professionnel réglementé.",
          "Vous êtes responsable de revoir les résultats, décisions, flux de travail, documents et recommandations avant de les utiliser dans votre organisation.",
        ],
      },
      {
        title: "Outils gratuits",
        body: [
          "Les outils gratuits créent des audits de surface, brouillons, listes et points de départ structurés. Ils peuvent être incomplets, inexacts ou inadaptés à votre contexte.",
          "N’envoyez pas de mots de passe, clés secrètes, données de paiement, données particulières, données d’enfants, informations réglementées ou documents confidentiels via les outils gratuits sans processus sécurisé convenu.",
          "Les résultats des outils ne créent pas de relation client, garantie ou obligation de mise en œuvre sans périmètre payé convenu par écrit.",
        ],
      },
      {
        title: "Demandes et propositions",
        body: [
          "Un appel, e-mail, résultat d’audit ou échange de proposition ne crée pas à lui seul une mission payée. Un projet commence seulement après accord écrit sur le périmètre, les livrables, le prix, le paiement, le calendrier et la remise.",
          "Je peux refuser un projet si le périmètre est flou, hors service, juridiquement sensible sans revue adéquate, incompatible avec un engagement existant ou exige des accès ou garanties que je ne peux pas fournir raisonnablement.",
        ],
      },
      {
        title: "Services",
        body: [
          "Les services peuvent inclure systèmes de marque, supports de communication, sites et CMS, systèmes d’opérations internes, SOP, conception de flux, configuration logicielle, tableaux de bord, automatisation et flux pratiques d’agents IA.",
          "Sauf accord contraire, les services sont un support professionnel de design, opérations, logiciel et implémentation. Ils ne remplacent pas un avocat, un fiscaliste, un conseil financier réglementé, une certification cybersécurité ou une validation légale.",
        ],
      },
      {
        title: "Responsabilités client",
        body: [
          "Pour réussir un projet, vous devez fournir des informations exactes, des retours rapides, les accès nécessaires, la disponibilité des décideurs et le droit d’utiliser les matériaux fournis.",
        ],
        bullets: [
          "Vous ne devez pas fournir de contenu illégal, contrefaisant, trompeur ou non autorisé.",
          "Vous êtes responsable de l’approbation finale des allégations publiques, textes juridiques, prix, politiques et langage de conformité.",
          "Vous devez revoir les livrables avant publication ou usage opérationnel.",
          "Vous devez maintenir vos sauvegardes, contrôles d’accès, validations internes et sécurité de comptes sauf accord écrit contraire.",
        ],
      },
      {
        title: "Paiement et calendrier",
        body: [
          "Les prix, acomptes, jalons, abonnements, taxes, dépenses, renouvellements et délais de paiement sont définis dans la proposition ou facture. Sauf accord contraire, le travail peut être suspendu si des factures, retours ou accès sont en retard.",
          "Les calendriers dépendent des contributions, accès, validations et plateformes tierces. Un calendrier est un plan de travail, non une garantie, sauf mention écrite explicite.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        body: [
          "Sauf accord contraire, vous recevez le droit d’utiliser les livrables finaux payés pour votre activité après paiement des factures liées. Les brouillons, concepts non retenus, méthodes internes, modèles réutilisables, schémas de code, savoir-faire et matériaux préexistants restent à moi ou à leurs propriétaires.",
          "Vous ne pouvez pas copier, revendre, reconditionner ou proposer le contenu, les outils, prompts, workflows, visuels ou résultats du site comme service concurrent sans autorisation écrite.",
          "Les bibliothèques open source, plateformes, polices, actifs, plugins et outils externes restent soumis à leurs propres licences et conditions.",
        ],
      },
      {
        title: "Portfolio",
        body: [
          "Sauf confidentialité ou accord écrit contraire, je peux mentionner des travaux non sensibles dans un portfolio, une étude de cas, une proposition ou une discussion de capacités après livraison. Les projets confidentiels ou sous NDA restent régis par les conditions écrites.",
        ],
      },
      {
        title: "Confidentialité",
        body: [
          "Je traite les informations client non publiques partagées pour un projet comme confidentielles et les utilise uniquement pour la discussion ou la mission concernée. Si des conditions plus fortes sont nécessaires, signons un NDA ou intégrons-les avant partage sensible.",
        ],
      },
      {
        title: "Plateformes tierces",
        body: [
          "De nombreux projets dépendent de plateformes tierces : hébergement, CMS, e-mail, paiements, analytics, cloud, automatisation, IA, CRM, comptabilité ou infrastructure client.",
          "Je ne suis pas responsable des pannes, hausses de prix, changements de politique, pertes de données, incidents de sécurité ou changements de fonctionnalités de ces plateformes. Je peux aider à les configurer ou gérer uniquement dans le périmètre convenu.",
        ],
      },
      {
        title: "Absence de garantie de résultat",
        body: [
          "Je vise un travail utile avec périmètre clair et remise propre, mais je ne garantis pas chiffre d’affaires, investissement, classement, conversion, financement, validation réglementaire, succès d’appel d’offres, adoption opérationnelle ou performance IA sans garantie écrite spécifique.",
        ],
      },
      {
        title: "Limitation de responsabilité",
        body: [
          "Dans la limite permise par la loi, je ne suis pas responsable des dommages indirects, accessoires, consécutifs, spéciaux, punitifs ou pertes de profit liés à l’utilisation du site, des outils gratuits ou aux discussions de services.",
          "Pour les missions payées, tout plafond de responsabilité ou recours doit être défini dans la proposition ou le contrat signé. Rien ne limite une responsabilité que la loi interdit de limiter.",
        ],
      },
      {
        title: "Revue régionale et conformité",
        body: [
          "Les clients pouvant opérer dans l’UE, le GCC et d’autres juridictions, la revue juridique, fiscale, réglementaire, RH, protection des données et conformité sectorielle reste votre responsabilité sauf accord avec un professionnel qualifié.",
          "Si un livrable concerne un secteur réglementé, marché public, santé, finance, assurance, éducation, gouvernement ou flux de données transfrontalier, signalez-le tôt pour prévoir la bonne revue.",
        ],
      },
      {
        title: "Litiges",
        body: [
          "La loi applicable, le lieu, la procédure de litige et l’entité contractante d’un travail payé doivent figurer dans la proposition ou le contrat. Sans accord écrit séparé, tout différend doit d’abord être discuté de bonne foi via les contacts du site.",
        ],
      },
      {
        title: "Modifications",
        body: [
          "Ces conditions peuvent être mises à jour lorsque les services, outils, prestataires ou exigences légales changent. La version la plus récente sera publiée ici avec sa date.",
        ],
      },
    ],
  },
};
