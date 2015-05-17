$(document).bind('mousemove', function(e){
	$('#next-title').css({
		opacity: 1,
		left: e.pageX + 5,
		top: e.pageY - 20
	});
});