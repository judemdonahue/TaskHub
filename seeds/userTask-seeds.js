const { userTask } = require('../models');

const userTaskData = [
    {

    }
]






const seedUserTasks = () => userTask.bulkCreate(userTaskData);

module.exports = seedUserTasks;