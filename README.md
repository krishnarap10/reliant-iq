# ReliantIQ Marketing Site (React + Vite + SASS)

Dark, WEKA-inspired enterprise site for ReliantIQ using official PDF copy, multi-agent architecture flows, and brand tokens.

## Quickstart
```bash
nvm use 20.19   # or node >=20.19
npm install
npm run dev     # local dev server
npm run build   # production build
npm run preview # preview built assets
```

## Tech
- React (Vite)
- SASS/SCSS with design tokens (`src/styles/base/_tokens.scss`)
- Functional components + hooks
- SVG architecture diagrams, neural/glow motifs

## Structure
- `src/components`: Navbar, Hero, AICard, ValuePillars, AgentsOverview, SolutionsGrid, ArchitectureDiagram, ChatBot, Footer
- `src/sections`: Home, About, Platform, Solutions, Architecture, Why, Resources, Contact
- `src/content.js`: All copy sourced from official ReliantIQ PDFs
- `src/styles/base`: tokens, reset, globals

## Notes
- Default dark theme with electric blue/cyan accents and minimal motion
- Chat bot answers common product/site questions from official content
- `dist` and `node_modules` are git-ignored
