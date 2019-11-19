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
			c_map.map[x+1][y].show();
		
		if(x - 1 == p1X && y == p1Y)
			c_map.map[x-1][y].show();
		
		if(x + 2 == p1X && y == p1Y)
			c_map.map[x+2][y].show();
		
		if(x - 2 == p1X && y == p1Y)
			c_map.map[x-2][y].show();
		
		if(y + 1 == p1Y && x == p1X)
			c_map.map[x][y+1].show();
		
		if(y - 1 == p1Y && x == p1X)
			c_map.map[x][y-1].show();
		
		if(y + 2 == p1Y && x == p1X)
			c_map.map[x][y+2].show();
		
		if(y - 2 == p1Y && x == p1X)
			c_map.map[x][y-2].show();
		
		if(x + 1 == p2X && y == p2Y)
			c_map.map[x+1][y].show();
		
		if(x - 1 == p2X && y == p2Y)
			c_map.map[x-1][y].show();
		
		if(x + 2 == p2X && y == p2Y)
			c_map.map[x+2][y].show();
		
		if(x - 2 == p2X && y == p2Y)
			c_map.map[x-2][y].show();
		
		if(y + 1 == p2Y && x == p2X)
			c_map.map[x][y+1].show();
		
		if(y - 1 == p2Y && x == p2X)
			c_map.map[x][y-1].show();
		
		if(y + 2 == p2Y && x == p2X)
			c_map.map[x][y+2].show();
		
		if(y - 2 == p2Y && x == p2X)
			c_map.map[x][y-2].show();
		
		if(x + 1 == p3X && y == p3Y)
			c_map.map[x+1][y].show();
		
		if(x - 1 == p3X && y == p3Y)
			c_map.map[x-1][y].show();
		
		if(x + 2 == p3X && y == p3Y)
			c_map.map[x+2][y].show();
		
		if(x - 2 == p3X && y == p3Y)
			c_map.map[x-2][y].show();
		
		if(y + 1 == p3Y && x == p3X)
			c_map.map[x][y+1].show();
		
		if(y - 1 == p3Y && x == p3X)
			c_map.map[x][y-1].show();
		
		if(y + 2 == p3Y && x == p3X)
			c_map.map[x][y+2].show();
		
		if(y - 2 == p3Y && x == p3X)
			c_map.map[x][y-2].show();
		
		if(x + 1 == p4X && y == p4Y)
			c_map.map[x+1][y].show();
		
		if(x - 1 == p4X && y == p4Y)
			c_map.map[x-1][y].show();
		
		if(x + 2 == p4X && y == p4Y)
			c_map.map[x+2][y].show();
		
		if(x - 2 == p4X && y == p4Y)
			c_map.map[x-2][y].show();
		
		if(y + 1 == p4Y && x == p4X)
			c_map.map[x][y+1].show();
		
		if(y - 1 == p4Y && x == p4X)
			c_map.map[x][y-1].show();
		
		if(y + 2 == p4Y && x == p4X)
			c_map.map[x][y+2].show();
		
		if(y - 2 == p4Y && x == p4X)
			c_map.map[x][y-2].show();
		
		if(x + 1 == p5X && y == p5Y)
			c_map.map[x+1][y].show();
		
		if(x - 1 == p5X && y == p5Y)
			c_map.map[x-1][y].show();
		
		if(x + 2 == p5X && y == p5Y)
			c_map.map[x+2][y].show();
		
		if(x - 2 == p5X && y == p5Y)
			c_map.map[x-2][y].show();
		
		if(y + 1 == p5Y && x == p5X)
			c_map.map[x][y+1].show();
		
		if(y - 1 == p5Y && x == p5X)
			c_map.map[x][y-1].show();
		
		if(y + 2 == p5Y && x == p5X)
			c_map.map[x][y+2].show();
		
		if(y - 2 == p5Y && x == p5X)
			c_map.map[x][y-2].show();
		
		if(x + 1 == p6X && y == p6Y)
			c_map.map[x+1][y].show();
		
		if(x - 1 == p6X && y == p6Y)
			c_map.map[x-1][y].show();
		
		if(x + 2 == p6X && y == p6Y)
			c_map.map[x+2][y].show();
		
		if(x - 2 == p6X && y == p6Y)
			c_map.map[x-2][y].show();
		
		if(y + 1 == p6Y && x == p6X)
			c_map.map[x][y+1].show();
		
		if(y - 1 == p6Y && x == p6X)
			c_map.map[x][y-1].show();
		
		if(y + 2 == p6Y && x == p6X)
			c_map.map[x][y+2].show();
		
		if(y - 2 == p6Y && x == p6X)
			c_map.map[x][y-2].show();
		
		if(x + 1 == p7X && y == p7Y)
			c_map.map[x+1][y].show();
		
		if(x - 1 == p7X && y == p7Y)
			c_map.map[x-1][y].show();
		
		if(x + 2 == p7X && y == p7Y)
			c_map.map[x+2][y].show();
		
		if(x - 2 == p7X && y == p7Y)
			c_map.map[x-2][y].show();
		
		if(y + 1 == p7Y && x == p7X)
			c_map.map[x][y+1].show();
		
		if(y - 1 == p7Y && x == p7X)
			c_map.map[x][y-1].show();
		
		if(y + 2 == p7Y && x == p7X)
			c_map.map[x][y+2].show();
		
		if(y - 2 == p7Y && x == p7X)
			c_map.map[x][y-2].show();
		
	}
}
/*
		if(x + 1 == p1X || x + 1 == p2X || x + 1 == p3X || x + 1 == p4X || x + 1 == p5X || x + 1 == p6X || x + 1 == p7X)
		{
			if(y == p1Y || y == p2Y || y == p3Y || y == p4Y || y == p5Y || y == p6Y || y == p7Y)
				c_map.map[x+1][y].show();
		}

		if(x + 2 == p1X || x + 2 == p2X || x + 2 == p3X || x + 2 == p4X || x + 2 == p5X || x + 2 == p6X || x + 2 == p7X)
		{
			if(y == p1Y || y == p2Y || y == p3Y || y == p4Y || y == p5Y || y == p6Y || y == p7Y)
				c_map.map[x+2][y].show();
		}

		if(x - 1 == p1X || x - 1 == p2X || x - 1 == p3X || x - 1 == p4X || x - 1 == p5X || x - 1 == p6X || x - 1 == p7X)
		{
			if(y == p1Y || y == p2Y || y == p3Y || y == p4Y || y == p5Y || y == p6Y || y == p7Y)
				c_map.map[x-1][y].show();
		}

		if(x - 2 == p1X || x - 2 == p2X || x - 2 == p3X || x - 2 == p4X || x - 2 == p5X || x - 2 == p6X || x - 2 == p7X)
		{
			if(y == p1Y || y == p2Y || y == p3Y || y == p4Y || y == p5Y || y == p6Y || y == p7Y)
				c_map.map[x-2][y].show();
		}

		if(y + 1 == p1Y || y + 1 == p2Y || y + 1 == p3Y || y + 1 == p4Y || y + 1 == p5Y || y + 1 == p6Y || y + 1 == p7Y)
		{
			if(x == p1Y || x == p2Y || x == p3Y || x == p4Y || x == p5Y || x == p6Y || x == p7Y)
				c_map.map[x][y+1].show();
		}

		if(y + 2 == p1Y || y + 2 == p2Y || y + 2 == p3Y || y + 2 == p4Y || y + 2 == p5Y || y + 2 == p6Y || y + 2 == p7Y)
		{
			if(x == p1Y || x == p2Y || x == p3Y || x == p4Y || x == p5Y || x == p6Y || x == p7Y)
				c_map.map[x][y+2].show();
		}

		if(y - 1 == p1Y || y - 1 == p2Y || y - 1 == p3Y || y - 1 == p4Y || y - 1 == p5Y || y - 1 == p6Y || y - 1 == p7Y)
		{
			if(x == p1Y || x == p2Y || x == p3Y || x == p4Y || x == p5Y || x == p6Y || x == p7Y)
				c_map.map[x][y-1].show();
		}

		if(y - 2 == p1Y || y - 2 == p2Y || y - 2 == p3Y || y - 2 == p4Y || y - 2 == p5Y || y - 2 == p6Y || y - 2 == p7Y)
		{
			if(x == p1Y || x == p2Y || x == p3Y || x == p4Y || x == p5Y || x == p6Y || x == p7Y)
				c_map.map[x][y-2].show();
		}

*/

