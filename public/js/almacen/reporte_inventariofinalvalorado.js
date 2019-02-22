$(function(){
	$('#rangomodalwindowsemergent_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo').modal('toggle');
	$('#rangomodalwindowsemergent_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo').modal('show');
});
$("#openmodal_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").click(function(){	
	$('#rangomodalwindowsemergent_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo').modal('toggle');
	$('#rangomodalwindowsemergent_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo').modal('show');
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

$("#fechafinalicitecentformodalrepcen_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").datepicker({
  changeMonth: true,
  changeYear: true,
  yearRange: '-20:+1'
});

$("#grupocontableformodalrepal_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").change(function(e){
	$("#articuloformodalselecrepal_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").empty();
  $("#articuloformodalselecrepal_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
  if((($(this).val())!=null) && (($(this).val())!="CONSOLIDADO") && (($(this).val())!="")){
  	$.get("buscararticulosporpartidaogrupoalmacenesmodulerepinvtvalord/"+($(this).val()), function(data){
    	if(data.success){
    		$(data.data).each(function(key, value){
      		$("#articuloformodalselecrepal_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").append("<option value='"+value.id+"'> "+value.codigo_articulo+" "+value.nombre_articulo+"</option>");
    		});
    	}
  	});
  }
});

$("#enviardatosformodalgenreptalma_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").click(function(){
	$('#rangomodalwindowsemergent_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo').modal('toggle');
	if($("#almacenmodalselect_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").val()!=null && $("#articuloformodalselecrepal_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").val()!=""){
		var almac = $("#almacenmodalselect_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").val();
		var grupcon = $("#grupocontableformodalrepal_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").val();
		var artimat = $("#articuloformodalselecrepal_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").val();
		var hastafech = $("#fechafinalicitecentformodalrepcen_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").val();
		$("#idrangofechas_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").html(" HASTA "+hastafech);
    $('#butongenerateexcel_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo').attr('href', 'reporteformatoexcelinventariofinalvalirosafisicogenetslxlsxgetalmmodasdainfnfv/'+almac+"/"+grupcon+"/"+artimat+"/"+hastafech+"/"+($("#almacenmodalselect_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo option:selected").html())+"/"+($("#grupocontableformodalrepal_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo option:selected").html()));
    $('#butongeneratepdf_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo').attr('href', 'reportepdfinvetnariofinalvaloradopdfgeneratealnacensedgsemitgetingtxtplansprnt/1/'+almac+"/"+grupcon+"/"+artimat+"/"+hastafech+"/"+($("#almacenmodalselect_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo option:selected").html())+"/"+($("#grupocontableformodalrepal_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo option:selected").html()));
    $.get("viewlistreportingfishishvaloradofinalcostoinvetnariolistincan/"+almac+"/"+grupcon+"/"+artimat+"/"+hastafech,function(response){
    	if(response.success != false)
    		$("#sectionremplasarconreporteinventario_inventariofinalvaloradofisicoarticulosdetalladosinvenultimo").empty().html(response);
    	else
    		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
  	});
  	return false; 
  }
  showErrorMessage('Inserte todos los parametros por favor');
	return false;
});