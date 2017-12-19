document.addEventListener("DOMContentLoaded", function (event) {

 
    var tintLeft = document.querySelector('.slider__tint-left'),
        tintRight = document.querySelector('.slider__tint-right'),    
        slidesLeft = document.querySelector('#slides-left'),
        slidesRight = document.querySelector('#slides-right');
        slidesHor = document.querySelector('.slider__list'),
        title = document.querySelector('.project__title'),
        techs = document.querySelector('.project__technologies');
        link = document.querySelector('.show-btn');
        
    
    const works = [
        {
            name: 'Коворкинг «Воркадиум»',
            techs: 'HTML, CSS',
            link: 'http://workadium.lexleo.pro/'
        },
        {
            name: 'Mr. Burger',
            techs: 'HTML, CSS, JS',
            link: 'https://lexleo.github.io/mr.burger/'
        },
        {
            name: 'Deltaplan.pro',
            techs: 'Python, HTML, CSS, JS ',
            link: 'http://deltaplan.pro/'
        },
        {
            name: 'Deep Dive VR',
            techs: 'HTML, CSS, JS',
            link: 'http://deepdive.pro/'
        },
    ]

    const worksNum = works.length;

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
            title.innerText = works[mainPos - 1].name;
            techs.innerText = works[mainPos - 1].techs;
            link.href = works[mainPos - 1].link;
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
            title.innerText = works[mainPos - 1].name;
            techs.innerText = works[mainPos - 1].techs;
            link.href = works[mainPos - 1].link;            
        }
    }

    if (tintLeft) {
        tintLeft.addEventListener('click', () => {
            moveForward();
        });
    }

    if (tintRight) {
        tintRight.addEventListener('click', () => {
            moveBackward();
        });
    }

});