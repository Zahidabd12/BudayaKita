// Native Code
// GSAP Animation
gsap.registerPlugin(TextPlugin);
gsap.to(".introduction", {duration: 2, delay:1.5, opacity: 0,});
gsap.to(".contain", {duration:2, delay:1.5, opacity:1});
gsap.from(".ani",{ duration: 3, y:100, delay:1, opacity: .5});
gsap.from("#navbar", {duration: 2, delay:2, opacity: 0});
gsap.from(".megamendung", {duration: 2, delay:1, y:-150, opacity: 0.1});

// JQuery Code
$(document).on("scroll",function(){


    if ($(document).scrollTop() > 100){
      $(".contain").addClass("geser");
    }else {
      $(".contain").removeClass("geser");
    }
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

