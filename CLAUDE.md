# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build
npm run lint         # ESLint via next lint
npm run biome:check  # Biome lint + format check
npx biome format --write .  # Auto-format all files (tabs, single quotes)
```

There are no automated tests in this project.

## Architecture

**Finrex** is a personal finance tracker built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, MUI v7, and TanStack Query v5.

### Route groups

- `src/app/(auth)/login/` — Unauthenticated pages (login/register)
- `src/app/(app)/` — Protected pages with shared `Header` layout: `insights`, `revenue`, `goals`, `profit`, `profile`
- `src/features/` — Feature modules colocated outside the app router, one directory per feature

Authentication is enforced by `src/middleware.ts`, which checks for a `finrex.auth` cookie and redirects unauthenticated users to `/login`.

### Data flow

- All API calls go through `src/api/api.ts`, which wraps a single axios instance pointed at `NEXT_PUBLIC_URL_FINREX_API`.
- The axios interceptor calls `handleError` (from `src/api/services/errorHandler.ts`) on every non-2xx response. `errorHandler.ts` uses a singleton `registerErrorHandler` pattern — the handler must be registered at runtime via `ErrorHandlerInitializer` (a headless component mounted in the app tree that bridges it to `AlertErrorContext`).
- Mutations are defined per-feature in `utils/mutations.ts` files and use TanStack Query's `useMutation`.
- Form validation uses `react-hook-form` + `zod/v4` schemas (see `schemas/` directories). Import zod as `import * as z from 'zod/v4'`.

### Key conventions

- Path constants (page routes and API endpoints) are centralized in `src/libs/paths.ts`.
- `@/*` maps to `src/*` (TypeScript path alias).
- SVG files are imported as React components via `@svgr/webpack` (type declarations in `src/types/svg.d.ts`).
- The global `QueryClient` singleton is at `src/shared/providers/queryClient.ts`; `Providers` wrapper (`ThemeProvider` + `QueryClientProvider` + `ProfilePicProvider`) is at `src/shared/providers/providers.tsx`.
- Token for auth is stored in `localStorage` as `finrex.auth` and also expected as a cookie by the middleware.
- Biome (not Prettier) handles formatting: tabs for indentation, single quotes for JS/TS strings.

### MUI theme

Custom theme lives at `src/libs/theme.ts`. It extends the MUI palette with three extra color slots: `yellow`, `purple`, and `orange`. Use these via `theme.palette.yellow.main` etc. and declare them in `palette` / `paletteOptions` augmentation when needed.

### Contexts

- `src/shared/contexts/ProfilePicContext.tsx` — global profile picture URL, provided at root level.
- `src/features/insights/contexts/AlertErrorContext.tsx` — global error message state; consumed by UI to show error alerts.
- `src/features/insights/contexts/CalendarContext.tsx` — calendar visibility toggle for the insights page.
- `src/features/insights/contexts/GraphContext.tsx` — graph data state for the insights page.
