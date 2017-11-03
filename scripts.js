$("a").on("click", function() {
    if (this.className === "show-all") {
         $("img").show();
     } else {
         var imageFilter = this.className;
        $("img").hide();
        $("img." + imageFilter).show();
     }
});
