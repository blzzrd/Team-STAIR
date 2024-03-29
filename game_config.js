
var game_map;
function gameConfigOption(settingsObj) {
	gameScreen = document.getElementById("game");
	conScreen = document.getElementById("configScreen");
	configVal = document.getElementById("gameConfigTF").value;
	hideOption = document.getElementById("config");
	emoji();	
	 if(configVal == "admin"){
	  conScreen.style.display= "block";
	  gameScreen.style.display = "none";
	  hideOption.style.display = "none";
	
	}
	
	else {
		gameScreen.style.display = "block";
		conScreen.style.display = "none";
		hideOption.style.display = "none";
		
		loadGame(settingsObj);
		default_artifacts();
	}

}

function getCustomSettings(settingsObj) {
//clear display message
document.getElementById("validate").innerHTML ="";

	//obtain inputs
	mapSize = document.getElementById("mapSize").value;
	document.getElementById("size").innerHTML = mapSize;
	xStarting = eval(document.getElementById("xLoc").value);
	yStarting = eval(document.getElementById("yLoc").value);
	energy = document.getElementById("energy").value;
	supplies = document.getElementById("supplies").value;
	credits = document.getElementById("desiredCredits").value;
	wormholeBehavior = document.getElementById("randomizeWormhole").value;
	playerDies = document.getElementById("playerDies").value;
	//alert(xStarting + " " + yStarting + " " + mapSize);
	//validate mapSize
	if( (mapSize >128) || (mapSize < 10) || (isNaN(mapSize)) ) {
		document.getElementById("validate").innerHTML = "Entered invalid value for map size. Enter a value between 10 and 128.";
		return;
	}
	
	// validate starting x location
	else if( (xStarting < 1) || (isNaN(xStarting)) || (xStarting > mapSize) ){
		document.getElementById("validate").innerHTML = "Entered invalid value for x location!";
		return;
	}
	//validate starting y location
	else if( (yStarting < 1) || (isNaN(yStarting)) || (yStarting > mapSize) ){
		document.getElementById("validate").innerHTML = "Entered invalid value for y location!";
		return;
	}
	//validate energy
	
	else if ( (isNaN(energy)) || (energy <= 0) ){
		document.getElementById("validate").innerHTML = "Entered invalid value for energy!";
		return;
	}
	//validate credit
	else if ( (isNaN(credits)) || (credits <= 0)) {
		document.getElementById("validate").innerHTML = "Entered invalid value for credits!";
		return;
		
	}
	//validate supplies
	else if ( (isNaN(supplies)) || (supplies <= 0)) {
		document.getElementById("validate").innerHTML = "Entered invalid value for supplies!";
		return;
		
	}
	
	else{
		//obtain values from html containers
		settingsObj.mapSize = mapSize;
		settingsObj.xLocation= xStarting - 1;
		settingsObj.yLocation= yStarting - 1;
		settingsObj.energy= energy;
		settingsObj.supplies = supplies;
		settingsObj.credits = credits;
		settingsObj.wormholeBehavior = wormholeBehavior;
		settingsObj.regularPlay = playerDies;
	}

}


function loadGame(settingsObj) {
	// display game screen
	document.getElementById("game").style.display = "block";
	document.getElementById("configScreen").style.display = "none";
	document.getElementById("config").style.display = "none";
	
	//write game values to html containers
	document.getElementById("xVal").value = settingsObj.xLocation;
	document.getElementById("yVal").value = settingsObj.yLocation;
	document.getElementById("energyVal").value = settingsObj.energy;
	document.getElementById("suppliesVal").value = settingsObj.supplies;
	document.getElementById("creditsVal").value = settingsObj.credits;
	
	document.getElementById('recipe_status').value = "NOT FOUND";
	starting_x = document.getElementById('xVal').value;
	starting_y = document.getElementById('yVal').value;
	game_map = new Celestial_Map();
	game_map.display_map();
}



