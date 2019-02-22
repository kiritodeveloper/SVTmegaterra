$(document).ready(function(){
  $(document).on('keydown','#sigla_clasenota',function(e){
		if (e.which == 13) {
			var valr = $("#descripcion_clasenota").val();
			var conca="";
			if(valr!=null){
				var arreglodescrip = valr.split(" ");
				arreglodescrip.forEach(function(element) {
				  conca=conca+""+((""+element).substring(0,1));
				});
				$("#sigla_clasenota").val(conca);
			}else
				$("#sigla_clasenota").val(null);
			return false;
		}
	});
});