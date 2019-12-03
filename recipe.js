//Recipe is placed on one of the pentium artifacts
//When user finds recipe, user must return to home/original location in order to win

//Initial coordinates 
var starting_x = 0;
var starting_y = 0;

//User's recipe status 
function recipe_status()
{
	//If user has not found recipe yet 	
	if(document.getElementById('recipe_status').value == "NOT FOUND")	
		return;

	//If user has recipe and checks if user returned recipe to starting coordinates	
	if(document.getElementById('xVal').value == starting_x && starting_x && document.getElementById('yVal').value == starting_y)
	{
		logMessage("You won!");	
		logMessage("FINAL STATS:");	
		logMessage("ENERGY: " + document.getElementById("energyVal").value);	
		logMessage("SUPPLIES: " + document.getElementById("suppliesVal").value + "%");	
		logMessage("CREDITS: " + document.getElementById("creditsVal").value);	
	}
}

//Checks if user collides with artifact
function artifact_check()
{
	//When user reaches celestial artifact	
	if(game_map.map[document.getElementById("xVal").value][document.getElementById("yVal").value].obj)
	{
		//If collided artifact is pentium
		if(game_map.map[document.getElementById("xVal").value][document.getElementById("yVal").value].type == PENTIUM)
		{
			reached_pentium();
			return true;
		}	
	
		if(game_map.map[document.getElementById("xVal").value][document.getElementById("yVal").value].type == ASTEROID)
		{
			reached_asteroid();	
			return true;	
		}	
		
		if(game_map.map[document.getElementById("xVal").value][document.getElementById("yVal").value].type == SPACE_STATION)
		{
			reached_space_station();	
			return true;
		}
	}

	else
		return false;
}

//When user collides into pentium artifact 	
function reached_pentium()
{
	logMessage("You reached " + game_map.map[document.getElementById("xVal").value][document.getElementById("yVal").value].obj.name + "!");

	//If penitum has recipe	
	if(document.getElementById('recipe_status').value == "NOT FOUND")	
	{
		if(game_map.map[document.getElementById("xVal").value][document.getElementById("yVal").value].obj.recipe)
		{
			logMessage("Recipe found!");	
			document.getElementById('recipe_status').value = "RECIPE FOUND (Return to starting location)";
		}
	}
}

function reached_asteroid()
{
	logMessage("You collided with an asteroid and took " + game_map.map[document.getElementById("xVal").value][document.getElementById("yVal").value].obj.damage + " damage to supplies!");
      	document.getElementById('suppliesVal').value -=  game_map.map[document.getElementById("xVal").value][document.getElementById("yVal").value].obj.damage;
	checkSupplies();
}

function reached_space_station()
{
	logMessage("You reached a space station!");	
}
