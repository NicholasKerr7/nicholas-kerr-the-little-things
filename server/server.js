// Express API entrypoint. Includes healthcheck, auth (Google OAuth via Passport), CORS, and error handling.
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("./passport");

const app = express();
const ORIGIN = process.env.CORS_ORIGIN || "*";
app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET || 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 8080;

// Health check
app.get("/health", (_req, res) => res.status(200).json({ ok: true }));

// Routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => { res.redirect(process.env.CLIENT_BASE_URL || "/"); });
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
const todoRoutes = require("./routes/todo");
app.use("/todos", todoRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || "Server error" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
