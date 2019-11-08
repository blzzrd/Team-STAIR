function moveSpacecraft(angle, distance) {
   // Angles: [0 = EAST, 90 = NORTH, 180 = WEST, 270 = SOUTH]
   xCurrent = document.getElementsByName("xValue")[0].value
   yCurrent = document.getElementsByName("yValue")[0].value

   if (angle == 0) {
      if (xCurrent + distance > Max) {
         // return wormhole coords and message
      }
      else {
         // new x = xCurrent + distance
         // update xValue to be correct.
      }
   }
   else if (angle == 90) {
      if (yCurrent + distance > Max) {
         // return wormhole coords and message
      }
      else {
         // update yValue to be correct.
      }
   }
   else if (angle == 180) {
      if (xCurrent < distance) {
         // return wormhole coords and message
      }
      else {
         // new x = xCurrent - distance
         // update xValue to be correct.
      }
   }
   else if (angle == 270) {
      if (yCurrent < distance) {
         // return wormhole coords
      }
      else {
         // update yValue to be correct.
      }
   }



   alert("Move Space Craft");
   checkEnergy();
   checkSupplies();
}