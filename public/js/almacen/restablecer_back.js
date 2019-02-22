$(document).ready(function(){
	$('#fileee_backup').bind('change', function() {
	  	var f = this.files[0];
	  	var val = $(this).val().toLowerCase();
		var regex = new RegExp("(.*?)\.(zip)$");
		if(!(regex.test(val))){
			$(this).filestyle('clear');
			var message = $('<div class="alert alert-error error-message" style="display: none;">');
		    var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
		    var response = $('<strong> El Archivo no es valido por favor seleccione otro(formato zip)!!</strong>');
		    message.append(close);
		    message.append(response);
		    message.appendTo($('#not_bakkk')).fadeIn(300).delay(2000).fadeOut(500);
		}
	});
	$("#sunir_backupdb").keypress(function(e){
        if (e.which == 13){
            return false;
        }
    });
	$("#sunir_backupdb").submit(function(e){
		e.preventDefault();
		subir_restbackup();
		return false;
	});
	function subir_restbackup(){
		var dato = new FormData($("#sunir_backupdb")[0]);
		var route = $('#sunir_backupdb');
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
		    beforeSend: function(){
		    	$('#restart_backk').modal('toggle'); 
				$('#restart_backk').modal('show'); 
		    },
		    success: function(response){
		      	if(response.success){
		      		$('#restart_backk').modal('toggle');
		      		$('#sunir_backupdb').trigger("reset"); 
					showSuccess("RESTAURACION DE BASE DE DATOS EXITOSA!!");
		      	}else{
		      		$('#restart_backk').modal('toggle'); 
        			showErrorMessage("ERROR AL RESTAURAR BASE DE DATOS!!");
		      	}
		    },
		    error: function(){
		    	$('#restart_backk').modal('toggle');
        		showErrorMessage("ERROR AL RESTAURAR BASE DE DATOS!!");
		    }
	    });
	}
});