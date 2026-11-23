const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

function requiredText(value, field) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Announcement ${field} must be nonempty text`);
  }
  return value.trim();
}

export function renderAnnouncements(entries, base = "/") {
  if (!Array.isArray(entries))
    throw new Error("Announcements must be an array");
  if (!entries.length)
    return "<p>No local announcements have been published yet.</p>";

  const announcements = entries.map((entry) => {
    if (!entry || typeof entry !== "object")
      throw new Error("Invalid announcement");
    const title = requiredText(entry.title, "title");
    const body = requiredText(entry.body, "body");
    const date = requiredText(entry.date, "date");
    const timestamp = Date.parse(`${date}T00:00:00Z`);
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      !Number.isFinite(timestamp) ||
      new Date(timestamp).toISOString().slice(0, 10) !== date
    ) {
      throw new Error(`Invalid announcement date: ${date}`);
    }
    const links = entry.links ?? [];
    if (!Array.isArray(links))
      throw new Error("Announcement links must be an array");
    const linkHtml = links
      .map((link) => {
        const label = requiredText(link?.label, "link label");
        const url = requiredText(link?.url, "link URL");
        const parsed = new URL(url, "https://bamathcounts.org");
        if (
          !(url.startsWith("https://") || /^\/(?!\/)/.test(url)) ||
          parsed.protocol !== "https:" ||
          parsed.username ||
          parsed.password
        ) {
          throw new Error(
            "Announcement links must use HTTPS or a site-relative path",
          );
        }
        const href = url.startsWith("/") ? `${base}${url.slice(1)}` : url;
        return `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`;
      })
      .join("");
    const paragraphs = body
      .split(/\n\s*\n/)
      .map((paragraph) => `<p>${escapeHtml(paragraph.trim())}</p>`)
      .join("\n");
    return {
      date,
      html: `<article class="announcement">
      <h3>${escapeHtml(title)}</h3>
      <p class="announcement-date"><time datetime="${date}">${dateFormatter.format(timestamp)}</time></p>
      ${paragraphs}
      ${linkHtml ? `<ul>${linkHtml}</ul>` : ""}
    </article>`,
    };
  });
  return announcements
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(({ html }) => html)
    .join("\n");
}
