gsap.registerPlugin(TextPlugin);
gsap.to(".introduction", {duration: 3, y:1000, opacity: 1});
gsap.to(".contain", {duration: 2, delay: .5, text: 'BudayaKita'});
gsap.from(".ani",{ duration: 1.5, y:25, opacity: 0.5});
gsap.from(".megamendung", {duration: 2, y:-150, opacity: 0});


$(document).on("scroll",function(){
  if ($(document).scrollTop() > 200){
    $(".introduction").addClass("shrink");
  }else {
    $(".introduction").removeClass("shrink");
  }
});