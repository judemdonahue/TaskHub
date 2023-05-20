const router = require("express").Router();
const tasks = require("../views/homepage");
const { Task } = require("../models/Task");

router.get("/tasks/:id", async (req, res) => {
  const taskData = await tasks.findAll().catch((err) => {
    where: {
      id: req.params.id;
    }
    res.json(err);
  });
  res.render("homepage", { tasks });
});
// pulls id and attributes from task model

// GET method route for task to completed
router.get("/UserTask/:id", (req, res) => {
  res.render("user-card");
});

// UPDATE a user
router.put("../models/UserTask/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        completed: req.params.completed,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: "No user has completed" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;