const Score = require('./scores');
const User = require('./user');
const Task = require('./Task');
const UserTask = require('./userTask');

User.belongsToMany(Task, {
    through: UserTask,
    foreignKey: 'user_id',
    as: 'tasks'
  });
  
  Task.belongsToMany(User, {
    through: UserTask,
    foreignKey: 'task_id',
    as: 'users'
  });
  
  User.hasMany(UserTask, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  UserTask.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Task.hasMany(UserTask, {
    foreignKey: 'task_id',
    onDelete: 'CASCADE'
  });
  
  UserTask.belongsTo(Task, {
    foreignKey: 'task_id'
  });
  

module.exports = {
    Score,
    User,
    Task,
    UserTask,
};