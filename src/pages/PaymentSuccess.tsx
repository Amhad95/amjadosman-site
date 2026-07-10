import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { useLocale } from "@/lib/locale";
import { usePageMeta } from "@/hooks/use-page-meta";

const PaymentSuccess = () => {
  const { locale } = useLocale();
  const copy = locale === "ar"
    ? { title: "تم استلام الدفع", body: "شكراً لك. سنراجع تفاصيل الخدمة ونتواصل معك بالخطوة التالية.", back: "العودة إلى الصفحة الرئيسية" }
    : { title: "Payment received", body: "Thank you. I will review the service details and contact you with the next step.", back: "Back to home" };

  usePageMeta({ title: `${copy.title} | Amjad Osman`, description: copy.body });

  return (
    <Layout>
      <Hero
        eyebrow={locale === "ar" ? "الدفع" : "Payment"}
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
