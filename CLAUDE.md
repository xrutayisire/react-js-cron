# react-js-cron

A React cron editor component built with Ant Design (antd). Allows users to build cron expressions via a UI.

## Commands

- **Package manager**: `yarn` (Yarn 4.13.0, Berry)
- **Build**: `yarn build` (tsdown + copies styles.css)
- **Dev**: `yarn dev` (tsdown --watch)
- **Test**: `yarn test` (vitest)
- **Test with coverage**: `yarn test:coverage`
- **Lint**: `yarn lint` (oxlint)
- **Format check**: `yarn format` (lint + oxfmt)
- **Fix lint+format**: `yarn format:fix`
- **Storybook**: `yarn storybook` (port 9009)

## Architecture

- `src/Cron.tsx` — Main Cron component
- `src/components/` — Sub-components (period selector, fields, etc.)
- `src/fields/` — Individual cron field logic
- `src/converter.ts` — Cron string parser/converter
- `src/constants.ts` — Shared constants
- `src/types.ts` — TypeScript types
- `src/utils.ts` — Utility functions
- `src/locale.ts` — Localization
- `src/tests/` — Vitest test files
- `src/stories/` — Storybook stories

## Stack

- React 18/19, Ant Design 6+
- TypeScript 5.9, tsdown for bundling
- Vitest for testing, @testing-library/react
- oxlint for linting, oxfmt for formatting
- Storybook 8 for documentation
