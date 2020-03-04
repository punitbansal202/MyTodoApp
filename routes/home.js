module.exports = {
  getHomePage: (req, res) => {
    let query = 'SELECT * FROM `mytodos`';

    db.query(query, (err, result) => {
      if (err) {
        res.redirect('/');
      }
      console.log(result);
      process.exit(1);
    });
  }
};
