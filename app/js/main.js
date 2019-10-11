$(function(){

$('.header__menu-btn').on('click', function(){
	$('.header__nav ul').slideToggle();
});	

$('ul.tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.tabs li').removeClass('current');
	$('.tab-content').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
})


$('.slider__inner').slick({
	infinite: true,
	arrows: false,
	dots: false,
	autoplay: true,
  	autoplaySpeed: 8000,
  	speed: 500,
  	fade: true,
  	cssEase: 'linear'
});

$('.slider__doctor').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	arrows: false,
	dots: true,
	responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]

});


});



