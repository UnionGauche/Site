$('#discord').hover(function() {
    $(this).animate({
        width: "28%",
        height: "28%"
    }, 'slow');

}, function() {
    $(this).animate({
        width: "-28%",
        height: "-28%"
    }, 'slow');
});
