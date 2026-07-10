import type { Locale } from "@/lib/locale";
import type { ToolPageKey } from "@/lib/toolPageContent";

export interface ToolWorkbenchCopy {
  backToTools: string;
  modelCascade: string;
  inputsFilled: string;
  fallbacks: string;
  relatedTools: string;
  betterInput: string;
  workingCanvas: string;
  workingCanvasHelp: string;
  artifactPackage: string;
  artifacts: string[];
  generating: string;
  idle: string;
  analyzing: string;
  responseWorkspace: string;
  responseWorkspaceHelp: string;
  exploreOtherTools: string;
  inputLabels: Record<string, string>;
  toolNav: Record<ToolPageKey, string>;
  briefs: Record<ToolPageKey, string[]>;
}

const en: ToolWorkbenchCopy = {
  backToTools: "Back to tools",
  modelCascade: "Hugging Face model cascade",
  inputsFilled: "inputs filled",
  fallbacks: "fallbacks",
  relatedTools: "Related tools",
  betterInput: "Better input",
  workingCanvas: "Working canvas",
  workingCanvasHelp: "Structure the raw context here, then generate a reusable working document.",
  artifactPackage: "Artifact package",
  artifacts: ["Diagnostic scorecard and failure points", "Prioritized implementation table", "Reusable templates and next steps"],
  generating: "Generating through the fallback model stack...",
  idle: "No chat thread. One focused tool run, one structured output.",
  analyzing: "Analyzing...",
  responseWorkspace: "Response workspace",
  responseWorkspaceHelp: "Results appear here with a section map, action count, table count, Markdown rendering, and copy controls.",
  exploreOtherTools: "Explore other tools",
  inputLabels: { Metrics: "Metrics", Context: "Context", Process: "Process", Brand: "Brand", Assets: "Assets", URL: "Page URL", Copy: "Page copy", Workflow: "Workflow", Audience: "Audience", Needs: "Reporting needs", Sources: "Data sources" },
  toolNav: { "kpi-audit": "KPI Audit", "dashboard-builder": "Dashboard Builder", "process-mapper": "Process Mapper", "sop-builder": "SOP Builder", "page-critique": "Page Critique", "brand-audit": "Brand Audit" },
  briefs: {
    "kpi-audit": ["Put one metric per line when possible.", "Add the business model and current growth goal.", "Mention which numbers are discussed but never acted on."],
    "dashboard-builder": ["Name the decisions the dashboard must support.", "List current data sources and join keys.", "Include the review rhythm and alert thresholds."],
    "process-mapper": ["Describe the real sequence, including waiting and rework.", "Name each owner, system, and handoff.", "Call out exceptions that need a decision."],
    "sop-builder": ["Include the trigger, owner, and definition of done.", "Name the tools, templates, and checks used.", "Describe the failure or escalation path."],
    "page-critique": ["Include the target audience and conversion goal.", "Paste the full above-the-fold copy.", "Mention proof, traffic source, and known objections."],
    "brand-audit": ["Name the audience and the promise the brand makes.", "List channels and recurring assets.", "Call out inconsistencies you already suspect."],
  },
};

const ar: ToolWorkbenchCopy = {
  ...en,
  backToTools: "العودة إلى الأدوات", modelCascade: "تتابع نماذج Hugging Face", inputsFilled: "مدخلات مكتملة", fallbacks: "نماذج احتياطية", relatedTools: "أدوات مرتبطة", betterInput: "تحسين المدخلات", workingCanvas: "مساحة العمل", workingCanvasHelp: "نظّم السياق الخام هنا ثم أنشئ مستنداً عملياً قابلاً لإعادة الاستخدام.", artifactPackage: "حزمة المخرجات", artifacts: ["بطاقة تشخيص ونقاط الفشل", "جدول تنفيذ مرتب حسب الأولوية", "قوالب وخطوات تالية قابلة لإعادة الاستخدام"], generating: "جارٍ التوليد عبر نماذج الاحتياط...", idle: "لا توجد محادثة عامة. تشغيل مركز واحد ومخرج منظم.", analyzing: "جارٍ التحليل...", responseWorkspace: "مساحة النتيجة", responseWorkspaceHelp: "تظهر النتيجة هنا مع مخطط للأقسام وعدّاد للإجراءات والجداول وتنسيق Markdown وأدوات النسخ.", exploreOtherTools: "استكشف أدوات أخرى",
  inputLabels: { Metrics: "المقاييس", Context: "السياق", Process: "العملية", Brand: "الهوية", Assets: "المواد", URL: "رابط الصفحة", Copy: "نص الصفحة", Workflow: "سير العمل", Audience: "الجمهور", Needs: "احتياجات التقارير", Sources: "مصادر البيانات" },
  toolNav: { "kpi-audit": "تدقيق KPI", "dashboard-builder": "منشئ لوحة البيانات", "process-mapper": "خريطة العمليات", "sop-builder": "منشئ SOP", "page-critique": "مراجعة الصفحة", "brand-audit": "تدقيق الهوية" },
  briefs: { "kpi-audit": ["ضع كل مقياس في سطر مستقل قدر الإمكان.", "أضف نموذج العمل وهدف النمو الحالي.", "اذكر الأرقام التي تتم مناقشتها دون اتخاذ إجراء."], "dashboard-builder": ["سمِّ القرارات التي يجب أن تدعمها اللوحة.", "اذكر مصادر البيانات ومفاتيح الربط.", "أضف وتيرة المراجعة وحدود التنبيه."], "process-mapper": ["صف التسلسل الحقيقي بما فيه الانتظار وإعادة العمل.", "اذكر كل مالك ونظام ونقطة تسليم.", "وضح الاستثناءات التي تحتاج إلى قرار."], "sop-builder": ["اذكر المشغل والمالك وتعريف الإنجاز.", "سمِّ الأدوات والقوالب والفحوص المستخدمة.", "صف مسار الفشل أو التصعيد."], "page-critique": ["أضف الجمهور المستهدف وهدف التحويل.", "ألصق النص الكامل في الجزء العلوي.", "اذكر الدليل ومصدر الزيارات والاعتراضات المعروفة."], "brand-audit": ["اذكر الجمهور والوعد الذي تقدمه الهوية.", "اذكر القنوات والمواد المتكررة.", "وضح التباينات التي تشك بها مسبقاً."] },
};

