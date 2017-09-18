// Initialize map
var map = new mapboxgl.Map({
    container: 'map',
    style: './assets/scripts/style.json',
    attributionControl: true,
    hash: false
});

// Dizable zoom by Scroll
map.scrollZoom.disable();

// Define element to draw map-marker in
var el = document.createElement('div');
el.className = 'map-marker';

// Add marker
var marker = new mapboxgl.Marker(el, {offset: [-50 / 2, -100 / 2]})
  .setLngLat([38.97470441664118, 45.052998577867044])
  .addTo(map);

// :hover to animate marker
document.addEventListener("DOMContentLoaded", function(event) { 
  
  var link = document.querySelector('.contacts__link-map');
  var mapMarker = document.querySelector('.map-marker');
  
  
  link.onmouseover = function(){
    mapMarker.classList.add("map-marker-up");
  };

  link.onmouseleave = function(){
    mapMarker.classList.remove("map-marker-up");
  };


});

