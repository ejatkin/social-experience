var express = require('express');
var router = express.Router();

router.get('/', function (request, result, next) {
  // result.render('story/index');
  result.send('this is the list of all stories');
});

router.get('/new', function(request, result, next){
  // result.render('story/new')
  result.send('this is a form for new stories');
});

router.get('/:id', function(request, result, next){
  // result.render('story/view')
  result.send('this is a display page for a story with id: ' + request.params.id )
});

router.post('/',function(request, result, next){
  // create story object

});
module.exports = router;
