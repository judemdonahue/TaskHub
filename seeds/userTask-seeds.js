const { userTask } = require('../models');



// model: 'task',
// key: 'id'
const userTaskData = [
    {

        



    }
]






const seedUserTasks = () => userTask.bulkCreate(userTaskData);

module.exports = seedUserTasks;