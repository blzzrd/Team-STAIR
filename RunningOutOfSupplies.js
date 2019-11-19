function checkSupplies() {
   //alert("Checking Supplies");
   if(eval(UI.suppliesVal.value) <= 0) {
		if (customSettings.playerDies.value == "true") {
   			alert ("Game Over\nYou ran out of supplies");
			location.reload(false);
		}
		else {
			alert ("Player death is disabled");
		}
	}
}
