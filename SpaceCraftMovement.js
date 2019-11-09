function moveSpacecraft(angle, distance) { 
   // Angles: [0 = EAST, 90 = NORTH, 180 = WEST, 270 = SOUTH]
   xCurrent = document.getElementsByName("xValue")[0].value;
   yCurrent = document.getElementsByName("yValue")[0].value;
   wormhole = false

   if (angle == 0) {
      if (xCurrent + distance > Max) {
	wormhole = true
      }
      else {
	newX = xCurrent + distance;
	newY = yCurrent;
      }
   }
   else if (angle == 90) {
      if (yCurrent + distance > Max) {
	wormhole = true
      }
      else {
	newX = xCurrent;
	newY = yCurrent + distance;
      }
   }
   else if (angle == 180) {
      if (xCurrent < distance) {
	wormhole = true
      }
      else {
	newX = xCurrent - distance;
	newY = yCurrent;
      }
   }
   else if (angle == 270) {
      if (yCurrent < distance) {
	wormhole = true
      }
      else {
	newX = xCurrent;
	newY = yCurrent - distance;
      }
   }
   if(wormhole == true){
	newX = randCord(Max)
	newY = randCord(Max)
	alert("Spaceship traveled out of the galaxy. Warping in a wormhole.")
   }
   document.forms[0].xValue = newX
   document.forms[0].yValue = newY
   
   alert("Move Space Craft");
   checkEnergy();
   checkSupplies();
}

function randCord(max) { 
	return Math.round(Math.random() * max);
}
