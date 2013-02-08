	    var currentVerb = "";
		function tryVerbs(el) {
	    	document.getElementById("dfinTF").value = el.innerHTML;
	    	document.getElementById("verbFormsBtn").click();
		}

    	function getVerbForms() {
    		var dfin = document.getElementById("dfinTF").value;
	    	if (dfin === "" || dfin === null) return alert('Please provide a verb');
	    	var newVerb = new VerbForms(dfin);
	    	currentVerb = newVerb;
	    	writeNewVerbs(newVerb);
	    	document.getElementById("fullListControls").style.display = "block";

    	}
    
    	function showList() {
	    	if (currentVerb === "") return alert('Please provide a verb');
	    	document.getElementById("fullListTA").value  =  "Affirmative:\n\n" + fullPosOutput(currentVerb) + "\n\n" + "Negative:\n\n" + fullNegOutput(currentVerb);
	    	document.getElementById("fullList").style.display = "block";
    	}
    	
    	function writeNewVerbs(verb) {
    		var myVerb = verb;
			document.getElementById("plainPresent").innerHTML=myVerb.vPPres;
			document.getElementById("plainPast").innerHTML=myVerb.vPPast;
			document.getElementById("politePresent").innerHTML=myVerb.vPres;
			document.getElementById("politePast").innerHTML=myVerb.vPast;
			document.getElementById("plainVol").innerHTML=myVerb.vVolPlain;
			document.getElementById("politeVol").innerHTML=myVerb.vVol;
			document.getElementById("te").innerHTML=myVerb.vTe;
			document.getElementById("plainPass").innerHTML=myVerb.vPassive;
			document.getElementById("imperative").innerHTML=myVerb.vImp;
			document.getElementById("desiderative").innerHTML=myVerb.vDesid;
			document.getElementById("causative").innerHTML=myVerb.vCaus;
			document.getElementById("eba").innerHTML=myVerb.vEba;
			document.getElementById("ra").innerHTML=myVerb.vRa;
			document.getElementById("potential").innerHTML=myVerb.vPot;
			document.getElementById("iterative").innerHTML=myVerb.vIter;
			document.getElementById("simultaneous").innerHTML=myVerb.vSim;
			document.getElementById("negPlainPresent").innerHTML=myVerb.vNPPres;
			document.getElementById("negPlainPast").innerHTML=myVerb.vNPPast;
			document.getElementById("negPolitePresent").innerHTML=myVerb.vNPres;
			document.getElementById("negPolitePast").innerHTML=myVerb.vNPast;
			document.getElementById("negTe").innerHTML=myVerb.vNTe;
			document.getElementById("negPlainPass").innerHTML=myVerb.vNPassive;
			document.getElementById("negDesiderative").innerHTML=myVerb.vNDesid;
			document.getElementById("negCausative").innerHTML=myVerb.vNCaus;
			document.getElementById("negEba").innerHTML=myVerb.vNEba;
			document.getElementById("negRa").innerHTML=myVerb.vNRa;
			document.getElementById("negPotential").innerHTML=myVerb.vNPot;
			document.getElementById("negIterative").innerHTML=myVerb.vNIter;		
		}//writeVerbs
		
	 	function fullPosOutput(verbForm) {
	 		var af = verbForm.jsonData.affirmative;
			var posOutput = "Plain Present: " + af.plainPresent + "\nPlan Past: " + af.plainPast + "\nPolite Present: " + af.politePresent + "\nPolite Past: " + af.politePast + "\nVolitional (plain): " + af.plainVolitional + "\nVolitional (polite): " + af.politeVolitional + "\nTe-form/gerund: " + af.teForm + "\nPassive (plain): " + af.passive + "\nImperative: " + af.imperative + "\nDesidearative: " + af.desiderative + "\nCausative: " + af.causative + "\nConditional -eba: " + af.conditionalEba + "\nConditional -ra: " + af.conditionalRa + "\nPotential (plain): " + af.potential + "\nIterative: " + af.iterative + "\nSimultaneous: " + af.simultaneous;
			return posOutput;
		}//fullOutput
		
	 	function fullNegOutput(verbForm) {
	 		var nf = verbForm.jsonData.negative;
			var negOutput = "Plain Present: " + nf.plainPresent + "\nPlan Past: " + nf.plainPast + "\nPolite Present: " + nf.politePresent + "\nPolite Past: " + nf.politePast + "\nTe-form/gerund: " + nf.teForm + "\nPassive (plain): " + nf.passive + "\nDesidearative: " + nf.desiderative + "\nCausative: " + nf.causative + "\nConditional -eba: " + nf.conditionalEba + "\nConditional -ra: " + nf.conditionalRa + "\nPotential (plain): " + nf.potential + "\nIterative: " + nf.iterative;
		return negOutput;
		}//fullOutput

    	function getVerbFormJson() {
	    	if (currentVerb === "") return alert('Please provide a verb');
    		var urlReq = "http://www.gengogaku.org/api/" + currentVerb.vDictForm;
	    	var xhReq = new XMLHttpRequest();
			 xhReq.open("GET", urlReq, false);
			 xhReq.send();
			 var serverResponse = xhReq.responseText;
			 document.getElementById("fullListTA").value  = serverResponse;
	    	document.getElementById("fullList").style.display = "block";
		 }
