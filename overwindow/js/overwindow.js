$(function(){
	$("button").on("click", function(){
		$(".window-container").addClass("active");
	});
	
	$(".close").on("click", function(){
		$(".window-container").removeClass("active");
	});
	
});

