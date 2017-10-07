import { smoothScrollTo } from '../common/scroll';


if (window.location.href.endsWith('blog.html')) {
    
    var blogLinks = [].slice.call(document.querySelectorAll('.nav__item'));
    var postItems = [].slice.call(document.querySelectorAll('.blog__article'));
    
    blogLinks.forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            var targetBlogArticle = postItems.find(function(el) {
                return el.dataset.article === element.dataset.article;
            })
            smoothScrollTo(targetBlogArticle, 200);
    
            [].slice.call(document.querySelectorAll('.nav__item')).forEach(function(el) {
                el.classList.remove('nav__item--active');
            })
            e.target.parentNode.classList.add('nav__item--active');
        });
    });
    
    
    var blogMenu = document.querySelector('.blog__nav');
    var endPoint = blogMenu.getBoundingClientRect().top + window.pageYOffset;
    
    
    var startPoint = window.pageYOffset;
    
    
    document.addEventListener('scroll', function() {
        if (endPoint - window.pageYOffset <= 50) {
            blogMenu.classList.add('blog__nav--fixed');
    
        } else {
            blogMenu.classList.remove('blog__nav--fixed');
        }
    });
    
    
    var highlightNavMenu = function () {
        var articles = document.querySelectorAll('.blog__article');
        var article = {};
        var i = 0;
    
        window.addEventListener('scroll', function () {
            [].forEach.call(articles, function (e) {
                article[e.getAttribute('data-article')] = {
                    height: e.offsetHeight,
                    position: e.getBoundingClientRect().top,
                };
            });
            for (i in article) {
                if (article[i].position <= 250 && article[i].position >= -article[i].height){
                    if(document.querySelector('.nav__item--active'))
                        document.querySelector('.nav__item--active').classList.remove('nav__item--active');
                    document.querySelector('.nav__item[data-article="'+ i + '"]').classList.add('nav__item--active');
                } 
            }
        });
    }();

}    


