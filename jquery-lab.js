$(document).ready(function(){
	$('#borrarDesorden').hide();

	$('#probarToggle').hide();
	//
	//aplicando estilos desde javascript
	$('h1').css({
		'color':'454657',
		'font-size':'88px',
	});
	// aplicando clase colores del documento estilos-laboratorio.css
	$('section').addClass('colores');
	//aplicando clase 'animacion'
	$('#animaciones').addClass('animacion');
		});
//quitando estilos a tarves de jquery
$('#quitarClase a').click(function(event)
{ 
	$('section').removeClass
	('colores').removeAttr('class');
});

});

