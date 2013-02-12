function getAdjFormsJson(dictForm) {
	return new AdjectiveForms(dictForm).getJson();
}

exports.getJson = getAdjFormsJson;


function AdjectiveForms(dictForm){
	var aDictForm = (dictForm === "ii") ? "yoi" : dictForm;
	var stem = 	aDictForm.substring(0, aDictForm.length-1);
	var unknownError = false;
	if ((dictForm.length < 1) || (dictForm.charAt(dictForm.length-1).toLowerCase() !== "i")){
		unknownError = true;
	}
	this.aPlPres = aDictForm;
	this.aPlPresN = stem + "kunai";
	this.aPlPast = stem + "katta";
	this.aPlPastN = stem + "kunakatta";
	this.aEba = stem + "kereba";
	this.aRa = stem + "kattara";
	this.aEbaN = stem + "kunakereba";
	this.aRaN = stem + "kunakattara";
	this.aAdv = stem + "ku";
	this.aToo = stem + "sugiru";
	function getErrorJson() {
		errorData = {
			"error" : "unknown adjective"
		}
		return errorData;
	}
	var jsonData =  buildJson(this);
	
	this.getJson = function getJson() {
		if (unknownError === true) {
			return getErrorJson();
		}
		return jsonData;
	}
	
}



function buildJson(adjForm) {
	var data={
		"affirmative":
	        {
	            "plainPresent" : adjForm.aPlPres,
	            "plainPast" : adjForm.aPlPast,
	            "conditionalEba" : adjForm.aEba,
	            "conditionalRa" : adjForm.aRa,
	            "sugiruToo" : adjForm.aToo,
	            "adverb" : adjForm.aAdv,
	        }
	,
		"negative":
	        {
	            "plainPresent" : adjForm.aPlPresN,
	            "plainPast" : adjForm.aPlPastN,
	            "conditionalEba" : adjForm.aEbaN,
	            "conditionalRa" : adjForm.aRaN,
	        }	
	}
	return data;
}
	
	
	
	