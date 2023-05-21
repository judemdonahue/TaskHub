module.exports = {
    getLastCompletionTime: (tasks) => {
        if (tasks.length === 0) {
            return 'No tasks completed';
        }

        // Filter out tasks without UserTask
        tasks = tasks.filter(task => task.UserTask);

        if (tasks.length === 0) {
            return 'No tasks with UserTask';
        }

        // Sort tasks by completion_time in descending order
        tasks.sort((a, b) => new Date(b.UserTask.completion_time) - new Date(a.UserTask.completion_time));

        // Return the completion time of the first task in the sorted array
        return tasks[0].UserTask.completion_time;
    }
};
