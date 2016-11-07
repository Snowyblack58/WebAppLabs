var lab_titles = ["Foundations",
					"Sporcle",
					"Capitals",
					"Traversal",
					"Form Intro",
					"Search",
					"Analytics",
					"Unknown",
					"Unknown",
					]

$("#labs a").hover(
function(){
	$(this).text(lab_titles[parseInt($(this).attr("id").substring(1))-1]);
},
function(){
	$(this).text($(this).attr("id"));
});