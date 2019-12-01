function moveSpacecraft(angle, distance) {

      // Gather all the variables required.
      distance = eval(distance.value)

      // Change MAP  
	for(var i = 1; i <= distance; ++i) 
	{
	 	game_map.traverse_map(angle, i);
		if(artifact_check());
			break;	
	}

      decreaseEnergy(distance);
      checkEnergy();

      decreaseSupplies(distance);
      checkSupplies();

	recipe_status();

      game_map.display_map();
      Docking_Station.check_station(); //Sams code for space station docking	
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

