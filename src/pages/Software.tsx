import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { PremiumSuiteGrid } from '@/components/sections/PremiumSuiteGrid';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { SetupTimeline } from '@/components/sections/SetupTimeline';
import { CyberGlobeHeader } from '@/components/shared/CyberGlobeHeader';
import { Settings, FileCheck, Users, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from '@/lib/locale';
import { usePageMeta } from '@/hooks/use-page-meta';

const Software = () => {
  const { locale, isRTL } = useLocale();

  usePageMeta({
    title: locale === 'ar' ? 'البرمجيات | ADSI' : 'Software | ADSI',
    description:
      locale === 'ar'
        ? 'مجموعة برمجيات تشغيلية مركزة يتم إعدادها وإدارتها حول طريقة عمل فريقك فعلياً.'
        : 'A focused operational software suite configured and managed around how your team actually works.',
  });

  const suiteProducts = locale === 'ar'
    ? [
        {
          id: 'crm',
          name: 'CRM',
          oneLiner: 'إدارة العلاقات ومسار المبيعات والمتابعة دون فوضى.',
          outcomes: ['مراحل مسار واضحة', 'متابعة موثوقة', 'تقارير بسيطة'],
          href: '/software/crm',
        },
        {
          id: 'accounting',
          name: 'المحاسبة',
          oneLiner: 'الفوترة والمصروفات ورؤية أساسية للمالية ضمن سير عمل نظيف.',
          outcomes: ['فوترة أسرع', 'التقاط أنظف للمصروفات', 'لوحات مقروءة'],
          href: '/software/accounting',
        },
        {
          id: 'inventory',
          name: 'المخزون والأصول',
          oneLiner: 'تتبع العناصر والأصول مع وصول مضبوط وقابلية تدقيق.',
          outcomes: ['اعرف ما الموجود', 'تنبيهات إعادة طلب', 'مساءلة أوضح'],
          href: '/software/inventory',
        },
        {
          id: 'tasks',
          name: 'المهام وإدارة العمل',
          oneLiner: 'خطط العمل ووزع الملكية وأبقِ التسليم مرئياً.',
          outcomes: ['تكليفات واضحة', 'مهام ضائعة أقل', 'تنسيق أفضل'],
          href: '/software/tasks',
        },
      ]
    : [
        {
          id: 'crm',
          name: 'CRM',
          oneLiner: 'Manage relationships, pipeline, and follow-up without chaos.',
          outcomes: ['Clear pipeline stages', 'Reliable follow-up', 'Simple reporting'],
          href: '/software/crm',
        },
        {
          id: 'accounting',
          name: 'Accounting',
          oneLiner: 'Invoicing, expenses, and basic finance visibility in a clean workflow.',
          outcomes: ['Faster invoicing', 'Cleaner expense capture', 'Readable dashboards'],
          href: '/software/accounting',
        },
        {
          id: 'inventory',
          name: 'Inventory and Assets',
          oneLiner: 'Track items and assets with controlled access and auditability.',
          outcomes: ['Know what exists', 'Reorder alerts', 'Clear accountability'],
          href: '/software/inventory',
        },
        {
          id: 'tasks',
          name: 'Tasks and Work Management',
          oneLiner: 'Plan work, assign ownership, and keep delivery visible.',
          outcomes: ['Clear assignments', 'Fewer dropped tasks', 'Better coordination'],
          href: '/software/tasks',
        },
      ];

  const foundationFeatures = locale === 'ar'
    ? [
        {
          icon: Users,
          title: 'الأدوار والصلاحيات',
          description: 'هيكل الفريق ومستويات الوصول وسلاسل الاعتماد مُعدة من اليوم الأول.',
        },
        {
          icon: Settings,
          title: 'القوالب وسير العمل',
          description: 'تهيئة مراحل العمل وصيغ المستندات وقواعد الأتمتة.',
        },
        {
          icon: FileCheck,
          title: 'استيراد البيانات',
          description: 'نقل السجلات الحالية والتحقق منها داخل هيكل نظيف.',
        },
        {
          icon: Headphones,
          title: 'دعم إداري مستمر',
          description: 'يشمل ذلك طلبات التغيير المضبوطة والدعم الإداري.',
        },
      ]
    : [
        {
          icon: Users,
          title: 'Roles and permissions',
          description: 'Team structure, access levels, and approval chains set up from day one.',
        },
        {
          icon: Settings,
          title: 'Templates and workflows',
          description: 'Pipeline stages, document formats, and automation rules configured.',
        },
        {
          icon: FileCheck,
          title: 'Data import',
          description: 'Existing records migrated and validated in clean structure.',
        },
        {
          icon: Headphones,
          title: 'Ongoing admin support',
          description: 'Controlled change requests and admin support included.',
        },
      ];

  return (
    <Layout motionLevel="subtle">
      <Hero
        headline={locale === 'ar'
          ? 'مجموعة تشغيلية مركزة يتم إعدادها وإدارتها لفريقك.'
          : 'A focused enterprise suite, configured and managed for your team.'}
        subheadline={locale === 'ar'
          ? 'أربع برمجيات سحابية يتم تجهيزها وإعدادها مع الحوكمة والصلاحيات والقوالب واستيراد البيانات والتدريب والدعم الإداري المستمر.'
          : 'Four cloud softwares, provisioned and configured with governance, permissions, templates, data import, training, and ongoing admin support.'}
        primaryCta={{ label: locale === 'ar' ? 'احجز عرضاً' : 'Book a Demo', href: "/book?intent=suite" }}
        secondaryCta={{ label: locale === 'ar' ? 'احجز مكالمة' : 'Book a Call', href: "/book" }}
        plate="astral"
        rightElement={<CyberGlobeHeader color="mint" speed={0.8} />}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            headline={locale === 'ar' ? 'المجموعة' : 'The Suite'} 
            subheadline={locale === 'ar'
              ? 'أربعة منتجات مركزة. كل واحد منها مهيأ للتبني لا لمجرد الوصول.'
              : 'Four focused products. Each one configured for adoption, not just access.'}
          />
          <PremiumSuiteGrid products={suiteProducts} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            headline={locale === 'ar' ? 'مقارنة سريعة' : 'Compare at a glance'} 
            subheadline={locale === 'ar'
              ? 'افهم أين يناسب كل منتج داخل عملياتك.'
              : 'Understand where each product fits in your operations.'}
          />
          <ComparisonTable className="mt-8" />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-serif text-heading-lg text-foreground mb-4">
                {locale === 'ar' ? 'مهيأة للتبني لا لمجرد الوصول.' : 'Configured for adoption, not just access.'}
              </h2>
              <p className="text-body-lg text-muted-foreground mb-8 max-w-xl">
                {locale === 'ar'
                  ? 'كل منتج في المجموعة يُجهز مع هيكل فريقك وسير العمل والحوكمة المطلوبة.'
                  : 'Every product in the suite is provisioned with your team structure, workflows, and governance in place.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {foundationFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className={cn(
                        'group p-5 rounded-xl',
                        'bg-card border border-ink/10',
                        'hover:border-mint/30 hover:shadow-lg hover:shadow-mint/5',
                        'transition-all duration-300'
                      )}
                    >
                      <div className={cn(
                        'w-10 h-10 rounded-lg mb-3',
                        'bg-plate-astral text-mint',
                        'flex items-center justify-center',
                        'group-hover:scale-110 transition-transform duration-300'
                      )}>
                        <Icon size={20} />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground mb-6">
                {locale === 'ar' ? 'الجدول المعتاد للإعداد' : 'Typical setup timeline'}
              </h3>
              <SetupTimeline />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            {locale === 'ar'
              ? 'نبدأ بأربعة منتجات أساسية ثم نتوسع مع الوقت إلى أنظمة أكثر تخصصاً حسب القطاع.'
              : 'We start with four core products and expand into industry-specific systems over time.'}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-plate-astral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl">
            <p className="text-lg text-mint mb-2">
              {locale === 'ar'
                ? 'يبدأ اشتراك البرمجيات من 500 يورو شهرياً لكل منتج، بحسب عدد المستخدمين والإعداد.'
                : 'Software subscription starts from EUR 500 per month per product, depending on users and configuration.'}
            </p>
            <p className="text-offwhite/70 mb-6">
              {locale === 'ar'
                ? 'قد يكون الإعداد مشمولاً في بعض الباقات أو متاحاً كرسوم تهيئة ثابتة.'
                : 'Setup is included in some packages or offered as a fixed onboarding fee.'}
            </p>
            <PrimaryButton href="/book?intent=suite-pricing" textColor="astral">
              {locale === 'ar' ? 'احجز مكالمة تسعير' : 'Book a Pricing Call'}
            </PrimaryButton>
          </div>
        </div>
      </section>

      <CTABand
        headline={locale === 'ar' ? 'اختر الإعداد المناسب.' : 'Choose the right Meridian setup.'}
        description={locale === 'ar'
          ? 'سنطابق المنتج ونطاق التهيئة وسعر البداية مع فريقك.'
          : "We'll match the product, onboarding scope, and starting price to your team."}
        primaryCta={{ label: locale === 'ar' ? 'احجز مكالمة' : 'Book a Call', href: "/book" }}
        secondaryCta={{ label: locale === 'ar' ? 'عرض الأسعار' : 'View pricing', href: "/pricing" }}
        visualKey="suite-core"
        variant="dark"
      />
    </Layout>
  );
};

export default Software;
