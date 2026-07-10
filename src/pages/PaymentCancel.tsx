import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { useLocale } from "@/lib/locale";
import { usePageMeta } from "@/hooks/use-page-meta";

const PaymentCancel = () => {
  const { locale } = useLocale();
  const copy = locale === "ar"
    ? { title: "لم يكتمل الدفع", body: "لم يتم خصم أي مبلغ. يمكنك العودة إلى الأسعار أو حجز مكالمة لمناقشة البداية.", back: "العودة إلى الأسعار" }
    : { title: "Checkout cancelled", body: "No payment was taken. Return to pricing or book a call to discuss the right starting point.", back: "Back to pricing" };

  usePageMeta({ title: `${copy.title} | Amjad Osman`, description: copy.body });

  return (
    <Layout>
      <Hero
        eyebrow={locale === "ar" ? "الدفع" : "Payment"}
        headline={copy.title}
        subheadline={copy.body}
        plate="burgundy"
        rightElement={<div className="h-36 w-36 rounded-[28px] border border-white/20 bg-white/10" aria-hidden="true" />}
      />
      <div className="container mx-auto px-4 py-12 text-center md:px-6 md:py-20">
        <SecondaryButton href="/pricing">{copy.back}</SecondaryButton>
      </div>
    </Layout>
  );
};

export default PaymentCancel;
