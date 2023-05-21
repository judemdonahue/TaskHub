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
        task_name: '30 minute exercise',
        points: 20
    },

    {
        task_name: 'Quick home cleaning',
        points: 15
    },

    {
        task_name: 'Eat',
        points: 5
    }

]

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;