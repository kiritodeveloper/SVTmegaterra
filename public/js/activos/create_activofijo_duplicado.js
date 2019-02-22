$(document).ready(function(){
  var previousouseasasdrtyty;
  $('#costo_inicial_activofijo').autoNumeric('init');
  $('#deprecia_acuinicial_activofijo').autoNumeric('init');
  $("#fecha_incorporacion_activofijo").inputmask("y-m-d");
  $("#fecha_incorporacion_activofijo").datepicker({
    changeMonth: true,
    changeYear: true,
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
  $("#grupo_contable_id").change(function(e){
    if((($(this).val())!=null) && (($(this).val())!="") && (($(this).val())!=0)){
      $.get("../getauxiliarconntableactivos/"+($(this).val()), function(data){
        if (data.success){
          document.getElementById("depreciar_activofijo").checked = (data.data.depreciar_grupocontable);
          document.getElementById("actualizar_activofijo").checked = (data.data.actualizar_grupocontable);
          $("#vidautil_activofijo").val(data.data.vidautil_grupocontable);
          $("#coeficiente_depreciacion_activofijo").val((Number(Math.round((data.data.coeficiente_depreciacion)+'e2')+'e-2')));
          $("#auxiliar_contable_id").empty();
          $("#auxiliar_contable_id").append("<option value>Seleccione Auxiliar Contable</option>");
          $(data.date).each(function(key, value){
            $("#auxiliar_contable_id").append("<option value='"+value.id+"'> "+value.nombre_auxiliarcontable+"</option>");
          });
        }else{
          document.getElementById("depreciar_activofijo").checked = false;
          document.getElementById("actualizar_activofijo").checked = false;
          $("#vidautil_activofijo").val(0);
          $("#coeficiente_depreciacion_activofijo").val((Number(Math.round(0+'e2')+'e-2')));
          $("#auxiliar_contable_id").empty();
          $("#auxiliar_contable_id").append("<option value>Seleccione Auxiliar Contable</option>");
          showErrorMessage("NO SE ENCONTRO GRUPO CONTABLE EN NUESTROS REGISTROS!");
        }
      });
    }else{
      document.getElementById("depreciar_activofijo").checked = false;
      document.getElementById("actualizar_activofijo").checked = false;
      $("#vidautil_activofijo").val(0);
      $("#coeficiente_depreciacion_activofijo").val((Number(Math.round(0+'e2')+'e-2')));
      $("#auxiliar_contable_id").empty();
      $("#auxiliar_contable_id").append("<option value>Seleccione Auxiliar Contable</option>");
    }
  });

  $("#unidad_id").change(function(e){
    if((($(this).val())!=0) && (($(this).val())!="") && ($(this).val()!=null)){
      $.get("../oficinasactivosfijosregistergeter/"+($(this).val()), function(data){
        if (data.success){
          $("#cargoencargado_activofijo").val('');
          $("#oficina_id").empty();
          $("#oficina_id").append("<option value='0'>Seleccione Oficina o Area (no obligatorio)</option>");
          $(data.data).each(function(key, value){
            $("#oficina_id").append("<option value='"+value.id+"'> "+value.nombre_unidad+"</option>");
          });
          $("#responsable_id").empty();
          $("#responsable_id").append("<option value> </option>");
          $(data.dator).each(function(key, value){
            $("#responsable_id").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
          });
        }else{
          $("#cargoencargado_activofijo").val('');
          $("#oficina_id").empty();
          $("#oficina_id").append("<option value='0'>Seleccione Oficina o Area (no obligatorio)</option>");
          showErrorMessage("NO SE ENCONTRO OFICINAS DE ACUERDO A LA UNIDAD O CENTRO!");
          $("#responsable_id").empty();
          $("#responsable_id").append("<option value> </option>");
          $(data.dator).each(function(key, value){
            $("#responsable_id").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
          });
        }
      });
    }else{
      $("#cargoencargado_activofijo").val('');
      $("#responsable_id").empty();
      $("#responsable_id").append("<option value> </option>");
      $("#oficina_id").empty();
      $("#oficina_id").append("<option value='0'>Seleccione Oficina o Area (no obligatorio)</option>");
    }
  });

  $("#oficina_id").change(function(e){
    if(($(this).val())!=0){
      $.get("../getencargforoficeopencounts/"+($(this).val()), function(data){
        if (data.success){
          $("#responsable_id").empty();
          $("#responsable_id").append("<option value> </option>");
          $("#cargoencargado_activofijo").val('');
          $(data.data).each(function(key, value){
            $("#responsable_id").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
          });
        }else{
          showErrorMessage("NO SE ENCONTRO FUNCIONARIOS DE ACUERDO A LA OFICINA O AREA SELECCIONADA!");
          $("#responsable_id").empty();
          $("#responsable_id").append("<option value> </option>");
          $("#cargoencargado_activofijo").val('');
        }
      });
    }else{
      if(($("#unidad_id").val()!=0) && ($("#unidad_id").val()!=null) && ($("#unidad_id").val()!="")){
        $.get("../getfuncionarioofcerunivl/"+($("#unidad_id").val()), function(data){
          if (data.success){
            $("#responsable_id").empty();
            $("#responsable_id").append("<option value> </option>");
            $("#cargoencargado_activofijo").val('');
            $(data.data).each(function(key, value){
              $("#responsable_id").append("<option value='"+value.id+"'> "+value.nombre_usuario+' '+value.apellido_usuario_paterno+' '+value.apellido_usuario_materno+"</option>");
            });
          }else{
            $("#responsable_id").empty();
            $("#responsable_id").append("<option value> </option>");
            $("#cargoencargado_activofijo").val('');
          }
        });
      }else{
        $("#responsable_id").empty();
        $("#responsable_id").append("<option value> </option>");
        $("#cargoencargado_activofijo").val('');
      }
    }
  });
  $("#responsable_id").change(function(e){
    if((($(this).val())!='null') && (($(this).val())!=null) && (($(this).val())!=0) && (($(this).val())!='')){
      $.get("../onefuncionarioencargadogetopen/"+($(this).val()), function(data){
        if (data.success)
          $("#cargoencargado_activofijo").val(data.data.cargo_usuario);
        else{
          showErrorMessage("NO SE ENCONTRO FUNCIONARIO EN NUESTROS REGISTROS");
          $("#cargoencargado_activofijo").val('');
        }
      });
    }else
      $("#cargoencargado_activofijo").val('');
  });

  $("#fecha_incorporacion_activofijo").on('focus', function () {
    previousouseasasdrtyty = (this.value);
  }).change(function() {
    var datevalareaddass = (this.value);
    if(((parseFloat((datevalareaddass).substring(0,4))) == (($("#gestionactualizadetead_activosfijossistemaactualizatedformhhh").html())))&&((datevalareaddass)<=($("#fechaactual_activofijo").val()))){
      $.get("../onecotizaciontipocamvioufvstor/"+(datevalareaddass),function(response){
        if(response.success)
          $("#indiceufv_activofijo").val(response.data.c_ufv);
        else{
          showErrorMessage("REGISTRE TIPO DE CAMBIO DE LA FECHA QUE INTENTA REGISTRAR => ACTIVO FIJO");
          $("#fecha_incorporacion_activofijo").val(previousouseasasdrtyty);
        }
      });
    }else{
      $("#fecha_incorporacion_activofijo").val(previousouseasasdrtyty);
      showErrorMessage("FECHA TIENE QUE SER DE LA GESTION Y MENOR O IGUAL A LA FECHA ACTUAL");
      return false;
    }
    return false;
  });
  $("#depreciar_activofijo").click(function(){
    return false;
  });
  $("#actualizar_activofijo").click(function(){
    return false;
  });
  $("#formularioregistrobien_activofijosmetopost").keypress(function(e){
    if(e.which == 13){
      return false;
    }
  });
  $('#codigo_principal_activofijo').keydown(function(e){
    if((e.which == 13) && ($(this).val()!='') && ($(this).val()!=null) && ($(this).val()!=0)){
      $.get("../verificarcodigoactivofijogetbien/"+($(this).val()), function(respuestaget){
        if(respuestaget.success)
          showSuccess("CODIGO DE ACTIVO FIJO DISPONIBLE....");
        else
          showErrorMessage("CODIGO DE ACTIVO FIJO ESTA REGISTRADO INSERTE OTRO POR FAVOR....");
      });
    }else{
      if(!(e.key).match(/^[A-Za-z0-9\,\_\:\-\(\)\;\.\ñ\Ñ]+$/))
        e.preventDefault();
    }
  });
  $("#formularioregistrobien_activofijosmetopost").submit(function(e){
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