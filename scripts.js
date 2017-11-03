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
var $caption = $('<p></p>');

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$(".photo-wrapper img").on("click",function() {
	event.preventDefault();
	var imageLocation = $(this).attr("src");
	$image.attr("src", imageLocation);
	$overlay.fadeIn();
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

$overlay.on("click",function(){
	$(this).fadeOut();

});
