var timing = false;
var curtime = 0.00;
var timeInterval = 10; //10 milliseconds
var updateTimerInterval = null;
var possibleFaces = ["F","U","R","D","B","L"];
var possibleAdditions = ["","'","2"];
var scrambleLength = 25;

$("html").on("keydown",function(ev){
	if(ev.which == 32){
		toggleTimer();
	}
});

var updateTimer = function(){
	curtime = ((new Date()).getTime() - startTime)/1000;
	$("#timer-text").html(toTwoDecimals(curtime));
};

function toTwoDecimals(n){
	n = Math.round(n*100)/100;
	t = n + '';
	if(n % 1 == 0){
		t += ".00";
	} else if (Math.abs(Math.abs(0.05 - (n % 0.1)) - 0.05) <= 0.001){
		t += "0";
	}
	return t;
}

function makeScramble(){
	scrambleList = [];
	for(var cnt = 0; cnt < scrambleLength; cnt++){
		nextMove = possibleFaces[parseInt(Math.random()*possibleFaces.length)] + possibleAdditions[parseInt(Math.random()*possibleAdditions.length)];
		while(!isValidNextMove(nextMove, scrambleList)){
			nextMove = possibleFaces[parseInt(Math.random()*possibleFaces.length)] + possibleAdditions[parseInt(Math.random()*possibleAdditions.length)];
		}
		scrambleList.push(nextMove);
	}
	return scrambleList.join(" ");
}

function isValidNextMove(move, scramble){
	if(scrambleList.length >= 2)
		if((possibleFaces.indexOf(scramble[scramble.length-2].substring(0,1)) - possibleFaces.indexOf(move.substring(0,1))) % 3 == 0)
			return false;
	if(scrambleList.length >= 1)
		if((possibleFaces.indexOf(scramble[scramble.length-1].substring(0,1)) - possibleFaces.indexOf(move.substring(0,1))) % 3 == 0)
			return false;
	return true;
}

function oppositeFace(face){
	return possibleFaces[(possibleFaces.indexOf(face) + 3) % 3]
}

function toggleTimer(){
	timing = !timing;
	if(timing){
		startTime = (new Date()).getTime();
		timerInterval = setInterval(updateTimer, timeInterval);
	} else {
		clearInterval(timerInterval);
		$("#scramble").html(makeScramble());
	}
}

function init(){
	$("#scramble").html(makeScramble());
}