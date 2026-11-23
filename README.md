# Bay Area MATHCOUNTS

Plain, static information for the Fremont, Peninsula and San Mateo County chapters.

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

Build with `npm run build`, then serve `dist/` with `npm run preview` or any static HTTP server. The production site works without JavaScript, a database, environment secrets or external fonts.

## Publish an announcement

Ask Devin to publish the text, or edit [`content/announcements.json`](content/announcements.json) on GitHub and propose a change. Add an entry like this:

```json
[
  {
    "date": "2027-01-15",
    "title": "Example announcement — replace before publishing",
    "body": "First paragraph.\n\nSecond paragraph.",
    "links": [
      {
        "label": "Competition details",
        "url": "/2026/peninsula.html"
      }
    ]
  }
]
```

This is an example only; the live announcement list starts empty. Use real publication dates (`YYYY-MM-DD`) and confirmed information. `links` is optional; link to HTTPS destinations or site-relative paths beginning with `/`. Body text is plain text, not HTML or Markdown. Separate paragraphs with `\n\n`.

Announcements are validated and rendered into HTML at build time, newest first. Same-day entries retain their file order. A malformed date, missing title/body or unsafe link fails the build. There is no admin login, scheduled publishing or mailing-list subscription system: saving a future date does not schedule the entry. Once merged to `main`, GitHub Actions rebuilds and publishes the site. In local development, changing the file reloads the page.

## Edit logistics and other information

- `index.html`: current-season dates, registration, logistics, resources and contacts.
- `2026/peninsula.html`: historical Peninsula logistics, February 7, 2026.
- `2026/san-mateo-fremont.html`: historical San Mateo County/Fremont logistics, February 22, 2026.
- `styles.css`: shared responsive and print styles.
- `announcements.js` and `vite.config.js`: content validation, rendering and build configuration.

The archives are adapted from the organizers’ published logistics documents. They are explicitly labeled historical and do not establish 2027 dates, venue, access, lunch or advancement policies. Old visitor tokens, QR codes, host names, volunteer forms and fundraising links are not published. The venue photo is historical reference only.

Do not publish local dates, venue, chapter boundaries, personal contact information, signup forms or operational policies until confirmed. Update the page’s last-updated date when its information changes.

## GitHub Pages

The `Build and deploy website` workflow builds pull requests and deploys `main` to GitHub Pages. One-time repository setup: under [Settings → Pages](https://github.com/bamathcounts/bamathcounts.org/settings/pages), select **GitHub Actions** as the source. The workflow can also be run manually after setup. It requests only the Pages and OIDC permissions needed by the deployment job.

The default project-site URL uses `/bamathcounts.org/`, so CI builds with `PAGES_BASE_PATH=/bamathcounts.org/`. To reproduce that build locally:

```sh
PAGES_BASE_PATH=/bamathcounts.org/ npm run build
```

The default development/preview base is `/`. When connecting the custom domain `bamathcounts.org`, configure its DNS and GitHub Pages custom domain together, then change the workflow’s `PAGES_BASE_PATH` to `/`. No custom domain or CNAME is configured yet, so the initial Pages URL can work before DNS is ready. Hosting does not use Vercel.

## Official sources

- [Registration](https://www.mathcounts.org/register) — 2026–27 fees and deadlines.
- [Official rules and procedures](https://www.mathcounts.org/programs/official-rules-procedures) — eligibility, rounds, equipment and advancement.
- [Competition rules FAQ](https://www.mathcounts.org/programs/competition-rules-faq).
- [California chapter directory](https://www.mathcounts.org/programs/chapter-state-competition-search?state=673).
- Official listings: [Fremont](https://www.mathcounts.org/node/277387), [Peninsula CA](https://www.mathcounts.org/node/277595), [San Mateo County](https://www.mathcounts.org/node/277639).

Registration facts were checked November 22, 2026. Local 2027 dates and venues remain unconfirmed.
