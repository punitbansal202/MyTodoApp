const express = require('express');
const { getHomePage } = require('./routes/home');
const db = require('./db_connection.js');

const app = express();
app.get('/', getHomePage);
app.listen(8000, () => console.log(`Server started on port 8000`));
