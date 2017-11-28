$(window).scroll(function(){
  var win_scroll = $(window).scrollTop()
  if (win_scroll == 0 || win_scroll < 200) $('body').removeClass('fixed')
  else {
    $('body').addClass('fixed')
    $('.show-nav').removeClass('show-nav')
  };
})

$('body').click(function(e){
  if($(e.target).closest('.navigation').hasClass('navigation')) return 1;

  var elemShow = $(e.target).closest('.show')
  if(elemShow.hasClass('mobile-toggle')) $('.header').addClass('active');
  if(elemShow.hasClass('opened')){
    if(elemShow.hasClass('search')) return 1;
    if(elemShow.hasClass('mobile-toggle')) $('.header').removeClass('active');
    elemShow.removeClass('opened')
  } else {
    $('.opened').removeClass('opened')
    $('.show-nav').removeClass('show-nav')
    if(!elemShow.hasClass('mobile-toggle')) $('.header').removeClass('active')
    elemShow.addClass('opened')
  }
})
$('.subnav').click(function(){ $('.subnav ul').toggleClass('nav-opened') })

$('.navigation li.curr a').click(function(e){
  e.preventDefault()
  $(this).closest('.navigation').addClass('show-nav')
})
