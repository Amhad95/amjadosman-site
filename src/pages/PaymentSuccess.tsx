import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, Mail, ReceiptText } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { useLocale, type Locale } from "@/lib/locale";
import { usePageMeta } from "@/hooks/use-page-meta";

type PaymentState = "checking" | "paid" | "pending" | "unavailable";

interface PaymentDetails {
  paid?: boolean;
  paymentStatus?: string;
  serviceName?: string;
  amountTotal?: number | null;
  currency?: string | null;
  customerName?: string;
  customerEmail?: string;
  invoiceNumber?: string;
  invoiceUrl?: string;
  invoicePdf?: string;
  receiptUrl?: string;
}

interface PaymentCopy {
  paid: readonly [string, string];
  checking: readonly [string, string];
  pending: readonly [string, string];
  unavailable: readonly [string, string];
  back: string;
  pricing: string;
  eyebrow: string;
  orderSummary: string;
  service: string;
  serviceFallback: string;
  amount: string;
  email: string;
  paymentStatus: string;
  paidStatus: string;
  openInvoice: string;
  downloadInvoice: string;
  viewReceipt: string;
  documentPending: string;
  nextSteps: string;
  nextStepsHeadline: string;
  nextStepsBody: string;
  confirmationEmail: string;
  noEmail: string;
  nextStepOne: string;
  nextStepTwo: string;
  nextStepThree: string;
}

