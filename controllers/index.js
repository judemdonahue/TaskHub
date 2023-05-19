const router = require("express").Router();

// Import our modular routers for /tips and /feedback
const htmlRouter = require("./htmlroutes.js");
const tasksRouter = require("./tasks.js");
const leaderboardRouter = require("./leaderboard.js");

router.use("/", htmlRouter);
router.use("/tasks", tasksRouter);
router.use("/leaderboard", leaderboardRouter);

module.exports = router;
