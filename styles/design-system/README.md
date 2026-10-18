# Design system tokens

These files are copied verbatim from [`tyvick-4/TyVick-Design-System`](https://github.com/tyvick-4/TyVick-Design-System)
(commit `dc54000`, "Make typography consistent across the design system"):

| Here | Source |
| --- | --- |
| `colors.css` | `tokens/colors.css` |
| `typography.css` | `tokens/typography.css` |
| `spacing.css` | `tokens/spacing.css` |
| `motion.css` | `tokens/motion.css` |
| `provenance.css` | `tokens/provenance.css` |
| `base.css` | `base.css` |

Don't edit them here. Change the design system, then copy the files over again.
`tokens/fonts.css` is left out on purpose: `index.html` loads only the three
families the site uses (Playfair Display, Inter, JetBrains Mono) with a
non-blocking `<link>`.

`index.css` imports these and maps them to Tailwind utilities:

- Colors: `bg-bg`, `bg-bg-raised`, `bg-surface`, `bg-surface-2`, `bg-surface-hover`,
  `border-line`, `border-line-strong`, `text-ink`, `text-muted`, `text-faint`,
  `*-accent`, `*-accent-hover`, `*-accent-ink`, `*-accent-soft`, `*-accent-border`, `text-link`.
- Type: `font-display` / `font-sans` / `font-mono`; sizes `text-display-1`, `text-h1`–`text-h3`,
  `text-body-lg`, `text-body`, `text-small`, `text-ui`; mono label sizes `text-eyebrow`,
  `text-label`, `text-label-sm` (the only mono sizes allowed), plus `eyebrow` and `meta-label`.
- `shadow-card`, `shadow-glow`, `page-container`; `rounded-sm/md/lg/xl` use the system radii.

Type roles: display face for headings, the name and metric numerals; Inter for
body text and anything clickable; JetBrains Mono only for non-interactive labels.
