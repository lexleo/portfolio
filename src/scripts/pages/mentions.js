import { smoothScrollTo } from '../common/scroll';

document.addEventListener("DOMContentLoaded", function (event) {

    var link = document.querySelector('.scroll__link');
    if (link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo('works__header', 300);
        });
    }
});