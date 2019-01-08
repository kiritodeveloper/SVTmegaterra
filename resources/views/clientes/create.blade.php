@extends('layouts.app')
@section('title','Crear Clientes')
@section('content')
<div class="col-md-6 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
            @if ($errors->any())
                <div class="alert alert-danger">
                    <h6>Por favor corrige los errores debajo:</h6>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        <form method="POST" action="{{ url('cli/crear') }}" enctype="multipart/form-data">
            {{ csrf_field() }}
            <div class="form-group" >
                <label for="ci">CI:</label>
                <input type="text" class="form-control" required name="ci" id="ci" placeholder="ci" value="{{ old('ci') }}">
            </div>
            <div class="form-group">
                <label for="nombre">NOMBRES</label>
                <input type="text" class="form-control" required name="nombre" id="nombre" placeholder="nombres" value="{{ old('nombre') }}">
            </div>
            <div class="form-group">
                <label for="apellidos">APELLIDOS</label>
                <input type="text" class="form-control" name="apellidos" id="apellidos" placeholder="apellidos" value="{{ old('apellidos') }}">
            </div>
            <div class="form-group">
                <label for="direccion">DIRECCION</label>
                <input type="text" class="form-control" name="direccion" id="direccion" placeholder="direccion" value="{{ old('direccion') }}">
            </div>
            <div class="form-group">
                <label for="telefono">TELEFONO</label>
                <input type="text" class="form-control" name="telefono" id="telefono" placeholder="telefono" value="{{ old('telefono') }}">
            </div>
            <div class="form-group">
                <label for="genero">SEXO</label>
                <select name="genero">
                    <option value="masculino">masculino</option>
                    <option value="femenino">femenino</option>
                </select>
                <label for="genero">F/N</label>
                <input type="date" name="fecha_nacimiento">
                <label for="estado_civil">SEXO</label>
                <select name="estado_civil">
                    <option value="solter@">solter@</option>
                    <option value="casad@">casad@</option>
                    <option value="divorciad@">divorciad@</option>
                    <option value="viud@">viud@</option>
                </select>
                <div class="ejemplo-linea">
                    <input type="file" name="avatar"  id="avatar" onchange="leerArchivo()" /><br />
                    <textarea rows="10" style="width: 98%" class="codigo" id="contenido-archivo"></textarea>
                  </div>
            </div>

            <button type="submit" class="btn btn-round btn-success">Registrar Cliente</button>
        </form>
        </div>
    </div>
</div>
  <script>
    function leerArchivo(){
     var inpute = document.getElementById("avatar");
      if (inpute.files.length > 0){
           var archivo = inpute.files[0];
           var lector = new FileReader();
           
           lector.addEventListener("load",function(evento){
               document.getElementById("avatar_para_js").value=evento.target.result;
            }, false);
           lector.readAsDataURL(archivo);
        }
  }
  </script>
@endsection