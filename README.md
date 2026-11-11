# Resume + Portfolio Site (Astro + Tailwind)

## 1. Run it locally

Requires Node.js 18.20+ (20 or newer recommended).

```bash
npm install
npm run dev
```

Open http://localhost:4321

## 2. Make it yours

| What                                                                     | Where                       |
| ------------------------------------------------------------------------ | --------------------------- |
| Name, title, about, experience, education, skills, certifications, links | `src/data/resume.ts`        |
| Portfolio projects (one file per project)                                | `src/content/projects/*.md` |
| Profile photo                                                            | `public/images/profile.jpg` |
| Project screenshots                                                      | `public/images/projects/`   |
| Downloadable CV                                                          | `public/resume.pdf`         |
| Accent color & font                                                      | `src/styles/global.css`     |
| Favicon                                                                  | `public/favicon.io`         |

**Add a project:** copy one of the `.md` files in `src/content/projects/`, rename it
(the file name becomes the URL, e.g. `my-app.md` → `/projects/my-app/`), and edit the
fields at the top. Use `order` to control which shows first.

**Contact form (optional):** sign up at formspree.io, create a form, and paste its ID
into `formspreeId` in `src/data/resume.ts`.

## 3. Folder structure

```
public/                 static files served as-is (images, resume.pdf, favicon)
src/
  components/           Header, Footer, Section, ProjectCard
  content/projects/     your portfolio items (Markdown)
  content.config.ts     defines the fields each project must have
  data/resume.ts        all resume text
  layouts/BaseLayout    page shell (head, header, footer)
  pages/index.astro     the home page
  pages/projects/[slug] one detail page per project
  styles/global.css     Tailwind + theme
```

## 4. Publish (free)

1. Push this folder to a new GitHub repository.
2. On Netlify or Cloudflare Pages, choose "Import from GitHub" and pick the repo.
3. Build command: `npm run build` · Output folder: `dist`
4. Every push to GitHub republishes the site automatically.
5. (Optional) Add your custom domain in the host's settings, then update `site`
   in `astro.config.mjs`.
