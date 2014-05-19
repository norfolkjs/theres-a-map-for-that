/**
 * Step 3: Add some GeoJSON using L.geoJson
 *
 * Grab any GeoJSON object, shove it into Leaflet, get yourself some map.
 */
function step3 (map, baseLayers, overlayLayers, next) {
  $.ajax({
    url: 'https://api.github.com/gists/ced59cd7e53d6f8349c9',
    type: 'GET',
    dataType: 'jsonp'
  }).then(function (r) {
    var response = JSON.parse(r.data.files['map.geojson'].content);

    // Add the geojson layer onto the map
    overlayLayers.geojson = L.geoJson(response);
    overlayLayers.geojson.addTo(map);

    next(null, map, baseLayers, overlayLayers);
  });
}
