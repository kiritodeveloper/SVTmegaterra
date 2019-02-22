$(document).ready(function(){
	$("#tranferirbutonindicebienes_listamodalformwindowsupload").click(function(){
		if(($("#iiidcmp_lvdro").val()!="")&&($("#iiidcmp_lvdro").val()!=null) && ($("#estadregistroactivofijo_librobienes").val()=="APROBADO")){
			$('#create_tranferenactibienad').modal('toggle');
			$('#create_tranferenactibienad').modal('show');
			$("#nuevaunidadocentro_transeferir").empty();
			$('#unidad_idlibrobienes option').clone().appendTo('#nuevaunidadocentro_transeferir');
			$("#nuevaunidadocentro_transeferir option[value='CONSOLIDADO']").remove();
			$("#unidadactualfuncionario_tranferir").val($("#unidadid_librobienes").val());
    		$("#oficinoareaactual_transferir").val($("#oficinaid_librobienes").val());
    		$("#responsablesnameactual_transferir").val($("#responsableidlibrobienes").val());
    		$("#cargoactualresponable_transferir").val($("#cargoencargado_activoflibrobienes").val());
    		$("#iiidd_activofijo_tranferirbienprimary").val($("#iiidcmp_lvdro").val());
    		$("#nuevaunidadocentro_transeferir").val(null);
    		$("#cargoresponsablenuevofuncionario_transferir").val('');
	        $("#nuevoresponsablenameapellid_transferir").empty();
	        $("#nuevoresponsablenameapellid_transferir").append("<option value>Seleccione Funcionario</option>");
	        $("#nuevaoficinatra_tranferir").empty();
	        $("#nuevaoficinatra_tranferir").append("<option value='0'>Seleccione Oficina o Area (no obligatorio)</option>");
		}
		return false;
	});

	$("#nuevaunidadocentro_transeferir").change(function(e){
	    if((($(this).val())!=0) && (($(this).val())!="") && (($(this).val())!=null) && ($("#iiidd_activofijo_tranferirbienprimary").val()!=null) && ($("#iiidd_activofijo_tranferirbienprimary").val()!="")){
	        $.get("areasanduserlibrobienesuncentr/"+($(this).val()), function(data){
		        if (data.success){
		        	$("#cargoresponsablenuevofuncionario_transferir").val('');
			        $("#nuevaoficinatra_tranferir").empty();
			        $("#nuevaoficinatra_tranferir").append("<option value='0'>Seleccione Oficina o Area (no obligatorio)</option>");
			        $(data.data).each(function(key, value){
			           $("#nuevaoficinatra_tranferir").append("<option value='"+value.id+"'> "+value.nombre_unidad+"</option>");
			        });
			        $("#nuevoresponsablenameapellid_transferir").empty();
			        $("#nuevoresponsablenameapellid_transferir").append("<option value>Seleccione Funcionario</option>");
			        $(data.dator).each(function(key, value){
			           $("#nuevoresponsablenameapellid_transferir").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
			        });
		        }else{
		        	$("#cargoresponsablenuevofuncionario_transferir").val('');
		            $("#nuevaoficinatra_tranferir").empty();
		            $("#nuevaoficinatra_tranferir").append("<option value='0'>Seleccione Oficina o Area (no obligatorio)</option>");
		            showErrorMessage("NO SE ENCONTRO OFICINAS O AREAS DE ACUERDO A LA UNIDAD O CENTRO!");
		            $("#nuevoresponsablenameapellid_transferir").empty();
		            $("#nuevoresponsablenameapellid_transferir").append("<option value>Seleccione Funcionario</option>");
		            $(data.dator).each(function(key, value){
		              $("#nuevoresponsablenameapellid_transferir").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
		            });
		        }
	      	});
	    }else{
	    	$("#cargoresponsablenuevofuncionario_transferir").val('');
	        $("#nuevoresponsablenameapellid_transferir").empty();
	        $("#nuevoresponsablenameapellid_transferir").append("<option value>Seleccione Funcionario</option>");
	        $("#nuevaoficinatra_tranferir").empty();
	        $("#nuevaoficinatra_tranferir").append("<option value='0'>Seleccione Oficina o Area (no obligatorio)</option>");
	    }
	});

	$("#nuevaoficinatra_tranferir").change(function(e){
	    if((($(this).val())!='0') && (($(this).val())!="") && (($(this).val())!=null)&& (($(this).val())!=0)){
	      $.get("getoneencargadoforoficinarelibrobiene/"+($(this).val()), function(data){
	        if (data.success){
	        	$("#cargoresponsablenuevofuncionario_transferir").val('');
	          	$("#nuevoresponsablenameapellid_transferir").empty();
	        	$("#nuevoresponsablenameapellid_transferir").append("<option value>Seleccione Funcionario</option>");
	          	$(data.data).each(function(key, value){
	            	$("#nuevoresponsablenameapellid_transferir").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
	          	});
	        }else{
	        	$("#cargoresponsablenuevofuncionario_transferir").val('');
	          	showErrorMessage("NO SE ENCONTRO FUNCIONARIOS DE ACUERDO A LA OFICINA O AREA SELECCIONADA!");
	          	$("#nuevoresponsablenameapellid_transferir").empty();
	        	$("#nuevoresponsablenameapellid_transferir").append("<option value>Seleccione Funcionario</option>");
	        }
	      });
	    }else{
	      	if(($("#nuevaunidadocentro_transeferir").val()!=' ') && ($("#nuevaunidadocentro_transeferir").val()!=null) && ($("#nuevaunidadocentro_transeferir").val()!="")){
	        	$.get("getempleadoslibrobienesunicent/"+($("#nuevaunidadocentro_transeferir").val()), function(data){
	          		if (data.success){
	          			$("#cargoresponsablenuevofuncionario_transferir").val('');
			            $("#nuevoresponsablenameapellid_transferir").empty();
	        			$("#nuevoresponsablenameapellid_transferir").append("<option value>Seleccione Funcionario</option>");
			            $(data.data).each(function(key, value){
			              	$("#nuevoresponsablenameapellid_transferir").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
			            });
	          		}else{
	          			$("#cargoresponsablenuevofuncionario_transferir").val('');
			            $("#nuevoresponsablenameapellid_transferir").empty();
	        			$("#nuevoresponsablenameapellid_transferir").append("<option value>Seleccione Funcionario</option>");
	          		}
	        	});
	      	}else{
	      		$("#cargoresponsablenuevofuncionario_transferir").val('');
	        	$("#nuevoresponsablenameapellid_transferir").empty();
	        	$("#nuevoresponsablenameapellid_transferir").append("<option value>Seleccione Funcionario</option>");
	      	}
	    }
	});

	$("#nuevoresponsablenameapellid_transferir").change(function(e){
	    if((($(this).val())!='null') && (($(this).val())!=null) && (($(this).val())!=0) && (($(this).val())!='')){
	      $.get("onefuncionarioencargadogetopen/"+($(this).val()), function(data){
	        if (data.success)
	          $("#cargoresponsablenuevofuncionario_transferir").val(data.data.cargo_usuario);
	        else{
	          showErrorMessage("NO SE ENCONTRO FUNCIONARIO EN NUESTROS REGISTROS");
	          $("#cargoresponsablenuevofuncionario_transferir").val('');
	        }
	      });
	    }else
	      $("#cargoresponsablenuevofuncionario_transferir").val('');
	});

	$("#transferenciacreate_bienform").keypress(function(e) {
        if (e.which == 13)
            return false;
    });

    $("#transferenciacreate_bienform").submit(function(e){
		e.preventDefault();
		if(($("#iiidd_activofijo_tranferirbienprimary").val()!=null)&&($("#iiidd_activofijo_tranferirbienprimary").val()!=''))
			formregister_tranfepostcontroller();
		return false;
	});
});

