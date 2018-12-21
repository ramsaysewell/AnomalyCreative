$("span").arctext({
  radius: 4000,
  dir: 1
});

// $('.showcase *').mouseover(function() {
//   $(this).find("h1").css("opacity", 1);
// })
// $('.item').mouseout(function() {
//   $(this).find("h1").css("opacity", 0);
// })

$(".item").mouseover(function() {
  $(this).find(".overlay").css("opacity", 0.8);
  $(this).find(".itemText").css("opacity", 1)

});
$(".item").mouseout(function() {
  $(this).find(".overlay").css("opacity", 0);
  $(this).find(".itemText").css("opacity", 0)
});
