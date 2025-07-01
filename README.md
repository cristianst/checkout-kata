# 🛒 Checkout Kata – Fullstack App

This is a coding exercise for Haiilo’s Fullstack Engineer position.
The project is structured as a monorepo.

## Structure

- `/backend`: Koa + TypeScript API
- `/frontend`: React + TypeScript UI
- `/shared`: Shared TypeScript types and utilities

## Getting Started

### Install dependencies (from the root):
```sh
npm install
```

### Run backend:
```sh
npm run dev --workspace=backend
```

### Run frontend:
```sh
npm run dev --workspace=frontend
```


### Run tests (backend only):
```sh
npm run test --workspace=backend
```

## Shared Code
- Shared types and utilities live in `/shared` and can be imported from both backend and frontend.

## Notes
- Prices are hardcoded
- No database or auth used
- UI will be minimal and connect to the backend via REST
