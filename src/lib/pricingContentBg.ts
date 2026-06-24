import { STRIPE_PRICES } from "./stripe";
import type { ServicePricingTrack, SoftwarePricingSummary } from "./pricingContent";

const defaultBookHref = "/book";

export const servicePricingTracksBg: Record<ServicePricingTrack["id"], ServicePricingTrack> = {
  brand: {
    id: "brand",
    anchor: "brand-pricing",
    name: "Системи за бранд и растеж",
    summary:
      "Цени за брандиране, уебсайтове и материали за продажби на едно място — от лимитирани стартови оферти до месечни абонаменти.",
    detailHref: "/services/brand",
    pricingIntro:
      "Изберете фиксирана стартова оферта, по-голям цялостен проект или текуща поддръжка, след като основите са поставени.",
    recommended: {
      headline: "Препоръчителни стартови точки",
      description: "Често срещани начални предложения с фиксиран обхват и времеви рамки.",
      offers: [
        {
          name: "Спринт за бранд система",
          inclusions: ["Идентичност и насоки", "Пакет с шаблони", "Библиотека с бранд активи"],
          timeline: "10-15 работни дни",
          price: "Начало от EUR 3,500",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_sprint,
        },
        {
          name: "Изграждане на уебсайт и CMS",
          inclusions: ["Архитектура на сайта", "Настройка на CMS", "Страници за конверсия", "SEO основи"],
          timeline: "2-4 седмици",
          price: "Начало от EUR 5,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.web_build,
        },
        {
          name: "Комплект материали за продажби",
          inclusions: ["Система за търговски презентации", "Шаблони за предложения", "Формат за представяне на казуси"],
          timeline: "7-12 работни дни",
          price: "Начало от EUR 2,500",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sales_kit,
        },
      ],
    },
    menu: {
      headline: "Изберете индивидуални услуги",
      description:
        "Предлагат се отделно, когато имате нужда само от едно конкретно подобрение в момента.",
      items: [
        {
          name: "Оптимизация на конверсията на целева страница",
          startingPrice: "Начало от EUR 1,500",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.landing_page,
        },
        {
          name: "Пакет бранд шаблони",
          startingPrice: "Начало от EUR 1,200",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_template,
        },
        {
          name: "Преструктуриране на презентация за продажби",
          startingPrice: "Начало от EUR 2,000",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.pitch_deck,
        },
      ],
    },
    retainer: {
      headline: "Абонаментни планове",
      description:
        "Месечна поддръжка за актуализации, нови активи и итеративни подобрения, след като основните функции са пуснати в реално време.",
      tiers: [
        {
          tier: "Lite",
          inclusions: ["Малки текстови промени", "Леки корекции в дизайна", "Месечна среща за преглед"],
          responseTime: "Отговор в рамките на 3 работни дни",
          price: "EUR 800/месец",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["Актуализации на съдържанието", "Промени в дизайна", "Изграждане на нови страници", "Приоритетна поддръжка"],
          responseTime: "Отговор в рамките на 1 работен ден",
          price: "EUR 1,500/месец",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Неограничени промени", "Стратегически сесии", "Специализирана поддръжка", "Отговор в същия ден"],
          responseTime: "Отговор в същия ден",
          price: "EUR 2,500/месец",
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
    name: "Системи за вътрешни операции",
    summary:
      "Ценообразуване за оперативна настройка, обхващащо одити, SharePoint структура, разработване на SOP и месечна поддръжка.",
    detailHref: "/services/ops",
    pricingIntro:
      "Започнете с одит, цялостен проект за настройка или текуща поддръжка, след като основният оперативен слой е налице.",
    recommended: {
      headline: "Препоръчителни стартови точки",
      description: "Често срещани начални предложения с фиксиран обхват и времеви рамки.",
      offers: [
        {
          name: "Одит на операциите",
          inclusions: ["Оценка на текущото състояние", "Анализ на пропуските", "Доклад с препоръки"],
          timeline: "5-7 работни дни",
          price: "Начало от EUR 2,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_audit,
        },
        {
          name: "Настройка на SharePoint",
          inclusions: ["Архитектура на сайта", "Библиотеки за документи", "Модел на разрешенията", "Правила за управление"],
          timeline: "2-3 седмици",
          price: "Начало от EUR 4,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sharepoint_setup,
        },
        {
          name: "Пакет с SOP библиотека",
          inclusions: ["Документиране на 15-25 SOP", "Картографиране на ролите", "Контролни списъци за QA", "Работен процес за актуализации"],
          timeline: "2-3 седмици",
          price: "Начало от EUR 3,500",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sop_pack,
        },
      ],
    },
    menu: {
      headline: "Изберете индивидуални услуги",
      description:
        "Предлагат се отделно, когато имате нужда само от едно конкретно изчистване, а не от цялостно пренастройване.",
      items: [
        {
          name: "Ревизия на правата за достъп",
          startingPrice: "Начало от EUR 1,500",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.permissions_overhaul,
        },
        {
          name: "Създаване на SOP (на брой)",
          startingPrice: "Начало от EUR 800",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sop_creation,
        },
        {
          name: "Настройка на библиотека с шаблони",
          startingPrice: "Начало от EUR 1,200",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.template_library,
        },
      ],
    },
    retainer: {
      headline: "Абонаментни планове",
      description:
        "Месечна поддръжка за актуализации, нова документация и оперативна поддръжка след приключване на основната настройка.",
      tiers: [
        {
          tier: "Ops Maintenance Lite",
          inclusions: ["Актуализации на SOP", "Незначителни промени в SharePoint", "Месечен преглед"],
          responseTime: "Отговор в рамките на 3 работни дни",
          price: "EUR 600/месец",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["Създаване и актуализация на SOP", "Промени в SharePoint", "Нови работни процеси", "Приоритетна поддръжка"],
          responseTime: "Отговор в рамките на 1 работен ден",
          price: "EUR 1,200/месец",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Неограничени промени", "Изграждане на нови системи", "Обучителни сесии", "Отговор в същия ден"],
          responseTime: "Отговор в същия ден",
          price: "EUR 2,000/месец",
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
    name: "AI Агенти и автоматизация",
    summary:
      "Ценообразуване на автоматизацията за пилотни работни процеси, целеви случаи на употреба и управляван мониторинг, след като първият слой е активен.",
    detailHref: "/services/agents",
    pricingIntro:
      "Започете с един ограничен пилотен проект за автоматизация, разширете до по-широк пакет от работни процеси или поддържайте системата настроена чрез управляван абонамент.",
    recommended: {
      headline: "Препоръчителни стартови точки",
      description: "Ангажименти за автоматизация с контролиран обхват, проектирани да създадат стойност бързо.",
      offers: [
        {
          name: "Пилотен агент",
          inclusions: ["Един случай на употреба", "Контролиран обхват", "Работни процеси за одобрение", "Настройка на мониторинг"],
          timeline: "10-15 работни дни",
          price: "Начало от EUR 4,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agent_pilot,
        },
        {
          name: "Пакет с работни процеси за агенти",
          inclusions: ["2-3 случая на употреба", "Оркестрация между различни работни процеси", "Настройка на управлението", "Обучение на екипа"],
          timeline: "3-5 седмици",
          price: "Начало от EUR 8,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agent_pack,
        },
        {
          name: "Настройка на агент за знания",
          inclusions: ["Търсене, съобразено с достъпа", "Цитиране на източници", "Достъп на базата на роли", "Табло за мониторинг"],
          timeline: "2-4 седмици",
          price: "Начало от EUR 5,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.knowledge_agent,
        },
      ],
    },
    menu: {
      headline: "Изберете индивидуални услуги",
      description:
        "Целевите работни процеси се предлагат отделно, когато имате нужда само от един конкретен случай на автоматизация в момента.",
      items: [
        {
          name: "Агент за сортиране на работния поток",
          startingPrice: "Начало от EUR 2,500",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.triage_agent,
        },
        {
          name: "Работен процес за резюмиране на отчети",
          startingPrice: "Начало от EUR 2,000",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.report_summarization,
        },
        {
          name: "Работен процес за приемане и маршрутизация",
          startingPrice: "Начало от EUR 2,000",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.intake_routing,
        },
      ],
    },
    retainer: {
      headline: "Управлявани абонаменти",
      description:
        "Текущ мониторинг, фина настройка на работния процес и поддръжка след стартиране на първия слой на автоматизация.",
      tiers: [
        {
          tier: "Monitoring Lite",
          inclusions: ["Мониторинг на производителността", "Месечен преглед", "Отстраняване на бъгове"],
          responseTime: "Отговор в рамките на 3 работни дни",
          price: "EUR 1,000/месец",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["Мониторинг и фина настройка", "Корекции на текстови инструкции (prompts)", "Промени в работния процес", "Приоритетна поддръжка"],
          responseTime: "Отговор в рамките на 1 работен ден",
          price: "EUR 2,000/месец",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Пълно управление", "Изграждане на нови процеси", "Стратегически сесии", "Отговор в същия ден"],
          responseTime: "Отговор в същия ден",
          price: "EUR 3,500/месец",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_priority,
        },
      ],
    },
  },
};

export const softwarePricingSummaryBg: SoftwarePricingSummary = {
  anchor: "software-pricing",
  eyebrow: "Цени на софтуера",
  headline: "Управляваният софтуер започва от EUR 500 на месец за продукт.",
  description:
    "Fheem конфигурира и поддържа целеви системи за CRM, счетоводство, инвентар и задачи, така че екипите да получат използваем оперативен слой вместо поредния изгубен инструмент.",
  startingPrice: "От EUR 500/месец за продукт",
  setupNote:
    "Настройката е включена в някои пакети или се предлага отделно като фиксирана такса за въвеждане в експлоатация, в зависимост от сложността и нуждите за мигриране на данни.",
  products: [
    {
      name: "CRM",
      oneLiner: "Сделки, управление на контакти, последващи действия и отчети в едно контролирано работно пространство.",
    },
    {
      name: "Счетоводство",
      oneLiner: "Фактуриране, разходи и финансова видимост в по-изчистен оперативен поток.",
    },
    {
      name: "Инвентар и активи",
      oneLiner: "Проследяване на наличности, активи и отговорност с по-ясен достъп и възможност за одит.",
    },
    {
      name: "Задачи и управление на работата",
      oneLiner: "Възлагане на собственост, поддържане на видимост на работата и намаляване на пропуснатите предавания на задачи.",
    },
  ],
  supportIncludes: [
    "Роли и разрешения, конфигурирани около структурата на вашия екип",
    "Шаблони и работни процеси, настроени преди стартирането",
    "Импортиране и валидиране на данни като част от въвеждането",
    "Текуща административна поддръжка, налична при нужда от управлявано поддържане",
  ],
  primaryCta: {
    label: "Запишете разговор за ценообразуване",
    href: "/book?intent=suite-pricing",
  },
  secondaryCta: {
    label: "Вижте софтуера",
    href: "/software",
  },
};
