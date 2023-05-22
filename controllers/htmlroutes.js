const router = require("express").Router();
const { addLastCompletedTask , sortUserByTime , ensureAuthenticated} = require('../utils/helper');
const { User, Task, UserTask } = require('../models');

router.get('/', ensureAuthenticated, async (req, res) => {
    
    const taskData = await Task.findAll();

    const tasks = taskData.map(task => task.get({ plain: true }));

    const currentUserData = await User.findOne({
        where: { id: req.user.id },
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
    });
    
    const currentUser = currentUserData.get({ plain: true })

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
    res.render('homepage', { users , tasks , currentUser});
});

router.get("/register", (req, res) => res.render("register" , { hideHeader: true }))

router.get("/user", (req, res) => res.render("user"));

router.get("/login", (req, res) => res.render("login" , { hideHeader: true }));

router.get("/leaderboard", ensureAuthenticated, (req, res) => res.render("leaderboard"));

module.exports = router;
