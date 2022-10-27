var express = require('express');
var router = express.Router();
production=false;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'main'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});
/* GET books  page. */
router.get('/book-list', function(req, res, next) {
  res.render('index', { title: 'Books'});
});




module.exports = router;
