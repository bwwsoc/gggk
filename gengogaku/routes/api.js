exports.kj = function(req, res){
	var kp = req.params.name;
	var kpOut; 
	var kLabel = "kana";
	switch (kp) {
		case "ka": kpOut = "\u304B";break;
		case "ki": kpOut = "\u304D";break;
		case "ri": kpOut = "\u308A";break;
		case "taberu": kpOut = "tabemasu";break;
		case "oyogu": kpOut = "oyogimasu";break;
		case "miru": kpOut = "mimasu";break;
		default: kpOut = "unk";
	}	
	if (kp.length > 2) {
	res.json({ "Polite present": kpOut });
		
	}	
	else {
	res.json({ Hiragana: kpOut });
		
	}
};
