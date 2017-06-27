$(document).ready(function() {
    $('#discord').hover(function() {
        $(this).animate({
            width: "+=3%",
            height: "+=3%"
        }, 'slow');
        console.log("hovered");

    }, function() {
        $(this).animate({
            width: "-=3%",
            height: "-=3%"
        }, 'slow');
        console.log("de-hovered");
    });
});
