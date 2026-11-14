<div align="center">

# Mohan Paudel — Portfolio

Personal website of a second-year Computer Engineering student at ACEM, Tribhuvan University.
<br />
Full-stack web apps with React and Node, problem solving in C++.

**[paudelmohan.com.np](https://paudelmohan.com.np)** · [Download CV](public/resume.pdf) · [GitHub](https://github.com/paudelmohan27) · [LinkedIn](https://linkedin.com/in/paudelmohan27)

![React](https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-0F172A?style=flat&logo=tailwindcss&logoColor=38BDF8)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

<br />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/preview-dark.jpg" />
  <img src="docs/preview-light.jpg" alt="Portfolio homepage: headline 'Computer engineer & web developer' beside a portrait in a blue arch" width="900" />
</picture>

</div>

---

## Features

- **Light and dark mode** — follows the system setting, remembers the visitor's choice, and avoids a flash of the wrong theme on load.
- **Responsive** — designed for phones up to wide desktops, with a mobile menu.
- **Content in one file** — every piece of text, link and project lives in [`src/data/content.js`](src/data/content.js).
- **Subtle motion** — scroll fade-ins and floating tags, all switched off for visitors who prefer reduced motion.
- **Accessible** — semantic HTML, labelled controls, keyboard skip link and visible focus states.
- **No backend needed** — the contact form sends messages through [Web3Forms](https://web3forms.com), with a spam honeypot and sending/sent/error states.
- **Fast** — about 77 KB of gzipped JavaScript, compressed images, lazy-loaded screenshots.
- **SEO-ready** — the page is prerendered to static HTML at build time, with Open Graph tags, structured data, a sitemap and `robots.txt`.

## Sections

| Section | What it shows |
|---|---|
| Hero | Intro, availability status, CV download and social links |
| About | Short statement and quick facts |
| Toolbox | Languages, web stack and tools |
| Projects | StudyTracker (featured), Boolean Algebra Solver, Digital Diary, CricVerse |
| Journey | Timeline of milestones |
| Contact | Email and a contact form |

## Tech stack

| | |
|---|---|
| Framework | [React 19](https://react.dev) |
| Build tool | [Vite 7](https://vite.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) with CSS-variable theme tokens |
| Fonts | [Geist and Geist Mono](https://fonts.google.com/specimen/Geist) |
| Hosting | [Vercel](https://vercel.com) |

No UI library and no animation library: icons are inline SVG and the animations are plain CSS with `IntersectionObserver`.

## Getting started

Requires [Node.js](https://nodejs.org) 20.19 or newer.

```bash
git clone https://github.com/paudelmohan27/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open http://localhost:5173.

**Contact form:** copy `.env.example` to `.env` and add a free [Web3Forms](https://web3forms.com) access key. Messages go to the email the key was created with. Without a key, the form falls back to opening the visitor's mail app. When deploying, add the same `VITE_WEB3FORMS_ACCESS_KEY` variable in your host's settings.

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production site into `dist/` and prerender the page to HTML |
| `npm run preview` | Serve the production build locally |

## Project structure

```
├── cv/
│   └── cv.html              CV source (exported to public/resume.pdf)
├── docs/                    README screenshots
├── og/
│   └── og-card.html         Source for the link preview image (public/og-image.jpg, 1200×630)
├── public/
│   ├── mohan.webp           Portrait (transparent background)
│   ├── resume.pdf           CV linked from the site
│   └── projects/            Project screenshots
├── scripts/
│   └── prerender.js         Writes the rendered page into dist/index.html after the build
└── src/
    ├── data/content.js      All site content
    ├── components/          Navbar, Hero, About, Skills, Projects, Journey, Contact, Footer
    ├── hooks/useTheme.js    Light/dark toggle
    ├── index.css            Theme tokens and animations
    ├── App.jsx
    ├── main.jsx             Browser entry (hydrates the prerendered HTML)
    └── entry-server.jsx     Build-time entry used for prerendering
```

## Editing content

Open [`src/data/content.js`](src/data/content.js) and change the text, links or projects. The site updates as soon as you save.

- **Add a project** — add an entry to `projects` with a title, description, stack and links.
- **Project screenshots** — put images in `public/projects/` and set the project's `image`, for example `'/projects/studytracker.jpg'`.
- **Photo** — replace `public/mohan.webp` with a portrait that has a transparent background.
- **Colors** — change `--accent` (and any other token) at the top of [`src/index.css`](src/index.css). `:root` is light mode, `.dark` is dark mode.

## Updating the CV

The CV source is [`cv/cv.html`](cv/cv.html), a plain HTML page sized for A4. To export it to `public/resume.pdf`, open it in a browser and choose **Print → Save as PDF** with paper size A4, margins none, and headers and footers turned off. Check that the result is still a single page.

## Deployment

The site is a static Vite build, so it runs on any static host — Vercel, Netlify, Cloudflare Pages or GitHub Pages.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |

**With Vercel:** fork this repository, import your fork at [vercel.com/new](https://vercel.com/new) (Vite is detected automatically), and deploy. To use your own domain, add it under **Project → Settings → Domains** and follow the DNS instructions. Every push to `main` then redeploys automatically.

## Contact

**Mohan Paudel** — [contact.paudelmohan@gmail.com](mailto:contact.paudelmohan@gmail.com)

The code is free to read and learn from. The personal content — photo, CV, project descriptions and copy — belongs to Mohan Paudel; please don't reuse it as-is.
