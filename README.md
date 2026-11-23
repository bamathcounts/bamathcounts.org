# Bay Area MATHCOUNTS

A small [Zola](https://www.getzola.org/) site for the Fremont, Peninsula and San Mateo County chapters. No Node.js, database or client-side JavaScript is needed.

## Run locally

Install **Zola 0.23.6** using the [official installation instructions](https://www.getzola.org/documentation/getting-started/installation/), then run:

```sh
zola serve --interface 0.0.0.0
```

Build static HTML into `dist/`:

```sh
zola build
```

Zola generates links for the build’s base URL. To test a production build on a local server:

```sh
zola build --base-url http://localhost:4177
python -m http.server 4177 --bind 0.0.0.0 --directory dist
```

## Edit the site

- `content/announcements/`: competition dates and other dated updates, linked automatically from the homepage.
- `content/_index.md`: the homepage introduction.
- `content/registration.md` and `content/contact.md`: the other information pages.
- `templates/`: shared header, navigation and page layouts.
- `static/styles.css`: typography and responsive styles.

Competition dates and the Verkada HQ venue are published as an announcement, not as separate homepage event data. Schedules, arrival details, public local contact details and volunteer signup remain unconfirmed. Do not reuse last year’s event details. The 2026 logistics archives and photo are no longer published.

The four navigation tabs are ordinary page links, with the current page marked for screen readers. Content and navigation work without JavaScript. Inter is self-hosted under `static/fonts/`; its license is included there.

## Publish an announcement

Ask Devin to publish it, or add a Markdown file under `content/announcements/` through GitHub. For example, create `content/announcements/registration-reminder.md` with:

```markdown
+++
title = "Replace with the real announcement title"
date = 2026-12-01
+++

Write the announcement here. Markdown headings, lists and links are supported.
```

Use a real publication date and confirmed content. The example above is not a published announcement. Merge the change to `main` to publish it. Zola lists announcements newest first and creates a permalink and Atom feed. Dates do not schedule publication; to keep an unfinished post off the site, add `draft = true` in its front matter.

## GitHub Pages

The `Build and deploy website` workflow builds pull requests and deploys `main`. It downloads the pinned official Zola release and verifies its SHA-256 checksum before building.

One-time repository setup: select **GitHub Actions** under [Settings → Pages](https://github.com/bamathcounts/bamathcounts.org/settings/pages). The workflow can also be run manually after setup.

The workflow obtains the Pages base URL before building, so generated links work at the default project URL or a configured custom domain. Pull requests build for `https://bamathcounts.github.io/bamathcounts.org/`. After changing the Pages custom domain, rerun the full workflow so Zola rebuilds its links. Do not set the custom domain until its DNS is ready. Hosting does not use Vercel.

The managing Devin App is built separately with its own preview URL as `--base-url`; it is not public hosting.

## Sources

- Dates: Oliver’s confirmed 2027 chapter dates.
- [Foundation registration](https://www.mathcounts.org/register) and [official rules](https://www.mathcounts.org/programs/official-rules-procedures).
- Chapter listings: [San Mateo County](https://www.mathcounts.org/node/277639), [Fremont](https://www.mathcounts.org/node/277387), [Peninsula](https://www.mathcounts.org/node/277595).

Registration facts were checked November 22, 2026.
