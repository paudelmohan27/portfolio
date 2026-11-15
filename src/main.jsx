import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// In production the HTML is prerendered, so React attaches to it (hydrates).
// In dev the root only holds the <!--app-html--> placeholder comment, so React renders from scratch.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
