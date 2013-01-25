var year = null;
function getTheDate() {
	var localDate = new Date();
	year = localDate.getFullYear();
	var month = localDate.getMonth() + 1;
	var today = localDate.getDate();
	var hours = localDate.getHours();
	var hours12 = (hours >12) ? hours -12 :hours;
	var minutes = localDate.getMinutes();
	var seconds = localDate.getSeconds();
	var thisDate = "" + month +"/"+ today + "/" + year;
	var thisTime = "" + ((hours >12) ? hours -12 :hours);
	thisTime += ((minutes < 10) ? ":0" : ":") + minutes;
	thisTime += ((seconds < 10) ? ":0" : ":") + seconds;
	thisTime += (hours >= 12) ? " pm" : " am";

	// romaji
	var weekDayArray = getWeekDay(localDate.getDay());
	var yearR = doYearRomaji(year);
	var yearK = doYearKanji(year);
	var monthJ = doMonthJ(month);
	var dayJ = doDayJ(today);
	var hoursJ = doHoursJ(hours12);
	var minutesJ = doMinutesJ(minutes);
	var amPmJ = setAmPmJ(hours);
	var dateR = yearR + " "  + monthJ[0] + " "  + dayJ[0];
	var dateK = yearK + " " + monthJ[1] + " " + dayJ[1];
	var currentImperialYear = getImperial(year);
	document.getElementById("dow").innerHTML=weekDayArray[0];
	document.getElementById("date").innerHTML=thisDate;
	document.getElementById("time").innerHTML=thisTime;
	document.getElementById("dowR").innerHTML=weekDayArray[1];
	document.getElementById("dateR").innerHTML=dateR;
	document.getElementById("timeR").innerHTML=amPmJ[0] + " " + hoursJ[0] + " " + minutesJ[0];
	document.getElementById("iYearR").innerHTML=currentImperialYear[0];
	document.getElementById("dowK").innerHTML=weekDayArray[2];
	document.getElementById("dateK").innerHTML=dateK;
	document.getElementById("timeK").innerHTML=amPmJ[1] + " " + hoursJ[1] + " " + minutesJ[1];
	document.getElementById("iYearK").innerHTML=currentImperialYear[1];
}//getDate

function getAnyDate() {
	var anyMonth = parseInt(document.form1.anyMonthIn.value);
	var anyDay = document.form1.anyDayIn.value;
	var anyYear = document.form1.anyYearIn.value;
	var anyMonthJ = doMonthJ(anyMonth);
	var anyDayJ = doDayJ(anyDay);
	var anyYearR = doYearRomaji(anyYear);
	var anyYearK = doYearKanji(anyYear);
	var anyDateR = anyYearR + " "  + anyMonthJ[0] + " "  + anyDayJ[0];
	var anyDateK = anyYearK + " " + anyMonthJ[1] + " " + anyDayJ[1];
	var imperialYear = getImperial(anyYear);
	document.form1.anyDateRomajiTF.value = anyDateR;
	document.form1.anyDateKanjiTF.value = anyDateK;
	document.form1.imperialRomajiTF.value = imperialYear[0];
	document.form1.imperialKanjiTF.value = imperialYear[1];
}

function getAnyTime() {
	var anyHour = parseInt(document.form1.anyHourIn.value);
	var anyMinute = parseInt(document.form1.anyMinuteIn.value);
	var anyAmPm = parseInt(document.form1.anyAmPmIn.value);
	var anyHoursJ = doHoursJ(anyHour);
	var anyMinutesJ = doMinutesJ(anyMinute);
	var anyAmPmJ = setAmPmJ(anyAmPm+anyHour);
	document.form1.anyTimeRomajiTF.value = anyAmPmJ[0] + " " + anyHoursJ[0] + " " + anyMinutesJ[0];
	document.form1.anyTimeKanjiTF.value = anyAmPmJ[1] + " " + anyHoursJ[1] + " " + anyMinutesJ[1];
}

