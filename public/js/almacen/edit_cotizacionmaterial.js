$(document).ready(function(){
	var cloned;
	$(function(){
		initDatepickersAndSelect();
	});
	function initDatepickersAndSelect(){
		cloned = $("table tr#primertrcotizaarticulos1").eq(0).clone();
		$(".codigomaterialcot", $("#editar_cotizacionmaterialdetalletableart")).select2();
	}
	$(document).on('click','.aumentarfilaaarticulodetalecoti',function(){
		aumentar_filasmateriales();
	});
	$(document).on('keydown','.cantidadarticulocotrclas',function(e){
		if (e.which == 13){
			var row=$(this).closest("tr").index();
			var rows = ($("#editar_cotizacionmaterialdetalletableart > tbody").children().length)-1;
			if(rows>row){
				var parts = this.id.match(/(\D+)(\d+)$/);
				var concat = "#cantidad_cotizadrarticulo" + ++parts[2];
				$(concat).focus();
			}else
				aumentar_filasmateriales();
		}
	});
	function aumentar_filasmateriales(){
		var tabla = $("#editar_cotizacionmaterialdetalletableart");
		var $tr = cloned.clone();
		var $tree = $(tabla).find("tbody tr:last").eq(0).clone();
		var cant = $tree.attr('id');
		cant = cant.match(/(\D+)(\d+)$/);
		cant = ++cant[2];
		$tr.attr('id', 'primertrcotizaarticulos' + cant);
		$tr.find("input:text").val("");
		$tr.find("input,number").val("");
		$tr.find("input,select").attr("name", function()
		{
	     var parts = this.id.match(/(\D+)(\d+)$/);
	     return parts[1] + cant;
	    }).attr("id", function(){
	     var parts = this.id.match(/(\D+)(\d+)$/);
	     return parts[1] + cant;
	    });
		$(tabla).find("tbody tr:last").after($tr);
		$(".codigomaterialcot", $tr).select2();
	}
	$(document).on('click','.clsEliminarFilaarticulocotizdr',function(){
		var objCuerpo=$(this).parents().get(2);
		if($(objCuerpo).find('tr').length==1){
			showErrorMessage("NO SE PUEDE ELIMINAR UNICO ARTICULO!");
			return;
		}
		var objFila=$(this).parents().get(1);
		var parts = this.id.match(/(\D+)(\d+)$/);
       	var valore = $("#butonminicot" + parts[2]).val();
       	if(valore==""){
			$(objFila).remove();
			actualisar_totales_tabledetallescotization();
       	}else{
			if(confirm("Adevertencia esta punto de eliminar un articulo de cotizacion de material y/o suministro desea proseguir?")){
				var route = "../../deletarticulocotizacionmaterialdeta/"+valore+"";
				var token = $("#token").val();
				$.ajax({
					url: route,
					headers: {'X-CSRF-TOKEN': token},
					type: 'DELETE',
					dataType: 'json',
					success: function(response){
				      	if(response.success){
							$(objFila).remove();
							actualisar_totales_tabledetallescotization();
					    }else
					    	showErrorMessage("Error al eliminar articulo!!");
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
		}
	});
	function actualisar_totales_tabledetallescotization(){
		var $suma=0;
		$("#editar_cotizacionmaterialdetalletableart tbody input[for=cantiad_articulocotima]").each(function(){
			if(($(this).val())!= ""){
				$suma=$suma+parseFloat($(this).val());
				$suma = Number(Math.round($suma+'e2')+'e-2');
			}
		});		
		$("#cantidad_total_cotizacionmaterial").autoNumeric('set',$suma);
	}
	$('#cantidad_total_cotizacionmaterial').autoNumeric('init');
	$(document).on('change','.descripcionpartidamaterialcot',function(){
		var data = $(this).val();
        var parts = this.id.match(/(\D+)(\d+)$/);
        var concator = "#des_articulocoti" + parts[2];
		$(concator).val(data);
        $("#codig_articulocot" + parts[2]).select2('val',data);
        if(($(concator).val())=="")
        	$("#unidadpresentacion_articott" + parts[2]).val("");
        else{
        	var cadenanombre = $(concator + " option:selected").html();
			var last = cadenanombre.lastIndexOf(']');
			var firstc = cadenanombre.lastIndexOf('[');
			$("#unidadpresentacion_articott" + parts[2]).val(cadenanombre.substring((firstc+1), last));
        }
	});
	$(document).on('change','.descripclacificacioncot',function(){
		var data = $(this).val();
        var parts = this.id.match(/(\D+)(\d+)$/);
        var concator = "#des_articulocoti" + parts[2];
		$("#des_partidaarticulocoti" + parts[2]).val(data);
        $("#codig_articulocot" + parts[2]).select2('val',data);
        if(($(this).val())=="")
        	$("#unidadpresentacion_articott" + parts[2]).val("");
        else{
        	var cadenanombre = $(concator + " option:selected").html();
			var last = cadenanombre.lastIndexOf(']');
			var firstc = cadenanombre.lastIndexOf('[');
			$("#unidadpresentacion_articott" + parts[2]).val(cadenanombre.substring((firstc+1), last));
        }
	});

	$(document).on('change','.codigomaterialcot',function(e){
		var data = $(this).val();
		var parts = this.id.match(/(\D+)(\d+)$/);
    	var concat = "#des_articulocoti" + parts[2];
		$("#des_partidaarticulocoti" + parts[2]).val(data);
		$(concat).val(data);
        if(($(concat).val())=="")
        	$("#unidadpresentacion_articott" + parts[2]).val("");
        else{
        	var cadenanombre = $(concat + " option:selected").html();
			var last = cadenanombre.lastIndexOf(']');
			var firstc = cadenanombre.lastIndexOf('[');
			$("#unidadpresentacion_articott" + parts[2]).val(cadenanombre.substring((firstc+1), last));
        }
	});

	$(document).on('keyup','.cantidadarticulocotrclas',function(e){
		$(this).autoNumeric('init');
		var $suma=0;
		$("#editar_cotizacionmaterialdetalletableart tbody input[for=cantiad_articulocotima]").each(function(){
			if(($(this).val()) != ""){
				$suma=$suma+parseFloat($(this).val());
				$suma = Number(Math.round($suma+'e2')+'e-2');
			}
		});
		$("#cantidad_total_cotizacionmaterial").autoNumeric('set',$suma);
	});

	$('#pedido_id').keydown(function(e){
		if((e.which == 13) && ($(this).val()!='') && ($(this).val()!=null) && ($(this).val()!=0)){
			if(confirm("Desea rellenar el formulario de acuerdo al pedido (numero de pedido insertado en el campo #pedido)===>ADVERTENCIA SE MANTENDRAN LOS ARTICULOS REGISTRADOS EN LA PRESENTE NOTA!!!! DESEA PROSEGUIR?")){
				e.preventDefault();
				$.get("../../getpedidocitzacionforitems/"+($(this).val()), function(respuestaget){
					if (respuestaget.success){
						$("#cantidad_total_cotizacionmaterial").val(Number(Math.round(((parseFloat($("#cantidad_total_cotizacionmaterial").val()))+parseFloat(respuestaget.datar.cantidad_total_pedidomaterial))+'e2')+'e-2'));
						$("#funcionario_id_cotizacion").val(respuestaget.datar.user_id);
						var datoses = respuestaget.datar.detalpedidomaterialsumi;
						var tabla = $("#editar_cotizacionmaterialdetalletableart");
						var tr = cloned.clone();
						var tree = "";
						var cant = '';
						for(i in datoses){
							tr = cloned.clone();
							tree = $(tabla).find("tbody tr:last").eq(0).clone();
							cant = (tree.attr('id')).match(/(\D+)(\d+)$/);
							cant = ++cant[2];
						   	tr.attr('id', 'primertrcotizaarticulos' + cant);
							tr.find("input:text").val("");
							tr.find("input,number").val("");
							tr.find("input,select").attr("name", function()
						    {
						     var parts = this.id.match(/(\D+)(\d+)$/);
						     return parts[1] + cant;
						    }).attr("id", function(){
						     var parts = this.id.match(/(\D+)(\d+)$/);
						     return parts[1] + cant;
						    });
						    $(tabla).find("tbody tr:last").after(tr);
							$(".codigomaterialcot", tr).select2();
							tree = $(tabla).find("tbody tr:last");
							$(".codigomaterialcot", tree).select2('val',datoses[i].articulo_id);
							$(".descripclacificacioncot", tree).val(datoses[i].articulo_id);
							$(".descripcionpartidamaterialcot", tree).val(datoses[i].articulo_id);
							$(".uniprearcote", tree).val(datoses[i].precentacion_detallepedidomaterial);
							$(".cantidadarticulocotrclas", tree).val(datoses[i].cantidad_articulo_detallepedidomaterial);
						}
					}else
						showErrorMessage("NO SE ENCONTRO PEDIDO DE MATERIAL!");
				});
			}
		}
	});
	$("#fecha_cotizacion").inputmask("y-m-d");
	$("#fecha_cotizacion").datepicker({
    	changeMonth: true,
    });
	jQuery(function($){
		$.datepicker.regional['es'] = {
			closeText: 'Cerrar',
			prevText: '&#x3c;Ant',
			nextText: 'Sig&#x3e;',
			currentText: 'Hoy',
			monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
			'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
			monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
			'Jul','Ago','Sep','Oct','Nov','Dic'],
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
	$('#proveedor_id').change(function(e){
		if((($(this).val())!=null)&&(($(this).val())!=0)){
			$.get("../../getproveedorcotizacionped/"+($(this).val()),function(response){
				if(response.success)
	        		$("#proveedor_email").val(response.dataco.email_proveedor);
	        	else
	        		showErrorMessage("NO SE ENCONTRO PROVEEDOR EN NUESTROS REGISTROS!");
			});
		}else{
			$("#proveedor_email").val('');
			showErrorMessage("SELECCIONE PROVEEDOR!");
		}
		return false;
	});

    $("#formulariocotizacionmaterial_updatearticulos").keypress(function(e){
        if (e.which == 13){
            return false;
        }
    });

    $("#formulariocotizacionmaterial_updatearticulos").submit(function(e){
    	e.preventDefault();
    	$("#nombre_proveedor_cotizacion").val($("#proveedor_id option:selected").html());
		umploadUPDATE_cotizacionmaterialesarti();
		return false;
	});
});

function umploadUPDATE_cotizacionmaterialesarti(){
	var token = $("#token").val();
	var route = $('#formulariocotizacionmaterial_updatearticulos');
	var url = route.attr('action');
	$.ajax({
	  headers: {'X-CSRF-TOKEN': token},
      url: url,
      data:new FormData($("#formulariocotizacionmaterial_updatearticulos")[0]),
      dataType:'json',
      type:'post',
      processData: false,
      contentType: false,
      success:function(response){
      	if(response.success) {
      		var llegada = response.data;
      		var canti="";
			var medcom;
			var cadenanombre = "";
			var firstc=0;
			var cadenanombrepartida = "";
			var firstcpart=0;
			var materialess = new Array();
			var contador =0;
			$("#editdatos_materialesregistrocotizacionmaterial").find('tr').each(function() {
		        canti = (this.id).match(/(\D+)(\d+)$/);
				canti = canti[2];
				cadenanombre = $(("#des_articulocoti"+canti) +" option:selected").html();
				firstc = cadenanombre.lastIndexOf('[');
				cadenanombrepartida = $(("#des_partidaarticulocoti"+canti) +" option:selected").html();
				firstcpart = cadenanombrepartida.lastIndexOf('{');
				medcom = {"id_c": $('#butonminicot'+canti).val(), "cotizacion_material_id": llegada.id, "user_id": llegada.user_id,"funcionario_id_cotizacion": llegada.funcionario_id_cotizacion, "proveedor_id": llegada.proveedor_id,"pedido_id":llegada.pedido_id,"gestion_detallecotizacion":llegada.gestion_cotizacion, "fecha_detallecotizacion":llegada.fecha_cotizacion, "articulo_id": $('#codig_articulocot'+canti).val(), "detalle_asunto_detallecotizacion": llegada.asunto_cotizacion, "codigo_detallecotizacionmaterial": $(("#codig_articulocot"+canti) +" option:selected").html(), "cantidad_articulo_detallecotizacion": $("#cantidad_cotizadrarticulo"+canti).val(), "nombre_detallecotizacionmaterial": cadenanombre.substring(0, firstc-1), "precentacion_detallecotizacionmaterial": $("#unidadpresentacion_articott"+canti).val(), "descripcionpartida_detallecotizacionmaterial": cadenanombrepartida.substring(0, firstcpart-1), "partida_id": (document.getElementById("des_partidaarticulocoti"+canti).options[document.getElementById("des_partidaarticulocoti"+canti).selectedIndex].title)}; 
				materialess[contador]=medcom;
				contador++;
		    });
			guardar_articulscotizacionupdate(materialess);
	    }else
	    	showErrorMessage("Error al actualizar cotizacion revise por favor; (*datos introducidos en el formulario)!");          
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

function guardar_articulscotizacionupdate(cadena){
	var token = $("#token").val();
	$.ajax({
		url:'../../updatematerialcotizaciondetal',
		headers: {'X-CSRF-TOKEN': token},
		type: 'POST',
		dataType: 'json',
		data: {"data" : JSON.stringify(cadena)},
		cache: false,
		success:function(asient){
			if(asient.success) {
				showSuccess("COTIZACION DE MATERIAL ACTUALIZADO SATISFACTORIAMENTE....");
				document.location.href = '/almacen/cotizacionmaterial';
			}else
				showErrorMessage('Error al actualizar detalle de cotizacion!!!');
		},
		error: function() {
	       	showErrorMessage('Error al actualizar detalle de cotizacion!!!');
		}
	});
}

function complementandoeditformcotizationmaterialfun(matrlscotizatndtll){
	var tabla = $("#editar_cotizacionmaterialdetalletableart");
	var tre = $("table tr#primertrcotizaarticulos1").eq(0).clone();
	var tr="";
	var cant='';
	for (i in matrlscotizatndtll) {
		tr = (tabla).find("tbody tr:last");
		$(".codigomaterialcot", tr).val(matrlscotizatndtll[i].articulo_id);
		$(".descripclacificacioncot", tr).val(matrlscotizatndtll[i].articulo_id);
		$(".descripcionpartidamaterialcot", tr).val(matrlscotizatndtll[i].articulo_id);
		$(".uniprearcote", tr).val(matrlscotizatndtll[i].precentacion_detallecotizacionmaterial);
		$(".cantidadarticulocotrclas", tr).val(matrlscotizatndtll[i].cantidad_articulo_detallecotizacion);
		$(".clsEliminarFilaarticulocotizdr", tr).val(matrlscotizatndtll[i].id);
		tr = tre.clone();
		cant = $(tabla).find("tbody tr:last").eq(0).clone();
		cant = (cant.attr('id')).match(/(\D+)(\d+)$/);
		cant = ++cant[2];
	   	tr.attr('id', 'primertrcotizaarticulos' + cant);
		tr.find("input:text").val("");
		tr.find("input,number").val("");
		tr.find("input,select").attr("name", function()
	    {
	     var parts = this.id.match(/(\D+)(\d+)$/);
	     return parts[1] + cant;
	    }).attr("id", function(){
	    var parts = this.id.match(/(\D+)(\d+)$/);
	    return parts[1] + cant;
	    });
		$(tabla).find("tbody tr:last").after(tr);
	}
	$(tabla).find("tbody tr:last").remove();
}