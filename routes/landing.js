var express = require('express');
var about = express.Router();

/* Landing Page Verion */

router.get('/landing', function(req,res) {
	res.send('landing');
});

module.exports = router;
