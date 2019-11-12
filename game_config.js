

function gameConfigOption() {
	
	gameScreen = document.getElementById("game");
	conScreen = document.getElementById("configScreen");
	configVal = document.getElementById("gameConfigTF").value;
	hideOption = document.getElementById("config");
	
	
	if (configVal == "false") {
		gameScreen.style.display = "block";
		conScreen.style.display = "none";
		hideOption.style.display = "none";
		loadDefaultGame();
		
	} 
	else if(configVal == "true"){
	  conScreen.style.display= "block";
	  gameScreen.style.display = "none";
	  hideOption.style.display = "none";
	
	}
	else {
		
	}
return;
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
	
		document.getElementById("xVal").value = xLoc;
		document.getElementById("yVal").value = yLoc;
		document.getElementById("energyVal").value = energy;
		document.getElementById("suppliesVal").value = supplies;
		
	/*//check for isNaN(credits later
	if( (isNaN(xLoc)) || (isNaN(yLoc)) || (isNaN(energy)) || (isNaN(supplies)) || (mapSize(xLoc)) ) {
		document.getElementById("validate").innerHTML = "Enter numerical values only!";
		
	}
		*/


}


function loadDefaultGame() {
	document.getElementById("game").style.display = "block";
	 document.getElementById("configScreen").style.display = "none";
	document.getElementById("config").style.display = "none";
	document.getElementById("xVal").value = "10";
	document.getElementById("yVal").value = "10";
	document.getElementById("energyVal").value = "100";
	document.getElementById("suppliesVal").value = "100";
	
	
}

function loadCustomGame() {
	document.getElementById("game").style.display = "block";
	document.getElementById("configScreen").style.display = "none";
	document.getElementById("config").style.display = "none";
	return false;

}