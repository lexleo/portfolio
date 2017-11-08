var green = '#00bfa5',
    darkGreen = '#009688';

document.addEventListener("DOMContentLoaded", function(event) { 
    
    var loginBtn = document.querySelector('.login-button');
    var mainBtn = document.querySelector('#mainBtn');
    var flipContainer = document.querySelector('.flip-container');

   
    var flipFlipper = function(e) {
        e.preventDefault();
        flipContainer.classList.toggle("flip");        
    }
    
    var comeFrom = document.referrer.slice(-10);

    if (loginBtn) loginBtn.addEventListener('click', flipFlipper);
    if (mainBtn) mainBtn.addEventListener('click', flipFlipper);

    if (comeFrom !== 'index.html') {
        setTimeout(function(){
            flipContainer.classList.toggle("flip");    
        }, 700);
    }

});
