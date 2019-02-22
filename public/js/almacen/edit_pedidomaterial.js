$(document).ready(function(){
	var cloned;
	$(function(){
		initDatepickersAndSelect();
	});
	function initDatepickersAndSelect(){
		cloned = $("table tr#primertrpedidoarticulosedit1").eq(0).clone();
		$(".codigomaterialped", $("#editar_pedidomaterialdetalletableart")).select2();
	}
	$(document).on('click','.aumentarfilaaarticulodetaleedit',function(){
		aumentar_filaeditarticulopedi();
	});
	$(document).on('keydown','.cantidadarticulopedclas',function(e){
		if (e.which == 13){
			var row=$(this).closest("tr").index();
			var rows = ($("#editar_pedidomaterialdetalletableart > tbody").children().length)-1;
			if(rows>row){
				var parts = this.id.match(/(\D+)(\d+)$/);
				var concat = "#cantidad_pedidoarticulo" + ++parts[2];
				$(concat).focus();
			}else
				aumentar_filaeditarticulopedi();
		}
	});
	function aumentar_filaeditarticulopedi(){
		var tabla = $("#editar_pedidomaterialdetalletableart");
		var $tr = cloned.clone();
		var $tree = $(tabla).find("tbody tr:last").eq(0).clone();
		var cant = $tree.attr('id');
		cant = cant.match(/(\D+)(\d+)$/);
		cant = ++cant[2];
		$tr.attr('id', 'primertrpedidoarticulosedit' + cant);
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
		$(".codigomaterialped", $tr).select2();
	}
	$(document).on('click','.clsEliminarFilaarticulopedido',function(){
		var objCuerpo=$(this).parents().get(2);
		if($(objCuerpo).find('tr').length==1){
			showErrorMessage("NO SE PUEDE ELIMINAR UNICO ARTICULO!");
			return;
		}
		var objFila=$(this).parents().get(1);
		var parts = this.id.match(/(\D+)(\d+)$/);
       	var valore = $("#butonminiped" + parts[2]).val();
       	if(valore==""){
			$(objFila).remove();
			actualisar_totalesformeditpedimater();
       	}else{
			if(confirm("Adevertencia esta punto de eliminar un articulo del pedido de material y/o suministro desea proseguir?")){
				var route = "../../deletepedidomaterialoneartisumi/"+valore+"";
				var token = $("#token").val();
				$.ajax({
					url: route,
					headers: {'X-CSRF-TOKEN': token},
					type: 'DELETE',
					dataType: 'json',
					success: function(response){
				      	if(response.success){
							$(objFila).remove();
							actualisar_totalesformeditpedimater();
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
	function actualisar_totalesformeditpedimater(){
		var $suma=0;
		var ider="";
		var $sum=0;
		$("#datos_materialeseditarpedidomaterial").find('tr').each(function() {
	        ider = (this.id).match(/(\D+)(\d+)$/);
			ider = ider[2];
			if(($('#cantidad_pedidoarticulo'+ider).val())!=""){
				$sum=$sum+parseFloat($('#cantidad_pedidoarticulo'+ider).val());
				$sum = Number(Math.round($sum+'e2')+'e-2');
			}
			if(($('#preciotota_articulopedidomat'+ider).val())!=""){
				$suma=$suma+parseFloat($('#preciotota_articulopedidomat'+ider).val());
				$suma = Number(Math.round($suma+'e2')+'e-2');
			}
	    });
		$("#cantidad_total_pedidomaterial").autoNumeric('set',$sum);
		$("#total_precioarticulos_pedidomaterial").autoNumeric('set',$suma);
	}
	$('#cantidad_total_pedidomaterial').autoNumeric('init');
	$("#total_precioarticulos_pedidomaterial").autoNumeric('init');
	$("#fecha_pedidomaterial").inputmask("y-m-d");
	$("#fecha_pedidomaterial").datepicker({
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
	$(document).on('change','.descripcionpartidamaterialped',function(){
		var data = $(this).val();
        var parts = this.id.match(/(\D+)(\d+)$/);
        var concat = "#codig_articuloped" + parts[2];
        var calcutrer="#unidadpresentacion_artipedd" + parts[2];
        var concator = "#des_articulopedido" + parts[2];
		$(concator).val(data);
        $(concat).select2('val',data);
        if(($(concator).val())=="")
        	$(calcutrer).val("");
        else{
        	var cadenanombre = $(("#des_articulopedido"+parts[2]) +" option:selected").html();
			var last = cadenanombre.lastIndexOf(']');
			var firstc = cadenanombre.lastIndexOf('[');
			$(calcutrer).val(cadenanombre.substring((firstc+1), last));
        }
	});

	$(document).on('change','.descripclacificacionped',function(){
		var data = $(this).val();
        var parts = this.id.match(/(\D+)(\d+)$/);
        var concat = "#codig_articuloped" + parts[2];
        var calcutrer="#unidadpresentacion_artipedd" + parts[2];
        var concator = "#des_partidaarticulopedido" + parts[2];
		$(concator).val(data);
        $(concat).select2('val',data);
        if(($(this).val())=="")
        	$(calcutrer).val("");
        else{
        	var cadenanombre = $(("#des_articulopedido"+parts[2]) +" option:selected").html();
			var last = cadenanombre.lastIndexOf(']');
			var firstc = cadenanombre.lastIndexOf('[');
			$(calcutrer).val(cadenanombre.substring((firstc+1), last));
        }
	});

	$(document).on('change','.codigomaterialped',function(e){
		var data = $(this).val();
		var parts = this.id.match(/(\D+)(\d+)$/);
    	var concat = "#des_articulopedido" + parts[2];
    	var concator = "#des_partidaarticulopedido" + parts[2];
		$(concator).val(data);
		$(concat).val(data);
		var calcutrer="#unidadpresentacion_artipedd" + parts[2];
        if(($(concat).val())=="")
        	$(calcutrer).val("");
        else{
        	var cadenanombre = $((concat) +" option:selected").html();
			var last = cadenanombre.lastIndexOf(']');
			var firstc = cadenanombre.lastIndexOf('[');
			$(calcutrer).val(cadenanombre.substring((firstc+1), last));
        }
	});

	$(document).on('keyup','.cantidadarticulopedclas',function(e){
		$(this).autoNumeric('init');
		var $suma=0;
		$("#editar_pedidomaterialdetalletableart tbody input[for=cantiad_articulopedma]").each(function(){
			if(($(this).val()) != ""){
				$suma=$suma+parseFloat($(this).val());
				$suma = Number(Math.round($suma+'e2')+'e-2');
			}
		});
		$("#cantidad_total_pedidomaterial").autoNumeric('set',$suma);
	});

	$(document).on('keyup','.preimptotalarticumatrialped',function(e){
		$(this).autoNumeric('init');
  		if (e.which == 13){
  			var parts = this.id.match(/(\D+)(\d+)$/);
  			if((($("#prediouni_articulopedido" + parts[2]).val())!="") && (($("#cantidad_pedidoarticulo" + parts[2]).val())!="")){
  				var va = (parseFloat($("#cantidad_pedidoarticulo" + parts[2]).val()))*(parseFloat($("#prediouni_articulopedido" + parts[2]).val()));
  				$("#"+this.id).val(Number(Math.round(va+'e2')+'e-2'));
  			}	
    	}
    	var $sum=0;
		$("#editar_pedidomaterialdetalletableart tbody input[for=totalartoculoppedido_mate]").each(function(){
			if(($(this).val()) != ""){
				$sum=$sum+parseFloat($(this).val());
				$sum = Number(Math.round($sum+'e2')+'e-2');
			}
		});
		$("#total_precioarticulos_pedidomaterial").autoNumeric('set',$sum);
		return false;
	});

	$(document).on('keyup', '.preciounidadartiped', function(e){
		$(this).autoNumeric('init');
		if(e.which==13){
			var parts = this.id.match(/(\D+)(\d+)$/);
  			if(($("#des_articulopedido"+parts[2]).val())!=""){
  				$.get("../../getprecioartocupedimater/"+($("#des_articulopedido"+parts[2]).val()), function(respuesta){
	    			if(respuesta.success){
	    				$("#prediouni_articulopedido"+parts[2]).autoNumeric('set',respuesta.articl.precio_venta_movimientoarticulo);
	    				showSuccess('Precio Unitario Articulo Ultimo Ingreso: '+respuesta.articl.precio_venta_movimientoarticulo);
	    			}else
						showErrorMessage('NO SE ENCONTRO ARTICULO EN NUESTROS REGISTROS DE INGRESO');
				});
				return false;
  			}else
	    		showErrorMessage('SELECCIONE ARTICULO');
		}
		return false;
	});

    $("#formularioedicionpedidomaterial_almacenupdate").keypress(function(e){
        if (e.which == 13){
            return false;
        }
    });

    $("#formularioedicionpedidomaterial_almacenupdate").submit(function(e){
    	e.preventDefault();
    	$("#detalle_notapedido_pedidomaterial").val($("#clasenota_id option:selected").html());
		unpload_pedidomaterialredit();
		return false;
	});
});

function unpload_pedidomaterialredit(){
	var token = $("#token").val();
	var route = $('#formularioedicionpedidomaterial_almacenupdate');
	var url = route.attr('action');
	$.ajax({
	  headers: {'X-CSRF-TOKEN': token},
      url: url,
      data:new FormData($("#formularioedicionpedidomaterial_almacenupdate")[0]),
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
			$("#datos_materialeseditarpedidomaterial").find('tr').each(function() {
		        canti = (this.id).match(/(\D+)(\d+)$/);
				canti = canti[2];
				cadenanombre = $(("#des_articulopedido"+canti) +" option:selected").html();
				firstc = cadenanombre.lastIndexOf('[');
				cadenanombrepartida = $(("#des_partidaarticulopedido"+canti) +" option:selected").html();
				firstcpart = cadenanombrepartida.lastIndexOf('{');
		       	medcom = {"id_p": $('#butonminiped'+canti).val(),'gestion_detallepedidomaterial':llegada.gestion_pedidomaterial,'fecha_detallepedidomaterial':llegada.fecha_pedidomaterial,"pedido_material_id": llegada.id, "user_id": llegada.user_id,"actividad_id": llegada.actividad_id, "financiamiento_id": llegada.financiamiento_id,"clasenota_id":llegada.clasenota_id,"unidad_id":llegada.unidad_id, "articulo_id": $('#codig_articuloped'+canti).val(), "justificacion_detallepedidomaterial": llegada.justificacion_pedidomaterial, "detalle_notapedido_detallepedidomaterial": llegada.detalle_notapedido_pedidomaterial, "codigo_detallepedidomaterial": $(("#codig_articuloped"+canti) +" option:selected").html(), "cantidad_articulo_detallepedidomaterial": $("#cantidad_pedidoarticulo"+canti).val(), "unitario_precioarticulo_detallepedidomaterial": $("#prediouni_articulopedido"+canti).val(), "total_precioarticulo_detallepedidomaterial": $("#preciotota_articulopedidomat"+canti).val(), "nombre_detallepedidomaterial": cadenanombre.substring(0, firstc), "precentacion_detallepedidomaterial": $("#unidadpresentacion_artipedd"+canti).val(), "descripcionpartida_detallepedidomaterial": cadenanombrepartida.substring(0, firstcpart), "partida_id": (document.getElementById("des_partidaarticulopedido"+canti).options[document.getElementById("des_partidaarticulopedido"+canti).selectedIndex].title)}; 
				materialess[contador]=medcom;
				contador++;
		    });
			guardar_articulspedidoupdate(materialess);
	    }else
	    	showErrorMessage("Error al actualizar pedido revise por favor; (*datos introducidos en el formulario)!");          
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

function guardar_articulspedidoupdate(cadena){
	var token = $("#token").val();
	$.ajax({
		url:'../../actualizationdetalpedidomteretisumis',
		headers: {'X-CSRF-TOKEN': token},
		type: 'POST',
		dataType: 'json',
		data: {"data" : JSON.stringify(cadena)},
		cache: false,
		success:function(asient){
			if(asient.success) {
				showSuccess("PEDIDO DE MATERIAL ACTUALIZADO SATISFACTORIAMENTE....");
				document.location.href = '/almacen/pedidomaterial';
			}else
				showErrorMessage('Error al actualizar detalle de pedido!!!');
		},
		error: function() {
	       	showErrorMessage('Error al actualizar detalle de pedido!');
		}
	});
}

function complementandoeditformpedimaterialfun(matrlspedidodtll){
	var tabla = $("#editar_pedidomaterialdetalletableart");
	var tre = $("table tr#primertrpedidoarticulosedit1").eq(0).clone();
	var tr="";
	var cant='';
	for (i in matrlspedidodtll) {
		tr = (tabla).find("tbody tr:last");
		$(".codigomaterialped", tr).val(matrlspedidodtll[i].articulo_id);
		$(".descripclacificacionped", tr).val(matrlspedidodtll[i].articulo_id);
		$(".descripcionpartidamaterialped", tr).val(matrlspedidodtll[i].articulo_id);
		$(".uniprearpedi", tr).val(matrlspedidodtll[i].precentacion_detallepedidomaterial);
		$(".preciounidadartiped", tr).val(matrlspedidodtll[i].unitario_precioarticulo_detallepedidomaterial);
		$(".cantidadarticulopedclas", tr).val(matrlspedidodtll[i].cantidad_articulo_detallepedidomaterial);
		$(".preimptotalarticumatrialped", tr).val(matrlspedidodtll[i].total_precioarticulo_detallepedidomaterial);
		$(".clsEliminarFilaarticulopedido", tr).val(matrlspedidodtll[i].id);
		tr = tre.clone();
		cant = $(tabla).find("tbody tr:last").eq(0).clone();
		cant = (cant.attr('id')).match(/(\D+)(\d+)$/);
		cant = ++cant[2];
	   	tr.attr('id', 'primertrpedidoarticulosedit' + cant);
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