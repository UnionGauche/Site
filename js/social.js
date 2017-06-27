$(document).ready(function() {
    $('#discord').hover(function() {
        $(this).animate({
            width: "+=3%",
            height: "+=3%"
        }, 'slow');

    }, function() {
        $(this).animate({
            width: "-=3%",
            height: "-=3%"
        }, 'slow');
    });
});
