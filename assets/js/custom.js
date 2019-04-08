$(function(){
	$('#backToTop').on('click', function() {
		$('html, body').finish();
		$('html, body').animate({
			scrollTop: $('[id="top"]').offset().top
		}, 800);
	});
});