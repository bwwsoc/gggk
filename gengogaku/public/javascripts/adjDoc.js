	function tryAdj(el) {
    	document.getElementById("aDicFormTF").value = el.innerHTML;
    	document.getElementById("buildAdj").click();
	}

	function getAdjectiveForms() {
		var aDicForm = document.getElementById("aDicFormTF").value;
		var adjF = new AdjectiveForms(aDicForm);
		document.getElementById("aPlPresTF").innerHTML = adjF.aPlPres;
		document.getElementById("aPlPresNTF").innerHTML = adjF.aPlPresN;
		document.getElementById("aPlPastTF").innerHTML = adjF.aPlPast;
		document.getElementById("aPlPastNTF").innerHTML = adjF.aPlPastN;
		document.getElementById("aEbaTF").innerHTML = adjF.aEba;
		document.getElementById("aRaTF").innerHTML = adjF.aRa;		
		document.getElementById("aEbaNTF").innerHTML = adjF.aEbaN;
		document.getElementById("aRaNTF").innerHTML = adjF.aRaN;		
		document.getElementById("aAdvTF").innerHTML = adjF.aAdv;
		document.getElementById("aTooTF").innerHTML = adjF.aToo;
	}
