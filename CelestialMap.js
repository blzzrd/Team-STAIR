// C O N S T A N T S
var UNK = '-'
var EMPTY = '+'
var CELESTIAL_OBJECT = 'C'
// Expand celestial object to planet, spacestation, asteroid, etc.

class Celestial_Point {
    // I at least think that this is what it's called?
    constructor() {
        this.type = EMPTY;
        this.visited = false;
        this.visible = false;
    } 
    constructor(type, visited, visible) {
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
	if (this.visible == true) {
	    return this.type;
	}
	else {
	    return UNK;
	}
    }
}

class Celestial_Map {
    constructor() { 
	this.size=eval(document.getElementById('mapSize'.value));
	this.map = build_map(this.size);	
    }

    build_map(size) {
        // Blank Map Generation 
        var map = [];
        for (var i = 0; i < size; i++) {
            map[i] = [];
            for (var j = 0; j < size; j++) {
                map[i][j] = new Celestial_Point();
            }
        }
	return map;
    }

    display_map() {
	// displaying it as a string.. 
	// we have to iterate n^2 times EACH TIME the player 
	// makes a decision, so we definitely need to revise this.
	alert(this.map)
	print_string = '';
	for (var i = 0; i < this.size; i++) {
	    print_string += '\n';
	    for(var j = 0; j < this.size; j++) {
		print_string += this.map[i][j].display() + ' ';
	    }
	}

	return print_string;
        // Check if objects are visible OR visited?
        // If objects are visible - display that in map
        // If objects are visited - keep that in map
        // If objects are not visited and not visible
            // Print UNK in place.
    }

    insert_object(x, y, type) {
        this.map[x][y].change_type(type);

        // Do we want to do if type == planet / space station
        // it's visible / invisible? we can arrange that here.
        // That way we don't bloat the functions above? 

	// Otherwise we can add it as another parameter, default FALSE.
    }
}


