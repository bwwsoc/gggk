var verbForms = require('../lib/verbForms');
var adjForms = require('../lib/adjForms');
var kana = require('../lib/kana');

exports.info = function(req, res) {
		res.json(apiInfo);
}

exports.infoVerb = function(req, res) {
		res.json(apiInfoVerb);
}

exports.infoAdj = function(req, res) {
		res.json(apiInfoAdj);
}

exports.infoKana = function(req, res) {
		res.json(apiInfoKana);
}


exports.vf = function(req, res){
	var vp = req.params.name;
	var formsJson = verbForms.getJson(vp);
	res.json(formsJson);
		
};

exports.af = function(req, res){
	var ap = req.params.name;
	var formsJson = adjForms.getJson(ap);
	res.json(formsJson);
		
};

exports.kj = function(req, res){
	var kp = req.params.name;
	var formsJson = kana.getJson(kp);
	res.json(formsJson);
		
};



var apiInfo = {
	"info" : "An api for verbs, adjectives and kana.",
	"site" : "http://www.gengogaku.org",
	"verb-api-info" : "http://www.gengogaku.org/api/verb",
	"adjective-api-info" : "http://www.gengogaku.org/api/adjective",
	"kana-api-info" : "http://www.gengogaku.org/api/kana",
	"exampleUrl-verb-Miru" : "http://www.gengogaku.org/api/verb/miru",
	"exampleUrl-verb-Miru-Kana" : "http://www.gengogaku.org/api/verb/みる",
	"exampleUrl-adjective-Takai" : "http://www.gengogaku.org/api/adjective/takai",
	"exampleUrl-kana-Mi" : "http://www.gengogaku.org/api/kana/mi",
}


var apiInfoAdj = {
	"info" : "An api for adjectives.",
	"site" : "http://www.gengogaku.org",
	"adjective-api" : "http://www.gengogaku.org/api/adjective",
	"exampleUrl-Takai" : "http://www.gengogaku.org/api/adjective/takai",
	"exampleUrl-Atsui" : "http://www.gengogaku.org/api/adjective/atsui",
}


var apiInfoVerb = {
	"info" : "An api that returns the conjugated forms of a Japanese verb.",
	"site" : "http://www.gengogaku.org",
	"exampleUrl-Miru" : "http://www.gengogaku.org/api/verb/miru",
	"exampleUrl-Miru-Kana" : "http://www.gengogaku.org/api/verb/みる",
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

var apiInfoKana = {
	"info" : "An api for kana.",
	"site" : "http://www.gengogaku.org",
	"kana-api" : "http://www.gengogaku.org/api/kana",
	"exampleUrl-Mi" : "http://www.gengogaku.org/api/kana/mi",
	"exampleUrl-Wo" : "http://www.gengogaku.org/api/kana/wo",
}








