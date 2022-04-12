$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
  });
    $('.feat-btn').click(function(){
      $('nav ul .feat-show').toggleClass("show");
      $('nav ul .first').toggleClass("rotate");
    });
    $('.serv-btn').click(function(){
      $('nav ul .serv-show').toggleClass("show1");
      $('nav ul .second').toggleClass("rotate");
    });
    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });

// rellax js
var rellax = new Rellax('.parallax')
//nav
gsap.from('.btn',{opacity:0,duration:2, delay:.3,y:30, ease:'expo.out'})
//text
gsap.from('.home_title',{opacity:0,duration:1, delay:0.8,y:35, ease:'expo.out'})
gsap.from('.home_subtitle',{opacity:0,duration:1, delay:1,y:35, ease:'expo.out'})
//scroll
gsap.from('.home_scroll',{opacity:0,duration:1, delay:1.1,y:35, ease:'expo.out'})
//section
const sr= ScrollReveal({
    duration:2500,
    reset:true
})
//data
sr.reveal('.section_data',{origin:'left',distance:'70px'})
sr.reveal('.section_img',{origin:'bottom',distance:'70px', delay:200})