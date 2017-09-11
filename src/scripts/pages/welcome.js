var $ = require('jquery');

$(document).ready(function(){

    $('.login-button').click(function(e){
        var $this = $(this);
        e.preventDefault();
        if ($this.text() == 'На главную') {
            $('#mainBtn').click();
            $this.text('Авторизоваться');
            return;
        }
        $('#menu').fadeOut(400, function() {
            $this.text('На главную');
            $('#auth').fadeIn();
        });
        
    });

    $('#mainBtn').click(function(e){
        e.preventDefault();
        $('#auth').fadeOut(400, function(){
            $('#menu').fadeIn();
        });
    
    });



})