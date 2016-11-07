var states = {
	"alabama":0,
	"labama":0,
	"albama":0,
	"alabma":0,
	"albaama":0,
	"alaabma":0,
	"alaska":1,
	"laska":1,
	"aalska":1,
	"laaska":1,
	"arizona":2,
	"rizona":2,
	"airzona":2,
	"arkansas":3,
	"rkansas":3,
	"akranas":3,
	"california":4,
	"alifornia":4,
	"califonria":4,
	"colorado":5,
	"olorado":5,
	"colarado":5,
	"coloraod":5,
	"connecticut":6,
	"onnecticut":6,
	"connecituct":6,
	"delaware":7,
	"elaware":7,
	"deleware":7,
	"florida":8,
	"lorida":8,
	"georgia":9,
	"eorgia":9,
	"goergia":9,
	"hawaii":10,
	"awaii":10,
	"hawiai":10,
	"idaho":11,
	"daho":11,
	"illinois":12,
	"llinois":12,
	"illiniois":12,
	"indiana":13,
	"ndiana":13,
	"indaina":13,
	"iowa":14,
	"owa":14,
	"kansas":15,
	"ansas":15,
	"kentucky":16,
	"entucky":16,
	"louisiana":17,
	"ouisiana":17,
	"maine":18,
	"aine":18,
	"maryland":19,
	"aryland":19,
	"massachusetts":20,
	"assachusetts":20,
	"michigan":21,
	"ichigan":21,
	"minnesota":22,
	"innesota":22,
	"mississippi":23,
	"ississippi":23,
	"missouri":24,
	"issouri":24,
	"montana":25,
	"ontana":25,
	"nebraska":26,
	"ebraska":26,
	"nevada":27,
	"evada":27,
	"new hampshire":28,
	"ew hampshire":28,
	"new jersey":29,
	"ew jersey":29,
	"new mexico":30,
	"ew mexico":30,
	"new york":31,
	"ew york":31,
	"north carolina":32,
	"orth carolina":32,
	"north dakota":33,
	"orth dakota":33,
	"ohio":34,
	"hio":34,
	"oklahoma":35,
	"klahoma":35,
	"oregon":36,
	"regon":36,
	"oreogn":36,
	"pennsylvania":37,
	"ennsylvania":37,
	"rhode island":38,
	"hode island":38,
	"south carolina":39,
	"outh carolina":39,
	"south dakota":40,
	"outh dakota":40,
	"tennessee":41,
	"ennessee":41,
	"texas":42,
	"exas":42,
	"utah":43,
	"tah":43,
	"vermont":44,
	"ermont":44,
	"virginia":45,
	"irginia":45,
	"washington":46,
	"ashington":46,
	"wahsingotn":46,
	"west virginia":47,
	"est virginia":47,
	"wisconsin":48,
	"isconsin":48,
	"wyoming":49,
	"yoming":49,
}

var strict_states = {
	"alabama":0,
	"alaska":1,
	"arizona":2,
	"arkansas":3,
	"california":4,
	"colorado":5,
	"connecticut":6,
	"delaware":7,
	"florida":8,
	"georgia":9,
	"hawaii":10,
	"idaho":11,
	"illinois":12,
	"indiana":13,
	"iowa":14,
	"kansas":15,
	"kentucky":16,
	"louisiana":17,
	"maine":18,
	"maryland":19,
	"massachusetts":20,
	"michigan":21,
	"minnesota":22,
	"mississippi":23,
	"missouri":24,
	"montana":25,
	"nebraska":26,
	"nevada":27,
	"new hampshire":28,
	"new jersey":29,
	"new mexico":30,
	"new york":31,
	"north carolina":32,
	"north dakota":33,
	"ohio":34,
	"oklahoma":35,
	"oregon":36,
	"pennsylvania":37,
	"rhode island":38,
	"south carolina":39,
	"south dakota":40,
	"tennessee":41,
	"texas":42,
	"utah":43,
	"vermont":44,
	"virginia":45,
	"washington":46,
	"west virginia":47,
	"wisconsin":48,
	"wyoming":49,
}

