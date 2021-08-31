$(function(){
	$('.menu a').on('click', function(e){
		e.preventDefault();

		if($('.header__btn--opened').length) {
			$('.header__mobile').fadeOut(500);
			$('.header__btn').toggleClass('header__btn--opened');
		}		
		
		let linkId = $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(linkId).offset().top - 200 }, 1500);
	});	
});