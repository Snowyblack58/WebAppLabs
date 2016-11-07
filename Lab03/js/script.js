var correctStates = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Pennsylvania",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming",
]

var correctCapitals = [
	"Montgomery",
	"Juneau",
	"Phoenix",
	"Little Rock",
	"Sacramento",
	"Denver",
	"Hartford",
	"Dover",
	"Tallahassee",
	"Atlanta",
	"Honolulu",
	"Boise",
	"Springfield",
	"Indianapolis",
	"Des Moines",
	"Topeka",
	"Frankfort",
	"Baton Rouge",
	"Augusta",
	"Annapolis",
	"Boston",
	"Lansing",
	"Saint Paul",
	"Jackson",
	"Jefferson City",
	"Helena",
	"Lincoln",
	"Carson City",
	"Concord",
	"Trenton",
	"Santa Fe",
	"Albany",
	"Raleigh",
	"Bismarck",
	"Columbus",
	"Oklahoma City",
	"Salem",
	"Harrisburg",
	"Providence",
	"Columbia",
	"Pierre",
	"Nashville",
	"Austin",
	"Salt Lake City",
	"Montpelier",
	"Richmond",
	"Olympia",
	"Charleston",
	"Madison",
	"Cheyenne",
]

var firstClicked = "";
var secondClicked = "";
var allStatesAndCapitals;
var correct = 0;
var total = 0;
var time = 0;
var timerInterval;

function trollolololol(){
	randomIndex = Math.floor(Math.random()*100);
	document.getElementById("capitals-list").removeChild(document.getElementById("capitals-list").childNodes[randomIndex]);
}

function buttonClicked(){
	if(this.style.background == "rgb(0, 204, 0)"){
		return;
	}
	this.style.background = "#FFAA00";
	if(firstClicked != ""){
		if(this.value == firstClicked){
			firstClicked = "";
			this.style.background = "#5A5A5A";
		} else {
			secondClicked = this.value;
		}
	} else {
		firstClicked = this.value;
	}
	console.log(firstClicked + " | " + secondClicked)
	if(firstClicked != "" && secondClicked != ""){
		total += 1;
		tFirst = firstClicked;
		tSecond = secondClicked;
		if(check()){
			index = Math.max(correctCapitals.indexOf(this.value), correctStates.indexOf(this.value));
			document.getElementById(correctCapitals[index]).style.background = "#0C0";
			document.getElementById(correctStates[index]).style.background = "#0C0";
			correct += 1;
			if(checkIfDone()){
				clearInterval(timerInterval);	
			}
		} else {
			firstClicked = "";
			secondClicked = "";
			document.getElementById(tFirst).style.background = "#F00";
			document.getElementById(tSecond).style.background = "#F00";
			redToNothing(tFirst);
			redToNothing(tSecond);
		}
		firstClicked = "";
		secondClicked = "";
		document.getElementById("scoreboard-text").innerHTML = correct + "/" + total + " (" + Math.round(correct/total*10000)/100 + "% )";
	}
}

function check(){
	if(((correctStates.indexOf(firstClicked) == correctCapitals.indexOf(secondClicked)) && (correctStates.indexOf(firstClicked) != -1)) || ((correctCapitals.indexOf(firstClicked) == correctStates.indexOf(secondClicked)) && correctCapitals.indexOf(firstClicked) != -1)){
		return true;
	}
}

function redToNothing(buttonid){
	if(buttonid == firstClicked){
		document.getElementById(buttonid).style.background = "#FA0";
		return;
	}	
	console.log("Method Called");
	buttonBackground = document.getElementById(buttonid).style.background;
	r = parseInt(buttonBackground.substring(4, buttonBackground.indexOf(",")));
	g = parseInt(buttonBackground.substring(1+buttonBackground.indexOf(","), buttonBackground.indexOf(",", buttonBackground.indexOf(",") + 1)).trim());
	b = parseInt(buttonBackground.substring(1+buttonBackground.lastIndexOf(","), buttonBackground.indexOf(")")).trim());
	console.log("Parsed Values:" + r + " " + g + " " + b);
	r -= 10;
	g += 10;
	b += 10;
	console.log("Changed Values");
	if(r < 90){
		r = 90;
	}
	if(g > 90){
		g = 90;	
	}
	if(b > 90){
		b = 90;	
	}
	console.log("Checked Bounds");
	document.getElementById(buttonid).style.background = "rgb(" + r + ", " + g + ", " + b + ")";
	console.log("Changed Color");
	if(Math.max(r, g, b) == Math.min(r, g, b)){
		console.log("In Return");
		return;
	}
	console.log("Call Helper");
	redToNothingHelper(buttonid);
		
}

