import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { User, Briefcase, Building2 } from 'lucide-react';
import { useLocale } from '@/lib/locale';
import { getUiCopy } from '@/lib/uiCopy';

interface Persona {
  id: string;
  title: string;
  title_ar?: string;
  pain: string;
  pain_ar?: string;
  payoff: string;
  payoff_ar?: string;
  icon: React.ElementType;
}

interface PersonaCardsProps {
  personas: Persona[];
  className?: string;
  onPersonaSelect?: (index: number) => void;
}

export const PersonaCards: React.FC<PersonaCardsProps> = ({
  personas,
  className,
  onPersonaSelect,
}) => {
  const { locale, isRTL } = useLocale();
  const copy = getUiCopy(locale);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    onPersonaSelect?.(index);
  };

  return (
    <div className={cn('space-y-3', className)}>
      {personas.map((persona, index) => {
        const Icon = persona.icon;
        const isActive = index === activeIndex;

        return (
          <div
            key={persona.id}
            onClick={() => handleSelect(index)}
            className={cn(
              'relative p-5 rounded-xl cursor-pointer',
              'border-2 transition-all duration-300',
              isActive
                ? 'bg-gray-50 border-gray-900 shadow-lg'
                : 'bg-card border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            )}
          >
            {/* Active indicator */}
            {isActive && (
              <div
                className={cn(
                  'absolute top-1/2 -translate-y-1/2 w-1 h-8 bg-gray-900',
                  isRTL ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full'
                )}
              />
            )}

            <div className={cn('flex items-start gap-4', isRTL && 'flex-row-reverse text-right')}>
              <div
                className={cn(
                  'flex-shrink-0 w-10 h-10 rounded-lg',
                  'flex items-center justify-center',
                  isActive ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                )}
              >
                <Icon size={20} />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className={cn(
                  'font-semibold mb-1',
                  isActive ? 'text-foreground' : 'text-foreground/80'
                )}>
                  {locale === 'ar' ? persona.title_ar ?? persona.title : persona.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="text-red-600 font-medium">{copy.pain}</span>{' '}
                  {locale === 'ar' ? persona.pain_ar ?? persona.pain : persona.pain}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="text-emerald-600 font-medium">{copy.payoff}</span>{' '}
                  {locale === 'ar' ? persona.payoff_ar ?? persona.payoff : persona.payoff}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Default personas for reuse
export const defaultPersonas = {
  crm: [
    {
      id: 'sales-rep',
      title: 'Sales Representative',
      title_ar: 'مندوب مبيعات',
      pain: 'Tracking leads across sticky notes and spreadsheets.',
      pain_ar: 'تتبع العملاء بين الملاحظات اللاصقة والجداول.',
      payoff: 'One clear pipeline with follow-up reminders.',
      payoff_ar: 'مسار واضح واحد مع تذكيرات للمتابعة.',
      icon: User,
    },
    {
      id: 'sales-lead',
      title: 'Sales Manager',
      title_ar: 'مدير المبيعات',
      pain: 'No visibility into team activity or pipeline health.',
      pain_ar: 'لا توجد رؤية واضحة لنشاط الفريق أو صحة المسار.',
      payoff: 'Real-time dashboards and activity logs.',
      payoff_ar: 'لوحات فورية وسجلات نشاط مباشرة.',
      icon: Briefcase,
    },
    {
      id: 'ops',
      title: 'Operations Lead',
      title_ar: 'مسؤول العمليات',
      pain: 'Client handovers get lost in email threads.',
      pain_ar: 'تنتشر عمليات تسليم العملاء داخل سلاسل البريد.',
      payoff: 'Complete contact history in one place.',
      payoff_ar: 'سجل كامل للتواصل في مكان واحد.',
      icon: Building2,
    },
  ],
  accounting: [
    {
      id: 'finance',
      title: 'Finance Manager',
      title_ar: 'مدير المالية',
      pain: 'Chasing invoices and approvals across chat.',
      pain_ar: 'مطاردة الفواتير والاعتمادات عبر المحادثات.',
      payoff: 'Structured invoice flow with status tracking.',
      payoff_ar: 'تدفق فواتير منظم مع تتبع للحالة.',
      icon: Briefcase,
    },
    {
      id: 'admin',
      title: 'Admin / Bookkeeper',
      title_ar: 'الإدارة / مسك الدفاتر',
      pain: 'Expense receipts scattered in email folders.',
      pain_ar: 'إيصالات المصروفات مبعثرة داخل البريد.',
      payoff: 'Clean expense capture and categorization.',
      payoff_ar: 'جمع وتصنيف أنظف للمصروفات.',
      icon: User,
    },
    {
      id: 'founder',
      title: 'Founder / Owner',
      title_ar: 'المؤسس / المالك',
      pain: 'No quick view of cash position or aging.',
      pain_ar: 'لا توجد رؤية سريعة للنقدية أو الأعمار.',
      payoff: 'Dashboard with payment status at a glance.',
      payoff_ar: 'لوحة تعرض حالة المدفوعات بسرعة.',
      icon: Building2,
    },
  ],
  inventory: [
    {
      id: 'warehouse',
      title: 'Warehouse Staff',
      title_ar: 'فريق المستودع',
      pain: 'Manual counts and paper-based tracking.',
      pain_ar: 'جرد يدوي وتتبع ورقي.',
      payoff: 'Digital records with barcode support.',
      payoff_ar: 'سجلات رقمية مع دعم للباركود.',
      icon: User,
    },
    {
      id: 'ops-mgr',
      title: 'Operations Manager',
      title_ar: 'مدير العمليات',
      pain: 'Stockouts discovered too late.',
      pain_ar: 'اكتشاف نفاد المخزون بعد فوات الأوان.',
      payoff: 'Reorder alerts before items run out.',
      payoff_ar: 'تنبيهات إعادة طلب قبل نفاد العناصر.',
      icon: Briefcase,
    },
    {
      id: 'it',
      title: 'IT / Facilities',
      title_ar: 'تقنية المعلومات / المرافق',
      pain: 'No clear record of who has what equipment.',
      pain_ar: 'لا يوجد سجل واضح لمن يملك أي معدات.',
      payoff: 'Asset register with assignment history.',
      payoff_ar: 'سجل أصول مع تاريخ الإسناد.',
      icon: Building2,
    },
  ],
  tasks: [
    {
      id: 'team-member',
      title: 'Team Member',
      title_ar: 'عضو الفريق',
      pain: 'Tasks assigned in chat get lost.',
      pain_ar: 'تضيع المهام المرسلة في المحادثات.',
      payoff: 'Clear personal task list with deadlines.',
      payoff_ar: 'قائمة مهام شخصية واضحة مع مواعيد نهائية.',
      icon: User,
    },
    {
      id: 'project-lead',
      title: 'Project Lead',
      title_ar: 'قائد المشروع',
      pain: 'Manually checking in on progress.',
      pain_ar: 'متابعة التقدم يدوياً طوال الوقت.',
      payoff: 'Board view with real-time status updates.',
      payoff_ar: 'عرض لوحي بحالات محدثة فورياً.',
      icon: Briefcase,
    },
    {
      id: 'dept-head',
      title: 'Department Head',
      title_ar: 'رئيس القسم',
      pain: 'No overview of workload across teams.',
      pain_ar: 'لا توجد رؤية شاملة لعبء العمل عبر الفرق.',
      payoff: 'Cross-team visibility and reporting.',
      payoff_ar: 'رؤية وتقارير عبر الفرق.',
      icon: Building2,
    },
  ],
};

export default PersonaCards;
