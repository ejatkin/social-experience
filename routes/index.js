var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Social Experience' });
});

router.post('/', function (req, res) {
  console.log(req.body.title);
  res.send("Submission succesful! " + req.body.title);
});

module.exports = router;
