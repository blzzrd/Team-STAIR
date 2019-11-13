// C O N S T A N T S
var EMPTY = "-"
var VISITED = "+"
var CELESTIAL_OBJECT = "C" 

function build_map() {
    size = eval(document.getElementById('mapSize').value);

    // Blank Map Generation 
    var map = [];
    for(var i = 0; i < size; i++) {
        for var(j = 0; j < size; j++) {
            map[i][j] = EMPTY;
        }
    }
}

function display_map() {
    // Check if objects are visible / visited? 

}

function insert_object(object, x, y, visited) { 

}


