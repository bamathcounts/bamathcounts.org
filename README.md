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

## Content sources and pending local details

Registration fees, deadlines, eligibility, advancement, rounds and equipment rules were checked on November 22, 2026 against the Foundation's [official rules](https://www.mathcounts.org/programs/official-rules-procedures) and [registration page](https://www.mathcounts.org/register). Handbook access was checked against the [School Handbook page](https://www.mathcounts.org/resources/mathcounts-school-handbook).

Direct chapter listings: [Fremont](https://www.mathcounts.org/node/277387), [Peninsula CA](https://www.mathcounts.org/node/277595), [San Mateo County](https://www.mathcounts.org/node/277639). These are separate competition chapters, not a confirmed city-by-city boundary map. Confirm school assignments with the coordinator before registration; no city or school coverage list has been approved for this site.

Although the national directory contains dates, local dates and roster lockouts remain unpublished here pending organizer confirmation. The national February window and approximate three-hour competition format are not promises of a local date or start-to-finish schedule.

Local contact publication, volunteer signup, age/service-hour/training policies, guest access and a local mailing list are still pending. The direct national listings offer coordinator contacts without reproducing personal information. The national mailing list is explicitly not a local-alert signup. This static website does not collect signup requests.

When updating event details, also update the hero quick facts, competition card, FAQ and visible last-updated date. Recheck time-sensitive fees and deadlines for every season. Keep internal arrows distinct from external new-tab links.
