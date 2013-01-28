
function AdjectiveForms(dictForm){
	var aDictForm = (dictForm === "ii") ? "yoi" : dictForm;
	var stem = 	aDictForm.substring(0, aDictForm.length-1);
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
}
