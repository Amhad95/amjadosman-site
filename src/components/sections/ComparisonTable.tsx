import React from 'react';
import { cn } from '@/lib/utils';
import { Locale, useLocale } from '@/lib/locale';

interface ComparisonRow {
  category: string;
  crm: string;
  accounting: string;
  inventory: string;
  tasks: string;
}

const comparisonCopy: Record<
  Locale,
  { feature: string; products: string[]; rows: ComparisonRow[] }
> = {
  en: {
    feature: 'Feature',
    products: ['CRM', 'Accounting', 'Inventory', 'Tasks'],
    rows: [
      { category: 'Primary users', crm: 'Sales, Account Managers', accounting: 'Finance, Operations', inventory: 'Warehouse, Ops, IT', tasks: 'All teams, Project leads' },
      { category: 'Core workflow', crm: 'Pipeline and follow-up', accounting: 'Invoices and expenses', inventory: 'Stock and asset tracking', tasks: 'Assignment and delivery' },
      { category: 'Typical setup items', crm: 'Stages, fields, templates', accounting: 'Categories, approvals', inventory: 'Locations, thresholds', tasks: 'Workflows, checklists' },
      { category: 'Reporting', crm: 'Pipeline value, activity', accounting: 'Cash flow, aging', inventory: 'Stock levels, reorders', tasks: 'Completion, workload' },
    ],
  },
  ar: {
    feature: 'الميزة',
    products: ['CRM', 'المحاسبة', 'المخزون', 'المهام'],
    rows: [
      { category: 'المستخدمون الرئيسيون', crm: 'المبيعات، مدراء الحسابات', accounting: 'المالية، العمليات', inventory: 'المخزن، العمليات، تقنية المعلومات', tasks: 'جميع الفرق، قادة المشاريع' },
      { category: 'سير العمل الأساسي', crm: 'خط الأنابيب والمتابعة', accounting: 'الفواتير والمصروفات', inventory: 'تتبع المخزون والأصول', tasks: 'التكليف والتسليم' },
      { category: 'عناصر الإعداد المعتادة', crm: 'المراحل والحقول والقوالب', accounting: 'الفئات والموافقات', inventory: 'المواقع والحدود', tasks: 'سير العمل وقوائم التحقق' },
      { category: 'التقارير', crm: 'قيمة الخط والأنشطة', accounting: 'التدفق النقدي والأعمار', inventory: 'مستويات المخزون وإعادة الطلب', tasks: 'الإنجاز وحجم العمل' },
    ],
  },
  de: {
    feature: 'Merkmal',
    products: ['CRM', 'Buchhaltung', 'Inventar', 'Aufgaben'],
    rows: [
      { category: 'Hauptnutzer', crm: 'Vertrieb, Account Manager', accounting: 'Finanzen, Operations', inventory: 'Lager, Ops, IT', tasks: 'Alle Teams, Projektleitung' },
      { category: 'Kernworkflow', crm: 'Pipeline und Follow-up', accounting: 'Rechnungen und Ausgaben', inventory: 'Bestands- und Asset-Tracking', tasks: 'Zuweisung und Lieferung' },
      { category: 'Typische Einrichtung', crm: 'Stufen, Felder, Vorlagen', accounting: 'Kategorien, Freigaben', inventory: 'Standorte, Grenzwerte', tasks: 'Workflows, Checklisten' },
      { category: 'Reporting', crm: 'Pipeline-Wert, Aktivität', accounting: 'Cashflow, Fälligkeiten', inventory: 'Bestände, Nachbestellung', tasks: 'Abschluss, Auslastung' },
    ],
  },
  fr: {
    feature: 'Fonction',
    products: ['CRM', 'Comptabilité', 'Stock', 'Tâches'],
    rows: [
      { category: 'Utilisateurs clés', crm: 'Ventes, responsables comptes', accounting: 'Finance, opérations', inventory: 'Entrepôt, ops, IT', tasks: 'Toutes équipes, chefs de projet' },
      { category: 'Workflow central', crm: 'Pipeline et suivi', accounting: 'Factures et dépenses', inventory: 'Suivi stock et actifs', tasks: 'Attribution et livraison' },
      { category: 'Configuration type', crm: 'Étapes, champs, modèles', accounting: 'Catégories, validations', inventory: 'Lieux, seuils', tasks: 'Workflows, checklists' },
      { category: 'Reporting', crm: 'Valeur pipeline, activité', accounting: 'Trésorerie, ancienneté', inventory: 'Niveaux, réassorts', tasks: 'Achèvement, charge' },
    ],
  },
  bg: {
    feature: 'Функция',
    products: ['CRM', 'Счетоводство', 'Инвентар', 'Задачи'],
    rows: [
      { category: 'Основни потребители', crm: 'Продажби, account managers', accounting: 'Финанси, операции', inventory: 'Склад, операции, IT', tasks: 'Всички екипи, project leads' },
      { category: 'Основен процес', crm: 'Pipeline и follow-up', accounting: 'Фактури и разходи', inventory: 'Следене на stock и активи', tasks: 'Възлагане и доставка' },
      { category: 'Типични настройки', crm: 'Етапи, полета, шаблони', accounting: 'Категории, одобрения', inventory: 'Локации, прагове', tasks: 'Процеси, checklists' },
      { category: 'Отчитане', crm: 'Pipeline стойност, активност', accounting: 'Cash flow, просрочия', inventory: 'Нива, презареждане', tasks: 'Изпълнение, натоварване' },
    ],
  },
};

export const ComparisonTable: React.FC<{ className?: string }> = ({ className }) => {
  const { locale, isRTL } = useLocale();
  const copy = comparisonCopy[locale] ?? comparisonCopy.en;
  return (
    <div className={cn('w-full', isRTL && 'text-right', className)}>
      <div className="hidden min-w-0 md:block">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            {copy.feature}
          </div>
          {copy.products.map((product) => (
            <div
              key={product}
              className={cn(
                'text-center py-3 px-4 rounded-xl',
                'bg-plate-astral text-mint font-serif text-lg'
              )}
            >
              {product}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-2">
          {copy.rows.map((row, index) => (
            <div
              key={row.category}
              className={cn(
                'grid grid-cols-5 gap-4 py-4 px-4 rounded-xl',
                'transition-colors duration-200',
                index % 2 === 0 ? 'bg-muted/50' : 'bg-card',
                'hover:bg-muted'
              )}
            >
              <div className="text-sm font-semibold text-foreground">
                {row.category}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                {row.crm}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                {row.accounting}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                {row.inventory}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                {row.tasks}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3 md:hidden">
        {copy.rows.map((row) => (
          <article key={row.category} className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-semibold text-foreground">{row.category}</h3>
            <div className="grid gap-2">
              {[row.crm, row.accounting, row.inventory, row.tasks].map((value, index) => (
                <div key={`${row.category}-${copy.products[index]}`} className="grid grid-cols-[minmax(0,7rem)_minmax(0,1fr)] gap-3 border-t border-border/70 pt-2 first:border-t-0 first:pt-0">
                  <span className="text-xs font-semibold text-plate-astral">{copy.products[index]}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
