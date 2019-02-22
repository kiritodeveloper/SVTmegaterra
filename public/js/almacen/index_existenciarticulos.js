$(document).ready(function(){
	$('#datatable-listasaldosexistenciarticulos').DataTable();
	$('.visualisar_kardexarticulossaldoeis').click(function(e){
		e.preventDefault();
    	if((this.id)!=""){
    		$('#listaarticulos_kardexsaldomodalwindowsemergent').modal('toggle');
			$('#listaarticulos_kardexsaldomodalwindowsemergent').modal('show');
    		var tablaDat = $("#tablalistaarticulos_saldosexistenciasmaterialconsumershowwindowsemergent");
    		$("#corpslistasaldoexistencipedid").empty();
	        $.get("saldoarticulo/"+(this.id)+"_"+($("#gestionactualizadetead_almacenessusdgssistemaactualizatedformhhh").html()),function(response){
	        	if(response.success){
	        		var deb=0;
		        	$(response.dator).each(function(key, value){
		        		deb=parseFloat(value.saldo_movimientoarticulo)+deb;
						tablaDat.append("<tr><td style='min-width: 120px;' class='text-center'>"+value.clase_movimientoarticulo+"</td><td style='min-width: 100px;' class='text-center'>"+value.fecha_movimientoarticulo+"</td><td style='min-width: 300px;' class='text-center'>"+value.detalle_destino_movimientoarticulo+"</td><td style='min-width: 120px;' class='text-right'>"+(format(parseFloat(value.cantidad_movimientoarticulo).toFixed(2)))+"</td><td style='min-width: 105px;' class='text-right'>"+format(deb.toFixed(2))+"</td></tr>");
					});
	        	}else{
	        		var message = $('<div class="alert alert-danger alert-dismissible" style="display: none;">');
					var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
					var response = $('<strong>No se encontro articulo en nuetros registros!!</strong>');
					message.append(close);
					message.append(response);
					message.appendTo($('#headingsaldoitemptitlemodlemergenciwindows')).fadeIn(300).delay(2000).fadeOut(800);
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