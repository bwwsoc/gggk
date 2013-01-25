function Kana(name, uValue, intValue) {
	this.name = name;
	this.uValue = uValue;
	this.intValue = intValue;
}

var kDict = {
	"a" : new Kana("a", "\u3042", 12354),
	"ka" : new Kana("ka", "\u304B", 12363),
	"ga" : new Kana("ga", "\u304c", 12364),
	"sa" : new Kana("sa", "\u3055", 12373),
	"za" : new Kana("za", "\u3056", 12374),
	"ta" : new Kana("ta", "\u305F", 12383),
	"da" : new Kana("da", "\u3060", 12384),
	"na" : new Kana("na", "\u306A", 12394),
	"ha" : new Kana("ha", "\u306F", 12399),
	"ba" : new Kana("ba", "\u3070", 12400),
	"pa" : new Kana("pa", "\u3071", 12401),
	"ma" : new Kana("ma", "\u307E", 12414),
	"ya" : new Kana("ya", "\u3084", 12420),
	"ra" : new Kana("ra", "\u3089", 12425),
	"wa" : new Kana("wa", "\u308F", 12431),
	"n" : new Kana("n", "\u3093", 12435),
	"i" : new Kana("i", "\u3044", 12356),
	"ki" : new Kana("ki", "\u304D", 12365),
	"gi" : new Kana("gi", "\u304E", 12366),
	"si" : new Kana("si", "\u3057", 12375),
	"zi" : new Kana("zi", "\u3058", 12376),
	"ti" : new Kana("ti", "\u3061", 12385),
	"di" : new Kana("di", "\u3062", 12386),
	"ni" : new Kana("ni", "\u306B", 12395),
	"hi" : new Kana("hi", "\u3072", 12402),
	"bi" : new Kana("bi", "\u3073", 12403),
	"pi" : new Kana("pi", "\u3074", 12404),
	"mi" : new Kana("mi", "\u307F", 12415),
	"ri" : new Kana("ri", "\u308A", 12426),
	"wi" : new Kana("wi", "\u3090", 12432),
	"u" : new Kana("u", "\u3046", 12358),
	"ku" : new Kana("ku", "\u304F", 12367),
	"gu" : new Kana("gu", "\u3050", 12368),
	"su" : new Kana("su", "\u3059", 12377),
	"zu" : new Kana("zu", "\u305A", 12378),
	"tu" : new Kana("tu", "\u3064", 12388),
	"du" : new Kana("du", "\u3065", 12389),
	"nu" : new Kana("nu", "\u306C", 12396),
	"hu" : new Kana("hu", "\u3075", 12405),
	"bu" : new Kana("bu", "\u3076", 12406),
	"pu" : new Kana("pu", "\u3077", 12407),
	"mu" : new Kana("mu", "\u3080", 12416),
	"yu" : new Kana("yu", "\u3086", 12422),
	"ru" : new Kana("ru", "\u308B", 12427),
	"vu" : new Kana("vu", "\u3094", 12436),
	"e" : new Kana("e", "\u3048", 12360),
	"ke" : new Kana("ke", "\u3051", 12369),
	"ge" : new Kana("ge", "\u3052", 12370),
	"se" : new Kana("se", "\u305B", 12379),
	"ze" : new Kana("ze", "\u305C", 12380),
	"te" : new Kana("te", "\u3066", 12390),
	"de" : new Kana("de", "\u3067", 12391),
	"ne" : new Kana("ne", "\u306D", 12397),
	"he" : new Kana("he", "\u3078", 12408),
	"be" : new Kana("be", "\u3079", 12409),
	"pe" : new Kana("pe", "\u307A", 12410),
	"me" : new Kana("me", "\u3081", 12417),
	"re" : new Kana("re", "\u308C", 12428),
	"we" : new Kana("we", "\u3091", 12433),
	"o" : new Kana("o", "\u304A", 12362),
	"ko" : new Kana("ko", "\u3053", 12371),
	"go" : new Kana("go", "\u3054", 12372),
	"so" : new Kana("so", "\u305D", 12381),
	"zo" : new Kana("zo", "\u305E", 12382),
	"to" : new Kana("to", "\u3068", 12392),
	"do" : new Kana("do", "\u3069", 12393),
	"no" : new Kana("no", "\u306E", 12398),
	"ho" : new Kana("ho", "\u307B", 12411),
	"bo" : new Kana("bo", "\u307C", 12412),
	"po" : new Kana("po", "\u307D", 12413),
	"mo" : new Kana("mo", "\u3082", 12418),
	"yo" : new Kana("yo", "\u3088", 12424),
	"ro" : new Kana("ro", "\u308D", 12429),
	"wo" : new Kana("wo", "\u3092", 12434)
}

function doKanaConversion() {
	conversionInput = document.getElementById("conversionInput").value;
	console.log("ci: " + conversionInput);
	console.log("ci len: " + conversionInput.length);
	if (conversionInput.length === 5) {
		convertKana(parseInt(conversionInput, 10));
		return;
	}
	if (conversionInput.length === 4) {
		convertKana(parseInt(conversionInput, 16));
		return;
	}
	if (doCharSetCheck(conversionInput) === "kana") {
		convertKana(conversionInput.charCodeAt(0));
	}
	else if (doCharSetCheck(conversionInput) === "romaji") {
		convertRomaji(conversionInput);
	}
}

