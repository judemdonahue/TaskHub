const router = require("express").Router();
const tasks = require("../partials/homepage");
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
