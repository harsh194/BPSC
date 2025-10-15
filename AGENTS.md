# Repository Guidelines

## Project Structure & Modules
- App in `src/`: `components/` (Layout, Navigation, Home, Subjects, MCQ, QuestionPaper, Progress, UI), `context/` (`BPSCContext.jsx`), `services/` (`mcqService.js`, `contentScanner.js`, `progressTracker.js`), `styles/`.
- Study materials under `HISTORY/` (e.g., `HISTORY/MODERN HISTORY/Lecture-1/*.pdf|*.json|*.txt`). Static assets in `public/`.
- Entrypoints: `index.html`, `src/main.jsx`, `src/App.jsx`. Tooling: `vite.config.js`, `tailwind.config.js`.

## Routing & Navigation
- Uses `react-router-dom`.
- Paths: `/` (Home), `/subjects` and `/study-materials` (Subjects), `/mcq-practice` (MCQ), `/question-paper` (Generator), `/progress` (Progress), `/notes` (NotesViewer).
- Add a route in `src/App.jsx` and a nav item in `Sidebar.jsx` (map id → path).

## Build & Dev Commands
- `npm install`: Install dependencies.
- `npm run dev`: Start Vite at `http://localhost:3000/`.
- `npm run build`: Build to `dist/`.
- `npm run preview`: Preview production build.
- `npm run lint`: Run ESLint.

## MCQ Data & Scanning
- `contentScanner.js` simulates scanning `HISTORY/MODERN HISTORY/Lecture-1..11`, surfaces MCQ counts, and emits file paths for JSON.
- `mcqService.js` fetches MCQ JSON via relative URLs; ensure your dev server serves `HISTORY/` (or copy JSON to `public/`).
- To add a lecture: place `MCQ_Questions_LessonX.json` in `Lecture-X/` and (optionally) PDFs (`Daily/Class Notes`). Update `loadMCQData` map if you want topic/count metadata without fetching.

## Coding Style
- 2‑space indent; single quotes; omit semicolons.
- React function components + Hooks. Components `PascalCase`, services `camelCase`.
- ESLint: React + Hooks + `@typescript-eslint` parser; unused vars error (prefix with `_` to ignore args).

## Testing Guidelines
- Prefer Vitest + React Testing Library. Co‑locate as `*.test.jsx` near code. Test services (selection/shuffle, paper generation) and key views (MCQ, QuestionPaper submit flow).

## Commit & PR Guidelines
- Use Conventional Commits (e.g., `feat(routes): add /study-materials path`).
- PRs: clear description, linked issues, screenshots (UI), steps to verify; run `npm run lint` and ensure build succeeds.

## Notes & OCR Tips
- For text‑based PDFs use `pdftotext -layout`; for scanned PDFs use `ocrmypdf` (Tesseract) then `pdftotext`. Avoid committing large PDFs; keep samples minimal.
