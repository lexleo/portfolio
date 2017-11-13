import { smoothScrollTo } from '../common/scroll';

document.addEventListener("DOMContentLoaded", function (event) {

    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
    // var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width,
        mentions = document.querySelector('.mentions'),
        mentionsContent = document.querySelector('.mentions__content'),
        mentionsFeedback = document.querySelector('.mentions__feedback');

      if (iOS) alert('Its iOS!');
    
    //   if((screenWidth < 480) && iOS) {
      if(iOS) {
          if (mentions) {
            mentions.style.backgroundAttachment = "scroll";
          }
          if (mentionsContent) {
            mentionsContent.style.background = "none";
          }
          if (mentionsFeedback) {
            mentionsFeedback.style.background = "none";
          }        
      }


    var link = document.querySelector('.scroll__link');
    if (link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo('works__header', 300);
        });
    }
});