const router = require("express").Router();

// Import our modular routers for /tips and /feedback
const htmlRouter = require("./htmlroutes.js");
const tasksRouter = require("./tasks.js");
const leaderboardRouter = require("./leaderboard.js");
const userCreateRouter = require('./userCreate.js');
const loginRouter = require('./login');
const completeTaskRouter = require('./completeTask');


router.use("/", htmlRouter);
router.use("/tasks", tasksRouter);
router.use("/leaderboard", leaderboardRouter);
router.use(userCreateRouter);
router.use(loginRouter);
router.use(completeTaskRouter);


module.exports = router;
