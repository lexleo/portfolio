!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"smoothScrollTo",function(){return function(e,t){var n="string"==typeof e?document.querySelector("."+e):e,t=t||300,o=window.pageYOffset,i=Math.ceil(n.getBoundingClientRect().top),r=120,l=i+o,s=i/r,c=Math.ceil(o+s),a=Math.ceil(t/r),d=setTimeout(function e(){i<150&&i>0?window.scrollTo(0,l):(window.scrollTo(0,c),r--,c+=s,d=setTimeout(e,a),r<=0&&clearTimeout(d))},a)}})},function(e,t,n){n(2),n(3),n(4),n(6),n(7),n(0),n(8),n(9),n(10),n(11),n(12)},function(e,t){document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector(".login-button"),n=document.querySelector("#mainBtn"),o=document.querySelector(".flip-container"),i=function(e){e.preventDefault(),o.classList.toggle("flip")};t&&t.addEventListener("click",i),n&&n.addEventListener("click",i)})},function(e,t){if(window.location.href.endsWith("about.html")){class e{constructor(e,t,n,o){this.s=Snap(n);const i=e/3,r=e/2,l=t/2;this.length=2*i*Math.PI,this.percent=o,this.s.attr({width:e,height:t}),this.bgCircle=this.createCircle(r,l,i,{fill:"none",stroke:"#ccc",strokeWidth:15}),this.baseCircle=this.createCircle(r,l,i,{fill:"none",stroke:"#10c1a8",strokeWidth:15,strokeDasharray:this.length,strokeDashoffset:this.length}),this.baseCircle.transform(`r-90, ${r} ${l}`)}createCircle(e,t,n,o){const i=this.s.circle(e,t,n);return i.attr(o),i}draw(){Snap.animate(this.length,(1-this.percent)*this.length,e=>{this.baseCircle.attr({strokeDashoffset:e})},700,mina.easeinout)}}const t=new e(150,150,"#html",.75),n=new e(150,150,"#css",.65),o=new e(150,150,"#js",.48),i=new e(150,150,"#php",.28),r=new e(150,150,"#node",.38),l=new e(150,150,"#mysql",.6),s=new e(150,150,"#git",.4),c=new e(150,150,"#bower",.1),a=new e(150,150,"#gulp",.48),d=new e(150,150,"#mongo",.28);document.addEventListener("DOMContentLoaded",function(e){t.draw(),n.draw(),o.draw(),i.draw(),r.draw(),l.draw(),s.draw(),c.draw(),a.draw(),d.draw()})}},function(e,t,n){var o=n(5),i=document.querySelector(".hamburger"),r=document.querySelector(".fs-menu");i&&i.addEventListener("click",e=>{e.preventDefault(),i.classList.toggle("is-active"),r.classList.toggle("fs-menu--opened"),r.classList.contains("fs-menu--opened")?o.on():o.off()})},function(e,t){var n={options:{disableWheel:!0,disableScrollbar:!0,disableKeys:!0,scrollEventKeys:[32,33,34,35,36,37,38,39,40]},element:document.body,lockToScrollPos:[0,0],on:function(e,t){this.element=e||document.body,this.options=this._extend(this.options,t),this.options.disableWheel&&(document.addEventListener("mousewheel",this._handleWheel),document.addEventListener("DOMMouseScroll",this._handleWheel),document.addEventListener("touchmove",this._handleWheel)),this.options.disableScrollbar&&(this.lockToScrollPos=[this.element.scrollLeft,this.element.scrollTop],this._disableScrollbarFn=this._handleScrollbar.bind(this),document.addEventListener("scroll",this._disableScrollbarFn)),this.options.disableKeys&&(this._disableKeysFn=this._handleKeydown.bind(this),document.addEventListener("keydown",this._disableKeysFn))},off:function(){document.removeEventListener("mousewheel",this._handleWheel),document.removeEventListener("DOMMouseScroll",this._handleWheel),document.removeEventListener("touchmove",this._handleWheel),document.removeEventListener("scroll",this._disableScrollbarFn),document.removeEventListener("keydown",this._disableKeysFn)},_handleWheel:function(e){e.preventDefault()},_handleScrollbar:function(){window.scrollTo(this.lockToScrollPos[0],this.lockToScrollPos[1])},_handleKeydown:function(e){for(var t=0;t<this.options.scrollEventKeys.length;t++)if(e.keyCode===this.options.scrollEventKeys[t])return e.preventDefault(),!1},_extend:function(e,t){var n=e;for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);return n}};e.exports=n},function(e,t){document.addEventListener("DOMContentLoaded",function(e){var t=document.getElementById("parallax");if((window.innerWidth>0?window.innerWidth:screen.width)<480&&(t.style.display="none"),t){var n=t.children;window.addEventListener("mousemove",function(e){var t=window.innerWidth/2-e.pageX,o=window.innerHeight/2-e.pageY;[].slice.call(n).forEach(function(e,n){var i=n/75,r=t*i,l=o*i,s=window.innerHeight/2*i,c="translate("+r+"px,"+l+"px)",a=e.firstElementChild;e.style.transform=c,a.style.bottom="-"+s+"px"})})}})},function(e,t){window.onload=function(){let e=document.querySelector(".preloader");e&&e.classList.toggle("preloader-hide")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector(".next-screen");t&&t.addEventListener("click",function(e){e.preventDefault();let t="";window.location.href.endsWith("about.html")&&(t="about__content"),window.location.href.endsWith("works.html")&&(t="works__header"),Object(o.smoothScrollTo)(t,100)})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);if(window.location.href.endsWith("blog.html")){var i=[].slice.call(document.querySelectorAll(".nav__item")),r=[].slice.call(document.querySelectorAll(".blog__article"));i.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var n=r.find(function(t){return t.dataset.article===e.dataset.article});Object(o.smoothScrollTo)(n,200),[].slice.call(document.querySelectorAll(".nav__item")).forEach(function(e){e.classList.remove("nav__item--active")}),t.target.parentNode.classList.add("nav__item--active")})});var l=document.querySelector(".blog__nav"),s=l.getBoundingClientRect().top+window.pageYOffset;window.pageYOffset;document.addEventListener("scroll",function(){s-window.pageYOffset<=50?l.classList.add("blog__nav--fixed"):l.classList.remove("blog__nav--fixed")});(function(){var e=document.querySelectorAll(".blog__article"),t={},n=0;window.addEventListener("scroll",function(){[].forEach.call(e,function(e){t[e.getAttribute("data-article")]={height:e.offsetHeight,position:e.getBoundingClientRect().top}});for(n in t)t[n].position<=250&&t[n].position>=-t[n].height&&(document.querySelector(".nav__item--active")&&document.querySelector(".nav__item--active").classList.remove("nav__item--active"),document.querySelector('.nav__item[data-article="'+n+'"]').classList.add("nav__item--active"))})})()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector(".scroll__link");t&&t.addEventListener("click",function(e){e.preventDefault(),Object(o.smoothScrollTo)("works__header",300)})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector(".slide-menu__open"),n=document.querySelector(".slide-menu"),i=document.querySelector(".hamburger");t&&n&&i&&t.addEventListener("click",e=>{e.preventDefault(),n.classList.toggle("slide-menu--active"),i.classList.toggle("hide")});var r=[].slice.call(document.querySelectorAll(".slide-menu__link")),l=[].slice.call(document.querySelectorAll(".blog__article"));r&&l&&n&&r.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var i=l.find(function(t){return t.dataset.article===e.dataset.article});n.classList.toggle("slide-menu--active"),Object(o.smoothScrollTo)(i,200)})})})},function(e,t){document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector(".slider__tint-left"),n=document.querySelector(".slider__tint-right"),o=document.querySelector("#slides-left"),i=document.querySelector("#slides-right");slidesHor=document.querySelector(".slider__list"),title=document.querySelector(".project__title"),techs=document.querySelector(".project__technologies"),link=document.querySelector(".show-btn");const r=[{name:"Коворкинг «Воркадиум»",techs:"HTML, CSS",link:"http://workadium.lexleo.pro/"},{name:"Mr. Burger",techs:"HTML, CSS, JS",link:"https://lexleo.github.io/mr.burger/"},{name:"Deltaplan.pro",techs:"HTML, CSS, JS, Python",link:"http://deltaplan.pro/"}],l=r.length;var s=1,c=2,a=3;t&&t.addEventListener("click",()=>{!function(){if(o&&i&&slidesHor){a++,s++,++c>l&&(c=1),a>l&&(a=1),s>l&&(s=1);let e="translateY("+-100*(c-1)+"%)",t="translateY("+-100*(a-1)+"%)",n="translateX("+-100*(s-1)+"%)";o.style.transform=e,i.style.transform=t,slidesHor.style.transform=n,title.innerText=r[s-1].name,techs.innerText=r[s-1].techs,link.href=r[s-1].link}}()}),n&&n.addEventListener("click",()=>{!function(){if(o&&i&&slidesHor){c--,s--,0==--a&&(a=l),0==c&&(c=l),0==s&&(s=l);let e="translateY("+-100*(a-1)+"%)",t="translateY("+-100*(c-1)+"%)",n="translateX("+-100*(s-1)+"%)";o.style.transform=t,i.style.transform=e,slidesHor.style.transform=n,title.innerText=r[s-1].name,techs.innerText=r[s-1].techs,link.href=r[s-1].link}}()})})}]);