const express = require('express');
const router = express.Router();
const { UserTask, User, Task } = require('../models');
const sequelize = require('../config/connection');

router.post('/task/:id/complete',  async (req, res) => {
    const { id } = req.params; // The task id
    const userId = req.user.id; // The current user's id

    try {
        // Find the user-task relationship entry
        const userTask = await UserTask.findOne({
            where: { 
                user_id: userId, 
                task_id: id 
            },
        });

        // If there's no such entry or it's already completed, send an error response
        if (!userTask || userTask.completed) {
            return res.status(400).json({ error: 'Task not found or already completed' });
        }

        // Update the user-task entry to mark the task as completed
        await userTask.update({
            completed: true,
            completion_time: new Date(), // Mark the completion time as now
        });

        // Find the completed task to get the points associated with it
        const task = await Task.findOne({
            where: { id: id },
        });

        // Update the user's total points by adding the points of the completed task
        await User.update({
            total_points: sequelize.literal(`total_points + ${task.points}`) // Assuming 'points' is the name of the attribute holding the number of points in the Task model
        }, {
            where: { id: userId }
        });

        // Fetch the updated user data, including the new total points
        const updatedUser = await User.findOne({
            where: { id: userId },
            attributes: ['total_points'],
        });

        // Return the new total points in the response
        return res.json({ 
            message: 'Task completed successfully', 
            totalPoints: updatedUser.total_points 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while trying to complete the task' });
    }
});

module.exports = router;
