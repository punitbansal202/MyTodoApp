const express = require('express');
const todos = require('./routes/todos');
const database = require('./db_connection');
const app = express();
app.use(express.json({ extended: false }));
app.use('/todos', todos);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, HEAD, OPTIONS, PATCH, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(8000, () => console.log(`Server started on port 8000`));