function getImperial(aYear) {
	var imperial = [];
	var eraYear;
	if (aYear > 1988) {
		eraYear = aYear - 1988;
		switch (eraYear) {
			case 1:
				imperial[0] = "Heisei gannen";
				imperial[1] = "平成 元年";
				break;
			default:
				imperial[0] = "Heisei " + doYearRomaji(eraYear);
				imperial[1] = "平成 " + doYearKanji(eraYear);
		}//switch	
	}//if > 1988
	else if (aYear > 1925 && aYear < 1989) {
		eraYear = aYear - 1925;
		switch (eraYear) {
			case 1:
				imperial[0] = "Shoowa gannen";
				imperial[1] = "昭和 元年";
				break;
			default:
				imperial[0] = "Shoowa " + doYearRomaji(eraYear);
				imperial[1] = "昭和 " + doYearKanji(eraYear);
		}//switch	
	}//if > 1925
	else if (aYear > 1911 && aYear < 1926) {
		eraYear = aYear - 1911;
		switch (eraYear) {
			case 1:
				imperial[0] = "Taishoo gannen";
				imperial[1] = "大正 元年";
				break;
			default:
				imperial[0] = "Taishoo " + doYearRomaji(eraYear);
				imperial[1] = "大正 " + doYearKanji(eraYear);
		}//switch	
	}//if > 1911
	else if (aYear > 1867 && aYear < 1912) {
		eraYear = aYear - 1867;
		switch (eraYear) {
			case 1:
				imperial[0] = "Meiji gannen";
				imperial[1] = "明治 元年";
				break;
			default:
				imperial[0] = "Meiji " + doYearRomaji(eraYear);
				imperial[1] = "明治 " + doYearKanji(eraYear);
		}//switch	
	}//if > 1911
	else {
				imperial[0] = "Before Imperial Calendar began";
				imperial[1] = "Before Imperial Calendar began";
		
	}
	return imperial;
}

function setAmPmJ(newHours) {
	var thisAmPmJ = [];
	if (newHours < 12) {
		thisAmPmJ[0] = "gozen";
		thisAmPmJ[1] = "午前";
	}
	else {
		thisAmPmJ[0] = "gogo";
		thisAmPmJ[1] = "午後";
	}
	return thisAmPmJ;
}

function doMinutesJ(newMinutes) {
	var tempMinutesBig = checkMinutesBig(newMinutes);
	if (tempMinutesBig !== false) return tempMinutesBig;
	if (newMinutes < 10) newMinutes = "0" + newMinutes;
	var minutesArray = breakNumber(newMinutes);
	var minutes = [];
	minutes[0] = setMinutesRomaji(minutesArray);
	minutes[1] = setMinutesKanji(minutesArray);
	return minutes;
}
function setMinutesRomaji(newMinutesArray) {
	var newMinutesR = "";
	switch(parseInt(newMinutesArray[0])) {
		case 0:
			newMinutesR = "";
			break;
		case 1:
			newMinutesR = "ippun";
			break;
		case 2:
			newMinutesR = "nifun";
			break;
		case 3:
			newMinutesR = "sanpun";
			break;
		case 4:
			newMinutesR = "yonpun";
			break;
		case 5:
			newMinutesR = "gofun";
			break;
		case 6:
			newMinutesR = "roppun";
			break;
		case 7:
			newMinutesR = "nanafun";
			break;
		case 8:
			newMinutesR = "happun";
			break;
		case 9:
			newMinutesR = "kyuufun";
			break;
	}
	newMinutesR = setTensRomaji(newMinutesArray[1]) + newMinutesR; 
	return newMinutesR;
}
function checkMinutesBig(newMinutes) {
	var bigMinutes = [];
	switch(newMinutes) {
		case 00:
			bigMinutes[0] = "";
			bigMinutes[1] = "";
			break;
		case 10:
			bigMinutes[0] = "juppun";
			bigMinutes[1] = "十分";
			break;
		case 20:
			bigMinutes[0] = "nijuppun";
			bigMinutes[1] = "ニ十分";
			break;
		case 30:
			bigMinutes[0] = "sanjuppon";
			bigMinutes[1] = "三十分";
			break;
		case 40:
			bigMinutes[0] = "yonjuppon";
			bigMinutes[1] = "四十分";
			break;
		case 50:
			bigMinutes[0] = "gojuppon";
			bigMinutes[1] = "五十分";
			break;
		default: return false;
	}
	return bigMinutes;
}

function setMinutesKanji(newMinutesArray) {
	var minutesKanji = setTensKanji(newMinutesArray[1]) + setOnesKanji(newMinutesArray[0])+"分";
	return minutesKanji;
	
}

