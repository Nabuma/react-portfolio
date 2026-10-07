# Arnaud Chapplain – Portfolio

Personal portfolio of Arnaud Chapplain, senior front-end developer specialized in **web performance**, **accessibility (RGAA / WCAG)** and **design systems**.

**Live site:** https://www.arnaud-chapplain.com

![Portfolio screenshot](docs/screenshot.png)

## Goals

The portfolio is also a technical proof of what it describes. It is built to be:

- **Fast**: small bundle, optimized images, no unnecessary network requests
- **Accessible**: semantic HTML, keyboard navigation, visible focus states
- **Multilingual**: French (default), English and Korean
- **Easy to maintain**: content lives in data files, not in components

## Tech stack

| Area | Choice |
| --- | --- |
| UI | React 19, TypeScript |
| Build | Vite |
| Styling | Tailwind CSS 4 + CSS design tokens (`variables.css`) |
| Images | WebP, optimized with Sharp |
| Quality | ESLint, Stylelint, strict TypeScript build |
| Hosting | Vercel (any static host works) |

## Key decisions

- **Content separated from UI.** Projects and expertise areas are stored in JSON files (`src/data/`), each translatable value having `fr`, `en` and `ko` fields. Adding a project or a language does not touch the components.
- **Lightweight i18n.** Locale state and interface strings live in `src/i18n.ts`. The choice is persisted in `localStorage` and the `lang` attribute of the document is updated for assistive technologies.
- **Design tokens.** Colors, spacing and typography are defined once in `variables.css` and consumed by the styles, which keeps the visual language consistent.
- **Image pipeline.** Source images are converted to WebP at 70% quality by a script (`npm run images:convert`). Images have explicit dimensions to prevent layout shift, and those below the first viewport are lazy-loaded.
- **Accessibility by default.** Landmarks, heading hierarchy, labelled controls, keyboard-accessible navigation and focus styles.

## Performance and accessibility

Audit results (Lighthouse, mobile, production build):

| Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- |
| 100 | 100 | 100 | 100 |

To reproduce the measurement:

1. `npm run build`
2. `npm run preview`
3. Open the preview URL in Chrome, then run Lighthouse from DevTools (mobile mode, clean profile without extensions).

Scores vary with browser version, device emulation and network. Always measure the production build, never the dev server.

or

`npx lhci autorun`

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

The dev server is usually available at `http://localhost:5173`.

On Windows PowerShell, use `npm.cmd` if the execution policy blocks `npm.ps1`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and create the production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint JavaScript and TypeScript |
| `npm run lint:css` | Lint CSS (ordering and style rules) |
| `npm run format:css` | Apply the Stylelint fixes |
| `npm run images:convert` | Optimize project images to WebP |

## Project structure

```text
src/
  App.tsx                 Main page and language-aware UI
  i18n.ts                 Locale state and interface translations
  data/
    projects.json         Project content (fr / en / ko)
    expertiseAreas.json   Expertise content (fr / en / ko)
  pages/                  Page-level components
  convert.js              WebP optimization script
  index.css               Global styles and Tailwind entry point
  variables.css           Design tokens
  reset.css               Base reset
public/images/            Project imagery (optimized WebP)
```

## Adding content

- **A project or expertise area:** edit `src/data/projects.json` or `src/data/expertiseAreas.json` and provide the `fr`, `en` and `ko` values. Technology names stay in their standard English form.
- **An image:** place it in `public/images`, register its filename and target width in the `images` array of `src/convert.js`, then run `npm run images:convert`.
- **A language:** add the locale in `src/i18n.ts` and the matching fields in the data files.

## Deployment

`npm run build` produces a static `dist/` directory that can be served by any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages). Configure the host to serve `index.html` for the root path, then audit the deployed site with Lighthouse.

## Contact

- Portfolio: https://www.arnaud-chapplain.com
- LinkedIn: https://www.linkedin.com/in/arnaudchapplain-6a04581a0
- Email: arnaud.chapplain@gmail.com
