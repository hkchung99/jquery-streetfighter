$(document).ready(function(){
	$(document).keydown(function(event) {
		if (event.which == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		};
	})
	.keyup(function(event) {
		if (event.which == 88) {
			$('.ryu-cool').hide();	
			$('.ryu-still').show();	
		};
	});
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-still').hide(); // for keydown to work well
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$('.hadouken').hide();
				$('.hadouken').css('left', '520px');
			});
		// show hadouken and animate it to the right of the screen
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-still').show();
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}