function doHoursJ(newHours) {
	var hoursJ = [];
	switch(newHours) {
		case 0:
			hoursJ[0] = "juuniji";
			hoursJ[1] = "十ニ時";
			break;
		case 1:
			hoursJ[0] = "ichiji";
			hoursJ[1] = "一時";
			break;
		case 2:
			hoursJ[0] = "niji";
			hoursJ[1] = "ニ時";
			break;
		case 3:
			hoursJ[0] = "sanji";
			hoursJ[1] = "三時";
			break;
		case 4:
			hoursJ[0] = "yoji";
			hoursJ[1] = "四時";
			break;
		case 5:
			hoursJ[0] = "goji";
			hoursJ[1] = "五時";
			break;
		case 6:
			hoursJ[0] = "rokuji";
			hoursJ[1] = "六時";
			break;
		case 7:
			hoursJ[0] = "shichiji";
			hoursJ[1] = "七時";
			break;
		case 8:
			hoursJ[0] = "hachiji";
			hoursJ[1] = "八時";
			break;
		case 9:
			hoursJ[0] = "kuji";
			hoursJ[1] = "九時";
			break;
		case 10:
			hoursJ[0] = "juuji";
			hoursJ[1] = "十時";
			break;
		case 11:
			hoursJ[0] = "juuichiji";
			hoursJ[1] = "十一時";
			break;
		case 12:
			hoursJ[0] = "juuniji";
			hoursJ[1] = "十ニ時";
			break;
	}
	return hoursJ;
}

function getWeekDay(dayNumber) {
	var thisWeekDay = [];
	switch(dayNumber) {
		case 0:
		thisWeekDay[0] = "Sunday";
		thisWeekDay[1] = "Nichiyoobi";
		thisWeekDay[2] = "日曜日";
		break;
		case 1:
		thisWeekDay[0] = "Monday";
		thisWeekDay[1] = "Getsuyoobi";
		thisWeekDay[2] = "月曜日";
		break;
		case 2:
		thisWeekDay[0] = "Tuesday";
		thisWeekDay[1] = "Kayoobi";
		thisWeekDay[2] = "火曜日";
		break;
		case 3:
		thisWeekDay[0] = "Wednesday";
		thisWeekDay[1] = "Suiyoobi";
		thisWeekDay[2] = "水曜日";
		break;
		case 4:
		thisWeekDay[0] = "Thursday";
		thisWeekDay[1] = "Mokuyoobi";
		thisWeekDay[2] = "木曜日";
		break;
		case 5:
		thisWeekDay[0] = "Friday";
		thisWeekDay[1] = "Kinyoobi";
		thisWeekDay[2] = "金曜日";
		break;
		case 6:
		thisWeekDay[0] = "Saturday";
		thisWeekDay[1] = "Doyoobi";
		thisWeekDay[2] = "土曜日";
		break;
	}//switch
	return thisWeekDay;
}

function doMonthJ(aNumber) {
	var thisMonthJ = [];
	switch(aNumber) {
		case 1: 
			thisMonthJ[0] = "Ichigatsu";
			thisMonthJ[1] = "一月";
			break;
		case 2:	
			thisMonthJ[0] = "Nigatsu";
			thisMonthJ[1] = "二月";
			break;
		case 3: 
			thisMonthJ[0] = "Sangatsu";
			thisMonthJ[1] = "三月";
			break;
		case 4: 
			thisMonthJ[0] = "Shigatsu";
			thisMonthJ[1] = "四月";
			break;
		case 5: 
			thisMonthJ[0] = "Gogatsu";
			thisMonthJ[1] = "五月";
			break;
		case 6: 
			thisMonthJ[0] = "Rokugatsu";
			thisMonthJ[1] = "六月";
			break;
		case 7: 
			thisMonthJ[0] = "Shichigatsu";
			thisMonthJ[1] = "七月";
			break;
		case 8: 
			thisMonthJ[0] = "Hachigatsu";
			thisMonthJ[1] = "八月";
			break;
		case 9: 
			thisMonthJ[0] = "Kugatsu";
			thisMonthJ[1] = "九月";
			break;
		case 10: 
			thisMonthJ[0] = "Juugatsu";
			thisMonthJ[1] = "十月";
			break;
		case 11: 
			thisMonthJ[0] = "Juuichigatsu";
			thisMonthJ[1] = "十一月";
			break;
		case 12: 
			thisMonthJ[0] = "Juunigatsu";
			thisMonthJ[1] = "十二月";
			break;
	}
	return thisMonthJ;
}

