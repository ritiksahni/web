## Ritik Sahni — Site Ideas (living doc)

This is a perpetual ideas file for `ritiksahni.com`. It never "finishes". Capture sparks first; refine later. Use checkboxes to track movement from idea → experiment → ship.

### Vision
- **Personality-forward**: maximalist, playful, opinionated, sincere.
- **Multi-format**: essays, notes, visuals, projects, tiny tools.
- **Fast + accessible**: Astro-first, SEO-solid, no bloat.
- **Teach in public**: show process, not just outcomes.

### Aesthetic Direction
- **Type**: high-contrast serif for titles; humane geometric sans for body.
- **Color**: rich, saturated accents; dark mode as first-class; seasonal palettes.
- **Motion**: micro-interactions, page transitions, cursor trails (tasteful), parallax on hero visuals.
- **Texture**: subtle film grain, hand-drawn dividers, signature marks.

### Content Pillars
- **Thinking**: long-form essays, short notes, aphorisms.
- **Building**: product/dev logs, experiments, prototypes.
- **Taste**: references, quotes, books, films, music, moodboards.
- **Self**: bio, values, now, uses, timeline.

### Structure Ideas
- Notes garden (bidirectional links, graph, backlinks).
- Series/collections (e.g., "Design Maximalism", "Founder Logs").
- Highlights page (best-of writing/projects).
- Visual gallery (posters, sketches, photos, covers).
- Interactive home hero (time-based greeting, ambient animation).

### Feature Ideas
- [ ] Dynamic OG images (per post) with cover art templates.
- [ ] Webmentions/likes/bookmarks import (IndieWeb).
- [ ] Newsletter (Buttondown/ConvertKit). Inline subscribe + exit-intent.
- [ ] Comments (Giscus or GitHub Issues proxy) with privacy note.
- [ ] Now page (`/now`) auto-expiring updates.
- [ ] Uses page (`/uses`) with categories and affiliate-safe links.
- [ ] Reading list + notes (Goodreads/API-free manual curated).
- [ ] Library of templates (writing prompts, checklists).
- [ ] Timeline (career/projects/life moments) with scrollytelling.
- [ ] Audio narration for top essays (voice identity).
- [ ] Dark/light/high-contrast themes toggle.
- [ ] On-site search (pagefind/mini-lunr, zero client JS by default).
- [ ] RSS enhancements (multiple feeds: all, essays, notes, projects).
- [ ] Drafts mode with secret share links.

### Personalization
- [ ] Handwritten signature SVG for footer and post endings.
- [ ] Custom emoji set or iconography for tags.
- [ ] Microcopy voice guide (funny, but warm; no snark).
- [ ] Easter eggs (Konami to switch palette; hidden about page).

### Design System To Define
- [ ] Type scale (e.g., Major Third). Display/Title/Lead/Body/Meta.
- [ ] Spacing scale and container widths.
- [ ] Color tokens with semantic roles and CSS variables.
- [ ] Motion tokens (durations, easings, distances).
- [ ] Card, Tag/Chip, Callout, Pill Buttons, Stat blocks.

### SEO/Performance
- [ ] Per-page meta hygiene (titles, descriptions, canonical, schema.org).
- [ ] Content schema: Article, Person, Breadcrumbs, Project, CreativeWork.
- [ ] Sitemap/robots, 404/410, redirects for legacy slugs.
- [ ] LCP targets: optimized cover images, preloads, responsive sources.

### Analytics/Privacy
- [ ] Product analytics: PostHog (already scaffolded) with cookieless mode.
- [ ] Privacy page with plain-language data usage.
- [ ] Event map: read, subscribe, share, copy-link, search, filter.

### Integrations
- [ ] Social cards auto-gen, per-tag themes.
- [ ] Cross-posting helpers (X/LinkedIn) with UTM presets.
- [ ] Webhooks to Tweet/X on publish (optional, manual toggle).

### Editorial Systems
- [ ] Writing pipeline: ideas → draft → review → publish → update log.
- [ ] Series taxonomies and landing pages.
- [ ] Callouts: "Key idea", "Tactic", "Story", "Reference".
- [ ] End-of-post CTA: subscribe, related posts, or project plug.

### Immediate Next Experiments (small, shippable)
- [ ] Add `/now` page with 3 bullets about current focus.
- [ ] Add `/uses` page with gear, apps, workflows.
- [ ] Add dynamic OG image for blog posts (single template v1).
- [ ] Create `highlights` page curating 7 best pieces.
- [ ] Add hand-drawn divider and signature to `BaseLayout` footer.

