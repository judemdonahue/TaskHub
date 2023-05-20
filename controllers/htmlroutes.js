const router = require("express").Router();
const { User, Task, UserTask } = require('../models');

router.get('/', async (req, res) => {
    const usersData = await User.findAll({
      include: [
        {
          model: Task,
          as: 'tasks',
          through: UserTask,
          attributes: ['task_name', 'points']
        },
      ],
      order: [['total_points', 'DESC']],
      limit: 4
    });
  
    const users = usersData.map((user) => user.get({ plain: true }));
  
    res.render('homepage', { users });
  });

router.get("/", (req, res) => res.render("homepage"));

// router.get("/homepage", (req, res) =>
//   res.render("homepage")
// );

router.get("/user", (req, res) => res.render("user"));

router.get("/login", (req, res) => res.render("login"));

router.get("/leaderboard", (req, res) => res.render("leaderboard"));

module.exports = router;
