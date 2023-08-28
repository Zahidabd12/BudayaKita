gsap.registerPlugin(TextPlugin);
gsap.to(".introduction", {duration: 3, y:1500, opacity: 1});
gsap.to(".contain", {duration: 2, delay: .5, text: 'Pesona<br>Warisan'});
gsap.from(".ani",{ duration: 3, y:55, opacity: 0.5});
gsap.from(".megamendung", {duration: 2, y:-150, opacity: 0.1});
gsap.from(".navbar", {duration: 2.5, y:60, opacity: 1});


$(document).on("scroll",function(){
  if ($(document).scrollTop() > 200){
    $(".introduction").addClass("shrink");
  }else {
    $(".introduction").removeClass("shrink");
  }
});