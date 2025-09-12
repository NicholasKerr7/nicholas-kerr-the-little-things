# The Little Things

A clean, full‑stack task manager focused on simplicity and speed. Built with **React + SCSS** on the front end and **Express + MySQL** on the back end, with **Google OAuth** for sign‑in and a **Docker** workflow for painless setup.

---

## ✨ Features
- 🗒️ **Tasks:** create, edit, complete, and filter by due date  
- 🔐 **Auth:** Google OAuth (Passport) with secure sessions  
- 🧱 **DB:** MySQL + Knex migrations & seeds  
- 🐳 **Dev & Deploy:** single‑command Docker Compose (app + API + DB)  
- 🧰 **DX:** clear envs, healthcheck, CORS, error handling, and structured SCSS

---

## 🧭 Architecture
```
client/   # React (CRA), SCSS, React Router, Axios
server/   # Express API, Passport (Google), Knex, MySQL
```

**Key routes (API):**
- `GET  /health` — service healthcheck  
- `GET  /auth/google` → OAuth dance  
- `GET  /auth/google/callback` → sets session & redirects  
- `GET  /auth/me` — current user (401 if not logged in)  
- `GET  /auth/logout` — destroy session  
- `GET  /todos/:user_id` — list tasks  
- `POST /todos/:user_id` — create task  
- `PUT  /todos/:todo_id` — update task (incl. `complete`)  
- `DELETE /todos/:todo_id` — delete task  
- `GET  /todos/:user_id/due_at` — tasks by due date  
- `GET  /todos/:user_id/complete` — completed tasks

**Tables (simplified):**
- `user(id, name, email, oauth_provider, oauth_id, created_at, updated_at)`  
- `todo(id, user_id, task, category, complete:boolean, due_at:timestamp, created_at, updated_at)`

---

## 🚀 Quick Start (Docker)
> Requires Docker + Docker Compose.

```bash
docker compose up --build
```

- App → http://localhost:5173  
- API → http://localhost:8080  
- Health → http://localhost:8080/health

Migrations & seeds run automatically on the API container’s start.

---

## 🔧 Configuration

### Server (`/server/.env`)
```
PORT=8080
DB_HOST=db
DB_NAME=the_little_things
DB_USER=root
DB_PASSWORD=rootroot
SESSION_SECRET=change-me
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=/auth/google/callback
CLIENT_BASE_URL=/
CORS_ORIGIN=http://localhost:5173
```

### Client (dev) (`/client/.env.development.local`)
```
REACT_APP_API_BASE_URL=http://localhost:8080
```
> In Docker, the client uses Nginx to proxy `/api/*` → server automatically, so no env is needed in production.

---

## 🛠️ Manual (No Docker)
**Database**
1. Create a MySQL database named `the_little_things`.
2. Set `/server/.env` DB variables to your local credentials.
3. Run:
   ```bash
   cd server
   npm ci
   npx knex migrate:latest
   npx knex seed:run
   npm start
   ```

**Client**
```bash
cd client
npm ci
npm start
```
Set `REACT_APP_API_BASE_URL=http://localhost:8080` for local dev.

---

## 🎨 UI & Styling
- SCSS modules with a small design token set (colors, radius, shadows).
- Layout uses a centered `container` (max‑width) and a neutral background for focus.
- Login page features a clean “Continue with Google” CTA.

---

## 🧪 CI (optional)
A minimal GitHub Actions workflow can build the Docker images and produce a production client build artifact on every push.  
(Add `.github/workflows/ci.yml` if you want this; I can include it in a PR.)

---

## 🗺️ Roadmap
- Shared lists & invite links
- Per‑task notes & attachments
- Calendar view & reminders
- Dark mode

---

## 📄 License
MIT (or your preferred license)



## GitHub: push & you're green ✅
This repo includes:
- `.github/workflows/build.yml` — builds client & installs server on every push/PR (no external services).
- `.github/workflows/deploy.yml` — OPTIONAL deploy. It **auto-skips** unless you add secrets:
  - `RENDER_DEPLOY_HOOK_URL` (Render → Service → Deploy Hooks)
  - `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` (Vercel CLI tokens)
