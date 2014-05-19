/**
 * Step 2: Create a basemap, and define the basic parameters:
 *  - Tile Layer
 *      e.g. mapbox, mapquest, google, osm, bing
 */
function step2 (map, next) {
  L.tileLayer('https://{s}.tiles.mapbox.com/v3/norfolkjs.i5f2oehb/{z}/{x}/{y}.png').addTo(map);

  /*
  L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    subdomains: '1234'
  }).addTo(map);
  */

  next(null, map);
}
