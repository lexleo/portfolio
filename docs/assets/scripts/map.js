var map = new mapboxgl.Map({
    container: 'map',
    style: './assets/scripts/style.json',
    attributionControl: true,
    hash: false
});

// map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

var marker = new mapboxgl.Marker()
  .setLngLat([45.052998577867044,38.97470441664118])
  .addTo(map);


