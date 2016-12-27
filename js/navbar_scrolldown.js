$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
  if ($(document).scrollTop() > 50) {
    $('nav h1').addClass('shrink');
  } else {
    $('nav h1').removeClass('shrink');
  }
  if ($(document).scrollTop() > 50) {
    $('#main-logo').addClass('shrink');
  } else {
    $('#main-logo').removeClass('shrink');
  }
});
