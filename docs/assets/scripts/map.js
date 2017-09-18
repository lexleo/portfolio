// Initialize map
var map = new mapboxgl.Map({
    container: 'map',
    style: './assets/scripts/style.json',
    attributionControl: true,
    hash: false
});

// Dizable Zoom by scroll
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
  
  // get transform: translate css parameters
  function getTranslateXY() {
    var style = window.getComputedStyle(mapMarker);
    var matrix = new WebKitCSSMatrix(style.webkitTransform);
    var translate = {
      x: +matrix.e,
      y: +matrix.f
    };
    return translate;
  }

  // Value move on
  const shift = -15;
  
  // move
  link.onmouseover = function(){
    var translate = getTranslateXY();
    var newStyle = "transform: translate(" + translate.x + "px, " + (translate.y + shift) + "px);";                      
    mapMarker.style = newStyle;
  };

  // move back
  link.onmouseleave = function(){
    var translate = getTranslateXY();
    var oldStyle = "transform: translate(" + translate.x + "px, " + (translate.y - shift) + "px);";                      
    mapMarker.style = oldStyle;
  };

});

