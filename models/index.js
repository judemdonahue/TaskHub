const Score = require('./scores');
const User = require('./user');
const Tasks = require('./Task');
const UserTasks = require('./userTask');



User.hasMany(Tasks, {
    foreignKey: '',
});

Score.belongsTo(User, {
    foreignKey: '',
    onDelete: '',
});

Tasks.belongsToMany(User, {
    through: UserTasks,
    foreignKey: '',
});

User.belongsToMany(Tasks, {
    through: UserTasks,
    foreignKey: '',
});



module.exports = {
    Score,
    User,
    Tasks,
    UserTasks,

};