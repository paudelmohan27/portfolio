// Runs after `vite build`: renders the React app to HTML and puts it inside
// dist/index.html, so search engines and link-preview bots see the full page
// without running JavaScript.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const serverEntry = resolve(root, 'dist-server/entry-server.js')
const indexPath = resolve(root, 'dist/index.html')

const { render } = await import(pathToFileURL(serverEntry).href)
const appHtml = render()

const template = readFileSync(indexPath, 'utf8')
if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> placeholder')
}
writeFileSync(indexPath, template.replace('<!--app-html-->', appHtml))
rmSync(resolve(root, 'dist-server'), { recursive: true, force: true })

console.log(`Prerendered dist/index.html (${(appHtml.length / 1024).toFixed(1)} KB of HTML)`)
