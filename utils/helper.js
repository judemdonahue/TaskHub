const Handlebars = require('handlebars');
const moment = require('moment');

function formatDate(date, format) {
    return moment(date).format(format);
}

function addLastCompletedTask(users) {
    users.forEach(user => {
      let lastCompletedTask = null;
  
      user.tasks.forEach(task => {
        if (task.userTask.completed) {
          if (!lastCompletedTask || lastCompletedTask.userTask.completion_time < task.userTask.completion_time) {
            lastCompletedTask = task;
          }
        }
      });
  
      user.lastCompletedTask = lastCompletedTask;
    });
  
    return users;
  };

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