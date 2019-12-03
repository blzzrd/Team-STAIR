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
	
	if(supplies == 0)
		checkSupplies();
	
	if(supplies <=2)
	{
		decreaseSupplies();
		checkSupplies();
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

