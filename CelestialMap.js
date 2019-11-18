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
        this.visited = false;
        this.visible = false;
    }

    load(type=EMPTY, visited=false, visible=false) {
        this.type = type;
        this.visited = visited;
        this.visible = visible;
    }

    change_type(new_type) {
        this.type = new_type;
    }

    visit() {
        this.visit = true;
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    display() {
        // is a pseudo-display for the celestial map function.
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
        return map;
    }

    display_map() {
        // displaying it as a string.. 
        // we have to iterate n^2 times EACH TIME the player 
        // makes a decision, so we definitely need to revise this.
        //alert(this.map);
	if (gameSettings[supplies] == eval(UI.energyVal.value)) {
		this.map[gameSettings["mapSize"]-gameSettings["yLocation"]][gameSettings["xLocation"]].show();
	}
	else {
		this.map[gameSettings["mapSize"]-eval(UI.yVal.value)][eval(UI.xVal.value)].show();
	}
        var print_string = '';
        for (var i = 0; i < this.size; i++) {
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
}


var c_map = new Celestial_Map();

