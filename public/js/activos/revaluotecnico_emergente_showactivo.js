$(document).ready(function(){
	var previousouseas;
	$('#nuevocostoofrevalorisado_revaluotecnicoacti').autoNumeric('init');
	$('#depreinicialnuevoactivobien_revaluotecnico').autoNumeric('init');

	$("#revaloactivofijo_revshowbieactadsasaluotecnicobutonsubopemodas").click(function(){
    	if($("#idbienactivofijodepretion_showewrformulario").val()!=""){
    		$("#createrevaluotecnicobien_revaloformbien").trigger("reset");
			$('#create_revaluotecnicoforactivobienesemerfenviewventa').modal('toggle');
			$('#create_revaluotecnicoforactivobienesemerfenviewventa').modal('show');
            $("#diasrecorridoasd_revlatecbienmateactivofijasd").val($("#dias_vidarecorrido_activofijo").val());
    		$("#factoreadaactualrevaluodepreasactiboenmate_rvalurtecacoasd").val($("#factor_actual_activofijo").val());
    		$("#vostoactualizadorevaluotecnico_revalrtecnibienmaterial").val($("#valor_actual_activofijo").val());
			$("#fechaincorporacionbienactivo_revaluotecnico").val($("#fecha_incorporacion_activofijo").val());
    		$("#indiceufvfechactualbienacti_revaluotecnico").val($("#indiceufv_activofijo").val());
    		$("#codigoprinciaplbien_revaluotecnico").val($("#codigo_principal_activofijo").val());
    		$("#costobienactivofijoactual_revaluotecnico").val($("#costo_inicial_activofijo").val());
    		$("#iidddBIENACTIVO_REVALCRETECBIENIDDDDDII").val($("#idbienactivofijodepretion_showewrformulario").val());
    		$("#vidauntilactuabien_revaluotecnico").val($("#vidautil_activofijo").val());
    		$("#nuevosaniosdevidautilbien_revaluotecnico").val($("#vidautil_activofijo").val());
    		$("#despreciaciongestionnetoforactivobien_revaluotecnico").val($("#depreciado_gestion_activofijo").val());
    		$("#depresiacioncautotalacumuladobienactivo_revaluotecnico").val($("#deprecia_acumulada_activofijo").val());
    		$("#valornetocuanobalebienactivofijo_revaluotecnico").val($("#valor_neto_activofijo").val());
    		$("#desripcionbienactivoactual_revaluotecnico").val($("#descripcion_activofijo").val());
    		$("#depreciaacumunlainibienactivofijo_revaluotecnico").val($("#deprecia_acuinicial_activofijo").val());
			$("#fechamodificacionrevaluobienactivo_revaluotecnico").val($("#fechaufvultimorecienteforactualizar_revaluteca").val());
    		$("#ufvrevaluotecnicobienactivo_revaluotecnico").val($("#ufvactual_activofijo").val());
		}
		return false;
	});

	$("#fechamodificacionrevaluobienactivo_revaluotecnico").on('focus', function(){
        previousouseas = (this.value);
    }).change(function(){
    	var datevalareadda = (this.value);
	    $.get("../getufvtipocambiotocibajabienforchange/"+(datevalareadda),function(response){
	      if(response.success){
	      	var coeficiteerte = 0;
	      	var valactualisadorerte =0;
	      	var depreinireexpretireteadoa = 0;
	      	var differensidias = 0;
	      	var ddedepretotal = 0;
	      	var rerrestantevalor = 0;
	      	var degesdepregestion =0;
	      	if(((document.getElementById("actualizar_activofijo").checked)==true)&&(($("#indiceufv_activofijo").val())!=0)&&(($("#indiceufv_activofijo").val())!='0')&&(($("#indiceufv_activofijo").val())!='')&&(($("#indiceufv_activofijo").val())!=' ')&&(($("#indiceufv_activofijo").val())!=null)){
                coeficiteerte = (response.data.c_ufv)/(parseFloat($("#indiceufv_activofijo").val()));
                valactualisadorerte = parseFloat(coeficiteerte*(parseFloat(($("#costo_inicial_activofijo").val()).replace(/,/g, '')))).toFixed(2);
                depreinireexpretireteadoa = parseFloat(coeficiteerte*(parseFloat(($("#deprecia_acuinicial_activofijo").val()).replace(/,/g, '')))).toFixed(2);
            }else{
                coeficiteerte=0;
                valactualisadorerte = parseFloat(($("#costo_inicial_activofijo").val()).replace(/,/g, ''));
                depreinireexpretireteadoa = parseFloat(($("#deprecia_acuinicial_activofijo").val()).replace(/,/g, ''));
            }
            if(((document.getElementById("depreciar_activofijo").checked)==true)&&(($("#vidautil_activofijo").val())!=0)&&(($("#vidautil_activofijo").val())!='0')&&(($("#vidautil_activofijo").val())!='')&&(($("#vidautil_activofijo").val())!=' ')&&(($("#vidautil_activofijo").val())!=null)){
                var fechaIniciorang = new Date($("#fecha_incorporacion_activofijo").val()).getTime();
				var fechaFinrang = new Date(datevalareadda).getTime();
				differensidias = Math.round(Math.abs(((fechaFinrang - fechaIniciorang)/(86400000))));
				differensidias=differensidias+1;
                var tttotaldeprere = (parseFloat(valactualisadorerte))/((parseFloat($("#vidautil_activofijo").val()))*365);
                ddedepretotal = parseFloat(tttotaldeprere*differensidias).toFixed(2);
                ddedepretotal = parseFloat((parseFloat(ddedepretotal))+(parseFloat(depreinireexpretireteadoa))).toFixed(2);
                rerrestantevalor = parseFloat(valactualisadorerte-ddedepretotal).toFixed(2);
				var copeadorgogegu = (datevalareadda).split("-");
                if((parseFloat(($("#fecha_incorporacion_activofijo").val()).substring(0,4))) < (parseFloat(copeadorgogegu[0]))){
                	var fechaIniciorangererqw = new Date(copeadorgogegu[0]+"-01-01").getTime();
					var fechaFinrangdfopae= new Date(datevalareadda).getTime();
					var diereadifferensidias = Math.round(Math.abs((fechaFinrangdfopae - fechaIniciorangererqw)/(86400000)));
                    degesdepregestion = parseFloat(tttotaldeprere*(diereadifferensidias+1)).toFixed(2);
                }else
                    degesdepregestion = parseFloat((parseFloat(ddedepretotal))-(parseFloat(depreinireexpretireteadoa))).toFixed(2);
            }else{
                differensidias = 0;
                ddedepretotal = parseFloat(depreinireexpretireteadoa);
                degesdepregestion = 0;
                rerrestantevalor = parseFloat((parseFloat(valactualisadorerte))-(parseFloat(ddedepretotal))).toFixed(2);
            }
            if(rerrestantevalor<1 && valactualisadorerte>=1){
                rerrestantevalor=1;
                ddedepretotal =parseFloat((parseFloat(valactualisadorerte))-1).toFixed(2);
            }
            $("#diasrecorridoasd_revlatecbienmateactivofijasd").val(differensidias);
            $("#factoreadaactualrevaluodepreasactiboenmate_rvalurtecacoasd").val(coeficiteerte);
            $("#vostoactualizadorevaluotecnico_revalrtecnibienmaterial").val(valactualisadorerte);
            $("#despreciaciongestionnetoforactivobien_revaluotecnico").val(degesdepregestion);
            $("#depresiacioncautotalacumuladobienactivo_revaluotecnico").val(ddedepretotal);
            $("#valornetocuanobalebienactivofijo_revaluotecnico").val(rerrestantevalor);
	        $("#ufvrevaluotecnicobienactivo_revaluotecnico").val(response.data.c_ufv);
	      }else{
	        $("#fechamodificacionrevaluobienactivo_revaluotecnico").val(previousouseas);
	        showErrorMessage("REGISTRE UFV DE LA FECHA QUE INTENTA SELECCIONAR");
	      }
	    });
	});

	$("#createrevaluotecnicobien_revaloformbien").keypress(function(e) {
        if (e.which == 13)
            return false;
    });

    $("#createrevaluotecnicobien_revaloformbien").submit(function(e){
		e.preventDefault();
		if(($("#iidddBIENACTIVO_REVALCRETECBIENIDDDDDII").val()!=null)&&($("#iidddBIENACTIVO_REVALCRETECBIENIDDDDDII").val()!='')){
	        $("#uffparaactualizarrevalutecnico_bienactivoasforrefresh").val($("#ufvactual_activofijo").val());
			formulrumploadrevaluotecnico_bienactivofijonew();
		}
		return false;
	});
});

