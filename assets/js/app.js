// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------
console.log('appjs loaded');
$(document).foundation();
// $(document).on('ready page:load', function () {
//   $(function(){ $(document).foundation(); });
// });


$('.trg1').click(function(e){
	e.preventDefault();
	$('html, body').animate({
	  scrollTop: '20px'
	}, 1000);
	$('.st-0a').slideUp(1000);
	$('.section-0a').slideUp();
	$('.section-0').delay(1000).slideUp(1000).queue(function(next){
        $(this).addClass('hides');
        next();
    });
	$('.section-1-trs').delay(2000).slideDown(1000).queue(function(next){
        $(this).removeClass('hides');
        $('.progress-0 .progress-meter').animate({'width':'100%'},12000);
        next();
    }).delay(12000).slideUp().queue(function(next){
        $(this).addClass('hides');
        next();
    });
    $('.section-1').delay(15000).slideDown(1000).queue(function(next){
        $(this).removeClass('hides');
        next();
    });
    $('.section-1a').delay(15000).slideDown(1000).queue(function(next){
        $(this).removeClass('hides');
        $('.progress-1 .progress-meter').animate({'width':'20%'},400);
        next();
    });
	// console.log('sme')
});


$('textarea').keyup(updateCount);
$('textarea').keydown(updateCount);

function updateCount() {
  let maxLength = 280;
  var currentq=getactiveq();
  var currenttextarea=$('.q-'+currentq+' textarea');
  let charsEntered = currenttextarea.val().length;
  charcount= maxLength - charsEntered
  // console.log(charcount);
  if(charcount<100){
  	if(charcount>0){
  		$('.charcount').fadeIn().text(charcount);
  		$('.charcount').addClass('yc').removeClass('rc');
  		$('.sectioncontroller').slideDown().queue(function(next){
	        $(this).removeClass('hides');
	        next();
	    });
  	}
  	else{
  		$('.charcount').fadeIn().text(charcount*-1);
  		$('.charcount').addClass('rc').removeClass('yc');
  	}

  }
  else{
  	$('.charcount').fadeOut();
  	$('.sectioncontroller').slideUp().queue(function(next){
        $(this).addClass('hides');
        next();
    });
  }
  
}
function getactiveview(){
	// var currentview = $('section:visible');
	var currentview=$( ".section" ).not(".hides");
	var view=currentview.attr('class').split(" ")[0].split("-")[1];
	return parseInt(view)
}
function getactiveq(){
	var currentq=$(".section .q").not(".hides");
	// var currentq=$('section:visible div');
	// console.log('5')
	// console.log(currentq)
	var question= currentq.attr('class').split(" ")[0].split("-")[1];
	return parseInt(question)
}
// console.log(getactiveq());

$('.v2 .callout').click(function(e){
	e.preventDefault();
	$('.progress-2 .progress-meter').animate({'width':'100%'},400);
	

	$('.section-2').slideUp().queue(function(next){
        $(this).addClass('hides');
        next();
    });
    $('.section-3-trs').slideDown(1000).queue(function(next){
        $(this).removeClass('hides');
        next();
    });
    $('.section-3').delay(7000).slideDown().queue(function(next){
		$('.progress-3').addClass('scolor3bg').removeClass('scolor4bg');

		$('.progress-3 .progress-meter').animate({'width':'50%'},400);
		$('.sectioncontroller').slideDown();
        $(this).removeClass('hides');
        next();
    });
});
$('.sectioncontroller .button').click(function(e){
	var currentq=getactiveq();
	console.log(currentq);
	syncinit()
	// console.log(currentq+1);
	//todo: This should support keyboard shortcuts through form .submit.
	e.preventDefault();
	if(currentq==8){
		currentq=currentq+1;
		$('.dialog1').html('<p class="callout">I am still going through your profile. If you want to speak to me, reach me at @prastut on Twitter</p>');
	}
	$('.charcount').slideUp();
	$('.sectioncontroller').slideUp();
	$('.q-'+currentq).slideUp().queue(function(next){
        $(this).addClass('hides');
        next();
    });
    $('.q-'+(currentq+1)).delay(500).slideDown().queue(function(next){
        $(this).removeClass('hides');
        next();
    });
	if(currentq==7){
		$(".sectioncontroller").slideUp();
	}

	if(currentq==4){
		// console.log('t')
		$('.section-1').slideUp().queue(function(next){
	        $(this).addClass('hides');
	        next();
	    });
	    $('.sectioncontroller').slideUp();
	    $('.section-2-trs').slideDown(1000).queue(function(next){
	        $(this).removeClass('hides');
	        $('.progress-4 .progress-meter').animate({'width':'100%'},6000);
	        $('.progress-1 .progress-meter').animate({'width':'100%'},400);
			next();
	    }).delay(6000).slideUp(1000).queue(function(next){
	        $(this).addClass('hides');
	        // $('.sectioncontroller').slideDown();
	        $('.progress-2').addClass('scolor3bg').removeClass('scolor4bg');
	        next();
	    });
	    $('.section-2').delay(7000).slideDown(1000).queue(function(next){
			$('.progress-2 .progress-meter').animate({'width':'20%'},400);
	        $(this).removeClass('hides');
	        next();
	    });
	}
	
	// console.log('1');
	
	// currentpwidth=$('.progress1 .progress-meter').attr('width'); 
	// $('.v1')
	else if(currentq<5){
		currentpwidth=(currentq+1)*20;	
		$('.progress-1 .progress-meter').animate({'width':currentpwidth+'%'},400);
	}
	else{
		// console.log(currentq)
		currentpwidth=((currentq-3))*20;
		// console.log(currentpwidth);
		$('.progress-2 .progress-meter').animate({'width':currentpwidth+'%'},400);
	}
	synccompleted();
	// console.log(currentpwidth);
	// n=getactiveview();
	// console.log(n)
	// console.log($('.progress-'+n+' .progress-meter'));
	// if(n>1){
		// $('.progress-1').addClass('success').removeClass('warning');
	// }
	
});
// console.log(currentview);

function syncinit(){
	$('.st-1a').slideDown();
	$('.syncloader0b').fadeOut();
	$('.syncloader0a').delay(1000).fadeIn();
	$('.syncloader0d').fadeOut();
	$('.syncloader0c').delay(1000).fadeIn(1000);
	$('.syncloader0a')[0].play()
	$('.syncloader0a').prop('loop', true);
}
function synccompleted(){
	$('.syncloader0a').prop('loop', false);
}
$(".syncloader0a").on("ended", function() {
    // console.log('ended');
 //    var newfile = "/assets/video/1.mp4";
	// var video = $(".syncloader0a")[0];
	// $(".syncloader0a").attr('src',newfile);
	// // video.load();
	// video.play();
	$('.syncloader0c').delay(2000).slideUp(1000);
	$('.syncloader0d').delay(2000).slideDown(1000);
	$('.syncloader0a').hide();
	$('.syncloader0b').show();
});

$('.fsignup').submit(function(e){
	e.preventDefault();
	$('.st-1').slideUp(1000);
	$('.st-1a').delay(1000).slideDown(1000);
	$('.st-2').delay(4000).slideDown(1000);

});
$('.fupdateinfo').submit(function(e){
	e.preventDefault();
	syncinit();
	synccompleted();
	$('.st-2').delay(1000).slideUp(1000);
});
$(".trg2").click(function(){
	$('.st-0a').slideUp();
	$('.st-0').delay(1000).slideDown();
});
$('.flogin').submit(function(e){
	e.preventDefault();
	// syncinit();
	// synccompleted();
	// $('.st-2').delay(1000).slideUp(1000);
});
