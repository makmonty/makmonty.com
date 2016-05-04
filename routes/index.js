var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'makmonty video games' });
});

// router.get('/games', function(req, res, next) {
//   res.render('games', { title: 'Games - makmonty' });
// });

router.get('/games/box-rain', function(req, res, next) {
  res.render('games/box-rain', { title: 'Box Rain - makmonty' });
});


module.exports = router;
