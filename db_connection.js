const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'punit',
  password: 'password',
  database: 'todosDB'
});

db.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});

global.db = db;
