$(document).ready(function(){
	$('html, body').animate({scrollTop: $('body').offset().top-200}, 500);	
	$(".crd").animate({"opacity": "1"},2000);
	$('.mgset').click(
		function (){
			$('html, body').animate({scrollTop: $('.thmb').offset().top-200}, 500);
		}
	)	
});

