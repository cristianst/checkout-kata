# 🛒 Checkout Kata – Fullstack App

This is a coding exercise for Haiilo’s Fullstack Engineer position.
The project is structured as a monorepo.

## Structure

-   `/backend`: Koa + TypeScript API
-   `/frontend`: React + TypeScript UI
-   `/shared` Shared content (Like ts types)

## Getting Started

### Install dependencies (from the root):

```sh
npm install
```

### Run backend:

```sh
npm run start:backend
```

Available by default at https://localhost:3000

### Run frontend:

```sh
npm run start:frontend
```

Available by default at https://localhost:5173

### Run tests:

```sh
npm run test:backend
```

```sh
npm run test:frontend
```

## Shared Code

-   Shared types and utilities live in `/shared` and can be imported from both backend and frontend.

## Notes

-   Item prices are hardcoded
-   No database or auth used
-   UI will be minimal and connect to the backend through API
-   No e2e tests
