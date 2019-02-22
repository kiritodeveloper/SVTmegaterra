$(document).ready(function(){
	var previous;

	$("#bajabienbutonsubitmiasd_actiibrovienesa").click(function(){
    	if(($("#iiidcmp_lvdro").val()!="")&&($("#iiidcmp_lvdro").val()!=null) && ($("#estadregistroactivofijo_librobienes").val()=="APROBADO")){
			$('#dardebajamodaldabienwindowsemergent_formasdcrar').modal('toggle');
			$('#dardebajamodaldabienwindowsemergent_formasdcrar').modal('show');
			$("#fechincorporacicratebienactiv_bajabien").val($("#fecha_incorporacionactivofijo_librobienes").val());
    		$("#ufvindicebienactivofijatematerialice_bienbaja").val($("#indiceufv_activofijolibrobienes").val());
    		$("#codignprinipalonebienactivofijo_bienbaja").val($("#codigo_principal_activofijolibrobienes").val());
    		$("#costovalueinicioactualbienacti_bajabienmaterial").val($("#costoinicialactivofijo_librobienes").val());
    		$("#idddbienbajasdaforcreatinformauxiliaricert_iid").val($("#iiidcmp_lvdro").val());
    		$("#descripcionbien_activobajabien").val($("#descripcion_activofijolibrobienes").val());
    		$("#vidautilbienctivos_bajabienesactifijomater").val($("#vidautilasdactivofijo_librobienes").val());
    		$("#diasrecorridobienmaterialactivo_bajabienmateactvfjas").val($("#diasvidarecorridoactivofijo_librobienes").val());
    		$("#porentajedepreciaciotionvidaporcientovida_bajabienactivo").val($("#coeficientedepreciacionactivofijo_librobienes").val());
    		$("#depreciginitialinicestionactualbienactivo_bajabienmae").val($("#depreciaacuinicialactivofijo_librobienes").val());
    		$("#factoractualizacionufvanteriorbienactibo_bajabienesdelteingdropad").val($("#factoractualactivofijo_librobienes").val());
    		$("#costoactualizadovaloradoactivobien_bajabienmaterial").val($("#valoractualactivofijo_librobienes").val());
    		$("#depreciagesationanualactual_balorbajabienmateractivfjsa").val($("#depreciadogestionactivofijo_librobienes").val());
    		$("#depreciationadaad_acumuladaanualviarecorrido_bajabienad").val($("#depreciaacumuladaactivofijo_librobienes").val());
    		$("#valorereatantenetobienbidabajaactivofijo_materialbienactivofasd").val($("#valornetoactivofijo_librobienes").val());			
			$("#fechabajabienactivo_bajaactivofijoactualfech").val($("#fechaufvultimorecienteforactualizar_revaluteca").val());
    		$("#ufvbajaformbalorisarbien_bajabienactiad").val($("#ufvactualactivofijo_librobienes").val());
		}
		return false;
	});

    $("#fechabajabienactivo_bajaactivofijoactualfech").on('focus', function () {
        previous = (this.value);
    }).change(function() {
		var dateval = (this.value);
	    $.get("getufvtipocambiotocibajabienforchange/"+(dateval),function(response){
	      if(response.success){
	      	var coeficite = 0;
	      	var valactualisador =0;
	      	var depreinireexpretireteadoa = 0;
	      	var differensidias = 0;
	      	var ddedepretotal = 0;
	      	var rerrestantevalor = 0;
	      	var degesdepregestion =0;
	      	if(((document.getElementById("actualizarasdasdactivofijo_librobienes").checked)==true)&&(($("#indiceufv_activofijolibrobienes").val())!=0)&&(($("#indiceufv_activofijolibrobienes").val())!='0')&&(($("#indiceufv_activofijolibrobienes").val())!='')&&(($("#indiceufv_activofijolibrobienes").val())!=' ')&&(($("#indiceufv_activofijolibrobienes").val())!=null)){
                coeficite = (response.data.c_ufv)/(parseFloat($("#indiceufv_activofijolibrobienes").val()));
                valactualisador = parseFloat(coeficite*(parseFloat(($("#costoinicialactivofijo_librobienes").val()).replace(/,/g, '')))).toFixed(2);
                depreinireexpretireteadoa = parseFloat(coeficite*(parseFloat(($("#depreciaacuinicialactivofijo_librobienes").val()).replace(/,/g, '')))).toFixed(2);
            }else{
                coeficite=0;
                valactualisador = parseFloat(($("#costoinicialactivofijo_librobienes").val()).replace(/,/g, ''));
                depreinireexpretireteadoa = parseFloat(($("#depreciaacuinicialactivofijo_librobienes").val()).replace(/,/g, ''));
            }
            if(((document.getElementById("depreciar_activofijoerertlibrobienes").checked)==true)&&(($("#vidautilasdactivofijo_librobienes").val())!=0)&&(($("#vidautilasdactivofijo_librobienes").val())!='0')&&(($("#vidautilasdactivofijo_librobienes").val())!='')&&(($("#vidautilasdactivofijo_librobienes").val())!=' ')&&(($("#vidautilasdactivofijo_librobienes").val())!=null)){
                var fechaIniciorang = new Date($("#fecha_incorporacionactivofijo_librobienes").val()).getTime();
				var fechaFinrang = new Date(dateval).getTime();
				differensidias = Math.round(Math.abs(((fechaFinrang - fechaIniciorang)/(86400000))));
				differensidias=differensidias+1;
                var tttotaldeprere = (parseFloat(valactualisador))/((parseFloat($("#vidautilasdactivofijo_librobienes").val()))*365);
                ddedepretotal = parseFloat(tttotaldeprere*differensidias).toFixed(2);
                ddedepretotal = parseFloat((parseFloat(ddedepretotal))+(parseFloat(depreinireexpretireteadoa))).toFixed(2);
                rerrestantevalor = parseFloat(valactualisador-ddedepretotal).toFixed(2);
				var copeadorgogegu = (dateval).split("-");
                if((parseFloat(($("#fecha_incorporacionactivofijo_librobienes").val()).substring(0,4))) < (parseFloat(copeadorgogegu[0]))){
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
                document.location.href = '/activos/librobienes';
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