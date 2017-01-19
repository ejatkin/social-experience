var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addStory', function(req, res, next) {
  res.render('addStory', { title: 'Agata' });
});

module.exports = router;
