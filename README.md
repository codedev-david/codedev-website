# codedev.llc

Personal profile / bio landing page for **David Engelhart** — DevOps &amp; Cloud Engineer, educator, author of *Terraform to Bicep*, and creator of [Termpolis](https://termpolis.com).

Live at **[codedev.llc](https://codedev.llc)**.

## Stack

Plain static site — hand-written HTML/CSS/JS, no build step. Same dark, glassy design
language as [termpolis.com](https://termpolis.com).

| File | Purpose |
| --- | --- |
| `index.html` | The single-page bio / resume |
| `styles.css` | Design tokens + layout |
| `script.js` | Reveal-on-scroll (progressive enhancement) |
| `logo-codedev.svg` | Brand mark / favicon |
| `assets/avatar.png` | Portrait used in the hero and social cards |
| `robots.txt`, `sitemap.xml` | SEO |

## Deploy

Pushing to `main` triggers **`.github/workflows/deploy.yml`**, which mirrors every
tracked web file over FTPS to the `codedev.llc/` document root on the shared host
(the same host as termpolis.com — `codedev.llc` is an addon domain).

Requires three repository secrets (same values as the `termpolis-website` repo):

- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`

You can also run it manually from the **Actions** tab (workflow_dispatch).
