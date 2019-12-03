function checkEnergy() {
   //alert ("Checking Energy");
   if(eval(UI.energyVal.value) <= 0) {
		if (customSettings.playerDies.value == "true") {
   			alert ("Game Over\nYou ran out of energy");
			location.reload(false);
		}
		else {
			logMessage("Player death is disabled");
		}
	}
}
