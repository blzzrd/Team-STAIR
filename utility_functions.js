

function logMessage (message) {
	//adds message to messageLog area
		document.getElementById("messageLog").innerHTML += message + "\n";
	//make text area display most recent messages
		document.getElementById('messageLog').scrollTop = document.getElementById('messageLog').scrollHeight;
}

function emoji()
{
	if(document.getElementById("emoji").checked)	
	{	
		UNK = '&#x2B1C'
		EMPTY = '&#x2B1B'
		PENTIUM = '&#x1F30E'
		SPACE_STATION = '&#x1F6F0'
		ASTEROID = '&#x1F525'
		PLAYER = '&#x1F680'
	}	
}

//Default locations of artifacts
//   Only one recipe on map
//   
function default_artifacts()
{
	logMessage("Artifacts set to default positions");	
	
	//Celeron
	var celeron_x = 13; 
	var celeron_y = 13;
	var celeron_recipe = true;	
	
	//Xeon
	var xeon_x = 2; 
	var xeon_y = 2;	
	var xeon_recipe = false;	
	
	//Ryzen
	var ryzen_x = 3; 
	var ryzen_y = 3;	
	var ryzen_recipe = false;	
	
	//Saturn
	var saturn_x = 4; 
	var saturn_y = 4;	
	var saturn_recipe = false;	
	
	//Mars
	var mars_x = 5; 
	var mars_y = 5;	
	var mars_recipe = false;	
	
	//Jupiter
	var jupiter_x = 6; 
	var jupiter_y = 6;	
	var jupiter_recipe = false;	
	
	//Pluto
	var pluto_x = 7; 
	var pluto_y = 7;	
	var pluto_recipe = false;	

	//Asteroid
	var ax = 11;
	var ay = 11; 

	//Space Station
	var sx = 13;
	var sy = 11;
	
	game_map.map[celeron_x][celeron_y].obj = new pentium("Celeron", false, celeron_recipe);
	game_map.map[celeron_x][celeron_y].change_type(PENTIUM);
	
	game_map.map[xeon_x][xeon_y].obj = new pentium("Xeon", false, xeon_recipe);
	game_map.map[xeon_x][xeon_y].change_type(PENTIUM);
	
	game_map.map[ryzen_x][ryzen_y].obj = new pentium("Ryzen", false, ryzen_recipe);
	game_map.map[ryzen_x][ryzen_y].change_type(PENTIUM);
	
	game_map.map[saturn_x][saturn_y].obj = new pentium("Saturn", false, saturn_recipe);
	game_map.map[saturn_x][saturn_y].change_type(PENTIUM);
	
	game_map.map[mars_x][mars_y].obj = new pentium("Mars", false, mars_recipe);
	game_map.map[mars_x][mars_y].change_type(PENTIUM);
	
	game_map.map[jupiter_x][jupiter_y].obj = new pentium("Jupiter", false, jupiter_recipe);
	game_map.map[jupiter_x][jupiter_y].change_type(PENTIUM);
	
	game_map.map[pluto_x][pluto_y].obj = new pentium("Pluto", false, pluto_recipe);
	game_map.map[pluto_x][pluto_y].change_type(PENTIUM);
		
	game_map.map[ax][ay].obj = new asteroid(20);
	game_map.map[ax][ay].change_type(ASTEROID);
	
	game_map.map[sx][sy].obj = new space_station(0);
	game_map.map[sx][sy].change_type(SPACE_STATION);
}
