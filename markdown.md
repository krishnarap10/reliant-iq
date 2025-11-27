# ReliantIQ Site Change Log

Purpose: quick reference of meaningful changes made in this repo. Update this file whenever you add notable work (features, fixes, infra).

## 2025-02-15
- Initialized Vite React app with SASS, added brand token ingestion (`src/styles/base/_tokens.scss`) and global styles/reset.
- Implemented all site sections and components using official ReliantIQ content (Hero with AI RCA card, Platform, Solutions, Architecture SVG, Why, Resources, Contact, Navbar/Footer).
- Added grounded chatbot for product/site Q&A (`src/components/ChatBot`).
- Removed unused default Vite styles; refreshed README with project-specific instructions.
- Tagged current stable state as `v0.1.0` for rollback safety.
