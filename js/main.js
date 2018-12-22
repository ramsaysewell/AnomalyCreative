$(".item").mouseover(function() {
  $(this).find(".overlay").css("opacity", 0.8);
  $(this).find(".itemText").css("opacity", 1);

});
$(".item").mouseout(function() {
  $(this).find(".overlay").css("opacity", 0);
  $(this).find(".itemText").css("opacity", 0)
});

$(".inputGroup input").focus(function() {
  $(this).siblings().animate({
    opacity: 1,
    top: "-=25"
  }, 500);
})
$(".inputGroup input").focusout(function() {
  $(this).siblings().animate({
    opacity: 0,
    top: "+=25"
  }, 200);
})



// $( "#book" ).animate({
//    opacity: 0.25,
//    left: "+=50",
//    height: "toggle"
//  }, 5000, function() {
//    // Animation complete.
//  });
