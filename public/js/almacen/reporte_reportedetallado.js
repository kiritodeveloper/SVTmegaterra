$(function(){
	$('#rangomodalwindowsemergent_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial').modal('toggle');
	$('#rangomodalwindowsemergent_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial').modal('show');
});
$("#modhabilhojataraja_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").click(function(){	
	$('#rangomodalwindowsemergent_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial').modal('toggle');
	$('#rangomodalwindowsemergent_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial').modal('show');
});

$("#fechadesdelibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").datepicker({
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

$("#fechahasta_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: '-20:+1'
});

$("#grupocontableformodalrepal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").change(function(e){
  $("#articuloformodalselecrepal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").empty();
  $("#articuloformodalselecrepal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
  if((($(this).val())!=null) && (($(this).val())!="CONSOLIDADO") && (($(this).val())!="")){
    $.get("buscararticulosporpartidaogrupoalmacenesmodulerepinvtvalord/"+($(this).val()), function(data){
      if(data.success){
        $(data.data).each(function(key, value){
          $("#articuloformodalselecrepal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").append("<option value='"+value.id+"'> "+value.codigo_articulo+" "+value.nombre_articulo+"</option>");
        });
      }
    });
  }
});

$("#unidadidlibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").change(function(e){
	$("#responsableidlibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").empty();
  $("#responsableidlibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
  if((($(this).val())!='CONSOLIDADO') && (($(this).val())!="") && (($(this).val())!=null)){
  	$.get("searchareponsableforunidadcentrorepsalnotassaalma/"+($(this).val()), function(data){
      if(data.success){
        $(data.dator).each(function(key, value){
           $("#responsableidlibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
        });
      }
  	});
  }
});

$("#enviarlibrobienes_cerrarmodalcalculate_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").click(function(){
	$('#rangomodalwindowsemergent_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial').modal('toggle');
	if($("#institucionmodal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val()!=null && $("#articuloformodalselecrepal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val()!=""){
		var institu = $("#institucionmodal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val();
		var almace = $("#almacenmodalselect_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val();
		var actiprogra = $("#actividadeformodalrep_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val();
		var financ = $("#financiamientmodalrep_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val();
		var unicentr = $("#unidadidlibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val();
		var responsabl = $("#responsableidlibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val();
		var tipmov = $("#tipomovimientoventanaemergente_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val();
		var gruocon = $("#grupocontableformodalrepal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val();
		var articul = $("#articuloformodalselecrepal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val();
		var desdefech = $("#fechadesdelibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val();
    var hastafech = $("#fechahasta_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val();
    $("#idtitlebajabienessanpnasdasad_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").html("DEL "+desdefech+" AL "+hastafech);
		$("#titulovistatablereportedetallactivsbsns_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").html(($("#clasetipoofthereportedetallado_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'<br>');
    $('#excelhojatrab_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial').attr('href', ''+($("#clasetipoofthereportedetallado_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val())+'generarexcelreportedetallasalidasnotasdeegresoalmacenxlss/'+institu+"/"+almace+"/"+actiprogra+"/"+financ+"/"+unicentr+"/"+responsabl+"/"+tipmov+"/"+gruocon+"/"+articul+"/"+desdefech+"/"+hastafech+'/'+($("#institucionmodal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#almacenmodalselect_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#actividadeformodalrep_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#financiamientmodalrep_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#unidadidlibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#responsableidlibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#tipomovimientoventanaemergente_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#grupocontableformodalrepal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#articuloformodalselecrepal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html()));
    $('#rerpPDFrep_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial').attr('href', ''+($("#clasetipoofthereportedetallado_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val())+'pdfalmacendetallesalidamateriasuminstroreporte/1/'+institu+"/"+almace+"/"+actiprogra+"/"+financ+"/"+unicentr+"/"+responsabl+"/"+tipmov+"/"+gruocon+"/"+articul+"/"+desdefech+"/"+hastafech+'/'+($("#institucionmodal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#almacenmodalselect_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#actividadeformodalrep_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#financiamientmodalrep_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#unidadidlibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#responsableidlibrobienes_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#tipomovimientoventanaemergente_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#grupocontableformodalrepal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html())+'/'+($("#articuloformodalselecrepal_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial option:selected").html()));
    $.get(($("#clasetipoofthereportedetallado_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").val())+"/"+institu+"/"+almace+"/"+actiprogra+"/"+financ+"/"+unicentr+"/"+responsabl+"/"+tipmov+"/"+gruocon+"/"+articul+"/"+desdefech+"/"+hastafech,function(response){
    	if(response.success != false)
    		$("#sectionremplasarconactivos_reportedetalladosalidasnotadeegresosalmacenrepsalidamaterial").empty().html(response);
    	else
    		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
		});
		return false; 
  }
  showErrorMessage('Inserte todos los parametros por favor');
	return false;
});