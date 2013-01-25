// copyright 2001 Barry Waid
	var verbKind = -1;
	var thisVerb = "";
	var vDicForm, vDicStem ;
	var vTe,vVol,vVolPlain,vPast,vPres,vPPres, vPPast, vPassive, vDesid, vCaus, vEba, vRa, vPot, vIter, vSim, vImp;
	var vNTe,vNVol,vNPast,vNPres,vNPPres, vNPPast, vNPassive, vNDesid, vNCaus, vNEba, vNRa, vNPot, vNIter, vNSim;
	var baseV1,baseV2,baseV3,baseV4,baseV5,baseV6,baseV7;
	var ichiDanTestR;
	var vDicFormLen, endInd, yodanKind;
	var string, oldString = null;
	var verbKindvalue;
	var posOutput = "";
	var negOutput = "";

	function tryVerbs(el) {
    	document.getElementById("dfinTF").value = el.innerHTML;
    	console.log(el);
    	vDicForm = el.innerHTML;
    	doCharSetCheck();
	}
	function tryHiragana(evt) {
    	console.log(evt);
		var eventReference = (typeof evt !== "undefined")? evt : event;
		var eventTarget = (typeof eventReference.target !== "undefined")? eventReference.target : eventReference.srcElement;
    	document.getElementById("dfinTF").value = eventTarget.innerHTML;
    	vDicForm = eventTarget.innerHTML;;
    	doCharSetCheck();
	}


	function doVerb() {
		clearOutputs();
		writeVerbs();
	    vDicForm = document.getElementById("dfinTF").value;
		console.log('charCode:' + vDicForm.charCodeAt(0));
		doCharSetCheck();
	}
	
	function doCharSetCheck() {
		var charCode = vDicForm.charCodeAt(0);
		if (charCode > 1000) {
			setVerbKindH();

		}
		else setVerbKind();

	}

	function setVerbKind() {

		vDicFormLen = vDicForm.length;
		verbKind = -1;
		qp("vDicForm: " + vDicForm);
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

			case "kaeru": 

			case "kiru": 

			case "iru": verbKind = -2; askWhich(); break;

			default: useEnding();

		}//switch

		if (verbKind >= 0) {build();}	

	}//whatVerb

	function useEnding() {

		if (vDicForm.lastIndexOf("iru") !== -1 || vDicForm.lastIndexOf("eru") !== -1) {

			verbKind = 2;

			qp("it's ichidan");

		}

		else {

			verbKind = 3;

			qp("it's yodan");

		}

	}//useEnding


	function build() {

		qp("verbKind is " + verbKind);

		switch (verbKind) {

			case 0: buildKuru(); break;

			case 1: buildSuru(); break;

			case 2: buildIchidanBase(); break;

			case 3: buildYodanBase(); break;

			default: qp("unknown verb");

		}//switch

		writeVerbs();

	}


	function askWhich() {
		document.getElementById("ambigVerb1").style.display = "table-row";
		document.getElementById("ambigVerb2").style.display = "table-row";
		switch (vDicForm) {

			case "kaeru":

				document.getElementById("ichidanVTF").innerHTML = "Use: Kaeru - to change";

				document.getElementById("yodanVTF").innerHTML = "Use: Kaeru - to return";

				break;

			case "kiru":

				document.getElementById("ichidanVTF").innerHTML = "Use: Kiru - to wear";

				document.getElementById("yodanVTF").innerHTML = "Use: Kiru - to cut";

				break;

			case "iru":

				document.getElementById("ichidanVTF").innerHTML = "Use: Iru - to exist";

				document.getElementById("yodanVTF").innerHTML = "Use: Iru - to need";

				break;

			default:		

		}//switch

	}//askWhich

	

	function setWhich(verbKindValue) {

		verbKind = parseInt(verbKindValue);

				document.getElementById("ichidanVTF").value = "";

				document.getElementById("yodanVTF").value = "";
		qp(verbKind);
		document.getElementById("ambigVerb1").style.display = "none";
		document.getElementById("ambigVerb2").style.display = "none";

		build();

	}//setWhich

	

	

	function buildIchidanBase() {

		endInd = vDicFormLen - 2;

		bv8 = vDicFormLen - 1;

		vDicStem = vDicForm.substring(0, endInd);

		qp(vDicStem);

		baseV1 = vDicStem;

		baseV2 = vDicStem;

		baseV3 = vDicStem + "ru";

		baseV4 = vDicStem + "re";

		baseV5 = vDicStem + "yoo";

		baseV6 = vDicStem + "te";

		baseV7 = vDicStem + "ta";

		baseV8 = vDicForm.substring(0, bv8);

		buildVerb();	

	}//buildBaseIchidan

	

	function buildYodanBase() {

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

		bv8 = vDicFormLen - 1;

		baseV8 = vDicForm.substring(0, bv8);

		buildVerb();

	}//buildBaseYodan

	


	function buildVerb() {

			vPPres = vDicForm;

			vPPast = baseV7;

			vPres = baseV2 + "masu";

			vPast = baseV2 + "mashita";

			vVol = baseV2 + "mashoo";

			

			vTe = baseV6;

			vDesid = baseV2 + "tai";

			vEba = baseV4 + "ba";

			vRa = baseV7 + "ra";

			vIter = baseV7 + "ri";

			vSim = baseV2 + "nagara";

			vNPPres = baseV1 + "nai";

			vNPPast = baseV1 + "nakatta";

			vNPres = baseV2 + "masen";

			vNPast = baseV2 + "masen deshita";

			vNTe = baseV1 + "nakute";

			vNDesid = baseV2 + "taku nai";

			vNEba = baseV1 + "nakereba";

			vNRa = baseV1 + "nakattara";

			vNIter = baseV1 + "nakattari";

			

			if (verbKind === 2) {

				vPassive = baseV1 + "rareru";

				vCaus = baseV1 + "saseru";

				vPot = baseV1 + "rareru";

				vNPassive = baseV1 + "rarenai";

				vNCaus = baseV1 + "sasenai";

				vImp = baseV8 + "o";

				vVolPlain = baseV2 + "yoo";				

				vNPot = baseV1 + "rarenai";

				}//ichicdan

				

			else {

				vPassive = baseV1 + "reru";

				vCaus = baseV1 + "seru";

				vPot = baseV4 + "ru";

				vNPassive = baseV1 + "renai";

				vNCaus = baseV1 + "senai";

				vNPot = baseV4 + "nai";

				vImp = baseV8 + "e";

				vVolPlain = baseV8 + "oo";

				}//yodan

	}//buildverb

	

	function buildKuru() {

		vPPres = "kuru";

		vPPast = "kita";

		vPres = "kimasu";

		vPast = "kimashita";

		vVol = "kimashoo";

		vVolPlain = "koyoo";

		vTe = "kite";

		vPassive = "korareru";

		vDesid = "kitai";

		vCaus = "kosaseru";

		vEba = "kureba";

		vRa = "kitara";

		vPot = "korareru";

		vIter = "kitari";

		vSim = "kinagara";

		vImp = "koi";

		vNPPres = "konai";

		vNPPast = "konakatta";

		vNPres = "kimasen";

		vNPast = "kimasen deshita";

		vNTe = "konakute";

		vNPassive = "korarenai";

		vNDesid = "kitaku nai";

		vNCaus = "kosasenai";

		vNEba = "konakereba";

		vNRa = "konakattara";

		vNPot = "korareru";



	}//buildKuru



	function buildSuru() {

		vPPres = "suru";

		vPPast = "shita";

		vPres = "shimasu";

		vPast = "shimashita";

		vVol = "shimashoo";

		vVolPlain = "shiyoo";

		vTe = "shite";

		vPassive = "sareru";

		vDesid = "shitai";

		vCaus = "saseru";

		vEba = "sureba";

		vRa = "shitara";

		vPot = "(dekiru)";

		vIter = "shitari";

		vSim = "shinagara";

		vImp = "shiro";

		vNPPres = "shinai";

		vNPPast = "shinakatta";

		vNPres = "shimasen";

		vNPast = "shimasen deshita";

		vNTe = "shinakute";

		vNPassive = "sarenai";

		vNDesid = "shitaku nai";

		vNCaus = "sasenai";

		vNEba = "shinakereba";

		vNRa = "shinakattara";

		vNPot = "(dekinai)";



	}//buildSuru

	

	function writeVerbs() {

		document.getElementById("plainPresent").innerHTML=vPPres;
		document.getElementById("plainPast").innerHTML=vPPast;
		document.getElementById("politePresent").innerHTML=vPres;
		document.getElementById("politePast").innerHTML=vPast;
		document.getElementById("plainVol").innerHTML=vVolPlain;
		document.getElementById("politeVol").innerHTML=vVol;
		document.getElementById("te").innerHTML=vTe;
		document.getElementById("plainPass").innerHTML=vPassive;
		document.getElementById("imperative").innerHTML=vImp;
		document.getElementById("desiderative").innerHTML=vDesid;
		document.getElementById("causative").innerHTML=vCaus;
		document.getElementById("eba").innerHTML=vEba;
		document.getElementById("ra").innerHTML=vRa;
		document.getElementById("potential").innerHTML=vPot;
		document.getElementById("iterative").innerHTML=vIter;
		document.getElementById("simultaneous").innerHTML=vSim;
		document.getElementById("negPlainPresent").innerHTML=vNPPres;
		document.getElementById("negPlainPast").innerHTML=vNPPast;
		document.getElementById("negPolitePresent").innerHTML=vNPres;
		document.getElementById("negPolitePast").innerHTML=vNPast;
		document.getElementById("negTe").innerHTML=vNTe;
		document.getElementById("negPlainPass").innerHTML=vNPassive;
		document.getElementById("negDesiderative").innerHTML=vNDesid;
		document.getElementById("negCausative").innerHTML=vNCaus;
		document.getElementById("negEba").innerHTML=vNEba;
		document.getElementById("negRa").innerHTML=vNRa;
		document.getElementById("negPotential").innerHTML=vNPot;
		document.getElementById("negIterative").innerHTML=vNIter;

		
		fullOutput();
	}//writeVerbs

	function fullOutput() {
		posOutput = "Plain Present: " + vPPres + "\nPlan Past: " + vPPast + "\nPolite Present: " + vPres + "\nPolite Past: " + vPast + "\nVolitional (plain): " + vVolPlain + "\nVolitional (polite): " + vVol + "\nTe-form/gerund: " + vTe + "\nPassive (plain): " + vPassive + "\nImperative: " + vImp + "\nDesidearative: " + vDesid + "\nCausative: " + vCaus + "\nConditional -eba: " + vEba + "\nConditional -ra: " + vRa + "\nPotential (plain): " + vPot + "\nIterative: " + vIter + "\nSimultaneous: " + vSim;
		negOutput = "Plain Present: " + vNPPres + "\nPlan Past: " + vNPPast + "\nPolite Present: " + vNPres + "\nPolite Past: " + vNPast + "\nTe-form/gerund: " + vNTe + "\nPassive (plain): " + vNPassive + "\nDesidearative: " + vNDesid + "\nCausative: " + vNCaus + "\nConditional -eba: " + vNEba + "\nConditional -ra: " + vNRa + "\nPotential (plain): " + vNPot + "\nIterative: " + vNIter;
	
	}//fullOutput

	function qp(string) {

		if (debug) {
			console.log(string);

		}//if 

	}

function clearOutputs() {
		vPPres = "";

		vPPast = "";

		vPres = "";

		vPast = "";

		vVol = "";

		vVolPlain = "";

		vTe = "";

		vPassive = "";

		vDesid = "";

		vCaus = "";

		vEba = "";

		vRa = "";

		vPot = "";

		vIter = "";

		vSim = "";

		vImp = "";

		vNPPres = "";

		vNPPast = "";

		vNPres = "";

		vNPast = "";

		vNTe = "";

		vNPassive = "";

		vNDesid = "";

		vNCaus = "";

		vNEba = "";

		vNRa = "";

		vNPot = "";

}

function openWin(theURL,winName,features) { 
  window.open(theURL,winName,features);
}
