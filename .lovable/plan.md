
<context>
User-visible problem: Several marketing section headings are still rendering too small (roughly “3xl-ish”), specifically:
- “Everything you need to look credible and run cleanly.”
- “Structured delivery. Minimal meetings.”
- “Track A / Track B / Track C …”

You want these to be “big like 5xl” and we already agreed on:
- Scope: Mix (recommended) = marketing/CTA headings get the big size; pricing table group titles can remain smaller.
- Size token: use existing `text-poster-lg`.
</context>

<what-we-found>
1) The codebase (current files) is correct:
- `src/components/shared/SectionHeader.tsx` renders:
  - `<h2 className="font-serif text-poster-lg text-foreground mb-4">...`
  - default `variant = 'poster'`
- `text-poster-lg` is defined in `src/index.css` and is large: `clamp(2.75rem, 5vw, 4.5rem)`.

2) The running preview HTML is NOT using that SectionHeader output.
Browser inspection shows the heading is currently rendering as:
```html
<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
  Everything you need to look credible and run cleanly.
</h2>
```
This indicates the preview is loading an older compiled version of `SectionHeader.tsx` (or stale module output), not the file contents we see in the repo.
</what-we-found>

<root-cause-hypothesis>
The dev preview is serving an older `SectionHeader` module (stale Vite module version / HMR not updating that specific module). The proof is that:
- The DOM structure and classes match a typical “starter template” heading style, not our `font-serif text-poster-lg`.
- Those exact headings are rendered via `SectionHeader` in our current `Index.tsx` / `Services.tsx`, so the only way they appear like that is if the runtime `SectionHeader` module is outdated.

So this is not a “Tailwind class doesn’t exist” problem; it’s “the preview isn’t picking up the updated SectionHeader module” plus we should add an explicit verification marker.
</root-cause-hypothesis>

<solution-overview>
We’ll do a small, deterministic change that forces the preview to unquestionably load the new SectionHeader output, and gives us an easy way to verify in DevTools:
1) Update `SectionHeader.tsx` to add a unique “signature” class (e.g. `adsi-section-header`) on the `<h2>` so we can confirm the new component is actually being used.
2) Explicitly pass `variant="poster"` from the places you care about (`Index.tsx` and `Services.tsx`) so there is zero ambiguity and it also forces dependent modules to refresh.
3) Re-check the DOM: the `<h2>` should now contain `text-poster-lg` and `adsi-section-header`.

This stays within your “Mix” scope: it only affects the marketing/section headers that use `SectionHeader` (and does not touch pricing table titles unless they use `SectionHeader`, which they don’t).
</solution-overview>

<files-to-change>
1) `src/components/shared/SectionHeader.tsx`
- Add an identifying class to the `<h2>`:
  - Add `adsi-section-header` alongside existing classes.
- Keep the size logic as:
  - poster => `text-poster-lg`
  - interface => `text-heading-lg`

Example intent (not exact patch format):
```tsx
<h2
  className={cn(
    'adsi-section-header font-serif',
    variant === 'poster' ? 'text-poster-lg' : 'text-heading-lg',
    'text-foreground mb-4'
  )}
>
```

2) `src/pages/Index.tsx`
- Wherever `SectionHeader` is used for the marketing headings, explicitly pass:
  - `variant="poster"`
Example:
```tsx
<SectionHeader headline={home.whatWeDeliver.headline} variant="poster" />
<SectionHeader headline={home.howWeWork.headline} variant="poster" />
```

3) `src/pages/Services.tsx`
- In the “tracks” loop, explicitly pass:
  - `variant="poster"`
Example:
```tsx
<SectionHeader headline={track.title} subheadline={track.description} variant="poster" />
```
</files-to-change>

<verification-steps>
After implementing:
1) Open `/` (home).
2) Inspect the heading “Everything you need to look credible and run cleanly.”
3) Confirm the element includes:
- `class` contains `text-poster-lg`
- `class` contains `adsi-section-header`
4) Repeat for:
- “Structured delivery. Minimal meetings.”
5) Navigate to `/services` and inspect Track A/Track B headings, confirm same classes.

If any of those still shows `text-3xl font-bold tracking-tight ...`, then the preview is not refreshing correctly and we’ll take the next escalation step:
- add a tiny, harmless version string to `Layout` (or `App.tsx`) as well to force a full module graph refresh, or do a “preview hard reload” approach in the browser session to ensure the new modules are loaded.
</verification-steps>

<notes-and-guardrails>
- This plan does not change the actual size token: still `text-poster-lg`.
- This plan does not “force all h2 to be big”; it only impacts headings rendered by `SectionHeader` (marketing sections), matching your approved Mix scope.
- The signature class is temporary but useful; you can keep it (harmless) or remove it once verified.
</notes-and-guardrails>

<time-estimate>
About 10–15 minutes including verification.
</time-estimate>
