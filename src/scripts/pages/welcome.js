var $ = require('jquery');

$(document).ready(function(){

    $('.login-button').click(function(e){
        e.preventDefault();
        console.log('click');
        $('.login-button, #menu').each(function() {
            $(this).fadeOut(400, function() {
                $('#auth').fadeIn(400);
            });
        });
    });

    $('#mainBtn').click(function(e){
        e.preventDefault();
        $('#auth').fadeOut(400, function(){
            $('.login-button, #menu').each(function() {
                $(this).fadeIn(400);
            });
        });
    });

    $(".control-radio > input").on('click', function(){
        $(this).parent().siblings().addBack().toggleClass("checked");
    });




})