const { Task } = require('../models');


const taskData = [
    {
        task_name: 'Brush Teeth',
        points: 10
    },

    {
        task_name: 'Make bed',
        points: 15
    },

    {
        task_name: 'Pet dog',
        points: 30
    }
]

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;