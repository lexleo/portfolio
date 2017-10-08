document.addEventListener("DOMContentLoaded", function (event) {

    var up = document.querySelector('#slider-up'),
        down = document.querySelector('#slider-down'),
        slidesDown = document.querySelector('#slides-left'),
        slidesUp = document.querySelector('#slides-right');
    
    const worksNum = 3;

    var leftPos = 2,
        rightPos = 3;


    if (up && down && slidesDown) {
        down.addEventListener('click', () => {
            leftPos++;
            if (leftPos > worksNum) leftPos = 1; 
            let y = (leftPos - 1) * (-100);
            let translateY = 'translateY(' + y + '%)';
            slidesDown.style.transform = translateY;

        });
    }

    if (up && down && slidesUp) {
        up.addEventListener('click', () => {
            rightPos--;
            if (rightPos == 0) rightPos = worksNum; 
            let y = (rightPos - 1) * (-100);
            let translateY = 'translateY(' + y + '%)';
            slidesUp.style.transform = translateY;

        });
    }

});