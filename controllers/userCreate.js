const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Task = require('../models/Task');

// POST route for user registration
router.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;  // Destructure the incoming request body

      // Create a new user with the provided username, email, and password
      const newUser = await User.create({ username, email, password });

      // Find the tasks that you want to assign to the new user
      const tasks = await Task.findAll({ where: { task_name: ['Brush Teeth', 'Make bed', '30 minute exercise', 'Quick home cleaning', 'Eat'] } });

      // Assign tasks to the new user
      await newUser.addTasks(tasks);

      console.log('User created successfully:', newUser);  // Log the new user
  
      // If successful, return the new user's data
      res.status(200).json({
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        total_points: newUser.total_points,
      });
    } catch (error) {
      console.error('Error creating user:', error);  // Log the error
  
      // If there's an error, respond with the error message and a 500 status code
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;
