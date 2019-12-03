class artifacts
{
	constructor()
	{}
	
	collision()
	{
		logMessage("You collided with an artifact!");	
		return;
	}
}

class space_station extends artifacts
{
	constructor(supplies_cost)
	{
		super();
		this.supplies_cost = supplies_cost;
	}
}

class asteroid extends artifacts
{
	constructor(damage)
	{
		super();
		this.damage = damage;
	}	
}

class pentium extends artifacts
{
	constructor(name, repair, recipe)
	{
		super();
		this.name = name; 
		this.repair = repair;
		this.recipe = recipe;
	}
}

//Checks input errors
function input_check()
{
	var input = [];

	//Checks if input is not a number
	if(isNaN(document.getElementById("1_x_map").value) || 
	isNaN(document.getElementById("1_y_map").value) || 
	isNaN(document.getElementById("2_x_map").value) || 
	isNaN(document.getElementById("2_y_map").value) || 
	isNaN(document.getElementById("3_x_map").value) || 
	isNaN(document.getElementById("3_y_map").value) || 
	isNaN(document.getElementById("4_x_map").value) || 
	isNaN(document.getElementById("4_y_map").value) || 
	isNaN(document.getElementById("5_x_map").value) || 
	isNaN(document.getElementById("5_y_map").value) || 
	isNaN(document.getElementById("6_x_map").value) || 
	isNaN(document.getElementById("6_y_map").value) || 
	isNaN(document.getElementById("7_x_map").value) || 
	isNaN(document.getElementById("7_y_map").value))
	{
		alert("Coordinates must be integers!");
		default_artifacts();
		return false;
	}  
	
	//Checks if input is negative
	if(document.getElementById("1_x_map").value < 0 || 
	document.getElementById("1_y_map").value < 0 || 
	document.getElementById("2_x_map").value < 0 || 
	document.getElementById("2_y_map").value < 0 || 
	document.getElementById("3_x_map").value < 0 || 
	document.getElementById("3_y_map").value < 0 || 
	document.getElementById("4_x_map").value < 0 || 
	document.getElementById("4_y_map").value < 0 || 
	document.getElementById("5_x_map").value < 0 || 
	document.getElementById("5_y_map").value < 0 || 
	document.getElementById("6_x_map").value < 0 || 
	document.getElementById("6_y_map").value < 0 || 
	document.getElementById("7_x_map").value < 0 || 
	document.getElementById("7_y_map").value < 0)
	{
		alert("Coordinates must be positive!");
		default_artifacts();
		return false;
	}  
	//Checks if coordinate is within map size
	var MAX_SIZE = eval(document.getElementById("mapSize").value) - 1;
	if(document.getElementById("1_x_map").value > MAX_SIZE || 
	document.getElementById("1_y_map").value > MAX_SIZE || 
	document.getElementById("2_x_map").value > MAX_SIZE || 
	document.getElementById("2_y_map").value > MAX_SIZE || 
	document.getElementById("3_x_map").value > MAX_SIZE || 
	document.getElementById("3_y_map").value > MAX_SIZE || 
	document.getElementById("4_x_map").value > MAX_SIZE || 
	document.getElementById("4_y_map").value > MAX_SIZE || 
	document.getElementById("5_x_map").value > MAX_SIZE || 
	document.getElementById("5_y_map").value > MAX_SIZE || 
	document.getElementById("6_x_map").value > MAX_SIZE || 
	document.getElementById("6_y_map").value > MAX_SIZE || 
	document.getElementById("7_x_map").value > MAX_SIZE || 
	document.getElementById("7_y_map").value > MAX_SIZE) 
	{
		alert("Coordinates must be on map!");
		default_artifacts();
		return false;
	}  
	
	//Concatenates coordinates	
	var pentium_1 = "" + eval(document.getElementById("1_x_map").value) + eval(document.getElementById("1_y_map").value);
	input[0] = pentium_1;	
	var pentium_2 = "" + eval(document.getElementById("2_x_map").value) + eval(document.getElementById("2_y_map").value);
	input[1] = pentium_2;	
	var pentium_3 = "" + eval(document.getElementById("3_x_map").value) + eval(document.getElementById("3_y_map").value);
	input[2] = pentium_3;	
	var pentium_4 = "" + eval(document.getElementById("4_x_map").value) + eval(document.getElementById("4_y_map").value);
	input[3] = pentium_4;	
	var pentium_5 = "" + eval(document.getElementById("5_x_map").value) + eval(document.getElementById("5_y_map").value);
	input[4] = pentium_5;	
	var pentium_6 = "" + eval(document.getElementById("6_x_map").value) + eval(document.getElementById("6_y_map").value);
	input[5] = pentium_6;	
	var pentium_7 = "" + eval(document.getElementById("7_x_map").value) + eval(document.getElementById("7_y_map").value);
	input[6] = pentium_7;	
	
	var starting_xy = "" + eval(document.getElementById("xLoc").value) + eval(document.getElementById("yLoc").value);

	i = 6;

	//If user enables asteroids
	if(document.getElementById('asteroids').value == "True")
	{	
		if(isNaN(document.getElementById("asteroid_1x").value) || 
		isNaN(document.getElementById("asteroid_1y").value) || 
		isNaN(document.getElementById("asteroid_2x").value) || 
		isNaN(document.getElementById("asteroid_2y").value) || 
		isNaN(document.getElementById("asteroid_3x").value) || 
		isNaN(document.getElementById("asteroid_3y").value))
		{
			alert("Coordinates must be integers!");
			default_artifacts();
			return false;
		}  
	
		if(document.getElementById("asteroid_1x").value < 0 || 
		document.getElementById("asteroid_1y").value < 0 || 
		document.getElementById("asteroid_2x").value < 0 || 
		document.getElementById("asteroid_2y").value < 0 || 
		document.getElementById("asteroid_3x").value < 0 || 
		document.getElementById("asteroid_3y").value < 0) 
		{
			alert("Coordinates must be positive!");
			default_artifacts();
			return false;
		}
	
		if(document.getElementById("asteroid_1x").value > MAX_SIZE || 
		document.getElementById("asteroid_1y").value > MAX_SIZE || 
		document.getElementById("asteroid_2x").value > MAX_SIZE || 
		document.getElementById("asteroid_2y").value > MAX_SIZE || 
		document.getElementById("asteroid_3x").value > MAX_SIZE || 
		document.getElementById("asteroid_3y").value > MAX_SIZE) 
		{
			alert("Coordinates must be on map!");
			default_artifacts();
			return false;
		}	

		var asteroid_1 = "" + eval(document.getElementById("asteroid_1x").value) + eval(document.getElementById("asteroid_1y").value);
		input[++i] = asteroid_1;	
		if(isNaN(document.getElementById("damage_1").value) || document.getElementById("damage_1").value < 1)
			document.getElementById("damage_1").value = 20;	

		var asteroid_2 = "" + eval(document.getElementById("asteroid_2x").value) + eval(document.getElementById("asteroid_2y").value);
		input[++i] = asteroid_2;	
		if(isNaN(document.getElementById("damage_2").value) || document.getElementById("damage_2").value < 1)
			document.getElementById("damage_2").value = 20;	
	
		var asteroid_3 = "" + eval(document.getElementById("asteroid_3x").value) + eval(document.getElementById("asteroid_3y").value);
		input[++i] = asteroid_3;	
		if(isNaN(document.getElementById("damage_3").value) || document.getElementById("damage_3").value < 1)
			document.getElementById("damage_3").value = 20;	
	}		

	//If user enables space stations	
	if(document.getElementById('space_stations').value == "True")
	{	
		if(isNaN(document.getElementById("space_station_1x").value) || 
		isNaN(document.getElementById("space_station_1y").value) || 
		isNaN(document.getElementById("space_station_2x").value) || 
		isNaN(document.getElementById("space_station_2y").value) || 
		isNaN(document.getElementById("space_station_3x").value) || 
		isNaN(document.getElementById("space_station_3y").value))
		{
			alert("Coordinates must be integers!");
			default_artifacts();
			return false;
		}  
	
		if(document.getElementById("space_station_1x").value < 0 || 
		document.getElementById("space_station_1y").value < 0 || 
		document.getElementById("space_station_2x").value < 0 || 
		document.getElementById("space_station_2y").value < 0 || 
		document.getElementById("space_station_3x").value < 0 || 
		document.getElementById("space_station_3y").value < 0) 
		{
			alert("Coordinates must be positive!");
			default_artifacts();
			return false;
		}
	
		if(document.getElementById("space_station_1x").value > MAX_SIZE || 
		document.getElementById("space_station_1y").value > MAX_SIZE || 
		document.getElementById("space_station_2x").value > MAX_SIZE || 
		document.getElementById("space_station_2y").value > MAX_SIZE || 
		document.getElementById("space_station_3x").value > MAX_SIZE || 
		document.getElementById("space_station_3y").value > MAX_SIZE)
		{
			alert("Coordinates must be on map!");
			default_artifacts();
			return false;
		}	
		
		var space_station_1 = "" + eval(document.getElementById("space_station_1x").value) + eval(document.getElementById("space_station_1y").value);
		input[++i] = space_station_1;	
		var space_station_2 = "" + eval(document.getElementById("space_station_2x").value) + eval(document.getElementById("space_station_2y").value);
		input[++i] = space_station_2;	
		var space_station_3 = "" + eval(document.getElementById("space_station_3x").value) + eval(document.getElementById("space_station_3y").value);
		input[++i] = space_station_3;	
	}		

	for(var j = 0; j <= i; ++j)
	{
		//If input is not a number or at starting location	
		if(input[j] % 1 != 0)
		{
			alert("Coordinates must be integers!");
			default_artifacts();
			return false;
		}	
		
		if(input[j] == starting_xy)
		{
			alert("User cannot start on artifact!");
			default_artifacts();
			return false;	
		}
		
		//Determines if artifacts are at same location	
		for(var k = j + 1; k <= i; ++k)
		{
			if(input[j] == input[k])
			{
				alert("Two artifacts cannot be in same space!");
				default_artifacts();
				return false;
			}
		}	
	}
	
	return true;
}

