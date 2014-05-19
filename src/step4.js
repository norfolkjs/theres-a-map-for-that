/**
 * Step 4: Add quattroshapes county Layer
 *
 * Use L.tileLayer.wms to attach a remote WMS tile layer to the leaflet map.
 */
function step4 (map, next) {

  L.tileLayer.wms('//localhost:8080/geoserver/demo/wms', {
    layers: 'demo:qs_adm2',
    format: 'image/png',
    transparent: true,
    version: '1.1.0'
  }).addTo(map);

  next(null, map);
}
