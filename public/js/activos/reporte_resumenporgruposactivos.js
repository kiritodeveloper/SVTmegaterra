$(function(){
	$('#rangomodalwindowsemergent_represumenactivosporgruporeporte').modal('toggle');
	$('#rangomodalwindowsemergent_represumenactivosporgruporeporte').modal('show');
});
$("#modhabilhojataraja_represumenactivosporgruporeporte").click(function(){
	$('#rangomodalwindowsemergent_represumenactivosporgruporeporte').modal('toggle');
	$('#rangomodalwindowsemergent_represumenactivosporgruporeporte').modal('show');
});
$("#enviarshowrepomodal_represumenactivosporgruporeporte").click(function(){
	$('#rangomodalwindowsemergent_represumenactivosporgruporeporte').modal('toggle');
	if($("#gestionreporte_represumenactivosporgruporeporte").val()!="" && $("#unidadocentro_represumenactivosporgruporeporte").val()!=""){
		var grup = $("#grupocontable_represumenactivosporgruporeporte").val();
		var unid = $("#unidadocentro_represumenactivosporgruporeporte").val();
		var gest = $("#gestionreporte_represumenactivosporgruporeporte").val();
		var fechacoti = $("#fechacotizacionver_represumenactivosporgruporeporte").val();
		var ufvcoti = $("#ufvcotizacionfechactu_represumenactivosporgruporeporte").val();
		if(gest == 'TOTAL')
			$("#idtitlerepresum_represumenactivosporgruporeporte").html("AL "+fechacoti+" ==>> UFV: "+ufvcoti);
		else
			$("#idtitlerepresum_represumenactivosporgruporeporte").html("GESTION: "+gest+" ==>> UFV: "+ufvcoti);
        $('#excelhojatrabajooo_represumenactivosporgruporeporte').attr('href', 'reporteexcelcostosdeactivosporgruposresumidosbienestbls/'+grup+'/'+unid+'/'+gest+'/'+fechacoti+'/'+ufvcoti+'');
        $('#rerpotPDFrepsu_represumenactivosporgruporeporte').attr('href', 'reporteformatopdfresumendeactivoscostosporgruposactualizadosrevaluados/1/'+grup+'/'+unid+'/'+gest+'/'+fechacoti+'/'+ufvcoti+'');
        $.get("viewreportshowindiceresumenactivoforgupsbens/"+grup+"/"+unid+"/"+gest+"/"+fechacoti+'/'+ufvcoti ,function(response){
        	if(response.success != false)
        		$("#sectionremplasarconactivos_represumenactivosporgruporeporte").empty().html(response);
        	else
        		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
		});
		return false; 
    }
    showErrorMessage('Inserte todos los parametros por favor');
	return false;
});