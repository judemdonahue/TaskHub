const express = require('express');

// Import our modular routers for /tips and /feedback
const apiRouter = require('./apiroutes.js');
const htmlRouter = require('./htmlroutes.js');

const app = express();

app.use('/api', apiRouter);
app.use('/', htmlRouter);


module.exports = app;