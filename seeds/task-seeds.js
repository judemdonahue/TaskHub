const { Task } = require('../models');


const taskData = [
    {

    }
]







const seedTasks = () => Task.bulkcreate(taskData);


module.exports = seedTasks;