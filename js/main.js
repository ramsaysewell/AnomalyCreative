$(".item").mouseover(function() {
  $(this).find(".overlay").css("opacity", 0.8);
  $(this).find(".itemText").css("opacity", 1);

});
$(".item").mouseout(function() {
  $(this).find(".overlay").css("opacity", 0);
  $(this).find(".itemText").css("opacity", 0)
});

$(".inputGroup input, .inputGroup textarea").focus(function() {
  if ($(this).val().length === 0 && $(window).width() > 600) {
    $(this).siblings().animate({
      opacity: 1,
      top: "-=25"
    }, 500);
  }
})
$(".inputGroup input, .inputGroup textarea").focusout(function() {
  if ($(this).val().length === 0 && $(window).width() > 600) {
    $(this).siblings().animate({
      opacity: 0,
      top: "+=25"
    }, 200);
  }
})

$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});

document.querySelector('#year').innerHTML = ((new Date()).getFullYear());