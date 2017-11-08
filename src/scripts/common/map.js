if (window.location.href.endsWith('about.html')) {

  alert('eeeeeeeeeeeee');

// Initialize map
var map = new mapboxgl.Map({
    container: 'map',
    style: './assets/scripts/style.json',
    attributionControl: true,
    hash: false,
    logoPosition: 'top-right',
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
    console.log(matrix);
    var translate = {
      x: +matrix.e,
      y: +matrix.f
    };
    return translate;
  }

  function mapAnimate() {
    console.log('animate');
    map.easeTo(
      {
        "pitch": 49,
        "duration": 1000
      }
    );
  }


  // Value move on
  const shift = -15;
  
  // move
  link.onmouseover = function(){
    alert('wooo');
    console.log('animate2');    
    mapAnimate();
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

}