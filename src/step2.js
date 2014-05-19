/**
 * Step 2: Create a basemap, and define the basic parameters:
 *  - Tile Layer
 *      e.g. mapbox, mapquest, google, osm, bing
 *
 *  - setup baseLayers and overlayLayers objects for Layer Control
 */
function step2 (map, next) {

  var baseLayers = {
      'mapbox': L.tileLayer('https://{s}.tiles.mapbox.com/v3/norfolkjs.i5f2oehb/{z}/{x}/{y}.png'),

      'mapquest': L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
        subdomains: '1234'
      })
    },
    overlayLayers = {
    };

  baseLayers.mapbox.addTo(map);
  baseLayers.mapquest.addTo(map);

  next(null, map, baseLayers, overlayLayers);
}
