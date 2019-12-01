

function logMessage (message) {
	//adds message to messageLog area
		document.getElementById("messageLog").innerHTML += message + "\n";
	//make text area display most recent messages
		document.getElementById('messageLog').scrollTop = document.getElementById('messageLog').scrollHeight;
}