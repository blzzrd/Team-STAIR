function gameConfigOption() {
	
	gameScreen = document.getElementById("game");
	conScreen = document.getElementById("configScreen");
	configVal = document.getElementById("gameConfigTF").value;
	
	
	if (configVal == "false") {
		gameScreen.style.display = "block";
		conScreen.style.display= "none";
		return
		
	} 
	else if(configVal == "true"){
	  conScreen.style.display= "block";
	  gameScreen.style.display = "none";
	  return
	}
	else {
		return
	}

}
function getCustomSettings() {
	
	xLoc = document.getElementById("xLoc").value;
	yLoc = document.getElementById("yLoc").value;
	energy= document.getElementById("energy").value;
	supplies = document.getElementById("supplies").value;
	//credits = document.getElementById("credits").value;
	wormholeBehavior = document.getElementById("randomizeWormhole").value;
	playerDies = document.getElementById("playerDies").value;
	mapSize = document.getElementById("mapSize").value;
	
	//check for isNaN(credits later
	if( (isNaN(xLoc)) || (isNaN(yLoc)) || (isNaN(energy)) || (isNaN(supplies)) || (mapSize(xLoc))) {
		document.getElementById("validate").innerHTML = "Enter numerical values only!";
		return;
	}
	//else{
		//document.getElementById("validate").innerHTML = "";
		//return;
	//}

}

function loadGame() {
	document.getElementById("configScreen").style.display="none";
	document.getElementById("config").style.display="none";
	document.getElementById("xVal").value = document.getElementById("xLoc").value;
	document.getElementById("game").style.display="block";
	
	return;
	
}