const PAYMENT_COPY: Record<Locale, PaymentCopy> = {
  en: {
    paid: ["Payment received", "Your payment is confirmed. Keep this confirmation for your records; I will contact you with the kickoff details."],
    checking: ["Confirming payment", "Checking the payment status securely before confirming your order."],
    pending: ["Payment is still processing", "Your checkout is complete, but the payment is not confirmed yet. Stripe will update the status automatically."],
    unavailable: ["Payment could not be confirmed", "Please keep your Stripe receipt and contact me so I can confirm the order directly."],
    back: "Back to home",
    pricing: "Back to pricing",
    eyebrow: "Payment",
    orderSummary: "Order summary",
    service: "Service",
    serviceFallback: "Service purchase",
    amount: "Amount",
    email: "Email",
    paymentStatus: "Payment status",
    paidStatus: "Paid",
    openInvoice: "Open invoice",
    downloadInvoice: "Download invoice PDF",
    viewReceipt: "View Stripe receipt",
    documentPending: "Your invoice or receipt is being prepared. Stripe will send it to the email entered during checkout.",
    nextSteps: "What happens next",
    nextStepsHeadline: "Your starting point is reserved",
    nextStepsBody: "I will review the payment and contact you with the kickoff details, timing, and any information needed to begin.",
    confirmationEmail: "Confirmation sent to",
    noEmail: "No email address was available for this session. Please contact hello@amjadosman.com if you need the receipt resent.",
    nextStepOne: "Keep this page and your Stripe receipt for your records.",
    nextStepTwo: "Watch your inbox for the invoice or receipt and kickoff email.",
    nextStepThree: "Reply to the email if you need to clarify scope or timing.",
  },
  ar: {
    paid: ["تم استلام الدفع", "تم تأكيد الدفع. احتفظ بهذا التأكيد وسأتواصل معك بتفاصيل البداية."],
    checking: ["جارٍ تأكيد الدفع", "نتحقق من حالة الدفع بأمان قبل تأكيد الطلب."],
    pending: ["لا يزال الدفع قيد المعالجة", "اكتملت عملية الدفع، لكن لم يتم تأكيدها بعد. سيحدّث Stripe الحالة تلقائياً."],
    unavailable: ["تعذر تأكيد الدفع", "احتفظ بإيصال Stripe وتواصل معي لتأكيد الطلب مباشرة."],
    back: "العودة إلى الصفحة الرئيسية",
    pricing: "العودة إلى الأسعار",
    eyebrow: "الدفع",
    orderSummary: "ملخص الطلب",
    service: "الخدمة",
    serviceFallback: "شراء خدمة",
    amount: "المبلغ",
    email: "البريد الإلكتروني",
    paymentStatus: "حالة الدفع",
    paidStatus: "مدفوع",
    openInvoice: "فتح الفاتورة",
    downloadInvoice: "تنزيل ملف الفاتورة",
    viewReceipt: "عرض إيصال Stripe",
    documentPending: "يتم تجهيز الفاتورة أو الإيصال. سيرسله Stripe إلى البريد الذي أدخلته أثناء الدفع.",
    nextSteps: "ماذا يحدث بعد ذلك",
    nextStepsHeadline: "تم حجز نقطة البداية لك",
    nextStepsBody: "سأراجع الدفع وأتواصل معك بتفاصيل البداية والموعد والمعلومات المطلوبة للبدء.",
    confirmationEmail: "تم إرسال التأكيد إلى",
    noEmail: "لم يتوفر بريد إلكتروني لهذه الجلسة. تواصل مع hello@amjadosman.com إذا احتجت إعادة إرسال الإيصال.",
    nextStepOne: "احتفظ بهذه الصفحة وإيصال Stripe لسجلاتك.",
    nextStepTwo: "تحقق من بريدك بحثاً عن الفاتورة أو الإيصال ورسالة البداية.",
    nextStepThree: "يمكنك الرد على الرسالة إذا احتجت توضيح النطاق أو التوقيت.",
  },
  de: {
    paid: ["Zahlung erhalten", "Ihre Zahlung ist bestätigt. Bewahren Sie diese Bestätigung auf; ich melde mich mit den Startdetails."],
    checking: ["Zahlung wird bestätigt", "Der Zahlungsstatus wird sicher geprüft, bevor die Bestellung bestätigt wird."],
    pending: ["Zahlung wird noch verarbeitet", "Der Checkout ist abgeschlossen, aber die Zahlung noch nicht bestätigt. Stripe aktualisiert den Status automatisch."],
    unavailable: ["Zahlung konnte nicht bestätigt werden", "Bitte bewahren Sie Ihre Stripe-Quittung auf und kontaktieren Sie mich."],
    back: "Zur Startseite",
    pricing: "Zurück zu den Preisen",
    eyebrow: "Zahlung",
    orderSummary: "Bestellübersicht",
    service: "Service",
    serviceFallback: "Servicekauf",
    amount: "Betrag",
    email: "E-Mail",
    paymentStatus: "Zahlungsstatus",
    paidStatus: "Bezahlt",
    openInvoice: "Rechnung öffnen",
    downloadInvoice: "Rechnung als PDF herunterladen",
    viewReceipt: "Stripe-Quittung ansehen",
    documentPending: "Ihre Rechnung oder Quittung wird vorbereitet. Stripe sendet sie an die beim Checkout angegebene E-Mail-Adresse.",
    nextSteps: "Wie es weitergeht",
    nextStepsHeadline: "Ihr Startpunkt ist reserviert",
    nextStepsBody: "Ich prüfe die Zahlung und melde mich mit Startdetails, Zeitplan und den benötigten Informationen.",
    confirmationEmail: "Bestätigung gesendet an",
    noEmail: "Für diese Sitzung wurde keine E-Mail-Adresse erfasst. Kontaktieren Sie hello@amjadosman.com für eine erneute Zusendung.",
    nextStepOne: "Bewahren Sie diese Seite und Ihre Stripe-Quittung auf.",
    nextStepTwo: "Prüfen Sie Ihren Posteingang auf Rechnung, Quittung und Start-E-Mail.",
    nextStepThree: "Antworten Sie auf die E-Mail, wenn Umfang oder Zeitplan geklärt werden müssen.",
  },
  fr: {
    paid: ["Paiement reçu", "Votre paiement est confirmé. Conservez cette confirmation ; je vous contacterai avec les détails de démarrage."],
    checking: ["Vérification du paiement", "Le statut est vérifié de manière sécurisée avant confirmation de votre commande."],
    pending: ["Le paiement est encore en cours", "Le paiement est terminé, mais pas encore confirmé. Stripe mettra automatiquement le statut à jour."],
    unavailable: ["Le paiement n'a pas pu être confirmé", "Conservez votre reçu Stripe et contactez-moi afin que je confirme la commande."],
    back: "Retour à l'accueil",
    pricing: "Retour aux tarifs",
    eyebrow: "Paiement",
    orderSummary: "Résumé de la commande",
    service: "Service",
    serviceFallback: "Achat de service",
    amount: "Montant",
    email: "E-mail",
    paymentStatus: "Statut du paiement",
    paidStatus: "Payé",
    openInvoice: "Ouvrir la facture",
    downloadInvoice: "Télécharger la facture PDF",
    viewReceipt: "Voir le reçu Stripe",
    documentPending: "Votre facture ou votre reçu est en préparation. Stripe l'enverra à l'adresse indiquée lors du paiement.",
    nextSteps: "La suite",
    nextStepsHeadline: "Votre point de départ est réservé",
    nextStepsBody: "Je vais vérifier le paiement et vous contacter avec les détails de démarrage, le calendrier et les informations nécessaires.",
    confirmationEmail: "Confirmation envoyée à",
    noEmail: "Aucune adresse e-mail n'était disponible pour cette session. Contactez hello@amjadosman.com pour recevoir le reçu.",
    nextStepOne: "Conservez cette page et votre reçu Stripe.",
    nextStepTwo: "Surveillez votre boîte mail pour la facture, le reçu et l'e-mail de démarrage.",
    nextStepThree: "Répondez à l'e-mail si le périmètre ou le calendrier doit être précisé.",
  },
  bg: {
    paid: ["Плащането е получено", "Плащането е потвърдено. Запазете това потвърждение; ще се свържа с Вас с подробности за началото."],
    checking: ["Потвърждаване на плащането", "Проверяваме сигурно статуса на плащането, преди да потвърдим поръчката."],
    pending: ["Плащането все още се обработва", "Поръчката е завършена, но плащането още не е потвърдено. Stripe ще обнови статуса автоматично."],
    unavailable: ["Плащането не можа да бъде потвърдено", "Запазете разписката си от Stripe и се свържете с мен."],
    back: "Към началната страница",
    pricing: "Обратно към цените",
    eyebrow: "Плащане",
    orderSummary: "Обобщение на поръчката",
    service: "Услуга",
    serviceFallback: "Покупка на услуга",
    amount: "Сума",
    email: "Имейл",
    paymentStatus: "Статус на плащането",
    paidStatus: "Платено",
    openInvoice: "Отворете фактурата",
    downloadInvoice: "Изтеглете фактурата като PDF",
    viewReceipt: "Вижте разписката от Stripe",
    documentPending: "Вашата фактура или разписка се подготвя. Stripe ще я изпрати на имейла, въведен при плащането.",
    nextSteps: "Какво следва",
    nextStepsHeadline: "Началната Ви точка е запазена",
    nextStepsBody: "Ще прегледам плащането и ще се свържа с Вас с подробности за началото, сроковете и нужната информация.",
    confirmationEmail: "Потвърждението е изпратено до",
    noEmail: "За тази сесия не е наличен имейл. Пишете на hello@amjadosman.com, ако трябва да получите разписката.",
    nextStepOne: "Запазете тази страница и разписката си от Stripe.",
    nextStepTwo: "Проверете входящата си поща за фактурата, разписката и имейла за начало.",
    nextStepThree: "Отговорете на имейла, ако трябва да уточним обхвата или сроковете.",
  },
};

