$(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
	
	$(".req-input input, .req-input textarea").on("click input", function(){
		validate();
	});
	
	$("[data-toggle='tooltip']").on("mouseover", function(){
		console.log("hello");
		if($(this).parent().hasClass("invalid")){
			$(".tooltip").addClass("tooltip-invalid");
		}
		if($(this).parent().hasClass("valid")){
			$(".tooltip").addClass("tooltip-valid");
		}
	});
	
})

function validate(){
	var error = 0;
	$(".req-input input, .req-input textarea").each(function(){
		var type = $(this).attr("type");
		var Parent = $(this).parent();
		var val = $(this).val();
		switch(type) {
			case "textarea":
			case "text":
				var minLength = $(this).data("min-length");
					if(typeof minLength == "undefined")
						minLength = 0;
				if(val.length >= minLength){
					Parent.addClass("valid");
					Parent.removeClass("invalid");
				} else {
					error = 1;
					Parent.addClass("invalid");
					Parent.removeClass("valid");
				}
				break; 
			case "email":
				if(validateEmail(val)){
					Parent.addClass("valid");
					Parent.removeClass("invalid");
				} else {
					error = 1;
					Parent.addClass("invalid");
					Parent.removeClass("valid");
				}
				break;
			case "tel":
				if(phonenumber(val)){
					Parent.addClass("valid");
					Parent.removeClass("invalid");
				} else {
					error = 1;
					Parent.addClass("invalid");
					Parent.removeClass("valid");
				}
				break;			
		}	
	});

	if(error == 0){
		$(".form-container").css("background", "#C8E6C9");
		$(".form-title").css("color", "#2E7D32");
		$(".submit-form").addClass("valid");
		$(".submit-form").removeClass("invalid");
	} else {			
		$(".form-container").css("background", "#FFCDD2");
		$(".form-title").css("color", "#C62828");
		$(".submit-form").addClass("invalid");
		$(".submit-form").removeClass("valid");
	}
}
function phonenumber(inputtxt) {  
	if(typeof inputtxt == "undefined")
		return;
	var phoneno = /^\d{10}$/;  
	if((inputtxt.match(phoneno))) {  
		return true;  
	}  
	else {  
		return false;  
	}  
}  
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}