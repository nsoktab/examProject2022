mapboxgl.accessToken =
  "pk.eyJ1IjoidG9zc3NzdGVyIiwiYSI6ImNsOWdxNmx0NTE1cXIzc2w5ODV1emd1bjIifQ.BdSPqQSCJsZRI-6hpGh9Vg";
const monument = [16.821951, 52.535115];
const map = new mapboxgl.Map({
  container: "map",
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/tosssster/cl9gqfuer000b15qk2moto6sq",
  center: monument,
  zoom: 14,
});

//elements for markers
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        message: "School",
        iconSize: [50, 50],
      },
      image: "images/szkola.jpg",
      geometry: {
        type: "Point",
        coordinates: [16.818338, 52.534761],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "Former Inn",
        iconSize: [50, 50],
      },
      image: "images/inn.jpg",
      geometry: {
        type: "Point",
        coordinates: [16.818462, 52.535257],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "Dworcowa 57",
        iconSize: [50, 50],
      },
      image: "images/dworcowa57.jpg",
      geometry: {
        type: "Point",
        coordinates: [16.819111, 52.534891],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "Dworcowa 35",
        iconSize: [50, 50],
      },
      image: "images/dworcowa35.jpg",
      geometry: {
        type: "Point",
        coordinates: [16.824422, 52.535031],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "Dworcowa 29/31",
        iconSize: [50, 50],
      },
      image: "images/dworcowa31.jpg",
      geometry: {
        type: "Point",
        coordinates: [16.825757, 52.535035],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "Train Station",
        iconSize: [50, 50],
      },
      image: "images/trainstation.jpg",
      geometry: {
        type: "Point",
        coordinates: [16.827908, 52.534797],
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
