const { UserTask } = require('../models');


const userTaskData = [
    {
        completion_time: 30,
        completed: true,
        user_id: 1,
        task_id: 1
    },

    {
        completion_time: 30,
        completed: true,
        user_id: 2,
        task_id: 2
    },

    {
        completion_time: 30,
        completed: true,
        user_id: 3,
        task_id: 3
    },
]

const seedUserTasks = () => UserTask.bulkCreate(userTaskData);

module.exports = seedUserTasks;