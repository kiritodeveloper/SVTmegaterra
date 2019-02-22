$(document).ready(function(){
	var previousouseas;
	$('#nuevocostoofrevalorisado_revaluotecnicoacti').autoNumeric('init');
	$('#depreinicialnuevoactivobien_revaluotecnico').autoNumeric('init');

	$("#revaloactivofijo_revaluotecnicobutonsubopemodas").click(function(){
    	if(($("#iiidcmp_lvdro").val()!="")&&($("#iiidcmp_lvdro").val()!=null) && ($("#estadregistroactivofijo_librobienes").val()=="APROBADO")){
    		$("#createrevaluotecnicobien_revaloformbien").trigger("reset");
			$('#create_revaluotecnicoforactivobienesemerfenviewventa').modal('toggle');
			$('#create_revaluotecnicoforactivobienesemerfenviewventa').modal('show');
            $("#diasrecorridoasd_revlatecbienmateactivofijasd").val($("#diasvidarecorridoactivofijo_librobienes").val());
    		$("#factoreadaactualrevaluodepreasactiboenmate_rvalurtecacoasd").val($("#factoractualactivofijo_librobienes").val());
    		$("#vostoactualizadorevaluotecnico_revalrtecnibienmaterial").val($("#valoractualactivofijo_librobienes").val());
			$("#fechaincorporacionbienactivo_revaluotecnico").val($("#fecha_incorporacionactivofijo_librobienes").val());
    		$("#indiceufvfechactualbienacti_revaluotecnico").val($("#indiceufv_activofijolibrobienes").val());
    		$("#codigoprinciaplbien_revaluotecnico").val($("#codigo_principal_activofijolibrobienes").val());
    		$("#costobienactivofijoactual_revaluotecnico").val($("#costoinicialactivofijo_librobienes").val());
    		$("#iidddBIENACTIVO_REVALCRETECBIENIDDDDDII").val($("#iiidcmp_lvdro").val());
    		$("#vidauntilactuabien_revaluotecnico").val($("#vidautilasdactivofijo_librobienes").val());
    		$("#nuevosaniosdevidautilbien_revaluotecnico").val($("#vidautilasdactivofijo_librobienes").val());
    		$("#despreciaciongestionnetoforactivobien_revaluotecnico").val($("#depreciadogestionactivofijo_librobienes").val());
    		$("#depresiacioncautotalacumuladobienactivo_revaluotecnico").val($("#depreciaacumuladaactivofijo_librobienes").val());
    		$("#valornetocuanobalebienactivofijo_revaluotecnico").val($("#valornetoactivofijo_librobienes").val());
    		$("#desripcionbienactivoactual_revaluotecnico").val($("#descripcion_activofijolibrobienes").val());
    		$("#depreciaacumunlainibienactivofijo_revaluotecnico").val($("#depreciaacuinicialactivofijo_librobienes").val());
			$("#fechamodificacionrevaluobienactivo_revaluotecnico").val($("#fechaufvultimorecienteforactualizar_revaluteca").val());
    		$("#ufvrevaluotecnicobienactivo_revaluotecnico").val($("#ufvactualactivofijo_librobienes").val());
		}
		return false;
	});

	$("#fechamodificacionrevaluobienactivo_revaluotecnico").on('focus', function(){
        previousouseas = (this.value);
    }).change(function(){
    	var datevalareadda = (this.value);
	    $.get("getufvtipocambiotocibajabienforchange/"+(datevalareadda),function(response){
	      if(response.success){
	      	var coeficiteerte = 0;
	      	var valactualisadorerte =0;
	      	var depreinireexpretireteadoa = 0;
	      	var differensidias = 0;
	      	var ddedepretotal = 0;
	      	var rerrestantevalor = 0;
	      	var degesdepregestion =0;
	      	if(((document.getElementById("actualizarasdasdactivofijo_librobienes").checked)==true)&&(($("#indiceufv_activofijolibrobienes").val())!=0)&&(($("#indiceufv_activofijolibrobienes").val())!='0')&&(($("#indiceufv_activofijolibrobienes").val())!='')&&(($("#indiceufv_activofijolibrobienes").val())!=' ')&&(($("#indiceufv_activofijolibrobienes").val())!=null)){
                coeficiteerte = (response.data.c_ufv)/(parseFloat($("#indiceufv_activofijolibrobienes").val()));
                valactualisadorerte = parseFloat(coeficiteerte*(parseFloat(($("#costoinicialactivofijo_librobienes").val()).replace(/,/g, '')))).toFixed(2);
                depreinireexpretireteadoa = parseFloat(coeficiteerte*(parseFloat(($("#depreciaacuinicialactivofijo_librobienes").val()).replace(/,/g, '')))).toFixed(2);
            }else{
                coeficiteerte=0;
                valactualisadorerte = parseFloat(($("#costoinicialactivofijo_librobienes").val()).replace(/,/g, ''));
                depreinireexpretireteadoa = parseFloat(($("#depreciaacuinicialactivofijo_librobienes").val()).replace(/,/g, ''));
            }
            if(((document.getElementById("depreciar_activofijoerertlibrobienes").checked)==true)&&(($("#vidautilasdactivofijo_librobienes").val())!=0)&&(($("#vidautilasdactivofijo_librobienes").val())!='0')&&(($("#vidautilasdactivofijo_librobienes").val())!='')&&(($("#vidautilasdactivofijo_librobienes").val())!=' ')&&(($("#vidautilasdactivofijo_librobienes").val())!=null)){
                var totaldoasutilesvida = (parseFloat($("#vidautilasdactivofijo_librobienes").val()))*365;
                var fechaIniciorang = new Date($("#fecha_incorporacionactivofijo_librobienes").val()).getTime();
				var fechaFinrang = new Date(datevalareadda).getTime();
				differensidias = Math.floor(Math.abs((fechaFinrang - fechaIniciorang)/(86400000)));
				differensidias=differensidias+1;
                var tttotaldeprere = (parseFloat(valactualisadorerte))/totaldoasutilesvida;
                ddedepretotal = parseFloat(tttotaldeprere*differensidias).toFixed(2);
                ddedepretotal = parseFloat((parseFloat(ddedepretotal))+(parseFloat(depreinireexpretireteadoa))).toFixed(2);
                rerrestantevalor = parseFloat(valactualisadorerte-ddedepretotal).toFixed(2);
				var copeadorgogegu = (datevalareadda).split("-");
                if((parseFloat(($("#fecha_incorporacionactivofijo_librobienes").val()).substring(0,4))) < (parseFloat(copeadorgogegu[0]))){
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
	        $("#uffparaactualizarrevalutecnico_bienactivoasforrefresh").val($("#ufvactualactivofijo_librobienes").val());
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
				$("#costoinicialactivofijo_librobienes").val(format(parseFloat(response.activofijobiasdasd.costo_inicial_activofijo).toFixed(2)));
		        $("#depreciaacuinicialactivofijo_librobienes").val(format(parseFloat(response.activofijobiasdasd.deprecia_acuinicial_activofijo).toFixed(2)));
		        $("#vidautilasdactivofijo_librobienes").val(response.activofijobiasdasd.vidautil_activofijo);
		        $("#coeficientedepreciacionactivofijo_librobienes").val(response.activofijobiasdasd.coeficiente_depreciacion_activofijo);
    			$("#factoractualactivofijo_librobienes").val(response.coeferer);
		        $("#valoractualactivofijo_librobienes").val(format(parseFloat(response.valactuerer).toFixed(2)));
		        $("#diasvidarecorridoactivofijo_librobienes").val(response.diasererer);
		        $("#fecha_incorporacionactivofijo_librobienes").val(response.activofijobiasdasd.fecha_incorporacion_activofijo);
		        $("#indiceufv_activofijolibrobienes").val(response.activofijobiasdasd.indiceufv_activofijo);
		        $("#depreciadogestionactivofijo_librobienes").val(format(parseFloat(response.depregestionerer).toFixed(2)));
		        $("#depreciaacumuladaactivofijo_librobienes").val(format(parseFloat(response.depretotalerer).toFixed(2)));
		        $("#valornetoactivofijo_librobienes").val(format(parseFloat(response.restantevalorerrer).toFixed(2)));
    			showSuccess("REVALUO TECNICO DE ACTIVO FIJO REALIZADO SATISFACTORIAMENTE");
	      	}else{
				var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
		    	var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
		    	var response = $('<strong>ERROR AL GUARDAR REVALUO TECNICO DE ACTIVO FIJO!!</strong>');
		    	message.append(close);
		    	message.append(response);
		    	message.appendTo($('#titledump_revaluotecnivohwe')).fadeIn(300).delay(2000).fadeOut(800);
			}
	    },
	    error:function(data){
        	var errors = '';
        	for(datos in data.responseJSON){
            	errors += data.responseJSON[datos] + '<br>';
        	}
		  	var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
		    var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
		    message.append(close);
		    message.append(errors);
		    message.appendTo($('#titledump_revaluotecnivohwe')).fadeIn(300).delay(2000).fadeOut(800);
	    }
    });
}