//Places artifacts onto map
function artifacts_configure(c_map)
{
	var no_error = input_check();
	if(!no_error)
		return false;	

	if(document.getElementById("recipe").value == 1)	
		c_map.map[document.getElementById("1_x_map").value][document.getElementById("1_y_map").value].obj = new pentium("Celeron", false, true);
	else
		c_map.map[document.getElementById("1_x_map").value][document.getElementById("1_y_map").value].obj = new pentium("Celeron", false, false);
	c_map.map[document.getElementById("1_x_map").value][document.getElementById("1_y_map").value].change_type(PENTIUM);
	c_map.map[document.getElementById("1_x_map").value][document.getElementById("1_y_map").value].show();
		
	if(document.getElementById("recipe").value == 2)	
		c_map.map[document.getElementById("2_x_map").value][document.getElementById("2_y_map").value].obj = new pentium("Xeon", false, true);
	else
		c_map.map[document.getElementById("2_x_map").value][document.getElementById("2_y_map").value].obj = new pentium("Xeon", false, false);
	c_map.map[document.getElementById("2_x_map").value][document.getElementById("2_y_map").value].change_type(PENTIUM);
	c_map.map[document.getElementById("2_x_map").value][document.getElementById("2_y_map").value].show()
	
	if(document.getElementById("recipe").value == 3)	
		c_map.map[document.getElementById("3_x_map").value][document.getElementById("3_y_map").value].obj = new pentium("Ryzen", false, true);
	else
		c_map.map[document.getElementById("3_x_map").value][document.getElementById("3_y_map").value].obj = new pentium("Ryzen", false, false);
	c_map.map[document.getElementById("3_x_map").value][document.getElementById("3_y_map").value].change_type(PENTIUM);
	c_map.map[document.getElementById("3_x_map").value][document.getElementById("3_y_map").value].show();

	
	if(document.getElementById("recipe").value == 4)	
		c_map.map[document.getElementById("4_x_map").value][document.getElementById("4_y_map").value].obj = new pentium("Saturn", false, true);
	else
		c_map.map[document.getElementById("4_x_map").value][document.getElementById("4_y_map").value].obj = new pentium("Saturn", false, false);
	c_map.map[document.getElementById("4_x_map").value][document.getElementById("4_y_map").value].change_type(PENTIUM);
	
	if(document.getElementById("recipe").value == 5)	
		c_map.map[document.getElementById("5_x_map").value][document.getElementById("5_y_map").value].obj = new pentium("Mars", false, true);
	else
		c_map.map[document.getElementById("5_x_map").value][document.getElementById("5_y_map").value].obj = new pentium("Mars", false, false);
	c_map.map[document.getElementById("5_x_map").value][document.getElementById("5_y_map").value].change_type(PENTIUM);

	if(document.getElementById("recipe").value == 6)	
		c_map.map[document.getElementById("6_x_map").value][document.getElementById("6_y_map").value].obj = new pentium("Jupiter", false, true);
	else
		c_map.map[document.getElementById("6_x_map").value][document.getElementById("6_y_map").value].obj = new pentium("Jupiter", false, false);
	c_map.map[document.getElementById("6_x_map").value][document.getElementById("6_y_map").value].change_type(PENTIUM);

	if(document.getElementById("recipe").value == 7)	
		c_map.map[document.getElementById("7_x_map").value][document.getElementById("7_y_map").value].obj = new pentium("Pluto", false, true);
	else
		c_map.map[document.getElementById("7_x_map").value][document.getElementById("7_y_map").value].obj = new pentium("Pluto", false, false);
	c_map.map[document.getElementById("7_x_map").value][document.getElementById("7_y_map").value].change_type(PENTIUM);

	if(document.getElementById('asteroids').value == "True")
	{	
		c_map.map[document.getElementById("asteroid_1x").value][document.getElementById("asteroid_1y").value].obj = new asteroid(document.getElementById("damage_1").value);
		c_map.map[document.getElementById("asteroid_1x").value][document.getElementById("asteroid_1y").value].change_type(ASTEROID);
	
		c_map.map[document.getElementById("asteroid_2x").value][document.getElementById("asteroid_2y").value].obj = new asteroid(document.getElementById("damage_2").value);
		c_map.map[document.getElementById("asteroid_2x").value][document.getElementById("asteroid_2y").value].change_type(ASTEROID);
	
		c_map.map[document.getElementById("asteroid_3x").value][document.getElementById("asteroid_3y").value].obj = new asteroid(document.getElementById("damage_3").value);
		c_map.map[document.getElementById("asteroid_3x").value][document.getElementById("asteroid_3y").value].change_type(ASTEROID);
	}
	
	if(document.getElementById('space_stations').value == "True")
	{
		c_map.map[document.getElementById("space_station_1x").value][document.getElementById("space_station_1y").value].obj = new space_station(0);
		c_map.map[document.getElementById("space_station_1x").value][document.getElementById("space_station_1y").value].change_type(SPACE_STATION);
	
		c_map.map[document.getElementById("space_station_2x").value][document.getElementById("space_station_2y").value].obj = new space_station(0);
		c_map.map[document.getElementById("space_station_2x").value][document.getElementById("space_station_2y").value].change_type(SPACE_STATION);
	
		c_map.map[document.getElementById("space_station_3x").value][document.getElementById("space_station_3y").value].obj = new space_station(0);
		c_map.map[document.getElementById("space_station_3x").value][document.getElementById("space_station_3y").value].change_type(SPACE_STATION);
	}

	logMessage("Artifacts successfully placed");	

	c_map.display_map();
	return true;
}

function hide_asteroid()
{
	if(document.getElementById('asteroids').value == "False")
		document.getElementById('place_asteroids').style.display='none';
	else	
		document.getElementById('place_asteroids').style.display='block';
}

function hide_space_station()
{
	if(document.getElementById('space_stations').value == "False")
		document.getElementById('place_space_stations').style.display='none';
	else	
		document.getElementById('place_space_stations').style.display='block';
}

