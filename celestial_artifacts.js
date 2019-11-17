class artifacts
{
	constructor(x, y)
	{
		this.x_coordinate = x;
		this.y_coordinate = y;
	}
}

class asteroid extends artifacts
{
	constructor(x, y, game_over)
	{
		super(x,y);
		this.game_over = game_over;
	}	
}

class pentium extends artifacts
{
	constructor(x, y, repair, recipe)
	{
		super(x, y);
		this.repair = repair;
		this.recipe = recipe;
	}
}

function place_pentium(x, y, repair, recipe)
{
	if(map[x][y] != null)
		return false;

	map[x][y] = new pentium(x, y, repair, recipe);
	return true;	
}	

function place_asteroid(x, y, game_over)
{
	if(map[x][y] != null)
		return false;

	map[x][y] = new asteroid(x, y, game_over);
	return true;
}

function place()
{
	var pentium_1 = "" + document.getElementById("1_x_map").value + document.getElementById("1_y_map").value;
	var pentium_2 = "" + document.getElementById("2_x_map").value + document.getElementById("2_y_map").value;
	var pentium_3 = "" + document.getElementById("3_x_map").value + document.getElementById("3_y_map").value;
	var pentium_4 = "" + document.getElementById("4_x_map").value + document.getElementById("4_y_map").value;
	var pentium_5 = "" + document.getElementById("5_x_map").value + document.getElementById("5_y_map").value;
	var pentium_6 = "" + document.getElementById("6_x_map").value + document.getElementById("6_y_map").value;
	var pentium_7 = "" + document.getElementById("7_x_map").value + document.getElementById("7_y_map").value;


	if(pentium_1 == pentium_2 || pentium_1 == pentium_3 || pentium_1 == pentium_4 || pentium_1 == pentium_5 || pentium_1 == pentium_6 || pentium_1
			== pentium_7)
	{
		alert("Two planets cannot be in the same space");	
		return;
	}


	if(pentium_2 == pentium_3 || pentium_2 == pentium_4 || pentium_2 == pentium_5 || pentium_2 == pentium_6 || pentium_2 == pentium_7)
	{
		alert("Two planets cannot be in the same space");	
		return;
	}

	if(pentium_3 == pentium_4 || pentium_3 == pentium_5 || pentium_3 == pentium_6 || pentium_3 == pentium_7)
	{
		alert("Two planets cannot be in the same space");	
		return;
	}

	if(pentium_4 == pentium_5 || pentium_4 == pentium_6 || pentium_4 == pentium_7)
	{
		alert("Two planets cannot be in the same space");	
		return;
	}

	if(pentium_5 == pentium_6 || pentium_5 == pentium_7)
	{
		alert("Two planets cannot be in the same space");	
		return;
	}

	if(pentium_6 == pentium_7)
	{
		alert("Two planets cannot be in the same space");	
		return;
	}

	place_pentium(documents.getElementById("1_x_map").value, documents.getElementById("1_y_map").value, false, false);
	place_pentium(documents.getElementById("2_x_map").value, documents.getElementById("2_y_map").value, false, false);
	place_pentium(documents.getElementById("3_x_map").value, documents.getElementById("3_y_map").value, false, false);
	place_pentium(documents.getElementById("4_x_map").value, documents.getElementById("4_y_map").value, false, false);
	place_pentium(documents.getElementById("5_x_map").value, documents.getElementById("5_y_map").value, false, false);
	place_pentium(documents.getElementById("6_x_map").value, documents.getElementById("6_y_map").value, false, false);
	place_pentium(documents.getElementById("7_x_map").value, documents.getElementById("7_y_map").value, false, false);
}

function hide_placement()
{
	if(!document.getElementById('administrator').checked)
		document.getElementById('place_pentium').style.display='none';
	else	
		document.getElementById('place_pentium').style.display='block';
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

/*	
	function scanner(x, y, range)
	{
	for(var i = 0; i < range; ++i)
	{
		map

	}  

	return false;
	}
 */
