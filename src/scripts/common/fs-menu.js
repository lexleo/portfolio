var disableScroll = require('disable-scroll');
var hamburger = document.querySelector('.hamburger');
var fsMenu = document.querySelector('.fs-menu');

if (hamburger) {
    
    hamburger.addEventListener('click', (e) => {
    
        e.preventDefault();
        hamburger.classList.toggle('is-active');
        fsMenu.classList.toggle('fs-menu--opened');
        
        if (fsMenu.classList.contains('fs-menu--opened')) {
            disableScroll.on();
        } else { 
            disableScroll.off();
        }

    });
}