const seedUsers = require('./user-seeds');
const seedTasks = require('./task-seeds');
const seedUserTasks = require('./userTask-seeds');
const seedScores = require('./scores-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {

    await sequelize.sync({ force: true });
    console.log('\n--- DATABASE SYNCED ---\n');

    await seedUsers();
    console.log('\n--- USERS SEEDED --- \n');

    await seedTasks();
    console.log('\n--- TASKS SEEDED --- \n');

    await seedUserTasks();
    console.log('\n--- USER TASKS SEEDED --- \n');

    await seedScores();
    console.log('\n--- SCORES SEEDED --- \n');

    process.exit(0);


};

seedAll();