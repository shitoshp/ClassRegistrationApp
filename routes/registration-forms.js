var express = require('express');
var router = express.Router();

router.get('/registration-forms', function(req, res, next){
	res.send('REGISTRATION API');
});

module.exports = router;