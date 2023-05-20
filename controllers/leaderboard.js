const router = require("express").Router();
const score = require("../views/leaderboard");

router.get("/", async (req, res) => {
  const scoreData = await score.findAll().catch((err) => {
    res.json(err);
  });
  const scores = scoreData.map((score) => score.get({ plain: true }));
  scores.sort((a, b) => b.highest_points - a.highest_points);
  res.render("leaderboard", { scores });
});

module.exports = router;