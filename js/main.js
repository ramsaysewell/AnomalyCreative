$(".item").mouseover(function() {
  $(this).find(".overlay").css("opacity", 0.8);
  $(this).find(".itemText").css("opacity", 1);

});
$(".item").mouseout(function() {
  $(this).find(".overlay").css("opacity", 0);
  $(this).find(".itemText").css("opacity", 0)
});

$(".inputGroup input, .inputGroup textarea").focus(function() {
  if ($(this).val().length === 0) {
    $(this).siblings().animate({
      opacity: 1,
      top: "-=25"
    }, 500);
  }
})
$(".inputGroup input, .inputGroup textarea").focusout(function() {
  if ($(this).val().length === 0) {
    $(this).siblings().animate({
      opacity: 0,
      top: "+=25"
    }, 200);
  }
})
