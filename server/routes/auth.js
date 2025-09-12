const express = require("express");
const router = express.Router();

router.get("/me", (req, res) => {
  if (req.user) {
    return res.json({ user: req.user });
  }
  res.status(401).json({ user: null });
});

router.get("/logout", (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.redirect("/");
    });
  });
});

module.exports = router;
