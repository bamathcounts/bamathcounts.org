# Bay Area MATHCOUNTS

The local chapter website for Fremont, Peninsula, and San Mateo County. A responsive static site built with semantic HTML, CSS, and a small JavaScript navigation enhancement; Vite handles local development and production assets.

## Develop

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The production output is `dist/`. Vercel configuration is included; import this repository, use the Vite framework preset, and deploy. No environment variables, database, or paid services are required.

## Updating content

- Chapter, event, resource, and FAQ content is in `index.html`.
- Design tokens and responsive layouts are in `styles.css`.
- Mobile menu behavior is in `script.js`; FAQs and the warm-up answer use native HTML disclosures.
- The favicon is in `public/favicon.svg`.

**2027 dates and venues are not yet confirmed.** Update both the competition section and FAQ when they are announced. Do not reuse a prior year's venue or schedule. Registration links go to the MATHCOUNTS Foundation; this site does not collect registrations or personal information.

The four competition-round descriptions and participation information are based on the [MATHCOUNTS Competition Series](https://www.mathcounts.org/programs/mathcounts-competition-series). Chapter assignments and eligibility should always be checked with the Foundation's current official rules and local program directory.