const de: ToolWorkbenchCopy = {
  ...en,
  backToTools: "Zurück zu den Tools", modelCascade: "Hugging-Face-Modellkaskade", inputsFilled: "ausgefüllte Felder", fallbacks: "Fallbacks", relatedTools: "Verwandte Tools", betterInput: "Bessere Eingabe", workingCanvas: "Arbeitsfläche", workingCanvasHelp: "Strukturiere hier den Rohkontext und erstelle danach ein wiederverwendbares Arbeitsdokument.", artifactPackage: "Ergebnispaket", artifacts: ["Diagnose und Fehlerpunkte", "Priorisierte Umsetzungstabelle", "Wiederverwendbare Vorlagen und nächste Schritte"], generating: "Wird über die Fallback-Modelle erstellt...", idle: "Kein Chatverlauf. Ein fokussierter Lauf, ein strukturiertes Ergebnis.", analyzing: "Wird analysiert...", responseWorkspace: "Ergebnisbereich", responseWorkspaceHelp: "Hier erscheinen Abschnittsübersicht, Maßnahmen- und Tabellenanzahl, Markdown-Darstellung und Kopierfunktionen.", exploreOtherTools: "Weitere Tools ansehen",
  inputLabels: { Metrics: "Kennzahlen", Context: "Kontext", Process: "Prozess", Brand: "Marke", Assets: "Materialien", URL: "Seiten-URL", Copy: "Seitentext", Workflow: "Workflow", Audience: "Zielgruppe", Needs: "Reporting-Bedarf", Sources: "Datenquellen" },
  toolNav: { "kpi-audit": "KPI-Audit", "dashboard-builder": "Dashboard-Spezifikation", "process-mapper": "Prozesskarte", "sop-builder": "SOP-Entwurf", "page-critique": "Seitenkritik", "brand-audit": "Marken-Audit" },
  briefs: { "kpi-audit": ["Eine Kennzahl pro Zeile eintragen.", "Geschäftsmodell und aktuelles Wachstumsziel ergänzen.", "Zahlen nennen, die besprochen, aber nicht gesteuert werden."], "dashboard-builder": ["Entscheidungen nennen, die das Dashboard unterstützen soll.", "Datenquellen und Verknüpfungsschlüssel auflisten.", "Prüfrhythmus und Warnschwellen ergänzen."], "process-mapper": ["Den echten Ablauf mit Wartezeiten und Nacharbeit beschreiben.", "Verantwortliche, Systeme und Übergaben nennen.", "Ausnahmen mit Entscheidungsbedarf markieren."], "sop-builder": ["Auslöser, Verantwortliche und Fertigdefinition angeben.", "Tools, Vorlagen und Prüfungen nennen.", "Fehler- und Eskalationsweg beschreiben."], "page-critique": ["Zielgruppe und Conversion-Ziel angeben.", "Den vollständigen Above-the-fold-Text einfügen.", "Belege, Traffic-Quelle und bekannte Einwände ergänzen."], "brand-audit": ["Zielgruppe und Markenversprechen nennen.", "Kanäle und wiederkehrende Materialien auflisten.", "Bereits vermutete Inkonsistenzen markieren."] },
};

