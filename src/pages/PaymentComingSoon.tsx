import React from "react";
import { Clock3, Mail, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { useLocale, type Locale } from "@/lib/locale";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PaymentComingSoonCopy {
  eyebrow: string;
  headline: string;
  subheadline: string;
  serviceLabel: string;
  serviceFallback: string;
  body: string;
  noPayment: string;
  nextTitle: string;
  nextBody: string;
  book: string;
  back: string;
  paymentSetup: string;
  paymentSetupBody: string;
  confirmation: string;
  confirmationBody: string;
  contact: string;
}

const COPY: Record<Locale, PaymentComingSoonCopy> = {
  en: {
    eyebrow: "Payments",
    headline: "Payments opening soon",
    subheadline: "I am finishing the live payment setup so your purchase is handled securely from checkout through confirmation.",
    serviceLabel: "Selected service",
    serviceFallback: "Your selected service",
    body: "Online checkout is temporarily paused while the business verification and live payment connection are completed.",
    noPayment: "No payment has been taken.",
    nextTitle: "You can still get started",
    nextBody: "Book a short call to confirm the scope and timing. I will send the payment link as soon as live checkout is ready.",
    book: "Book a call",
    back: "Back to pricing",
    paymentSetup: "Secure payment setup",
    paymentSetupBody: "Stripe verification, live checkout, receipts, and confirmation emails are being finalized.",
    confirmation: "Clear next step",
    confirmationBody: "Your service remains available. We will confirm the details before any payment is requested.",
    contact: "Questions? Email hello@amjadosman.com",
  },
  ar: {
    eyebrow: "الدفع",
    headline: "الدفع سيتوفر قريباً",
    subheadline: "أستكمل إعداد الدفع المباشر حتى تتم معالجة طلبك بأمان من بوابة الدفع وحتى التأكيد.",
    serviceLabel: "الخدمة المختارة",
    serviceFallback: "الخدمة المختارة",
    body: "تم إيقاف الدفع الإلكتروني مؤقتاً إلى حين استكمال التحقق من النشاط وربط الدفع المباشر.",
    noPayment: "لم يتم خصم أي مبلغ.",
    nextTitle: "يمكنك البدء الآن",
    nextBody: "احجز مكالمة قصيرة لتأكيد النطاق والتوقيت. سأرسل رابط الدفع فور جاهزية الدفع المباشر.",
    book: "احجز مكالمة",
    back: "العودة إلى الأسعار",
    paymentSetup: "إعداد دفع آمن",
    paymentSetupBody: "يجري استكمال التحقق من Stripe والدفع المباشر والإيصالات ورسائل التأكيد.",
    confirmation: "خطوة تالية واضحة",
    confirmationBody: "الخدمة متاحة. سنؤكد التفاصيل قبل طلب أي دفعة.",
    contact: "للاستفسار: hello@amjadosman.com",
  },
  de: {
    eyebrow: "Zahlungen",
    headline: "Zahlungen bald verfügbar",
    subheadline: "Ich schließe die Einrichtung der Live-Zahlungen ab, damit Ihr Kauf sicher vom Checkout bis zur Bestätigung verarbeitet wird.",
    serviceLabel: "Ausgewählter Service",
    serviceFallback: "Ihr ausgewählter Service",
    body: "Der Online-Checkout ist vorübergehend pausiert, während die Geschäftsprüfung und die Live-Zahlungsverbindung abgeschlossen werden.",
    noPayment: "Es wurde keine Zahlung vorgenommen.",
    nextTitle: "Sie können trotzdem starten",
    nextBody: "Buchen Sie ein kurzes Gespräch, um Umfang und Zeitplan zu bestätigen. Den Zahlungslink sende ich, sobald der Live-Checkout bereit ist.",
    book: "Gespräch buchen",
    back: "Zu den Preisen",
    paymentSetup: "Sichere Zahlungseinrichtung",
    paymentSetupBody: "Stripe-Prüfung, Live-Checkout, Quittungen und Bestätigungs-E-Mails werden finalisiert.",
    confirmation: "Klare nächste Schritte",
    confirmationBody: "Der Service bleibt verfügbar. Wir bestätigen die Details, bevor eine Zahlung angefordert wird.",
    contact: "Fragen? hello@amjadosman.com",
  },
  fr: {
    eyebrow: "Paiements",
    headline: "Paiements bientôt disponibles",
    subheadline: "Je finalise le paiement en direct afin que votre achat soit traité en toute sécurité, du paiement à la confirmation.",
    serviceLabel: "Service sélectionné",
    serviceFallback: "Votre service sélectionné",
    body: "Le paiement en ligne est temporairement suspendu pendant la finalisation de la vérification et de la connexion de paiement en direct.",
    noPayment: "Aucun paiement n'a été débité.",
    nextTitle: "Vous pouvez tout de même commencer",
    nextBody: "Réservez un court appel pour confirmer le périmètre et le calendrier. Je vous enverrai le lien de paiement dès que le paiement en direct sera prêt.",
    book: "Réserver un appel",
    back: "Retour aux tarifs",
    paymentSetup: "Configuration sécurisée",
    paymentSetupBody: "La vérification Stripe, le paiement en direct, les reçus et les e-mails de confirmation sont en cours de finalisation.",
    confirmation: "Prochaine étape claire",
    confirmationBody: "Le service reste disponible. Nous confirmerons les détails avant de demander un paiement.",
    contact: "Une question ? hello@amjadosman.com",
  },
  bg: {
    eyebrow: "Плащания",
    headline: "Плащанията предстоят скоро",
    subheadline: "Завършвам настройката на плащанията на живо, за да бъде покупката Ви обработена сигурно от плащането до потвърждението.",
    serviceLabel: "Избрана услуга",
    serviceFallback: "Вашата избрана услуга",
    body: "Онлайн плащането временно е спряно, докато приключат проверката на бизнеса и връзката с реалните плащания.",
    noPayment: "Не е извършено плащане.",
    nextTitle: "Можете да започнете и сега",
    nextBody: "Запишете кратък разговор, за да потвърдим обхвата и сроковете. Ще изпратя линка за плащане, когато реалният checkout е готов.",
    book: "Запишете разговор",
    back: "Към цените",
    paymentSetup: "Сигурна настройка на плащанията",
    paymentSetupBody: "Проверката в Stripe, реалният checkout, разписките и имейлите за потвърждение се финализират.",
    confirmation: "Ясна следваща стъпка",
    confirmationBody: "Услугата остава достъпна. Ще потвърдим детайлите, преди да бъде поискано плащане.",
    contact: "Въпроси? hello@amjadosman.com",
  },
};

const PaymentComingSoon = () => {
  const { locale, isRTL } = useLocale();
  const [searchParams] = useSearchParams();
  const copy = COPY[locale];
  const selectedService = searchParams.get("service")?.trim() || copy.serviceFallback;

  usePageMeta({ title: `${copy.headline} | Amjad Osman`, description: copy.body });

  return (
    <Layout>
      <Hero
        eyebrow={copy.eyebrow}
        headline={copy.headline}
        subheadline={copy.subheadline}
        plate="emerald"
        primaryCta={{ label: copy.book, href: "/book" }}
        secondaryCta={{ label: copy.back, href: "/pricing" }}
        rightElement={
          <div className="flex h-44 w-44 items-center justify-center rounded-[34px] border border-mint/35 bg-mint/10 text-mint" aria-hidden="true">
            <Clock3 size={76} strokeWidth={1.2} />
          </div>
        }
      />

      <section className="container mx-auto px-4 pb-16 md:px-6 md:pb-24">
        <div className={cn("mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.05fr_0.95fr]", isRTL && "text-right")}>
          <div className="rounded-[28px] border border-ink/10 bg-card p-6 shadow-[0_20px_55px_-42px_rgba(8,15,32,0.24)] md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{copy.serviceLabel}</p>
            <h2 className="font-serif text-heading-md text-foreground">{selectedService}</h2>
            <p className="mt-5 text-body-lg leading-relaxed text-muted-foreground">{copy.body}</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-muted/45 px-4 py-2 text-sm font-semibold text-foreground">
              <ShieldCheck size={16} aria-hidden="true" />
              {copy.noPayment}
            </p>
          </div>

          <div className="rounded-[28px] border border-lavender/20 bg-lavender/10 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lavender/20 text-plate-astral">
                <Mail size={20} aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-serif text-heading-md text-foreground">{copy.nextTitle}</h2>
                <p className="mt-3 text-body-md leading-relaxed text-muted-foreground">{copy.nextBody}</p>
              </div>
            </div>

            <div className="mt-7 space-y-4 border-t border-ink/10 pt-6">
              <div>
                <p className="font-semibold text-foreground">{copy.paymentSetup}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy.paymentSetupBody}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">{copy.confirmation}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy.confirmationBody}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton href="/book" textColor="ink">{copy.book}</PrimaryButton>
              <SecondaryButton href="/pricing">{copy.back}</SecondaryButton>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">{copy.contact}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentComingSoon;
