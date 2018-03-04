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
			res.send(err);
		}
		res.json(form);
	});
});

//Save registration forms 

router.post('/registration-forms', function(req, res, next){
	var form = req.body;
	if (!form.name || !form.studentId || !form.degree || !form.email || !form.advisor || !form.term || !form.crns || !(form.isApproved + '')){
		res.status(400);
		res.json({
			"error": "Bad Data: Please enter all fields"
		});
	} else {
		db.registration_forms.save(form, function(err, form){
			if (err){
				res.send(err);
			}
			res.json(forms);
		});
	}
});

//Delete registration form
router.delete('/registration-forms/:id', function(req, res, next){
	db.registration_forms.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, form){
		if (err){
			res.send(err);
		}
		res.json(form);
	});
});


//update task
router.put('/registration-forms/:id', function(req, res, next){
	var form = req.body;
	var updatedForm = {};

	if(form.isApproved){
		updatedForm.isApproved = form.isApproved;
	}

	if(form.studentId){
		updatedForm.studentId = form.studentId;
	}
	if(form.name){
		updatedForm.name = form.name;
	}

	if(form.degree){
		updatedForm.degree = form.degree;
	}

	if(form.email){
		updatedForm.email = form.email;
	}

	if(form.advisor){
		updatedForm.advisor = form.advisor;
	}

	if(form.term){
		updatedForm.term = form.term;
	}

	if(form.crns){
		updatedForm.crns = form.crns;
	}

	if (!updatedForm){
		res.status("400");
		res.json({
			"error": "Bad Data: Please enter all fields"
		});
	} else {
		db.registration_forms.update({_id: mongojs.ObjectId(req.params.id)}, updatedForm, {}, function(err, form){
		if (err){
			res.send(err);
		}
		res.json(form);
	});
	}

	
});



module.exports = router;