### Longer Plays
- [ ] Notes garden with backlinks and graph.
- [ ] Timeline scrollytelling page.
- [ ] Audio narration for 3 essays.

### Backlog Parking Lot
- [ ] Interactive toys (color harmonies, typography tester, idea dice).
- [ ] Book summaries with skimmable cards and key quotes.
- [ ] Visual essays (scrollytelling + canvas/WebGL light).

---

Append your ideas below, messy-first. Date entries if helpful.

## Brand Strategy v1 (seeded)

### Brand North Star
- Adjectives: **Precise. Experimental. Compelling.**
- Ethos: engineering-grade clarity with a designer’s curiosity. Opinionated but generous.

### Voice & Tone
- Straightforward, piercing, minimal ornament. Teach by revealing process and mental models.
- Avoid filler. Prefer strong verbs, short sentences, concrete examples.
- Accept sharp takes; earn them with insight and receipts.

### Visual Identity Direction
- References: Apple (precision), Teenage Engineering (playful craft), Vercel (refined minimalism).
- Type pairing (proposal):
  - Display: `Instrument Serif` or `Libre Caslon Text` for headlines.
  - Body/UI: `SF Pro` (fallback: `Inter`).
  - Notes: generous line-height, tight titles, optical sizes if available.
- Color (proposal): monochrome core + 1 saturated accent.
  - Candidates: Electric Blue (#3B82F6-ish), Vermilion Red, Acid Green.
  - Dark-first theme with excellent contrast; light theme keeps the accent restrained.
- Motion: micro-interactions on hover/press; lightweight page transitions; no scroll-jacking.
- Texture: subtle grain and hand-drawn dividers used sparingly.

### Content Model & Cadence
- Long-form essays, short notes/microblogs (hours→days), image posts (camera/web).
- Collections/series for deep dives (e.g., “Builder Logs”, “Systems Thinking in Life”).
- Highlights page curating best of. Backlinks between essays and notes.

### Topics & Positioning
- Backend systems/infra, engineering utility, systems thinking beyond tech,
  writing-as-engineering and teaching, global distribution & builders’ mindset.
- Position: translate infra logic into culture, creativity, rituals, F1, and more.

### Signature Element Options (pick one to own)
- [ ] Monogram/glyph that subtly appears in headings and OG images.
- [ ] Hand-drawn underline marker for key lines and pull quotes.
- [ ] Pulsing “precision dot” accent used in icons/cursor/links.
- [ ] Custom bracket motif framing headlines or images.

### Channels & Distribution
- Manual cross-posting; no auto-integrations. Craft per-platform copy.
- Newsletter via existing Netlify Forms (collect-only v1; send via export/manual provider).
- RSS feeds: essays, notes, projects.

### Interactivity & Toys (aligned to brand)
- Idea picks:
  - [ ] Consistency calculator: model “builder cadence” → suggested rituals.
  - [ ] Latency visualizer: show global distribution trade-offs with sliders.
  - [ ] Writing linter: flags vagueness and passive voice with fixes.

### Accessibility Stance
- Fun-first but substance-driven. Maintain semantic HTML, focus states, alt text, and color contrast. Provide “reduce motion” respect.

### Measurement (PostHog)
- Events: `post_read`, `copy_link`, `share_click`, `subscribe_submit`, `search_query`, `filter_tag`, `toy_run`.
- KPIs: read completion rate, highlights page CTR, subscribe conversion on top essays.

### Roadmap v1 (shippable)
- [ ] `/now` page (3 bullets, updated monthly).
- [ ] `/uses` page (gear/apps/workflows).
- [ ] Highlights page (7 best pieces).
- [ ] Notes stream (microblogs) with simple composer (MD in repo).
- [ ] Image posts stream with EXIF/date and simple gallery.
- [ ] Dynamic OG template v1 (title + glyph + accent color).
- [ ] Add signature divider + optional signature mark to `BaseLayout`.
- [ ] Type scale + tokens (colors, spacing, motion) wired into Tailwind.

### Decisions Needed
- Choose display/body pairing (Instrument Serif vs Libre Caslon Text for display; SF Pro for body).
- Pick one accent color to own (blue/red/acid green or alternative).
- Select one signature element to implement first.
- Which two toys to build first?
- Dark-first confirmed? Any light-mode constraints?
- OG style: stark type-led or image-led?
- Microblog route naming preference: `/notes` vs `/micro` vs `/log`.

— End v1 —


