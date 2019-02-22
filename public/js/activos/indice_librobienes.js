$(document).ready(function(){
	var logoot = document.getElementById('imagencodeqursadasdactivofijon_librobienes');
	var ComOptsas;
	var dsceufv = $("#ufvactualactivofijo_librobienes").val();
	$("#bus_bienactivfijoalvdro").select2();
	$('#rangomodal_windowsemergent_bieneslobro').modal('toggle');
	$('#rangomodal_windowsemergent_bieneslobro').modal('show');
	
	$("#liFechdiar_librbinasd").click(function(){	
		$('#rangomodal_windowsemergent_bieneslobro').modal('toggle');
		$('#rangomodal_windowsemergent_bieneslobro').modal('show');
	});

	$("#fecha_desde_librobienes").datepicker({
	    changeMonth: true,
	    changeYear: true,
	    yearRange: '-40:+0'
	});
	jQuery(function($){
	    $.datepicker.regional['es'] = {
	      closeText: 'Cerrar',
	      prevText: '&#x3c;Ant',
	      nextText: 'Sig&#x3e;',
	      currentText: 'Hoy',
	      monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
	      'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
	      monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
	      'Jul','Ago','Sep','Oct','Nov','Dic'],
	      dayNames: ['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],
	      dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
	      dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
	      weekHeader: 'Sm',
	      dateFormat: 'yy-mm-dd',
	      firstDay: 1,
	      isRTL: false,
	      showMonthAfterYear: false,
	      yearSuffix: ''};
	    $.datepicker.setDefaults($.datepicker.regional['es']);
	});

	$("#fecha_hasta_librobienes").datepicker({
	    changeMonth: true,
	    changeYear: true,
	    yearRange: '-20:+1'
	});

	$("#fechamodificacionrevaluobienactivo_revaluotecnico").datepicker({
	    changeMonth: true,
	    changeYear: true,
	    yearRange: '-0:+0'
	});

	$("#fechabajabienactivo_bajaactivofijoactualfech").datepicker({
	    changeMonth: true,
	    changeYear: true,
	    yearRange: '-0:+0'
	});
	
	$("#grupo_contable_idlibrobienes").change(function(e){
	    if((($(this).val())!=null) && (($(this).val())!="TODOS") && (($(this).val())!="")){
	      $.get("auxiliaresforlibrobienes/"+($(this).val()), function(data){
	        if (data.success){
	         	$("#auxiliar_contable_idlibrobienes").empty();
	      		$("#auxiliar_contable_idlibrobienes").append("<option value='TODOS'>TODOS</option>");
	          	$(data.data).each(function(key, value){
	            	$("#auxiliar_contable_idlibrobienes").append("<option value='"+value.id+"'> "+value.nombre_auxiliarcontable+"</option>");
	          	});
	        }else{
	          	$("#auxiliar_contable_idlibrobienes").empty();
	      		$("#auxiliar_contable_idlibrobienes").append("<option value='TODOS'>TODOS</option>");
	          	showErrorMessage("NO SE ENCONTRO GRUPO CONTABLE EN NUESTROS REGISTROS!");
	        }
	      });
	    }else{
	      $("#auxiliar_contable_idlibrobienes").empty();
	      $("#auxiliar_contable_idlibrobienes").append("<option value='TODOS'>TODOS</option>");
	    }
	});

	$("#unidad_idlibrobienes").change(function(e){
	    if((($(this).val())!='CONSOLIDADO') && (($(this).val())!="") && (($(this).val())!=null)){
	      	$.get("areasanduserlibrobienesuncentr/"+($(this).val()), function(data){
		        if(data.success){
			        $("#oficina_idlibrobienes").empty();
			        $("#oficina_idlibrobienes").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
			        $(data.data).each(function(key, value){
			           $("#oficina_idlibrobienes").append("<option value='"+value.id+"'> "+value.nombre_unidad+"</option>");
			        });
			        $("#responsable_idlibrobienes").empty();
			        $("#responsable_idlibrobienes").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
			        $(data.dator).each(function(key, value){
			           $("#responsable_idlibrobienes").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
			        });
		        }else{
		            $("#oficina_idlibrobienes").empty();
		            $("#oficina_idlibrobienes").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
		            showErrorMessage("NO SE ENCONTRO OFICINAS DE ACUERDO A LA UNIDAD O CENTRO!");
		            $("#responsable_idlibrobienes").empty();
		            $("#responsable_idlibrobienes").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
		            $(data.dator).each(function(key, value){
		              $("#responsable_idlibrobienes").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
		            });
		        }
	      	});
	    }else{
	        $("#responsable_idlibrobienes").empty();
	        $("#responsable_idlibrobienes").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
	        $("#oficina_idlibrobienes").empty();
	        $("#oficina_idlibrobienes").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
	    }
	});

	$("#oficina_idlibrobienes").change(function(e){
	    if((($(this).val())!='CONSOLIDADO') && (($(this).val())!="") && (($(this).val())!=null)){
	      $.get("getoneencargadoforoficinarelibrobiene/"+($(this).val()), function(data){
	        if (data.success){
	          	$("#responsable_idlibrobienes").empty();
	        	$("#responsable_idlibrobienes").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
	          	$(data.data).each(function(key, value){
	            	$("#responsable_idlibrobienes").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
	          	});
	        }else{
	          	showErrorMessage("NO SE ENCONTRO FUNCIONARIOS DE ACUERDO A LA OFICINA O AREA SELECCIONADA!");
	          	$("#responsable_idlibrobienes").empty();
	        	$("#responsable_idlibrobienes").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
	        }
	      });
	    }else{
	      	if(($("#unidad_idlibrobienes").val()!='CONSOLIDADO') && ($("#unidad_idlibrobienes").val()!=null) && ($("#unidad_idlibrobienes").val()!="")){
	        	$.get("getempleadoslibrobienesunicent/"+($("#unidad_idlibrobienes").val()), function(data){
	          		if (data.success){
			            $("#responsable_idlibrobienes").empty();
	        			$("#responsable_idlibrobienes").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
			            $(data.data).each(function(key, value){
			              	$("#responsable_idlibrobienes").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
			            });
	          		}else{
			            $("#responsable_idlibrobienes").empty();
	        			$("#responsable_idlibrobienes").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
	          		}
	        	});
	      	}else{
	        	$("#responsable_idlibrobienes").empty();
	        	$("#responsable_idlibrobienes").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
	      	}
	    }
	});

	$("#depreciar_activofijoerertlibrobienes").click(function(){
	    return false;
	});

	$("#actualizarasdasdactivofijo_librobienes").click(function(){
	    return false;
	});

	$("#enviarlibrobienes_cerrarmodalcalculate").click(function(){
		var grup = $("#grupo_contable_idlibrobienes").val();
		var aux = $("#auxiliar_contable_idlibrobienes").val();
		var unidce = $("#unidad_idlibrobienes").val();
		var ofiarea = $("#oficina_idlibrobienes").val();
		var respon = $("#responsable_idlibrobienes").val();
		var orgfinan = $("#organismo_financiadoridlibrobienes").val();
		var estacti = $("#estado_activofijolibrobienes").val();
		var estadoregistr = $("#estado_registroactivofijo_librobienes").val();
		var desdefech = $("#fecha_desde_librobienes").val();
		var hastafech = $("#fecha_hasta_librobienes").val();
		$('#rangomodal_windowsemergent_bieneslobro').modal('toggle');
        $.get("sumarilibrobienesactivosgeting/"+grup+"/"+aux+"/"+unidce+"/"+ofiarea+"/"+respon+"/"+orgfinan+"/"+estacti+"/"+estadoregistr+"/"+desdefech+"/"+hastafech+"/"+dsceufv,function(response){
        	if(response.success){
        		$("#iiidcmp_lvdro").val(response.bien.id);
        		$("#codigo_principal_activofijolibrobienes").val(response.bien.codigo_principal_activofijo);
        		$("#codigo_adicionalactivofijo_librobienes").val(response.bien.codigo_adicional_activofijo);
        		$("#fecha_incorporacionactivofijo_librobienes").val(response.bien.fecha_incorporacion_activofijo);
        		$("#indiceufv_activofijolibrobienes").val(response.bien.indiceufv_activofijo);
        		$("#descripcion_activofijolibrobienes").val(response.bien.descripcion_activofijo);
        		$("#grupo_contableidlibrobienes").val(response.bien.grupocontable.nombre_grupocontable);
        		$("#auxiliar_contableidlibrobienes").val(response.bien.auxiliarcontable.nombre_auxiliarcontable);
        		$("#unidadid_librobienes").val(response.bien.unidadcentro.nombre_unidad);
        		$("#oficinaid_librobienes").val(response.ofiare);
        		$("#responsableidlibrobienes").val(response.bien.funcionario.nombre_usuario+" "+response.bien.funcionario.apellido_usuario_paterno+" "+response.bien.funcionario.apellido_usuario_materno);
        		$("#cargoencargado_activoflibrobienes").val(response.bien.funcionario.cargo_usuario);
        		$("#estado_activofijooolibrobienes").val(response.bien.estado_activofijo);
        		$("#observaciones_activofijoouiasdlibrobienes").val(response.bien.observaciones_activofijo);
        		document.getElementById("depreciar_activofijoerertlibrobienes").checked = (response.bien.depreciar_activofijo);
          		document.getElementById("actualizarasdasdactivofijo_librobienes").checked = (response.bien.actualizar_activofijo);
        		$("#idbien_activofijooiulibrobienes").val(response.bien.idbien_activofijo);
        		$("#organismofinanciadoridsddd_librobienes").val(response.bien.organismofinaciador.descripcion_organismo_financiador);
        		$("#numeroconvenioadactivofijo_librobienes").val(response.bien.numeroconvenio_activofijo);
        		$("#factoractualactivofijo_librobienes").val(response.coef);
        		$("#valoractualactivofijo_librobienes").val(format(parseFloat(response.valactu).toFixed(2)));
        		$("#diasvidarecorridoactivofijo_librobienes").val(response.dias);
        		$("#depreciadogestionactivofijo_librobienes").val(format(parseFloat(response.depregestion).toFixed(2)));
        		$("#depreciaacumuladaactivofijo_librobienes").val(format(parseFloat(response.depretotal).toFixed(2)));
        		$("#valornetoactivofijo_librobienes").val(format(parseFloat(response.restantevalor).toFixed(2)));
	        	$("#imagencodeqursadasdactivofijon_librobienes").empty();
				logoot.src = '/qrsactivos/'+(response.bien.imagencodequr_activofijon)+'';
        		$("#costoinicialactivofijo_librobienes").val(format(parseFloat(response.bien.costo_inicial_activofijo).toFixed(2)));
        		$("#depreciaacuinicialactivofijo_librobienes").val(format(parseFloat(response.bien.deprecia_acuinicial_activofijo).toFixed(2)));
        		$("#vidautilasdactivofijo_librobienes").val(response.bien.vidautil_activofijo);
        		$("#coeficientedepreciacionactivofijo_librobienes").val(response.bien.coeficiente_depreciacion_activofijo);
        		$("#estadregistroactivofijo_librobienes").val(response.bien.estado_registro_activofijo);
        		$("#ordenar_flow_mayrecu_lbomaye").val(0);
				$("#bus_bienactivfijoalvdro").empty();
				$(response.activofijs).each(function(key, value){
					$("#bus_bienactivfijoalvdro").append("<option value='"+value.id+"'> "+value.codigo_principal_activofijo+"</option>");
				});
				ComOptsas = document.getElementById('bus_bienactivfijoalvdro').options;
        	}else
        		showErrorMessage('NO SE ENCONTRO BIENES REGISTRADOS DE ACUERDO A LOS PARAMETROS INTRODUCIDOS!');
		}); 
		return false;
	});
	
	$("#aaadelantdi_lvdro").click(function(){
		if(($("#iiidcmp_lvdro").val()!="")&&($("#iiidcmp_lvdro").val()!=null)){
			if(((parseInt($("#ordenar_flow_mayrecu_lbomaye").val()))+1) < (ComOptsas.length)){
				var indice = (parseInt($("#ordenar_flow_mayrecu_lbomaye").val()))+1;
				var busc = ComOptsas[indice].value;
				$("#ordenar_flow_mayrecu_lbomaye").val(indice);
		        $.get("searchbienlisfijimateactivos/"+busc+"/"+dsceufv+"" ,function(response){
		        	if(response.success){
		        		$("#iiidcmp_lvdro").val(response.bien.id);
		        		$("#codigo_principal_activofijolibrobienes").val(response.bien.codigo_principal_activofijo);
		        		$("#codigo_adicionalactivofijo_librobienes").val(response.bien.codigo_adicional_activofijo);
		        		$("#fecha_incorporacionactivofijo_librobienes").val(response.bien.fecha_incorporacion_activofijo);
		        		$("#indiceufv_activofijolibrobienes").val(response.bien.indiceufv_activofijo);
		        		$("#descripcion_activofijolibrobienes").val(response.bien.descripcion_activofijo);
		        		$("#grupo_contableidlibrobienes").val(response.bien.grupocontable.nombre_grupocontable);
		        		$("#auxiliar_contableidlibrobienes").val(response.bien.auxiliarcontable.nombre_auxiliarcontable);
		        		$("#unidadid_librobienes").val(response.bien.unidadcentro.nombre_unidad);
		        		$("#oficinaid_librobienes").val(response.ofiare);
		        		$("#responsableidlibrobienes").val(response.bien.funcionario.nombre_usuario+" "+response.bien.funcionario.apellido_usuario_paterno+" "+response.bien.funcionario.apellido_usuario_materno);
		        		$("#cargoencargado_activoflibrobienes").val(response.bien.funcionario.cargo_usuario);
		        		$("#estado_activofijooolibrobienes").val(response.bien.estado_activofijo);
		        		$("#observaciones_activofijoouiasdlibrobienes").val(response.bien.observaciones_activofijo);
		        		document.getElementById("depreciar_activofijoerertlibrobienes").checked = (response.bien.depreciar_activofijo);
		          		document.getElementById("actualizarasdasdactivofijo_librobienes").checked = (response.bien.actualizar_activofijo);
		        		$("#idbien_activofijooiulibrobienes").val(response.bien.idbien_activofijo);
		        		$("#organismofinanciadoridsddd_librobienes").val(response.bien.organismofinaciador.descripcion_organismo_financiador);
		        		$("#numeroconvenioadactivofijo_librobienes").val(response.bien.numeroconvenio_activofijo);
		        		$("#factoractualactivofijo_librobienes").val(response.coef);
		        		$("#valoractualactivofijo_librobienes").val(format(parseFloat(response.valactu).toFixed(2)));
		        		$("#diasvidarecorridoactivofijo_librobienes").val(response.dias);
		        		$("#depreciadogestionactivofijo_librobienes").val(format(parseFloat(response.depregestion).toFixed(2)));
		        		$("#depreciaacumuladaactivofijo_librobienes").val(format(parseFloat(response.depretotal).toFixed(2)));
		        		$("#valornetoactivofijo_librobienes").val(format(parseFloat(response.restantevalor).toFixed(2)));
			        	$("#imagencodeqursadasdactivofijon_librobienes").empty();
						logoot.src = '/qrsactivos/'+(response.bien.imagencodequr_activofijon)+'';
		        		$("#costoinicialactivofijo_librobienes").val(format(parseFloat(response.bien.costo_inicial_activofijo).toFixed(2)));
		        		$("#depreciaacuinicialactivofijo_librobienes").val(format(parseFloat(response.bien.deprecia_acuinicial_activofijo).toFixed(2)));
		        		$("#vidautilasdactivofijo_librobienes").val(response.bien.vidautil_activofijo);
		        		$("#coeficientedepreciacionactivofijo_librobienes").val(response.bien.coeficiente_depreciacion_activofijo);
		        		$("#estadregistroactivofijo_librobienes").val(response.bien.estado_registro_activofijo);
		        	}else
		        		showErrorMessage('LIMITE SUPERIOR DE BIENES FILTRADOS');
				}); 
				return false;
			}else
		     	showErrorMessage('LIMITE SUPERIOR DE BIENES FILTRADOS');
		    return false;
		}
		return false;
	});

	$("#aaatrasdi_lvdro").click(function(){
		if(($("#iiidcmp_lvdro").val()!="")&&($("#iiidcmp_lvdro").val()!=null)){
			if(((parseInt($("#ordenar_flow_mayrecu_lbomaye").val()))-1) >= 0 ){
				var indice = (parseInt($("#ordenar_flow_mayrecu_lbomaye").val()))-1;
				var busc = ComOptsas[indice].value;
				$("#ordenar_flow_mayrecu_lbomaye").val(indice);
		        $.get("searchbienlisfijimateactivos/"+busc+"/"+dsceufv+"" ,function(response){
		        	if(response.success){
		        		$("#iiidcmp_lvdro").val(response.bien.id);
		        		$("#codigo_principal_activofijolibrobienes").val(response.bien.codigo_principal_activofijo);
		        		$("#codigo_adicionalactivofijo_librobienes").val(response.bien.codigo_adicional_activofijo);
		        		$("#fecha_incorporacionactivofijo_librobienes").val(response.bien.fecha_incorporacion_activofijo);
		        		$("#indiceufv_activofijolibrobienes").val(response.bien.indiceufv_activofijo);
		        		$("#descripcion_activofijolibrobienes").val(response.bien.descripcion_activofijo);
		        		$("#grupo_contableidlibrobienes").val(response.bien.grupocontable.nombre_grupocontable);
		        		$("#auxiliar_contableidlibrobienes").val(response.bien.auxiliarcontable.nombre_auxiliarcontable);
		        		$("#unidadid_librobienes").val(response.bien.unidadcentro.nombre_unidad);
		        		$("#oficinaid_librobienes").val(response.ofiare);
		        		$("#responsableidlibrobienes").val(response.bien.funcionario.nombre_usuario+" "+response.bien.funcionario.apellido_usuario_paterno+" "+response.bien.funcionario.apellido_usuario_materno);
		        		$("#cargoencargado_activoflibrobienes").val(response.bien.funcionario.cargo_usuario);
		        		$("#estado_activofijooolibrobienes").val(response.bien.estado_activofijo);
		        		$("#observaciones_activofijoouiasdlibrobienes").val(response.bien.observaciones_activofijo);
		        		document.getElementById("depreciar_activofijoerertlibrobienes").checked = (response.bien.depreciar_activofijo);
		          		document.getElementById("actualizarasdasdactivofijo_librobienes").checked = (response.bien.actualizar_activofijo);
		        		$("#idbien_activofijooiulibrobienes").val(response.bien.idbien_activofijo);
		        		$("#organismofinanciadoridsddd_librobienes").val(response.bien.organismofinaciador.descripcion_organismo_financiador);
		        		$("#numeroconvenioadactivofijo_librobienes").val(response.bien.numeroconvenio_activofijo);
		        		$("#factoractualactivofijo_librobienes").val(response.coef);
		        		$("#valoractualactivofijo_librobienes").val(format(parseFloat(response.valactu).toFixed(2)));
		        		$("#diasvidarecorridoactivofijo_librobienes").val(response.dias);
		        		$("#depreciadogestionactivofijo_librobienes").val(format(parseFloat(response.depregestion).toFixed(2)));
		        		$("#depreciaacumuladaactivofijo_librobienes").val(format(parseFloat(response.depretotal).toFixed(2)));
		        		$("#valornetoactivofijo_librobienes").val(format(parseFloat(response.restantevalor).toFixed(2)));
			        	$("#imagencodeqursadasdactivofijon_librobienes").empty();
						logoot.src = '/qrsactivos/'+(response.bien.imagencodequr_activofijon)+'';
		        		$("#costoinicialactivofijo_librobienes").val(format(parseFloat(response.bien.costo_inicial_activofijo).toFixed(2)));
		        		$("#depreciaacuinicialactivofijo_librobienes").val(format(parseFloat(response.bien.deprecia_acuinicial_activofijo).toFixed(2)));
		        		$("#vidautilasdactivofijo_librobienes").val(response.bien.vidautil_activofijo);
		        		$("#coeficientedepreciacionactivofijo_librobienes").val(response.bien.coeficiente_depreciacion_activofijo);
		        		$("#estadregistroactivofijo_librobienes").val(response.bien.estado_registro_activofijo);
		        	}else
		        		showErrorMessage('LIMITE INFERIOR DE BIENES FILTRADOS');
				}); 
				return false;
			}else
		        showErrorMessage('LIMITE INFERIOR DE BIENES FILTRADOS');
		}
		return false;
	});

	$("#preeevdi_lvdro").click(function(){
		if(($("#iiidcmp_lvdro").val()!="")&&($("#iiidcmp_lvdro").val()!=null)){
			if((parseInt($("#ordenar_flow_mayrecu_lbomaye").val())) > 0){
				var busc = ComOptsas[0].value;
				$("#ordenar_flow_mayrecu_lbomaye").val(0);
		        $.get("searchbienlisfijimateactivos/"+busc+"/"+dsceufv+"" ,function(response){
		        	if(response.success){
		        		$("#iiidcmp_lvdro").val(response.bien.id);
		        		$("#codigo_principal_activofijolibrobienes").val(response.bien.codigo_principal_activofijo);
		        		$("#codigo_adicionalactivofijo_librobienes").val(response.bien.codigo_adicional_activofijo);
		        		$("#fecha_incorporacionactivofijo_librobienes").val(response.bien.fecha_incorporacion_activofijo);
		        		$("#indiceufv_activofijolibrobienes").val(response.bien.indiceufv_activofijo);
		        		$("#descripcion_activofijolibrobienes").val(response.bien.descripcion_activofijo);
		        		$("#grupo_contableidlibrobienes").val(response.bien.grupocontable.nombre_grupocontable);
		        		$("#auxiliar_contableidlibrobienes").val(response.bien.auxiliarcontable.nombre_auxiliarcontable);
		        		$("#unidadid_librobienes").val(response.bien.unidadcentro.nombre_unidad);
		        		$("#oficinaid_librobienes").val(response.ofiare);
		        		$("#responsableidlibrobienes").val(response.bien.funcionario.nombre_usuario+" "+response.bien.funcionario.apellido_usuario_paterno+" "+response.bien.funcionario.apellido_usuario_materno);
		        		$("#cargoencargado_activoflibrobienes").val(response.bien.funcionario.cargo_usuario);
		        		$("#estado_activofijooolibrobienes").val(response.bien.estado_activofijo);
		        		$("#observaciones_activofijoouiasdlibrobienes").val(response.bien.observaciones_activofijo);
		        		document.getElementById("depreciar_activofijoerertlibrobienes").checked = (response.bien.depreciar_activofijo);
		          		document.getElementById("actualizarasdasdactivofijo_librobienes").checked = (response.bien.actualizar_activofijo);
		        		$("#idbien_activofijooiulibrobienes").val(response.bien.idbien_activofijo);
		        		$("#organismofinanciadoridsddd_librobienes").val(response.bien.organismofinaciador.descripcion_organismo_financiador);
		        		$("#numeroconvenioadactivofijo_librobienes").val(response.bien.numeroconvenio_activofijo);
		        		$("#factoractualactivofijo_librobienes").val(response.coef);
		        		$("#valoractualactivofijo_librobienes").val(format(parseFloat(response.valactu).toFixed(2)));
		        		$("#diasvidarecorridoactivofijo_librobienes").val(response.dias);
		        		$("#depreciadogestionactivofijo_librobienes").val(format(parseFloat(response.depregestion).toFixed(2)));
		        		$("#depreciaacumuladaactivofijo_librobienes").val(format(parseFloat(response.depretotal).toFixed(2)));
		        		$("#valornetoactivofijo_librobienes").val(format(parseFloat(response.restantevalor).toFixed(2)));
			        	$("#imagencodeqursadasdactivofijon_librobienes").empty();
						logoot.src = '/qrsactivos/'+(response.bien.imagencodequr_activofijon)+'';
		        		$("#costoinicialactivofijo_librobienes").val(format(parseFloat(response.bien.costo_inicial_activofijo).toFixed(2)));
		        		$("#depreciaacuinicialactivofijo_librobienes").val(format(parseFloat(response.bien.deprecia_acuinicial_activofijo).toFixed(2)));
		        		$("#vidautilasdactivofijo_librobienes").val(response.bien.vidautil_activofijo);
		        		$("#coeficientedepreciacionactivofijo_librobienes").val(response.bien.coeficiente_depreciacion_activofijo);
		        		$("#estadregistroactivofijo_librobienes").val(response.bien.estado_registro_activofijo);
		        	}else
		        		showErrorMessage('LIMITE INFERIOR DE BIENES FILTRADOS');
				}); 
				return false;
			}else
		        showErrorMessage('LIMITE INFERIOR DE BIENES FILTRADOS');
		}
		return false;
	});

	$("#neextdi_lvdro").click(function(){
		if(($("#iiidcmp_lvdro").val()!="")&&($("#iiidcmp_lvdro").val()!=null)){
			if((parseInt($("#ordenar_flow_mayrecu_lbomaye").val())) < ((ComOptsas.length)-1)){
	        	var indice = (ComOptsas.length)-1;
				var busc = ComOptsas[indice].value;
				$("#ordenar_flow_mayrecu_lbomaye").val(indice);
		        $.get("searchbienlisfijimateactivos/"+busc+"/"+dsceufv+"" ,function(response){
		        	if(response.success){
		        		$("#iiidcmp_lvdro").val(response.bien.id);
		        		$("#codigo_principal_activofijolibrobienes").val(response.bien.codigo_principal_activofijo);
		        		$("#codigo_adicionalactivofijo_librobienes").val(response.bien.codigo_adicional_activofijo);
		        		$("#fecha_incorporacionactivofijo_librobienes").val(response.bien.fecha_incorporacion_activofijo);
		        		$("#indiceufv_activofijolibrobienes").val(response.bien.indiceufv_activofijo);
		        		$("#descripcion_activofijolibrobienes").val(response.bien.descripcion_activofijo);
		        		$("#grupo_contableidlibrobienes").val(response.bien.grupocontable.nombre_grupocontable);
		        		$("#auxiliar_contableidlibrobienes").val(response.bien.auxiliarcontable.nombre_auxiliarcontable);
		        		$("#unidadid_librobienes").val(response.bien.unidadcentro.nombre_unidad);
		        		$("#oficinaid_librobienes").val(response.ofiare);
		        		$("#responsableidlibrobienes").val(response.bien.funcionario.nombre_usuario+" "+response.bien.funcionario.apellido_usuario_paterno+" "+response.bien.funcionario.apellido_usuario_materno);
		        		$("#cargoencargado_activoflibrobienes").val(response.bien.funcionario.cargo_usuario);
		        		$("#estado_activofijooolibrobienes").val(response.bien.estado_activofijo);
		        		$("#observaciones_activofijoouiasdlibrobienes").val(response.bien.observaciones_activofijo);
		        		document.getElementById("depreciar_activofijoerertlibrobienes").checked = (response.bien.depreciar_activofijo);
		          		document.getElementById("actualizarasdasdactivofijo_librobienes").checked = (response.bien.actualizar_activofijo);
		        		$("#idbien_activofijooiulibrobienes").val(response.bien.idbien_activofijo);
		        		$("#organismofinanciadoridsddd_librobienes").val(response.bien.organismofinaciador.descripcion_organismo_financiador);
		        		$("#numeroconvenioadactivofijo_librobienes").val(response.bien.numeroconvenio_activofijo);
		        		$("#factoractualactivofijo_librobienes").val(response.coef);
		        		$("#valoractualactivofijo_librobienes").val(format(parseFloat(response.valactu).toFixed(2)));
		        		$("#diasvidarecorridoactivofijo_librobienes").val(response.dias);
		        		$("#depreciadogestionactivofijo_librobienes").val(format(parseFloat(response.depregestion).toFixed(2)));
		        		$("#depreciaacumuladaactivofijo_librobienes").val(format(parseFloat(response.depretotal).toFixed(2)));
		        		$("#valornetoactivofijo_librobienes").val(format(parseFloat(response.restantevalor).toFixed(2)));
			        	$("#imagencodeqursadasdactivofijon_librobienes").empty();
						logoot.src = '/qrsactivos/'+(response.bien.imagencodequr_activofijon)+'';
		        		$("#costoinicialactivofijo_librobienes").val(format(parseFloat(response.bien.costo_inicial_activofijo).toFixed(2)));
		        		$("#depreciaacuinicialactivofijo_librobienes").val(format(parseFloat(response.bien.deprecia_acuinicial_activofijo).toFixed(2)));
		        		$("#vidautilasdactivofijo_librobienes").val(response.bien.vidautil_activofijo);
		        		$("#coeficientedepreciacionactivofijo_librobienes").val(response.bien.coeficiente_depreciacion_activofijo);
		        		$("#estadregistroactivofijo_librobienes").val(response.bien.estado_registro_activofijo);
		        	}else
		        		SHOWERRORMESSAGE('LIMITE SUPERIOR DE BIENES FILTRADOS');
				}); 
				return false;
			}else
		        SHOWERRORMESSAGE('LIMITE SUPERIOR DE BIENES FILTRADOS');
		}
		return false;
	});

	$("#searcha_lvdrobieneacaasdactivosfimater").click(function(){
		if((($("#bus_bienactivfijoalvdro").val())!="") && (($("#bus_bienactivfijoalvdro").val())!="placeholder") && (($("#bus_bienactivfijoalvdro").val())!=($("#iiidcmp_lvdro").val())) && ($("#bus_bienactivfijoalvdro").val())!=null){
			var busc = $("#bus_bienactivfijoalvdro").val();
			$("#ordenar_flow_mayrecu_lbomaye").val(ComOptsas.selectedIndex);
	        $.get("searchbienlisfijimateactivos/"+busc+"/"+dsceufv+"" ,function(response){
	        	if(response.success){
	        		$("#iiidcmp_lvdro").val(response.bien.id);
	        		$("#codigo_principal_activofijolibrobienes").val(response.bien.codigo_principal_activofijo);
	        		$("#codigo_adicionalactivofijo_librobienes").val(response.bien.codigo_adicional_activofijo);
	        		$("#fecha_incorporacionactivofijo_librobienes").val(response.bien.fecha_incorporacion_activofijo);
	        		$("#indiceufv_activofijolibrobienes").val(response.bien.indiceufv_activofijo);
	        		$("#descripcion_activofijolibrobienes").val(response.bien.descripcion_activofijo);
	        		$("#grupo_contableidlibrobienes").val(response.bien.grupocontable.nombre_grupocontable);
	        		$("#auxiliar_contableidlibrobienes").val(response.bien.auxiliarcontable.nombre_auxiliarcontable);
	        		$("#unidadid_librobienes").val(response.bien.unidadcentro.nombre_unidad);
	        		$("#oficinaid_librobienes").val(response.ofiare);
	        		$("#responsableidlibrobienes").val(response.bien.funcionario.nombre_usuario+" "+response.bien.funcionario.apellido_usuario_paterno+" "+response.bien.funcionario.apellido_usuario_materno);
	        		$("#cargoencargado_activoflibrobienes").val(response.bien.funcionario.cargo_usuario);
	        		$("#estado_activofijooolibrobienes").val(response.bien.estado_activofijo);
	        		$("#observaciones_activofijoouiasdlibrobienes").val(response.bien.observaciones_activofijo);
	        		document.getElementById("depreciar_activofijoerertlibrobienes").checked = (response.bien.depreciar_activofijo);
	          		document.getElementById("actualizarasdasdactivofijo_librobienes").checked = (response.bien.actualizar_activofijo);
	        		$("#idbien_activofijooiulibrobienes").val(response.bien.idbien_activofijo);
	        		$("#organismofinanciadoridsddd_librobienes").val(response.bien.organismofinaciador.descripcion_organismo_financiador);
	        		$("#numeroconvenioadactivofijo_librobienes").val(response.bien.numeroconvenio_activofijo);
	        		$("#factoractualactivofijo_librobienes").val(response.coef);
	        		$("#valoractualactivofijo_librobienes").val(format(parseFloat(response.valactu).toFixed(2)));
	        		$("#diasvidarecorridoactivofijo_librobienes").val(response.dias);
	        		$("#depreciadogestionactivofijo_librobienes").val(format(parseFloat(response.depregestion).toFixed(2)));
	        		$("#depreciaacumuladaactivofijo_librobienes").val(format(parseFloat(response.depretotal).toFixed(2)));
	        		$("#valornetoactivofijo_librobienes").val(format(parseFloat(response.restantevalor).toFixed(2)));
		        	$("#imagencodeqursadasdactivofijon_librobienes").empty();
					logoot.src = '/qrsactivos/'+(response.bien.imagencodequr_activofijon)+'';
	        		$("#costoinicialactivofijo_librobienes").val(format(parseFloat(response.bien.costo_inicial_activofijo).toFixed(2)));
	        		$("#depreciaacuinicialactivofijo_librobienes").val(format(parseFloat(response.bien.deprecia_acuinicial_activofijo).toFixed(2)));
	        		$("#vidautilasdactivofijo_librobienes").val(response.bien.vidautil_activofijo);
	        		$("#coeficientedepreciacionactivofijo_librobienes").val(response.bien.coeficiente_depreciacion_activofijo);
	        		$("#estadregistroactivofijo_librobienes").val(response.bien.estado_registro_activofijo);
	        	}else
	        		showErrorMessage('NO SE ENCONTRO ACTIVO FIJO');
			});
			return false;
		}
		return false;
	});

	$('#comelilvg_lvdro').click(function(e){
		if(($("#iiidcmp_lvdro").val()!="")&&($("#iiidcmp_lvdro").val()!=null)){
			if($("#estadregistroactivofijo_librobienes").val()!="APROBADO"){
				if(confirm("Advertencia selecciono eliminar el activo fijo actual desea prosequir?")){
					e.preventDefault();
					var id = $("#iiidcmp_lvdro").val();
					var form = $("#delete_comprob");
					var accion = form.attr('action').replace(':ID_COM', id);
					var data =  form.serialize();
					$.post(accion, data, function(response){
						if(response.success)
		                    document.location.href = '/activos/librobienes';
						else
							showErrorMessage('ACTIVO FIJO NO SE PUEDE ELIMINAR ESTA SIENDO UTILISADO POR OTRO REGISTRO!');			
					}).fail(function (){
						showErrorMessage('ACTIVO FIJO NO SE PUEDE ELIMINAR!!!');
					});
				}
			}else
				showErrorMessage('ACTIVO FIJO NO SE PUEDE ELIMINAR EN ESTADO APROBADO!!');
		}
	});

	$("#commodlvg_lvdro").click(function(){
		if(($("#iiidcmp_lvdro").val())!=""){
        	$('#commodlvg_lvdro').attr('href', '/activos/bienesactivos/'+($("#iiidcmp_lvdro").val())+'/edit');
		}
    });

	$("#imprdiarioPDF_LIBDI_duasdasactivobienclonate").click(function(){
		if((($("#iiidcmp_lvdro").val())!="") && ($("#estadregistroactivofijo_librobienes").val()=="APROBADO")){
        	$('#imprdiarioPDF_LIBDI_duasdasactivobienclonate').attr('href', '/activos/librobienes/'+($("#iiidcmp_lvdro").val())+'');
		}
    });

    $("#printactivobienfijoatiationbienmateriallibrobieneas_bookbiena").click(function(){
		if((($("#iiidcmp_lvdro").val())!="") && ($("#estadregistroactivofijo_librobienes").val()=="APROBADO")){
        	$('#printactivobienfijoatiationbienmateriallibrobieneas_bookbiena').attr('href', '/activos/pdfetasinacionactivosbienes/1/'+($("#iiidcmp_lvdro").val())+'');
		}
    });

    $("#printactivobienfijoatiatdevoluciondetalle_bookbienalibrbinsdas").click(function(){
		if((($("#iiidcmp_lvdro").val())!="") && ($("#estadregistroactivofijo_librobienes").val()=="APROBADO")){
        	$('#printactivobienfijoatiatdevoluciondetalle_bookbienalibrbinsdas').attr('href', '/activos/actadedevoluciondebienactivofijopdfget/1/'+($("#iiidcmp_lvdro").val())+'');
		}
    });

    $("#dowloaddescargarcodewrofthe_bookkbienesactivoslibrobisnes").click(function(){
		if((($("#iiidcmp_lvdro").val())!="") && ($("#estadregistroactivofijo_librobienes").val()=="APROBADO")){
			$('#dowloaddescargarcodewrofthe_bookkbienesactivoslibrobisnes').attr('href', ($("#imagencodeqursadasdactivofijon_librobienes").attr('src')));
		}
    });
});
function format(num){
    var n = num.toString(), p = n.indexOf('.');
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
        return p<0 || i<p ? ($0+',') : $0;
    });
}