function formulrumploadrevaluotecnico_bienactivofijonew(){
	var dato = new FormData($("#createrevaluotecnicobien_revaloformbien")[0]);
	var url = ($('#createrevaluotecnicobien_revaloformbien')).attr('action');
	var token = $("#token").val();
	$.ajax({
		headers: {'X-CSRF-TOKEN': token},
	    url:url,
	    data:dato,
	    dataType:'json',
	    type:'POST',
	    cache: false,
	    processData: false,
	    contentType: false,
	    success:function(response){
	      	if(response.success){
				$("#create_revaluotecnicoforactivobienesemerfenviewventa").modal('toggle');
				$("#costo_inicial_activofijo").val(format(parseFloat(response.activofijobiasdasd.costo_inicial_activofijo).toFixed(2)));
		        $("#deprecia_acuinicial_activofijo").val(format(parseFloat(response.activofijobiasdasd.deprecia_acuinicial_activofijo).toFixed(2)));
		        $("#vidautil_activofijo").val(response.activofijobiasdasd.vidautil_activofijo);
		        $("#coeficiente_depreciacion_activofijo").val(response.activofijobiasdasd.coeficiente_depreciacion_activofijo);
    			$("#factor_actual_activofijo").val(response.coeferer);
		        $("#valor_actual_activofijo").val(format(parseFloat(response.valactuerer).toFixed(2)));
		        $("#dias_vidarecorrido_activofijo").val(response.diasererer);
		        $("#fecha_incorporacion_activofijo").val(response.activofijobiasdasd.fecha_incorporacion_activofijo);
		        $("#indiceufv_activofijo").val(response.activofijobiasdasd.indiceufv_activofijo);
		        $("#depreciado_gestion_activofijo").val(format(parseFloat(response.depregestionerer).toFixed(2)));
		        $("#deprecia_acumulada_activofijo").val(format(parseFloat(response.depretotalerer).toFixed(2)));
		        $("#valor_neto_activofijo").val(format(parseFloat(response.restantevalorerrer).toFixed(2)));
    			showSuccess("REVALUO TECNICO DE ACTIVO FIJO REALIZADO SATISFACTORIAMENTE");
	      	}else
	      		showErrorMessage("ERROR AL GUARDAR REVALUO TECNICO DE ACTIVO FIJO!");
	    },
	    error:function(data){
        	var errors = '';
        	for(datos in data.responseJSON){
            	errors += data.responseJSON[datos] + '<br>';
        	}
        	showErrorMessage(errors);
	    }
    });
}