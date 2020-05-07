const express = require('express');
const router = express.Router();

// Load Task model
const Task = require('../models/task');
const List = require('../models/list');

// @route   POST api/Tasks
// @desc    Create task
router.post('/lists/:listId/tasks', (req, res) => {
  new Task({ _listId: req.params.listId, title: req.body.title })
    .save()
    .then(task => res.send(task))
    .catch(error => console.log(error));
});

// @route   PUT api/Tasks?:id
// @desc    Update task
router.put('/lists/:listId/tasks/:taskId', (req, res) => {
  Task.findOneAndUpdate(
    { _listId: req.params.listId, _id: req.params.taskId },
    { $set: req.body }
  )
    .then(task => res.send(task))
    .catch(error => console.log(error));
});

// @route   DELETE api/Tasks?:id
// @desc    Remove task
router.delete('/lists/:listId/tasks/:taskId', (req, res) => {
  Task.findByIdAndDelete({
    _listId: req.params.listId,
    _id: req.params.taskId
  })
    .then(task => res.send(task))
    .catch(error => console.log(error));
});

// @route   GET api/Tasks
// @desc    Return all task
router.get('/lists/:listId/tasks', (req, res) => {
  Task.find({ _listId: req.params.listId })
    .then(tasks => res.send(tasks))
    .catch(error => console.log(error));
});
router.get('/lists/:listId/tasks/:taskId', (req, res) => {
  Task.findOne({ _listId: req.params.listId, _id: req.params.taskId })
    .then(task => res.send(task))
    .catch(error => console.log(error));
});
router.get('/lists', (req, res) => {
  List.find({})
    .then(lists => res.send(lists))
    .catch(error => console.log(error));
});

router.get('/lists/:listId', (req, res) => {
  List.find({ _id: req.params.listId })
    .then(lists => res.send(lists))
    .catch(error => console.log(error));
});

router.post('/lists', (req, res) => {
  new List({ title: req.body.title })
    .save()
    .then(list => res.send(list))
    .catch(error => console.log(error));
});

router.put('/lists/:listId', (req, res) => {
  List.findOneAndUpdate({ _id: req.params.listId }, { $set: req.body })
    .then(list => res.send(list))
    .catch(error => console.log(error));
});

router.delete('/lists/:listId', (req, res) => {
  const deleteTasks = list => {
    Task.deleteMany({ _listId: list._id })
      .then(() => list)
      .catch(error => console.log(error));
  };

  const list = List.findByIdAndDelete(req.params.listId)
    .then(list => {
      if (list == null) {
        console.log('list already deleted.');
      } else {
        deleteTasks(list);
      }
    })
    .catch(error => console.log(error));
  res.status(200).send(list);
});

module.exports = router;
