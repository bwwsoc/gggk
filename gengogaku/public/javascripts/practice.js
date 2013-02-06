	function practiceSetup () {
    	var kanaSet = buildRandomKanaSet();
    	var boxes = getBoxesArray();
    	var tmpEl;
    	var tmpIndex = Math.floor(Math.random() * boxes.length);
    	for (var i = 0; i < 8; i++) {
    		tmpEl = boxes.splice(tmpIndex, 1)[0];
	    	tmpEl.innerHTML = kanaSet[i].name;
	    	tmpEl.setAttribute("data-kId", kanaSet[i].intValue);
	    	tmpIndex = Math.floor(Math.random() * boxes.length);
    	}
    	for (var j = 0; j < 8; j++) {
    		tmpEl = boxes.splice(tmpIndex, 1)[0];
	    	tmpEl.innerHTML = kanaSet[j].uValue;
	    	tmpEl.setAttribute("data-kId", kanaSet[j].intValue);
	    	tmpIndex = Math.floor(Math.random() * boxes.length);
    	}
    	replay();
	}

    function buildRandomKanaSet() {
	    var kanaSet = [];
	    var tmpKana;
	    var uniqueKana;
	    var setComplete = false;
	    var tmpCounter = 0;
	    while (kanaSet.length < 8) {
		    tmpKana = getRandomKana();
		    uniqueKana = true;
		    for (var j = 0; j < kanaSet.length; j++) {
			    if (tmpKana.name === kanaSet[j].name) {
			    	console.log("tmpKana.name:" + tmpKana.name);
			    	console.log("kanaSet[j].name: " + kanaSet[j].name);
				    uniqueKana = false;
				    break;
			    }
		    }
		    if (uniqueKana === true) {
			    kanaSet.push(tmpKana);
		    }
	    }
	    return kanaSet;
    }


	var lastClickEl, el;
	var activeRound = false;
	var hits = 0;
	var misses = 0;
	
    function checkMe() {
    	var gameCompleteMsg;
    	el = this;
	    el.className += " activePracticeTile";
	    if (activeRound !== true) {
		    lastClickEl = el;
		    activeRound = true;
		    return;
	    }
	    else {
		    if (lastClickEl.getAttribute("data-kId") === el.getAttribute("data-kId")) {
			    hits++;
			    document.getElementById("hits").innerHTML = hits;
			    matchInfo(true);
			    el.className = "practiceBox solved";
				lastClickEl.className = "practiceBox solved";
				el.onclick = "";
				lastClickEl.onclick = "";
			    activeRound = false;
			    lastClick = "";
		    }
		    else {
			    misses++;
			    matchInfo(false);
			    document.getElementById("misses").innerHTML = misses;
			    el.className = "practiceBox";
				lastClickEl.className = "practiceBox";
			    activeRound = false;
			    lastClickEl = null;
			    
		    }
	    }
	    if ((hits + misses) === 8) {
	    	var successRate = (hits/8) * 100;
	    	gameCompleteMsg = "Game over. " + successRate + "% (" + hits + "/8)";
	    	document.getElementById("matchDisplay").className = "showMatchInfo";
	    	document.getElementById("matchDisplay").innerHTML = gameCompleteMsg;
		    removeAllPracticeClicks();
	    }
    }

    
    function matchInfo(match) {
    	var className, matchText;
    	if (match === true) {
	    	className = "showMatchInfo";
	    	matchText = "Match!";
    	}
    	else {
	    	className = "showNoMatchInfo";
	    	matchText = "No match";		    	
    	}
	    document.getElementById("matchDisplay").className = className;
	    document.getElementById("matchDisplay").innerHTML = matchText;
	    if ((hits + misses) < 8) setTimeout(function(){
	    	document.getElementById("matchDisplay").className = "hideMatchInfo";
	    }, 750)
    }
    
    function replay() {
	    hits = 0;
	    misses = 0;
	    resetBoxesStyle();
    	document.getElementById("misses").innerHTML = 0;
		document.getElementById("hits").innerHTML = 0;
	    document.getElementById("matchDisplay").className = "hideMatchInfo";
	    lastClickEl = null;
	    el = null;
    }
    
    function getBoxesArray() {
	    var boxes = [];
	    boxes.push(document.getElementById("box1"));
	    boxes.push(document.getElementById("box2"));
	    boxes.push(document.getElementById("box3"));
	    boxes.push(document.getElementById("box4"));
	    boxes.push(document.getElementById("box5"));
	    boxes.push(document.getElementById("box6"));
	    boxes.push(document.getElementById("box7"));
	    boxes.push(document.getElementById("box8"));
	    boxes.push(document.getElementById("box9"));
	    boxes.push(document.getElementById("box10"));
	    boxes.push(document.getElementById("box11"));
	    boxes.push(document.getElementById("box12"));
	    boxes.push(document.getElementById("box13"));
	    boxes.push(document.getElementById("box14"));
	    boxes.push(document.getElementById("box15"));
	    boxes.push(document.getElementById("box16"));
	    return boxes;
    }
    function resetBoxesStyle() {
    	var boxes = getBoxesArray();
	    for (var i = 0; i < boxes.length; i++) {
		    boxes[i].className = "practiceBox";
		    boxes[i].onclick = checkMe;
	    }
    }
    
    function removeAllPracticeClicks() {
    	var boxes = getBoxesArray();
	    for (var i = 0; i < boxes.length; i++) {
		    boxes[i].onclick = "";
	    }
	    
    }
