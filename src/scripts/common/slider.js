document.addEventListener("DOMContentLoaded", function (event) {

    var up = document.querySelector('#slider-up'),
        down = document.querySelector('#slider-down'),    
        tintLeft = document.querySelector('.slider__tint-left'),
        tintRight = document.querySelector('.slider__tint-right'),    
        slidesLeft = document.querySelector('#slides-left'),
        slidesRight = document.querySelector('#slides-right');
        slidesHor = document.querySelector('.slides-horizontal'),
        title = document.querySelector('.project__title'),
        techs = document.querySelector('.project__technologies');
        link = document.querySelector('.show-btn');
        
    
    const works = [
        {
            name: 'Сайт школы онлайн образования',
            techs: 'HTML, CSS, JS',
            link: 'https://loftschool.com/'
        },
        {
            name: 'ATMA Yoga',
            techs: 'HTML, CSS, JS, Vue.js',
            link: 'atmayoga.ru'
        },
        {
            name: 'T.G.D Дизайн интерьеров',
            techs: 'HTML, CSS, JS, Python',
            link: 'http://oneplace.su/'
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