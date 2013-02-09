function tryDateTime(dEvent) {
	if (dEvent === "bos") {
    	document.getElementById("anyMonthIn2").value = 10;
    	document.getElementById("anyDayIn2").value = 21;
    	document.getElementById("anyYearIn2").value = 1600;
    	document.getElementById("newDateTimeBtn").click();	    		
	}
	if (dEvent === "a11") {
    	document.getElementById("anyMonthIn2").value = 7;
    	document.getElementById("anyDayIn2").value = 20;
    	document.getElementById("anyYearIn2").value = 1969;
    	document.getElementById("newDateTimeBtn").click();	    		
	}
	
}

function getNewDateTime() {
	var tmpYear = document.getElementById("anyYearIn2").value;
	var tmpMonth = document.getElementById("anyMonthIn2").value;
	var tmpDay = document.getElementById("anyDayIn2").value;
	var tmpDate = new Date(tmpYear, tmpMonth, tmpDay);
	var jDate = new Hizuke(tmpDate);
	document.getElementById("dateRomaji").innerHTML = jDate.dateR;
	document.getElementById("dateKanji").innerHTML = jDate.dateK;
	document.getElementById("impYearR").innerHTML = jDate.currentImperialYear[0];
	document.getElementById("impYearK").innerHTML = jDate.currentImperialYear[1];
}

function getNewTime() {
	var tmpHour = document.getElementById("anyHourIn2").value;
	var tmpMin = document.getElementById("anyMinIn2").value;
	var tmpAMPM = document.getElementById("anyAmPmIn2").value;
	var fullHour = parseInt(tmpHour) + parseInt(tmpAMPM);
	var tmpDate = new Date(1970, 1, 1, fullHour, tmpMin, 0, 0);
	var jDate = new Hizuke(tmpDate);
	document.getElementById("anyTimeRomaji").innerHTML = jDate.timeR;
	document.getElementById("anyTimeKanji").innerHTML = jDate.timeK;
	
}