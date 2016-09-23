$(document).ready(function() {
	
	$(#aboutmeinfo).hide(); /* we need to create this next time*/
	
	$("#Mybutton").click(function() {
		
		$("#aboutmeinfo").slideToggle(500);
		
		
		
		
		$("h3, #testbutton").css("background-color","red");
	});

});

