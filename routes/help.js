var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('help', function(req, res) {
  res.send('help');
});

module.exports = router;
