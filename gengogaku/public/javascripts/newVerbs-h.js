
	function setVerbKindH() {

		vDicFormLen = vDicForm.length;
		verbKind = -1;
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

			case "かえる": 

			case "きる": 

			case "いる": verbKind = -2; askWhichH(); break;

			default: useEndingH();

		}//switch

		if (verbKind >= 0) {buildH();}	

	}//whatVerb
	

	function buildH() {

		qp("H verbKind is " + verbKind);

		switch (verbKind) {

			case 0: buildKuruH(); break;

			case 1: buildSuruH(); break;

			case 2: buildIchidanBaseH(); break;

			case 3: buildYodanBaseH(); break;

			default: qp("unknown verb");

		}//switch

		writeVerbs();

	}

	function useEndingH() {
		if (vDicForm.lastIndexOf("る") !== -1) {
			startPos = 	vDicForm.length - 2;
			endPos = vDicForm.length - 1;
			secondToLast = vDicForm.substring(startPos, endPos);
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
			
			

			qp("it's  H ichidan");

		}

		else {

			verbKind = 3;

			qp("it's H yodan");

		}

	}//useEnding

	function askWhichH() {

		switch (vDicForm) {

			case "かえる":

				document.jsverb.ichidanVTF.value = "かえる：　Kaeru - to change";

				document.jsverb.yodanVTF.value = "かえる：　Kaeru - to return";

				break;

			case "きる":

				document.jsverb.ichidanVTF.value = "きる：　Kiru - to wear";

				document.jsverb.yodanVTF.value = "きる：　Kiru - to cut";

				break;

			case "いる":

				document.jsverb.ichidanVTF.value = "いる：Iru - to exist";

				document.jsverb.yodanVTF.value = "いる：　Iru - to need";

				break;

			default:		

		}//switch

	}//askWhich

	

	function setWhichH(verbKindValue) {

		verbKind = parseInt(verbKindValue);

		document.jsverb.ichidanVTF.value = "";

		document.jsverb.yodanVTF.value = "";

		document.jsverb.chooseWhich[0].checked = false;

		document.jsverb.chooseWhich[1].checked = false;

		qp(verbKind);

		buildH();

	}//setWhich

	function buildIchidanBaseH() {
			qp("buildIchidanBaseH");

		endInd = vDicFormLen - 1;

		bv8 = vDicFormLen - 1;

		vDicStem = vDicForm.substring(0, endInd);

		qp(vDicStem);

		baseV1 = vDicStem;

		baseV2 = vDicStem;

		baseV3 = vDicStem + "る";

		baseV4 = vDicStem + "れ";

		baseV5 = vDicStem + "よう";

		baseV6 = vDicStem + "て";

		baseV7 = vDicStem + "た";

		baseV8 = vDicForm.substring(0, bv8);

		buildVerbH();	

	}//buildBaseIchidan

	

	function buildYodanBaseH() {
			qp("buildYodanBaseH");

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

		//bv8 = vDicFormLen - 1;

		//baseV8 = vDicForm.substring(0, bv8);

		buildVerbH();

	}//buildBaseYodan

	

	function buildVerbH() {

			vPPres = vDicForm;

			vPPast = baseV7;

			vPres = baseV2 + "ます";

			vPast = baseV2 + "ました";

			vVol = baseV2 + "ましょう";

			

			vTe = baseV6;

			vDesid = baseV2 + "たい";

			vEba = baseV4 + "ば";

			vRa = baseV7 + "ら";

			vIter = baseV7 + "り";

			vSim = baseV2 + "ながら";

			vNPPres = baseV1 + "ない";

			vNPPast = baseV1 + "なかった";

			vNPres = baseV2 + "ません";

			vNPast = baseV2 + "ません でした";

			vNTe = baseV1 + "なくて";

			vNDesid = baseV2 + "たく ない";

			vNEba = baseV1 + "なければ";

			vNRa = baseV1 + "なかったら";

			vNIter = baseV1 + "なかったり";

			

			if (verbKind === 2) {

				vPassive = baseV1 + "られる";

				vCaus = baseV1 + "させる";

				vPot = baseV1 + "られる";

				vNPassive = baseV1 + "られない";

				vNCaus = baseV1 + "させない";

				vImp = baseV8 + "ろ";

				vVolPlain = baseV2 + "よう";				

				vNPot = baseV1 + "られない";

				}//ichicdan

				

			else {

				vPassive = baseV1 + "れる";

				vCaus = baseV1 + "せる";

				vPot = baseV4 + "る";

				vNPassive = baseV1 + "れない";

				vNCaus = baseV1 + "せない";

				vNPot = baseV4 + "ない";

				vImp = baseV8;

				vVolPlain = baseV9 + "う";

				}//yodan

	}//buildverb

	

	function buildKuruH() {

		vPPres = "くる";

		vPPast = "きた";

		vPres = "きます";

		vPast = "きました";

		vVol = "きましょう";

		vVolPlain = "こよおう";

		vTe = "きて";

		vPassive = "こられる";

		vDesid = "きたい";

		vCaus = "こさせる";

		vEba = "くれば";

		vRa = "きたら";

		vPot = "こられる";

		vIter = "きたり";

		vSim = "きながら";

		vImp = "こい";

		vNPPres = "こない";

		vNPPast = "こなかった";

		vNPres = "きません";

		vNPast = "きません でした";

		vNTe = "こなくて";

		vNPassive = "こられない";

		vNDesid = "きたく ない";

		vNCaus = "こさせない";

		vNEba = "こなければ";

		vNRa = "こなかっtら";

		vNPot = "こられる";



	}//buildKuru



	function buildSuruH() {

		vPPres = "する";

		vPPast = "した";

		vPres = "します";

		vPast = "しました";

		vVol = "しましょう";

		vVolPlain = "しよう";

		vTe = "して";

		vPassive = "される";

		vDesid = "したい";

		vCaus = "させる";

		vEba = "すれば";

		vRa = "したら";

		vPot = "(できる)";

		vIter = "したり";

		vSim = "しながら";

		vImp = "しろ";

		vNPPres = "しない";

		vNPPast = "しなかった";

		vNPres = "しません";

		vNPast = "しません でした";

		vNTe = "しなくて";

		vNPassive = "されない";

		vNDesid = "したく ない";

		vNCaus = "させない";

		vNEba = "しなければ";

		vNRa = "しなかったら";

		vNPot = "(できない)";



	}//buildSuru

	