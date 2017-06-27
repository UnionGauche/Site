$(document).ready(function() {
    $('#discord').hover(function() {
        $(this).animate({
            width: "+=1%",
            height: "+=1%"
        }, 'slow');

    }, function() {
        $(this).animate({
            width: "-=1%",
            height: "-=1%"
        }, 'slow');
    });
});
