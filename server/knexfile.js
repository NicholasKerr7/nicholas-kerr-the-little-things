// server/knexfile.js
require("dotenv").config();

const ssl =
  String(process.env.DB_SSL || "").toLowerCase() === "true"
    ? { rejectUnauthorized: true }
    : undefined;

module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ...(ssl ? { ssl } : {}),
  },
  pool: { min: 2, max: 10 },
  migrations: { tableName: "knex_migrations" },
};
