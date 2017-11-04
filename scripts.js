// Filter Function
$("a").on("click", function() {
    if (this.className === "show-all") {
         $("img").show();
     } else {
         var imageFilter = this.className;
        $(".photo-wrapper img").hide();
        $(".photo-wrapper img." + imageFilter).fadeIn(400);
     }
});

// Open and close Menu
$("#menu p").on("click", function() {
    $("#menu-toggle").toggle();
});

// Modal Window
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');


$overlay.append($image);



$("body").append($overlay);

$(".photo-wrapper img").on("click",function() {
	var imageLocation = $(this).attr("src");
	$image.attr("src", imageLocation);
    // effectively nothing happens on smaller screens
    if ($(window).width() < 400) {
        $(this).css("display", "block");
    } else {
	$overlay.fadeIn();
    $("#main-wrapper").css("opacity", ".5");
    }
});

// returns to normal on click of modal
$overlay.on("click",function(){
	$(this).fadeOut();
    $("#main-wrapper").css("opacity", "1");
});
