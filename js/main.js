$(function(){

	$('.slider').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
    	dotsClass: "my-dots",
    	autoplay: true,
  		autoplaySpeed: 3000,
  		
	});

	$('.coments__inner-slider').slick({
 		infinite: true,
 		slidesToShow: 3,
 		slidesToScroll: 3,
 		dots: true,
 		dotsClass: "comments-dots",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]

	});	

});

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $(".menu__item").click(function(){
    $(".menu__list, .header__burger").removeClass("active");
    $("body").removeClass("lock");
  });
});




$('.items__inner-wrapper').slick({
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: "item-dots",
  responsive: [
    {
      breakpoint: 1520,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1265,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

