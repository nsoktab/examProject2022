mapboxgl.accessToken =
  "pk.eyJ1IjoidG9zc3NzdGVyIiwiYSI6ImNsOWdxNmx0NTE1cXIzc2w5ODV1emd1bjIifQ.BdSPqQSCJsZRI-6hpGh9Vg";
const monument = [16.811008, 52.537312];
const map = new mapboxgl.Map({
  container: "map",
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/tosssster/cl9gqfuer000b15qk2moto6sq",
  center: monument,
  zoom: 13,
});

//elements for markers
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        message: "Dworcowa 79",
        iconSize: [60, 60],
      },
      image: "images/lasmap.jpg",
      geometry: {
        type: "Point",
        coordinates: [16.806566, 52.538582],
      },
    },
  ],
};

// Add markers to the map.
for (const marker of geojson.features) {
  // Create a DOM element for each marker.
  const el = document.createElement("div");
  const width = marker.properties.iconSize[0];
  const height = marker.properties.iconSize[1];
  el.className = "marker";
  console.log("elo");
  el.style.backgroundImage = `url(` + marker.image + `)`;
  console.log(marker.image);
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.borderRadius = "50%";
  el.style.backgroundSize = "100%";
  // create the popup
  const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    marker.properties.message
  );

  // Add markers to the map.
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);
}
