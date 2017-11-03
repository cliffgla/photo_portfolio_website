$("a").on("click", function() {
    if (this.className === "show-all") {
         $("img").show();
     } else {
         var imageFilter = this.className;
        $("img").hide();
        $("img." + imageFilter).show();
     }
});

$("#menu p").on("click", function() {
    $("#menu-toggle").toggle();
});

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');


$overlay.append($image);



$("body").append($overlay);

$("img").on("click",function() {
	var imageLocation = $(this).attr("src");
	$image.attr("src", imageLocation);
	$overlay.fadeIn();
    $("#main-wrapper").css("opacity", ".5");
});

$overlay.on("click",function(){
	$(this).fadeOut();
    $("#main-wrapper").css("opacity", "1");


});
