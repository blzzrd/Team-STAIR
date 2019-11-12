function moveSpacecraft(angle, distance) { 
   // Angles: [0 = EAST, 90 = NORTH, 180 = WEST, 270 = SOUTH]
   distance = eval(distance.value)
   xCurrent = document.getElementsByName("xValue")[0].value;
   yCurrent = document.getElementsByName("yValue")[0].value;
   wormhole = false;
   max = eval(document.getElementById("mapSize").value);

   if (angle == 0) {
      if (xCurrent + distance > max) {
	wormhole = true;
      }
      else {
	newX = xCurrent + distance;
	newY = yCurrent;
      }
   }
   else if (angle == 90) {
      if (yCurrent + distance > max) {
	wormhole = true;
      }
      else {
	newX = xCurrent;
	newY = yCurrent + distance;
      }
   }
   else if (angle == 180) {
      if (xCurrent < distance) {
	wormhole = true;
      }
      else {
	newX = xCurrent - distance;
	newY = yCurrent;
      }
   }
   else if (angle == 270) {
      if (yCurrent < distance) {
	wormhole = true;
      }
      else {
	newX = xCurrent;
	newY = yCurrent - distance;
      }
   }

   if(wormhole == true){
	newX = randCord(max);
	newY = randCord(max);
	alert("Spaceship traveled out of the galaxy. Warping in a wormhole.")
   }

   // needs work here
   document.forms[0].xValue = newX;
   document.forms[0].yValue = newY;
   
   alert("Move Space Craft");
   checkEnergy();
   checkSupplies();
}

function randCord(max) { 
	return Math.round(Math.random() * max);
}
