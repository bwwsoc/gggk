var verbForms = require('../lib/verbForms');

exports.kj = function(req, res){
	var kp = req.params.name;
	var formsJson = verbForms.getJson(kp);
	res.json(formsJson);
		
	};
