$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dragable: false,
    pauseOnHover: false,
    pauseOnFocus: false
  });
});

var scroolValue = 0;

$("navbar").scrool(function() {
  var verticalValue = $(this).scrollTop(); 
});
