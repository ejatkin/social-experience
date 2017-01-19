var express = require('express');
var router = express.Router();

router.get('/', function (request, result, next) {
  result.render('stories/index');
  // result.send('this is the list of all stories');
});

router.get('/new', function(request, result, next){
  result.render('stories/new')
  // result.send('this is a form for new stories');
});

router.get('/:id', function(request, result, next){
  result.render('stories/view', {storyId: request.params.id})
  // result.send('this is a display page for a story with id: ' + request.params.id )
});

router.post('/',function(request, result, next){
  // create story object
  router.redirect('/');
});
module.exports = router;