function doCharSetCheck(charStr) {
	var charCode = charStr.charCodeAt(0);
	var charType = "";
	if ((charCode > 12353) && (charCode < 12438)) {
		charType = "kana" ;

	}
	else charType = "romaji" ;
	
	return charType;
}

function convertKana(kInput) {
	var rOutput = getKanaForInt(kInput);

	console.log("rOutput: " + kDict[rOutput].intValue.toString(16));
	document.getElementById("pronunciation").innerHTML = kDict[rOutput].name;
	document.getElementById("unicodeValue").innerHTML = kDict[rOutput].intValue.toString(16).toUpperCase();
	document.getElementById("intValue").innerHTML = kDict[rOutput].intValue;
	document.getElementById("scriptDisplay").innerHTML = kDict[rOutput].uValue;

}

function convertRomaji(rInput) {
	document.getElementById("pronunciation").innerHTML = kDict[rInput].name;
	document.getElementById("unicodeValue").innerHTML = kDict[rInput].intValue.toString(16).toUpperCase();
	document.getElementById("intValue").innerHTML = kDict[rInput].intValue;
	document.getElementById("scriptDisplay").innerHTML = kDict[rInput].uValue;
}

function getRandomKana() {
	var kInt = Math.floor(Math.random() * 82) + 12354;
	console.log("\nkInt: " + kInt);
	var tmpKana = getKanaForInt(kInt);
	if (tmpKana === "") {
		console.log("undefined small");
		tmpKana = getKanaForInt(12418);
	}
	console.log("tmpKana: " + tmpKana);
	console.log("tmpKana.u: " + kDict[tmpKana].uValue);
	return kDict[tmpKana].uValue;
}

function getKanaForInt(kanaIntValue) {
	var rOutput = "";
	switch (kanaIntValue) {
		case 12354: rOutput = "a"; break;		
		case 12363: rOutput = "ka"; break;
		case 12364: rOutput = "ga"; break;		
		case 12373: rOutput = "sa"; break;
		case 12374: rOutput = "za"; break;
		case 12383: rOutput = "ta"; break;
		case 12384: rOutput = "da"; break;
		case 12394: rOutput = "na"; break;
		case 12399: rOutput = "ha"; break;
		case 12400: rOutput = "ba"; break;
		case 12401: rOutput = "pa"; break;
		case 12414: rOutput = "ma"; break;
		case 12420: rOutput = "ya"; break;
		case 12425: rOutput = "ra"; break;
		case 12431: rOutput = "wa"; break;
		case 12435: rOutput = "n"; break;
		case 12356: rOutput = "i"; break;
		case 12365: rOutput = "ki"; break;
		case 12366: rOutput = "gi"; break;
		case 12375: rOutput = "si"; break;
		case 12376: rOutput = "zi"; break;
		case 12385: rOutput = "ti"; break;
		case 12386: rOutput = "di"; break;
		case 12395: rOutput = "ni"; break;
		case 12402: rOutput = "hi"; break;
		case 12403: rOutput = "bi"; break;
		case 12404: rOutput = "pi"; break;
		case 12415: rOutput = "mi"; break;
		case 12426: rOutput = "ri"; break;
		case 12432: rOutput = "wi"; break;
		case 12358: rOutput = "u"; break;
		case 12367: rOutput = "ku"; break;
		case 12368: rOutput = "gu"; break;
		case 12377: rOutput = "su"; break;
		case 12378: rOutput = "zu"; break;
		case 12388: rOutput = "tu"; break;
		case 12389: rOutput = "du"; break;
		case 12396: rOutput = "nu"; break;
		case 12405: rOutput = "hu"; break;
		case 12406: rOutput = "bu"; break;
		case 12407: rOutput = "pu"; break;
		case 12416: rOutput = "mu"; break;
		case 12422: rOutput = "yu"; break;
		case 12427: rOutput = "ru"; break;
		case 12436: rOutput = "vu"; break;
		case 12360: rOutput = "e"; break;
		case 12369: rOutput = "ke"; break;
		case 12370: rOutput = "ge"; break;
		case 12379: rOutput = "se"; break;
		case 12380: rOutput = "ze"; break;
		case 12390: rOutput = "te"; break;
		case 12391: rOutput = "de"; break;
		case 12397: rOutput = "ne"; break;
		case 12408: rOutput = "he"; break;
		case 12409: rOutput = "be"; break;
		case 12410: rOutput = "pe"; break;
		case 12417: rOutput = "me"; break;
		case 12428: rOutput = "re"; break;
		case 12433: rOutput = "we"; break;
		case 12362: rOutput = "o"; break;
		case 12371: rOutput = "ko"; break;
		case 12372: rOutput = "go"; break;
		case 12381: rOutput = "so"; break;
		case 12382: rOutput = "zo"; break;
		case 12392: rOutput = "to"; break;
		case 12393: rOutput = "do"; break;
		case 12398: rOutput = "no"; break;
		case 12411: rOutput = "ho"; break;
		case 12412: rOutput = "bo"; break;
		case 12413: rOutput = "po"; break;
		case 12418: rOutput = "mo"; break;
		case 12424: rOutput = "yo"; break;
		case 12429: rOutput = "ro"; break;
		case 12434: rOutput = "wo"; break;
		default: console.log("no case");
		
	}//switch
	return rOutput;
}

