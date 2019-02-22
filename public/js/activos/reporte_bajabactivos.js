$(function(){
	$('#rangomodal_windowsemergent_reportebienesactivos').modal('toggle');
	$('#rangomodal_windowsemergent_reportebienesactivos').modal('show');
});
$("#modhabilhojataraja_reportebienesactivos").click(function(){
	$('#rangomodal_windowsemergent_reportebienesactivos').modal('toggle');
	$('#rangomodal_windowsemergent_reportebienesactivos').modal('show');
});
$("#enviarshowinvenrepomodal_reportebienesactivos").click(function(){
	$('#rangomodal_windowsemergent_reportebienesactivos').modal('toggle');
	if($("#gestioninventarioreporte_reportebienesactivos").val()!="" && $("#unidadocentro_reportebienesactivos").val()!=""){
		var grup = $("#grupocontable_reportebienesactivos").val();
		var unid = $("#unidadocentro_reportebienesactivos").val();
		var fechacoti = $("#fechaastaqueverarbajbienas").val();
		var gest = $("#gestioninventarioreporte_reportebienesactivos").val();
		if(gest == 'TOTAL')
			$("#idtitlebajabienes_activosreportesanpinasd").html("AL "+fechacoti);
		else
			$("#idtitlebajabienes_activosreportesanpinasd").html("GESTION: "+gest);
        $('#excelhojatrabajooo_reportebienesactivos').attr('href', 'excelactivosdadosdebajareporteviewgener/'+grup+'/'+unid+'/'+gest+"/"+fechacoti+'');
        $('#rerpotPDFrepsu_reportebienesactivos').attr('href', 'generatepdfreportofbajaofbienesshowrersa/1/'+grup+'/'+unid+'/'+gest+"/"+fechacoti+'');
        $.get("tablapreviaactivosdadosdebaja/"+grup+"/"+unid+"/"+gest+"/"+fechacoti ,function(response){
        	if(response.success != false)
        		$("#sectionremplasarconactivos_reportebienesactivos").empty().html(response);
        	else
        		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
		});
		return false; 
    }
    showErrorMessage('Inserte todos los parametros por favor');
	return false;
});