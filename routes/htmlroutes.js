const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../layouts/main.handlebars"))
);

router.get("/homepage", (req, res) =>
  res.sendFile(path.join(__dirname, "../../views/homepage.handlebars"))
);

router.get("/user", (req, res) =>
  res.sendFile(path.join(__dirname, "../../views/user.handlebars"))
);

router.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "../../views/login.handlebars"))
);
module.exports = router;
