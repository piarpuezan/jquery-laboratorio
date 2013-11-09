$(document).ready(function(){
	$('.error').hide();
	$('.submit').click(function(event){
		var data = $('.infobox').val();
		if(validate_phoneno(data)){
			$('.error').hide();
		} else {
			$('.error').show();
			event.preventDefault();
		}
	});
});

function validate_phoneno(ph){
	var pattern = new RegExp(/^[0-9-+]+$/);
	//expresion regular correo 
	/*		/* /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/ */

		return pattern.test(ph);
}