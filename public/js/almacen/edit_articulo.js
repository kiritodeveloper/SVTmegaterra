$(document).ready(function(){
	validator.message['date'] = 'no es una cita real';
  	$('form')
	    .on('blur', 'input[required], input.optional, select.required', validator.checkField)
	    .on('change', 'select.required', validator.checkField)
	    .on('keypress', 'input[required][pattern]', validator.keypress);

  	$('form').submit(function(e) {
	    e.preventDefault();
	    var submit = true;
	    if (!validator.checkAll($(this))) {
	      submit = false;
	    }
	    if (submit){
	    	$("#precentacion_articulo").val($("#umedida_id option:selected").html());
	      $("#descripcion_partida").val($("#partida_id option:selected").html());
	      this.submit();
	    }
	    return false;
  	});

	$("#codigo_articulo").prop('readOnly',true);

	$('#viewcodarticuloactdesv').on('click',function(){
	    if ($(this).prop('checked'))
	       $("#codigo_articulo").prop('readOnly',false);
	    else
	       $("#codigo_articulo").prop('readOnly',true);
   	});

	$('#partida_id').change(function() {
   		var data = $(this).val();
      	$.get("../../getcodingpartida/"+data+"",function(response){
      		$("#codigo_articulo").val(response);
	   	});
  	});

  	$(document).on('keydown','#nombre_corto',function(e){
		if(e.which == 13){
			var valr = $("#nombre_articulo").val();
			var conca="";
			if(valr!=null){
				var arreglodescrip = valr.split(" ");
				arreglodescrip.forEach(function(element) {
				  conca=conca+""+((""+element).substring(0,1));
				});
				$("#nombre_corto").val(conca);
			}else
				$("#nombre_corto").val(null);
			return false;
		}
	});
});