const express = require('express');
const cors = require('cors');
const todos = require('./routes/todos');
const port = process.env.PORT || 8000;
const app = express();
// ... other imports
const path = require('path');

// ... other app.use middleware
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(cors());
app.use(express.json({ extended: false }));
app.use('/api', todos);

// Right before your app.listen(), add this:
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server started on port 8000`));
