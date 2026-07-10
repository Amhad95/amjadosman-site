import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { useLocale } from "@/lib/locale";
import { usePageMeta } from "@/hooks/use-page-meta";

const PaymentSuccess = () => {
  const { locale } = useLocale();
  const copy = {
    en: { title: "Payment received", body: "Thank you. I will review the service details and contact you with the next step.", back: "Back to home", eyebrow: "Payment" },
    ar: { title: "تم استلام الدفع", body: "شكراً لك. سنراجع تفاصيل الخدمة ونتواصل معك بالخطوة التالية.", back: "العودة إلى الصفحة الرئيسية", eyebrow: "الدفع" },
    de: { title: "Zahlung erhalten", body: "Vielen Dank. Ich prüfe die Servicedetails und melde mich mit dem nächsten Schritt.", back: "Zur Startseite", eyebrow: "Zahlung" },
    fr: { title: "Paiement reçu", body: "Merci. Je vérifie les détails du service et vous contacte pour la prochaine étape.", back: "Retour à l'accueil", eyebrow: "Paiement" },
    bg: { title: "Плащането е получено", body: "Благодаря. Ще прегледам детайлите на услугата и ще се свържа с вас за следващата стъпка.", back: "Към началната страница", eyebrow: "Плащане" },
  }[locale];

  usePageMeta({ title: `${copy.title} | Amjad Osman`, description: copy.body });

  return (
    <Layout>
      <Hero
        eyebrow={copy.eyebrow}
        headline={copy.title}
        subheadline={copy.body}
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
