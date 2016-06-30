/*if (typeof jQuery != 'undefined') {

   alert("jQuery library is loaded!");

}else{

   alert("jQuery library is not found!");

}*/

$(document).ready(function() {

 $('#homePage i').click(function() {

   $('#homePage i').removeClass('selected');
   $(this).addClass('selected');

   current = $(this);

   $('#wrapper').scrollTo($(this).attr('href'), 800);

   return false;
 });
});

/*$(function(){
  $("#homePage i").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
});*/