import type { ServiceDetailId, ServiceDetailContent } from "./servicePageContent";

export const servicePageContentFr: Record<ServiceDetailId, ServiceDetailContent> = {
  brand: {
    hero: {
      eyebrow: "Systèmes de marque et de croissance",
      headline: "Donnez aux acheteurs une raison plus claire de vous faire confiance.",
      subheadline:
        "Je façonne la marque, le site web et les supports de vente pour que l'entreprise paraisse plus affûtée, plus établie et plus facile à choisir.",
      primaryCtaLabel: "Voir les tarifs",
      secondaryCtaLabel: "Réserver un appel",
    },
    summaryPanel: {
      mostRequested: {
        label: "Le plus demandé",
        title: "Refonte de site web",
        body: "Souvent associé à un message plus clair et à une structure d'étude de cas.",
      },
      typicalStart: {
        label: "Démarrage type",
        title: "Sprint de marque",
        body: "Une approche ciblée pour consolider les bases avant de les décliner sur tous vos supports.",
      },
      includedLabel: "Inclus dans ce service",
      readyToScopeLabel: "Prêt à être cadré",
      includedItems: ["Système de marque", "Site web et CMS", "Supports de vente"],
    },
    outcomesSection: {
      eyebrow: "Ce qui s'améliore",
      headline:
        "Ce qui change lorsque votre marque et votre site web avancent enfin dans la même direction",
      subheadline:
        "Ce service est conçu pour les entreprises qui font déjà de l'excellent travail, mais qui ne présentent pas cette qualité de manière assez claire aux acheteurs.",
      items: [
        {
          title: "Une première impression plus forte",
          body: "L'entreprise paraît plus établie, plus cohérente et inspire plus facilement confiance au premier coup d'œil.",
        },
        {
          title: "Un positionnement plus clair",
          body: "Les prospects comprennent ce que vous faites, ce qui différencie votre offre et pourquoi ils devraient continuer à lire.",
        },
        {
          title: "Des supports de vente qui restent alignés",
          body: "Les présentations, propositions et fiches de synthèse ne dérivent plus à chaque fois que quelqu'un les recrée de zéro.",
        },
        {
          title: "Un système qui continue de fonctionner",
          body: "Les modèles, la structure du CMS et les guides rendent les futures mises à jour beaucoup moins chaotiques.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "Pourquoi nos clients nous choisissent",
      headline:
        "L'entreprise est solide à l'intérieur, mais son image extérieure reste à la traîne",
      subheadline:
        "Lorsque la crédibilité, la conversion ou la cohérence font défaut, les acheteurs le ressentent avant même que quiconque dans l'équipe n'ait l'occasion d'expliquer les nuances.",
      reasons: [
        "Votre travail est solide, mais la marque et le site web le sous-évaluent.",
        "Les acheteurs n'obtiennent pas assez de clarté ou de confiance à partir du site actuel.",
        "L'entreprise a grandi, mais ses supports donnent toujours l'impression d'être bricolés.",
        "Vous devez affiner votre histoire avant un lancement, une phase de croissance ou un cycle de vente.",
      ],
    },
    deliverablesSection: {
      title: "Ce qui est livré",
      items: [
        {
          title: "Système de marque",
          body: "Direction d'identité, règles visuelles, hiérarchie des messages et modèles réutilisables qui empêchent la marque de dériver.",
        },
        {
          title: "Site web et CMS",
          body: "Pages, structure et logique de publication articulées autour des questions des acheteurs et du parcours de conversion, et non du simple nombre de pages.",
        },
        {
          title: "Supports de vente",
          body: "Présentations, propositions et formats d'études de cas cohérents avec la marque et plus faciles à mettre à jour sous pression.",
        },
      ],
    },
    signalSection: {
      eyebrow: "Points d'impact",
      headline: "Là où la différence se fait généralement sentir en premier",
      subheadline:
        "Ce sont les parties de la marque et du système de croissance qui ont tendance à inspirer plus rapidement la confiance des acheteurs une fois nettoyées.",
      items: [
        {
          title: "Hiérarchie du site web",
          body: "Une structure de page plus affûtée, un meilleur positionnement des éléments de preuve et une logique d'étape suivante plus claire.",
        },
        {
          title: "Supports réutilisables",
          body: "Des supports conçus pour que l'équipe puisse créer de nouveaux visuels sans avoir à réinventer le design à chaque fois.",
        },
        {
          title: "Cohérence de la marque",
          body: "L'entreprise recommence à présenter un visage unique sur le web, les documents et les présentations.",
        },
        {
          title: "Confiance face au client",
          body: "Une plus grande cohérence visuelle et verbale tend à renforcer le sérieux avec lequel l'entreprise est perçue.",
        },
      ],
    },
    controlsSection: {
      eyebrow: "Contrôles",
      headline: "Ce qui maintient les flux de travail utilisables et sécurisés",
      subheadline:
        "L'automatisation pratique requiert plus qu'un simple modèle. Elle a besoin d'approbations, de visibilité et de règles pour les cas où le niveau de confiance est faible.",
      items: [
        "Approbations humaines là où le flux de travail nécessite encore du jugement",
        "Autorisations basées sur les rôles pour les systèmes sources et les résultats",
        "Journaux d'audit et surveillance pour plus de visibilité",
        "Chemins de secours pour que les pannes ne passent pas inaperçues",
      ],
    },
    pricingSection: {
      eyebrow: "Tarifs",
      headline: "Comment nos clients démarrent généralement",
    },
    deliverySection: {
      subheadline:
        "Ce service est structuré pour prendre des décisions tôt, construire par étapes et vous laisser avec un système capable de continuer à évoluer après le lancement.",
      steps: [
        {
          title: "Clarifier le positionnement",
          description:
            "Nous nous alignons sur l'audience, l'offre, les preuves et les éléments de la marque actuelle à conserver, à ajuster ou à remplacer.",
        },
        {
          title: "Façonner le système",
          description:
            "Les messages, la structure des pages et les ressources réutilisables sont définis avant que le travail de détail ne commence à se multiplier.",
        },
        {
          title: "Construire la couche visible",
          description:
            "La marque, le site web et les supports de vente sont exécutés par jalons afin que les retours restent ciblés.",
        },
        {
          title: "Lancer et transférer",
          description:
            "Les modèles, la logique et les conseils de publication sont livrés afin que l'entreprise puisse continuer à bien utiliser le système.",
        },
        {
          title: "Continuer à améliorer si nécessaire",
          description:
            "Les abonnements mensuels peuvent couvrir les mises à jour, les nouvelles pages et les futurs besoins en supports sans repartir de zéro.",
        },
      ],
    },
    faqSection: {
      eyebrow: "FAQ",
      headline: "Questions que les clients posent généralement avant de commencer",
      subheadline:
        "Si vous savez déjà que vous avez besoin de bases plus solides pour votre marque et votre site web, voici les questions pratiques qui viennent généralement ensuite.",
      items: [
        {
          q: "Pouvons-nous commencer par le site web uniquement ?",
          a: "Oui. De nombreux clients commencent par là. Si le message ou l'identité ont besoin d'être affinés en premier, nous le signalerons tôt afin que le site n'hérite pas des mêmes faiblesses.",
        },
        {
          q: "Rédigez-vous les textes ?",
          a: "Je peux concevoir le cadre éditorial, la structure des pages et la direction du contenu. La rédaction complète peut également être incluse si nécessaire.",
        },
        {
          q: "Pourrons-nous mettre à jour les éléments après le lancement ?",
          a: "Oui. L'objectif est d'obtenir un système que votre entreprise peut continuer à utiliser, et non une simple refonte visuelle ponctuelle qui deviendrait difficile à maintenir.",
        },
        {
          q: "Travaillez-vous uniquement avec un seul CMS ?",
          a: "Non. Nous recommandons la configuration qui correspond à votre rythme de publication, à la taille de votre équipe et à votre niveau de confort technique.",
        },
        {
          q: "Pouvez-vous travailler avec une marque existante ?",
          a: "Oui. Je peux affiner ce qui existe déjà, construire les pièces manquantes autour, ou créer un système plus propre si le système actuel fait obstacle.",
        },
        {
          q: "Qu'est-ce qui est inclus dans un abonnement ?",
          a: "Les abonnements couvrent les mises à jour, les nouvelles pages, les ajustements de conception et l'amélioration continue une fois les bases principales établies.",
        },
      ],
    },
    ctaBand: {
      headline: "Renforcez la confiance des acheteurs.",
      description:
        "Je définirai le premier correctif de marque, de site web ou de support de vente et vous présenterai les tarifs.",
      primaryLabel: "Réserver un appel",
      secondaryLabel: "Voir les tarifs",
    },
  },
  ops: {
    hero: {
      eyebrow: "Systèmes d'opérations internes",
      headline: "Remplacez les fichiers dispersés et le savoir informel par un système d'exploitation plus propre.",
      subheadline:
        "Je structure the systèmes sous-jacents de l'entreprise pour que l'information soit plus facile à trouver, le travail récurrent plus facile à suivre et l'intégration des collaborateurs moins lourde au quotidien.",
      primaryCtaLabel: "Voir les tarifs",
      secondaryCtaLabel: "Réserver un appel",
    },
    summaryPanel: {
      mostRequested: {
        label: "Le plus demandé",
        title: "Bibliothèque de procédures (SOP)",
        body: "Généralement associée à une structure documentaire et à des règles de propriété plus claires.",
      },
      typicalStart: {
        label: "Démarrage type",
        title: "Audit opérationnel",
        body: "Une approche ciblée pour identifier ce qui doit être reconstruit et ce qui peut être conservé.",
      },
      includedLabel: "Inclus dans ce service",
      readyToScopeLabel: "Prêt à être cadré",
      includedItems: [
        "Architecture SharePoint",
        "Bibliothèque de procédures (SOP)",
        "Intégration et gouvernance",
      ],
    },
    outcomesSection: {
      eyebrow: "Ce qui s'améliore",
      headline:
        "Ce qui change lorsque la couche opérationnelle cesse d'exister uniquement dans la tête des collaborateurs",
      subheadline:
        "Ce service s'adresse aux entreprises qui ont besoin de plus de clarté en coulisses afin que le travail quotidien soit plus facile à exécuter et à transmettre.",
      items: [
        {
          title: "Moins de temps perdu dans le chaos des fichiers",
          body: "Les collaborateurs savent où se trouvent les éléments, comment fonctionnent les accès et par quoi le travail récurrent doit commencer.",
        },
        {
          title: "Des processus que l'on peut réellement suivre",
          body: "Le travail récurrent devient plus facile à répéter car les étapes, les responsabilités et les attentes sont plus claires.",
        },
        {
          title: "Une intégration plus rapide",
          body: "Les nouvelles recrues bénéficient d'un parcours d'intégration plus propre au lieu d'apprendre leur rôle en courant après le savoir informel.",
        },
        {
          title: "De meilleures transitions opérationnelles",
          body: "Les approbations, les demandes et le travail répétitif suivent des parcours plus prévisibles plutôt que des chaînes d'e-mails interminables.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "Pourquoi nos clients nous choisissent",
      headline:
        "L'entreprise a de l'élan, mais la structure interne n'a pas suivi",
      subheadline:
        "Ce décalage se traduit généralement par des questions répétitives, des transmissions laborieuses, une intégration lente et une trop grande dépendance opérationnelle envers quelques personnes clés.",
      reasons: [
        "L'entreprise a grandi, mais la structure interne sous-jacente donne toujours l'impression d'être improvisée.",
        "Les managers réexpliquent sans cesse les mêmes tâches parce que la couche de processus est trop mince.",
        "Les fichiers, les autorisations ou la propriété des documents semblent désordonnés et incohérents.",
        "L'intégration dépend trop de l'observation passive et de la mémoire au lieu d'un système reproductible.",
      ],
    },
    deliverablesSection: {
      title: "Ce qui est livré",
      items: [
        {
          title: "Structure de l'information",
          body: "Architecture SharePoint, logique de bibliothèque, autorisations et organisation des documents pour une navigation plus fluide.",
        },
        {
          title: "Procédures (SOP) et modèles",
          body: "Travail récurrent documenté assez clairement pour réduire les réexplications, les erreurs et la dépendance envers les managers.",
        },
        {
          title: "Intégration et gouvernance",
          body: "Guides de rôles, notes de gouvernance et attentes opérationnelles établissant une base de référence plus saine pour l'équipe.",
        },
      ],
    },
    signalSection: {
      eyebrow: "Points d'impact",
      headline: "Là où la différence se fait généralement sentir en premier",
      subheadline:
        "Ce sont les améliorations opérationnelles que les clients perçoivent généralement rapidement une fois que la structure devient plus claire.",
      items: [
        {
          title: "Recherche simplifiée",
          body: "Les bons documents et les références de processus cessent d'être enfouis dans des dossiers personnels ou dans les mémoires.",
        },
        {
          title: "Flux de demandes plus fluide",
          body: "Les approbations et les tâches récurrentes commencent à suivre un chemin visible plutôt qu'improvisé.",
        },
        {
          title: "Une documentation enfin utilisable",
          body: "Les procédures (SOP) sont rédigées pour être appliquées, mises à jour et trouvées là où le travail a lieu.",
        },
        {
          title: "Responsabilités clarifiées",
          body: "Les autorisations, la responsabilité des mises à jour et les règles de gouvernance cessent d'être implicites et deviennent explicites.",
        },
      ],
    },
    pricingSection: {
      eyebrow: "Tarifs",
      headline: "Comment nos clients démarrent généralement",
    },
    deliverySection: {
      subheadline:
        "Ce service est conçu pour réduire rapidement les freins opérationnels sans se transformer en un exercice de documentation de six mois.",
      steps: [
        {
          title: "Auditer l'état actuel",
          description:
            "Nous identifions les points de friction, les questions répétitives et les problèmes structurels qui alourdissent le quotidien.",
        },
        {
          title: "Définir le modèle opérationnel",
          description:
            "Nous cartographions les responsabilités, les accès, la structure documentaire et les flux de travail qui doivent devenir répétables.",
        },
        {
          title: "Construire la nouvelle couche",
          description:
            "La structure, les procédures (SOP), les modèles et les parcours de demande sont créés dans un ordre logique d'utilisation plutôt que tout en même temps.",
        },
        {
          title: "Former et transférer",
          description:
            "Les managers et les membres de l'équipe reçoivent les conseils nécessaires pour bien utiliser le système et le maintenir à jour.",
        },
        {
          title: "Maintenir si nécessaire",
          description:
            "Les abonnements mensuels peuvent couvrir les mises à jour, la création de nouvelles procédures (SOP) et les améliorations progressives après le lancement.",
        },
      ],
    },
    faqSection: {
      eyebrow: "FAQ",
      headline: "Questions que les clients posent généralement avant de commencer",
      subheadline:
        "Si vous savez que l'entreprise a besoin d'opérations plus propres, voici les questions pratiques qui viennent généralement ensuite.",
      items: [
        {
          q: "Travaillez-vous avec une configuration SharePoint existante ?",
          a: "Oui. Je peux restructurer l'existant, le simplifier ou construire une couche opérationnelle plus propre autour des éléments qui méritent d'être conservés.",
        },
        {
          q: "Combien de procédures (SOP) sont généralement incluses ?",
          a: "Cela dépend de l'étendue, mais nous commençons généralement par les flux de travail qui créent le plus de friction ou de répétition afin que la documentation soit rapidement utile.",
        },
        {
          q: "Pouvez-vous former les collaborateurs après le déploiement ?",
          a: "Oui. Le transfert peut inclure des démonstrations, des sessions de formation et des conseils de gouvernance afin que le système soit plus facile à maintenir.",
        },
        {
          q: "Et si nous utilisons Google Workspace ou une autre plateforme ?",
          a: "Les mêmes principes opérationnels s'appliquent. Je peux adapter la structure à la plateforme que votre entreprise utilise réellement.",
        },
        {
          q: "Combien de temps prend généralement la mise en place ?",
          a: "Les nettoyages plus restreints peuvent aller vite. Les projets d'architecture plus larges et de rédaction de procédures prennent généralement quelques semaines, selon le nombre de flux de travail concernés.",
        },
        {
          q: "Les abonnements mensuels peuvent-ils inclure la création de nouvelles procédures (SOP) ?",
          a: "Oui. Les offres Standard et Priority peuvent couvrir la nouvelle documentation, les mises à jour et l'amélioration continue des flux de travail une fois la configuration principale achevée.",
        },
      ],
    },
    ctaBand: {
      headline: "Clarifiez vos opérations.",
      description: "Je cadrerai la première réorganisation opérationnelle et vous présenterai les tarifs.",
      primaryLabel: "Réserver un appel",
      secondaryLabel: "Voir les tarifs",
    },
  },
  agents: {
    hero: {
      eyebrow: "Agents IA et Automatisation",
      headline: "Automatisez les tâches répétitives sans perdre le contrôle.",
      subheadline:
        "Je conçois des flux d'agents pratiques pour le routage, la rédaction, les rapports et le support de connaissances, avec approbations, limites et gestion sécurisée des erreurs intégrées dès le départ.",
      primaryCtaLabel: "Voir les tarifs",
      secondaryCtaLabel: "Réserver un appel",
    },
    summaryPanel: {
      mostRequested: {
        label: "Le plus demandé",
        title: "Automatisation de la réception",
        body: "Un excellent point de départ lorsque le routage répétitif consomme trop de temps.",
      },
      typicalStart: {
        label: "Démarrage type",
        title: "Pilote d'agent",
        body: "Un moyen ciblé de prouver la valeur avant de l'étendre à d'autres flux.",
      },
      includedLabel: "Inclus dans ce service",
      readyToScopeLabel: "Prêt à être cadré",
      includedItems: [
        "Automatisation des flux",
        "Support de connaissances",
        "Contrôles et approbations",
      ],
    },
    outcomesSection: {
      eyebrow: "Ce qui s'améliore",
      headline: "Ce qui change lorsque l'automatisation est construite autour de votre flux de travail réel",
      subheadline:
        "Ce service s'adresse aux équipes qui souhaitent que l'automatisation leur fasse gagner du temps, soutienne leurs décisions et reste suffisamment visible pour inspirer confiance au quotidien.",
      items: [
        {
          title: "Moins de travail administratif répétitif",
          body: "Les automatisations prennent en charge le routage répétitif, la rédaction, les résumés et le travail de préparation qui ne devraient pas requérir une attention humaine totale à chaque fois.",
        },
        {
          title: "Des transmissions plus propres",
          body: "Les demandes transitent par des chemins plus visibles et prévisibles au lieu de s'enliser dans des boîtes de réception individuelles.",
        },
        {
          title: "Un accès plus rapide aux connaissances approuvées",
          body: "Les équipes obtiennent des réponses précises et contextualisées à partir des bonnes sources, sans avoir à fouiller dans plusieurs outils ni reposer les mêmes questions.",
        },
        {
          title: "Une automatisation plus sûre",
          body: "Les approbations, les journaux et les logiques de secours facilitent la confiance dans les flux de travail, car vous pouvez voir concrètement ce qu'ils font.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "Pourquoi nos clients nous choisissent",
      headline:
        "L'opportunité est évidente, mais l'entreprise a besoin d'un moyen plus sûr de démarrer",
      subheadline:
        "La plupart des équipes n'ont pas besoin d'une grande stratégie d'IA pour commencer. Elles ont besoin d'un flux de travail ciblé qui prouve sa valeur, maintient les approbations nécessaires et ne crée pas de nouveaux risques.",
      reasons: [
        "Les mêmes tâches répétitives consomment votre temps dans le support, les opérations ou le reporting.",
        "L'entreprise s'intéresse à l'IA, mais souhaite un modèle de fonctionnement pratique plutôt qu'un saut risqué dans l'inconnu.",
        "Les connaissances sont dispersées entre plusieurs outils et personnes, ce qui ralentit l'obtention de réponses pourtant simples.",
        "Vous souhaitez que l'automatisation vous fasse gagner du temps sans supprimer les points de contrôle humains là où le jugement reste primordial.",
      ],
    },
    deliverablesSection: {
      title: "Ce qui est livré",
      items: [
        {
          title: "Automatisation de flux de travail",
          body: "Réception, routage, rédaction, résumés et tâches opérationnelles répétitives conçus autour du flux de travail réel plutôt que d'un scénario de démonstration.",
        },
        {
          title: "Support de connaissances",
          body: "Réponses respectant les autorisations d'accès et flux de recherche ancrés dans des sources approuvées, avec contexte et citations si nécessaire.",
        },
        {
          title: "Couche de contrôle",
          body: "Approbations, limites de rôles, journalisation et règles d'escalade qui maintiennent le flux de travail visible et plus facile à sécuriser.",
        },
      ],
    },
    signalSection: {
      eyebrow: "Points d'impact",
      headline: "Là où la différence se fait généralement sentir en premier",
      subheadline:
        "Ce sont les améliorations opérationnelles que les clients perçoivent généralement rapidement une fois que la structure devient plus claire.",
      items: [
        {
          title: "Moins de routage manuel",
          body: "Les demandes et les données commencent à être acheminées plus rapidement au bon endroit, réduisant le tri et les relances de l'équipe.",
        },
        {
          title: "De meilleurs premiers jets",
          body: "L'automatisation crée un point de départ utile pour que vos équipes consacrent plus de temps à réviser et à améliorer plutôt qu'à reconstruire à partir de zéro.",
        },
        {
          title: "Visibilité opérationnelle",
          body: "La surveillance et les journaux permettent de comprendre facilement comment le flux se comporte et là où il doit être ajusté.",
        },
        {
          title: "Gestion des erreurs plus sûre",
          body: "Les cas incertains font l'objet d'une remontée d'alerte plutôt que de simuler une réponse, ce qui rend généralement un pilote viable en conditions réelles.",
        },
      ],
    },
    pricingSection: {
      eyebrow: "Tarifs",
      headline: "Comment nos clients démarrent généralement",
    },
    deliverySection: {
      subheadline:
        "Ce service est conçu pour prouver sa valeur avec un flux de travail ciblé avant que vous ne décidiez d'étendre la démarche.",
      steps: [
        {
          title: "Cartographier le flux",
          description:
            "Nous isolons le travail répétitif, les points de décision et les systèmes sources impliqués dans le cas d'usage.",
        },
        {
          title: "Définir les points de contrôle",
          description:
            "Les approbations, les journaux d'audit, les règles d'escalade et les limites d'accès sont définis avant le début du développement.",
        },
        {
          title: "Développer le pilote",
          description:
            "Le flux de travail est implémenté et testé de manière contrôlée afin que son comportement de fonctionnement réel soit visible.",
        },
        {
          title: "Lancer prudemment",
          description:
            "Le premier déploiement se fait avec la surveillance et les points de contrôle humains toujours actifs.",
        },
        {
          title: "Ajuster et étendre",
          description:
            "Si le pilote fait ses preuves, nous l'affinons ou étendons le même modèle opérationnel à des flux de travail adjacents.",
        },
      ],
    },
    faqSection: {
      eyebrow: "FAQ",
      headline: "Questions que les clients posent généralement avant de commencer",
      subheadline:
        "Si l'entreprise souhaite une automatisation pratique plutôt que de vagues expérimentations de l'IA, voici les questions qui viennent généralement ensuite.",
      items: [
        {
          q: "Les automatisations remplacent-elles nos collaborateurs ?",
          a: "Non. Le but est de supprimer le travail répétitif et d'améliorer les transmissions afin que les collaborateurs consacrent plus de temps au jugement, aux relations et aux cas particuliers.",
        },
        {
          q: "Pouvons-nous commencer par un seul cas d'usage ?",
          a: "Oui. Dans la plupart des cas, c'est la meilleure façon de commencer. Un pilote ciblé est le moyen le plus rapide de prouver la valeur et de vérifier la viabilité opérationnelle.",
        },
        {
          q: "Comment gérez-vous la sécurité et les autorisations ?",
          a: "Nous définissons les accès avec soin, maintenons des approbations là où c'est nécessaire et ajoutons des journaux pour que l'équipe puisse vérifier ce qui s'est passé et pourquoi.",
        },
        {
          q: "Que se passe-t-il lorsque le flux de travail fait face à une incertitude ?",
          a: "Il doit remonter une alerte proprement au lieu de simuler. La gestion sécurisée des erreurs fait partie intégrante de la livraison, ce n'est pas une option secondaire.",
        },
        {
          q: "Quelles plateformes utilisez-vous ?",
          a: "Nous choisissons les technologies en fonction du flux de travail, des exigences de fiabilité et des systèmes déjà en place. Le modèle de fonctionnement importe plus que le choix de l'outil à la mode.",
        },
        {
          q: "Surveillez-vous les flux après leur déploiement ?",
          a: "Oui. Les abonnements peuvent couvrir la surveillance, les mises à jour de logique, l'ajustement et les améliorations incrémentales des flux après le lancement.",
        },
      ],
    },
    ctaBand: {
      headline: "Pilotez l'automatisation en toute sécurité.",
      description:
        "J'identifierai le premier flux de travail méritant d'être automatisé et vous présenterai les tarifs.",
      primaryLabel: "Réserver un appel",
      secondaryLabel: "Voir les tarifs",
    },
  },
};
