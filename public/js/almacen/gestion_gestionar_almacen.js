$(document).ready(function(){
	$('.editgestionactivofijasofevienesa').click(function(e){
		e.preventDefault();
		var iderges = $(this).attr('id');
		if(((iderges)!="")&&(((iderges)!=""))&&(((iderges)!=null))){
			$("#updatetingform_gestionactivosetirformad").trigger("reset");
			$('#estado_gestion_almacen_editable').prop('disabled', false);
			$.get(iderges, function(response){
				if(response.success){
					$('#modaleditiongestion_almacenesfijowindowsemergnts').modal('toggle');
					$('#modaleditiongestion_almacenesfijowindowsemergnts').modal('show');
					$('#gestion_almacen_editable').val(response.datarara.gestion_almacen);
					if((response.datarara.estado_gestion_almacen))
						$('#estado_gestion_almacen_editable').val((response.datarara.estado_gestion_almacen)+'');
					else{
						$('#estado_gestion_almacen_editable').val((response.datarara.estado_gestion_almacen)+'');
						$('#estado_gestion_almacen_editable').prop('disabled', true);
					}
					$("#gestion_actual_almacen_editable").val((response.datarara.gestion_actual_almacen)+'');
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
						var dato = {"id": idergescamcerrar,"estado_gestion_almacen": false};
						$.ajax({
						  headers: {'X-CSRF-TOKEN': token},
					      url: "postegestionopertionalmacenguard",
					      data: dato,
					      dataType:'json',
					      type:'POST',
					      success:function(response){
					      	if(response.success) {
					      		var message = $('<div class="alert alert-success alert-dismissible" style="display: none;">');
						    	var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
						    	var response = $('<strong>GESTION CERRADA SATISFACTORIAMENTE!!</strong>');
						    	message.append(close);
						    	message.append(response);
						    	message.appendTo($('#formensageingestionindex_alertnotifi')).fadeIn(300).delay(2000);
					      		document.location.href = '/almacen/gestionalmacen';
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
						var dato = {"id": idergescamcerraraer,"gestion_actual_almacen": true};
						$.ajax({
						  headers: {'X-CSRF-TOKEN': token},
					      url: "changeopegestionoperatiingalmadepo",
					      data: dato,
					      dataType:'json',
					      type:'POST',
					      success:function(response){
					      	if(response.success) {
					      		var message = $('<div class="alert alert-success alert-dismissible" style="display: none;">');
						    	var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
						    	var response = $('<strong>GESTION HABILITADA SATISFACTORIAMENTE!!</strong>');
						    	message.append(close);
						    	message.append(response);
						    	message.appendTo($('#formensageingestionindex_alertnotifi')).fadeIn(300).delay(2000);
					      		document.location.href = '/almacen/gestionalmacen';
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
	$("#estado_gestion_almacen_editable").change(function(e){
	    if((($(this).val())=='false'))
	    	alert("NOTIFICACION ---Selecciono cerrar la gestion actual---")
	});

    $("#updatetingform_gestionactivosetirformad").keypress(function(e) {
        if (e.which == 13)
            return false;
    });
	$("#updatetingform_gestionactivosetirformad").submit(function(e){
		e.preventDefault();
		updateformulario_ofthegestionactivosalmaceneasdasd();
		return false;
	});
});

function updateformulario_ofthegestionactivosalmaceneasdasd(){
	var dato = {"id":($("#id_gestionactivosedit_editable").val()),"gestion_almacen": ($("#gestion_almacen_editable").val()), "estado_gestion_almacen": ($("#estado_gestion_almacen_editable").val()), "gestion_actual_almacen": ($("#gestion_actual_almacen_editable").val()) };
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
				var message = $('<div class="alert alert-success alert-dismissible" style="display: none;">');
		    	var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
		    	var response = $('<strong>ACTUALIZACION DE GESTION SATISFACTORIO!!!!!</strong>');
		    	message.append(close);
		    	message.append(response);
		    	message.appendTo($('#titlemodalformesange_updateformularingcreatnagesup')).fadeIn(300).delay(2000);
	      		document.location.href = '/almacen/gestionalmacen';
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