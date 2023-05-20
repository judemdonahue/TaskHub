const router = require("express").Router();
const { User, Task, UserTask } = require('../models');

router.get('/', async (req, res) => {
    const usersData = await User.findAll({
        attributes: ['id', 'username', 'email', 'password', 'total_points'],
        include: [
            {
                model: Task,
                as: 'tasks',
                through: {
                    model: UserTask,
                    attributes: ['id', 'completion_time', 'completed', 'user_id', 'task_id']
                },
                attributes: ['id', 'task_name', 'points']
            }
        ],
        order: [['total_points', 'DESC']],
    });

    const users = usersData.map((user) => user.get({ plain: true }));
    res.render('homepage', { users });
});


router.get("/", (req, res) => res.render("homepage"));

router.get("/register", (req, res) => res.render("register"))

router.get("/user", (req, res) => res.render("user"));

router.get("/login", (req, res) => res.render("login"));

router.get("/leaderboard", (req, res) => res.render("leaderboard"));

module.exports = router;
