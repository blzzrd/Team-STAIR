function moveSpacecraft(angle, distance) { 

   // Gather all the variables required.
   distance = eval(distance.value)
   xCurrent = eval(document.getElementById("xVal").value);
   yCurrent = eval(document.getElementById("yVal").value);
   wormhole = false;
   max = eval(document.getElementById("mapSize").value);

   // Angles: [0 = EAST, 90 = NORTH, 180 = WEST, 270 = SOUTH]
   // Perform the computations based on the angles.
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

   // Prompt the message based on whether the wormhole exists or not.
   if(wormhole == true){
	newX = randCord(max);
	newY = randCord(max);
	alert("Spaceship traveled out of the galaxy. Warping in a wormhole.")
   }
   else {
        alert("Moving Space Craft.");
   }

   // update the values as necessary.
   document.getElementById('xVal').value = newX;
   document.getElementById('yVal').value = newY;
   
   checkEnergy();
   checkSupplies();
}

function randCord(max) { 
	return Math.round(Math.random() * max);
}

