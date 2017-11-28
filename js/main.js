$(window).scroll(function(){
  var win_scroll = $(window).scrollTop()
  if (win_scroll == 0 || win_scroll < 200) $('body').removeClass('__fixed')
  else $('body').addClass('__fixed');
  // if (win_scroll > 800) $('.scrolltop').fadeIn(400)
  // else $('.scrolltop').fadeOut(800);
})

// $('body').click(function(e){
//   if($(e.target).hasClass('opened')) $('.opened').removeClass('opened')
// })
// $('.search, .langs').click(function(){
//   if( !$(this).hasClass('opened') ) $(this).addClass('opened');
// })
