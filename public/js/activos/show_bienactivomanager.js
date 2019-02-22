$(document).ready(function(){
	$("#fechamodificacionrevaluobienactivo_revaluotecnico").datepicker({
	    changeMonth: true,
	    changeYear: true,
	    yearRange: '-0:+0'
	});
	jQuery(function($){
	    $.datepicker.regional['es'] = {
		    closeText: 'Cerrar',
	      	prevText: '&#x3c;Ant',
	     	nextText: 'Sig&#x3e;',
	      	currentText: 'Hoy',
	      	monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
	      	monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
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

	$("#fechabajabienactivo_bajaactivofijoactualfech").datepicker({
	    changeMonth: true,
	    changeYear: true,
	    yearRange: '-0:+0'
	});

	$("#depreciar_activofijo").click(function(){
	    return false;
	});

	$("#actualizar_activofijo").click(function(){
	    return false;
	});

	$('#comelilvg_lvdroshowactiasdbiena').click(function(e){
		if(($("#idbienactivofijodepretion_showewrformulario").val()!="")&&($("#idbienactivofijodepretion_showewrformulario").val()!=null)){
			if($("#estado_registro_activofijo").val()!="APROBADO"){
				if(confirm("Advertencia esta punto de eliminar el activo fijo actual desea prosequir?")){
					e.preventDefault();
					var id = $("#idbienactivofijodepretion_showewrformulario").val();
					var form = $("#delete_comprobformbienactivasdaasd");
					var accion = form.attr('action').replace(':ID_COM', id);
					var data =  form.serialize();
					$.post(accion, data, function(response){
						if(response.success)
		                    document.location.href = '/activos/bienesactivos';
						else
							showErrorMessage('ACTIVO FIJO NO SE PUEDE ELIMINAR ESTA SIENDO UTILISADO POR OTRO REGISTRO!!!');			
					}).fail(function (){
						showErrorMessage('ACTIVO FIJO NO SE PUEDE ELIMINAR!!!');
					});
				}
			}else
				showErrorMessage('ACTIVO FIJO NO SE PUEDE ELIMINAR EN ESTADO APROBADO!!');
		}
	});

	$("#commodlvg_lvdroshowfibienact").click(function(){
		if(($("#idbienactivofijodepretion_showewrformulario").val())!=""){
        	$('#commodlvg_lvdroshowfibienact').attr('href', '/activos/bienesactivos/'+($("#idbienactivofijodepretion_showewrformulario").val())+'/edit');
		}
    });

	$("#imprdiarioPDF_duplicateactivoshowbienasvienamaterLIBDI_duasdasactivobienclonate").click(function(){
		if((($("#idbienactivofijodepretion_showewrformulario").val())!="") && ($("#estado_registro_activofijo").val()=="APROBADO")){
        	$('#imprdiarioPDF_duplicateactivoshowbienasvienamaterLIBDI_duasdasactivobienclonate').attr('href', '/activos/librobienes/'+($("#idbienactivofijodepretion_showewrformulario").val())+'');
		}
    });

    $("#printactivobienfijoatiationbienmateriallibrobieneas_bookbiena").click(function(){
		if((($("#idbienactivofijodepretion_showewrformulario").val())!="") && ($("#estado_registro_activofijo").val()=="APROBADO")){
        	$('#printactivobienfijoatiationbienmateriallibrobieneas_bookbiena').attr('href', '/activos/pdfetasinacionactivosbienes/1/'+($("#idbienactivofijodepretion_showewrformulario").val())+'');
		}
    });
});

function format(num){
    var n = num.toString(), p = n.indexOf('.');
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
        return p<0 || i<p ? ($0+',') : $0;
    });
}