# Blackstone Monorepo: Developer Onboarding

This document outlines the standard operating procedures for development within the monorepo.

## Initial Setup

1.  **Clone Repository**: `git clone <repository-url>`
2.  **Install Dependencies**: `npm install`
3.  **Run Workspace Setup**:
    -   For macOS, Linux, or Git Bash: `./setup-dev.sh`
    -   For Windows PowerShell: `.\setup-dev.ps1`

## Standard Development Workflow

1.  **Automated Quality Checks**: On every commit, `eslint` and `prettier` will run automatically on staged files.
2.  **Turbo-Powered Tasks**: All `dev`, `build`, `lint`, `typecheck`, and `storybook` tasks are orchestrated by Turborepo. For maximum speed and correctness, run these commands from the repository root (e.g., `npm run build`, `npm run lint`).
2.  **Start App Development**: Navigate to an application and start the dev server.
    -   `cd apps/site-x && npm run dev`
3.  **Start UI Library Development**: To work on the shared UI library with Storybook:
    -   `cd packages/ui && npm run storybook`

## Deployment

Deployment is handled via the Vercel CLI.

1.  **Install Vercel CLI**: `npm install -g vercel`
2.  **Link Project** (one-time per app): `cd apps/site-x && vercel link`
3.  **Deploy to Production**: `cd apps/site-x && vercel --prod`

## Contributions

-   **Code Quality**: On every commit, Prettier and ESLint run automatically on staged files. If a commit fails, check your terminal for errors, fix them, re-stage the files (`git add .`), and commit again.
-   All UI components should be sourced from the `@blackstone/ui` package.
-   Do not create ad-hoc, one-off components inside applications if they can be generalized.
-   A Pull Request (PR) is required for all merges to the main branch.