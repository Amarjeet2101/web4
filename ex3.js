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
sr.reveal('.section_img',{origin:'bottom',distance:'70px', delay:100})
sr.reveal('.section_title',{origin:'top',distance:'70px', delay:50})
sr.reveal('.section_title1',{origin:'top',distance:'70px', delay:50})
sr.reveal('.para1',{origin:'bottom',distance:'50px', delay:0,})
sr.reveal('.para2',{origin:'bottom',distance:'50px', delay:40})
sr.reveal('.about_title',{origin:'top',distance:'70px', delay:50})
sr.reveal('.item1',{origin:'bottom',distance:'100px', delay:50})
sr.reveal('.item2',{origin:'bottom',distance:'100px', delay:500})
sr.reveal('.item3',{origin:'bottom',distance:'100px', delay:700})
sr.reveal('.item4',{origin:'bottom',distance:'100px', delay:1000})
sr.reveal('.pac_title1',{origin:'bottom',distance:'50px', delay:100})
sr.reveal('.pac_title2',{origin:'bottom',distance:'50px', delay:500})
sr.reveal('.pac_title3',{origin:'bottom',distance:'50px', delay:700})
sr.reveal('.pac_title4',{origin:'bottom',distance:'50px', delay:1000})
sr.reveal('.pac_content1',{origin:'bottom',distance:'50px', delay:100})
sr.reveal('.pac_content2',{origin:'bottom',distance:'50px', delay:500})
sr.reveal('.pac_content3',{origin:'bottom',distance:'50px', delay:700})
sr.reveal('.pac_content4',{origin:'bottom',distance:'50px', delay:1000})