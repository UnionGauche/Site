$('#discord').mouseenter(function() {
    $(this).animate({width: "50%", height: "50%"}, 'slow');
});

$('#discord').mouseleave(function() {   
    $(this).animate({width: "28%"}, 'slow');
});