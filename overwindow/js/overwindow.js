$(function(){
	
	validate($(".window-container .form-container"));
	
	$("button").on("click", function(){
		$(".window-container").addClass("active");
	});
	
	$(".close").on("click", function(){
		$(".window-container").removeClass("active");
	});
	
	$(".rotational-btn-group .btn").on("click", function(){
		$(".rotational-btn-group .btn").removeClass("active");
		$(this).addClass("active");
	});
	
});

