var express = require('express');
var router = express.Router();
var app = express();
var db

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://socialexperience:Makers@ds117929.mlab.com:17929/social-experience', (err, database) => {
  // ... start the server

  if (err) return console.log(err)
  db = database

});

router.get('/', function (req, res, next) {
  db.collection('stories').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('stories/index', { title: 'Social Experience' , stories: result, path: req.path });
  });
});

router.get('/new', function(req, res, next){
  res.render('stories/new', { title: 'Social Experience', path: req.path});
  // result.send('this is a form for new stories');
});

router.get('/:id', function(req, res, next){
  var ObjectId = require('mongodb').ObjectId
  db.collection('stories').find({_id: ObjectId(`${req.params.id}`)}).toArray((err, result) => {
    if (err) return console.log(err)
    console.log(result)
    res.render('stories/view', { path: req.path, story: result[0]})

  })
  // result.send('this is a display page for a story with id: ' + request.params.id )
});

router.post('/',function(req, res, next){
  // create story object
  db.collection('stories').save({ country: req.body.country, city: req.body.city, category: req.body.category, perspective: req.body.perspective, title: req.body.title, Experience: req.body.Experience}, (err, result) => {

    if (err) return console.log(err);

    console.log('saved to database');
    console.log(result);
    res.redirect('/');
  });
});
module.exports = router;
