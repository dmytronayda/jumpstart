$(document).ready(function() {
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


  // var prev = 0;
  //
  // $(window).scroll(function(event) {
  //   var scrollTop = $this.scrollTop();
  //
  //   if (scrollTop - prev > 50) {
  //     var navBarHeight = $('.navbar').css('height');
  //     $('.navbar').animate({top: '-' + navBarHeight}, 150);
  //     prev = scrollTop;
  //   }
  //
  //   else (prev - scrollTop > 50) {
  //     $('.navbar').animate({top: '-' - navBarHeight}, 150);
  //     prev = scrollTop;
  //   }
  //
  //
  // });
