
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("./passport");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET || 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT;

const todoRoutes = require("./routes/todo");

// Health
app.get("/health", (_req, res) => res.status(200).json({ ok: true }));
app.use("/todos", todoRoutes);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} `);
});


// 404
app.use((req, res) => res.status(404).json({ message: 'Not Found' }));
// Error handler
app.use((err, _req, res, _next) => { console.error(err); res.status(err.status||500).json({ message: err.message||'Server error' }); });
