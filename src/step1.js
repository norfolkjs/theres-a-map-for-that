/**
 * Step 1: Create a basemap, and define the basic parameters:
 *  - Div Element
 *      e.g. 'map'
 *      
 *  - Map Center (lat, lon)
 *      e.g. (36.85318892163074, -76.28965592302848)
 *
 *  - Zoom Level
 *      e.g. 13
 */
function step1 (next) {
  var map = L.map('map').setView([36.85318892163074, -76.28965592302848], 14);

  next(null, map);
}
