$(document).ready(function() {
    $('#discord').hover(function() {
        $(this).animate({
            width: "+=28%",
            height: "+=28%"
        }, 'slow');
        console.log("hovered");

    }, function() {
        $(this).animate({
            width: "-=28%",
            height: "-=28%"
        }, 'slow');
        console.log("de-hovered");
    });
});
