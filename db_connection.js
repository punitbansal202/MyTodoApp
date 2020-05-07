const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/todosDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

global.mongoose = mongoose;
