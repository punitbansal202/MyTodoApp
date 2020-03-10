const Sequelize = require('sequelize');

const mysql_uri =
  process.env.MYSQL_URI || 'mysql://punit:password@192.168.0.100/todosdb';
const sequelize = new Sequelize(mysql_uri);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

global.sequelize = sequelize;
