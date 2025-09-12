# The Little Things

A clean, full‑stack task manager (React + SCSS • Express + MySQL • Google OAuth). Dockerized for painless setup. Vercel + Render + PlanetScale ready.

## Quick start (Docker)
```bash
docker compose up --build
```
- App → http://localhost:5173  
- API → http://localhost:8080  
- Health → http://localhost:8080/health

## Deploy (Vercel + Render + PlanetScale)
- Edit `client/vercel.json` → set your Render API URL.
- Set DB + OAuth envs in Render; run `npx knex migrate:latest && npx knex seed:run` once.

## CI
- Build workflow passes even with warnings (`CI=false` during build).
- Lint runs but is non-blocking.

_Updated 2025-09-12_
