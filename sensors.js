function deploysensor()
{
	x = eval(document.getElementById("xVal").value);
	y = eval(document.getElementById("yVal").value);
	max = eval(document.getElementById("mapSize").value);
	supplies = eval(document.getElementById("suppliesVal").value);
	p1X = eval(document.getElementById("1_x_map").value);
	p1Y = eval(document.getElementById("1_y_map").value);
	p2X = eval(document.getElementById("2_x_map").value);
	p2Y = eval(document.getElementById("2_y_map").value);
	p3X = eval(document.getElementById("3_x_map").value);
	p3Y = eval(document.getElementById("3_y_map").value);
	p4X = eval(document.getElementById("4_x_map").value);
	p4Y = eval(document.getElementById("4_y_map").value);
	p5X = eval(document.getElementById("5_x_map").value);
	p5Y = eval(document.getElementById("5_y_map").value);
	p6X = eval(document.getElementById("6_x_map").value);
	p6Y = eval(document.getElementById("6_y_map").value);
	p7X = eval(document.getElementById("7_x_map").value);
	p7Y = eval(document.getElementById("7_y_map").value);
	a1X = eval(document.getElementById("asteroid_1x").value);
	a1Y = eval(document.getElementById("asteroid_1y").value);
	a2X = eval(document.getElementById("asteroid_2x").value);
	a2Y = eval(document.getElementById("asteroid_2y").value);
	a3X = eval(document.getElementById("asteroid_3x").value);
	a3Y = eval(document.getElementById("asteroid_3y").value);
	s1X = eval(document.getElementById("space_station_1x").value);
	s1Y = eval(document.getElementById("space_station_1y").value);
	s2X = eval(document.getElementById("space_station_2x").value);
	s2Y = eval(document.getElementById("space_station_2y").value);
	s3X = eval(document.getElementById("space_station_3x").value);
	s3Y = eval(document.getElementById("space_station_3y").value);
	nondefault_stats = inputCheck();
	
	if(supplies == 0)
		checkSupplies();
	
	if(supplies <=2)
	{
		decreaseSupplies();
		checkSupplies();
	}
/*

	else if(typeof p1X === 'undefined' || typeof p1Y === 'undefined' ||typeof p2X === 'undefined' || typeof p2Y === 'undefined' ||typeof p3X === 'undefined' || typeof p3Y === 'undefined' ||typeof p4X === 'undefined' || typeof p4Y === 'undefined' ||typeof p5X === 'undefined' || typeof p5Y === 'undefined' ||typeof p6X === 'undefined' || typeof p6Y === 'undefined' ||typeof p7X === 'undefined' || typeof p7Y === 'undefined')
*/

/*
	else if(game_map.map[13][13].type == PENTIUM && game_map.map[2][2].type == PENTIUM && game_map.map[3][3].type == PENTIUM && game_map.map[4][4].type == PENTIUM && game_map.map[5][5].type == PENTIUM && game_map.map[6][6].type == PENTIUM && game_map.map[7][7].type == PENTIUM && game_map.map[11][11].type == ASTEROID && game_map.map[13][11].type == SPACE_STATION)
*/
	else if(!nondefault_stats)
	{
		p1X = 13;
		p1Y = 13;
		p2X = 2;
		p2Y = 2;
		p3X = 3;
		p3Y = 3;
		p4X = 4;
		p4Y = 4;
		p5X = 5;
		p5Y = 5;
		p6X = 6;
		p6Y = 6;
		p7X = 7;
		p7Y = 7;
		a1X = 11;
		a1Y = 11;
		s1X = 13;
		s1Y = 11;

		decreaseSupplies();

		if(x + 1 == p1X && y == p1Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(x - 1 == p1X && y == p1Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(x + 2 == p1X && y == p1Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(x - 2 == p1X && y == p1Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(y + 1 == p1Y && x == p1X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(y - 1 == p1Y && x == p1X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(y + 2 == p1Y && x == p1X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(y - 2 == p1Y && x == p1X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(x + 1 == p2X && y == p2Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(x - 1 == p2X && y == p2Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(x + 2 == p2X && y == p2Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(x - 2 == p2X && y == p2Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(y + 1 == p2Y && x == p2X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(y - 1 == p2Y && x == p2X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(y + 2 == p2Y && x == p2X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(y - 2 == p2Y && x == p2X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(x + 1 == p3X && y == p3Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(x - 1 == p3X && y == p3Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(x + 2 == p3X && y == p3Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(x - 2 == p3X && y == p3Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(y + 1 == p3Y && x == p3X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(y - 1 == p3Y && x == p3X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(y + 2 == p3Y && x == p3X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(y - 2 == p3Y && x == p3X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(x + 1 == p4X && y == p4Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(x - 1 == p4X && y == p4Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(x + 2 == p4X && y == p4Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(x - 2 == p4X && y == p4Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(y + 1 == p4Y && x == p4X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(y - 1 == p4Y && x == p4X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(y + 2 == p4Y && x == p4X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(y - 2 == p4Y && x == p4X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(x + 1 == p5X && y == p5Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Mars");
		}
		
		if(x - 1 == p5X && y == p5Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Mars");
		}
		
		if(x + 2 == p5X && y == p5Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Mars");
		}
		
		if(x - 2 == p5X && y == p5Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Mars");
		}
		
		if(y + 1 == p5Y && x == p5X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Mars");
		}
		
		if(y - 1 == p5Y && x == p5X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Mars");
		}
		
		if(y + 2 == p5Y && x == p5X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Mars");
		}
		
		if(y - 2 == p5Y && x == p5X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Mars");
		}
		
		if(x + 1 == p6X && y == p6Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(x - 1 == p6X && y == p6Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(x + 2 == p6X && y == p6Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(x - 2 == p6X && y == p6Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(y + 1 == p6Y && x == p6X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(y - 1 == p6Y && x == p6X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(y + 2 == p6Y && x == p6X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(y - 2 == p6Y && x == p6X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(x + 1 == p7X && y == p7Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(x - 1 == p7X && y == p7Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(x + 2 == p7X && y == p7Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(x - 2 == p7X && y == p7Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(y + 1 == p7Y && x == p7X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(y - 1 == p7Y && x == p7X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(y + 2 == p7Y && x == p7X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(y - 2 == p7Y && x == p7X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Pluto");
		}

		if(x + 1 == a1X && y == a1Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x - 1 == a1X && y == a1Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x + 2 == a1X && y == a1Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x - 2 == a1X && y == a1Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y + 1 == a1Y && x == a1X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y - 1 == a1Y && x == a1X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y + 2 == a1Y && x == a1X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y - 2 == a1Y && x == a1X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected an asteroid");
		}

		if(x + 1 == s1X && y == s1Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x - 1 == s1X && y == s1Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x + 2 == s1X && y == s1Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x - 2 == s1X && y == s1Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y + 1 == s1Y && x == s1X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y - 1 == s1Y && x == s1X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y + 2 == s1Y && x == s1X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y - 2 == s1Y && x == s1X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected a space station");
		}
		
		game_map.display_map();
	}
	
	else
	{
		decreaseSupplies();

		if(x + 1 == p1X && y == p1Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(x - 1 == p1X && y == p1Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(x + 2 == p1X && y == p1Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(x - 2 == p1X && y == p1Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(y + 1 == p1Y && x == p1X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(y - 1 == p1Y && x == p1X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(y + 2 == p1Y && x == p1X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(y - 2 == p1Y && x == p1X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Celeron");
		}
		
		if(x + 1 == p2X && y == p2Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(x - 1 == p2X && y == p2Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(x + 2 == p2X && y == p2Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(x - 2 == p2X && y == p2Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(y + 1 == p2Y && x == p2X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(y - 1 == p2Y && x == p2X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(y + 2 == p2Y && x == p2X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(y - 2 == p2Y && x == p2X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Xeon");
		}
		
		if(x + 1 == p3X && y == p3Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(x - 1 == p3X && y == p3Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(x + 2 == p3X && y == p3Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(x - 2 == p3X && y == p3Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(y + 1 == p3Y && x == p3X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(y - 1 == p3Y && x == p3X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(y + 2 == p3Y && x == p3X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(y - 2 == p3Y && x == p3X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Ryzen");
		}
		
		if(x + 1 == p4X && y == p4Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(x - 1 == p4X && y == p4Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(x + 2 == p4X && y == p4Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(x - 2 == p4X && y == p4Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(y + 1 == p4Y && x == p4X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(y - 1 == p4Y && x == p4X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(y + 2 == p4Y && x == p4X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(y - 2 == p4Y && x == p4X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Saturn");
		}
		
		if(x + 1 == p5X && y == p5Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Mars");
		}
		
		if(x - 1 == p5X && y == p5Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Mars");
		}
		
		if(x + 2 == p5X && y == p5Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Mars");
		}
		
		if(x - 2 == p5X && y == p5Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Mars");
		}
		
		if(y + 1 == p5Y && x == p5X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Mars");
		}
		
		if(y - 1 == p5Y && x == p5X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Mars");
		}
		
		if(y + 2 == p5Y && x == p5X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Mars");
		}
		
		if(y - 2 == p5Y && x == p5X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Mars");
		}
		
		if(x + 1 == p6X && y == p6Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(x - 1 == p6X && y == p6Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(x + 2 == p6X && y == p6Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(x - 2 == p6X && y == p6Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(y + 1 == p6Y && x == p6X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(y - 1 == p6Y && x == p6X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(y + 2 == p6Y && x == p6X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(y - 2 == p6Y && x == p6X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Jupiter");
		}
		
		if(x + 1 == p7X && y == p7Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(x - 1 == p7X && y == p7Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(x + 2 == p7X && y == p7Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(x - 2 == p7X && y == p7Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(y + 1 == p7Y && x == p7X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(y - 1 == p7Y && x == p7X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(y + 2 == p7Y && x == p7X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected Pluto");
		}
		
		if(y - 2 == p7Y && x == p7X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected Pluto");
		}

		if(x + 1 == a1X && y == a1Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x - 1 == a1X && y == a1Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x + 2 == a1X && y == a1Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x - 2 == a1X && y == a1Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y + 1 == a1Y && x == a1X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y - 1 == a1Y && x == a1X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y + 2 == a1Y && x == a1X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y - 2 == a1Y && x == a1X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x + 1 == a2X && y == a2Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x - 1 == a2X && y == a2Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x + 2 == a2X && y == a2Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x - 2 == a2X && y == a2Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y + 1 == a2Y && x == a2X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y - 1 == a2Y && x == a2X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y + 2 == a2Y && x == a2X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y - 2 == a2Y && x == a2X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x + 1 == a3X && y == a3Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x - 1 == a3X && y == a3Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x + 2 == a3X && y == a3Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(x - 2 == a3X && y == a3Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y + 1 == a3Y && x == a3X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y - 1 == a3Y && x == a3X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y + 2 == a3Y && x == a3X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected an asteroid");
		}
		
		if(y - 2 == a3Y && x == a3X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected an asteroid");
		}
		

		if(x + 1 == s1X && y == s1Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x - 1 == s1X && y == s1Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x + 2 == s1X && y == s1Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x - 2 == s1X && y == s1Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y + 1 == s1Y && x == s1X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y - 1 == s1Y && x == s1X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y + 2 == s1Y && x == s1X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y - 2 == s1Y && x == s1X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x + 1 == s2X && y == s2Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x - 1 == s2X && y == s2Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x + 2 == s2X && y == s2Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x - 2 == s2X && y == s2Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y + 1 == s2Y && x == s2X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y - 1 == s2Y && x == s2X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y + 2 == s2Y && x == s2X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y - 2 == s2Y && x == s2X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x + 1 == s3X && y == s3Y)
		{
			game_map.map[x+1][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x - 1 == s3X && y == s3Y)
		{
			game_map.map[x-1][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x + 2 == s3X && y == s3Y)
		{
			game_map.map[x+2][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(x - 2 == s3X && y == s3Y)
		{
			game_map.map[x-2][y].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y + 1 == s3Y && x == s3X)
		{
			game_map.map[x][y+1].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y - 1 == s3Y && x == s3X)
		{
			game_map.map[x][y-1].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y + 2 == s3Y && x == s3X)
		{
			game_map.map[x][y+2].show();
			logMessage("Sensor detected a space station");
		}
		
		if(y - 2 == s3Y && x == s3X)
		{
			game_map.map[x][y-2].show();
			logMessage("Sensor detected a space station");
		}
		
		game_map.display_map();
		
	}
}

function inputCheck()
{
	var input = [];

	//Concatenates coordinates	
	var pentium_1 = "" + eval(document.getElementById("1_x_map").value) + eval(document.getElementById("1_y_map").value);
	input[0] = pentium_1;	
	var pentium_2 = "" + document.getElementById("2_x_map").value + document.getElementById("2_y_map").value;
	input[1] = pentium_2;	
	var pentium_3 = "" + document.getElementById("3_x_map").value + document.getElementById("3_y_map").value;
	input[2] = pentium_3;	
	var pentium_4 = "" + document.getElementById("4_x_map").value + document.getElementById("4_y_map").value;
	input[3] = pentium_4;	
	var pentium_5 = "" + document.getElementById("5_x_map").value + document.getElementById("5_y_map").value;
	input[4] = pentium_5;	
	var pentium_6 = "" + document.getElementById("6_x_map").value + document.getElementById("6_y_map").value;
	input[5] = pentium_6;	
	var pentium_7 = "" + document.getElementById("7_x_map").value + document.getElementById("7_y_map").value;
	input[6] = pentium_7;	

	i = 6;

	//If user enables asteroids
	if(document.getElementById('asteroids').value == "True")
	{	
		var asteroid_1 = "" + document.getElementById("asteroid_1x").value + document.getElementById("asteroid_1y").value;
		input[++i] = asteroid_1;	
		var asteroid_2 = "" + document.getElementById("asteroid_2x").value + document.getElementById("asteroid_2y").value;
		input[++i] = asteroid_2;	
		var asteroid_3 = "" + document.getElementById("asteroid_3x").value + document.getElementById("asteroid_3y").value;
		input[++i] = asteroid_3;	
	}		

	//If user enables space stations	
	if(document.getElementById('space_stations').value == "True")
	{	
		var space_station_1 = "" + document.getElementById("space_station_1x").value + document.getElementById("space_station_1y").value;
		input[++i] = space_station_1;	
		var space_station_2 = "" + document.getElementById("space_station_2x").value + document.getElementById("space_station_2y").value;
		input[++i] = space_station_2;	
		var space_station_3 = "" + document.getElementById("space_station_3x").value + document.getElementById("space_station_3y").value;
		input[++i] = space_station_3;	
	}		

	for(var j = 0; j < i; ++j)
	{
		//If input is not a number or at starting location	
		if(input[j] == 0 || isNaN(input[j]))
		{
			return false;
		}	
	
		//Determines if artifacts are at same location	
		for(var k = j + 1; k < i; ++k)
		{
			if(input[j] == input[k])
			{
				return false;
			}
		}	
	}
	
	return true;
}
