

/* @author Samuel Aaron Felipe */
/* @version 1.0.0 */

$(document).ready(function(){
  $("#navSurface a").click(function(e){
	//e.preventDefault();
    $('html,body').scrollTo(this.hash, this.hash); 
  });
});

// Most of the comments here are for toubleshooting

/*if (typeof jQuery != 'undefined') {

   alert("jQuery library is loaded!");

}else{

   alert("jQuery library is not found!");

}*/
/*


 $('#homePage i').click(function() {

   $('#homePage i').removeClass('selected');
   $(this).addClass('selected');

   current = $(this);

   $('#wrapper').scrollTo($(this).attr('href'), 800);

   return false;
 });
});

$(function(){
  $("#homePage i").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
});*/

/*
$(document).ready(function(){
	menuOnScroll();
});

//Function to mark an item from a section width a css class.
function menuOnScroll(mySection, myMenu, myClass) {
  $(window).scroll(function(){
    var elScroll = $(window).scrollTop();
    $(mySection).each(function(i){
      if ($(this).offset().top <= elScroll) {
        $(myMenu).removeClass(myClass);
        $(myMenu).eq(i).addClass(myClass);
      }
    });
  });
}
*/

/*$(document).ready(function(){
$("#navSurface > a:nth-child(1)").click(function(){
$("#container").animate({top:0%},1000);
});

$("#navSurface > a:nth-child(2)").click(function(){
$("#container").animate({top:-100%},1000);
});

$("#navSurface > a:nth-child(3)").click(function(){
$("#container").animate({top:-200%},1000);
});

$("#navSurface > a:nth-child(4)").click(function(){
$("#container").animate({top:-300%},1000);
});
});*/


//alert ("Hello!");
