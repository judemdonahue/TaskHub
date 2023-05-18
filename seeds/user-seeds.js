const { User } = require('../models');

const userData = [
    {
        username: 'andrewbie9',
        email: 'andrewb9gmail.com',
        password: 'xxxx',
        total_points: 40
    },

    {
        username: 'kroodkronahue7',
        email: 'kroodkron@hotmail.com',
        password: 'xxxx',
        total_points: 50
    },

    {
        username: 'landwandy8',
        email: 'landy8@gmail.com',
        password: 'xxxx',
        total_points: 60
    },

    {
        username: 'rosa99',
        email: 'rosa99@yahoo.com',
        password: 'xxxx',
        total_points: 70
    },

    







]



const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;