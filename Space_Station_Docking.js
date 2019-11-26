class Docking {
    constructor() {
        this.locations = [];
        this.energy_gain = 20;
        this.cost = 10;
    }

    load_locations () {
        if (document.getElementById('space_station') == true) {
            this.locations.push[eval(place_space_stations.space_station_1x.value), eval(place_space_stations.space_station_1y.value)]
            this.locations.push[eval(place_space_stations.space_station_2x.value), eval(place_space_stations.space_station_2y.value)]
            this.locations.push[eval(place_space_stations.space_station_3x.value), eval(place_space_stations.space_station_3y.value)]
        }

    }

}