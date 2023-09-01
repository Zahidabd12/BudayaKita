// Native Code
window.onload = function() {
  window.scrollTo(0, 0);
}

// GSAP Animation
gsap.registerPlugin(TextPlugin);
gsap.to(".introduction", {duration: 3, delay:1.5, y:1000, opacity: 0,});
gsap.from(".contain", {duration:2, delay:2.5, opacity:0});
gsap.from(".ani",{ duration: 3, y:100, delay:1.5, opacity: .5});
gsap.from(".megamendung", {duration: 2, delay:1.5, y:-150, opacity: 0.1});

// JQuery Code
$(document).on("scroll",function(){
  if ($(document).scrollTop() > 150){
    $(".introduction").addClass("hidden");
  }else {
    $(".introduction").removeClass("hidden");
  }
  if ($(document).scrollTop() > 750){
    $(".nav").addClass("fixed-top");   
  }else {
    $(".nav").removeClass("fixed-top");
  }
});