function getKanaJson(kanaValue) {
	return new KanaDictionary().getJsonForKana(kanaValue);
}

exports.getJson = getKanaJson;

function Kana(name, uValue, intValue) {
	this.name = name;
	this.uValue = uValue;
	this.intValue = intValue;
}

function KanaDictionary() {
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

	this.getJsonForKana = function getJsonForValue(kanaValue) {
		var tmpKana = kDict[kanaValue];
		var data = {
			"name" : tmpKana.name,
			"unicode" : tmpKana.uValue,
			"intValue" : tmpKana.intValue
		}
		return data;
	}


}



	
	
	