const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const knex = require("knex")(require("../knexfile"));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await knex("user").where({ id }).first();
    done(null, user || null);
  } catch (e) {
    done(e);
  }
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
    const existing = await knex("user").where({ oauth_provider: "google", oauth_id: profile.id }).first();
    if (existing) return done(null, existing);
    let user;
    if (email) {
      user = await knex("user").where({ email }).first();
    }
    if (user) {
      await knex("user").where({ id: user.id }).update({ oauth_provider: "google", oauth_id: profile.id });
    } else {
      const [id] = await knex("user").insert({
        name: profile.displayName || "User",
        email,
        oauth_provider: "google",
        oauth_id: profile.id
      });
      user = await knex("user").where({ id }).first();
    }
    done(null, user);
  } catch (e) {
    done(e);
  }
}));

module.exports = passport;
