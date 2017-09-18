var map = new mapboxgl.Map({
    container: 'map',
    style: './assets/scripts/style.json',
    attributionControl: true,
    hash: false
});

// map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [45.052998577867044, 38.97470441664118]
    },
    properties: {
      title: 'Я здесь',
      description: 'Шилякин А.М.'
    }
  }]
};

var el = document.createElement('div');
el.className = 'map-marker';

var marker = new mapboxgl.Marker(el, {offset: [-50 / 2, -100 / 2]})
  .setLngLat([38.97470441664118, 45.052998577867044])
  .addTo(map);


