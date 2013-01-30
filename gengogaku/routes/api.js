var verbForms = require('../lib/verbForms');

exports.kj = function(req, res){
	var kp = req.params.name;
	var formsJson = verbForms.getJson(kp);
	res.json(formsJson);
		
};

exports.info = function(req, res) {
		res.json(apiInfo);
}

var apiInfo = {
	"info" : "An api that returns the conjugated forms of a Japanese verb.",
	"site" : "http://www.gengogaku.org",
	"exampleUrl-Miru" : "http://www.gengogaku.org/api/miru",
	"exampleUrl-Miru-Kana" : "http://www.gengogaku.org/api/みる",
	"sampleOutput" : 
	{
		  "affirmative": {
			    "politePresent": "mimasu",
			    "politePast": "mimashita",
			    "teForm": "mite",
			    "passive": "mirareru",
			    "desiderative": "mitai",
			    "causative": "misaseru"
		  },
		  "negative": {
			    "politePresent": "mimasen",
			    "politePast": "mimasen deshita",
			    "teForm": "minakute",
			    "passive": "mirarenai",
			    "desiderative": "mitaku nai",
			    "causative": "misasenai"
		  }
	},	
	"sampleOutputKana" : 
	{
		  "affirmative": {
			    "politePresent": "みます",
			    "politePast": "みました",
			    "teForm": "みて",
			    "passive": "みられる",
			    "desiderative": "みたい",
			    "causative": "みさせる"
		  },
		  "negative": {
			    "politePresent": "みません",
			    "politePast": "みません でした",
			    "teForm": "みなくて",
			    "passive": "みられない",
			    "desiderative": "みたく ない",
			    "causative": "みさせない"
		  }
	}	
}
