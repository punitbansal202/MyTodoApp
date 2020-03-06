const express = require('express');

const todos = require('./routes/todos');

const app = express();

app.use(express.json({ extended: false }));
app.use('/api', todos);

app.listen(8000, () => console.log(`Server started on port 8000`));
