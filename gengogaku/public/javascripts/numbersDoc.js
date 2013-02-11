var placeValue = null;
var numberLength = null;
var thisNumber = null;
var thisNumberKanji = null;

function setupNumbers(newNumber) {
	thisNumber = newNumber.toString();
	numberLength = thisNumber.length;
	placeValue = breakNumber(thisNumber);
	qp("placeValue.length: " + placeValue.length);
}

	
function translateNumberNew() {
	var localNumberKanji = doNumberKanji();
	document.getElementById("numberRomajiTF").innerHTML = doNumberRomaji();
	document.getElementById("flatCounterRomajiTF").innerHTML = doFlatCounterRomaji();
	document.getElementById("longCounterRomajiTF").innerHTML = doLongCounterRomaji();
	document.getElementById("peopleRomajiTF").innerHTML = doPeopleRomaji();
	document.getElementById("generalRomajiTF").innerHTML = doGeneralRomaji();
	document.getElementById("ageYearsRomajiTF").innerHTML = doAgeYearsRomaji();
	document.getElementById("booksRomajiTF").innerHTML = doBooksRomaji();
	document.getElementById("smallRomajiTF").innerHTML = doSmallRomaji();
	document.getElementById("floorsRomajiTF").innerHTML = doFloorsRomaji();
	document.getElementById("animalsLRomajiTF").innerHTML = doAnimalsLRomaji();
	document.getElementById("animalsSRomajiTF").innerHTML = doAnimalsSRomaji();
	document.getElementById("animalsFRomajiTF").innerHTML = doAnimalsFRomaji();
	document.getElementById("numberKanjiTF").innerHTML = doNumberKanji();
	document.getElementById("peopleKanjiTF").innerHTML = localNumberKanji + "人";
	document.getElementById("longCounterKanjiTF").innerHTML = localNumberKanji + "本";
	document.getElementById("booksKanjiTF").innerHTML = localNumberKanji + "冊";
	document.getElementById("generalKanjiTF").innerHTML = localNumberKanji;
	document.getElementById("animalsSKanjiTF").innerHTML = localNumberKanji + "匹";
	document.getElementById("ageYearsKanjiTF").innerHTML = localNumberKanji + "才";
	document.getElementById("smallKanjiTF").innerHTML = localNumberKanji + "個";
	document.getElementById("floorsKanjiTF").innerHTML = localNumberKanji + "階";
	document.getElementById("flatCounterKanjiTF").innerHTML = localNumberKanji + "枚";
	
}//translateNumber

function doCounters2() {
	setupNumbers(document.getElementById("numberInput").value );
	translateNumberNew();
}


function doCounters() {
	setupNumbers(document.form1.numberInput.value);
	translateNumber();
}
function tryNumber(el) {
	document.getElementById("numberInput").value = el.innerHTML;
	document.getElementById("buildNumCtrs").click();
}

function listNumbers() {
    var numberList = "";
    for (var i = 1; i < 51; i++) {
	    setupNumbers(i);
	    numberList += doNumberRomaji(i) + "\n";
    }
	document.getElementById("counterListTA").value = numberList;
}
function listPeople() {
    var numberList = "";
    for (var i = 1; i < 51; i++) {
	    setupNumbers(i);
	    numberList += doPeopleRomaji(i) + "\n";
    }
	document.getElementById("counterListTA").value = numberList;
}



function translateNumber() {
	document.form1.numberRomajiTF.value = doNumberRomaji();
	document.form1.flatCounterRomajiTF.value = doFlatCounterRomaji();
	document.form1.longCounterRomajiTF.value = doLongCounterRomaji();
	document.form1.peopleRomajiTF.value = doPeopleRomaji();
	document.form1.generalRomajiTF.value = doGeneralRomaji();
	document.form1.ageYearsRomajiTF.value = doAgeYearsRomaji();
	document.form1.booksRomajiTF.value = doBooksRomaji();
	document.form1.smallRomajiTF.value = doSmallRomaji();
	document.form1.floorsRomajiTF.value = doFloorsRomaji();
	document.form1.animalsLRomajiTF.value = doAnimalsLRomaji();
	document.form1.animalsSRomajiTF.value = doAnimalsSRomaji();
	document.form1.animalsFRomajiTF.value = doAnimalsFRomaji();
	document.form1.numberKanjiTF.value = doNumberKanji();
	document.form1.peopleKanjiTF.value = thisNumberKanji + "人";
	document.form1.longCounterKanjiTF.value = thisNumberKanji + "本";
	document.form1.booksKanjiTF.value = thisNumberKanji + "冊";
	document.form1.generalKanjiTF.value = thisNumberKanji;
	document.form1.animalsSKanjiTF.value = thisNumberKanji + "匹";
	document.form1.ageYearsKanjiTF.value = thisNumberKanji + "才";
	//document.form1.animalsLKanjiTF.value = thisNumberKanji + "";
	document.form1.smallKanjiTF.value = thisNumberKanji + "個";
	document.form1.floorsKanjiTF.value = thisNumberKanji + "階";
	//document.form1.animalsFKanjiTF.value = thisNumberKanji + "";
	document.form1.flatCounterKanjiTF.value = thisNumberKanji + "枚";
	
}//translateNumber
