const express = require('express');
const router = express.Router();
const url = require('url');

// Load Todo model
const Todo = require('../models/todo');

// @route   POST api/todos
// @desc    Create task
router.post('/todos', (req, res) => {
  Todo.create({
    task: req.body.task,
    status: req.body.status
  }).then(todo => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todo));
  });
});

// @route   PUT api/todos?:id
// @desc    Update task
router.put('/todos?:id', (req, res) => {
  Todo.update(
    {
      task: req.body.task,
      status: req.body.status
    },
    {
      where: { id: url.parse(req.url, true).query.id }
    }
  ).then(result => {
    if (result == 0) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('FAILED'));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('SUCCESS'));
    }
  });
});

// @route   DELETE api/todos?:id
// @desc    Remove task
router.delete('/todos?:id', (req, res) => {
  Todo.destroy({
    where: {
      id: url.parse(req.url, true).query.id
    }
  }).then(result => {
    if (result == 0) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('FAILED'));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('SUCCESS'));
    }
  });
});

// @route   GET api/todos
// @desc    Return all task
router.get('/todos', (req, res) => {
  Todo.findAll().then(todos => {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(todos));
  });
});

module.exports = router;