function redToNothingHelper(buttonid){
	setTimeout(function(){redToNothing(buttonid);},50);
}

function updateTime(){
	time += 1;
	if(time%60 < 10){
		document.getElementById("timer-text").innerHTML = Math.floor(time/60) + ":0" + (time%60);
	} else {
		document.getElementById("timer-text").innerHTML = Math.floor(time/60) + ":" + (time%60);
	}
}

function checkIfDone(){
	for(var cnt = 0; cnt < 100; cnt++){
		if(document.getElementById(allStatesAndCapitals[cnt]).style.background != "rgb(0, 204, 0)"){
			return false;
		}
	}
	bestTime = localStorage.getItem("http://www.tjhsst.edu/~2016dzhao/Lab03/capitals.html-bestTime");
	bestAmount = localStorage.getItem("http://www.tjhsst.edu/~2016dzhao/Lab03/capitals.html-bestAmount");
	if(time < bestTime){
		localStorage.setItem("http://www.tjhsst.edu/~2016dzhao/Lab03/capitals.html-bestTime", time);
	}
	if(total < bestAmount){
		localStorage.setItem("http://www.tjhsst.edu/~2016dzhao/Lab03/capitals.html-bestAmount", total);
	}
	updateRecord();
	return true;
}

function updateRecord(){
	bestTime = localStorage.getItem("http://www.tjhsst.edu/~2016dzhao/Lab03/capitals.html-bestTime");
	bestAmount = localStorage.getItem("http://www.tjhsst.edu/~2016dzhao/Lab03/capitals.html-bestAmount");
	if(bestTime == null){
		console.log("9001-1");
		localStorage.setItem("http://www.tjhsst.edu/~2016dzhao/Lab03/capitals.html-bestTime", 9001);
	}
	if(bestAmount == null){
		console.log("9001-2");
		localStorage.setItem("http://www.tjhsst.edu/~2016dzhao/Lab03/capitals.html-bestAmount", 9001);
	}
	document.getElementById("record-percentage").innerHTML = "Your best percentage is <span style=\"color:#FFA500\">50/" + bestAmount + " (" + Math.round(50/bestAmount*10000)/100 + "%)</span>.";
	document.getElementById("record-time").innerHTML = "Your best time is <span style=\"color:#FFA500\">" + bestTime + "s</span>."
}

function reset(){
	if(!checkIfDone())
		return;
	firstClicked = "";
	secondClicked = "";
	allStatesAndCapitals = joinAndShuffle(correctStates, correctCapitals);
	time = 0;
	total = 0;
	correct = 0;
	removeAllStatesAndCapitals()
	addAllStatesAndCapitals(allStatesAndCapitals);
	document.getElementById("scoreboard-text").innerHTML = "0/0";
	document.getElementById("timer-text").innerHTML = "0:00";
	clearInterval(timerInterval)
	timerInterval = setInterval(function(){ updateTime(); }, 1000);
}

function joinAndShuffle(l1, l2){
	allStatesAndCapitals = l1.concat(l2);
	allStatesAndCapitals.sort(function(){
		return Math.random() - 0.5;
	});
	return allStatesAndCapitals;
}

function addAllStatesAndCapitals(allStatesAndCapitals){
	var capitalsListDiv = document.getElementById("capitals-list")
	for(var cnt = 0; cnt < 100; cnt++){
		var input = document.createElement("input");
		input.type = "button";
		input.value = allStatesAndCapitals[cnt];
		input.onclick = buttonClicked;
		input.id = allStatesAndCapitals[cnt];
		input.class = "state-and-capital-button";
		input.style.background = "rgb(90, 90, 90)";
		capitalsListDiv.appendChild(input)
	}
}

function removeAllStatesAndCapitals(){
	while(document.getElementById("capitals-list").firstChild) {
		document.getElementById("capitals-list").removeChild(document.getElementById("capitals-list").firstChild);
	}
}

function init(){
	updateRecord();
	allStatesAndCapitals = joinAndShuffle(correctStates, correctCapitals);
	addAllStatesAndCapitals(allStatesAndCapitals);
	document.getElementById("start-button").children[0].disabled = true;
	document.getElementById("start-button").children[0].value = "Alt-R to Restart";
	timerInterval = setInterval(function(){ updateTime(); }, 1000);
}
updateRecord();