const formatAmount = (amount: number | null | undefined, currency: string | null | undefined, locale: Locale) => {
  if (typeof amount !== "number" || !currency) return "—";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
};

const PaymentSuccess = () => {
  const { locale } = useLocale();
  const [searchParams] = useSearchParams();
  const [state, setState] = useState<PaymentState>("checking");
  const [details, setDetails] = useState<PaymentDetails | null>(null);
  const copy = PAYMENT_COPY[locale];
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      setState("unavailable");
      return;
    }

    const controller = new AbortController();
    fetch(`/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`, { signal: controller.signal })
      .then(async (response) => ({
        ok: response.ok,
        payload: await response.json().catch(() => null) as PaymentDetails | null,
      }))
      .then(({ ok, payload }) => {
        setDetails(payload);
        setState(ok && payload?.paid ? "paid" : ok ? "pending" : "unavailable");
      })
      .catch(() => setState("unavailable"));

    return () => controller.abort();
  }, [sessionId]);

  const [title, body] = copy[state];
  const paidDetails = state === "paid" && details?.paid ? details : null;

  usePageMeta({ title: `${title} | Amjad Osman`, description: body });

  return (
    <Layout>
      <Hero
        eyebrow={copy.eyebrow}
        headline={title}
        subheadline={body}
        plate="emerald"
        rightElement={<div className="flex h-36 w-36 items-center justify-center rounded-full border border-mint/30 bg-mint/10" aria-hidden="true"><CheckCircle2 size={48} className="text-mint/70" /></div>}
      />

      {paidDetails && (
        <section className="bg-background py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[30px] border border-ink/10 bg-card p-6 shadow-[0_24px_60px_-46px_rgba(8,15,32,0.24)] md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <ReceiptText size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{copy.orderSummary}</p>
                    <h2 className="font-serif text-heading-md text-foreground">{paidDetails.serviceName || copy.serviceFallback}</h2>
                    {paidDetails.invoiceNumber && <p className="mt-2 text-sm text-muted-foreground">Invoice {paidDetails.invoiceNumber}</p>}
                  </div>
                </div>

                <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-ink/10 pt-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.amount}</dt>
                    <dd className="mt-1 text-lg font-semibold text-foreground">{formatAmount(paidDetails.amountTotal, paidDetails.currency, locale)}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.paymentStatus}</dt>
                    <dd className="mt-1 text-lg font-semibold text-emerald-700">{copy.paidStatus}</dd>
                  </div>
                  {paidDetails.customerEmail && (
                    <div className="sm:col-span-2">
                      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.email}</dt>
                      <dd className="mt-1 break-words text-base text-foreground">{paidDetails.customerEmail}</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  {paidDetails.invoiceUrl && <SecondaryButton href={paidDetails.invoiceUrl}>{copy.openInvoice}</SecondaryButton>}
                  {paidDetails.invoicePdf && <SecondaryButton href={paidDetails.invoicePdf}>{copy.downloadInvoice}</SecondaryButton>}
                  {paidDetails.receiptUrl && <SecondaryButton href={paidDetails.receiptUrl}>{copy.viewReceipt}</SecondaryButton>}
                </div>
                {!paidDetails.invoiceUrl && !paidDetails.invoicePdf && !paidDetails.receiptUrl && (
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{copy.documentPending}</p>
                )}
              </div>

              <div className="rounded-[30px] border border-ink/10 bg-muted/45 p-6 md:p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{copy.nextSteps}</p>
                <h2 className="font-serif text-heading-md text-foreground">{copy.nextStepsHeadline}</h2>
                <p className="mt-4 text-body-md text-muted-foreground">{copy.nextStepsBody}</p>

                {paidDetails.customerEmail ? (
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-ink/10 bg-card px-4 py-4">
                    <Mail size={19} className="mt-0.5 shrink-0 text-plate-emerald" />
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">{copy.confirmationEmail}</p>
                      <p className="mt-1 break-words font-semibold text-foreground">{paidDetails.customerEmail}</p>
                    </div>
                  </div>
                ) : (
                  <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-relaxed text-amber-900">{copy.noEmail}</p>
                )}

                <ol className="mt-6 space-y-4 border-t border-ink/10 pt-6">
                  {[copy.nextStepOne, copy.nextStepTwo, copy.nextStepThree].map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-offwhite">{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="container mx-auto flex flex-wrap justify-center gap-3 px-4 py-12 md:px-6 md:py-16">
        <SecondaryButton href="/pricing">{copy.pricing}</SecondaryButton>
        <SecondaryButton href="/">{copy.back}</SecondaryButton>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
