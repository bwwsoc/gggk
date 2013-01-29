
	function setVbKindH(vDicForm) {

		var verbKind = -1;
		qp("vDicForm: " + vDicForm);
		switch (vDicForm) {

			case "くる": verbKind = 0;break;
			case "する": verbKind = 1;break;
			case "ちる":
			case "はいる":
			case "はしる":
			case "かぎる":
			case "ける":
			case "まいる":
			case "にぎる":
			case "へる":
			case "しる":verbKind = 3; break;
			default: verbKind = useVbEndingH(vDicForm);
		}//switch	
		return verbKind;
	}//whatVerb
	
	function useVbEndingH(vDicForm) {
		var verbKind;
		if (vDicForm.lastIndexOf("る") !== -1) {
			var startPos = 	vDicForm.length - 2;
			var endPos = vDicForm.length - 1;
			var secondToLast = vDicForm.substring(startPos, endPos);
			switch (secondToLast) {
				case "え":
				case "け":
				case "せ":
				case "て":
				case "ね":
				case "へ":
				case "め":
				case "れ":
				case "げ":
				case "ぜ":
				case "で":
				case "べ":
				case "ぺ":
				case "い":
				case "き":
				case "し":
				case "ち":
				case "に":
				case "ひ":
				case "み":
				case "り":
				case "ぎ":
				case "じ":
				case "び":
				case "ぴ":
				case "ぢ": verbKind = 2; break;
				default: verbKind = 3;
					
			}
			qp("it's  H ichidan: " + verbKind);
		}

		else {
			verbKind = 3;
			qp("it's H yodan: " + verbKind);
		}
		return verbKind;
	}//useEnding


	function buildVbIchidanH(verbForm) {
			qp("buildIchidanBaseH");

		var vDicForm = verbForm.vDictForm;
		var endInd = vDicForm.length - 1;
		var bv8 = vDicForm.length - 1;
		var vDicStem = vDicForm.substring(0, endInd);

		verbForm.baseV1 = vDicStem;
		verbForm.baseV2 = vDicStem;
		verbForm.baseV3 = vDicStem + "る";
		verbForm.baseV4 = vDicStem + "れ";
		verbForm.baseV5 = vDicStem + "よう";
		verbForm.baseV6 = vDicStem + "て";
		verbForm.baseV7 = vDicStem + "た";
		verbForm.baseV8 = vDicForm.substring(0, bv8);

		buildVerbFormH(verbForm);	

	}//buildBaseIchidan

	

	function buildVbYodanH(verbForm) {
		qp("buildYodanBaseH");
		var vDicForm = verbForm.vDictForm;	
		var vDicFormLen = vDicForm.length;
		var vDicStem;
		var endInd;
		var yodanKind;	
		var baseV1;
		var baseV2;
		var baseV3;
		var baseV4;
		var baseV5;
		var baseV6;
		var baseV7;
		var baseV8;
		var baseV9;

		if (vDicForm.lastIndexOf("あう") !== -1 || vDicForm.lastIndexOf("いう") !== -1 || vDicForm.lastIndexOf("おう") !== -1) {
			yodanKind = 0;
			endInd = vDicFormLen - 1;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "わ";
			baseV2 = vDicStem + "い";
			baseV3 = vDicStem + "う";
			baseV4 = vDicStem + "え";
			baseV5 = vDicStem + "おう";
			baseV6 = vDicStem + "って";
			baseV7 = vDicStem + "った";
			baseV8 = vDicStem + "え";
			baseV9 = vDicStem + "お";
			}//U verb

		else if (vDicForm.lastIndexOf("つ") !== -1) {
			yodanKind = 1;
			endInd = vDicFormLen - 1;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "た";
			baseV2 = vDicStem + "ち";
			baseV3 = vDicStem + "つ";
			baseV4 = vDicStem + "て";
			baseV5 = vDicStem + "とう";
			baseV6 = vDicStem + "って";
			baseV7 = vDicStem + "った";
			baseV8 = vDicStem + "え";
			baseV9 = vDicStem + "お";
		}//tsu

		else if (vDicForm.lastIndexOf("る") !== -1) {
			yodanKind = 2;
			endInd = vDicFormLen - 1;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "ら";
			baseV2 = vDicStem + "り";
			baseV3 = vDicStem + "る";
			baseV4 = vDicStem + "れ";
			baseV5 = vDicStem + "ろう";
			baseV6 = vDicStem + "って";
			baseV7 = vDicStem + "った";
			baseV8 = vDicStem + "れ";
			baseV9 = vDicStem + "ろ";

		}//ru

		else if (vDicForm.lastIndexOf("く") !== -1) {
			yodanKind = 3;
			endInd = vDicFormLen - 1;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "か";
			baseV2 = vDicStem + "き";
			baseV3 = vDicStem + "く";
			baseV4 = vDicStem + "け";
			baseV5 = vDicStem + "こう";
			if (vDicForm.lastIndexOf("いく") !== -1) {
				baseV6 = vDicStem + "って";
				baseV7 = vDicStem + "った";
				baseV8 = vDicStem + "け";
				baseV9 = vDicStem + "こ";

			}//iku

			else {
				baseV6 = vDicStem + "いて";
				baseV7 = vDicStem + "いた";				
				baseV8 = vDicStem + "け";
				baseV9 = vDicStem + "こ";
			}//else
		}//ku
		else if (vDicForm.lastIndexOf("ぐ") !== -1) {
			yodanKind = 4;
			endInd = vDicFormLen - 1;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "が";
			baseV2 = vDicStem + "ぎ";
			baseV3 = vDicStem + "ぐ";
			baseV4 = vDicStem + "げ";
			baseV5 = vDicStem + "ごう";
			baseV6 = vDicStem + "いで";
			baseV7 = vDicStem + "いだ";
			baseV8 = vDicStem + "げ";
			baseV9 = vDicStem + "ご";
		}//gu
		else if (vDicForm.lastIndexOf("す") !== -1) {
			yodanKind = 5;
			endInd = vDicFormLen - 1;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "さ";
			baseV2 = vDicStem + "し";
			baseV3 = vDicStem + "す";
			baseV4 = vDicStem + "せ";
			baseV5 = vDicStem + "そう";
			baseV6 = vDicStem + "して";
			baseV7 = vDicStem + "した";
			baseV8 = vDicStem + "せ";
			baseV9 = vDicStem + "そ";
		}//su
		else if (vDicForm.lastIndexOf("ぬ") !== -1) {
			yodanKind = 6;
			endInd = vDicFormLen - 1;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "な";
			baseV2 = vDicStem + "に";
			baseV3 = vDicStem + "ぬ";
			baseV4 = vDicStem + "ね";
			baseV5 = vDicStem + "のう";
			baseV6 = vDicStem + "んで";
			baseV7 = vDicStem + "んだ";
			baseV8 = vDicStem + "ね";
			baseV9 = vDicStem + "の";
		}//nu
		else if (vDicForm.lastIndexOf("む") !== -1) {
			yodanKind = 7;
			endInd = vDicFormLen - 1;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "ま";
			baseV2 = vDicStem + "み";
			baseV3 = vDicStem + "む";
			baseV4 = vDicStem + "め";
			baseV5 = vDicStem + "もう";
			baseV6 = vDicStem + "んで";
			baseV7 = vDicStem + "んだ";
			baseV8 = vDicStem + "め";
			baseV9 = vDicStem + "も";
		}//mu
		else if (vDicForm.lastIndexOf("ぶ") !== -1) {
			yodanKind = 8;
			endInd = vDicFormLen - 1;
			vDicStem = vDicForm.substring(0, endInd);
			baseV1 = vDicStem + "ば";
			baseV2 = vDicStem + "び";
			baseV3 = vDicStem + "ぶ";
			baseV4 = vDicStem + "べ";
			baseV5 = vDicStem + "ぼう";
			baseV6 = vDicStem + "んで";
			baseV7 = vDicStem + "んだ";
			baseV8 = vDicStem + "べ";
			baseV9 = vDicStem + "ぼ";
		}//bu
		verbForm.baseV1 = baseV1;
		verbForm.baseV2 = baseV2;
		verbForm.baseV3 = baseV3;
		verbForm.baseV4 = baseV4;
		verbForm.baseV5 = baseV5;
		verbForm.baseV6 = baseV6;
		verbForm.baseV7 = baseV7;
		verbForm.baseV8 = baseV8;
		verbForm.baseV9 = baseV9;
		
		buildVerbFormH(verbForm);

	}//buildBaseYodan

	

	function buildVerbFormH(verbForm) {

			verbForm.vPPres = verbForm.vDictForm;
			verbForm.vPPast = verbForm.baseV7;
			verbForm.vPres = verbForm.baseV2 + "ます";
			verbForm.vPast = verbForm.baseV2 + "ました";
			verbForm.vVol = verbForm.baseV2 + "ましょう";
			verbForm.vTe = verbForm.baseV6;
			verbForm.vDesid = verbForm.baseV2 + "たい";
			verbForm.vEba = verbForm.baseV4 + "ば";
			verbForm.vRa = verbForm.baseV7 + "ら";
			verbForm.vIter = verbForm.baseV7 + "り";
			verbForm.vSim = verbForm.baseV2 + "ながら";
			verbForm.vNPPres = verbForm.baseV1 + "ない";
			verbForm.vNPPast = verbForm.baseV1 + "なかった";
			verbForm.vNPres = verbForm.baseV2 + "ません";
			verbForm.vNPast = verbForm.baseV2 + "ません でした";
			verbForm.vNTe = verbForm.baseV1 + "なくて";
			verbForm.vNDesid = verbForm.baseV2 + "たく ない";
			verbForm.vNEba = verbForm.baseV1 + "なければ";
			verbForm.vNRa = verbForm.baseV1 + "なかったら";
			verbForm.vNIter = verbForm.baseV1 + "なかったり";
			if (verbForm.verbKind === 2) {
				verbForm.vPassive = verbForm.baseV1 + "られる";
				verbForm.vCaus = verbForm.baseV1 + "させる";
				verbForm.vPot = verbForm.baseV1 + "られる";
				verbForm.vNPassive = verbForm.baseV1 + "られない";
				verbForm.vNCaus = verbForm.baseV1 + "させない";
				verbForm.vImp = verbForm.baseV8 + "ろ";
				verbForm.vVolPlain = verbForm.baseV2 + "よう";				
				verbForm.vNPot = verbForm.baseV1 + "られない";
			}//ichicdan

			else {
				verbForm.vPassive = verbForm.baseV1 + "れる";
				verbForm.vCaus = verbForm.baseV1 + "せる";
				verbForm.vPot = verbForm.baseV4 + "る";
				verbForm.vNPassive = verbForm.baseV1 + "れない";
				verbForm.vNCaus = verbForm.baseV1 + "せない";
				verbForm.vNPot = verbForm.baseV4 + "ない";
				verbForm.vImp = verbForm.baseV8;
				verbForm.vVolPlain = verbForm.baseV9 + "う";
			}//yodan

	}//buildverb

	

	function buildVbKuruH(verbForm) {

		verbForm.vPPres = "くる";
		verbForm.vPPast = "きた";
		verbForm.vPres = "きます";
		verbForm.vPast = "きました";
		verbForm.vVol = "きましょう";
		verbForm.vVolPlain = "こよおう";
		verbForm.vTe = "きて";
		verbForm.vPassive = "こられる";
		verbForm.vDesid = "きたい";
		verbForm.vCaus = "こさせる";
		verbForm.vEba = "くれば";
		verbForm.vRa = "きたら";
		verbForm.vPot = "こられる";
		verbForm.vIter = "きたり";
		verbForm.vSim = "きながら";
		verbForm.vImp = "こい";
		verbForm.vNPPres = "こない";
		verbForm.vNPPast = "こなかった";
		verbForm.vNPres = "きません";
		verbForm.vNPast = "きません でした";
		verbForm.vNTe = "こなくて";
		verbForm.vNPassive = "こられない";
		verbForm.vNDesid = "きたく ない";
		verbForm.vNCaus = "こさせない";
		verbForm.vNEba = "こなければ";
		verbForm.vNRa = "こなかっtら";
		verbForm.vNPot = "こられる";

	}//buildKuru



	function buildVbSuruH(verbForm) {

		verbForm.vPPres = "する";
		verbForm.vPPast = "した";
		verbForm.vPres = "します";
		verbForm.vPast = "しました";
		verbForm.vVol = "しましょう";
		verbForm.vVolPlain = "しよう";
		verbForm.vTe = "して";
		verbForm.vPassive = "される";
		verbForm.vDesid = "したい";
		verbForm.vCaus = "させる";
		verbForm.vEba = "すれば";
		verbForm.vRa = "したら";
		verbForm.vPot = "(できる)";
		verbForm.vIter = "したり";
		verbForm.vSim = "しながら";
		verbForm.vImp = "しろ";
		verbForm.vNPPres = "しない";
		verbForm.vNPPast = "しなかった";
		verbForm.vNPres = "しません";
		verbForm.vNPast = "しません でした";
		verbForm.vNTe = "しなくて";
		verbForm.vNPassive = "されない";
		verbForm.vNDesid = "したく ない";
		verbForm.vNCaus = "させない";
		verbForm.vNEba = "しなければ";
		verbForm.vNRa = "しなかったら";
		verbForm.vNPot = "(できない)";

	}//buildSuru

	