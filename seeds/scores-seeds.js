const { Score } = require('../models');

const scoreData = [
    {
         

    }
]







const seedScores = () => Score.bulkCreate(scoreData);

module.exports = seedScores;