document.addEventListener("DOMContentLoaded", function(event) { 

 
  var parallaxContainer = document.getElementById('parallax');
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  if(width < 480) {
    parallaxContainer.style.display = "none";
  }

  if (parallaxContainer) {

    var layers = parallaxContainer.children;

    var moveLayers = function (e) {
      var initialX = (window.innerWidth / 2) - e.pageX;
      var initialY = (window.innerHeight / 2) - e.pageY;

      [].slice.call(layers).forEach(function(layer, index) {
        var 
          divider = index / 75,
          positionX = initialX * divider,
          positionY = initialY * divider,
          bottomPosition = (window.innerHeight / 2) * divider,
          transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
          image = layer.firstElementChild;

        layer.style.transform = transformString;
        image.style.bottom = '-' + bottomPosition + 'px';
      });

    };

    window.addEventListener('mousemove', moveLayers);

  }

});