import { smoothScrollTo } from '../common/scroll';

/* getting links and articles arrays */
var blogLinks = [].slice.call(document.querySelectorAll('.nav__link_blog'));
var postItems = [].slice.call(document.querySelectorAll('.blog__article-header'));

console.log(blogLinks);
console.log(postItems);

/* for every link we: 
1) prevent default action;
2) find equal link and post data-article atributes and scroll to that article;
3) then remov active class from previus blog item and add to current;
 */
blogLinks.forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        var targetBlogArticle = postItems.find(function(el) {
            return el.dataset.article === element.dataset.article;
        })
        smoothScrollTo(targetBlogArticle, 200);

        /* Removing active class from all menu item elements. After add active class to click target element */
        [].slice.call(document.querySelectorAll('.nav-link__blog')).forEach(function(el) {
            el.classList.remove('nav-link__blog--active');
        })
        e.target.parentNode.classList.add('nav-link__blog--active');
    });
});


var blogMenu = document.querySelector('.blog__nav');
var endPoint = blogMenu.getBoundingClientRect().top + window.pageYOffset;

/* doesnt work when i'll try to substitute this value in if statament on 51 line*/
var startPoint = window.pageYOffset;

/* on scroll event checking window.pageYOffset position and fix menu block, when it value near 0 */
document.addEventListener('scroll', function() {
    if (endPoint - window.pageYOffset <= 50) {
        blogMenu.classList.add('blog__nav--fixed');

        if (window.innerWidth > 768) {
            blogMenu.style.width = '30%';
        }
    } else {
        blogMenu.classList.remove('blog__nav--fixed');
    }
})

/* slide menu in visible area on tablets and mobile phones*/
blogMenu.addEventListener('click', function() {
    toggleClass('blog-menu', 'active');
})