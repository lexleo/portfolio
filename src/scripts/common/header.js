import { smoothScrollTo } from './scroll';

document.addEventListener("DOMContentLoaded", function (event) {

    var link = document.querySelector('.next-screen');
    console.log(link);
    if (link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = '';
            if (window.location.href.endsWith('about.html')) {target = 'about__content'};
            if (window.location.href.endsWith('works.html')) {target = 'works__header'};
            smoothScrollTo(target, 100);
        });
    }
});