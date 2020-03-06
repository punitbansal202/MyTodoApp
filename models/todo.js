const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequalize = require('../db_connection.js');
class Todo extends Model {}
Todo.init(
  {
    task: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize,
    timestamps: false
  }
);

module.exports = Todo;
