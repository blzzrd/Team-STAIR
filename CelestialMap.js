// C O N S T A N T S
var UNK = '-'
var EMPTY = '+'
var CELESTIAL_OBJECT = 'C'
var PLAYER = 'O'
// Expand celestial object to planet, spacestation, asteroid, etc.


class Celestial_Point {
    // I at least think that this is what it's called?
    constructor() {
        this.type = EMPTY;
        this.obj = null;
        this.visited = false;
        this.visible = false;
        this.curr = false;
    }

    load(type = EMPTY, visited = false, visible = false) {
        this.type = type;
        this.visited = visited;
        this.visible = visible;
    }

    change_type(new_type) {
        this.type = new_type;
    }

    visit() {
        this.visited = true;
        this.show()
    }

    show() {
        this.visible = true;
    }

    current() {
        this.visit();
        this.curr = !this.curr;
    }

    hide() {
        this.visible = false;
    }

    display() {
        // is a pseudo-display for the celestial map function.
        if (this.curr == true) {
            return PLAYER;
        }

        if (this.visible == true || this.visited == true) {
            return this.type;
        }
        else {
            return UNK;
        }
    }
}

class Celestial_Map {

    constructor() {
        this.size = eval(gameSettings["mapSize"]);
        this.map = this.build_map(this.size);
    }


    build_map() {
        // Blank Map Generation 
        var map = [];
        for (var i = 0; i < this.size; i++) {
            map[i] = [];
            for (var j = 0; j < this.size; j++) {
                map[i][j] = new Celestial_Point();
            }
        }

        map[gameSettings["xLocation"]][gameSettings["yLocation"]].current();
        return map;
    }

    display_map() {
        // displaying it as a string.. 
        // we have to iterate n^2 times EACH TIME the player 
        // makes a decision, so we definitely need to revise this.
        //alert(this.map);
        document.getElementById("HtmlMap").rows = 6;
        document.getElementById("HtmlMap").cols = gameSettings["mapSize"] * 2;
        // below if is to allow for map to load on opening the page
        /*
        if (gameSettings[supplies] == eval(UI.energyVal.value)) {
            this.map[gameSettings["mapSize"] - gameSettings["yLocation"]][gameSettings["xLocation"]].show();
        }
        // below else will reveal each node that you land on
        else {
            this.map[gameSettings["mapSize"] - eval(UI.yVal.value)][eval(UI.xVal.value)].show();
        }
        */
        var print_string = '';
        for (var i = this.size - 1; i >= 0; i--) {
            print_string += '\n';
            for (var j = 0; j < this.size; j++) {
                print_string += this.map[i][j].display() + ' ';
            }
        }

        document.getElementById("HtmlMap").innerHTML = print_string;
        return print_string;
    }

    insert_object(x, y, type) {
        this.map[x][y].change_type(type);

        // Do we want to do if type == planet / space station
        // it's visible / invisible? we can arrange that here.
        // That way we don't bloat the functions above? 

        // Otherwise we can add it as another parameter, default FALSE.
    }

    traverse_map(angle, distance) {
        // Angles: [0 = EAST, 90 = NORTH, 180 = WEST, 270 = SOUTH]
        // Perform the computations based on the angles.

        // Gather required variables.
        var xCurrent = eval(document.getElementById("xVal").value);
        var yCurrent = eval(document.getElementById("yVal").value);
        var wormhole = false;
        var max = eval(document.getElementById("mapSize").value);

        this.map[xCurrent][yCurrent].current()

        var newX, newY;

        if (angle == 0) {
            if (yCurrent + distance >= max) {
                wormhole = true;
                while (yCurrent != max - 1) {
                    yCurrent += 1;
                    this.map[xCurrent][yCurrent].visit();
                }
            }
            else {
                newX = xCurrent;
                newY = yCurrent + distance;

                while (distance >= 0) {
                    this.map[xCurrent][yCurrent + distance].visit();
                    distance -= 1;
                }
            }
        }
        else if (angle == 90) {
            if (xCurrent + distance >= max) {
                wormhole = true;
                while (xCurrent != max - 1) {
                    xCurrent += 1;
                    this.map[xCurrent][yCurrent].visit();
                }
            }
            else {
                newX = xCurrent + distance;
                newY = yCurrent;

                while (distance >= 0) {
                    this.map[xCurrent + distance][yCurrent].visit();
                    distance -= 1;
                }
            }
        }
        else if (angle == 180) {
            if (yCurrent < distance) {
                wormhole = true;
                while (yCurrent > 0) {
                    yCurrent -= 1;
                    this.map[xCurrent][yCurrent].visit();
                }
            }
            else {
                newX = xCurrent;
                newY = yCurrent - distance;
                
                while (distance > 0) {
                    this.map[xCurrent][yCurrent - distance].visit();
                    distance -= 1;
                }
            }
        }
        else if (angle == 270) {
            if (xCurrent < distance) {
                wormhole = true;
                while (xCurrent > 0) {
                    xCurrent -= 1;
                    this.map[xCurrent][yCurrent].visit();
                }
            }
            else {
                newX = xCurrent - distance;
                newY = yCurrent;
                
                while (distance >= 0) {
                    this.map[xCurrent - distance][yCurrent].show();
                    distance -= 1;
                }
            }
        }

        // Prompt the message based on whether the wormhole exists or not.
        if (wormhole == true) {
            if (gameSettings["wormholeBehavior"] == "static") {
                newX = gameSettings["xLocation"]
                newY = gameSettings["yLocation"]
            }
            else {
                newX = randCord(max);
                newY = randCord(max);
            }



            alert("Spaceship traveled out of the galaxy. Warping through a wormhole.")
        }
        else {
            alert("Moving Space Craft.");
        }

        // update the values as necessary.
        document.getElementById('xVal').value = newX;
        document.getElementById('yVal').value = newY;

        this.map[newX][newY].current()
        




    }
}

var game_map = new Celestial_Map()
