function moveSpacecraft(angle, distance) {

      // Gather all the variables required.
      distance = eval(distance.value)

      // Change MAP  
	//If user moves more than one space,
	//each space is checked for artifact	
	for(var i = 0; i < distance; ++i) 
	{
	 	game_map.traverse_map(angle, 1);
		//artifact_check();
	}

      decreaseEnergy(distance);
      checkEnergy();

      decreaseSupplies(distance);
      checkSupplies();

	artifact_check();
	recipe_status();

      game_map.display_map();
      Docking_Station.check_station(); //Sams code for space station docking
      Collision.check_asteroid(); //Sams code to check for asteroid collision
}

function decreaseEnergy(distance) {
      energy = eval(document.getElementById('energyVal').value);

      document.getElementById('energyVal').value = energy - (10 * distance);
}

function decreaseSupplies() {
      supplies = eval(document.getElementById('suppliesVal').value);

      document.getElementById('suppliesVal').value = supplies - 2;
}



function randCord(max) {
      return Math.round(Math.random() * max);
}

