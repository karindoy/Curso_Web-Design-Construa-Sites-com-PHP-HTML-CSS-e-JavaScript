
$(function() {
    $('#l1').click(function() {
        $('#img1').show();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').hide();
    });
    $('#l2').click(function() {
        $('#img1').hide();
        $('#img2').show();
        $('#img3').hide();
        $('#img4').hide();
    });
    $('#l3').click(function() {
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').show();
        $('#img4').hide();
    });
    $('#l4').click(function() {
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').show();
    });

});