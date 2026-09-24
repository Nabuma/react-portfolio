# Arnaud Chapplain - Portfolio

Personal portfolio for Arnaud Chapplain, senior front-end developer. The site presents selected projects, expertise in web performance and accessibility, and contact links.

It is built as a small, static React application with Vite and TypeScript. The interface is French by default and can be switched between French, English, and Korean.

## Highlights

- French default language with English and Korean translations
- Language preference persisted in `localStorage`
- Semantic HTML and keyboard-accessible navigation
- Responsive layout for mobile and desktop
- Project and expertise content stored in JSON data files
- WebP project imagery with an optimization script powered by Sharp
- Performance-focused implementation targeting a Lighthouse score of 100
- ESLint and Stylelint checks

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Sharp for WebP image optimization
- ESLint and Stylelint

## Requirements

- Node.js 20 or newer recommended
- npm

## Installation

```bash
npm install
```

On Windows PowerShell, use `npm.cmd` if the PowerShell execution policy blocks `npm.ps1`.

## Development

Start the Vite development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

## Production build

Create a type-checked production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The Lighthouse score should be measured against the preview or deployed production site, not the Vite development server.

## Lighthouse 100 target

The portfolio is designed to target 100 in Lighthouse Performance, Accessibility, Best Practices, and SEO. The main practices supporting that target are:

- lightweight static rendering through Vite
- responsive images with explicit dimensions to reduce layout shift
- lazy loading for project images below the first viewport
- WebP assets and optimized image variants
- semantic landmarks, headings, focus states, and accessible labels
- minimal runtime dependencies and no unnecessary network requests

To check the result:

1. Run `npm run build`.
2. Run `npm run preview`.
3. Open the preview URL in Chrome.
4. Open DevTools, select **Lighthouse**, choose the required categories and mobile or desktop mode, then run the audit.

Lighthouse results can vary with browser version, device emulation, extensions, network conditions, and hosting configuration. A score of 100 is therefore a validation target for the deployed build, not a permanent guarantee.

## Translations

Translations are implemented in `src/i18n.ts`.

- `fr` is the default locale.
- `en` provides the English interface.
- `ko` provides the Korean interface.
- The selected locale is stored under the `locale` key in `localStorage`.
- The document language is updated with the active locale for assistive technologies and browser language handling.

Project translations live in `src/data/projects.json`, and expertise translations live in `src/data/expertiseAreas.json`. Each translatable value has `fr`, `en`, and `ko` fields. Technology and tool names intentionally remain in their standard English form.

## WebP image optimization

Source images are kept in `public/images`. The optimization script reads the configured source WebP files and optimizes them in place at 70% quality:

```bash
npm run images:convert
```

On Windows PowerShell:

```powershell
npm.cmd run images:convert
```

The script is defined in `src/convert.js` and currently processes:

- `darty.webp`
- `le-monde.webp`
- `gouv.webp`
- `belles-demeures.webp`
- `acadomia.webp`

Each command replaces the existing image with an optimized file using the same filename. A temporary `.optimized.webp` file is used during processing and is renamed back to the original filename after conversion. If a new image is added, register its filename and target width in the `images` array in `src/convert.js`.

## Code quality commands

```bash
npm run lint
npm run lint:css
npm run format:css
```

`lint` checks JavaScript and TypeScript. `lint:css` checks CSS ordering and style rules. `format:css` applies the configured Stylelint fixes.

## Project structure

```text
src/
  App.tsx                 Main page and language-aware UI
  i18n.ts                 Locale state and interface translations
  data/
    projects.json         Project content and translations
    expertiseAreas.json   Expertise content and translations
  pages/                  Page-level components
  convert.js              WebP optimization script
  index.css               Global styles and Tailwind entry point
  variables.css           Design tokens
  reset.css               Base reset styles
public/images/            Project imagery and optimized WebP files
```

## Deployment

The project produces a static `dist` directory and can be deployed to any static hosting provider, including GitHub Pages, Netlify, Vercel, Cloudflare Pages, or a traditional web server.

For deployment, run:

```bash
npm run build
```

Publish the generated `dist` directory. Configure the host to serve `index.html` for the root path and make sure the final site is tested with Lighthouse after deployment.