function formregister_tranfepostcontroller(){
	var dato = new FormData($("#transferenciacreate_bienform")[0]);
	var id = $("#iiidd_activofijo_tranferirbienprimary").val();
	var route = $('#transferenciacreate_bienform');
	var url = route.attr('action').replace(':ID', id);
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
	    success:function(response){
	      	if(response.success){
				$("#create_tranferenactibienad").modal('toggle');
				$("#unidadid_librobienes").val($("#nuevaunidadocentro_transeferir option:selected").html());
    			$("#oficinaid_librobienes").val($("#nuevaoficinatra_tranferir option:selected").html());
    			$("#responsableidlibrobienes").val($("#nuevoresponsablenameapellid_transferir option:selected").html());
    			$("#cargoencargado_activoflibrobienes").val($("#cargoresponsablenuevofuncionario_transferir").val());
    			showSuccess("TRANSFERENCIA REALIZADA SATISFACTORIAMENTE");
	      	}else{
				var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
		    	var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
		    	var response = $('<strong>ERROR AL GUARDAR TRANSFERENCIA DE ACTIVO FIJO!!</strong>');
		    	message.append(close);
		    	message.append(response);
		    	message.appendTo($('#dup_encabezaddo_tranferenciregi_h4345')).fadeIn(300).delay(2000).fadeOut(800);
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
		    message.appendTo($('#dup_encabezaddo_tranferenciregi_h4345')).fadeIn(300).delay(2000).fadeOut(800);
	    }
    });
}