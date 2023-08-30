// Native Code
window.onload = function() {
  window.scrollTo(0, 0);
}

// GSAP Animation
gsap.registerPlugin(TextPlugin);
gsap.to(".introduction", {duration: 3, delay:1.5, y:1500, opacity: 1});
gsap.from(".contain", {duration:2, delay:2.5, opacity:0});
gsap.from(".ani",{ duration: 3, y:100, delay:1.5, opacity: .5});
gsap.from(".megamendung", {duration: 2, delay:1.5, y:-150, opacity: 0.1});
gsap.from(".navbar", {duration: 2.5, delay:1.5, y:100, opacity: 1});

// JQuery Code
$(document).on("scroll",function(){
  if ($(document).scrollTop() > 750){
    $(".introduction").addClass("hidden");
    $(".contain").addClass("hidden");
    $(".navbar").addClass("fixed-top");
  }else {
    $(".introduction").removeClass("hidden");
    $(".contain").removeClass("hidden");
    $(".navbar").removeClass("fixed-top");
  }
});