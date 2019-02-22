$(document).ready(function(){
	$("#tranferirbutoshowbienaactivobienmatenindicebienes_listamodalformwindowsupload").click(function(){	 
    	if($("#idbienactivofijodepretion_showewrformulario").val()!=""){
			$('#create_tranferenactibienad').modal('toggle');
			$('#create_tranferenactibienad').modal('show');
			$("#unidadactualfuncionario_tranferir").val($("#unidad_id").val());
    		$("#oficinoareaactual_transferir").val($("#oficina_id").val());
    		$("#responsablesnameactual_transferir").val($("#responsable_id").val());
    		$("#cargoactualresponable_transferir").val($("#cargoencargado_activofijo").val());
    		$("#iiidd_activofijo_tranferirbienprimary").val($("#idbienactivofijodepretion_showewrformulario").val());
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
	        $.get("../areasanduserlibrobienesuncentr/"+($(this).val()), function(data){
		        if(data.success){
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
	      $.get("../getoneencargadoforoficinarelibrobiene/"+($(this).val()), function(data){
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
	        	$.get("../getempleadoslibrobienesunicent/"+($("#nuevaunidadocentro_transeferir").val()), function(data){
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
	      $.get("../onefuncionarioencargadogetopen/"+($(this).val()), function(data){
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
				$("#unidad_id").val($("#nuevaunidadocentro_transeferir option:selected").html());
    			$("#oficina_id").val($("#nuevaoficinatra_tranferir option:selected").html());
    			$("#responsable_id").val($("#nuevoresponsablenameapellid_transferir option:selected").html());
    			$("#cargoencargado_activofijo").val($("#cargoresponsablenuevofuncionario_transferir").val());
    			showSuccess("TRANSFERENCIA REALIZADA SATISFACTORIAMENTE");
	      	}else
	      		showErrorMessage("ERROR AL GUARDAR TRANSFERENCIA DE ACTIVO FIJO!");
	    },
	    error:function(data){
        	var errors = '';
        	for(datos in data.responseJSON){
            	errors += data.responseJSON[datos] + '<br>';
        	}
        	showErrorMessage(errors);
		}
    });
}