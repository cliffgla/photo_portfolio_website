$("#DTLA-button").on("click", function() {
    if ($("img").hasClass("DTLA")) {
        $(".food").css("display", "none");
        $(".portrait").css("display", "none");

    }
});

$("#food-button").on("click", function() {
    if ($("img").hasClass("DTLA")) {
        $(".food").fadeOut(800);

    }
});

$("#show-all-button").on("click", function() {

        $("img").css("display","inline" );


});
