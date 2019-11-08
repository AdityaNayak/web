// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------

$(document).foundation();




//
// Custom JS
// --------------------------------------------------

// $(window).on('scroll', function() {
//     var scrollPosition = $(this).scrollTop();
//     var imageUrl;
//     var bgpos;
//     if (scrollPosition >= 680) {
//         // If the function is only supposed to fire once
//         //$(this).off('scroll');
//         imageUrl = '../assets/img/bg2.jpg';
//         // Other function stuff here...
//         bgpos = '0% 20%';
//     }
//     else{
//         imageUrl = '../assets/img/cover3.jpg';
//         bgpos = 'bottom';
//     }
//     $(".parallax-background").css({"background-image": "url('" + imageUrl + "')","background-position": bgpos});
// });

function cta_ico(){
  var email;
  $('.cta-main').submit(function(e){
    e.preventDefault();
    email = $('.cta-email').val();
    console.log(email)
    $('.step0 .button').addClass('disabled');
    $('.step0').delay(1000).slideUp(1000);
    $('.step1').delay(1000).slideDown(1000).delay(5000).removeClass('text-center');
        // .delay(4800).queue(function() {$(this).removeClass('text-center')});
        $('.step0f').fadeOut(1000);
        $('.step1f').delay(1000).fadeIn(1000).delay(7000).fadeOut(1000);
        $(".step1 .progress .progress-meter").delay(2000).animate({
          width:"100%"
        },
        {
          easing: 'swing',
          duration: 25000,
          complete: function(){
            $('.done').slideDown(1000);
            $(".step1 .progress").removeClass('warning').addClass('success');
          }
        });
        $('.step2').delay(5000).slideDown(1000);
        $('.step1 .bkc').delay(5000).slideUp(1000);
        $('.step1 .processing').delay(5000).slideUp(1000);
        $('.step3').delay(8000).slideDown(3000, function() {
          load_js();
          $('.email-val').val(email)
        });
        $('.step3f').delay(11000).fadeIn(1000);
      });
  $('.cta-main2').submit(function(e){
    e.preventDefault();
    $('.step2').slideUp(1000);
    $('.step3').slideUp(1000);
    $('.step4').slideDown(1000)
  });
  $('.cta1').click(function(e){
    e.preventDefault();    

    $('html:not(:animated), body:not(:animated)').animate({
      scrollTop: $(".cta-main").offset().top -100
    }, 1000);
    $('.step0').hide();
    $('.step2').show();
    $('.step3').show();
    $('.step0f').hide();
    $('.step3f').show();

  });
  $('.cta0').click(function(e){
    e.preventDefault();    

    $('html:not(:animated), body:not(:animated)').animate({
      scrollTop: $(".row.wc").offset().top -100
    }, 1000);

  });

  $('.cta_ico1_trg').submit(function(e){
    e.preventDefault();    
    $('.cta_ico1_t').slideUp(1000);
    $('.cta_ico1_0').delay(1000).slideDown(1000);
    $('.cta_ico1_1').delay(1000).slideDown(1000).fadeIn();
    $('.cta_ico1_1 .progress-meter').delay(2000).animate({
      width:"100%"
    },
    {
      easing: 'swing',
      duration: 2500,
      complete: function(){
        $('.cta_ico1_1 .progress').removeClass('warning').addClass('success').delay(500).slideUp(1000);
        $('.cta_ico1_2 p').delay(1000).slideDown(1000);
                // $('.cta_ico1_2 h4').delay(3000).addClass('nm');
              }
            });
    $('.cta_ico1_2').delay(3000).slideDown(1000);
    $('.cta_ico1_0 .callout').delay(3000).animate({
      "margin-top":"-5em"
    },
    {
      easing: 'swing',
      duration: 1000
    });
    $('.cta_ico1_3').delay(7000).slideDown(1000);
        // $('.cta_ico1').delay(1000).slideDown(1000);
      });

  $('.cta_ico1_4trg').submit(function(e){
    e.preventDefault();
    $('.cta_ico1_4').slideUp(1000);
    $('.cta_ico1_5').delay(1000).slideDown(1000);
  })


}
function cta_main(){
 $('.cta0').click(function(e){
  e.preventDefault();
        // email = $('.cta-email').val();
        // console.log(email)
        $('.step0 .button').addClass('disabled');
        $('.step0').slideUp(1000);
        $('.step1').delay(1000).slideDown(1000);
        $('.stepp').slideDown(1000);
        // .delay(4800).queue(function() {$(this).removeClass('text-center')});
        // $('.step0f').fadeOut(1000);
        // $('.step1f').delay(1000).fadeIn(1000).delay(7000).fadeOut(1000);
        $(".stepp .progress .progress-meter").delay(1000).animate({
          width:"75%"
        },
        {
          easing: 'swing',
          duration: 25000,
          complete: function(){
                // $('.done').slideDown(1000);
                
              }
            });
        $('.step2').delay(5000).slideDown(1000);
        $('.step1').delay(3000).slideUp(1000);
        // $('.step1 .processing').delay(5000).slideUp(1000);
        $('.step2a').delay(10000).slideDown(1000);
        $('.step3').delay(12000).slideDown(2500, function() {
          load_js();
            // $('.email-val').val(email)
          });
        // $('.step3f').delay(11000).fadeIn(1000);
      });
 $('.cta-main2').submit(function(e){
  e.preventDefault();
        // $('.stepp').slideUp(1000);
        $('.step2').slideUp(1000);
        $('.step2a').slideUp(1000);
        $('.step3').slideUp(1000);
        $('.step4').slideDown(1000);
        $(".stepp .progress .progress-meter").delay(2000).animate({
          width:"100%"
        },
        {
          easing: 'swing',
          duration: 1000,
          complete: function(){
                // $('.done').slideDown(1000);
                $(".stepp .progress").removeClass('warning').addClass('success');

              }
            });
      });
 $('.sl1trg').click(function(e){
  e.preventDefault();
  $('.sl1').delay(400).slideDown().addClass('m-ws-bottom');
  $('.sl1t').addClass('bkc bold');
});
 $('.sl2trg').click(function(e){
  e.preventDefault();
  $('.sl2').delay(400).slideDown().addClass('m-ws-bottom');
  $('.sl2t').addClass('nm bkc bold');
});
 $('.sl3trg').click(function(e){
  e.preventDefault();
  $('.sl3').delay(400).slideDown(400).addClass('m-ws-bottom');
  $('.sl3t').addClass('bkc nm bold');
});
}
var layoutvar;
// cta_ico();
if(layoutvar=="home"){
  cta_main();
}
else if(layoutvar=="ico"){
  cta_ico();
}
// console.log(tempvar);
// console.log('temp')
function load_js(){
  var head= document.getElementsByTagName('head')[0];
  var script= document.createElement('script');
  script.src= 'https://js.hs-scripts.com/4557883.js';
  script.setAttribute("id", "hs-script-loader");
  head.appendChild(script);
  console.log('hubspot loaded')
}
   // id="hs-script-loader" async defer
// load_js();


// https://stackoverflow.com/questions/39768465/expanding-and-collapsing-foundation-6-accordion-menu-on-scroll-with-magellan
//store the last active element
// var lastActive = null;
// //update called when magellan changes
// $('.side-navgm').on('update.zf.magellan', function() {

//   //get the curerntly active section in the menu
//   var $active = $(this).find('a.is_active');
//   //the active anchor has changed - use the HTML element to compare
//   if (lastActive !== $active[0]) {

//     lastActive = $active[0];
//     var isActiveParentASubmenu = $active.parent().parent().hasClass('is-accordion-submenu'); //the UL
//     //
//     if (!isActiveParentASubmenu) {
//       //current active does not have a parent that is a submenu, therefore close all open submenus
//       // $('.side-navg').foundation('up', $('.is-accordion-submenu'));
//       $('.side-navg').foundation('hideAll');
//     } else {
//       //current active is a child of a subment, open the sub menu it belongs to
//       $('.side-navg').foundation('down', $active.parent().parent());
//     }
//   }
// });
