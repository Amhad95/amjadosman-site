import React from 'react';
import { cn } from '@/lib/utils';
import { Settings, Database, GraduationCap } from 'lucide-react';
import { useLocale } from '@/lib/locale';

interface SetupCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const SetupSupportCards: React.FC<{ className?: string }> = ({ className }) => {
  const { locale, isRTL } = useLocale();
  const cardsByLocale: Record<string, SetupCard[]> = {
    en: [
      { icon: Settings, title: 'Provision and configuration', description: 'Roles, permissions, workflows, and approval chains configured to match your structure.' },
      { icon: Database, title: 'Data import and structure', description: 'Existing records migrated cleanly with proper categorization and validation.' },
      { icon: GraduationCap, title: 'Training and ongoing support', description: 'Team onboarding, documentation, and controlled admin support for changes.' },
    ],
    ar: [
      { icon: Settings, title: 'التجهيز والتهيئة', description: 'تُضبط الأدوار والصلاحيات وسير العمل ومسارات الموافقة بما يطابق هيكلك.' },
      { icon: Database, title: 'استيراد البيانات وبنيتها', description: 'تُنقل السجلات الحالية بشكل نظيف مع تصنيف وتحقق مناسبين.' },
      { icon: GraduationCap, title: 'التدريب والدعم المستمر', description: 'تهيئة الفريق وتوثيق وإدارة دعم منضبط للتغييرات.' },
    ],
    de: [
      { icon: Settings, title: 'Einrichtung und Konfiguration', description: 'Rollen, Berechtigungen, Workflows und Freigaben passend zu Ihrer Struktur.' },
      { icon: Database, title: 'Datenimport und Struktur', description: 'Bestehende Datensätze werden sauber kategorisiert und validiert übernommen.' },
      { icon: GraduationCap, title: 'Training und laufender Support', description: 'Onboarding, Dokumentation und kontrollierte Admin-Unterstützung bei Änderungen.' },
    ],
    fr: [
      { icon: Settings, title: 'Mise en place et configuration', description: 'Rôles, permissions, workflows et validations adaptés à votre organisation.' },
      { icon: Database, title: 'Import et structure des données', description: 'Les données existantes sont migrées proprement, catégorisées et vérifiées.' },
      { icon: GraduationCap, title: 'Formation et support continu', description: 'Onboarding de l’équipe, documentation et support administrateur maîtrisé.' },
    ],
    bg: [
      { icon: Settings, title: 'Настройка и конфигурация', description: 'Роли, права, работни процеси и одобрения според вашата структура.' },
      { icon: Database, title: 'Импорт и структура на данните', description: 'Съществуващите записи се прехвърлят чисто, категоризират и проверяват.' },
      { icon: GraduationCap, title: 'Обучение и постоянна поддръжка', description: 'Въвеждане на екипа, документация и контролирана административна поддръжка.' },
    ],
  };
  const cards = cardsByLocale[locale] ?? cardsByLocale.en;

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-6', className)}>
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className={cn(
              'group p-6 rounded-xl',
              'bg-card border border-ink/10',
              isRTL && 'text-right',
              'hover:border-mint/30 hover:shadow-lg hover:shadow-mint/5',
              'transition-all duration-300'
            )}
          >
            <div className={cn(
              'w-12 h-12 rounded-xl mb-4',
              'bg-plate-astral text-mint',
              'flex items-center justify-center',
              'group-hover:scale-110',
              'transition-transform duration-300'
            )}>
              <Icon size={24} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">
              {card.title}
            </h4>
            <p className="text-sm text-muted-foreground">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SetupSupportCards;
