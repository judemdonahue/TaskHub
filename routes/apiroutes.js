const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving information
router.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
  );
});




router.post('/api/notes', (req, res) => {
  const json = JSON.parse(fs.readFileSync("db/db.json","utf8"));
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };

  
  json.push(newFeedback);
  fs.writeFileSync("./db/db.json",JSON.stringify(json));
  res.json(json);

  readAndAppend(newFeedback, './db/db.json');

});








module.exports = router;

