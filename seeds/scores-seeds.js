const { Score } = require('../models');

const scoreData = [
    {
        highest_points: 100,
        time: 20
    },

    {
        highest_points: 80,
        time: 15
    },

    {
        highest_points: 60,
        time: 10
    }
]







const seedScores = () => Score.bulkCreate(scoreData);

module.exports = seedScores;