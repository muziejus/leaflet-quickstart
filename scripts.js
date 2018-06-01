// jQuery available as $
// Leaflet available as L
// Turf available as turf
// Markdown-it available as window.markdownit
//

// Intialize the map as the variable "map"
// This also hides the + / - zoom controls.
const map = L.map("mapdiv", { zoomControl: false });

// Set a center point and zoom level for it:
const vingtNeufRueDUlm = L.latLng([48.843495, 2.344888]);
const zoomLevel = 17;

// Now set the view of the map and add a tile layer:
map.setView(vingtNeufRueDUlm, zoomLevel);
L.tileLayer.provider("Stamen.Watercolor").addTo(map);

// If you prefer a different tile layer, see your options here:
// https://leaflet-extras.github.io/leaflet-providers/preview/
// Note that some may require registration. Then, where above we have
// "Stamen.Watercolor," paste in your chosen tiles, like
// "OpenStreetMap.Mapnik" or "Stamen.Toner"

// Add a marker for where we're at:
const vingtNeufMarker = L.marker(vingtNeufRueDUlm).addTo(map);

// Now add a popup to it:
vingtNeufMarker.bindPopup("<h3>Hello from 29 rue d’Ulm!</h3>");

// Use Markdown, instead:
const md = markdownit({html: true}).use(markdownitFootnote);
vingtNeufMarker.bindPopup(md.render("### Hello from 29 rue d’Ulm and the [NYU/PSL Workshop](https://wp.nyu.edu/nyupslgeo/workshop/)!"));

// Pull in the Vélib station dataset ParisData provides
const velibStationUrl = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-emplacement-des-stations&rows=68";

// Shift into async mode and put it on the map:
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
}); // close $.getJSON()

// Change the card header:
$("#card-header-text").html("<strong>Workshop à rue d’Ulm</strong>");

// Change the card body:
$("#outlet-card-body").html("Here is some new body text.");




