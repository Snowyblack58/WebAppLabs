var citiesByState = {
	"alabama":["Selma","Same-sex marriage center","Also where fetuses can have attorneys"],
	"alaska":["Juneau","Palinbackyard","Putinland","Polar bears aren't endangered; they're unlucky!","Valdez Oil Spill Reserves"],
	"arizona":["Phoenix","Phoenix University","Proudly Shooting-Free Since 5 Minutes Ago","Wildcats"],
	"arkansas":["Huck Finn","Judge Attacked By Zebra, Police Involved, No One Shot"],
	"california":["San Francisco Bae","Berkeley, the most conversvative place in the world"],
	"colorado":["The Boulder Has Arrived"],
	"connecticut":[""],
	"delaware":[""],
	"florida":["Beach #1","Beach #2","Beach #3","Underwater Beach #1 (in a few years)"],
	"georgia":[""],
	"hawaii":["Obamacity","Hulunono"],
	"idaho":["Boys-e"],
	"illinois":[""],
	"indiana":[""],
	"iowa":["Politi City"],
	"kansas":["Don't think we're in Kansas anymore."],
	"kentucky":[""],
	"louisiana":[""],
	"maine":[""],
	"maryland":[""],
	"massachusetts":["Bwastan"],
	"michigan":["Detroit (safest city in America)"],
	"minnesota":[""],
	"mississippi":["Jackson"],
	"missouri":["Ferguson"],
	"montana":["Hannah"],
	"nebraska":["Lincoln Motor Company"],
	"nevada":["Las Vegas Baby"],
	"new hampshire":[""],
	"new jersey":["Rather large","Bridges"],
	"new mexico":["Breaking Bad"],
	"new york":["New York City (a population greater than all of Israel)","Niagara Falls (a population less than Samoa, but 100 times more voting rights)"],
	"north carolina":[""],
	"north dakota":["Mt.Rushmore?","Canada"],
	"ohio":["OSU"],
	"oklahoma":["The most liberal place in the world"],
	"oregon":[""],
	"pennsylvania":[""],
	"rhode island":["Rogue Island"],
	"south carolina":[""],
	"south dakota":["Wait, this is a state?"],
	"tennessee":["Worstpickupline"],
	"texas":["Houston","Austin","Dallas","Mexico","McDonald's"],
	"utah":["Romneycity"],
	"vermont":[""],
	"virginia":[""],
	"washington":[""],
	"west virginia":[""],
	"wisconsin":[""],
	"wyoming":[""],
};

function willAnswerChanged(){
	document.getElementById("state").style.visibility = "visible";
	document.getElementById("city").style.visibility = "visible";
	if(document.getElementById("will-answer-form").children[0].checked){
		document.getElementsByName("state-select")[0].size = 0;
		document.getElementsByName("city-select")[0].size = 5;
	} else {
		document.getElementsByName("state-select")[0].size = 5;
		document.getElementsByName("city-select")[0].size = 0;
	}
		stateChanged()
}

function stateChanged(){
	var stateSelected = document.getElementsByName("state-select")[0].value.toLowerCase();
	var listOfCities = citiesByState[stateSelected];
	var citySelect = document.getElementsByName("city-select")[0];
	while (citySelect.firstChild) {
	    citySelect.removeChild(citySelect.firstChild);
	}
	for(var cnt = 0; cnt < listOfCities.length; cnt++){
		citySelect.innerHTML += "<option>" + listOfCities[cnt] + "</option>";
	}
}