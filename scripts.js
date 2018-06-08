// jQuery available as $
// Leaflet available as L
// Turf available as turf
// Markdown-it available as markdownit
// d3 available as d3

// Some features in this demo rely on a local webserver for them to work on
// your computer. Luckily, it's not very hard to do with python.
//
// In the terminal, cd into the directory in which this file rests and run:
//
// python3 -m http:server 8888
//
// or, if you don't have python 3:
//
// python -m SimpleHTTPServer 8888
//
// Now, point your browser to http://localhost:8888/
//
// If you have Windows, use "py" instead of "python3."

// Intialize the map as the variable "map"
// This also hides the + / - zoom controls.
// const map = L.map("mapdiv", { zoomControl: false });

// Set a center point and zoom level for it:
// const vingtNeufRueDUlm = L.latLng([48.843495, 2.344888]);
// const zoomLevel = 17;

// Now set the view of the map and add a tile layer:
// map.setView(vingtNeufRueDUlm, zoomLevel);
// L.tileLayer.provider("Stamen.Watercolor").addTo(map);

// If you prefer a different tile layer, see your options here:
// https://leaflet-extras.github.io/leaflet-providers/preview/
// Note that some may require registration. Then, where above we have
// "Stamen.Watercolor," paste in your chosen tiles, like
// "OpenStreetMap.Mapnik" or "Stamen.Toner"

// Add a marker for where we're at:
// const vingtNeufMarker = L.marker(vingtNeufRueDUlm).addTo(map);

// Now add a popup to it:
// vingtNeufMarker.bindPopup("<h3>Hello from 29 rue d’Ulm!</h3>");

// Use Markdown, instead:
// const md = markdownit({html: true}).use(markdownitFootnote);
// vingtNeufMarker.bindPopup(md.render("### Hello from 29 rue d’Ulm and the [NYU/PSL Workshop](https://wp.nyu.edu/nyupslgeo/workshop/)!"));

// Use d3 to parse the places.csv csv file.
//
// d3.csv() takes three attributes. First is the url to the csv file, which is
// just "places.csv" because the file is in the same folder as this file. The
// second function allows us to manipulate the data a bit, so we create an
// object out of it. Most importantly, we turn the latitude and longitude into
// numbers.
//
// That gives us a new object that we call "list." It's not an Array, but it
// behaves somewhat like one. The last member, however, is the header row.

/*
d3.csv("places.csv", data => {
  return {
    nom: data.nom,
    latitude: +data.latitude,
    longitude: +data.longitude,
    type: data.type,
    lien: data.lien
  };
}, list => {
  // iterate over the list object
  list.forEach(place => {
    // We need to make sure that we ignore the object that only holds the headers.
    if(place.latitude){
      // We change the color and icon (see below) based on the value of the
      // "type" property.
      let color;
      let icon;
      switch (place.type) {
      case "batuniv":
        color = "#cc0000";
        icon = "graduation-cap";
        break;
      case "restmex":
        color = "#00cc00";
        icon = "utensils";
        break;
      case "librairie":
        color = "#0000cc";
        icon = "book";
        break;
      }
      // And then we use the other properties to make add a circle marker to the map.
      L.circleMarker([place.latitude, place.longitude],
        { fillColor: color, color: color }
      ).bindPopup(`<h3><a href="${place.lien}">${place.nom}</a></h3>`).addTo(map);
      // Alternatively, we can use icons from font-awesome.
      // L.marker([place.latitude, place.longitude],
      //   { icon: L.divIcon(
      //     { html: `<i style="color: ${color}" class="fa fa-${icon}"></i>`, iconSize: [30, 30] }
      //   )}
      // ).bindTooltip(place.nom).addTo(map);
    }
  });
});
*/

// Alternatively, we can contact a server and ask data from it.
//
// Pull in the Vélib station dataset ParisData provides
// const velibStationUrl = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-emplacement-des-stations&rows=68";

// Shift into async mode and put it on the map:

/*

$.getJSON(velibStationUrl, stationData => {
  // Create a layer group for the stations
  const velibStationsLayer = L.layerGroup();
  
  // stationData has an array inside of it called "records" that 
  // holds each station's data. Within each record, there's a "fields"
  // object that has three fields we're interested in: "name," "lat,"
  // and "lon."

  // iterate over the records array
  stationData.records.forEach( record => {
    // build an L.circleMarker to add to the velibStationMarkers array.
    const velibCircle = L.circleMarker([record.fields.lat, record.fields.lon], {
      radius: 15,
      color: "#eeeeee", // outline or stroke color
      weight: 2, // outline or stroke width
      fillColor: "#666666",
      fillOpacity: 0.5
    }).bindPopup(`<h3>${record.fields.name}</h3>`);
    velibStationsLayer.addLayer(velibCircle);
  });
  // And add it to the map
  velibStationsLayer.addTo(map);

  // Now convert the layer to GeoJSON so we can work on it with Turf.
  const velibStationsGeoJSON = velibStationsLayer.toGeoJSON();
  // In turf, let's buffer the points and then dissolve them together
  const bufferedStations = turf.dissolve(
    turf.buffer(
      velibStationsGeoJSON, 400, { units: "meters" }
    )
  );
  L.geoJSON(bufferedStations, {
    style() {
      return {
        color: "#ff0000",
        weight: 5,
        fillOpacity: 0.0
      };
    }
  }).addTo(map);
}); // close $.getJSON()

*/

// Use jQuery to manipulate the html elements.
// Change the card header:
// $("#card-header-text").html("<strong>Workshop à rue d’Ulm</strong>");

// Change the card body to the body.md file:
// $.ajax({
//   url: "body.md",
//   success(bodyMarkdown) {
//     $("#outlet-card-body").html(md.render(bodyMarkdown));
//   }
// });
