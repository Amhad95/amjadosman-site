import type { SoftwareDetailId, SoftwareDetailContent } from "./softwarePageContent";

export const softwarePageContentFr: Record<SoftwareDetailId, SoftwareDetailContent> = {
  crm: {
    hero: {
      productDescriptor: "pour le CRM",
      headline: "La gestion de la relation client configurée pour l'adoption.",
      subheadline:
        "Un système CRM propre configuré avec vos étapes de pipeline, rôles et flux de suivi. Configuration et support administratif continu inclus.",
      primaryCtaLabel: "Réserver une démo",
      secondaryCtaLabel: "Comment fonctionne l'intégration",
    },
    previewSection: {
      headline: "Meridian en action",
      subheadline: "Pipeline, contacts, tâches et rapports unifiés.",
      frameTitle: "Meridian CRM",
      searchPlaceholder: "Rechercher des contacts, opportunités...",
      filters: ["Statut", "Propriétaire"],
      tabLabels: ["Pipeline", "Contacts", "Tâches", "Rapports"],
    },
    personaSection: {
      headline: "Conçu pour les équipes commerciales",
      subheadline:
        "Que vous suiviez des opportunités, gériez des comptes ou coordonniez des transmissions.",
    },
    problemSection: {
      headline: "Remplacez le chaos",
      subheadline:
        "Passez d'outils dispersés et d'un suivi manuel à des opérations structurées.",
      items: [
        { before: "Opportunités suivies dans des tableurs", after: "Pipeline visuel avec des étapes claires" },
        { before: "Relances perdues dans les e-mails", after: "Rappels de tâches automatisés" },
        { before: "Aucune visibilité sur l'activité de l'équipe", after: "Tableaux de bord et rapports en temps réel" },
        { before: "Les transmissions perdent du contexte", after: "Historique complet associé aux contacts" },
      ],
    },
    outcomesSection: {
      headline: "Ce qui change dès le premier jour",
      subheadline: "Une valeur claire et immédiate — pas des promesses.",
      snapshotLabel: "Aperçu de l'activité",
      items: [
        {
          headline: "Étapes de pipeline et responsabilités claires",
          description: "Chaque opportunité a une étape, un propriétaire et une action suivante claire.",
        },
        {
          headline: "Suivi fiable des relances et des activités",
          description: "Plus de fils perdus — chaque interaction est enregistrée automatiquement.",
        },
        {
          headline: "Rapports simples pour la prise de décision",
          description: "Des tableaux de bord montrant la valeur du pipeline et l'activité de l'équipe.",
        },
        {
          headline: "Transmissions propres en cas de changement de rôles",
          description: "L'historique complet suit les contacts et les opportunités.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Fonctionnalités clés",
      subheadline: "Tout ce dont vous avez besoin, configuré et prêt.",
      items: [
        {
          title: "Gestion du pipeline",
          description: "Tableaux kanban visuels avec étapes personnalisables et valeurs d'opportunités.",
        },
        {
          title: "Gestion des contacts",
          description: "Profils unifiés avec historique des interactions et opportunités liées.",
        },
        {
          title: "Automatisation des tâches",
          description: "Relances planifiées, rappels et enregistrement des activités.",
        },
        {
          title: "Tableaux de bord de reporting",
          description: "Valeur du pipeline, taux de conversion et performance de l'équipe.",
        },
        {
          title: "Intégration d'e-mails",
          description: "Enregistrement des communications et synchronisation avec votre client de messagerie.",
        },
        {
          title: "Accès basé sur les rôles",
          description: "Contrôlez qui voit, modifie et approuve à chaque niveau.",
        },
      ],
    },
    workflowSection: {
      headline: "Votre parcours de mise en place",
      subheadline: "Du premier accès aux opérations quotidiennes en quatre étapes.",
      steps: [
        {
          title: "Configurer la structure",
          description: "Mise en place des étapes de pipeline, des champs personnalisés et des valeurs d'opportunités.",
        },
        {
          title: "Attribuer les rôles et autorisations",
          description: "Définition des règles de visibilité d'équipe et des chaînes d'approbation.",
        },
        {
          title: "Importer les données",
          description: "Migration propre des contacts et opportunités existants.",
        },
        {
          title: "Exécuter le flux de travail quotidien",
          description: "Suivi des opportunités, enregistrement des activités, génération de rapports.",
        },
      ],
    },
    governanceSection: {
      headline: "Contrôler qui fait quoi",
      subheadline: "Rôles, autorisations et chaînes d'approbation intégrés dès le premier jour.",
    },
    onboardingSection: {
      headline: "Configuré pour votre équipe, pas seulement activé",
      subheadline:
        "Nous gérons le déploiement, la configuration, la formation et le support administratif continu.",
    },
    pricingSection: {
      note:
        "Meridian™ pour le CRM commence à partir de 500 EUR par mois, selon le nombre d'utilisateurs et la configuration.",
      setupNote:
        "La configuration est incluse dans les forfaits Foundation Build ou disponible sous forme de frais d'intégration fixes.",
      ctaLabel: "Réserver un appel tarifaire",
    },
    finalCta: {
      headline: "Cadrez le CRM autour de vos processus.",
      description:
        "Nous examinerons votre flux de travail, vous recommanderons la configuration et vous présenterons le prix de départ.",
      primaryLabel: "Réserver un appel",
      secondaryLabel: "Voir les tarifs",
    },
  },
  accounting: {
    hero: {
      productDescriptor: "pour la Comptabilité",
      headline: "Des flux financiers configurés pour la clarté, pas la complexité.",
      subheadline:
        "Facturation, dépenses et visibilité financière de base dans un système propre. Déployé avec vos flux d'approbation, catégories et besoins de reporting.",
      primaryCtaLabel: "Réserver une démo",
      secondaryCtaLabel: "Comment fonctionne l'intégration",
    },
    previewSection: {
      headline: "Ledger en action",
      subheadline: "Facturation, dépenses, approbations et rapports au même endroit.",
      frameTitle: "Ledger Accounting",
      searchPlaceholder: "Rechercher des factures, dépenses...",
      filters: ["Statut", "Catégorie"],
      tabLabels: ["Factures", "Dépenses", "Approbations", "Tableau de bord"],
    },
    personaSection: {
      headline: "Conçu pour les équipes qui gèrent de l'argent",
      subheadline:
        "Que vous envoyiez des factures, approuviez des dépenses ou suiviez les flux de trésorerie.",
    },
    problemSection: {
      headline: "Remplacez le chaos",
      subheadline:
        "Passez de tableurs dispersés et d'approbations manuelles à des opérations structurées.",
      items: [
        { before: "Factures créées dans Word ou Excel", after: "Factures avec modèles et numérotation automatique" },
        { before: "Dépenses suivies dans des tableurs", after: "Soumission structurée avec des règles de catégorie" },
        { before: "Approbations gérées par e-mail", after: "Chaînes d'approbation intégrées avec piste d'audit" },
        { before: "Aucune visibilité en temps réel sur la trésorerie", after: "Tableaux de bord en direct avec statut des paiements" },
      ],
    },
    outcomesSection: {
      headline: "Ce qui change dès le premier jour",
      subheadline: "Une valeur claire et immédiate — pas des promesses.",
      snapshotLabel: "Aperçu de l'activité",
      items: [
        {
          headline: "Facturation et suivi des paiements plus rapides",
          description: "Créez, envoyez et suivez des factures avec des modèles et des mises à jour de statut.",
        },
        {
          headline: "Saisie et approbations de dépenses plus propres",
          description: "Soumission de dépenses structurée avec règles de catégorie et chaînes d'approbation.",
        },
        {
          headline: "Un tableau de bord qui reste lisible",
          description: "Indicateurs clés sans la complexité d'un logiciel de comptabilité complet.",
        },
        {
          headline: "Dossiers prêts pour l'audit sans nettoyage manuel",
          description: "Catégorisation propre et documentation adéquate dès le premier jour.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Fonctionnalités clés",
      subheadline: "Tout ce dont vous avez besoin, configuré et prêt.",
      items: [
        {
          title: "Facturation",
          description: "Factures avec modèles, numérotation automatique, suivi de statut et rappels de paiement.",
        },
        {
          title: "Suivi des dépenses",
          description: "Dépenses catégorisées avec téléversement de justificatifs et entrées récurrentes.",
        },
        {
          title: "Flux d'approbation",
          description: "Chaînes d'approbation multiniveaux avec limites de dépenses et règles d'escalade.",
        },
        {
          title: "Tableaux de bord financiers",
          description: "Visibilité en temps réel sur les revenus, les dépenses et les flux de trésorerie.",
        },
        {
          title: "Catégories fiscales",
          description: "Règles fiscales préconfigurées et mappage de catégories pour la conformité.",
        },
        {
          title: "Piste d'audit",
          description: "Historique complet de chaque transaction, modification et décision d'approbation.",
        },
      ],
    },
    workflowSection: {
      headline: "Votre parcours de mise en place",
      subheadline: "Du premier accès aux opérations quotidiennes en quatre étapes.",
      steps: [
        {
          title: "Configurer la structure",
          description: "Mise en place des catégories, des modèles de factures et de la numérotation.",
        },
        {
          title: "Attribuer les rôles et autorisations",
          description: "Définition des rôles d'approbateur, des limites de dépenses et des flux de travail.",
        },
        {
          title: "Importer les données",
          description: "Migration des fiches clients et fournisseurs avec les soldes d'ouverture.",
        },
        {
          title: "Exécuter le flux de travail quotidien",
          description: "Création de factures, suivi des paiements, gestion des dépenses.",
        },
      ],
    },
    governanceSection: {
      headline: "Contrôler qui fait quoi",
      subheadline: "Rôles, autorisations et chaînes d'approbation intégrés dès le premier jour.",
    },
    onboardingSection: {
      headline: "Configuré pour votre équipe, pas seulement activé",
      subheadline:
        "Nous gérons le déploiement, la configuration, la formation et le support administratif continu.",
    },
    pricingSection: {
      note:
        "Ledger™ pour la Comptabilité commence à partir de 500 EUR par mois, selon le nombre d'utilisateurs et la configuration.",
      setupNote:
        "La configuration est incluse dans les forfaits Foundation Build ou disponible sous forme de frais d'intégration fixes.",
      ctaLabel: "Réserver un appel tarifaire",
    },
    finalCta: {
      headline: "Mettez en place des opérations financières plus propres.",
      description:
        "Nous examinerons le flux financier, vous recommanderons la configuration et vous présenterons le prix de départ.",
      primaryLabel: "Réserver un appel",
      secondaryLabel: "Voir les tarifs",
    },
  },
  inventory: {
    hero: {
      productDescriptor: "pour les Stocks",
      headline: "Suivi des stocks et des actifs avec accès contrôlé.",
      subheadline:
        "Sachez ce qui existe, où cela se trouve et qui en est responsable. Configuré avec vos emplacements, catégories et flux de réapprovisionnement.",
      primaryCtaLabel: "Réserver une démo",
      secondaryCtaLabel: "Comment fonctionne l'intégration",
    },
    previewSection: {
      headline: "Stockroom en action",
      subheadline: "Articles, emplacements, alertes de réapprovisionnement et suivi des actifs.",
      frameTitle: "Stockroom Inventory",
      searchPlaceholder: "Rechercher des articles, emplacements...",
      filters: ["Emplacement", "Catégorie"],
      tabLabels: ["Articles", "Emplacements", "Réapprovisionnement", "Actifs"],
    },
    personaSection: {
      headline: "Conçu pour les équipes qui suivent et gèrent",
      subheadline:
        "Que vous comptiez les stocks, gériez les équipements ou meniez des audits.",
    },
    problemSection: {
      headline: "Remplacez le chaos",
      subheadline:
        "Passez de comptages manuels et de dossiers manquants à des opérations de stock structurées.",
      items: [
        { before: "Stocks comptés manuellement sur papier", after: "Niveaux de stocks en temps réel avec suivi des emplacements" },
        { before: "Réapprovisionnements déclenchés au hasard", after: "Alertes basées sur des seuils avant la rupture de stock" },
        { before: "Aucun enregistrement sur qui possède quel équipement", after: "Historique complet des emprunts avec suivi des retours" },
        { before: "La préparation de l'audit prend des jours de nettoyage", after: "Dossiers toujours à jour et prêts pour examen" },
      ],
    },
    outcomesSection: {
      headline: "Ce qui change dès le premier jour",
      subheadline: "Une valeur claire et immédiate — pas des promesses.",
      snapshotLabel: "Aperçu de l'activité",
      items: [
        {
          headline: "Savoir ce qui existe et où cela se trouve",
          description: "Dossiers consultables avec suivi des emplacements et filtrage par catégorie.",
        },
        {
          headline: "Alertes de réapprovisionnement et contrôles de base",
          description: "Alertes basées sur des seuils avant la rupture de stock des articles.",
        },
        {
          headline: "Transmissions et responsabilité plus propres",
          description: "Historique d'attribution pour les équipements et les actifs.",
        },
        {
          headline: "Dossiers prêts pour l'audit pour les actifs et les stocks",
          description: "Documentation propre pour la conformité et le reporting.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Fonctionnalités clés",
      subheadline: "Tout ce dont vous avez besoin, configuré et prêt.",
      items: [
        {
          title: "Suivi des articles",
          description: "Catalogue basé sur les SKU avec quantités, coûts et gestion des catégories.",
        },
        {
          title: "Gestion des emplacements",
          description: "Suivi multi-entrepôts avec sous-emplacements et flux de transfert.",
        },
        {
          title: "Alertes de réapprovisionnement",
          description: "Seuils configurables avec notifications et quantités suggérées.",
        },
        {
          title: "Suivi des actifs",
          description: "Cycle de vie des équipements, de l'acquisition à l'amortissement et la mise au rebut.",
        },
        {
          title: "Emprunts et retours",
          description: "Suivez qui possède quoi avec approbation des emprunts et rappels de retour.",
        },
        {
          title: "Piste d'audit",
          description: "Historique complet de chaque mouvement, ajustement et transfert.",
        },
      ],
    },
    workflowSection: {
      headline: "Votre parcours de mise en place",
      subheadline: "Du premier accès aux opérations quotidiennes en quatre étapes.",
      steps: [
        {
          title: "Configurer la structure",
          description: "Mise en place des emplacements, catégories et seuils.",
        },
        {
          title: "Attribuer les rôles et autorisations",
          description: "Définition des rôles d'entrepôt, des niveaux d'accès et des règles d'emprunt.",
        },
        {
          title: "Importer les données",
          description: "Migration et validation des fiches articles et des niveaux de stocks.",
        },
        {
          title: "Exécuter le flux de travail quotidien",
          description: "Suivi des stocks, traitement des réapprovisionnements, gestion des emprunts.",
        },
      ],
    },
    governanceSection: {
      headline: "Contrôler qui fait quoi",
      subheadline: "Rôles, autorisations et chaînes d'approbation intégrés dès le premier jour.",
    },
    onboardingSection: {
      headline: "Configuré pour votre équipe, pas seulement activé",
      subheadline:
        "Nous gérons le déploiement, la configuration, la formation et le support administratif continu.",
    },
    pricingSection: {
      note:
        "Stockroom™ pour les Stocks commence à partir de 500 EUR par mois, selon le nombre d'utilisateurs et la configuration.",
      setupNote:
        "La configuration est incluse dans les forfaits Foundation Build ou disponible sous forme de frais d'intégration fixes.",
      ctaLabel: "Réserver un appel tarifaire",
    },
    finalCta: {
      headline: "Configurez les stocks avec un contrôle rigoureux.",
      description:
        "Nous examinerons le flux de stock, vous recommanderons la configuration et vous présenterons le prix de départ.",
      primaryLabel: "Réserver un appel",
      secondaryLabel: "Voir les tarifs",
    },
  },
  tasks: {
    hero: {
      productDescriptor: "pour les Tâches",
      headline: "La gestion des tâches et du travail configurée pour l'exécution.",
      subheadline:
        "Planifiez le travail, attribuez les responsabilités et maintenez l'exécution visible. Configuré avec vos structures de projets, flux de travail et rôles d'équipe.",
      primaryCtaLabel: "Réserver une démo",
      secondaryCtaLabel: "Comment fonctionne l'intégration",
    },
    previewSection: {
      headline: "Cadence en action",
      subheadline: "Tableaux, listes, approbations et calendriers dans un seul espace de travail.",
      frameTitle: "Cadence Tasks",
      searchPlaceholder: "Rechercher des tâches, projets...",
      filters: ["Projet", "Responsable"],
      tabLabels: ["Tableau", "Liste", "Approbations", "Calendrier"],
    },
    personaSection: {
      headline: "Conçu pour les équipes opérationnelles",
      subheadline:
        "Que vous gériez des projets, coordonniez des équipes ou suiviez des approbations.",
    },
    problemSection: {
      headline: "Remplacez le chaos",
      subheadline:
        "Passez de fils de discussion dispersés et d'un suivi manuel à une gestion des tâches structurée.",
      items: [
        { before: "Tâches suivies dans des discussions de chat", after: "Tableaux de tâches structurés avec dates limites et responsables" },
        { before: "Aucune responsabilité ou propriété claire", after: "Chaque tâche est attribuée avec un statut visible" },
        { before: "Progression signalée manuellement en réunion", after: "Tableaux et tableaux de bord en temps réel" },
        { before: "Le travail récurrent passe entre les mailles du filet", after: "Tâches récurrentes automatisées avec rappels" },
      ],
    },
    outcomesSection: {
      headline: "Ce qui change dès le premier jour",
      subheadline: "Une valeur claire et immédiate — pas des promesses.",
      snapshotLabel: "Aperçu de l'activité",
      items: [
        {
          headline: "Attributions et dates limites claires",
          description: "Chaque tâche a un responsable, une date d'échéance et un statut visible.",
        },
        {
          headline: "Moins de tâches abandonnées",
          description: "Rien ne se perd dans les discussions de chat ou les tableurs dispersés.",
        },
        {
          headline: "Une meilleure coordination entre les équipes",
          description: "Visibilité inter-équipes sans microgestion.",
        },
        {
          headline: "Progression visible sans mises à jour manuelles",
          description: "Les tableaux de statut et les rapports se mettent à jour au fil de l'exécution du travail.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Fonctionnalités clés",
      subheadline: "Tout ce dont vous avez besoin, configuré et prêt.",
      items: [
        {
          title: "Tableaux Kanban",
          description: "Tableaux visuels avec étapes par glisser-déposer et couloirs d'activité.",
        },
        {
          title: "Attribution des tâches",
          description: "Attribuez des responsables, des observateurs et des dates d'échéance avec notifications.",
        },
        {
          title: "Flux d'approbation",
          description: "Étapes de révision et de validation intégrées pour les livrables.",
        },
        {
          title: "Calendriers de projets",
          description: "Vues de style Gantt avec jalons et dépendances.",
        },
        {
          title: "Tâches récurrentes",
          description: "Création automatisée de tâches planifiées avec des modèles.",
        },
        {
          title: "Tableaux de bord de progression",
          description: "Taux de réussite, éléments en retard et vues sur la charge de travail de l'équipe.",
        },
      ],
    },
    workflowSection: {
      headline: "Votre parcours de mise en place",
      subheadline: "Du premier accès aux opérations quotidiennes en quatre étapes.",
      steps: [
        {
          title: "Configurer la structure",
          description: "Mise en place des projets, des étapes de flux de travail et des modèles.",
        },
        {
          title: "Attribuer les rôles et autorisations",
          description: "Définition des rôles d'équipe, de la visibilité des tâches et des flux d'approbation.",
        },
        {
          title: "Importer les données",
          description: "Importation des tâches existantes et des éléments récurrents.",
        },
        {
          title: "Exécuter le flux de travail quotidien",
          description: "Attribution des tâches, suivi de la progression, validation des livrables.",
        },
      ],
    },
    governanceSection: {
      headline: "Contrôler qui fait quoi",
      subheadline: "Rôles, autorisations et chaînes d'approbation intégrés dès le premier jour.",
    },
    onboardingSection: {
      headline: "Configuré pour votre équipe, pas seulement activé",
      subheadline:
        "Nous gérons le déploiement, la configuration, la formation et le support administratif continu.",
    },
    pricingSection: {
      note:
        "Cadence™ pour les Tâches commence à partir de 500 EUR par mois, selon le nombre d'utilisateurs et la configuration.",
      setupNote:
        "La configuration est incluse dans les forfaits Foundation Build ou disponible sous forme de frais d'intégration fixes.",
      ctaLabel: "Réserver un appel tarifaire",
    },
    finalCta: {
      headline: "Gerez le travail au sein d'un seul système.",
      description:
        "Nous examinerons le flux de tâches, vous recommanderons la configuration et vous présenterons le prix de départ.",
      primaryLabel: "Réserver un appel",
      secondaryLabel: "Voir les tarifs",
    },
  },
};