const fr: ToolWorkbenchCopy = {
  ...en,
  backToTools: "Retour aux outils", modelCascade: "Cascade de modèles Hugging Face", inputsFilled: "champs remplis", fallbacks: "modèles de secours", relatedTools: "Outils associés", betterInput: "Mieux renseigner", workingCanvas: "Espace de travail", workingCanvasHelp: "Structurez le contexte brut ici, puis générez un document de travail réutilisable.", artifactPackage: "Livrable produit", artifacts: ["Scorecard de diagnostic et points de rupture", "Tableau de mise en œuvre priorisé", "Modèles réutilisables et prochaines étapes"], generating: "Génération via les modèles de secours...", idle: "Pas de fil de discussion. Un lancement ciblé, un résultat structuré.", analyzing: "Analyse en cours...", responseWorkspace: "Espace de résultat", responseWorkspaceHelp: "La carte des sections, le nombre d'actions et de tableaux, le Markdown et la copie apparaîtront ici.", exploreOtherTools: "Explorer les autres outils",
  inputLabels: { Metrics: "Indicateurs", Context: "Contexte", Process: "Processus", Brand: "Marque", Assets: "Supports", URL: "URL de la page", Copy: "Texte de la page", Workflow: "Workflow", Audience: "Audience", Needs: "Besoins de reporting", Sources: "Sources de données" },
  toolNav: { "kpi-audit": "Audit KPI", "dashboard-builder": "Spécification dashboard", "process-mapper": "Cartographie processus", "sop-builder": "Brouillon SOP", "page-critique": "Critique de page", "brand-audit": "Audit de marque" },
  briefs: { "kpi-audit": ["Mettre un indicateur par ligne.", "Ajouter le modèle économique et l’objectif de croissance.", "Signaler les chiffres discutés sans action associée."], "dashboard-builder": ["Nommer les décisions que le dashboard doit soutenir.", "Lister les sources et clés de jointure.", "Préciser le rythme de revue et les seuils d’alerte."], "process-mapper": ["Décrire le flux réel, attentes et retouches comprises.", "Nommer chaque responsable, outil et transfert.", "Signaler les exceptions qui demandent une décision."], "sop-builder": ["Indiquer déclencheur, responsable et définition du terminé.", "Nommer outils, modèles et contrôles.", "Décrire le chemin d’échec ou d’escalade."], "page-critique": ["Ajouter audience et objectif de conversion.", "Coller tout le texte au-dessus de la ligne de flottaison.", "Préciser preuves, source du trafic et objections connues."], "brand-audit": ["Nommer l’audience et la promesse de marque.", "Lister canaux et supports récurrents.", "Signaler les incohérences déjà suspectées."] },
};

const bg: ToolWorkbenchCopy = {
  ...en,
  backToTools: "Обратно към инструментите", modelCascade: "Каскада от модели на Hugging Face", inputsFilled: "попълнени полета", fallbacks: "резервни модели", relatedTools: "Свързани инструменти", betterInput: "По-добър вход", workingCanvas: "Работно пространство", workingCanvasHelp: "Подредете суровия контекст тук и създайте документ, който може да се използва отново.", artifactPackage: "Пакет с резултати", artifacts: ["Диагностична карта и точки на отказ", "Приоритизирана таблица за изпълнение", "Шаблони и следващи стъпки"], generating: "Генериране чрез резервните модели...", idle: "Няма чат нишка. Един фокусиран запуск, един структуриран резултат.", analyzing: "Анализиране...", responseWorkspace: "Работно пространство за резултата", responseWorkspaceHelp: "Тук ще се появят карта на разделите, броят действия и таблици, Markdown и копиране.", exploreOtherTools: "Разгледайте други инструменти",
  inputLabels: { Metrics: "Метрики", Context: "Контекст", Process: "Процес", Brand: "Марка", Assets: "Материали", URL: "URL на страницата", Copy: "Текст на страницата", Workflow: "Работен процес", Audience: "Аудитория", Needs: "Нужди за отчетност", Sources: "Източници на данни" },
  toolNav: { "kpi-audit": "KPI одит", "dashboard-builder": "Спецификация на табло", "process-mapper": "Карта на процеса", "sop-builder": "SOP чернова", "page-critique": "Критика на страница", "brand-audit": "Одит на марката" },
  briefs: { "kpi-audit": ["Поставете по една метрика на ред.", "Добавете бизнес модела и текущата цел за растеж.", "Посочете числата, които се обсъждат без действие."], "dashboard-builder": ["Назовете решенията, които таблото трябва да подпомага.", "Избройте източниците и ключовете за свързване.", "Добавете ритъма на преглед и праговете за сигнал."], "process-mapper": ["Опишете реалния поток, включително чакане и преработка.", "Назовете всеки собственик, система и предаване.", "Отбележете изключенията, които изискват решение."], "sop-builder": ["Посочете задействането, собственика и критерия за завършване.", "Назовете инструментите, шаблоните и проверките.", "Опишете пътя за грешка или ескалация."], "page-critique": ["Добавете аудиторията и целта за конверсия.", "Поставете целия текст над сгъването.", "Посочете доказателства, източник на трафик и възражения."], "brand-audit": ["Назовете аудиторията и обещанието на марката.", "Избройте каналите и повтарящите се материали.", "Отбележете вече заподозрените несъответствия."] },
};

export const getToolWorkbenchCopy = (locale: Locale, tool: ToolPageKey) => {
  const copy = ({ en, ar, de, fr, bg } as Record<Locale, ToolWorkbenchCopy>)[locale] ?? en;
  return { ...copy, brief: copy.briefs[tool] };
};
