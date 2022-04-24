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

// popup
// function toggle(){
//   const blur = document.getElementById('blur');
//   blur.classList.toggle('active');
// }

// rellax js
var rellax = new Rellax('.parallax')
//nav
gsap.from('.btn',{opacity:0,duration:2, delay:.3,y:30, ease:'expo.out'})
//text
gsap.from('.home_title',{opacity:0,duration:1, delay:0.8,y:35, ease:'expo.out'})
gsap.from('.home_subtitle',{opacity:0,duration:1, delay:1,y:35, ease:'expo.out'})
//scroll
gsap.from('.home_scroll',{opacity:0,duration:1, delay:1.1,y:35, ease:'expo.out'})
gsap.from('.section_data1',{opacity:0,duration:1, delay:0.5,y:35, ease:'expo.out'})
gsap.from('.section_data2',{opacity:0,duration:1, delay:0.9,y:35, ease:'expo.out'})
gsap.from('.section_data3',{opacity:0,duration:1, delay:1.3,y:35, ease:'expo.out'})
gsap.from('.first_content',{opacity:0,duration:1, delay:0.3,y:35, ease:'expo.out'})
gsap.from('.first_section_h7',{opacity:0,duration:1, delay:0.6,y:35, ease:'expo.out'})
//section
const sr= ScrollReveal({
    duration:2500,
    reset:true
})
//data
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
sr.reveal('.second_title',{origin:'bottom',distance:'50px', delay:150})
sr.reveal('.second_content',{origin:'bottom',distance:'50px', delay:200})
sr.reveal('.second_container',{origin:'bottom',distance:'50px', delay:100})
sr.reveal('.a',{origin:'bottom',distance:'50px', delay:300})
