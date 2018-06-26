function styleInfo(){
    return {
        radius: 100,
        fillColor: "#fff",
        color: "fff",
        weight: 1,
        opacity: 0.9,
        fillOpacity: 1
    }
}

// Creating map object
var myMap = L.map("map", {
    center: [34.5133, -94.1629],
    zoom: 5
});

// Adding tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		accessToken: 'pk.eyJ1IjoidGRhbHRvbjEwMTAiLCJhIjoiY2ppZG9seXd1MDA4NDN3cGducGhqMnJvaiJ9.wPK5zXCCkvGxRp8cDQELmA',
		id: 'mapbox.streets',
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	}).addTo(myMap);

d3.csv("PreviousAttacks_Rev.csv", function(error, testdata) {
    if (error) return console.warn(error);
  
    console.log(testdata);

    var circleMarkers = []

    for(var i=0; i<testdata.length; i++){
        var currentLocation = {
            location: testdata[i].location,
            latlong: [parseFloat(testdata[i].latitude), parseFloat(testdata[i].longitude)],
            casualties: testdata[i].casualties,
            date: testdata[i].date
        }
        
        if(!isNaN(currentLocation.latlong[1])){
            L.circle(currentLocation.latlong, 100000, {
                radius:500, 
                fillColor:"red",
                opacity: 1,
                color: "black"
            }).addTo(myMap)
        }

        L.circle([43.64701, -79.39425], 400,{color:'yellow',opacity:1,fillColor: 'blue',fillOpacity:.4}).addTo(myMap);
    }
});
