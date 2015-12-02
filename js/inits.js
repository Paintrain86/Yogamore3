$(document).ready(function(){
	$("body").append('<a href="#top" title="Наверх" class="scrollTo hidden-xs" id="arrowUp"><span class="glyphicon glyphicon-menu-up"></span></a>');
	$("a.fancy").fancybox({helpers:  {overlay : {locked : false}}});

	/* SLIDER FUNCTIONALITY */
	$(".carousel-indicators").hide();
    
    $(".coach__slider").each( function(){
    	if ( $(this).length>0 ){
    		var lis = '';
    		var sliderID = $(this).attr("id");

			$(this).find(".carousel-inner .item").each(function(){
				lis = lis + '<li data-target="#'+sliderID+'" data-slide-to="' + $(this).index() + '"></li>';
			});
			$(this).find(".carousel-indicators").append().html(lis);
			$(this).find(".carousel-indicators li:first").addClass('active');
			$(this).carousel();
			if ( $(this).find(".carousel-indicators > li").length > 1 ) {
				$(".carousel-indicators").show();
			}
    	}
    });

    $(".testimonials").owlCarousel({
    	items: 		1,
    	loop: 		true,
    	nav: 		true,
    	navText: 	['<i class="icon-prev"></i>','<i class="icon-next"></i>'],
    	autoplay: 	true,
    	autoplayHoverPause: true
    });

    $(".tease__carousel").owlCarousel({
    	items: 1,
    	loop: true,
    	center: true,
    	responsive: {
    		768: {
    			items: 2
    		}
    	}
    });

	/* ARROW UP */ 
	$(window).scroll(function (){
		if ($(this).scrollTop() > 600){
			$("#arrowUp").fadeIn();
		} else{
			$("#arrowUp").fadeOut();
		}
	});

	function scrollTo(id) {
		if (id=='#top' ){
			$("body,html").animate({
				scrollTop:0
			}, 1000);
		} else {
			if ($(id).length>0) {
				$('html, body').stop().animate({
					scrollTop: $(id).offset().top - menuHeight
				}, 1000);
			}
		}
	}
	$('.goTo').click(function(e){
		e.preventDefault();
		scrollTo($(this).attr('href'));
		return false;
	});
	
	$('#arrowUp').click(function(e){
		e.preventDefault();
		scrollTo('#top');
	});
});