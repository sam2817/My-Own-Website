alert ("hello!");

$(document).ready(function() {

 $('#homePage a').click(function() {

   $('#Page').removeClass('selected');
   $(this).addClass('selected');

   current = $(this);

   $('#wrapper').scrollTo($(this).attr('href'), 800);

   return false;
 });
 
/*$(function(){
  $(".navSurface a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
});*/