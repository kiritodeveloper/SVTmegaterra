$(document).ready(function(){
	var cloned;
	$(function(){
		initDatepickersAndSelecter();
	});
	function initDatepickersAndSelecter(){
	    cloned = $("table tr#actionRower1").eq(0).clone();
		$(".buscar", $("#guar_detallenotasalidaupdate")).select2();
		$(".element", $("#guar_detallenotasalidaupdate")).inputmask("y-m-d");
	}
	$(document).on('click','.clsClonarFila',function(){
		aumentar();
	});
	$(document).on('keydown','.lottrart',function(e){
		if (e.which == 13){
			var row=$(this).closest("tr").index();
			var rows = ($("#guar_detallenotasalidaupdate > tbody").children().length)-1;
			if(rows>row){
				var parts = this.id.match(/(\D+)(\d+)$/);
				var concat = "#lote_arti" + ++parts[2];
				$(concat).focus();
			}else
				aumentar();
		}
	});
	function aumentar(){
		var tabla = $("#guar_detallenotasalidaupdate");
		var $tr = cloned.clone();
		var $tree = $(tabla).find("tbody tr:last").eq(0).clone();
		var cant = $tree.attr('id');
		cant = cant.match(/(\D+)(\d+)$/);
		cant = ++cant[2];
		$tr.attr('id', 'actionRower' + cant);
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
		$(".buscar", $tr).select2();
		$(".element", $tr).inputmask("y-m-d");
	}
	$(document).on('click','.clsEliminarFila',function(){
		var objCuerpo=$(this).parents().get(2);
		if($(objCuerpo).find('tr').length==1){
			showErrorMessage("NO SE PUEDE ELIMINAR UNICO ARTICULO!");
			return;
		}
		var objFila=$(this).parents().get(1);
		var parts = this.id.match(/(\D+)(\d+)$/);
       	var valore = $("#pista" + parts[2]).val();
       	if(valore==""){
			$(objFila).remove();
			actualisar_totales();
       	}else{
			if(confirm("Adevertencia esta punto de eliminar un articulo de la nota de salida desea proseguir?")){
				var route = "../../deletenotaegresoar/"+valore+"";
				var token = $("#token").val();
				$.ajax({
					url: route,
					headers: {'X-CSRF-TOKEN': token},
					type: 'DELETE',
					dataType: 'json',
					success: function(response){
				      	if(response.success){
							$(objFila).remove();
							actualisar_totales();
					    }else
					    	showErrorMessage("Error al eliminar articulo de la nota de salida!!");
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
	function actualisar_totales(){
		var $suma=0;
		var ider="";
		var $sum=0;
		var $sume=0;
		$("#datos_aticulonotasalidaedit").find('tr').each(function() {
	        ider = (this.id).match(/(\D+)(\d+)$/);
			ider = ider[2];
			if(($('#preciotota_articu'+ider).val())!=""){
				$suma=$suma+parseFloat($('#preciotota_articu'+ider).val());
				$suma = Number(Math.round($suma+'e2')+'e-2');
			}
			if(($('#totaldescuento_articulo'+ider).val())!=""){
				$sum=$sum+parseFloat($('#totaldescuento_articulo'+ider).val());
				$sum = Number(Math.round($sum+'e2')+'e-2');
			}
			if(($('#canite_arti'+ider).val())!=""){
				$sume=$sume+parseFloat($('#canite_arti'+ider).val());
				$sume = Number(Math.round($sume+'e2')+'e-2');
			}
	    });
		$("#cantidad_total_transaccionalmacen").autoNumeric('set',$sume);
		$("#total_importe_transaccionalmacen").autoNumeric('set',$suma);	
		$("#importe_neto_transaccionalmacen").autoNumeric('set',$sum);
		$sum = $suma-$sum;
		$("#descuento_transaccionalmacen").autoNumeric('set',(Number(Math.round($sum+'e2')+'e-2')));
	}
	$('#total_importe_transaccionalmacen').autoNumeric('init');
	$("#cantidad_total_transaccionalmacen").autoNumeric('init');
	$('#importe_neto_transaccionalmacen').autoNumeric('init');
	$('#descuento_transaccionalmacen').autoNumeric('init');
	$("#fecha_transaccionalmacen").inputmask("y-m-d");
	$("#fecha_transaccionalmacen").datepicker({
    	changeMonth: true,
    	yearRange: '-0:+0'
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

	$(document).on("click",".element",function(){        
        $(this).datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: '-1:+12'
        }).datepicker("show");
    });

	$(document).on('change','.clsCl',function(){
		var data = $(this).val();
        var parts = this.id.match(/(\D+)(\d+)$/);
        var concat = "#cod_articulo" + parts[2];
        $(concat).select2('val',data);
        var concateri = "#canite_arti" + parts[2];
		$(concateri).autoNumeric('init');
		$(concateri).val('');
		$("#precioCNfactura_art" + parts[2]).val('');
		$("#precioSNfatura_arti" + parts[2]).val('');
		$("#precioventa_aticulo" + parts[2]).val('');
		$("#fechavencimient_sumini" + parts[2]).val('');
		$("#lote_arti" + parts[2]).val('');
		$("#preciotota_articu" + parts[2]).val('');
		$("#descuento_artipro" + parts[2]).val('');
		$("#totaldescuento_articulo" + parts[2]).val('');
		if(data!=""){
    		$.get("../../desarrollarnumerocontadordeexismed/"+(data), function(res){
    			if(res.success){
    				showSuccess('Existencia del Articulo Seleccionado: '+(res.difere));
    				$(concateri).autoNumeric('update', {vMax: res.difere});
    			}else
					showErrorMessage('NO SE ENCONTRO ARTICULO');
			});
    	}
    	actualisar_totales();
	});

	$(document).on('change','.buscar',function(e){
		var data = $(this).val();
		var parts = this.id.match(/(\D+)(\d+)$/);
    	var concat = "#des_articulo" + parts[2];			
		$(concat).val(data);
		var concateri = "#canite_arti" + parts[2];
		$(concateri).autoNumeric('init');
		$(concateri).val('');
		$("#precioCNfactura_art" + parts[2]).val('');
		$("#precioSNfatura_arti" + parts[2]).val('');
		$("#precioventa_aticulo" + parts[2]).val('');
		$("#fechavencimient_sumini" + parts[2]).val('');
		$("#lote_arti" + parts[2]).val('');
		$("#preciotota_articu" + parts[2]).val('');
		$("#descuento_artipro" + parts[2]).val('');
		$("#totaldescuento_articulo" + parts[2]).val('');
		if(data!=""){
    		$.get("../../desarrollarnumerocontadordeexismed/"+(data), function(res){
    			if(res.success){
    				showSuccess('Existencia del Articulo Seleccionado: '+(res.difere));
    				$(concateri).autoNumeric('update', {vMax: res.difere});
    			}else
					showErrorMessage('NO SE ENCONTRO ARTICULO');
			});
    	}
    	actualisar_totales();
	});

	$(document).on('keyup','.cantmaterrartl',function(e){
		$(this).autoNumeric('init');
		if((e.which == 13) && (($(this).val())!='')){
			var parts = this.id.match(/(\D+)(\d+)$/);
	       	var concat = "#des_articulo" + parts[2];
           	if(($(concat).val())!=""){
	    		$.get("../../desarrollarnumerocontadordeexismed/"+($(concat).val()), function(res){
	    			if(res.success)
	    				showSuccess('Existencia del Articulo Seleccionado: '+(res.difere));
	    			else
						showErrorMessage('NO SE ENCONTRO ARTICULO');
				});
				return false;
	    	}else
	    		showErrorMessage('SELECCIONE ARTICULO');
		}else{
			var $suma=0;
			$("#guar_detallenotasalidaupdate tbody input[for=cant_artimat]").each(function(){
				if(($(this).val()) != ""){
					$suma=$suma+parseFloat($(this).val());
					$suma = Number(Math.round($suma+'e2')+'e-2');
				}
			});
			$("#cantidad_total_transaccionalmacen").autoNumeric('set',$suma);
		}
	});

	$(document).on('keyup', '.prescfatr', function(e){
		$(this).autoNumeric('init');
		if(e.which==13){
			var parts = this.id.match(/(\D+)(\d+)$/);
  			if(($("#precioSNfatura_arti"+parts[2]).val())!=""){
  				var va = parseFloat($("#precioSNfatura_arti"+parts[2]).val());
  				va=Number(Math.round(va+'e4')+'e-4');
  				$("#precioCNfactura_art"+parts[2]).autoNumeric('set',va);
  			}
		}
		return false;
	});

	$(document).on('keyup', '.pressfmaterl', function(e){
		$(this).autoNumeric('init');
		if(e.which==13){
			var parts = this.id.match(/(\D+)(\d+)$/);
  			if(($("#precioCNfactura_art"+parts[2]).val())!=""){
  				var va = parseFloat($("#precioCNfactura_art"+parts[2]).val());
  				va=Number(Math.round(va+'e4')+'e-4');
  				$("#precioSNfatura_arti"+parts[2]).autoNumeric('set',va);
  			}
		}
		return false;
	});

	$(document).on('keyup', '.presventartl', function(e){
		$(this).autoNumeric('init');
		if(e.which==13){
			var parts = this.id.match(/(\D+)(\d+)$/);
  			if(($("#precioCNfactura_art"+parts[2]).val())!=""){
  				var va = parseFloat($("#precioCNfactura_art"+parts[2]).val());
  				va=Number(Math.round(va+'e4')+'e-4');
  				$("#precioventa_aticulo"+parts[2]).autoNumeric('set',va);
  			}
		}
		return false;
	});

	$(document).on('keyup','.impttl',function(e){
		$(this).autoNumeric('init');
  		if (e.which == 13){
  			var parts = this.id.match(/(\D+)(\d+)$/);
  			if((($("#precioCNfactura_art" + parts[2]).val())!="") && (($("#canite_arti" + parts[2]).val())!="")){
  				var va = (parseFloat($("#canite_arti" + parts[2]).val()))*(parseFloat($("#precioCNfactura_art" + parts[2]).val()));
  				$("#"+this.id).val(Number(Math.round(va+'e2')+'e-2'));
  			}	
    	}
    	var $sum=0;
		$("#guar_detallenotasalidaupdate tbody input[for=totalprearti]").each(function(){
			if(($(this).val()) != ""){
				$sum=$sum+parseFloat($(this).val());
				$sum = Number(Math.round($sum+'e2')+'e-2');
			}
		});																	
		$("#total_importe_transaccionalmacen").autoNumeric('set',$sum);
		var re  = parseFloat(($("#total_importe_transaccionalmacen").val()).replace(/,/g, ''));
		var res = parseFloat(($("#importe_neto_transaccionalmacen").val()).replace(/,/g, ''));
		re = re - res;
		$("#descuento_transaccionalmacen").autoNumeric('set',(Number(Math.round(re+'e2')+'e-2')));
		return false;
	});

	$(document).on('keyup', '.descuenartimp', function(e){
		$(this).autoNumeric('init');
		if(e.which==13){
			var parts = this.id.match(/(\D+)(\d+)$/);
  			if(($("#precioCNfactura_art"+parts[2]).val())!=""){
  				var va = parseFloat($("#precioCNfactura_art"+parts[2]).val());
  				va=Number(Math.round(va+'e4')+'e-4');
  				$("#descuento_artipro"+parts[2]).autoNumeric('set',va);
  			}
		}
		return false;
	});

	$('#numeropedido_transaccionalmacen').keydown(function(e){
		if((e.which == 13) && ($(this).val()!='') && ($(this).val()!=null)){
			if(confirm("Desea rellenar el formulario de acuerdo al pedido (numero de pedido insertado en el campo #pedido)===>ADVERTENCIA SE MANTENDRAN LOS ARTICULOS REGISTRADOS EN LA PRESENTE NOTA!!!! DESEA PROSEGUIR?")){
				e.preventDefault();
				$.get("../../buscarformulariopedidomaterialforntsal/"+($(this).val()), function(respuestaget){
					if (respuestaget.success){
						$('#funcionario_id').val(respuestaget.datar.user_id);
						$('#unidad_id').val(respuestaget.datar.unidad_id);
						$('#actividad_id').val(respuestaget.datar.actividad_id);
						$('#financiamiento_id').val(respuestaget.datar.financiamiento_id);
						$("#cantidad_total_transaccionalmacen").val(Number(Math.round(((parseFloat($("#cantidad_total_transaccionalmacen").val()))+parseFloat(respuestaget.datar.cantidad_total_pedidomaterial))+'e2')+'e-2'));
						$("#total_importe_transaccionalmacen").val(Number(Math.round(((parseFloat($("#total_importe_transaccionalmacen").val()))+parseFloat(respuestaget.datar.total_precioarticulos_pedidomaterial))+'e2')+'e-2'));
						$("#importe_neto_transaccionalmacen").val(Number(Math.round(((parseFloat($("#importe_neto_transaccionalmacen").val()))+parseFloat(respuestaget.datar.total_precioarticulos_pedidomaterial))+'e2')+'e-2'));
						var datoses = respuestaget.datar.detalpedidomaterialsumi;
						var tabla = $("#guar_detallenotasalidaupdate");
						var tr = cloned.clone();
						var tree = "";
						var cant = '';
						for(i in datoses){
							tr = cloned.clone();
							tree = $(tabla).find("tbody tr:last").eq(0).clone();
							cant = (tree.attr('id')).match(/(\D+)(\d+)$/);
							cant = ++cant[2];
						   	tr.attr('id', 'actionRower' + cant);
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
							$(".buscar", tr).select2();
							$(".element", tr).inputmask("y-m-d");
							tree = $(tabla).find("tbody tr:last");
							$(".buscar", tree).select2('val', datoses[i].articulo_id);
							$(".clsCl", tree).val(datoses[i].articulo_id);
							$(".cantmaterrartl", tree).val(datoses[i].cantidad_articulo_detallepedidomaterial);
							$(".prescfatr", tree).val(datoses[i].unitario_precioarticulo_detallepedidomaterial);
							$(".pressfmaterl", tree).val(datoses[i].unitario_precioarticulo_detallepedidomaterial);
							$(".presventartl", tree).val(datoses[i].unitario_precioarticulo_detallepedidomaterial);
							$(".impttl", tree).val(datoses[i].total_precioarticulo_detallepedidomaterial);
							$(".descuenartimp", tree).val(datoses[i].unitario_precioarticulo_detallepedidomaterial);
							$(".descuentotalart", tree).val(datoses[i].total_precioarticulo_detallepedidomaterial);
						}
					}else
						showErrorMessage("NO SE ENCONTRO PEDIDO DE MATERIAL O YA REGISTRO NOTA DE SALIDA DE ACUERDO AL NUMERO DE PEDIDO!");
				});
			}
		}
	});

	$(document).on('keyup','.descuentotalart',function(e){
		$(this).autoNumeric('init');
  		if (e.which == 13){
  			var parts = this.id.match(/(\D+)(\d+)$/);
  			if((($("#descuento_artipro" + parts[2]).val())!="") && (($("#canite_arti" + parts[2]).val())!="")){
  				var va = (parseFloat($("#canite_arti" + parts[2]).val()))*(parseFloat($("#descuento_artipro" + parts[2]).val()));
  				$("#"+this.id).val(Number(Math.round(va+'e2')+'e-2'));
  			}	
    	}
    	var $sum=0;
		$("#guar_detallenotasalidaupdate tbody input[for=netoimprati]").each(function(){
			if(($(this).val()) != ""){
				$sum=$sum+parseFloat($(this).val());
				$sum = Number(Math.round($sum+'e2')+'e-2');
			}
		});
		$("#importe_neto_transaccionalmacen").autoNumeric('set',$sum);
		var re  = parseFloat(($("#total_importe_transaccionalmacen").val()).replace(/,/g, ''));
		var res = parseFloat(($("#importe_neto_transaccionalmacen").val()).replace(/,/g, ''));
		re = re - res;
		$("#descuento_transaccionalmacen").autoNumeric('set',(Number(Math.round(re+'e2')+'e-2')));
    	return false;
	});

    $("#notasalidauptateform_edit").keypress(function(e){
        if (e.which == 13)
            return false;
    });

    $("#notasalidauptateform_edit").submit(function(e){
    	e.preventDefault();
    	$("#detalle_clasenota_transaccionalmacen").val($("#clasenota_id option:selected").html());
    	$("#detalle_depositoalmacen_transaccionalmacen").val($("#deposito_id option:selected").html());
    	$("#detalle_destino_transaccionalmacen").val(($("#funcionario_id option:selected").html())+' & '+($("#unidad_id option:selected").html()));
		unpload_ntasal();
		return false;    
	});
});

function unpload_ntasal(){
	var token = $("#token").val();
	var route = $('#notasalidauptateform_edit');
	var url = route.attr('action');
	$.ajax({
	  headers: {'X-CSRF-TOKEN': token},
      url: url,
      data:new FormData($("#notasalidauptateform_edit")[0]),
      dataType:'json',
      type:'post',
      processData: false,
      contentType: false,
      success:function(response){
      	if(response.success){
      		var llegada = response.data;
      		var canti="";
			var medcom;
			var cadenanombre = "";
			var last=0;
			var firstc=0;
			var materialess = new Array();
			var contador =0;
			var saldore = 0;
			$("#datos_aticulonotasalidaedit").find('tr').each(function() {
		        canti = (this.id).match(/(\D+)(\d+)$/);
				canti = canti[2];
				cadenanombre = $(("#des_articulo"+canti) +" option:selected").html();
				last = cadenanombre.lastIndexOf(']');
				firstc = cadenanombre.lastIndexOf('[');
				saldore = (parseFloat($("#canite_arti"+canti).val()))*(-1);
				medcom = {"id_s": $('#pista'+canti).val(), "saldo_movimientoarticulo":(Number(Math.round(saldore+'e2')+'e-2')), "clase_movimientoarticulo": "Salida", "transaccion_almacen_id": llegada.id, "user_id": llegada.user_id,"centrodistribucion_id": llegada.centrodistribucion_id,"actividad_id": llegada.actividad_id, "financiamiento_id": llegada.financiamiento_id,"deposito_id":llegada.deposito_id, "clasenota_id":llegada.clasenota_id,"institucion_id":llegada.institucion_id, "funcionario_id": llegada.funcionario_id, "unidad_id":llegada.unidad_id,"fecha_movimientoarticulo": llegada.fecha_transaccionalmacen, "articulo_id": $('#cod_articulo'+canti).val(), "detalle_movimientoarticulo": llegada.observacion_transaccionalmacen, "documentorespaldo_movimientoarticulo": llegada.numerodocumento_transaccionalmacen,"detalle_clasenota_movimientoarticulo": llegada.detalle_clasenota_transaccionalmacen,"detalle_destino_movimientoarticulo":llegada.detalle_destino_transaccionalmacen,"fecha_vencimiento_movimientoarticulo": $("#fechavencimient_sumini"+canti).val(), "codigo_articulo_movimientoarticulo": $(("#cod_articulo"+canti) +" option:selected").html(), "lote_articulo_movimientoarticulo": $("#lote_arti"+canti).val(), "cantidad_movimientoarticulo": $("#canite_arti"+canti).val(), "precio_confactura_movimientoarticulo": $("#precioCNfactura_art"+canti).val(), "precio_sinfactura_movimientoarticulo": $("#precioSNfatura_arti"+canti).val(), "precio_venta_movimientoarticulo": $("#precioventa_aticulo"+canti).val(), "total_importe_movimientoarticulo": $("#preciotota_articu"+canti).val(), "precio_condescuento_movimientoarticulo": $("#descuento_artipro"+canti).val(),"total_condescuento_movimientoarticulo": $("#totaldescuento_articulo"+canti).val(), "gestion_movimientoarticulo":llegada.gestion_transaccionalmacen, "nombre_articulo_movimientoarticulo": cadenanombre.substring(0, firstc), "precentacion_articulo_movimientoarticulo": cadenanombre.substring((firstc+1), last), "detalle_depositoalmacen_movimientoarticulo": llegada.detalle_depositoalmacen_transaccionalmacen, "numeropedido_movimientoarticulo": llegada.numeropedido_transaccionalmacen}; 
				materialess[contador]=medcom;
				contador++;
		    });
	       	actualizar_articulosnotasalida(materialess);
      	}else
	    	showErrorMessage("Error al actualizar nota de salida -> revise por favor; (*datos introducidos en el formulario)!");          
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

function actualizar_articulosnotasalida(cadena){
	var token = $("#token").val();
	$.ajax({
		url:'../../updateartisaliegre',
		headers: {'X-CSRF-TOKEN': token},
		type: 'POST',
		dataType: 'json',
		data: {"data" : JSON.stringify(cadena)},
		cache: false,
		success:function(asient){
			if(asient.success) {
			    showSuccess("NOTA DE SALIDA ACTUALIZADO CORRECTAMENTE");
				document.location.href = '/almacen/notasalida';
			}else
				showErrorMessage('ERROR AL ACTUALIZAR ARTICULOS DE LA NOTA DE SALIDA!!');
		},
		error: function() {
	       	showErrorMessage('ERROR AL ACTUALIZAR ARTICULOS DE LA NOTA DE SALIDA!!');
		}
	});
}

function complementandosalida(materialssalid){
	var tabla = $("#guar_detallenotasalidaupdate");
	var tre = $("table tr#actionRower1").eq(0).clone();
	var tr="";
	var cant='';
	for (i in materialssalid) {
		tr = (tabla).find("tbody tr:last");
		$(".buscar", tr).val(materialssalid[i].articulo_id);
		$(".clsCl", tr).val(materialssalid[i].articulo_id);
		$(".cantmaterrartl", tr).val(materialssalid[i].cantidad_movimientoarticulo);
		$(".prescfatr", tr).val(materialssalid[i].precio_confactura_movimientoarticulo);
		$(".pressfmaterl", tr).val(materialssalid[i].precio_sinfactura_movimientoarticulo);
		$(".presventartl", tr).val(materialssalid[i].precio_venta_movimientoarticulo);
		$(".element", tr).val(materialssalid[i].fecha_vencimiento_movimientoarticulo);
		$(".lottrart", tr).val(materialssalid[i].lote_articulo_movimientoarticulo);
		$(".impttl", tr).val(materialssalid[i].total_importe_movimientoarticulo);
		$(".descuenartimp", tr).val(materialssalid[i].precio_condescuento_movimientoarticulo);
		$(".descuentotalart", tr).val(materialssalid[i].total_condescuento_movimientoarticulo);
		$(".clsEliminarFila", tr).val(materialssalid[i].id);
		tr = tre.clone();
		cant = $(tabla).find("tbody tr:last").eq(0).clone();
		cant = (cant.attr('id')).match(/(\D+)(\d+)$/);
		cant = ++cant[2];
	   	tr.attr('id', 'actionRower' + cant);
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