$(document).ready(function(){
	$('.editgestionactivofijasofevienesa').click(function(e){
		e.preventDefault();
		var iderges = $(this).attr('id');
		if(((iderges)!="")&&(((iderges)!=""))&&(((iderges)!=null))){
			$("#updatetingform_gestionactivosetirformad").trigger("reset");
			$('#estado_gestion_bienes_editable').prop('disabled', false);
			$.get(iderges, function(response){
				if(response.success){
					$('#modaleditiongestion_Activosfijowindowsemergnts').modal('toggle');
					$('#modaleditiongestion_Activosfijowindowsemergnts').modal('show');
					$('#gestion_bienes_editable').val(response.datarara.gestion_bienes);
					if((response.datarara.estado_gestion_bienes))
						$('#estado_gestion_bienes_editable').val((response.datarara.estado_gestion_bienes)+'');
					else{
						$('#estado_gestion_bienes_editable').val((response.datarara.estado_gestion_bienes)+'');
						$('#estado_gestion_bienes_editable').prop('disabled', true);
					}
					$("#gestion_actual_editable").val((response.datarara.gestion_actual)+'');
					$("#id_gestionactivosedit_editable").val(response.datarara.id);
				}else{
					var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
		    		var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
		    		var response = $('<strong>ERROR NO SE ENCONTRO GESTION!</strong>');
		    		message.append(close);
		    		message.append(response);
		    		message.appendTo($('#formensageingestionindex_alertnotifi')).fadeIn(300).delay(2000).fadeOut(800);
				}
			});
			return false;
		}
    });

    $('.vercerradar_gestionactubienacti').click(function(e){
		e.preventDefault();
		if(($(this).attr('name'))){
			if(confirm("Advertencia esta punto de cerrar la getion actual desea prosequir?")){
				var idergescamcerrar = $(this).attr('id');
				if(((idergescamcerrar)!="")&&(((idergescamcerrar)!=""))&&(((idergescamcerrar)!=null))){
						var token = $("#token").val();
						var dato = {"id": idergescamcerrar,"estado_gestion_bienes": false,"operar_gestion": false};
						$.ajax({
						  headers: {'X-CSRF-TOKEN': token},
					      url: "postegestionopertion",
					      data: dato,
					      dataType:'json',
					      type:'POST',
					      success:function(response){
					      	if(response.success) {
				                document.location.href = '/activos/gestionbienes';
						    }else{
						    	var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
			    				var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
					    		var response = $('<strong>ERROR AL CERRAR GESTION!</strong>');
					    		message.append(close);
					    		message.append(response);
					    		message.appendTo($('#formensageingestionindex_alertnotifi')).fadeIn(300).delay(2000).fadeOut(800);
						    }	            
					      },
						  error:function(data){
					        var errors = '';
					        for(datos in data.responseJSON){
					            errors += data.responseJSON[datos] + '<br>';
					        }
					       	var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
							var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
							var response = $('<strong>'+errors+'</strong>');
							message.append(close);
							message.append(response);
							message.appendTo($('#formensageingestionindex_alertnotifi')).fadeIn(300).delay(2000).fadeOut(900);
						  }
						});
					return false;
				}
			}
		}
    });

    $('.selectionergestionactivofijater_idaserad').click(function(e){
		e.preventDefault();
		if(!($(this).attr('name'))){
			if(confirm("Advertencia esta punto de cambiar la getion de operacion desea prosequir?")){
				var idergescamcerraraer = $(this).attr('id');
				if(((idergescamcerraraer)!="")&&(((idergescamcerraraer)!=""))&&(((idergescamcerraraer)!=null))){
						var token = $("#token").val();
						var dato = {"id": idergescamcerraraer,"gestion_actual": true};
						$.ajax({
						  headers: {'X-CSRF-TOKEN': token},
					      url: "changeopegestionoperatiing",
					      data: dato,
					      dataType:'json',
					      type:'POST',
					      success:function(response){
					      	if(response.success) {
						    	document.location.href = '/activos/gestionbienes';
						    }else{
						    	var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
			    				var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
					    		var response = $('<strong>ERROR AL HABILITAR GESTION!</strong>');
					    		message.append(close);
					    		message.append(response);
					    		message.appendTo($('#formensageingestionindex_alertnotifi')).fadeIn(300).delay(2000).fadeOut(800);
						    }	            
					      },
						  error:function(data){
					        var errors = '';
					        for(datos in data.responseJSON){
					            errors += data.responseJSON[datos] + '<br>';
					        }
					       	var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
							var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
							var response = $('<strong>'+errors+'</strong>');
							message.append(close);
							message.append(response);
							message.appendTo($('#formensageingestionindex_alertnotifi')).fadeIn(300).delay(2000).fadeOut(900);
						  }
						});
					return false;
				}
			}
		}
    });

    $("#updatetingform_gestionactivosetirformad").keypress(function(e) {
        if (e.which == 13)
            return false;
    });
	$("#updatetingform_gestionactivosetirformad").submit(function(e){
		e.preventDefault();
		//$('input, select').prop('disabled', false);
		updateformulario_ofthegestionactivos();
		return false;
	});
});

function updateformulario_ofthegestionactivos(){
	var dato = {"id":($("#id_gestionactivosedit_editable").val()),"gestion_bienes": ($("#gestion_bienes_editable").val()), "estado_gestion_bienes": ($("#estado_gestion_bienes_editable").val()), "gestion_actual": ($("#gestion_actual_editable").val()), "operar_gestion": ($("#operar_gestion_editable").val()) };
	var id = $("#id_gestionactivosedit_editable").val();
	var route = $('#updatetingform_gestionactivosetirformad');
	var url = route.attr('action').replace(':ID_COM', id);
	var token = $("#token").val();
	$.ajax({
		headers: {'X-CSRF-TOKEN': token},
	    url:url,
	    data:dato,
	    dataType:'json',
	    type:'PUT',
	    cache: false,
	    success:function(response){
	      	if(response.success){
                document.location.href = '/activos/gestionbienes';
	      	}else{
				var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
		    	var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
		    	var response = $('<strong>ERROR AL ACTUALIZAR GESTION!!!!!</strong>');
		    	message.append(close);
		    	message.append(response);
		    	message.appendTo($('#titlemodalformesange_updateformularingcreatnagesup')).fadeIn(300).delay(2000).fadeOut(800);
			}
	    },
	    error:function(data){
        	var errors = '';
        	for(datos in data.responseJSON){
            	errors += data.responseJSON[datos] + '<br>';
        	}
		  	var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
		    var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
		    message.append(close);
		    message.append(errors);
		    message.appendTo($('#titlemodalformesange_updateformularingcreatnagesup')).fadeIn(300).delay(2000).fadeOut(800);
	    }
    });
}