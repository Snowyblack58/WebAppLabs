function checkIfValidElement(node){
	validElements = ["BODY","DIV","P","SPAN","UL","LI","H1","INPUT"];
	for(var cnt = 0; cnt < validElements.length; cnt++)
		if(node.nodeName === validElements[cnt])
			return true;
	return false;
}

function getFirstValidElement(node){
	if(node == null){
		return document.querySelector("body");
	}
	for(var cnt = 0; cnt < node.childNodes.length; cnt++){
		if(checkIfValidElement(node.childNodes[cnt])){
			return node.childNodes[cnt];
		}
	}
	var tempnode = node;
	while(tempnode.nextSibling != null){
		if(checkIfValidElement(tempnode.nextSibling)){
			return tempnode.nextSibling;
		}
		tempnode = tempnode.nextSibling;
	}
	tempnode = node.parentNode;
	while(tempnode.nextSibling != null){
		if(checkIfValidElement(tempnode.nextSibling)){
			return tempnode.nextSibling;
		}
		tempnode = tempnode.nextSibling;
	}
	return getFirstValidElement(node.parentNode.nextSibling);
}

function clearAllBackgrounds(){
	var allElements = document.getElementsByTagName("*");
	for (var cnt = 0; cnt < allElements.length; cnt++){
	    allElements[cnt].style.background = "none";
	}
}

function onClick(ev){
	console.log(ev.target);
	var nextNode = getFirstValidElement(ev.target);
	clearAllBackgrounds();
	nextNode.style.background = "#FA0";
}