$(function(){
	$('#rangomodalwindowsemergent_kardefisicomaterialessuministrosdesdegesrepoalmadsd').modal('toggle');
	$('#rangomodalwindowsemergent_kardefisicomaterialessuministrosdesdegesrepoalmadsd').modal('show');
});
$("#openmodal_kardefisicomaterialessuministrosdesdegesrepoalmadsd").click(function(){	
	$('#rangomodalwindowsemergent_kardefisicomaterialessuministrosdesdegesrepoalmadsd').modal('toggle');
	$('#rangomodalwindowsemergent_kardefisicomaterialessuministrosdesdegesrepoalmadsd').modal('show');
});

$("#fechainitialiseformodalrepalma_kardefisicomaterialessuministrosdesdegesrepoalmadsd").datepicker({
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

$("#fechafinalicitecentformodalrepcen_kardefisicomaterialessuministrosdesdegesrepoalmadsd").datepicker({
  changeMonth: true,
  changeYear: true,
  yearRange: '-20:+1'
});

$("#enviardatosformodalgenreptalma_kardefisicomaterialessuministrosdesdegesrepoalmadsd").click(function(){
	$('#rangomodalwindowsemergent_kardefisicomaterialessuministrosdesdegesrepoalmadsd').modal('toggle');
	if($("#institucionmodal_kardefisicomaterialessuministrosdesdegesrepoalmadsd").val()!=null && $("#articuloformodalselecrepal_kardefisicomaterialessuministrosdesdegesrepoalmadsd").val()!=null){
		var inst = $("#institucionmodal_kardefisicomaterialessuministrosdesdegesrepoalmadsd").val();
		var almac = $("#almacenmodalselect_kardefisicomaterialessuministrosdesdegesrepoalmadsd").val();
		var activ = $("#actividadeformodalrep_kardefisicomaterialessuministrosdesdegesrepoalmadsd").val();
		var financ = $("#financiamientmodalrep_kardefisicomaterialessuministrosdesdegesrepoalmadsd").val();
		var movalm = $("#tipomovimientomodalgetrep_kardefisicomaterialessuministrosdesdegesrepoalmadsd").val();
		var artimat = $("#articuloformodalselecrepal_kardefisicomaterialessuministrosdesdegesrepoalmadsd").val();
		var desdefech = $("#fechainitialiseformodalrepalma_kardefisicomaterialessuministrosdesdegesrepoalmadsd").val();
		var hastafech = $("#fechafinalicitecentformodalrepcen_kardefisicomaterialessuministrosdesdegesrepoalmadsd").val();
		$("#idrangofechas_kardefisicomaterialessuministrosdesdegesrepoalmadsd").html("DESDE EL "+desdefech+" HASTA EL "+hastafech);
    $('#butongenerateexcel_kardefisicomaterialessuministrosdesdegesrepoalmadsd').attr('href', 'reporteformatoexcelkardexfisicofalmacenmaterialeskardexexistenciaxlsfisicosimple/'+inst+"/"+almac+"/"+activ+"/"+financ+"/"+movalm+"/"+artimat+"/"+desdefech+"/"+hastafech+"/"+($("#institucionmodal_kardefisicomaterialessuministrosdesdegesrepoalmadsd option:selected").html())+"/"+($("#almacenmodalselect_kardefisicomaterialessuministrosdesdegesrepoalmadsd option:selected").html())+"/"+($("#actividadeformodalrep_kardefisicomaterialessuministrosdesdegesrepoalmadsd option:selected").html())+"/"+($("#financiamientmodalrep_kardefisicomaterialessuministrosdesdegesrepoalmadsd option:selected").html()));
    $('#butongeneratepdf_kardefisicomaterialessuministrosdesdegesrepoalmadsd').attr('href', 'reporteformatopdfkardexfisicoalmacenmaterialeskardexdeexistenciaspdffisicosimple/1/'+inst+"/"+almac+"/"+activ+"/"+financ+"/"+movalm+"/"+artimat+"/"+desdefech+"/"+hastafech+"/"+($("#institucionmodal_kardefisicomaterialessuministrosdesdegesrepoalmadsd option:selected").html())+"/"+($("#almacenmodalselect_kardefisicomaterialessuministrosdesdegesrepoalmadsd option:selected").html())+"/"+($("#actividadeformodalrep_kardefisicomaterialessuministrosdesdegesrepoalmadsd option:selected").html())+"/"+($("#financiamientmodalrep_kardefisicomaterialessuministrosdesdegesrepoalmadsd option:selected").html()));
    $.get("searchforkardexfisicoexistenciamaterialesgetfisicosimple/"+inst+"/"+almac+"/"+activ+"/"+financ+"/"+movalm+"/"+artimat+"/"+desdefech+"/"+hastafech,function(response){
    	if(response.success != false)
    		$("#sectionremplasarconreporteinventario_kardefisicomaterialessuministrosdesdegesrepoalmadsd").empty().html(response);
    	else
    		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
  	});
  	return false; 
  }
  showErrorMessage('Inserte todos los parametros por favor');
	return false;
});