$(function(){
	$('#rangomodalwindowsemergent_activosreportedetallados').modal('toggle');
	$('#rangomodalwindowsemergent_activosreportedetallados').modal('show');
});
$("#modhabilhojataraja_activosreportedetallados").click(function(){	
	$('#rangomodalwindowsemergent_activosreportedetallados').modal('toggle');
	$('#rangomodalwindowsemergent_activosreportedetallados').modal('show');
});

$("#fechadesdelibrobienes_activosreportedetallados").datepicker({
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

$("#fechahasta_activosreportedetallados").datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: '-20:+1'
});

$("#grupocontable_activosreportedetallados").change(function(e){
	$("#auxiliarcontable_activosreportedetallados").empty();
    $("#auxiliarcontable_activosreportedetallados").append("<option value='TODOS'>TODOS</option>");
    if((($(this).val())!=null) && (($(this).val())!="TODOS") && (($(this).val())!="")){
      	$.get("auxiliaresforlibrobienes/"+($(this).val()), function(data){
        	if(data.success){
          		$(data.data).each(function(key, value){
            		$("#auxiliarcontable_activosreportedetallados").append("<option value='"+value.id+"'> "+value.nombre_auxiliarcontable+"</option>");
          		});
        	}
      	});
    }
});

$("#unidadidlibrobienes_activosreportedetallados").change(function(e){
	$("#oficinaidlibrobiene_activosreportedetallados").empty();
	$("#oficinaidlibrobiene_activosreportedetallados").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
	$("#responsableidlibrobienes_activosreportedetallados").empty();
    $("#responsableidlibrobienes_activosreportedetallados").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
    if((($(this).val())!='CONSOLIDADO') && (($(this).val())!="") && (($(this).val())!=null)){
      	$.get("areasanduserlibrobienesuncentr/"+($(this).val()), function(data){
	        if(data.success){
		        $(data.data).each(function(key, value){
		           $("#oficinaidlibrobiene_activosreportedetallados").append("<option value='"+value.id+"'> "+value.nombre_unidad+"</option>");
		        });
		        $(data.dator).each(function(key, value){
		           $("#responsableidlibrobienes_activosreportedetallados").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
		        });
	        }else{
	            $(data.dator).each(function(key, value){
	              $("#responsableidlibrobienes_activosreportedetallados").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
	            });
	        }
      	});
    }
});

$("#oficinaidlibrobiene_activosreportedetallados").change(function(e){
	$("#responsableidlibrobienes_activosreportedetallados").empty();
    $("#responsableidlibrobienes_activosreportedetallados").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
    if((($(this).val())!='CONSOLIDADO') && (($(this).val())!="") && (($(this).val())!=null)){
      $.get("getoneencargadoforoficinarelibrobiene/"+($(this).val()), function(data){
        if (data.success){
          	$(data.data).each(function(key, value){
            	$("#responsableidlibrobienes_activosreportedetallados").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
          	});
        }
      });
    }else{
      	if(($("#unidadidlibrobienes_activosreportedetallados").val()!='CONSOLIDADO') && ($("#unidadidlibrobienes_activosreportedetallados").val()!=null) && ($("#unidadidlibrobienes_activosreportedetallados").val()!="")){
        	$.get("getempleadoslibrobienesunicent/"+($("#unidadidlibrobienes_activosreportedetallados").val()), function(data){
          		if(data.success){
		            $(data.data).each(function(key, value){
		              	$("#responsableidlibrobienes_activosreportedetallados").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
		            });
          		}
        	});
      	}
    }
});

$("#filtraractivosfijosforreportedetallado_okokdetall").click(function(){
	showSuccess("FILTRANDO ACTIVOS DE ACUERDO A LOS PARAMETROS INSERTADOS!");
	$("#bienactivofijolibrobienes_activosreportedetallados").empty();
    $("#bienactivofijolibrobienes_activosreportedetallados").append("<option value='TODOS'>TODOS</option>");
	$.get("showactivosfordetalladorepornviewalemergentewindows/"+($("#grupocontable_activosreportedetallados").val())+"/"+($("#auxiliarcontable_activosreportedetallados").val())+"/"+($("#unidadidlibrobienes_activosreportedetallados").val())+"/"+($("#oficinaidlibrobiene_activosreportedetallados").val())+"/"+($("#responsableidlibrobienes_activosreportedetallados").val())+"/"+($("#organismofinanciadoridlibrobienes_activosreportedetallados").val()), function(data){
        if(data.success){
          	$(data.data).each(function(key, value){
            	$("#bienactivofijolibrobienes_activosreportedetallados").append("<option value='"+value.id+"'> "+value.codigo_principal_activofijo+"</option>");
          	});
        }
    });
});

$("#enviarlibrobienes_cerrarmodalcalculate_activosreportedetallados").click(function(){
	$('#rangomodalwindowsemergent_activosreportedetallados').modal('toggle');
	if($("#clasetipoofthereportedetallado_activosreportedetallados").val()!="" && $("#grupocontable_activosreportedetallados").val()!=""){
		var grup = $("#grupocontable_activosreportedetallados").val();
		var aux = $("#auxiliarcontable_activosreportedetallados").val();
		var unidce = $("#unidadidlibrobienes_activosreportedetallados").val();
		var ofiarea = $("#oficinaidlibrobiene_activosreportedetallados").val();
		var respon = $("#responsableidlibrobienes_activosreportedetallados").val();
		var orgfinan = $("#organismofinanciadoridlibrobienes_activosreportedetallados").val();
		var bienacti = $("#bienactivofijolibrobienes_activosreportedetallados").val();
		var desdefech = $("#fechadesdelibrobienes_activosreportedetallados").val();
		var hastafech = $("#fechahasta_activosreportedetallados").val();
		$("#idtitlebajabienessanpnasdasad_activosreportedetallados").html("DEL "+desdefech+" AL "+hastafech);
		$("#titulovistatablereportedetallactivsbsns_activosreportedetallados").html(($("#clasetipoofthereportedetallado_activosreportedetallados option:selected").html())+'<br>');
        $('#excelhojatrab_activosreportedetallados').attr('href', ''+($("#clasetipoofthereportedetallado_activosreportedetallados").val())+'generarexceldetalladobienescostosrepotinxlssxxsstbls/'+grup+"/"+aux+"/"+unidce+"/"+ofiarea+"/"+respon+"/"+orgfinan+"/"+bienacti+"/"+desdefech+"/"+hastafech+'/'+($("#unidadidlibrobienes_activosreportedetallados option:selected").html()));
        $('#rerpPDFrep_activosreportedetallados').attr('href', ''+($("#clasetipoofthereportedetallado_activosreportedetallados").val())+'topdfgeradetalreportingviewtxtplaning/1/'+grup+"/"+aux+"/"+unidce+"/"+ofiarea+"/"+respon+"/"+orgfinan+"/"+bienacti+"/"+desdefech+"/"+hastafech+'/'+($("#unidadidlibrobienes_activosreportedetallados option:selected").html()));
        $.get(($("#clasetipoofthereportedetallado_activosreportedetallados").val())+"/"+grup+"/"+aux+"/"+unidce+"/"+ofiarea+"/"+respon+"/"+orgfinan+"/"+bienacti+"/"+desdefech+"/"+hastafech,function(response){
        	if(response.success != false)
        		$("#sectionremplasarconactivos_activosreportedetallados").empty().html(response);
        	else
        		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
		});
		return false; 
    }
    showErrorMessage('Inserte todos los parametros por favor');
	return false;
});