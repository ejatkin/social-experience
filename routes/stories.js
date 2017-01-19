var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    console.log(result[0])
    res.render('stories/index', { title: 'Social Experience' , quotes: result});
  });

router.get('/new', function(request, result, next){
  result.render('stories/new')
  // result.send('this is a form for new stories');
});

router.get('/:id', function(request, result, next){
  result.render('stories/view', {storyId: request.params.id})
  // result.send('this is a display page for a story with id: ' + request.params.id )
});

router.post('/',function(req, res, next){
  // create story object
  db.collection('quotes').save(req.body, (err, result) => {

    if (err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  });
});
module.exports = router;



app.post('/quotes', (req, res) => {

  db.collection('quotes').save(req.body, (err, result) => {

    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})
