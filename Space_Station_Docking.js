class Docking {
    constructor() {
        this.locations = [];
        this.energy_gain = 20;
        this.cost = 10;
    }

    load_locations () { //loading the locations of space stations
        for (var i = 0; i < 3; i++) {
            this.locations[i]= [];
        }
        this.locations[0][0] =document.getElementById("space_station_1x").value;
        this.locations[0][1] =document.getElementById("space_station_1y").value;
        this.locations[1][0] =document.getElementById("space_station_2x").value;
        this.locations[1][1] =document.getElementById("space_station_2y").value;
        this.locations[2][0] =document.getElementById("space_station_3x").value;
        this.locations[2][1] =document.getElementById("space_station_3y").value;
        //this.alert_location();
    }
    alert_location(){ //Test function to see what is being loaded
        alert("(" + this.locations[0][0] + "," + this.locations[0][1] + ") " +
        "(" + this.locations[1][0] + "," + this.locations[1][1] + ") " +
        "(" + this.locations[2][0] + "," + this.locations[2][1] + ")"
        );
    }
}

var Docking_Station = new Docking();