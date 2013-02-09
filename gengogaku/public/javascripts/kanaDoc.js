function tryKana(el) {
	document.getElementById("conversionInput").value = el.innerHTML;
	console.log(el);
	document.getElementById("kConvertBtn").click();
	
}
function tryKChar() {
	document.getElementById("conversionInput").value = "\u3071";
	document.getElementById("kConvertBtn").click();

}
function tryIntValue() {
	document.getElementById("conversionInput").value = 12415;
	document.getElementById("kConvertBtn").click();

}
function tryUValue() {
	document.getElementById("conversionInput").value = "306C";
	document.getElementById("kConvertBtn").click();

}
function tryRLiteral() {
	document.getElementById("conversionInput").value = "ka";
	document.getElementById("kConvertBtn").click();

}
function tryRandom() {
	document.getElementById("conversionInput").value = getRandomKana().uValue;
	document.getElementById("kConvertBtn").click();
}

function showAll() {
	var kAllOutput = "";
	for (var kana in kDict) {
	    if (kDict.hasOwnProperty(kana)) {
	        kAllOutput += kDict[kana].name + " = " + kDict[kana].uValue + "\n";
	    }
	} 
	document.getElementById("fullKanaList").style.display = "block";
	document.getElementById("fullKanaListTA").value = kAllOutput;
}

function showAllJson() {
	var kAllOutputJson = "";
	for (var kana in kDict) {
	    if (kDict.hasOwnProperty(kana)) {
	        kAllOutputJson += "{\n " + kDict[kana].name + " : {\n  name : " + kDict[kana].name + ",\n  intValue : " +
	        kDict[kana].intValue + ",\n  unicode : " + kDict[kana].uValue + "\n }\n},\n";
	    }
	} 
	kAllOutputJson = kAllOutputJson.substr(0, kAllOutputJson.length - 2);
	document.getElementById("fullKanaList").style.display = "block";
	document.getElementById("fullKanaListTA").value = kAllOutputJson;
}

