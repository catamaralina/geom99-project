require(["esri/config", "esri/Map", "esri/views/MapView"], function(esriConfig, Map, MapView) {
  esriConfig.apiKey = "API Key";

  const webmap = new WebMap({
    portalItem: {
      // autocasts as new PortalItem()
      id: "App ID"
    }
  });
  const view = new MapView({
    map: Map,
    center: [X,Y], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv" // Div element
  });
});