var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://shitosh:shitosh@ds253918.mlab.com:53918/hu_registration', ['registration_forms']);


//Get all registration forms 

router.get('/registration-forms', function(req, res, next){
	db.registration_forms.find(function(err, forms){
		if (err){
			res.send();
		}
		res.json(forms);
	});
});

//Get single registration forms 
router.get('/registration-forms/:id', function(req, res, next){
	db.registration_forms.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, form){
		if (err){
			res.send();
		}
		res.json(form);
	});
});

//Save registration forms 



module.exports = router;

