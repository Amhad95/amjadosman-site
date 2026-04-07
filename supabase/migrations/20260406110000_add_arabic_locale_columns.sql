alter table public.articles
  add column if not exists title_ar text,
  add column if not exists excerpt_ar text,
  add column if not exists body_ar text,
  add column if not exists category_ar text;

alter table public.work_cases
  add column if not exists title_ar text,
  add column if not exists description_ar text,
  add column if not exists category_ar text,
  add column if not exists cta_label_ar text;
