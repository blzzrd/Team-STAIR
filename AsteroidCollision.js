class Asteroid_Collision {
    constructor() {
        this.collision_damage = [];
        this.asteroid_location = [];
    }

    load_asteroids() {
        for(let i =0; i < 3; i++) {
            this.asteroid_location[i] = [];
        }
        this.asteroid_location[0][0] =document.getElementById("asteroid_1x").value;
        this.asteroid_location[0][1] =document.getElementById("asteroid_1y").value;
        this.asteroid_location[1][0] =document.getElementById("asteroid_2x").value;
        this.asteroid_location[1][1] =document.getElementById("asteroid_2y").value;
        this.asteroid_location[2][0] =document.getElementById("asteroid_3x").value;
        this.asteroid_location[2][1] =document.getElementById("asteroid_3y").value;
        this.collision_damage[0] = document.getElementById("damage_1").value;
        this.collision_damage[1] = document.getElementById("damage_2").value;
        this.collision_damage[2] = document.getElementById("damage_3").value;
    }

    check_asteroid () {
        for (var i = 0; i < 3; i++) {
            if (eval(UI.xVal.value) == this.asteroid_location[i][0] && eval(UI.yVal.value) == this.asteroid_location[i][1]) {
                alert("You have crashed into an asteroid. \n You have taken " + this.collision_damage[i] + " damage.");
                this.crash_damage(i);
                this.asteroid_location[i][0] -= (this.asteroid_location[i][0]+1);
                this.asteroid_location[i][1] -= (this.asteroid_location[i][1]+1);
            }
        }
    }

    crash_damage (i) {
        var new_supplies = eval(UI.suppliesVal.value) - this.collision_damage[i];
        document.getElementById('suppliesVal').value = new_supplies;
        checkSupplies();
    }

    alert_asteroid() {
        alert(this.asteroid_location[0][0]+", "+this.asteroid_location[0][1]+ "  " +
            this.asteroid_location[1][0]+", "+this.asteroid_location[1][1]+ "  "+
            this.asteroid_location[2][0]+", "+this.asteroid_location[2][1]
    );
    }

}
var Collision = new Asteroid_Collision();