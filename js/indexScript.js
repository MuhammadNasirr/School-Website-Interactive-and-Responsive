//background slide show

$("#slideShow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideShow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideShow');
},  3000);

//push or sliding menu

var main = function(){

    $("#menuIcon").click(function(){

        $(this).hide();
        $("#menu").animate({
            left: '0px',
        },600);

        $("#welcome").animate({
            left : '500px',
        },600);
 
if (document.documentElement.clientWidth < 1024) {
       $("#welcome").hide();
 }
    


});


    $("#closeIcon").click(function(){

        $("#menuIcon").fadeIn(600);
        $("#menu").animate({
            left: '-300px',
        },600);

        $("#welcome").animate({
            left : '360px',
        },600);

if (document.documentElement.clientWidth < 1024) {
       $("#welcome").fadeIn(1000);
 }
    

});

}

$(document).ready(main);