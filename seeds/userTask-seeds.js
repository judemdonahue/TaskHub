const { UserTask } = require('../models');

function getRandomDate() {
    const start = new Date('2023-05-15T00:00:00Z');
    const end = new Date('2023-05-19T23:59:59Z');
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const userTaskData = [
    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 1,
        task_id: 1
    },

    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 1,
        task_id: 2
    },

    {
        completion_time: null,
        completed: false,
        user_id: 1,
        task_id: 3
    },

    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 1,
        task_id: 4
    },

    {
        completion_time: null,
        completed: false,
        user_id: 1,
        task_id: 5
    },
    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 2,
        task_id: 1
    },

    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 2,
        task_id: 2
    },

    {
        completion_time: null,
        completed: false,
        user_id: 2,
        task_id: 3
    },

    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 2,
        task_id: 4
    },

    {
        completion_time: null,
        completed: false,
        user_id: 2,
        task_id: 5
    },
    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 3,
        task_id: 1
    },

    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 3,
        task_id: 2
    },

    {
        completion_time: null,
        completed: false,
        user_id: 3,
        task_id: 3
    },

    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 3,
        task_id: 4
    },

    {
        completion_time: null,
        completed: false,
        user_id: 3,
        task_id: 5
    },
    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 4,
        task_id: 1
    },

    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 4,
        task_id: 2
    },

    {
        completion_time: null,
        completed: false,
        user_id: 4,
        task_id: 3
    },

    {
        completion_time: getRandomDate(),
        completed: true,
        user_id: 4,
        task_id: 4
    },

    {
        completion_time: null,
        completed: false,
        user_id: 4,
        task_id: 5
    },
]

const seedUserTasks = () => UserTask.bulkCreate(userTaskData);

module.exports = seedUserTasks;