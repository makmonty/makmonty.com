var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('games', { title: 'makmonty video games' });
});

// router.get('/games', function(req, res, next) {
//   res.render('games', { title: 'Games - makmonty' });
// });


module.exports = router;
