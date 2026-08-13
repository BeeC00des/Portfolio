# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Bolarinwa Ajayi's personal portfolio site ("BeeC00des") — a Create React App (react-scripts 5) single-page app with an embedded store that checks out via Paystack. No TypeScript, no test suite beyond the CRA default.

## Commands

- `npm start` — dev server at http://localhost:3000
- `npm run build` — production build to `build/`
- `npm test` — CRA/Jest interactive watch mode (only `src/App.test.js` exists, a default smoke test)
- `npm test -- --watchAll=false` — run tests once (CI mode)
- There is no lint script; ESLint runs via CRA's built-in config (`react-app`, `react-app/jest`) during `start`/`build`.

## Environment

- `.env` holds `REACT_APP_PAYSTACK_PUBLIC_KEY`, read in [src/pages/store/store.js](src/pages/store/store.js) via `process.env`. CRA only exposes vars prefixed `REACT_APP_`, and they're baked in at build time.

## Architecture

**Routing**: [src/App.js](src/App.js) defines all routes with `react-router-dom` (`/`, `/store`, `/services`, `Community`, `*` → NotFound). A `Preloader` gates a fade/slide-in transition on first load via `appLoaded`/`animationDone` state — don't remove this without checking the intended entrance animation.

**Path aliases**: `jsconfig.json` sets `baseUrl: src`, so imports like `import Container from 'components/layouts/Container'` (no relative `../../`) resolve from `src/`. Both styles are used interchangeably in the same files — match whichever the surrounding file already uses.

**State**: Redux Toolkit, single slice. [src/redux/store.js](src/redux/store.js) wires `cartReducer`; [src/redux/cartSlice.js](src/redux/cartSlice.js) holds cart `items`/`totalQuantity`/`totalAmount` with `addToCart`/`removeFromCart`/`decreaseQuantity`/`clearCart`. Prices are stored as numbers (naira, not kobo); Paystack conversion to kobo (`* 100`) happens only at checkout time in `store.js`.

**Pages** (`src/pages/`):
- `Home.js` composes the landing page from `src/components/sections/*` (About, skillset (`Skill`), project, story) inside anchor `id`s (`skill-section`, `project-section`, `gallery-section`) used for in-page nav scrolling.
- `store/store.js` — product tabs (Stationary/Swags/Template/Books) built from repeated `StatCard` instances (many are still placeholder/demo data), a slide-in cart drawer, and Paystack checkout via `react-paystack`'s `PaystackButton`.
- `services/services.js` composes `services/_components/*` (Hero, Feature, Idea, Pricing, Faq sections).
- Nested `_components/` folders under a page are page-scoped sub-components, not shared across pages.

**UI primitives**: `src/components/ui/` follows the shadcn/ui convention (see `components.json` — style `default`, baseColor `slate`, aliases `components`/`ui`/`lib`/`hooks`, prefix ""). `src/lib/utils.js` exports the standard shadcn `cn()` helper (`clsx` + `tailwind-merge`). When adding new UI primitives, follow this same shadcn pattern rather than hand-rolling styling utilities.

**Reusable components** (`src/components/`): `Buttons/`, `cards/`, `layouts/` (Header, Nav/NavbarTwo, Footer, Container), `Preloader/`, and `sections/` (landing-page blocks used only by `Home.js`).

**Styling**: Tailwind (content scanned from `src/**/*.{js,jsx,ts,tsx}`), plus some global styles in `App.css`/`index.css`. No custom theme tokens defined in `tailwind.config.js` — colors are mostly hardcoded inline (e.g. brand green `#199C16`, background `#010001`/`#0a0c10`/`#14171c`).

**File extensions**: the codebase is almost entirely `.js` (including files with JSX); a few newer files under `store/_components/` use `.jsx`. Match the existing extension convention for the folder you're editing in.
