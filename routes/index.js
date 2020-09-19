const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  
  const values = ['Jishnu', 'Kichu', 'Lechu'];

  const person = {
    name: 'Jishnu',
    admin: false
    
  }

  res.render('index', {person});
});

module.exports = router;
