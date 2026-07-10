import { STRIPE_PRICES } from "./stripe";
import type { ServicePricingTrack, SoftwarePricingSummary } from "./pricingContent";

const defaultBookHref = "/book";

export const servicePricingTracksFr: Record<ServicePricingTrack["id"], ServicePricingTrack> = {
  brand: {
    id: "brand",
    anchor: "brand-pricing",
    name: "Systèmes de marque et de croissance",
    summary:
      "Les tarifs pour la marque, le site web et les supports de vente réunis au même endroit, des offres de démarrage ciblées aux abonnements mensuels.",
    detailHref: "/services/brand",
    pricingIntro:
      "Choisissez un point de départ ciblé, un projet plus vaste ou un support continu une fois les bases en place.",
    recommended: {
      headline: "Points de départ recommandés",
      description: "Offres d'entrée courantes avec périmètre et calendrier fixes.",
      offers: [
        {
          name: "Sprint de Système de Marque",
          inclusions: ["Identité et lignes directrices", "Pack de modèles", "Bibliothèque d'actifs de marque"],
          timeline: "10-15 jours ouvrés",
          price: "À partir de 3 500 EUR",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_sprint,
        },
        {
          name: "Création de Site Web et CMS",
          inclusions: ["Architecture du site", "Configuration du CMS", "Pages de conversion", "Bases du référencement (SEO)"],
          timeline: "2-4 semaines",
          price: "À partir de 5 000 EUR",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.web_build,
        },
        {
          name: "Kit de Supports de Vente",
          inclusions: ["Système de présentations (pitch decks)", "Modèles de propositions", "Format d'études de cas"],
          timeline: "7-12 jours ouvrés",
          price: "À partir de 2 500 EUR",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sales_kit,
        },
      ],
    },
    menu: {
      headline: "Sélectionnez des services individuels",
      description:
        "Disponibles séparément lorsque vous n'avez besoin que d'une seule amélioration ciblée pour le moment.",
      items: [
        {
          name: "Optimisation de conversion de page de destination",
          startingPrice: "À partir de 1 500 EUR",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.landing_page,
        },
        {
          name: "Pack de modèles de marque",
          startingPrice: "À partir de 1 200 EUR",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_template,
        },
        {
          name: "Reconstruction de présentation (pitch deck)",
          startingPrice: "À partir de 2 000 EUR",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.pitch_deck,
        },
      ],
    },
    retainer: {
      headline: "Abonnements",
      description:
        "Support mensuel pour les mises à jour, les nouveaux actifs et les améliorations continues après la mise en ligne des bases principales.",
      tiers: [
        {
          tier: "Lite",
          inclusions: ["Mises à jour mineures du contenu", "Ajustements de conception", "Point mensuel"],
          responseTime: "Réponse sous 3 jours ouvrés",
          price: "800 EUR/mois",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["Mises à jour de contenu", "Modifications de conception", "Création de nouvelles pages", "Support prioritaire"],
          responseTime: "Réponse sous 1 jour ouvré",
          price: "1 500 EUR/mois",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Modifications illimitées", "Sessions stratégiques", "Support dédié", "Réponse le jour même"],
          responseTime: "Réponse le jour même",
          price: "2 500 EUR/mois",
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
    name: "Systèmes d'opérations internes",
    summary:
      "Tarification de la mise en place opérationnelle couvrant les audits, la structure SharePoint, la rédaction de procédures (SOP) et l'entretien mensuel.",
    detailHref: "/services/ops",
    pricingIntro:
      "Commencez par un audit, un projet de configuration plus vaste ou un support continu une fois la couche opérationnelle principale établie.",
    recommended: {
      headline: "Points de départ recommandés",
      description: "Offres d'entrée courantes avec périmètre et calendrier fixes.",
      offers: [
        {
          name: "Audit Opérationnel",
          inclusions: ["Évaluation de l'état actuel", "Analyse des écarts", "Rapport de recommandations"],
          timeline: "5-7 jours ouvrés",
          price: "À partir de 2 000 EUR",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_audit,
        },
        {
          name: "Configuration SharePoint",
          inclusions: ["Architecture du site", "Bibliothèques de documents", "Modèle d'autorisations", "Règles de gouvernance"],
          timeline: "2-3 semaines",
          price: "À partir de 4 000 EUR",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sharepoint_setup,
        },
        {
          name: "Pack Bibliothèque de SOP",
          inclusions: ["15 à 25 procédures (SOP) documentées", "Cartographie des rôles", "Listes de contrôle qualité (QA)", "Flux de mise à jour"],
          timeline: "2-3 semaines",
          price: "À partir de 3 500 EUR",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sop_pack,
        },
      ],
    },
    menu: {
      headline: "Sélectionnez des services individuels",
      description:
        "Disponibles séparément lorsque vous avez besoin d'un simple nettoyage ciblé plutôt que d'une réorganisation globale.",
      items: [
        {
          name: "Refonte des autorisations",
          startingPrice: "À partir de 1 500 EUR",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.permissions_overhaul,
        },
        {
          name: "Création de procédure (par SOP)",
          startingPrice: "À partir de 800 EUR",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sop_creation,
        },
        {
          name: "Configuration de bibliothèque de modèles",
          startingPrice: "À partir de 1 200 EUR",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.template_library,
        },
      ],
    },
    retainer: {
      headline: "Abonnements",
      description:
        "Support mensuel pour les mises à jour, la nouvelle documentation et l'entretien opérationnel après l'achèvement de la configuration de base.",
      tiers: [
        {
          tier: "Maintenance opérationnelle Lite",
          inclusions: ["Mises à jour des procédures (SOP)", "Modifications mineures SharePoint", "Bilan mensuel"],
          responseTime: "Réponse sous 3 jours ouvrés",
          price: "600 EUR/mois",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["Création et mise à jour de SOP", "Modifications SharePoint", "Nouveaux flux de travail", "Support prioritaire"],
          responseTime: "Réponse sous 1 jour ouvré",
          price: "1 200 EUR/mois",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Modifications illimitées", "Création de nouveaux systèmes", "Sessions de formation", "Réponse le jour même"],
          responseTime: "Réponse le jour même",
          price: "2 000 EUR/mois",
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
    name: "Agents IA et Automatisation",
    summary:
      "Tarifs de l'automatisation pour les flux pilotes, les cas d'usage ciblés et la surveillance managée une fois la première couche opérationnelle.",
    detailHref: "/services/agents",
    pricingIntro:
      "Commencez par un pilote d'automatisation ciblé, étendez-le à un pack de flux de travail plus large, ou maintenez le système à niveau grâce à un abonnement managé.",
    recommended: {
      headline: "Points de départ recommandés",
      description: "Projets d'automatisation à périmètre contrôlé conçus pour créer de la valeur rapidement.",
      offers: [
        {
          name: "Pilote d'Agent",
          inclusions: ["Un cas d'usage", "Périmètre contrôlé", "Flux d'approbation", "Configuration de la surveillance"],
          timeline: "10-15 jours ouvrés",
          price: "À partir de 4 000 EUR",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agent_pilot,
        },
        {
          name: "Pack de Flux d'Agents",
          inclusions: ["2-3 cas d'usage", "Orchestration inter-flux", "Configuration de la gouvernance", "Formation de l'équipe"],
          timeline: "3-5 semaines",
          price: "À partir de 8 000 EUR",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agent_pack,
        },
        {
          name: "Configuration d'Agent de Connaissances",
          inclusions: ["Recherche respectant les autorisations", "Citation des sources", "Accès basé sur les rôles", "Tableau de bord de surveillance"],
          timeline: "2-4 semaines",
          price: "À partir de 5 000 EUR",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.knowledge_agent,
        },
      ],
    },
    menu: {
      headline: "Sélectionnez des services individuels",
      description:
        "Des flux ciblés sont disponibles séparément lorsque vous n'avez besoin que d'un seul cas d'usage d'automatisation pour le moment.",
      items: [
        {
          name: "Agent de triage de flux de travail",
          startingPrice: "À partir de 2 500 EUR",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.triage_agent,
        },
        {
          name: "Flux de résumé de rapports",
          startingPrice: "À partir de 2 000 EUR",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.report_summarization,
        },
        {
          name: "Flux de réception et de routage",
          startingPrice: "À partir de 2 000 EUR",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.intake_routing,
        },
      ],
    },
    retainer: {
      headline: "Abonnements managés",
      description:
        "Surveillance continue, ajustement des flux et support après la mise en service de la première couche d'automatisation.",
      tiers: [
        {
          tier: "Surveillance Lite",
          inclusions: ["Surveillance des performances", "Bilan mensuel", "Corrections de bugs"],
          responseTime: "Réponse sous 3 jours ouvrés",
          price: "1 000 EUR/mois",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["Surveillance et ajustement", "Ajustements de messages (prompts)", "Modifications de flux", "Support prioritaire"],
          responseTime: "Réponse sous 1 jour ouvré",
          price: "2 000 EUR/mois",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Gestion complète", "Création de nouveaux flux", "Sessions stratégiques", "Réponse le jour même"],
          responseTime: "Réponse le jour même",
          price: "3 500 EUR/mois",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_priority,
        },
      ],
    },
  },
};

export const softwarePricingSummaryFr: SoftwarePricingSummary = {
  anchor: "software-pricing",
  eyebrow: "Tarifs des logiciels",
  headline: "Les logiciels managés commencent à partir de 500 EUR par mois et par produit.",
  description:
    "Fheem configure et maintient des systèmes CRM, de comptabilité, de stock et de tâches ciblés afin que vos équipes bénéficient d'une couche opérationnelle utilisable au lieu d'un outil supplémentaire abandonné.",
  startingPrice: "À partir de 500 EUR/mois par produit",
  setupNote:
    "La configuration est incluse dans certains forfaits ou proposée séparément sous forme de frais d'intégration fixes, selon la complexité et les besoins de migration des données.",
  products: [
    {
      name: "CRM",
      oneLiner: "Pipeline, gestion des contacts, suivi et rapports au sein d'un seul espace de travail contrôlé.",
    },
    {
      name: "Comptabilité",
      oneLiner: "Facturation, dépenses et visibilité financière au sein d'un flux opérationnel plus propre.",
    },
    {
      name: "Stocks et Actifs",
      oneLiner: "Suivez les stocks, les actifs et les responsabilités avec un accès et une auditabilité plus clairs.",
    },
    {
      name: "Tâches et Gestion du Travail",
      oneLiner: "Attribuez les responsabilités, maintenez le travail visible et réduisez les transmissions manquées.",
    },
  ],
  supportIncludes: [
    "Rôles et autorisations configurés autour de la structure de votre équipe",
    "Modèles et flux de travail configurés avant le lancement",
    "Importation et validation des données incluses dans l'intégration",
    "Support administratif continu disponible pour un entretien managé",
  ],
  primaryCta: {
    label: "Réserver un appel tarifaire",
    href: "/book?intent=suite-pricing",
  },
  secondaryCta: {
    label: "Voir les logiciels",
    href: "/software",
  },
};
