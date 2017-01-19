
process.env.NODE_ENV = 'test';

var app = require('../app.js');
const Browser = require('zombie');
var http = require('http');
const assert = require('assert');
const browser = new Browser();
var server = null;

Browser.localhost('localhost', 3000);

describe('story index page', function() {

before(function() {
   server = http.createServer(app).listen(3000);
});

before(function(done) {
  browser.visit('/', done);

});



 it('there is a website', function(){
   assert.ok(browser.success);
});

  it('there is form with submit button for stories', function(){
   assert.equal(browser.text('#story'), 'Share your story')
   assert.equal(browser.text('#submit'), 'Submit')
});


after(function(done) {
  server.close(done);
});
});


describe('User submits form', function() {

before(function() {
  server = http.createServer(app).listen(3000);
});

before(function(done) {
  browser.visit('/', done);
});

before(function(done) {
  browser.fill('#story', 'Story of my life').pressButton('#submit', done);

});

  it('should be successful', function() {

   browser.assert.success();
  });

  it('should see welcome page', function() {
    browser.assert.text('Story of my life');
  });

after(function(done) {
  server.close(done);
});
});
