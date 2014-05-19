/**
 * Step 3: Add some GeoJSON using L.geoJson
 *
 * Grab any GeoJSON object, shove it into Leaflet, get yourself some map.
 */
function step3 (map, next) {
  $.ajax({
    url: 'https://api.github.com/gists/ced59cd7e53d6f8349c9',
    type: 'GET',
    dataType: 'jsonp'
  }).then(function (r) {
    var geojson = JSON.parse(r.data.files['map.geojson'].content);

    // Add a layer onto the map
    L.geoJson(geojson).addTo(map);

    next(null, map);
  });
}
