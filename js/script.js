$(document).ready(function(){
	$(".slider__list").slick({
		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: false,
  		arrows: false,
  		asNavFor: '.slider-video',
  		fade: true,
  		cssEase: 'linear'
	});
	$(".slider-video").slick({
		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: false,
  		arrows: false,
  		asNavFor: '.slider__list',
  		fade: true,
  		cssEase: 'linear'
	});
	$(".slider-arrows__item.-prev").on("click", function(event) {
		event.preventDefault();
		$('.slider__list').slick('slickPrev');
	});
	$(".slider-arrows__item.-next").on("click", function(event) {
		event.preventDefault();
		$('.slider__list').slick('slickNext');
	});
	$(".header__burger, .header-fixed__burger").on("click", function(event) {
		event.preventDefault();
		$("html, body").toggleClass("-noscroll");
		$(this).toggleClass("-active");
		$(".menu-mobile").toggleClass("-active");
	});
});

$(window).on("load resize", function() {
	let line = $(".header__right").width(),
		radius = $(".slider-arrows").width() / 2,
		rightPos = line - radius;
	$(".slider-arrows").css("right", rightPos + "px");
});

$(window).on("scroll", function() {
	if ($(window).scrollTop() > 300) {
		$(".header-fixed").addClass("-active");
	}
	else {
		$(".header-fixed").removeClass("-active");
	}
});