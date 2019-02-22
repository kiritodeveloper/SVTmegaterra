$(function(){
	$('#rangomodalwindowsemergent_kardexvaloradoformaterialesofalmacenessedeges').modal('toggle');
	$('#rangomodalwindowsemergent_kardexvaloradoformaterialesofalmacenessedeges').modal('show');
});
$("#openmodal_kardexvaloradoformaterialesofalmacenessedeges").click(function(){	
	$('#rangomodalwindowsemergent_kardexvaloradoformaterialesofalmacenessedeges').modal('toggle');
	$('#rangomodalwindowsemergent_kardexvaloradoformaterialesofalmacenessedeges').modal('show');
});

$("#fechainitialiseformodalrepalma_kardexvaloradoformaterialesofalmacenessedeges").datepicker({
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

$("#fechafinalicitecentformodalrepcen_kardexvaloradoformaterialesofalmacenessedeges").datepicker({
  changeMonth: true,
  changeYear: true,
  yearRange: '-20:+1'
});

$("#enviardatosformodalgenreptalma_kardexvaloradoformaterialesofalmacenessedeges").click(function(){
	$('#rangomodalwindowsemergent_kardexvaloradoformaterialesofalmacenessedeges').modal('toggle');
	if($("#institucionmodal_kardexvaloradoformaterialesofalmacenessedeges").val()!=null && $("#articuloformodalselecrepal_kardexvaloradoformaterialesofalmacenessedeges").val()!=null){
		var inst = $("#institucionmodal_kardexvaloradoformaterialesofalmacenessedeges").val();
		var almac = $("#almacenmodalselect_kardexvaloradoformaterialesofalmacenessedeges").val();
		var activ = $("#actividadeformodalrep_kardexvaloradoformaterialesofalmacenessedeges").val();
		var financ = $("#financiamientmodalrep_kardexvaloradoformaterialesofalmacenessedeges").val();
		var movalm = $("#tipomovimientomodalgetrep_kardexvaloradoformaterialesofalmacenessedeges").val();
		var artimat = $("#articuloformodalselecrepal_kardexvaloradoformaterialesofalmacenessedeges").val();
		var desdefech = $("#fechainitialiseformodalrepalma_kardexvaloradoformaterialesofalmacenessedeges").val();
		var hastafech = $("#fechafinalicitecentformodalrepcen_kardexvaloradoformaterialesofalmacenessedeges").val();
		$("#idrangofechas_kardexvaloradoformaterialesofalmacenessedeges").html("DESDE EL "+desdefech+" HASTA EL "+hastafech);
    $('#butongenerateexcel_kardexvaloradoformaterialesofalmacenessedeges').attr('href', 'reporteformatoexcelkardexvaloradoofalmacenmaterialeskardexexistenciaxls/'+inst+"/"+almac+"/"+activ+"/"+financ+"/"+movalm+"/"+artimat+"/"+desdefech+"/"+hastafech+"/"+($("#institucionmodal_kardexvaloradoformaterialesofalmacenessedeges option:selected").html())+"/"+($("#almacenmodalselect_kardexvaloradoformaterialesofalmacenessedeges option:selected").html())+"/"+($("#actividadeformodalrep_kardexvaloradoformaterialesofalmacenessedeges option:selected").html())+"/"+($("#financiamientmodalrep_kardexvaloradoformaterialesofalmacenessedeges option:selected").html()));
    $('#butongeneratepdf_kardexvaloradoformaterialesofalmacenessedeges').attr('href', 'reporteformatopdfkardexvaloradoofalmacenmaterialeskardexdeexistenciaspdf/1/'+inst+"/"+almac+"/"+activ+"/"+financ+"/"+movalm+"/"+artimat+"/"+desdefech+"/"+hastafech+"/"+($("#institucionmodal_kardexvaloradoformaterialesofalmacenessedeges option:selected").html())+"/"+($("#almacenmodalselect_kardexvaloradoformaterialesofalmacenessedeges option:selected").html())+"/"+($("#actividadeformodalrep_kardexvaloradoformaterialesofalmacenessedeges option:selected").html())+"/"+($("#financiamientmodalrep_kardexvaloradoformaterialesofalmacenessedeges option:selected").html()));
    $.get("searchforkardexvaloradoexistenciamaterialesget/"+inst+"/"+almac+"/"+activ+"/"+financ+"/"+movalm+"/"+artimat+"/"+desdefech+"/"+hastafech,function(response){
    	if(response.success != false)
    		$("#sectionremplasarconreporteinventario_kardexvaloradoformaterialesofalmacenessedeges").empty().html(response);
    	else
    		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
  	});
  	return false; 
  }
  showErrorMessage('Inserte todos los parametros por favor');
	return false;
});