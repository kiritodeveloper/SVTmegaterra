$(document).ready(function(){
	$('#archivo_enviarcoti').bind('change', function() {
	  	var f = this.files[0];
	  	var val = $(this).val().toLowerCase();
		var regex = new RegExp("(.*?)\.(pdf|PDF)$");
		if(!(regex.test(val))){
			$(this).filestyle('clear');
			var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
		    var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
		    var response = $('<strong> El Archivo no es valido por favor suba otro(formato PDF)!!</strong>');
		    message.append(close);
		    message.append(response);
		    message.appendTo($('#titlecabecera_emailenviarpedidomaterialcotizacion')).fadeIn(300).delay(2000).fadeOut(800);
		}else{
	        if (f.size > 6388608 || f.fileSize > 6388608){
	        	$(this).filestyle('clear');
	        	var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
			    var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
			    var response = $('<strong> Archivo exede el peso maximo. (Max. 6 MB)!</strong>');
			    message.append(close);
			    message.append(response);
			    message.appendTo($('#titlecabecera_emailenviarpedidomaterialcotizacion')).fadeIn(300).delay(2000).fadeOut(800);
	        }
	     }
	});

	$("#formularioenviar_emaildecotiacionumpload").keypress(function(e) {
        if (e.which == 13)
            return false;
    });

	$("#formularioenviar_emaildecotiacionumpload").submit(function(e){
		e.preventDefault();
		umploademail_cotizacionfunction();
		return false;
	});			
});

function umploademail_cotizacionfunction(){
	var dato = new FormData($("#formularioenviar_emaildecotiacionumpload")[0]);
	var route = $('#formularioenviar_emaildecotiacionumpload');
	var url = route.attr('action');
	var token = $("#token").val();
	$.ajax({
		headers: {'X-CSRF-TOKEN': token},
	    url:url,
	    data:dato,
	    dataType:'json',
	    type:'POST',
	    cache: false,
	    processData: false,
	    contentType: false,
	    success: function(response){
	      	if(response.success){
	      		var message = $('<div class="alert alert-success alert-dismissible" style="display: none;">');
			    var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
			    var response = $('<strong>EMAIL ENVIADO SATISFACTORIAMENTE!!</strong>');
			    message.append(close);
			    message.append(response);
			    message.appendTo($('#titlecabecera_emailenviarpedidomaterialcotizacion')).fadeIn(300).delay(2000).fadeOut(800);
		      	document.location.href = '/almacen/cotizacionmaterial';
	      	}else{
	      		var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
			    var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
			    var response = $('<strong> ERROR AL ENVIAR EMAIL!!</strong>');
			    message.append(close);
			    message.append(response);
			    message.appendTo($('#titlecabecera_emailenviarpedidomaterialcotizacion')).fadeIn(300).delay(2000).fadeOut(800);
	      	}
	    },
	    error: function(){
	    	var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
		    var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
		    var response = $('<strong> ERROR AL ENVIAR EMAIL!!</strong>');
		    message.append(close);
		    message.append(response);
		    message.appendTo($('#titlecabecera_emailenviarpedidomaterialcotizacion')).fadeIn(300).delay(2000).fadeOut(800);
	    }
    });
}