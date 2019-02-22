$(function(){
	$('#rangomodal_windowsemergent_invetariobienesactivos').modal('toggle');
	$('#rangomodal_windowsemergent_invetariobienesactivos').modal('show');
});
$("#modhabilhojataraja_invetariobienesactivos").click(function(){
	$('#rangomodal_windowsemergent_invetariobienesactivos').modal('toggle');
	$('#rangomodal_windowsemergent_invetariobienesactivos').modal('show');
});
$("#enviarshowinvenrepomodal_invetariobienesactivos").click(function(){
	$('#rangomodal_windowsemergent_invetariobienesactivos').modal('toggle');
	if($("#gestioninventarioreporte_invetariobienesactivos").val()!="" && $("#unidadocentro_invetariobienesactivos").val()!=""){
		var grup = $("#grupocontable_invetariobienesactivos").val();
		var unid = $("#unidadocentro_invetariobienesactivos").val();
		var gest = $("#gestioninventarioreporte_invetariobienesactivos").val();
		var fechacoti = $("#fechacotizacionver").val();
		var ufvcoti = $("#ufvcotizacionfechactu").val();
		if(gest == 'TOTAL')
			$("#idrangofechas_invetariobienesactivos").html("AL "+fechacoti+" ==>> UFV: "+ufvcoti);
		else
			$("#idrangofechas_invetariobienesactivos").html("GESTION: "+gest+" ==>> UFV: "+ufvcoti);
        $('#excelhojatrabajooo_invetariobienesactivos').attr('href', 'dowloadviewexcelinventarioactivosgenerate/'+grup+'/'+unid+'/'+gest+'/'+fechacoti+'/'+ufvcoti+'');
        $('#rerpotPDFrepsu_invetariobienesactivos').attr('href', 'generarpdfreporteinventariobienes/1/'+grup+'/'+unid+'/'+gest+'/'+fechacoti+'/'+ufvcoti+'');
        $.get("getbienesactivostable/"+grup+"/"+unid+"/"+gest+"/"+fechacoti+"/"+ufvcoti ,function(response){
        	if(response.success != false)
        		$("#sectionremplasarconactivos_deslutanbienesinvent").empty().html(response);
        	else
        		showErrorMessage('No se encontraron registros para emitir el reporte solicitado');
		});
		return false; 
    }
    showErrorMessage('Inserte todos los parametros por favor');
	return false;
});