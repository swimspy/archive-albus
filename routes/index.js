var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { message: 'We Love Swimspy', version: 'Albus', author: 'Mr.Benson' });
});

router.get('/landing', function(req, res) {
  res.render('landing', { title: 'Swimspy Landing Page', version: 'Albus Version', author: "Mr. Benson" });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
  console.log('about page is loaded');
});

router.get('/create-name-tag', function(req, res) {
  res.render('create-name-tag', { title: 'Create Your Name Tag' });
});

router.get('/user', function(req, res) {
  res.render('user', { title: 'User' });
});

router.get('/confirm-details', function(req, res) {
  res.render('confirm-details', { title: 'Confirm Details' });
});

router.get('/send-invitations', function(req, res) {
  res.render('send-invitations', { title: 'Send Invitations To Your Friends' });
});

router.get('/welcome-explore', function(req, res) {
  res.render('welcome-explore', { title: 'Welcome and Explore Swimspy' });
});

module.exports = router;
