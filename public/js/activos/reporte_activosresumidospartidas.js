$(function(){
	$('#rangomodalwindowsemergent_reporteactivosresumidosporpartidas').modal('toggle');
	$('#rangomodalwindowsemergent_reporteactivosresumidosporpartidas').modal('show');
});
$("#modhabilhojataraja_reporteactivosresumidosporpartidas").click(function(){
	$('#rangomodalwindowsemergent_reporteactivosresumidosporpartidas').modal('toggle');
	$('#rangomodalwindowsemergent_reporteactivosresumidosporpartidas').modal('show');
});
$("#enviarshowrepomodal_reporteactivosresumidosporpartidas").click(function(){
	$('#rangomodalwindowsemergent_reporteactivosresumidosporpartidas').modal('toggle');
	if($("#gestionreporte_reporteactivosresumidosporpartidas").val()!="" && $("#unidadocentro_reporteactivosresumidosporpartidas").val()!=""){
		var grup = $("#grupocontable_reporteactivosresumidosporpartidas").val();
		var unid = $("#unidadocentro_reporteactivosresumidosporpartidas").val();
		var gest = $("#gestionreporte_reporteactivosresumidosporpartidas").val();
		var fechacoti = $("#fechacotizacionverrerep_reporteactivosresumidosporpartidas").val();
		if(gest == 'TOTAL')
			$("#idrangofechas_reporteactivosresumidosporpartidas").html("AL "+fechacoti);
		else
			$("#idrangofechas_reporteactivosresumidosporpartidas").html("GESTION: "+gest);
        $('#excelhojatrabajooo_reporteactivosresumidosporpartidas').attr('href', 'reprtexceloftheresumentheactivsforcantandconstoslgrups/'+grup+'/'+unid+'/'+gest+'/'+fechacoti+'');
        $('#rerpotPDFrepsu_reporteactivosresumidosporpartidas').attr('href', 'pdfresumenpartidasbienesactivosforgurposshowviewtexplan/1/'+grup+'/'+unid+'/'+gest+'/'+fechacoti+'');
        $.get("tablaresumenofpartidsgurpactivs/"+grup+"/"+unid+"/"+gest+"/"+fechacoti ,function(response){
        	if(response.success != false)
        		$("#sectionremplasarconactivos_reporteactivosresumidosporpartidas").empty().html(response);
        	else
        		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
		});
		return false; 
    }
    showErrorMessage('Inserte todos los parametros por favor');
	return false;
});