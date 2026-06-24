import type { ToolPageKey, ToolPageContent } from "./toolPageContent";

export const toolPageContentFr: Record<ToolPageKey, ToolPageContent> = {
  "sop-builder": {
    metaTitle: "Générateur de brouillon de SOP — Générateur gratuit de SOP | Amjad Osman",
    metaDescription:
      "Générez une procédure opérationnelle standard (SOP) complète et structurée à partir d'une description de processus désordonnée. Outil d'aide gratuit d'Amjad Osman.",
    eyebrow: "Outil d'aide",
    title: "Générateur de brouillon de SOP",
    description:
      "Décrivez n'importe quel processus en français simple. Obtenez un document de procédure (SOP) complet et structuré en quelques secondes.",
    submitLabel: "Générer la SOP",
    errorTitle: "Erreur",
    buildCtaHeadline: "Vous voulez que je le conçoive ?",
    buildCtaDescription:
      "Je peux transformer le résultat de cet outil en une prestation cadrée avec tarifs.",
    primaryCtaLabel: "Réserver un appel",
    secondaryCtaLabel: "Voir les tarifs",
    fields: {
      processLabel: "Décrivez le processus",
      processHelp:
        "Écrivez tout ce que vous savez, même brièvement. Indiquez qui fait quoi, quels outils sont impliqués et quel doit être le résultat.",
      processPlaceholder:
        "ex. Lorsqu'un nouveau client s'inscrit, notre équipe commerciale lui envoie un e-mail de bienvenue, puis un membre de l'équipe des opérations planifie un appel d'intégration, ensuite nous créons son espace de travail et envoyons ses identifiants de connexion...",
    },
  },
  "brand-audit": {
    metaTitle: "Audit de cohérence de marque — Outil d'audit de marque gratuit | Amjad Osman",
    metaDescription:
      "Obtenez un audit gratuit de cohérence de marque propulsé par l'IA. Identifiez les incohérences visuelles, les problèmes de ton et les corrections prioritaires pour votre marque. Outil gratuit d'Amjad Osman.",
    eyebrow: "Outil d'aide",
    title: "Audit de cohérence de marque",
    description:
      "Décrivez votre marque et vos supports. Obtenez un rapport de cohérence avec des corrections visuelles, de ton et de priorité.",
    submitLabel: "Auditer la marque",
    errorTitle: "Erreur",
    buildCtaHeadline: "Vous voulez que je le conçoive ?",
    buildCtaDescription:
      "Je peux transformer le résultat de cet outil en une prestation cadrée avec tarifs.",
    primaryCtaLabel: "Réserver un appel",
    secondaryCtaLabel: "Voir les tarifs",
    fields: {
      brandLabel: "Décrivez votre marque",
      brandHelp:
        "Incluez votre secteur d'activité, votre public cible, les valeurs de votre marque, vos couleurs, vos polices et toutes les chartes graphiques dont vous disposez.",
      brandPlaceholder:
        "ex. Nous sommes une entreprise de SaaS B2B ciblant les responsables RH. Les couleurs de notre marque sont le bleu marine et l'or. Nous avons un logo mais pas de charte officielle. Nous utilisons Helvetica par endroits et Arial à d'autres...",
      assetsLabel: "Décrivez vos supports et canaux actuels",
      optional: "(optionnel)",
      assetsHelp:
        "Listez votre site web, vos réseaux sociaux, vos modèles d'e-mails, vos présentations (pitch decks) et tout autre support de marque.",
      assetsPlaceholder:
        "ex. Site web (conçu sous Webflow, utilise nos couleurs de marque mais des polices incohérentes), page LinkedIn (utilise une version de logo différente), modèles d'e-mails (texte brut, aucun habillage de marque), présentation (utilise un ancien logo)...",
    },
  },
  "page-critique": {
    metaTitle: "Critique de page de destination — Audit de conversion gratuit | Amjad Osman",
    metaDescription:
      "Obtenez un audit de conversion gratuit de votre page de destination propulsé par l'IA. Analyse de hiérarchie, révision des CTA, points de friction et corrections prioritaires. Outil gratuit d'Amjad Osman.",
    eyebrow: "Outil d'aide",
    title: "Critique de page de destination",
    description:
      "Collez l'URL ou le texte de votre page. Obtenez un audit de conversion avec des remarques sur la hiérarchie, des corrections de CTA et des actions prioritaires classées.",
    submitLabel: "Critiquer la page",
    errorTitle: "Erreur",
    buildCtaHeadline: "Vous voulez que je le conçoive ?",
    buildCtaDescription:
      "Je peux transformer le résultat de cet outil en une prestation cadrée avec tarifs.",
    primaryCtaLabel: "Réserver un appel",
    secondaryCtaLabel: "Voir les tarifs",
    fields: {
      urlLabel: "URL de la page",
      copyLabel: "Collez le texte de votre page",
      optional: "(optionnel)",
      urlPlaceholder: "https://votresite.com/page-de-destination",
      copyHelp:
        "Collez le titre, le sous-titre, le corps du texte et le texte du CTA de votre page.",
      copyPlaceholder:
        "Collez le texte de votre page de destination ici — titre, sous-titre, avantages, preuve sociale, CTA...",
      note: "Fournissez une URL, le texte collé, ou les deux.",
    },
  },
  "process-mapper": {
    metaTitle: "Cartographe de flux de processus — Outil d'analyse de flux gratuit | Amjad Osman",
    metaDescription:
      "Transformez une description de flux de travail en une carte de processus structurée contenant les étapes, les points de décision et les opportunités d'amélioration. Outil d'aide gratuit d'Amjad Osman.",
    eyebrow: "Outil d'aide",
    title: "Cartographe de flux de processus",
    description:
      "Décrivez comment un flux de travail se déroule réellement. Obtenez une carte structurée comprenant les étapes, les points de décision et une analyse des goulots d'étranglement.",
    submitLabel: "Cartographier le processus",
    errorTitle: "Erreur",
    buildCtaHeadline: "Vous voulez que je le conçoive ?",
    buildCtaDescription:
      "Je peux transformer le résultat de cet outil en une prestation cadrée avec tarifs.",
    primaryCtaLabel: "Réserver un appel",
    secondaryCtaLabel: "Voir les tarifs",
    fields: {
      workflowLabel: "Décrivez votre flux de travail",
      workflowHelp:
        "Décrivez comment le processus fonctionne réellement — qui fait quoi, dans quel ordre, quelles décisions sont prises, quels outils sont utilisés. Soyez aussi précis que possible.",
      workflowPlaceholder:
        "ex. Un client soumet une demande d'assistance par e-mail. Notre équipe de support la lit et soit la traite directement, soit la transmet à l'équipe technique. En cas de transmission, l'équipe technique enquête et envoie une réponse sous 24 heures. Si le client n'est pas satisfait, le dossier est transmis à un responsable...",
    },
  },
  "dashboard-builder": {
    metaTitle: "Générateur de spécifications de tableau de bord — Outil gratuit de spécifications | Amjad Osman",
    metaDescription:
      "Générez un cahier des charges complet de tableau de bord à partir de vos besoins de reporting. Indicateurs (KPI), sources de données, recommandations de mise en page. Outil d'aide gratuit d'Amjad Osman.",
    eyebrow: "Outil d'aide",
    title: "Générateur de spécifications de tableau de bord",
    description:
      "Décrivez ce que vous devez visualiser et pourquoi. Obtenez un cahier des charges complet de tableau de bord avec indicateurs (KPI), sources de données et recommandations de mise en page.",
    submitLabel: "Générer le cahier des charges",
    errorTitle: "Erreur",
    buildCtaHeadline: "Vous voulez que je le conçoive ?",
    buildCtaDescription:
      "Je peux transformer le résultat de cet outil en une prestation cadrée avec tarifs.",
    primaryCtaLabel: "Réserver un appel",
    secondaryCtaLabel: "Voir les tarifs",
    fields: {
      audienceLabel: "À qui est destiné le tableau de bord ?",
      optional: "(optionnel)",
      audiencePlaceholder: "ex. PDG et équipe de direction, revue hebdomadaire",
      needsLabel: "Que devez-vous suivre et pourquoi ?",
      needsHelp:
        "Décrivez les questions auxquelles le tableau de bord doit répondre. Quelles décisions soutiendra-t-il ?",
      needsPlaceholder:
        "ex. Nous devons suivre la santé du pipeline des ventes, la croissance du MRR, l'attrition des clients et le volume de tickets de support. Actuellement, nous extrayons cela manuellement de trois tableurs différents chaque lundi...",
      sourcesLabel: "Sources de données actuelles",
      sourcesPlaceholder:
        "ex. HubSpot CRM, QuickBooks, Zendesk, plus des tableurs manuels dans Google Sheets...",
    },
  },
  "kpi-audit": {
    metaTitle: "Audit de KPI — Outil d'évaluation des indicateurs gratuit | Amjad Osman",
    metaDescription:
      "Obtenez un audit gratuit de vos indicateurs (KPI) propulsé par l'IA. Identifiez les indicateurs futiles (vanity metrics), les indicateurs manquants et construisez un cadre de mesure plus sain. Outil gratuit d'Amjad Osman.",
    eyebrow: "Outil d'aide",
    title: "Audit de KPI",
    description:
      "Listez les indicateurs que vous suivez actuellement. Obtenez un audit d'une franchise brutale — ce qui est futile, ce qui manque et ce qu'il faut réellement mesurer.",
    submitLabel: "Auditer les KPI",
    errorTitle: "Erreur",
    buildCtaHeadline: "Vous voulez que je le conçoive ?",
    buildCtaDescription:
      "Je peux transformer le résultat de cet outil en une prestation cadrée avec tarifs.",
    primaryCtaLabel: "Réserver un appel",
    secondaryCtaLabel: "Voir les tarifs",
    fields: {
      metricsLabel: "Listez vos indicateurs actuels",
      metricsHelp:
        "Listez chaque indicateur suivi par votre équipe — en réunion, dans les tableaux de bord ou dans les rapports. Une ligne par indicateur est le plus simple.",
      metricsPlaceholder:
        "ex.\nVisiteurs du site web (mensuel)\nAbonnés LinkedIn\nChiffre d'affaires (mensuel)\nNombre de propositions envoyées\nTaux d'ouverture des e-mails\nScore de satisfaction client\nNouveaux prospects issus des publicités",
      contextLabel: "Contexte de l'entreprise",
      optional: "(optionnel)",
      contextPlaceholder:
        "ex. Entreprise de services B2B, 12 collaborateurs, 2 M EUR de chiffre d'affaires, en phase de croissance. L'objectif principal est d'augmenter le pipeline qualifié issu de l'entrant (inbound)...",
    },
  },
};
