const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    allowNull: false
  }
});
const List = mongoose.model('List', ListSchema);
module.exports = List;
