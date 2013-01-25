var adj = {};

function start() {
	adj.aDicForm = document.getElementById("aDicFormTF").value;
	if (adj.aDicForm === "ii") {
		adj.aDicForm = "yoi";
	}
	adj.aDicFormLen = adj.aDicForm.length;
	adj.endInd = adj.aDicFormLen - 1;
	adj.aStem = adj.aDicForm.substring(0, adj.endInd);
	build();
	update();
}//start

function build() {
	adj.aPlPres = adj.aDicForm;
	adj.aPlPresN = adj.aStem + "kunai";
	adj.aPlPast = adj.aStem + "katta";
	adj.aPlPastN = adj.aStem + "kunakatta";
	adj.aEba = adj.aStem + "kereba";
	adj.aRa = adj.aStem + "kattara";
	adj.aEbaN = adj.aStem + "kunakereba";
	adj.aRaN = adj.aStem + "kunakattara";
	adj.aAdv = adj.aStem + "ku";
	adj.aToo = adj.aStem + "sugiru";

}//build

function update() {
	document.getElementById("aPlPresTF").value = adj.aPlPres;
	document.getElementById("aPlPresNTF").value = adj.aPlPresN;
	document.getElementById("aPlPastTF").value = adj.aPlPast;
	document.getElementById("aPlPastNTF").value = adj.aPlPastN;
	document.getElementById("aEbaTF").value = adj.aEba;
	document.getElementById("aRaTF").value = adj.aRa;		
	document.getElementById("aEbaNTF").value = adj.aEbaN;
	document.getElementById("aRaNTF").value = adj.aRaN;		
	document.getElementById("aAdvTF").value = adj.aAdv;
	document.getElementById("aTooTF").value = adj.aToo;
}//update
