var express = require('express');
var router = express.Router();
var db

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://socialexperience:Makers@ds117929.mlab.com:17929/social-experience', (err, database) => {
  // ... start the server

  if (err) return console.log(err)
  db = database

});

/* GET home page. */
router.get('/', function (req, res, next) {
  db.collection('stories').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('stories/index', { title: 'Social Experience' , stories: result, path: req.path });
  });
});

module.exports = router;
