const router = require("express").Router();

router.get("/", (req, res) => res.render("homepage"));

// router.get("/homepage", (req, res) =>
//   res.render("homepage")
// );

router.get("/user", (req, res) => res.render("user"));

router.get("/login", (req, res) => res.render("login"));

module.exports = router;
