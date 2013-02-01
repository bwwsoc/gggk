	function VerbForms(dictForm, vKind) {
		this.vDictForm = dictForm;
		this.jsonData;
		var charType = dictForm.charCodeAt(0) > 1000 ? "h" : "r";
		if (vKind > 0) { // passed in for ambig
			this.verbKind = vKind;
		}
		else {
			this.verbKind = charType === "h" ? setVbKindH(this.vDictForm) : setVbKind(this.vDictForm);			
		}
		qp("verbK: " + this.verbKind);
		// if romaji
		if (charType === "r") {
			switch (this.verbKind) {	
				case 0: buildVbKuru(this); break;	
				case 1: buildVbSuru(this); break;	
				case 2: buildVbIchidan(this); break;	
				case 3: buildVbYodan(this); break;	
				default: qp("unknown verb");	
			}				
		}
		else if (charType === "h") {
			switch (this.verbKind) {	
				case 0: buildVbKuruH(this); break;	
				case 1: buildVbSuruH(this); break;	
				case 2: buildVbIchidanH(this); break;	
				case 3: buildVbYodanH(this); break;	
				default: qp("unknown verb h");	
			}				
		}
		this.jsonData =  buildJson(this);
		getPPres = function() {
			return this.vPPres;
		}
	}	

	function setVbKind(vDicForm) {

		var verbKind = -1;
		switch (vDicForm) {
			case "kuru": verbKind = 0;break;
			case "suru": verbKind = 1;break;
			case "chiru":
			case "hairu":
			case "hashiru":
			case "kagiru":
			case "keru":
			case "mairu":
			case "nigiru":
			case "heru":
			case "shiru":verbKind = 3; break;
			default: verbKind = useVbEnding(vDicForm);
		}
		return verbKind;
	}

	function useVbEnding(vDicForm) {
		qp("useVbEnding: " + vDicForm);
		var verbKind = -1;
		if (vDicForm.charAt(vDicForm.length-1).toLowerCase() !== "u") {
			return verbKind;
		}
		if (vDicForm.lastIndexOf("iru") !== -1 || vDicForm.lastIndexOf("eru") !== -1) {
			verbKind = 2;
		}

		else {

			verbKind = 3;
		}
		qp("useVbEnding-verbKind: " + verbKind);
		return verbKind;
	}//useEnding
	
	function buildVbIchidan(verbForm) {
		qp("buildVbIchidan-I: " + verbForm.vDictForm);

		var vDicForm = verbForm.vDictForm;
		var endInd = vDicForm.length - 2;
		var bv8 = vDicForm.length - 1;
		var vDicStem = vDicForm.substring(0, endInd);
		qp("vDicForm-I: " + vDicForm);

		verbForm.baseV1 = vDicStem;
		verbForm.baseV2 = vDicStem;
		verbForm.baseV3 = vDicStem + "ru";
		verbForm.baseV4 = vDicStem + "re";
		verbForm.baseV5 = vDicStem + "yoo";
		verbForm.baseV6 = vDicStem + "te";
		verbForm.baseV7 = vDicStem + "ta";
		verbForm.baseV8 = vDicForm.substring(0, bv8);

		buildVerbForm(verbForm);	

	}//buildBaseIchidan

	
	function buildVbYodan(verbForm) {
		var vDicForm = verbForm.vDictForm;	
		var vDicFormLen = vDicForm.length;
		var vDicStem;
		var endInd;
		var yodanKind;	
		var bv8 = vDicForm.length - 1;
		var baseV1;
		var baseV2;
		var baseV3;
		var baseV4;
		var baseV5;
		var baseV6;
		var baseV7;
		var baseV8 = vDicForm.substring(0, bv8);

		if (vDicForm.lastIndexOf("au") !== -1 || vDicForm.lastIndexOf("iu") !== -1 || vDicForm.lastIndexOf("ou") !== -1) {
			yodanKind = 0;
			endInd = vDicFormLen - 1;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "wa";
			baseV2 = vDicStem + "i";
			baseV3 = vDicStem + "u";
			baseV4 = vDicStem + "e";
			baseV5 = vDicStem + "oo";
			baseV6 = vDicStem + "tte";
			baseV7 = vDicStem + "tta";
		}//U verb

		else if (vDicForm.lastIndexOf("tsu") !== -1) {
			yodanKind = 1;
			endInd = vDicFormLen - 3;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "ta";
			baseV2 = vDicStem + "chi";
			baseV3 = vDicStem + "tsu";
			baseV4 = vDicStem + "te";
			baseV5 = vDicStem + "too";
			baseV6 = vDicStem + "tte";
			baseV7 = vDicStem + "tta";
		}//tsu

		else if (vDicForm.lastIndexOf("ru") !== -1) {
			yodanKind = 2;
			endInd = vDicFormLen - 2;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "ra";
			baseV2 = vDicStem + "ri";
			baseV3 = vDicStem + "ru";
			baseV4 = vDicStem + "re";
			baseV5 = vDicStem + "roo";
			baseV6 = vDicStem + "tte";
			baseV7 = vDicStem + "tta";
		}//ru

		else if (vDicForm.lastIndexOf("ku") !== -1) {
			yodanKind = 3;
			endInd = vDicFormLen - 2;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "ka";
			baseV2 = vDicStem + "ki";
			baseV3 = vDicStem + "ku";
			baseV4 = vDicStem + "ke";
			baseV5 = vDicStem + "koo";

			if (vDicForm.lastIndexOf("iku") !== -1) {
				baseV6 = vDicStem + "tte";
				baseV7 = vDicStem + "tta";
			}//iku
			else {
				baseV6 = vDicStem + "ite";
				baseV7 = vDicStem + "ita";				
			}//else
		}//ku
		else if (vDicForm.lastIndexOf("gu") !== -1) {
			yodanKind = 4;
			endInd = vDicFormLen - 2;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "ga";
			baseV2 = vDicStem + "gi";
			baseV3 = vDicStem + "gu";
			baseV4 = vDicStem + "ge";
			baseV5 = vDicStem + "goo";
			baseV6 = vDicStem + "ide";
			baseV7 = vDicStem + "ida";
		}//gu

		else if (vDicForm.lastIndexOf("su") !== -1) {
			yodanKind = 5;
			endInd = vDicFormLen - 2;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "sa";
			baseV2 = vDicStem + "shi";
			baseV3 = vDicStem + "su";
			baseV4 = vDicStem + "se";
			baseV5 = vDicStem + "soo";
			baseV6 = vDicStem + "shite";
			baseV7 = vDicStem + "shita";
		}//su

		else if (vDicForm.lastIndexOf("nu") !== -1) {
			yodanKind = 6;
			endInd = vDicFormLen - 2;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "na";
			baseV2 = vDicStem + "ni";
			baseV3 = vDicStem + "nu";
			baseV4 = vDicStem + "ne";
			baseV5 = vDicStem + "noo";
			baseV6 = vDicStem + "nde";
			baseV7 = vDicStem + "nda";
		}//nu

		else if (vDicForm.lastIndexOf("mu") !== -1) {
			yodanKind = 7;
			endInd = vDicFormLen - 2;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "ma";
			baseV2 = vDicStem + "mi";
			baseV3 = vDicStem + "mu";
			baseV4 = vDicStem + "me";
			baseV5 = vDicStem + "moo";
			baseV6 = vDicStem + "nde";
			baseV7 = vDicStem + "nda";
		}//mu

		else if (vDicForm.lastIndexOf("bu") !== -1) {
			yodanKind = 8;
			endInd = vDicFormLen - 2;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "ba";
			baseV2 = vDicStem + "bi";
			baseV3 = vDicStem + "bu";
			baseV4 = vDicStem + "be";
			baseV5 = vDicStem + "boo";
			baseV6 = vDicStem + "nde";
			baseV7 = vDicStem + "nda";
		}//bu
		verbForm.baseV1 = baseV1;
		verbForm.baseV2 = baseV2;
		verbForm.baseV3 = baseV3;
		verbForm.baseV4 = baseV4;
		verbForm.baseV5 = baseV5;
		verbForm.baseV6 = baseV6;
		verbForm.baseV7 = baseV7;
		verbForm.baseV8 = baseV8;

		buildVerbForm(verbForm);
	}//buildBaseYodan

	function buildVerbForm(verbForm) {

		verbForm.vPPres = verbForm.vDictForm;
		verbForm.vPPast = verbForm.baseV7;
		verbForm.vPres = verbForm.baseV2 + "masu";
		verbForm.vPast = verbForm.baseV2 + "mashita";
		verbForm.vVol = verbForm.baseV2 + "mashoo";
		verbForm.vTe = verbForm.baseV6;
		verbForm.vDesid = verbForm.baseV2 + "tai";
		verbForm.vEba = verbForm.baseV4 + "ba";
		verbForm.vRa = verbForm.baseV7 + "ra";
		verbForm.vIter = verbForm.baseV7 + "ri";
		verbForm.vSim = verbForm.baseV2 + "nagara";
		verbForm.vNPPres = verbForm.baseV1 + "nai";
		verbForm.vNPPast = verbForm.baseV1 + "nakatta";
		verbForm.vNPres = verbForm.baseV2 + "masen";
		verbForm.vNPast = verbForm.baseV2 + "masen deshita";
		verbForm.vNTe = verbForm.baseV1 + "nakute";
		verbForm.vNDesid = verbForm.baseV2 + "taku nai";
		verbForm.vNEba = verbForm.baseV1 + "nakereba";
		verbForm.vNRa = verbForm.baseV1 + "nakattara";
		verbForm.vNIter = verbForm.baseV1 + "nakattari";

		if (verbForm.verbKind === 2) {
			verbForm.vPassive = verbForm.baseV1 + "rareru";
			verbForm.vCaus = verbForm.baseV1 + "saseru";
			verbForm.vPot = verbForm.baseV1 + "rareru";
			verbForm.vNPassive = verbForm.baseV1 + "rarenai";
			verbForm.vNCaus = verbForm.baseV1 + "sasenai";
			verbForm.vImp = verbForm.baseV8 + "o";
			verbForm.vVolPlain = verbForm.baseV2 + "yoo";				
			verbForm.vNPot = verbForm.baseV1 + "rarenai";
		}//ichicdan
			
		else {

			verbForm.vPassive = verbForm.baseV1 + "reru";
			verbForm.vCaus = verbForm.baseV1 + "seru";
			verbForm.vPot = verbForm.baseV4 + "ru";
			verbForm.vNPassive = verbForm.baseV1 + "renai";
			verbForm.vNCaus = verbForm.baseV1 + "senai";
			verbForm.vNPot = verbForm.baseV4 + "nai";
			verbForm.vImp = verbForm.baseV8 + "e";
			verbForm.vVolPlain = verbForm.baseV8 + "oo";
		}//yodan

	}//buildverb
	
	function buildVbKuru(verbForm) {

		verbForm.vPPres = "kuru";
		verbForm.vPPast = "kita";
		verbForm.vPres = "kimasu";
		verbForm.vPast = "kimashita";
		verbForm.vVol = "kimashoo";
		verbForm.vVolPlain = "koyoo";
		verbForm.vTe = "kite";
		verbForm.vPassive = "korareru";
		verbForm.vDesid = "kitai";
		verbForm.vCaus = "kosaseru";
		verbForm.vEba = "kureba";
		verbForm.vRa = "kitara";
		verbForm.vPot = "korareru";
		verbForm.vIter = "kitari";
		verbForm.vSim = "kinagara";
		verbForm.vImp = "koi";
		verbForm.vNPPres = "konai";
		verbForm.vNPPast = "konakatta";
		verbForm.vNPres = "kimasen";
		verbForm.vNPast = "kimasen deshita";
		verbForm.vNTe = "konakute";
		verbForm.vNPassive = "korarenai";
		verbForm.vNDesid = "kitaku nai";
		verbForm.vNCaus = "kosasenai";
		verbForm.vNEba = "konakereba";
		verbForm.vNRa = "konakattara";
		verbForm.vNPot = "korareru";
		verbForm.vNIter = "n/a";

	}//buildKuru

	function buildVbSuru(verbForm) {

		verbForm.vPPres = "suru";
		verbForm.vPPast = "shita";
		verbForm.vPres = "shimasu";
		verbForm.vPast = "shimashita";
		verbForm.vVol = "shimashoo";
		verbForm.vVolPlain = "shiyoo";
		verbForm.vTe = "shite";
		verbForm.vPassive = "sareru";
		verbForm.vDesid = "shitai";
		verbForm.vCaus = "saseru";
		verbForm.vEba = "sureba";
		verbForm.vRa = "shitara";
		verbForm.vPot = "(dekiru)";
		verbForm.vIter = "shitari";
		verbForm.vSim = "shinagara";
		verbForm.vImp = "shiro";
		verbForm.vNPPres = "shinai";
		verbForm.vNPPast = "shinakatta";
		verbForm.vNPres = "shimasen";
		verbForm.vNPast = "shimasen deshita";
		verbForm.vNTe = "shinakute";
		verbForm.vNPassive = "sarenai";
		verbForm.vNDesid = "shitaku nai";
		verbForm.vNCaus = "sasenai";
		verbForm.vNEba = "shinakereba";
		verbForm.vNRa = "shinakattara";
		verbForm.vNPot = "(dekinai)";
		verbForm.vNIter = "n/a";

	}//buildSuru
	
	function buildJson(verbForm) {
		var data={
			"affirmative":
		        {
		            "plainPresent" : verbForm.vPPres,
		            "plainPast" : verbForm.vPPast,
		            "politePresent" : verbForm.vPres,
		            "politePast" : verbForm.vPast,
		            "plainVolitional" : verbForm.vVolPlain,
		            "politeVolitional" : verbForm.vVol,
		            "teForm" : verbForm.vTe,
		            "passive" : verbForm.vPassive,
		            "desiderative" : verbForm.vDesid,
		            "causative" : verbForm.vCaus,
		            "conditionalEba" : verbForm.vEba,
		            "conditionalRa" : verbForm.vRa,
		            "potential" : verbForm.vPot,
		            "iterative" : verbForm.vIter,
		            "simultaneous" : verbForm.vSim,
		            "imperative" : verbForm.vImp
		        }
		,
			"negative":
		        {
		            "plainPresent" : verbForm.vNPPres,
		            "plainPast" : verbForm.vNPPast,
		            "politePresent" : verbForm.vNPres,
		            "politePast" : verbForm.vNPast,
		            "teForm" : verbForm.vNTe,
		            "passive" : verbForm.vNPassive,
		            "desiderative" : verbForm.vNDesid,
		            "causative" : verbForm.vNCaus,
		            "conditionalEba" : verbForm.vNEba,
		            "conditionalRa" : verbForm.vNRa,
		            "potential" : verbForm.vNPot,
		            "iterative" : verbForm.vNIter
		        }	
		}
		return data;
	}







