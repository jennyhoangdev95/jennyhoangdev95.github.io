$(document).ready(function(){
    $(".sale-card").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        prevArrow:
        "<button type='button' class='slick-prev slick-narrow pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
        "<button type='button' class='slick-next slick-narrow pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
      })
      
  });