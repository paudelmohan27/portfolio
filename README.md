# Mohan Paudel — Portfolio

React + Vite + Tailwind CSS v4. Light and dark mode, responsive, no backend.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Edit your content

All text, links and projects live in **`src/data/content.js`**. Anything in `[BRACKETS]` is a placeholder.

- **Photo:** `public/mohan.webp` (transparent background). To change it, replace the file or point `photo` at a new one.
- **CV:** the source is `cv/cv.html`. After editing it, regenerate the PDF the site links to:

  ```bash
  "/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --no-pdf-header-footer --virtual-time-budget=8000 --print-to-pdf="D:/Mohan Portfolio/public/resume.pdf" "file:///D:/Mohan%20Portfolio/cv/cv.html"
  ```

  Or open `cv/cv.html` in a browser and Print → Save as PDF (A4, no headers/footers).
- **Project screenshots:** add images to `public/projects/` and set each project's `image`.
- **Email:** set `email` — this also turns on the contact form (it opens the visitor's mail app).

## Theme

Colors are CSS variables at the top of `src/index.css` (`:root` for light, `.dark` for dark). Change `--accent` to recolor the whole site.

## Structure

```
src/
  data/content.js      all site content
  components/          Navbar, Hero, About, Skills, Projects, Journey, Contact, Footer
  hooks/useTheme.js    light/dark toggle (saved per visitor)
  index.css            theme tokens + animations
```

## Deploy

Push to GitHub, import the repo on Vercel (framework: Vite), then add `paudelmohan.com.np` under Project → Domains.
