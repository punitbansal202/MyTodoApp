const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    allowNull: false
  },
  _listId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  status: {
    type: String,
    default: 'Active'
  }
});
const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
