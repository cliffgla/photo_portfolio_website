/* $("#DTLA-button").on("click", function() {
    if ($("img").hasClass("DTLA")) {
        $(".food").css("display", "none");
        $(".portrait").css("display", "none");
        $(".DTLA").css("display", "inline");

    }
});

$("#food-button").on("click", function() {
    if ($("img").hasClass("DTLA")) {
        $(".DTLA").fadeOut(800);
        $(".food").css("display", "inline")

    }
});

$("#show-all-button").on("click", function() {

        $("img").css("display","inline" );


});
*/

//if button name is the same as a photo id
    //then those photos stay displayed
        //all others hide


$("a").on("click", function() {
    var cliffy = this.className;
    $("img").hide();
    $("img." + cliffy).show();
});
