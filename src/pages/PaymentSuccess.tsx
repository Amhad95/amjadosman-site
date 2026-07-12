import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { useLocale } from "@/lib/locale";
import { usePageMeta } from "@/hooks/use-page-meta";

const PaymentSuccess = () => {
  const { locale } = useLocale();
  const [searchParams] = useSearchParams();
  const [state, setState] = useState<"checking" | "paid" | "pending" | "unavailable">("checking");
  const copy = {
    en: { paid: ["Payment received", "Thank you. The payment is confirmed and I will contact you with the next step."], checking: ["Confirming payment", "Checking the payment status securely before confirming your order."], pending: ["Payment is still processing", "Your checkout is complete, but the payment is not confirmed yet. Stripe will update this automatically."], unavailable: ["Payment could not be confirmed", "Please keep your Stripe receipt and contact me so I can confirm the order directly."], back: "Back to home", eyebrow: "Payment" },
    ar: { paid: ["تم استلام الدفع", "شكراً لك. تم تأكيد الدفع وسنتواصل معك بالخطوة التالية."], checking: ["جارٍ تأكيد الدفع", "نتحقق من حالة الدفع بأمان قبل تأكيد الطلب."], pending: ["لا يزال الدفع قيد المعالجة", "اكتمل السداد، لكن لم يتم تأكيد الدفع بعد. سيحدّث Stripe الحالة تلقائياً."], unavailable: ["تعذر تأكيد الدفع", "احتفظ بإيصال Stripe وتواصل معي لتأكيد الطلب مباشرة."], back: "العودة إلى الصفحة الرئيسية", eyebrow: "الدفع" },
    de: { paid: ["Zahlung erhalten", "Vielen Dank. Die Zahlung ist bestätigt und ich melde mich mit dem nächsten Schritt."], checking: ["Zahlung wird bestätigt", "Der Zahlungsstatus wird sicher geprüft, bevor die Bestellung bestätigt wird."], pending: ["Zahlung wird noch verarbeitet", "Der Checkout ist abgeschlossen, die Zahlung aber noch nicht bestätigt. Stripe aktualisiert den Status automatisch."], unavailable: ["Zahlung konnte nicht bestätigt werden", "Bitte bewahren Sie Ihre Stripe-Quittung auf und kontaktieren Sie mich, damit ich die Bestellung direkt bestätigen kann."], back: "Zur Startseite", eyebrow: "Zahlung" },
    fr: { paid: ["Paiement reçu", "Merci. Le paiement est confirmé et je vous contacte pour la suite."], checking: ["Vérification du paiement", "Le statut est vérifié de manière sécurisée avant confirmation de votre commande."], pending: ["Le paiement est encore en cours", "Le paiement est terminé, mais il n'est pas encore confirmé. Stripe mettra automatiquement le statut à jour."], unavailable: ["Le paiement n'a pas pu être confirmé", "Conservez votre reçu Stripe et contactez-moi afin que je confirme directement votre commande."], back: "Retour à l'accueil", eyebrow: "Paiement" },
    bg: { paid: ["Плащането е получено", "Благодаря. Плащането е потвърдено и ще се свържа с Вас за следващата стъпка."], checking: ["Потвърждаване на плащането", "Проверяваме сигурно статуса на плащането, преди да потвърдим поръчката."], pending: ["Плащането все още се обработва", "Поръчката е завършена, но плащането все още не е потвърдено. Stripe ще обнови статуса автоматично."], unavailable: ["Плащането не можа да бъде потвърдено", "Запазете разписката си от Stripe и се свържете с мен, за да потвърдя поръчката директно."], back: "Към началната страница", eyebrow: "Плащане" },
  }[locale];

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      setState("unavailable");
      return;
    }

    const controller = new AbortController();
    fetch(`/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`, { signal: controller.signal })
      .then(async (response) => ({ ok: response.ok, payload: await response.json().catch(() => null) as { paid?: boolean } | null }))
      .then(({ ok, payload }) => setState(ok && payload?.paid ? "paid" : ok ? "pending" : "unavailable"))
      .catch(() => setState("unavailable"));

    return () => controller.abort();
  }, [sessionId]);

  const [title, body] = useMemo(() => copy[state], [copy, state]);

  usePageMeta({ title: `${title} | Amjad Osman`, description: body });

  return (
    <Layout>
      <Hero
        eyebrow={copy.eyebrow}
        headline={title}
        subheadline={body}
        plate="emerald"
        rightElement={<div className="h-36 w-36 rounded-full border border-mint/30 bg-mint/10" aria-hidden="true" />}
      />
      <div className="container mx-auto px-4 py-12 text-center md:px-6 md:py-20">
        <SecondaryButton href="/">{copy.back}</SecondaryButton>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
