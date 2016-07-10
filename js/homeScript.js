//background slide show

$("#slideShow > img:gt(0)").hide();

setInterval(function() { 
  $('#slideShow > img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideShow');
},  3000);

//reducing the size of navbar on scroll

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav.navbar.navbar-default').addClass('shrink');
  } else {
    $('nav.navbar.navbar-default').removeClass('shrink');
  }
});