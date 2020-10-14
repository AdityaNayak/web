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

$.get( "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd", function(data) {
  // alert( "success" );
  console.log(data['ethereum']['usd']);
  var currentprice= data['ethereum']['usd'];

  $('.ethprice').html('$'+currentprice);
  $('#sliderOutput2').val(currentprice);
  $('.slider').foundation('_reflow');
  $('.slider').on('moved.zf.slider', function () {
		// var modal = $(this);
		// alert('closed');
		// console.log($('#sliderOutput2').val()-currentprice);
		var futureprice = $('#sliderOutput2').val(); 
		var longpospnl= ((futureprice - currentprice)/currentprice)*50;
		var shortpospnl= ((currentprice - futureprice)/currentprice)*50;
		// console.log(longpospnl)
		var longpos = 50+longpospnl;
		var shortpos = 50+shortpospnl;
		var longpospercent = (longpospnl/50)*100;
		// console.log(longpospercent);
		var shortpospercent = ((shortpospnl)/50)*100;
		$('.longpos').html(longpos.toFixed(2));
		$('.shortpos').html(shortpos.toFixed(2));
		$('.longposcent').html(longpospercent.toFixed(0)+'%');
		$('.shortposcent').html(shortpospercent.toFixed(0)+'%');

		if(currentprice<futureprice){
			$('.longposcent').addClass('gc').removeClass('rc');
			$('.shortposcent').addClass('rc').removeClass('gc');
		}	
		else{
			$('.longposcent').addClass('rc').removeClass('gc');
			$('.shortposcent').addClass('gc').removeClass('rc');
		}	

	});

})
.fail(function() {
// alert( "error" );
});

