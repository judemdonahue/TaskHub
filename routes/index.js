const express = require('express');

// Import our modular routers for /tips and /feedback
const htmlRouter = require('./htmlroutes.js');

const app = express();

app.use('/', htmlRouter);

module.exports = app;