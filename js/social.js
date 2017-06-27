$(document).ready(function() {
    $('.logos').hover(function() {
        $(this).animate({
            width: "+=1%",
            height: "+=1%"
        }, 150);

    }, function() {
        $(this).animate({
            width: "-=1%",
            height: "-=1%"
        }, 150);
    });
});
