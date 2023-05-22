const router = require("express").Router();
const { addLastCompletedTask , sortUserByTime } = require('../utils/helper');
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

    let users = usersData.map((user) => user.get({ plain: true }));

    users = addLastCompletedTask(users);

    sortUserByTime(users)
    // console.dir(users, { depth: null });
    res.render('homepage', { users });
});

router.get("/register", (req, res) => res.render("register" , { hideHeader: true }))

router.get("/user", (req, res) => res.render("user"));

router.get("/login", (req, res) => res.render("login" , { hideHeader: true }));

router.get("/leaderboard", (req, res) => res.render("leaderboard"));

module.exports = router;
