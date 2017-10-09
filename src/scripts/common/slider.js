document.addEventListener("DOMContentLoaded", function (event) {

    var up = document.querySelector('#slider-up'),
        down = document.querySelector('#slider-down'),
        slidesLeft = document.querySelector('#slides-left'),
        slidesRight = document.querySelector('#slides-right');
        slidesHor = document.querySelector('.slides-horizontal');
    
    const worksNum = 3;

    var mainPos = 1,
        leftPos = 2,
        rightPos = 3;

    function moveForward() {
        if(slidesLeft && slidesRight && slidesHor) {
            leftPos++;
            rightPos++;
            mainPos++;
            if (leftPos > worksNum) leftPos = 1; 
            if (rightPos > worksNum) rightPos = 1; 
            if (mainPos > worksNum) mainPos = 1; 
            let yLeft = (leftPos - 1) * (-100);
            let yRight = (rightPos - 1) * (-100);
            let xMain = (mainPos - 1) * (-100);
            let translateYLeft = 'translateY(' + yLeft + '%)';
            let translateYRight = 'translateY(' + yRight + '%)';
            let translateXMain = 'translateX(' + xMain + '%)';
            slidesLeft.style.transform = translateYLeft;
            slidesRight.style.transform = translateYRight;    
            slidesHor.style.transform = translateXMain;    
        }
    }

    function moveBackward() {
        if (slidesLeft && slidesRight && slidesHor) {
            rightPos--;
            leftPos--;
            mainPos--;
            if (rightPos == 0) rightPos = worksNum; 
            if (leftPos == 0) leftPos = worksNum; 
            if (mainPos == 0) mainPos = worksNum; 
            let yRight = (rightPos - 1) * (-100);
            let yLeft = (leftPos - 1) * (-100);
            let xMain = (mainPos - 1) * (-100);
            let translateYRight = 'translateY(' + yRight + '%)';
            let translateYLeft = 'translateY(' + yLeft + '%)';
            let translateXMain = 'translateX(' + xMain + '%)';
            slidesLeft.style.transform = translateYLeft;
            slidesRight.style.transform = translateYRight;
            slidesHor.style.transform = translateXMain;
        }
    }

    if (down) {
        down.addEventListener('click', () => {
            moveForward();
        });
    }

    if (up) {
        up.addEventListener('click', () => {
            moveBackward();
        });
    }

});