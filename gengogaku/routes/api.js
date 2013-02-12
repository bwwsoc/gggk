var verbForms = require('../lib/verbForms');
var adjForms = require('../lib/adjForms');
var kana = require('../lib/kana');
var date = require('../lib/date');

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

exports.infoDate = function(req, res) {
		res.json(apiInfoDate);
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

exports.dj = function(req, res){
	var dp = new Date();
	var formsJson = date.getJson(dp);
	res.json(formsJson);		
};


var apiInfo = {
	"info" : "An api for verbs, adjectives, kana and the current date.",
	"site" : "http://www.gengogaku.org",
	"verb-api-info" : "http://www.gengogaku.org/api/verb",
	"adjective-api-info" : "http://www.gengogaku.org/api/adjective",
	"kana-api-info" : "http://www.gengogaku.org/api/kana",
	"date-api-info" : "http://www.gengogaku.org/api/date",
	"exampleUrl-verb-Miru" : "http://www.gengogaku.org/api/verb/miru",
	"exampleUrl-verb-Miru-Kana" : "http://www.gengogaku.org/api/verb/みる",
	"exampleUrl-adjective-Takai" : "http://www.gengogaku.org/api/adjective/takai",
	"exampleUrl-kana-Mi" : "http://www.gengogaku.org/api/kana/mi",
	"exampleUrl-date-current" : "http://www.gengogaku.org/api/date/current",
	"sampleOutputVerbMiru" : 
	{
		  "affirmative": {
			    "plainPresent": "miru",
			    "plainPast": "mita",
			    "politePresent": "mimasu",
			    "politePast": "mimashita",
			    "plainVolitional": "miyoo",
			    "politeVolitional": "mimashoo",
			    "teForm": "mite",
			    "passive": "mirareru",
			    "desiderative": "mitai",
			    "causative": "misaseru",
			    "conditionalEba": "mireba",
			    "conditionalRa": "mitara",
			    "potential": "mirareru",
			    "iterative": "mitari",
			    "simultaneous": "minagara",
			    "imperative": "miro"
		  },
		  "negative": {
			    "plainPresent": "minai",
			    "plainPast": "minakatta",
			    "politePresent": "mimasen",
			    "politePast": "mimasen deshita",
			    "teForm": "minakute",
			    "passive": "mirarenai",
			    "desiderative": "mitaku nai",
			    "causative": "misasenai",
			    "conditionalEba": "minakereba",
			    "conditionalRa": "minakattara",
			    "potential": "mirarenai",
			    "iterative": "minakattari"
		  }
	},	
	"sampleOutputVerbMiruKana" : 
	{
		  "affirmative": {
			    "plainPresent": "みる",
			    "plainPast": "みた",
			    "politePresent": "みます",
			    "politePast": "みました",
			    "plainVolitional": "みよう",
			    "politeVolitional": "みましょう",
			    "teForm": "みて",
			    "passive": "みられる",
			    "desiderative": "みたい",
			    "causative": "みさせる",
			    "conditionalEba": "みれば",
			    "conditionalRa": "みたら",
			    "potential": "みられる",
			    "iterative": "みたり",
			    "simultaneous": "みながら",
			    "imperative": "みろ"
		  },
		  "negative": {
			    "plainPresent": "みない",
			    "plainPast": "みなかった",
			    "politePresent": "みません",
			    "politePast": "みません でした",
			    "teForm": "みなくて",
			    "passive": "みられない",
			    "desiderative": "みたく ない",
			    "causative": "みさせない",
			    "conditionalEba": "みなければ",
			    "conditionalRa": "みなかったら",
			    "potential": "みられない",
			    "iterative": "みなかったり"
		  }
	}	
	
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
	"sampleOutputVerbMiru" : 
	{
		  "affirmative": {
			    "plainPresent": "miru",
			    "plainPast": "mita",
			    "politePresent": "mimasu",
			    "politePast": "mimashita",
			    "plainVolitional": "miyoo",
			    "politeVolitional": "mimashoo",
			    "teForm": "mite",
			    "passive": "mirareru",
			    "desiderative": "mitai",
			    "causative": "misaseru",
			    "conditionalEba": "mireba",
			    "conditionalRa": "mitara",
			    "potential": "mirareru",
			    "iterative": "mitari",
			    "simultaneous": "minagara",
			    "imperative": "miro"
		  },
		  "negative": {
			    "plainPresent": "minai",
			    "plainPast": "minakatta",
			    "politePresent": "mimasen",
			    "politePast": "mimasen deshita",
			    "teForm": "minakute",
			    "passive": "mirarenai",
			    "desiderative": "mitaku nai",
			    "causative": "misasenai",
			    "conditionalEba": "minakereba",
			    "conditionalRa": "minakattara",
			    "potential": "mirarenai",
			    "iterative": "minakattari"
		  }
	},	
	"sampleOutputVerbMiruKana" : 
	{
		  "affirmative": {
			    "plainPresent": "みる",
			    "plainPast": "みた",
			    "politePresent": "みます",
			    "politePast": "みました",
			    "plainVolitional": "みよう",
			    "politeVolitional": "みましょう",
			    "teForm": "みて",
			    "passive": "みられる",
			    "desiderative": "みたい",
			    "causative": "みさせる",
			    "conditionalEba": "みれば",
			    "conditionalRa": "みたら",
			    "potential": "みられる",
			    "iterative": "みたり",
			    "simultaneous": "みながら",
			    "imperative": "みろ"
		  },
		  "negative": {
			    "plainPresent": "みない",
			    "plainPast": "みなかった",
			    "politePresent": "みません",
			    "politePast": "みません でした",
			    "teForm": "みなくて",
			    "passive": "みられない",
			    "desiderative": "みたく ない",
			    "causative": "みさせない",
			    "conditionalEba": "みなければ",
			    "conditionalRa": "みなかったら",
			    "potential": "みられない",
			    "iterative": "みなかったり"
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

var apiInfoDate = {
	"info" : "An api for current date. Custom dates api in development.",
	"site" : "http://www.gengogaku.org",
	"date-api" : "http://www.gengogaku.org/api/date",
	"exampleUrl-current" : "http://www.gengogaku.org/api/date/current",
}







