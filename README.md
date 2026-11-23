# bamathcounts.org

Website for the Fremont, Peninsula and San Mateo County MATHCOUNTS chapters, built with [Zola](https://www.getzola.org/) 0.23.6 and deployed to GitHub Pages by `.github/workflows/build.yml` on every push to `main`.

## Run locally

```sh
zola serve
```

## Publish an announcement

Add a Markdown file to `content/announcements/` and merge it to `main`:

```markdown
+++
title = "Announcement title"
date = 2027-01-15
+++

Body text in Markdown.
```

The home page lists announcements newest first by date and title; each one gets its own page. Add `draft = true` to keep one unpublished.

## Other content

- `content/_index.md`: the short introduction at the top of the home page.
- `content/fremont-peninsula.md`, `content/san-mateo.md`: the logistics pages.
- `templates/`, `static/style.css`: layout and styles.
