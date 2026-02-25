import { supabase } from "@/integrations/supabase/client";

export async function startCheckout(priceId: string, mode: "payment" | "subscription" = "payment") {
  const { data, error } = await supabase.functions.invoke("create-checkout", {
    body: { priceId, mode },
  });

  if (error) throw error;
  if (data?.url) {
    window.open(data.url, "_blank");
  }
}

// ── Track A: Brand ──
export const STRIPE_PRICES = {
  // One-time
  brand_sprint: "price_1T4qCvP5yEvNkfiCUeYfWJsI",
  web_build: "price_1T4qD3P5yEvNkfiCjv2XX6d4",
  sales_kit: "price_1T4qD4P5yEvNkfiCNbFsNiu1",
  landing_page: "price_1T4qD6P5yEvNkfiCJMvK8Vex",
  brand_template: "price_1T4qD7P5yEvNkfiCjvHGTmKy",
  pitch_deck: "price_1T4qD7P5yEvNkfiCujJkmCJZ",
  // Retainers
  brand_retainer_lite: "price_1T4qD8P5yEvNkfiCuZ5DpLx1",
  brand_retainer_standard: "price_1T4qD9P5yEvNkfiCLKPKRwYD",
  brand_retainer_priority: "price_1T4qDAP5yEvNkfiCMJGREEW5",

  // ── Track B: Ops ──
  ops_audit: "price_1T4qDEP5yEvNkfiCUiGO3gcV",
  sharepoint_setup: "price_1T4qDFP5yEvNkfiCJnD7HOhP",
  sop_pack: "price_1T4qDHP5yEvNkfiCyqmQV6Qm",
  permissions_overhaul: "price_1T4qDHP5yEvNkfiCyp9ojoeD",
  sop_creation: "price_1T4qDIP5yEvNkfiCmPqKDuU3",
  template_library: "price_1T4qDJP5yEvNkfiClyokAJxS",
  ops_retainer_lite: "price_1T4qDLP5yEvNkfiCHyYS2TXG",
  ops_retainer_standard: "price_1T4qDLP5yEvNkfiCJT46UHG0",
  ops_retainer_priority: "price_1T4qDMP5yEvNkfiCPFsMFFia",

  // ── Track C: Agents ──
  agent_pilot: "price_1T4qDQP5yEvNkfiCPi2osPwd",
  agent_pack: "price_1T4qDSP5yEvNkfiCQiYuaIMh",
  knowledge_agent: "price_1T4qDTP5yEvNkfiC6mAesML3",
  triage_agent: "price_1T4qDUP5yEvNkfiC71skuIZw",
  report_summarization: "price_1T4qDVP5yEvNkfiC8sR7ifmJ",
  intake_routing: "price_1T4qDWP5yEvNkfiCU2ahf3UZ",
  agents_retainer_lite: "price_1T4qDXP5yEvNkfiCxxHKFAb0",
  agents_retainer_standard: "price_1T4qDYP5yEvNkfiCEQY5AaDw",
  agents_retainer_priority: "price_1T4qDZP5yEvNkfiC59H0070s",
} as const;
