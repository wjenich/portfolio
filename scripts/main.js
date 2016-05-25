$(document).ready(function(){
    
$('.gold-banner')
    .css('margin-left',-$(this).width())
    .animate({
        marginLeft:0
}, 2000, 'linear');
    
    
      
    
$('button').click(function(){   
    console.log("clicking")
    $('.overlay').fadeToggle(200);
});
    
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200); 
    $(".c-hamburger").removeClass("is-active");
});
    

//  "use strict";
  toggleHandler($(".c-hamburger"));

  function toggleHandler(toggle) {
    toggle.on( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
      //if it's toggled out, display the menu (display/visibility: none)
      //else hide the menu
  }

    



//$('#linkID').on('hover', function(e){ 
//    this OR e.target to select relative to itself relative to parents/children
//    OR 
//    manually select item to chagne with jQuery
//    THEN 
//    take element from DOM with display: none and turn into display: visible (z-index?)
//    OR
//    Change img to a background image of the div and modify text of element/div underneath "this"
//});
                
});