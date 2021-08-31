$('.header__btn').click(function() {
  if($('body .header__btn--opened').length) {
    $('.header__mobile').fadeOut(500);
  } else {
    $('.header__mobile').fadeIn(500);
  }
  $('.header__btn').toggleClass('header__btn--opened');
});


$(window).scroll(function(){
  let $this = $(this),
       st = $this.scrollTop();

  if(st > 285){
    $('body').addClass('scrolled');
  }else{
    $('body').removeClass('scrolled');
  }

  headerTopIndicator();
});

function headerTopIndicator() {
  let windowScrollTop = $(window).scrollTop();
  let docHeight = $(document).height();
  let winHeight = $(window).height();
  let scrollPercent = (windowScrollTop / (docHeight - winHeight)) * 100;

  $('.header__top').css('width', scrollPercent + '%')
}