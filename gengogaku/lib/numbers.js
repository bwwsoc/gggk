function getNumbersJson(aNumber) {
	return new AdjectiveForms(aNumber).getJson();
}

exports.getJson = getAdjFormsJson;

function Numbers(aNumber) {
	
	
	var getJson = function getJson() {
		
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
	
	
	
	