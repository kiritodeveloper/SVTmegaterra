$(document).ready(function(){
	$('#datatable_listanotasentradagest').DataTable();
	$('.visualisar_formpedidonotaentrada').click(function(e){
		e.preventDefault();
    	if((this.id)!=""){
	        $.get("showpedidodetalarticulodigt/"+(this.id)+"",function(response){
	        	if(response.success){
	        		$('#show_ventanaemergente_pedidomaterialmodal').modal('toggle');
					$('#show_ventanaemergente_pedidomaterialmodal').modal('show');
	        		var firstpd=0;
	        		$("#financiamiento_id_showemergentmodalpedidomaterial").val('');
					$('#actividad_id_showemergentmodalpedidomaterial').val('');
	        		$("#funcionrio_sol_showemergentmodalpedidomaterial").val(response.datar.detalle_usuario_pedidomaterial);
	        		$("#unidddd_sol_showemergentmodalpedidomaterial").val(response.datar.unidadorga.nombre_unidad);
	        		$("#fechapedido_formpedidofechingsowviewpedidore").html("FECHA PEDIDO: "+response.datar.created_at);
	        		$('#clasenota_id_showemergentmodalpedidomaterial').val(response.datar.detalle_notapedido_pedidomaterial);
	        		if(response.datar.financiamientos!=null)
						$("#financiamiento_id_showemergentmodalpedidomaterial").val(response.datar.financiamientos.nombre_fuentefinanciamiento);
					if(response.datar.actividads!=null)
						$('#actividad_id_showemergentmodalpedidomaterial').val(response.datar.actividads.objetivo);
					$("#cantidadTotalPedidomaterial_showwindowsemergent").val(format(parseFloat(response.datar.cantidad_total_pedidomaterial).toFixed(2)));
					$("#totalPrecioArticulosPedidomaterial_showwindowsemergent").val(format(parseFloat(response.datar.total_precioarticulos_pedidomaterial).toFixed(2)));
					$("#justificacion_pedidomaterial_showemergentmodalpedidomaterial").val(response.datar.justificacion_pedidomaterial);
	        		var tablaDat = $("#tablalistaarticulos_pedidomaterialshowwindowsemergent");
	        		$("#cuerpolistadohowwindows_articulospedidoenformulario").empty();
	        		for(i in response.deta){
	        			firstpd = i.indexOf('-');
	        			tablaDat.append("<tr><td style='min-width: 80px;' class='text-center'>"+i.substring(0,firstpd)+"</td><td style='min-width: 350px;' class='text-center'>"+i.substring(firstpd+1)+"</td><td style='min-width: 150px;' class='text-center'></td><td style='min-width: 120px;' class='text-right'></td><td style='min-width: 120px;' class='text-right'></td><td style='min-width: 120px;' class='text-right'></td></tr>");
			        	$(response.deta[i]).each(function(key, value){
							tablaDat.append("<tr><td style='min-width: 80px;' class='text-center'>"+value.codigo_detallepedidomaterial+"</td><td style='min-width: 350px;' class='text-center'>"+value.nombre_detallepedidomaterial+"</td><td style='min-width: 150px;' class='text-center'>"+value.precentacion_detallepedidomaterial+"</td><td style='min-width: 120px;' class='text-right'>"+value.cantidad_articulo_detallepedidomaterial+"</td><td style='min-width: 120px;' class='text-right'>"+(format(parseFloat(value.unitario_precioarticulo_detallepedidomaterial).toFixed(2)))+"</td><td style='min-width: 120px;' class='text-right'>"+(format(parseFloat(value.total_precioarticulo_detallepedidomaterial).toFixed(2)))+"</td></tr>");
						});
					}
	        	}else{
	        		var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
					var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
					var response = $('<strong>No existe el numero de pedido en nuetros registros!!</strong>');
					message.append(close);
					message.append(response);
					message.appendTo($('#dup_encabezaddo')).fadeIn(300).delay(2000).fadeOut(800);
					return false;
	        	}
			}); 
			return false;
		}
		return false;
	});
});

function format(num){
    var n = num.toString(), p = n.indexOf('.');
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
        return p<0 || i<p ? ($0+',') : $0;
    });
}