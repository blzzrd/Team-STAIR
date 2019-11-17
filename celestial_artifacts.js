class artifacts
{
	constructor()
	{}
}

class space_station extends artifacts
{
	constructor(supplies_cost)
	{
		super();
		this.supplies_cost;
	}
}

class asteroid extends artifacts
{
	constructor(damage)
	{
		super();
		this.damage;
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

var input = [];
/*
function input_check()
{
	var pentium_1 = "" + document.getElementById("1_x_map").value + document.getElementById("1_y_map").value;
	input[0] = pentium_1;	
	var pentium_2 = "" + document.getElementById("2_x_map").value + document.getElementById("2_y_map").value;
	input[1] = pentium_1;	
	var pentium_3 = "" + document.getElementById("3_x_map").value + document.getElementById("3_y_map").value;
	input[2] = pentium_1;	
	var pentium_4 = "" + document.getElementById("4_x_map").value + document.getElementById("4_y_map").value;
	input[3] = pentium_1;	
	var pentium_5 = "" + document.getElementById("5_x_map").value + document.getElementById("5_y_map").value;
	input[4] = pentium_1;	
	var pentium_6 = "" + document.getElementById("6_x_map").value + document.getElementById("6_y_map").value;
	input[5] = pentium_1;	
	var pentium_7 = "" + document.getElementById("7_x_map").value + document.getElementById("7_y_map").value;
	input[6] = pentium_1;	

	if(document.getElementById("asteroid_1x").value
	var asteroid_1 = "" + document.getElementById("asteroid_1x").value + document.getElementById("asteroid_1y").value;
	var asteroid_2 = "" + document.getElementById("asteroid_2x").value + document.getElementById("asteroid_2y").value;
	var asteroid_3 = "" + document.getElementById("asteroid_3x").value + document.getElementById("asteroid_3y").value;
		

}
*/


function artifacts_configure(c_map)
{
	c_map.map[document.getElementById("1_x_map").value][document.getElementById("1_y_map").value].type = new pentium("Celeron", false, false);
	c_map.map[document.getElementById("2_x_map").value][document.getElementById("2_y_map").value].type = new pentium("Xeon", false, false);
	c_map.map[document.getElementById("3_x_map").value][document.getElementById("3_y_map").value].type = new pentium("Ryzen", false, false);
	c_map.map[document.getElementById("4_x_map").value][document.getElementById("4_y_map").value].type = new pentium("Saturn", false, false);
	c_map.map[document.getElementById("5_x_map").value][document.getElementById("5_y_map").value].type = new pentium("Mars", false, false);
	c_map.map[document.getElementById("6_x_map").value][document.getElementById("6_y_map").value].type = new pentium("Jupiter", false, false);
	c_map.map[document.getElementById("7_x_map").value][document.getElementById("7_y_map").value].type = new pentium("Pluto", false, false);

	c_map.map[document.getElementById("asteroid_1x").value][document.getElementById("asteroid_1y").value].type = new asteroid(0);	
	c_map.map[document.getElementById("asteroid_2x").value][document.getElementById("asteroid_2y").value].type = new asteroid(0);	
	c_map.map[document.getElementById("asteroid_3x").value][document.getElementById("asteroid_3y").value].type = new asteroid(0);	
	
	c_map.map[document.getElementById("space_station_1x").value][document.getElementById("space_station_1y").value].type = new space_station(0);	
	c_map.map[document.getElementById("space_station_2x").value][document.getElementById("space_station_2y").value].type = new space_station(0);	
	c_map.map[document.getElementById("space_station_3x").value][document.getElementById("space_station_3y").value].type = new space_station(0);	
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

function collision()
{
	/*
	if(!map[docoument.getElementById("xVal")][[document.getElementById("yVal")])
		return;
	*/
	alert("You collided with an artifact!");
	return;
}

