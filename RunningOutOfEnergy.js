function checkEnergy() {
   alert ("Checking Energy");
   if(eval(UI.energyVal.value) == 0) {
		if (customSettings.playerDies.value == "true") {
   			alert ("Game Over\nYou ran out of energy");
		}
		else {
			alert ("Player death is disabled");
		}
	}
}
