const Score = require('./scores');
const User = require('./user');
const Task = require('./Task');
const UserTask = require('./userTask');



User.hasMany(Task, {
    foreignKey: 'task_id',
});

Score.belongsTo(User, {
    foreignKey: 'user_id',
});

Task.belongsToMany(User, {
    through: UserTask,
    foreignKey: 'task_id',
});

User.belongsToMany(Task, {
    through: UserTask,
    foreignKey: 'user_id',
});



module.exports = {
    Score,
    User,
    Task,
    UserTask,

};