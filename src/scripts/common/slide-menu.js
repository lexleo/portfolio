import { smoothScrollTo } from '../common/scroll';

document.addEventListener("DOMContentLoaded", function (event) {



var openBtn = document.querySelector('.slide-menu__open'),
    menu = document.querySelector('.slide-menu'),
    hamburger = document.querySelector('.hamburger');


if (openBtn && menu && hamburger) {
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('slide-menu--active');
        hamburger.classList.toggle('hide');
    })
}



var links = [].slice.call(document.querySelectorAll('.slide-menu__link'));
var posts = [].slice.call(document.querySelectorAll('.blog__article'));

if (links && posts && menu) {

    links.forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            var targetArticle = posts.find(function(el) {
                return el.dataset.article === element.dataset.article;
            })
            menu.classList.toggle('slide-menu--active');
            smoothScrollTo(targetArticle, 200);
    
        });
    });

}



});