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

    check_station () {
        for (var i = 0; i < 3; i++) {
            if (eval(UI.xVal.value) == this.locations[i][0] && eval(UI.yVal.value) == this.locations[i][1]) {
                if(confirm("You have encountered a space station. \n Would you like to spend 10 credits for 20 energy?")) {
                    this.purchase();
                }
            }
        }
    }

    purchase() {
        if (eval(UI.creditsVal.value) >= 10) {
            var credits = eval(UI.creditsVal.value) - 10;
            var energy = eval(UI.energyVal.value) + 20;
            UI.energyVal.value = num.toString(energy);
            UI.creditsVal.value = num.toString(credits);
        }
        else {
            alert("You have too few credits");
        }
    }

    alert_location(){ //Test function to see what is being loaded
        alert("(" + this.locations[0][0] + "," + this.locations[0][1] + ") " +
        "(" + this.locations[1][0] + "," + this.locations[1][1] + ") " +
        "(" + this.locations[2][0] + "," + this.locations[2][1] + ")"
        );
    }
}

var Docking_Station = new Docking();