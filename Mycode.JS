$(document).ready(function() {

	$('p').hide();
	$("#FavPic").hide();
	

	$("h1").click(function() {
		$(this).next().fadeToggle(700);
	
	});
	
	$("h2").click(function() {	
		$(this).next().fadeToggle(600);
	});

});
