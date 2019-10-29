
$(function () {
    $('#azul').click(function () {
        $('p').css('background-color', 'blue');
        /*$('p').fadeOut('slow');*/
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn();
    });

    /*
    $('#vermelho').click(function(){
        $('p').css('background-color', 'red');
        $('#mensagem').text('cor alterada com sucesso!');
        $('#mensagem').css('color', 'red');
        $('#mensagem').css('border', '1px solid red');
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut();
    });
    

   $('#vermelho').click(function(){
    $('p').css('background-color', 'red');
    $('#mensagem')
        .text('cor alterada com sucesso!')
        .css('color', 'red')
        .css('border', '1px solid red')
        .delay(3000).fadeOut();
    });
*/
    $('#vermelho').click(function () {
        $('p').css('background-color', 'red');
        $('#mensagem')
            .text('cor alterada com sucesso!')
            .css({color: 'red', border: '1px solid red'})
            .delay(3000)
            .fadeOut()
            .addClass('green');

            $('button').removeClass('red');
    });

});