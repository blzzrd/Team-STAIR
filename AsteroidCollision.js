class Asteroid_Collision {
    constructor() {
        this.collision_damage = 20;
        this.asteroid_location = [];
    }

    load_asteroids() {
        alert ("load_asteroids call");
        for(let i =0; i < 3; i++) {
            this.asteroid_location[i] = [];
        }
        this.asteroid_location[0][0] =document.getElementById("asteroid_1x").value;
        this.asteroid_location[0][1] =document.getElementById("asteroid_1y").value;
        this.asteroid_location[1][0] =document.getElementById("asteroid_2x").value;
        this.asteroid_location[1][1] =document.getElementById("asteroid_2y").value;
        this.asteroid_location[2][0] =document.getElementById("asteroid_3x").value;
        this.asteroid_location[2][1] =document.getElementById("asteroid_3y").value;
        alert("loaded asteroids");
        this.alert_asteroid();
    }

    alert_asteroid() {
        alert(this.asteroid_location[0][0]+", "+this.asteroid_location[0][1]+ "  " +
            this.asteroid_location[1][0]+", "+this.asteroid_location[1][1]+ "  "+
            this.asteroid_location[2][0]+", "+this.asteroid_location[2][1]
    );
    }

}
var Collision = new Asteroid_Collision();