$(function(){
	$('#rangomodalwindowsemergent_revaluotecnicoreporteofbienesactivos').modal('toggle');
	$('#rangomodalwindowsemergent_revaluotecnicoreporteofbienesactivos').modal('show');
});
$("#modhabilhojataraja_revaluotecnicoreporteofbienesactivos").click(function(){
	$('#rangomodalwindowsemergent_revaluotecnicoreporteofbienesactivos').modal('toggle');
	$('#rangomodalwindowsemergent_revaluotecnicoreporteofbienesactivos').modal('show');
});
$("#enviarshowrepomodal_revaluotecnicoreporteofbienesactivos").click(function(){
	$('#rangomodalwindowsemergent_revaluotecnicoreporteofbienesactivos').modal('toggle');
	if($("#gestionreporte_revaluotecnicoreporteofbienesactivos").val()!="" && $("#unidadocentro_revaluotecnicoreporteofbienesactivos").val()!=""){
		var grup = $("#grupocontable_revaluotecnicoreporteofbienesactivos").val();
		var unid = $("#unidadocentro_revaluotecnicoreporteofbienesactivos").val();
		var gest = $("#gestionreporte_revaluotecnicoreporteofbienesactivos").val();
		var fechacoti = $("#fechacotizacionverrerep_revaluotecnicoreporteofbienesactivos").val();
		if(gest == 'TOTAL')
			$("#idrangofechas_revaluotecnicoreporteofbienesactivos").html("AL "+fechacoti);
		else
			$("#idrangofechas_revaluotecnicoreporteofbienesactivos").html("GESTION: "+gest);
        $('#excelhojatrabajooo_revaluotecnicoreporteofbienesactivos').attr('href', 'generarexceldeactivosrevaluados/'+grup+'/'+unid+'/'+gest+'/'+fechacoti+'');
        $('#rerpotPDFrepsu_revaluotecnicoreporteofbienesactivos').attr('href', 'emitirreportepdfdeactivosrevaluadobienesforindx/1/'+grup+'/'+unid+'/'+gest+'/'+fechacoti+'');
        $.get("reportinrevaluadosactivositems/"+grup+"/"+unid+"/"+gest+"/"+fechacoti ,function(response){
        	if(response.success != false)
        		$("#sectionremplasarconactivos_revaluotecnicoreporteofbienesactivos").empty().html(response);
        	else
        		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
		});
		return false; 
    }
    showErrorMessage('Inserte todos los parametros por favor');
	return false;
});