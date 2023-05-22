const Handlebars = require('handlebars');
const moment = require('moment');

function formatDate(date, format) {
    return moment(date).format(format);
}

function addLastCompletedTask(users) {
    users.forEach(user => {
      // Calculate the total number of tasks and the number of completed tasks
      let totalTasks = user.tasks.length;
      let completedTasks = user.tasks.filter(task => task.userTask.completed).length;
  
      // Calculate the completion percentage
      let completionPercentage = (completedTasks / totalTasks) * 100;
  
      // Add to the user object
      user.totalTasks = totalTasks;
      user.completedTasks = completedTasks;
      user.completionPercentage = completionPercentage;
  
      // Find the last completed task
      let lastCompletedTask = user.tasks.filter(task => task.userTask.completed).sort((a, b) => new Date(b.userTask.completion_time) - new Date(a.userTask.completion_time))[0];
  
      // Add to the user object
      if (lastCompletedTask) {
        user.lastCompletedTask = lastCompletedTask;
      }
    });
  
    return users;
  }
  

function sortUserByTime(users) {
    users.sort((a, b) => {
    if (a.lastCompletedTask && b.lastCompletedTask) {
      return new Date(b.lastCompletedTask.userTask.completion_time) - new Date(a.lastCompletedTask.userTask.completion_time);
    } else if (a.lastCompletedTask) {
      return -1;
    } else if (b.lastCompletedTask) {
      return 1;
    }
    return 0;
  })};

module.exports = {
    formatDate,
    addLastCompletedTask,
    sortUserByTime
};