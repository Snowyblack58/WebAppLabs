//-----VARS
var descriptions = ["literally more devices than countries I can name (or spell)",
					"♥",
					"learning the origins of all suffering",
					"we don't take tests, we celebrate our knowledge",
					"being interested but still on the verge of sleeping",
					"turn in an essay four times, only on the last time does he read my second paragraph and decide he doesn't like it",
					"summary of first semester - adultery"];


//-----MAIN
var matches = document.querySelectorAll("#classes li");
for(var cnt=0; cnt<matches.length; cnt++){
	matches[cnt].onmouseenter =	function(){
			if(this.innerHTML != "∗"){
				for(var i = 0; i < this.parentNode.getElementsByTagName("li").length; i++){
					this.parentNode.getElementsByTagName("li")[i].style.color="#EBEBEB";
				}
				this.style.color="#FFA500";
				switch(this.id){
					case "mobile-app-development":
						document.getElementById("description").innerHTML = descriptions[0];
						break;
					case "band":
						document.getElementById("description").innerHTML = descriptions[1];
						break;
					case "ap-physics":
						document.getElementById("description").innerHTML = descriptions[2];
						break;
					case "ap-us-history":
						document.getElementById("description").innerHTML = descriptions[3];
						break;
					case "ap-calculus-bc":
						document.getElementById("description").innerHTML = descriptions[4];
						break;
					case "artificial-intelligence-1":
						document.getElementById("description").innerHTML = descriptions[5];
						break;
					case "english-11":
						document.getElementById("description").innerHTML = descriptions[6];
						break;
					default:
						break;
				}
			}
		};
}

//-----FOOTER
document.getElementById("a").onmouseenter = function(){ for(var cnt=0; cnt<document.getElementsByTagName("a").length; cnt++){ document.getElementsByTagName("a")[cnt].style.background = "#666"; }};
document.getElementById("a").onmouseleave = function(){ for(var cnt=0; cnt<document.getElementsByTagName("a").length; cnt++){ document.getElementsByTagName("a")[cnt].style.background = ""; }}
document.getElementById("ul").onmouseenter = function(){ for(var cnt=0; cnt<document.getElementsByTagName("ul").length; cnt++){ document.getElementsByTagName("ul")[cnt].style.background = "#666"; }};
document.getElementById("ul").onmouseleave = function(){ for(var cnt=0; cnt<document.getElementsByTagName("ul").length; cnt++){ document.getElementsByTagName("ul")[cnt].style.background = ""; }};
document.getElementById("li").onmouseenter = function(){ for(var cnt=0; cnt<document.getElementsByTagName("li").length; cnt++){ document.getElementsByTagName("li")[cnt].style.background = "#666"; }};
document.getElementById("li").onmouseleave = function(){ for(var cnt=0; cnt<document.getElementsByTagName("li").length; cnt++){ document.getElementsByTagName("li")[cnt].style.background = ""; }};
document.getElementById("p").onmouseenter = function(){ for(var cnt=0; cnt<document.getElementsByTagName("p").length; cnt++){ document.getElementsByTagName("p")[cnt].style.background = "#666"; }};
document.getElementById("p").onmouseleave = function(){ for(var cnt=0; cnt<document.getElementsByTagName("p").length; cnt++){ document.getElementsByTagName("p")[cnt].style.background = ""; }};
document.getElementById("h1").onmouseenter = function(){ for(var cnt=0; cnt<document.getElementsByTagName("h1").length; cnt++){ document.getElementsByTagName("h1")[cnt].style.background = "#666"; }};
document.getElementById("h1").onmouseleave = function(){ for(var cnt=0; cnt<document.getElementsByTagName("h1").length; cnt++){ document.getElementsByTagName("h1")[cnt].style.background = ""; }};