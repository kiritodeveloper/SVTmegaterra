$(document).ready(function(){
	var previous;
	
	$("#bajabienbutonsubitshowbienacmiasd_actiibrovienesa").click(function(){	 
    	if($("#idbienactivofijodepretion_showewrformulario").val()!=""){
			$('#dardebajamodaldabienwindowsemergent_formasdcrar').modal('toggle');
			$('#dardebajamodaldabienwindowsemergent_formasdcrar').modal('show');
			$("#fechincorporacicratebienactiv_bajabien").val($("#fecha_incorporacion_activofijo").val());
    		$("#ufvindicebienactivofijatematerialice_bienbaja").val($("#indiceufv_activofijo").val());
    		$("#codignprinipalonebienactivofijo_bienbaja").val($("#codigo_principal_activofijo").val());
    		$("#costovalueinicioactualbienacti_bajabienmaterial").val($("#costo_inicial_activofijo").val());
    		$("#idddbienbajasdaforcreatinformauxiliaricert_iid").val($("#idbienactivofijodepretion_showewrformulario").val());
    		$("#descripcionbien_activobajabien").val($("#descripcion_activofijo").val());
    		$("#vidautilbienctivos_bajabienesactifijomater").val($("#vidautil_activofijo").val());
    		$("#diasrecorridobienmaterialactivo_bajabienmateactvfjas").val($("#dias_vidarecorrido_activofijo").val());
    		$("#porentajedepreciaciotionvidaporcientovida_bajabienactivo").val($("#coeficiente_depreciacion_activofijo").val());
    		$("#depreciginitialinicestionactualbienactivo_bajabienmae").val($("#deprecia_acuinicial_activofijo").val());
    		$("#factoractualizacionufvanteriorbienactibo_bajabienesdelteingdropad").val($("#factor_actual_activofijo").val());
    		$("#costoactualizadovaloradoactivobien_bajabienmaterial").val($("#valor_actual_activofijo").val());
    		$("#depreciagesationanualactual_balorbajabienmateractivfjsa").val($("#depreciado_gestion_activofijo").val());
    		$("#depreciationadaad_acumuladaanualviarecorrido_bajabienad").val($("#deprecia_acumulada_activofijo").val());
    		$("#valorereatantenetobienbidabajaactivofijo_materialbienactivofasd").val($("#valor_neto_activofijo").val());			
			$("#fechabajabienactivo_bajaactivofijoactualfech").val($("#fechaufvultimorecienteforactualizar_revaluteca").val());
    		$("#ufvbajaformbalorisarbien_bajabienactiad").val($("#ufvactual_activofijo").val());
		}
		return false;
	});

    $("#fechabajabienactivo_bajaactivofijoactualfech").on('focus', function () {
        previous = (this.value);
    }).change(function() {
		var dateval = (this.value);
	    $.get("../getufvtipocambiotocibajabienforchange/"+(dateval),function(response){
	      if(response.success){
	      	var coeficite = 0;
	      	var valactualisador =0;
	      	var depreinireexpretireteadoa = 0;
	      	var differensidias = 0;
	      	var ddedepretotal = 0;
	      	var rerrestantevalor = 0;
	      	var degesdepregestion =0;
	      	if(((document.getElementById("actualizar_activofijo").checked)==true)&&(($("#indiceufv_activofijo").val())!=0)&&(($("#indiceufv_activofijo").val())!='0')&&(($("#indiceufv_activofijo").val())!='')&&(($("#indiceufv_activofijo").val())!=' ')&&(($("#indiceufv_activofijo").val())!=null)){
                coeficite = (response.data.c_ufv)/(parseFloat($("#indiceufv_activofijo").val()));
                valactualisador = parseFloat(coeficite*(parseFloat(($("#costo_inicial_activofijo").val()).replace(/,/g, '')))).toFixed(2);
                depreinireexpretireteadoa = parseFloat(coeficite*(parseFloat(($("#deprecia_acuinicial_activofijo").val()).replace(/,/g, '')))).toFixed(2);
            }else{
                coeficite=0;
                valactualisador = parseFloat(($("#costo_inicial_activofijo").val()).replace(/,/g, ''));
                depreinireexpretireteadoa = parseFloat(($("#deprecia_acuinicial_activofijo").val()).replace(/,/g, ''));
            }
            if(((document.getElementById("depreciar_activofijo").checked)==true)&&(($("#vidautil_activofijo").val())!=0)&&(($("#vidautil_activofijo").val())!='0')&&(($("#vidautil_activofijo").val())!='')&&(($("#vidautil_activofijo").val())!=' ')&&(($("#vidautil_activofijo").val())!=null)){
                var fechaIniciorang = new Date($("#fecha_incorporacion_activofijo").val()).getTime();
				var fechaFinrang = new Date(dateval).getTime();
				differensidias = Math.round(Math.abs(((fechaFinrang - fechaIniciorang)/(86400000))));
				differensidias=differensidias+1;
                var tttotaldeprere = (parseFloat(valactualisador))/((parseFloat($("#vidautil_activofijo").val()))*365);
                ddedepretotal = parseFloat(tttotaldeprere*differensidias).toFixed(2);
                ddedepretotal = parseFloat((parseFloat(ddedepretotal))+(parseFloat(depreinireexpretireteadoa))).toFixed(2);
                rerrestantevalor = parseFloat(valactualisador-ddedepretotal).toFixed(2);
				var copeadorgogegu = (dateval).split("-");
                if((parseFloat(($("#fecha_incorporacion_activofijo").val()).substring(0,4))) < (parseFloat(copeadorgogegu[0]))){
                	var fechaIniciorangererqw = new Date(copeadorgogegu[0]+"-01-01").getTime();
					var fechaFinrangdfopae= new Date(dateval).getTime();
					var diereadifferensidias = Math.round(Math.abs((fechaFinrangdfopae - fechaIniciorangererqw)/(86400000)));
                    degesdepregestion = parseFloat(tttotaldeprere*(diereadifferensidias+1)).toFixed(2);
                }else
                    degesdepregestion = parseFloat((parseFloat(ddedepretotal))-(parseFloat(depreinireexpretireteadoa))).toFixed(2);
            }else{
                differensidias = 0;
                ddedepretotal = parseFloat(depreinireexpretireteadoa);
                degesdepregestion = 0;
                rerrestantevalor = parseFloat((parseFloat(valactualisador))-(parseFloat(ddedepretotal))).toFixed(2);
            }
            if(rerrestantevalor<1 && valactualisador>=1){
                rerrestantevalor=1;
                ddedepretotal =parseFloat((parseFloat(valactualisador))-1).toFixed(2);
            }
            $("#diasrecorridobienmaterialactivo_bajabienmateactvfjas").val(differensidias);
            $("#factoractualizacionufvanteriorbienactibo_bajabienesdelteingdropad").val(coeficite);
            $("#costoactualizadovaloradoactivobien_bajabienmaterial").val(valactualisador);
            $("#depreciagesationanualactual_balorbajabienmateractivfjsa").val(degesdepregestion);
            $("#depreciationadaad_acumuladaanualviarecorrido_bajabienad").val(ddedepretotal);
            $("#valorereatantenetobienbidabajaactivofijo_materialbienactivofasd").val(rerrestantevalor);
	        $("#ufvbajaformbalorisarbien_bajabienactiad").val(response.data.c_ufv);
	      }else{
	        showErrorMessage("REGISTRE UFV DE LA FECHA QUE INTENTA FILTRAR => BAJA DE ACTIVO FIJO");
	        $("#fechabajabienactivo_bajaactivofijoactualfech").val(previous);
	      }
	    });
    });

	$("#formulariondcreatbajabien_activomodaldebajabienaddlead").keypress(function(e) {
        if (e.which == 13)
            return false;
    });

    $("#formulariondcreatbajabien_activomodaldebajabienaddlead").submit(function(e){
		e.preventDefault();
		if(($("#idddbienbajasdaforcreatinformauxiliaricert_iid").val()!=null)&&($("#idddbienbajasdaforcreatinformauxiliaricert_iid").val()!='')){
			if(confirm("Seguro que desea dar de baja el bien actual?"))
				umploadform_bajaactivbobienesfuncioasd();
		}
		return false;
	});
});

function umploadform_bajaactivbobienesfuncioasd(){
	var dato = new FormData($("#formulariondcreatbajabien_activomodaldebajabienaddlead")[0]);
	var url = ($('#formulariondcreatbajabien_activomodaldebajabienaddlead')).attr('action');
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
	      	if(response.success)
                document.location.href = '/activos/bienesactivos';
	      	else{
				var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
		    	var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
		    	var response = $('<strong>ERROR AL DAR DE BAJA ACTIVO FIJO!!</strong>');
		    	message.append(close);
		    	message.append(response);
		    	message.appendTo($('#titlecabeceraencabezado_bajbien')).fadeIn(300).delay(2000).fadeOut(800);
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
		    message.appendTo($('#titlecabeceraencabezado_bajbien')).fadeIn(300).delay(2000).fadeOut(800);
	    }
    });
}