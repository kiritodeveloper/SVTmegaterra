$(function(){
	$('#rangomodalwindowsemergent_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng').modal('toggle');
	$('#rangomodalwindowsemergent_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng').modal('show');
});
$("#modhabilhojataraja_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").click(function(){	
	$('#rangomodalwindowsemergent_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng').modal('toggle');
	$('#rangomodalwindowsemergent_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng').modal('show');
});

$("#fechadesdelibrobienes_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").datepicker({
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

$("#fechahasta_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: '-20:+1'
});

$("#grupocontableformodalrepal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").change(function(e){
  $("#articuloformodalselecrepal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").empty();
  $("#articuloformodalselecrepal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
  if((($(this).val())!=null) && (($(this).val())!="CONSOLIDADO") && (($(this).val())!="")){
    $.get("buscararticulosporpartidaogrupoalmacenesmodulerepinvtvalord/"+($(this).val()), function(data){
      if(data.success){
        $(data.data).each(function(key, value){
          $("#articuloformodalselecrepal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").append("<option value='"+value.id+"'> "+value.codigo_articulo+" "+value.nombre_articulo+"</option>");
        });
      }
    });
  }
});

$("#enviarlibrobienes_cerrarmodalcalculate_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").click(function(){
	$('#rangomodalwindowsemergent_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng').modal('toggle');
	if($("#institucionmodal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val()!=null && $("#articuloformodalselecrepal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val()!=""){
		var institu = $("#institucionmodal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val();
		var almace = $("#almacenmodalselect_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val();
		var actiprogra = $("#actividadeformodalrep_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val();
		var financ = $("#financiamientmodalrep_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val();
		var responsabl = $("#responsableidlibrobienes_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val();
		var tipmov = $("#tipomovimientoventanaemergente_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val();
		var gruocon = $("#grupocontableformodalrepal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val();
		var articul = $("#articuloformodalselecrepal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val();
		var desdefech = $("#fechadesdelibrobienes_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val();
    var hastafech = $("#fechahasta_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val();
    $("#idtitlebajabienessanpnasdasad_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").html("DEL "+desdefech+" AL "+hastafech);
		$("#titulovistatablereportedetallactivsbsns_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").html(($("#clasetipoofthereportedetallado_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'<br>');
    $('#excelhojatrab_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng').attr('href', ''+($("#clasetipoofthereportedetallado_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val())+'generarexcelreportenotasentradadetalladoalmacenarituxlsgtng/'+institu+"/"+almace+"/"+actiprogra+"/"+financ+"/"+responsabl+"/"+tipmov+"/"+gruocon+"/"+articul+"/"+desdefech+"/"+hastafech+'/'+($("#institucionmodal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#almacenmodalselect_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#actividadeformodalrep_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#financiamientmodalrep_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#responsableidlibrobienes_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#tipomovimientoventanaemergente_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#grupocontableformodalrepal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#articuloformodalselecrepal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html()));
    $('#rerpPDFrep_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng').attr('href', ''+($("#clasetipoofthereportedetallado_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val())+'pdfdetalladonotasingresosmaterialgettextepdfrepordetal/1/'+institu+"/"+almace+"/"+actiprogra+"/"+financ+"/"+responsabl+"/"+tipmov+"/"+gruocon+"/"+articul+"/"+desdefech+"/"+hastafech+'/'+($("#institucionmodal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#almacenmodalselect_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#actividadeformodalrep_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#financiamientmodalrep_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#responsableidlibrobienes_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#tipomovimientoventanaemergente_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#grupocontableformodalrepal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html())+'/'+($("#articuloformodalselecrepal_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng option:selected").html()));
    $.get(($("#clasetipoofthereportedetallado_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").val())+"/"+institu+"/"+almace+"/"+actiprogra+"/"+financ+"/"+responsabl+"/"+tipmov+"/"+gruocon+"/"+articul+"/"+desdefech+"/"+hastafech,function(response){
    	if(response.success != false)
    		$("#sectionremplasarconactivos_reportenotasingresoarticulossuministrosalmacensedegesgetdtlrprtng").empty().html(response);
    	else
    		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
		});
		return false; 
  }
  showErrorMessage('Inserte todos los parametros por favor');
	return false;
});