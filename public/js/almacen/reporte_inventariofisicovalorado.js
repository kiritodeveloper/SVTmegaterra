$(function(){
	$('#rangomodalwindowsemergent_inventariovaloradoalmacenforrep').modal('toggle');
	$('#rangomodalwindowsemergent_inventariovaloradoalmacenforrep').modal('show');
});
$("#openmodal_inventariovaloradoalmacen").click(function(){	
	$('#rangomodalwindowsemergent_inventariovaloradoalmacenforrep').modal('toggle');
	$('#rangomodalwindowsemergent_inventariovaloradoalmacenforrep').modal('show');
});

$("#fechainitialiseformodalrepalma_inventariovaloradoalmacenforrep").datepicker({
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

$("#fechafinalicitecentformodalrepcen_inventariovaloradoalmacenforrep").datepicker({
  changeMonth: true,
  changeYear: true,
  yearRange: '-20:+1'
});

$("#grupocontableformodalrepal_inventariovaloradoalmacenforrep").change(function(e){
	$("#articuloformodalselecrepal_inventariovaloradoalmacenforrep").empty();
  $("#articuloformodalselecrepal_inventariovaloradoalmacenforrep").append("<option value='CONSOLIDADO'>CONSOLIDADO</option>");
  if((($(this).val())!=null) && (($(this).val())!="CONSOLIDADO") && (($(this).val())!="")){
  	$.get("buscararticulosporpartidaogrupoalmacenesmodulerepinvtvalord/"+($(this).val()), function(data){
    	if(data.success){
    		$(data.data).each(function(key, value){
      		$("#articuloformodalselecrepal_inventariovaloradoalmacenforrep").append("<option value='"+value.id+"'> "+value.codigo_articulo+" "+value.nombre_articulo+"</option>");
    		});
    	}
  	});
  }
});

$("#enviardatosformodalgenreptalma_inventariovaloradoalmacenforrep").click(function(){
	$('#rangomodalwindowsemergent_inventariovaloradoalmacenforrep').modal('toggle');
	if($("#institucionmodal_inventariovaloradoalmacenforrep").val()!=null && $("#institucionmodal_inventariovaloradoalmacenforrep").val()!=""){
		var inst = $("#institucionmodal_inventariovaloradoalmacenforrep").val();
		var almac = $("#almacenmodalselect_inventariovaloradoalmacenforrep").val();
		var activ = $("#actividadeformodalrep_inventariovaloradoalmacenforrep").val();
		var financ = $("#financiamientmodalrep_inventariovaloradoalmacenforrep").val();
		var grupcon = $("#grupocontableformodalrepal_inventariovaloradoalmacenforrep").val();
		var artimat = $("#articuloformodalselecrepal_inventariovaloradoalmacenforrep").val();
		var desdefech = $("#fechainitialiseformodalrepalma_inventariovaloradoalmacenforrep").val();
		var hastafech = $("#fechafinalicitecentformodalrepcen_inventariovaloradoalmacenforrep").val();
		$("#idrangofechas_inventariovaloradoalmacenforrep").html("DESDE EL "+desdefech+" HASTA EL "+hastafech);
    $('#butongenerateexcel_inventariovaloradoalmacen').attr('href', 'reporteformatoexcelinventariovaloradoofalmacenmaterialesinventarioxls/'+inst+"/"+almac+"/"+activ+"/"+financ+"/"+grupcon+"/"+artimat+"/"+desdefech+"/"+hastafech+"/"+($("#institucionmodal_inventariovaloradoalmacenforrep option:selected").html())+"/"+($("#almacenmodalselect_inventariovaloradoalmacenforrep option:selected").html())+"/"+($("#actividadeformodalrep_inventariovaloradoalmacenforrep option:selected").html())+"/"+($("#financiamientmodalrep_inventariovaloradoalmacenforrep option:selected").html()));
    $('#butongeneratepdf_inventariovaloradoalmacen').attr('href', 'reporteformatopdfinventariovaloradoofalmacenmaterialesinventariopdf/1/'+inst+"/"+almac+"/"+activ+"/"+financ+"/"+grupcon+"/"+artimat+"/"+desdefech+"/"+hastafech+"/"+($("#institucionmodal_inventariovaloradoalmacenforrep option:selected").html())+"/"+($("#almacenmodalselect_inventariovaloradoalmacenforrep option:selected").html())+"/"+($("#actividadeformodalrep_inventariovaloradoalmacenforrep option:selected").html())+"/"+($("#financiamientmodalrep_inventariovaloradoalmacenforrep option:selected").html()));
    $.get("searchgetinventariofisicovaloradoalmacenessedegesmodule/"+inst+"/"+almac+"/"+activ+"/"+financ+"/"+grupcon+"/"+artimat+"/"+desdefech+"/"+hastafech,function(response){
    	if(response.success != false)
    		$("#sectionremplasarconreporteinventario_inventariovaloradoalmacenforrep").empty().html(response);
    	else
    		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
  	});
  	return false; 
  }
  showErrorMessage('Inserte todos los parametros por favor');
	return false;
});