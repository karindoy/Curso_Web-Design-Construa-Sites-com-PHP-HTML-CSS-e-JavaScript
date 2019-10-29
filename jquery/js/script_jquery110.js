
$(function(){
    $('#azul').click(function(){
        $('p').css('background-color', 'blue');
        /*$('p').fadeOut('slow');*/
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn();
    });

    $('#vermelho').click(function(){
        $('p').css('background-color', 'red');
        $('p').fadeOut(3000);
        $('p').fadeIn(5000);
    });
});