function doDayJ(aNumber) {
	aNumber = aNumber + "";
	var thisDayJ = [];
	var thisDayArray = breakNumber(aNumber);
	switch (aNumber) {
		case "1":
			thisDayJ[0] = "tsuitachi";
			thisDayJ[1] = "一日";
			break;
		case "2":
			thisDayJ[0] = "futsuka";
			thisDayJ[1] = "二日";
			break;
		case "3":
			thisDayJ[0] = "mikka";
			thisDayJ[1] = "三日";
			break;
		case "4":
			thisDayJ[0] = "yokka";
			thisDayJ[1] = "四日";
			break;
		case "5":
			thisDayJ[0] = "itsuka";
			thisDayJ[1] = "五日";
			break;
		case "6":
			thisDayJ[0] = "muika";
			thisDayJ[1] = "六日";
			break;
		case "7":
			thisDayJ[0] = "nanoka";
			thisDayJ[1] = "七日";
			break;
		case "8":
			thisDayJ[0] = "yooka";
			thisDayJ[1] = "八日";
			break;
		case "9":
			thisDayJ[0] = "kokonoka";
			thisDayJ[1] = "九日";
			break;
		case "10":
			thisDayJ[0] = "tooka";
			thisDayJ[1] = "十日";
			break;
		case "14":
			thisDayJ[0] = "juuyokka";
			thisDayJ[1] = "十四日";
			break;
		case "20":
			thisDayJ[0] = "hatsuka";
			thisDayJ[1] = "ニ十日";
			break;
		case "24":
			thisDayJ[0] = "nijuuyokka";
			thisDayJ[1] = "ニ十四日";
			break;
		default:
			thisDayJ[0] = setTensRomaji(thisDayArray[1]) + setOnesRomaji(thisDayArray[0]) + "nichi";
			thisDayJ[1] = setTensKanji(thisDayArray[1]) + setOnesKanji(thisDayArray[0]) + "日";
		}//switch
	return thisDayJ;	
}

function doYearRomaji(newYear) {
	var newYearArray = breakNumber(newYear);
	var yearRomaji = null;
	var tempBig = checkBig(newYear);
	if (tempBig !== "false") return tempBig + "nen";
	if (newYearArray.length === 1) yearRomaji = setOnesRomaji(newYearArray[0]) + "nen";
	 if (newYearArray.length === 2) {
		yearRomaji = setTensRomaji(newYearArray[1]) + " " + setOnesRomaji(newYearArray[0]) + "nen";
	}
	 if (newYearArray.length === 3) {
		yearRomaji =  setHundredsRomaji(newYearArray[2]) + " " + setTensRomaji(newYearArray[1]) + " " + setOnesRomaji(newYearArray[0]) + "nen";
	}
	 if (newYearArray.length === 4) {
		yearRomaji =  setThousandsRomaji(newYearArray[3]) + "" + setHundredsRomaji(newYearArray[2]) + " " + setTensRomaji(newYearArray[1]) + "" + setOnesRomaji(newYearArray[0]) + "nen";
	}
	 if (newYearArray.length === 5) {
		yearRomaji =  setTenThousandsRomaji(newYearArray[4]) + " " + setThousandsRomaji(newYearArray[3]) + " " + setHundredsRomaji(newYearArray[2]) + " " + setTensRomaji(newYearArray[1]) + " " + setOnesRomaji(newYearArray[0]) + "nen";
	}	
	return yearRomaji;
}

function doYearKanji(newYear) {
	var newYearArray = breakNumber(newYear);
	var yearKanji = null;
	var tempBig = checkBigKanji(newYear);
	if (tempBig !== "false") return tempBig + "年";
	if (newYearArray.length === 1) yearKanji = setOnesKanji(newYearArray[0]) + "年";
	 if (newYearArray.length === 2) {
		yearKanji = setTensKanji(newYearArray[1]) + setOnesKanji(newYearArray[0]) + "年";
	}
	 if (newYearArray.length === 3) {
		yearKanji =  setHundredsKanji(newYearArray[2]) + setTensKanji(newYearArray[1]) + " " + setOnesKanji(newYearArray[0]) + "年";
	}
	 if (newYearArray.length === 4) {
		yearKanji =  setThousandsKanji(newYearArray[3]) + setHundredsKanji(newYearArray[2]) + setTensKanji(newYearArray[1]) + setOnesKanji(newYearArray[0]) + "年";
	}
	return yearKanji;
}

function checkBig(aNumber) {
	switch (aNumber) {
		case "0": return "zero";
		case "10": return "juu";
		case "100": return "hyaku";
		case "1000": return "sen";
		case "10000": return "ichiman";
		case "100000": return "juuman";
		case "1000000": return "hyakuman";
		default: return "false";
	}

}

/* Kanji */

function checkBigKanji(aNumber) {
	switch (aNumber) {
		case "0": return "ゼロ";
		case "10": return "十";
		case "100": return "百";
		case "1000": return "千";
		case "10000": return "一万";
		case "100000": return "十万";
		case "1000000": return "百万";
		default: return "false";
	}

}

