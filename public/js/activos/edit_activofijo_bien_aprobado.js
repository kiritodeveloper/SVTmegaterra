$(document).ready(function(){
  $('#costo_inicial_activofijo').autoNumeric('init');
  $('#deprecia_acuinicial_activofijo').autoNumeric('init');
  $("#formularioedicionbien_activofijosmetopost").keypress(function(e){
      if(e.which == 13){
        return false;
      }
  });
  $("#formularioedicionbien_activofijosmetopost").submit(function(e){
    $('input, select').prop('disabled', false);
    $("#unidadcentro_seleecionado_activofijo").val($("#unidad_id option:selected").html());
    $("#oficinaarea_seleecionado_activofijo").val($("#oficina_id option:selected").html());
    $("#responsableseleccionado_seleecionado_activofijo").val($("#responsable_id option:selected").html());
    $("#grupocontable_seleecionado_activofijo").val($("#grupo_contable_id option:selected").html());
    $("#auxiliarcontable_seleecionado_activofijo").val($("#auxiliar_contable_id option:selected").html());
    $("#organismofinanciador_seleecionado_activofijo").val($("#organismo_financiador_id option:selected").html());
  });
});
$(document).on('keydown','#codigo_adicional_activofijo',function(e){
  if(!(e.key).match(/^[A-Za-z0-9\,\_\"\+\:\-\(\)\;\|\.\%\º\ñ\Ñ\ ]+$/)){
    e.preventDefault();
  }
});