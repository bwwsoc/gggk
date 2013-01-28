exports.kj = function(req, res){
	var kp = req.params.name;
	var kpOut; 
	var kLabel = "kana";
	switch (kp) {
		case "ka": kpOut = "\u304B";break;
		case "ke": kpOut = "\u3051";break;
		case "ki": kpOut = "\u304D";break;
		case "ri": kpOut = "\u308A";break;
		case "mi": kpOut = "\u307F";break;
		case "taberu": kpOut1 = "taberu"; kpOut2 = "tabeta"; kpOut3 = "tabemasu"; kpOut4 = "tabemashita"; kpOut5 = "taberareru"; kpOut6 = "tabero"; kpOut7 = "tabetai";break;
		case "oyogu": kpOut1 = "oyogu"; kpOut2 = "oyoida"; kpOut3 = "oyogimasu"; kpOut4 = "oyogimashita"; kpOut5 = "oyogareru"; kpOut6 = "oyoge"; kpOut7 = "oyogitai";break;
		case "miru": kpOut1 = "miru"; kpOut2 = "mita"; kpOut3 = "mimasu"; kpOut4 = "mimashita"; kpOut5 = "mirareru"; kpOut6 = "miro"; kpOut7 = "mitai";break;
		default: kpOut = "unk";
	}	
	if (kpOut === "unk") {
	res.json({ Unknown: kpOut });
		return;
	}
	 
	if (kp.length > 2) {
	res.json({ "Plain present:": kpOut1, "Plain past": kpOut2,
	 "Polite present": kpOut3, "Polite past": kpOut4, "Passive": kpOut5,
	 "Imperative": kpOut6, "Desiderative": kpOut7  });
		
	}	
	else {
	res.json({ Hiragana: kpOut });
		
	}
};
