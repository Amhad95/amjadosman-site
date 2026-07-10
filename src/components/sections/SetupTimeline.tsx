import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Settings, Users, Database, GraduationCap, Check } from 'lucide-react';
import { Locale, useLocale } from '@/lib/locale';

interface TimelineStep {
  week: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const stepsByLocale: Record<Locale, TimelineStep[]> = {
  en: [
    { week: 'Week 1', title: 'Roles and permissions', description: 'Team structure, access levels, and approval workflows configured.', icon: Users },
    { week: 'Week 2', title: 'Templates and workflows', description: 'Pipeline stages, document templates, and automation rules set up.', icon: Settings },
    { week: 'Week 3', title: 'Data import', description: 'Existing records migrated and validated in clean structure.', icon: Database },
    { week: 'Week 4', title: 'Training and handover', description: 'Team onboarding, documentation, and admin support begins.', icon: GraduationCap },
  ],
  ar: [
    { week: 'الأسبوع 1', title: 'الأدوار والصلاحيات', description: 'تهيئة هيكل الفريق ومستويات الوصول ومسارات الاعتماد.', icon: Users },
    { week: 'الأسبوع 2', title: 'القوالب وسير العمل', description: 'إعداد مراحل العمل وقوالب المستندات وقواعد الأتمتة.', icon: Settings },
    { week: 'الأسبوع 3', title: 'استيراد البيانات', description: 'نقل السجلات الحالية والتحقق منها داخل هيكل نظيف.', icon: Database },
    { week: 'الأسبوع 4', title: 'التدريب والتسليم', description: 'بدء تأهيل الفريق والتوثيق ودعم الإدارة.', icon: GraduationCap },
  ],
  de: [
    { week: 'Woche 1', title: 'Rollen und Berechtigungen', description: 'Teamstruktur, Zugriffsebenen und Freigabe-Workflows werden eingerichtet.', icon: Users },
    { week: 'Woche 2', title: 'Vorlagen und Workflows', description: 'Pipeline-Stufen, Dokumentvorlagen und Automationsregeln werden konfiguriert.', icon: Settings },
    { week: 'Woche 3', title: 'Datenimport', description: 'Bestehende Datensätze werden migriert und in sauberer Struktur validiert.', icon: Database },
    { week: 'Woche 4', title: 'Training und Übergabe', description: 'Team-Onboarding, Dokumentation und Admin-Support beginnen.', icon: GraduationCap },
  ],
  fr: [
    { week: 'Semaine 1', title: 'Rôles et permissions', description: "Structure d'équipe, accès et validations sont configurés.", icon: Users },
    { week: 'Semaine 2', title: 'Modèles et workflows', description: 'Étapes, modèles de documents et règles d’automatisation sont mis en place.', icon: Settings },
    { week: 'Semaine 3', title: 'Import de données', description: 'Les données existantes sont migrées et validées dans une structure propre.', icon: Database },
    { week: 'Semaine 4', title: 'Formation et remise', description: "Onboarding de l'équipe, documentation et support admin commencent.", icon: GraduationCap },
  ],
  bg: [
    { week: 'Седмица 1', title: 'Роли и права', description: 'Екипна структура, нива на достъп и процеси за одобрение се настройват.', icon: Users },
    { week: 'Седмица 2', title: 'Шаблони и процеси', description: 'Етапи, документни шаблони и правила за автоматизация се конфигурират.', icon: Settings },
    { week: 'Седмица 3', title: 'Импорт на данни', description: 'Съществуващи записи се мигрират и валидират в чиста структура.', icon: Database },
    { week: 'Седмица 4', title: 'Обучение и предаване', description: 'Започват onboarding на екипа, документация и admin поддръжка.', icon: GraduationCap },
  ],
};

export const SetupTimeline: React.FC<{ className?: string }> = ({ className }) => {
  const { locale, isRTL } = useLocale();
  const reducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const steps = stepsByLocale[locale] ?? stepsByLocale.en;

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className={cn('relative', className)}>
      <div className={cn('absolute top-8 bottom-8 w-0.5 bg-ink/10', isRTL ? 'right-6' : 'left-6')}>
        <div
          className="w-full bg-mint transition-all duration-500 ease-out"
          style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === activeStep;
          const isComplete = index < activeStep;

          return (
            <div
              key={step.week}
              className={cn(
                'relative flex gap-4 p-4 rounded-xl transition-all duration-300',
                isRTL && 'flex-row-reverse text-right',
                isActive && 'bg-mint/10',
                !isActive && 'hover:bg-muted/50 cursor-pointer'
              )}
              onClick={() => setActiveStep(index)}
            >
              {/* Icon */}
              <div
                className={cn(
                  'relative z-10 flex-shrink-0 w-12 h-12 rounded-full',
                  'flex items-center justify-center',
                  'transition-all duration-300',
                  isComplete && 'bg-mint text-foreground',
                  isActive && 'bg-plate-astral text-mint ring-2 ring-mint',
                  !isActive && !isComplete && 'bg-muted text-muted-foreground'
                )}
              >
                {isComplete ? (
                  <Check size={20} />
                ) : (
                  <Icon size={20} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className={cn(
                  'text-xs font-semibold uppercase tracking-wide mb-1',
                  isActive ? 'text-mint' : 'text-muted-foreground'
                )}>
                  {step.week}
                </div>
                <h4 className={cn(
                  'font-semibold mb-1 transition-colors',
                  isActive ? 'text-foreground' : 'text-foreground/80'
                )}>
                  {step.title}
                </h4>
                <p className={cn(
                  'text-sm transition-all duration-300',
                  isActive ? 'text-muted-foreground opacity-100 max-h-20' : 'text-muted-foreground/60 opacity-60 max-h-0 overflow-hidden'
                )}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SetupTimeline;