var correct_states = [
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


var added_states = [];
var timeLeft = 3;
var MAX_TIME = 3;
var playing = false;
var time = -0.1;
var bestAmount = 0;
var bestTime = 0;
var playable = true;
var USE_STRICT = true;


function focused(){
	document.getElementById("map").style.zIndex = 0;
	$(".header").animate({margin: 0}, 500, function(){});
	setTimeout(function(){$("#map").animate({opacity: 1}, 250, function(){}); }, 250);
}

function keyUp(){
	if(playable){
		if(!playing){
			updateTimer();
			updateTime();
		}
		// if(playing)
		var currentText = document.getElementById("input_box").value.toLowerCase().trim();//$("#input_box").val().toLowerCase().trim();
		console.log(currentText)
		console.log(added_states.indexOf(currentText))
		if(currentText in states && added_states.indexOf(currentText) < 0){
			timeLeft = MAX_TIME;
			displayTimer(timeLeft);
			document.getElementById("input_box").value = "";
			state_titlecased = correct_states[states[currentText]];
			p_state = document.getElementById("state_" + states[currentText]);
			p_state.innerHTML = state_titlecased;
			var final_left = p_state.style.left;
			var final_top = p_state.style.top;
			p_state.style.left = "50%";
			p_state.style.top = "0px";
			p_state.style.visibility = "visible";
			console.log(added_states)
			added_states.push(currentText);
			document.getElementById("current_amount_guessed").innerHTML = added_states.length + "/50";
			
			$("#state_" + states[currentText]).animate({left: final_left, top: final_top}, 500, function(){});
		}
	}
}

function clickOnDisabledInput(){
	if(!playing && document.getElementById("input_box").disabled){
		resetGame();
	}
}

function resetGame(){
	setTimeout(function(){playable = true;}, 250);
	for(var cnt = 0; cnt < 50; cnt++){
		document.getElementById("state_" + cnt).innerHTML = "";
		document.getElementById("state_" + cnt).style.visibility = "hidden";
		document.getElementById("state_" + cnt).style.color = "#EBEBEB";
	}
	added_states = [];
	document.getElementById("input_box").val = "";
	queried_p = document.querySelectorAll("#user_input p");
	for(var cnt = 0; cnt < queried_p.length; cnt++){
		if(parseInt(queried_p[cnt].getAttribute("class").substr(12)) > MAX_TIME)
			queried_p[cnt].style.visibility = "hidden";
		else
			queried_p[cnt].style.visibility = "visible";
	}
	updateRecord();
	playing = false;
	time = -0.1;
	timeLeft = MAX_TIME;
	document.getElementById("current_amount_guessed").innerHTML = "0/50";
	document.getElementById("input_box").disabled = false;
	document.getElementById("input_box").value = "";
	document.getElementById("input_box").focus();
}

function showAll(){
	for(var cnt = 0; cnt < 50; cnt++){
		document.getElementById("state_" + cnt).innerHTML = states[cnt];
		document.getElementById("state_" + cnt).style.visibility = "visible";
	}
}

function showRest(){
	var rest = findRest();
	for(var cnt = 0; cnt < rest.length; cnt++){
		state_titlecased = correct_states[states[rest[cnt]]]
		p_state = document.getElementById("state_" + states[rest[cnt]]);
		p_state.innerHTML = state_titlecased;
		var final_left = p_state.style.left;
		var final_top = p_state.style.top;
		p_state.style.left = "50%";
		p_state.style.top = "0px";
		p_state.style.color = "#FFA500";
		p_state.style.visibility = "visible";
		if((final_left == "480px" || final_left == "50%") && final_top == "0px"){
			continue;
		}
		$("#state_" + states[rest[cnt]]).animate({left: final_left, top: final_top}, 500, function(){});
	}
}

function findRest(){
	var rest = [];
	for(var cnt = 0; cnt < 50; cnt++)
		if(added_states.indexOf(correct_states[cnt].toLowerCase()) < 0){
			rest.push(correct_states[cnt].toLowerCase())
		}
	return rest;
}

function updateTimer(){
	displayTimer(timeLeft);
	if(timeLeft == 0){
		document.getElementById("input_box").disabled = true;
		document.getElementById("input_box").value = "ALT+R to restart";
		playable = false;
		playing = false;
		showRest();
		if(added_states.length == correct_states.length){
			localStorage.setItem("best","time");
			document.getElementById("current_amount_guessed").innerHTML = Math.round((time+0.1)*10)/10 + "s";
			bestTime = Math.min(Math.round((time+0.1)*10)/10, parseFloat(localStorage.getItem("time")));
			localStorage.setItem("time", bestTime);
		} else {
			bestAmount = Math.max(added_states.length, localStorage.getItem("amount"));
			localStorage.setItem("amount", bestAmount);
		}
		updateRecord();
	}
	if(timeLeft > 0){
		playing = true;
		if(added_states.length == correct_states.length){
			timeLeft = 0;
			updateTimer();
		}else{
			timeLeft -= 1;
			setTimeout(function(){updateTimer();}, 1000);
		}
	}
}

function updateRecord(){
	if(localStorage.getItem("best") == "time"){
		document.getElementById("record").innerHTML = "Your best is <span style=\"color:#FFA500\">" + localStorage.getItem("time") + "s</span> for all 50 states.";
	} else {
		if(localStorage.getItem("amount") != null)
			document.getElementById("record").innerHTML = "Your best is <span style=\"color:#FFA500\">" + localStorage.getItem("amount") + "</span> out of 50 states.";
		else
			document.getElementById("record").innerHTML = "You don't appear to have a record.";
	}
}

function displayTimer(time){
	queried_p = document.querySelectorAll("#user_input p");
	for(var cnt = 0; cnt < queried_p.length; cnt++){
		if(parseInt(queried_p[cnt].getAttribute("class").substr(12)) > time)
			queried_p[cnt].style.visibility = "hidden";
		else
			queried_p[cnt].style.visibility = "visible";

		if(time == 3){
			queried_p[cnt].style.color = "#0F0";
		} else if(time == 2){
			queried_p[cnt].style.color = "#FF0";
		} else if(time == 1){
			queried_p[cnt].style.color = "#F00";
		} else {
			queried_p[cnt].style.color = "#EBEBEB";
		}
	}
}

function updateTime(){
	time += 0.1;
	if(playing)
		setTimeout(function(){updateTime();}, 100);
}

function init(){
	updateRecord();
	if(localStorage.getItem("time") == null){
		localStorage.setItem("time",10000);
	}
	document.getElementById("input_box").value = "";
	var rx = /INPUT|SELECT|TEXTAREA/i;
	$(document).bind("keydown keypress", function(e){
	    if( e.which == 8 ){ // 8 == backspace
	        if(!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly ){
	            e.preventDefault();
	        }
	    }
	});
	if(USE_STRICT){
		states = strict_states;
	}
}