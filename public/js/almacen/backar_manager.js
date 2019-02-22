$(document).ready(function(){
	$("#sacar_backkk").click(function(){
		$('#cargando_backk').modal('toggle'); 
		$('#cargando_backk').modal('show'); 	
		$.get("FullBackup",function(response){
			if(response.success){
				$('#cargando_backk').modal('toggle'); 
				showSuccess(response.filenamen+" BACKUP SE GENERO SATISFACTORIAMENTE Y ESTA POSICIONADA AL FINAL DE LA LISTA!!!");
				document.location.href = '/almacen/backup';
        	}else{
        		$('#cargando_backk').modal('toggle'); 
        		showErrorMessage("ERROR AL GENERAR BACKUP!!!!!!!");
        	} 
		});
		return false; 
	});

	$(document).on('click','.modalasdas',function(){
		var r = confirm("ESTA SEGURO QUE DESEA RESTABLECER LA BASE DE DATOS DE ACUERDO A ESTA COPIA DE SEGURIDAD!!!!!!!!!!!");
		if(r == true){
			$('#restart_backk').modal('toggle');
			$('#restart_backk').modal('show');
		}else
			return false;
	});	
});