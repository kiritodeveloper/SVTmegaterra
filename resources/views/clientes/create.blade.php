@extends('layouts.app')
@section('title','Crear Clientes')

<head>
	<!--
		Tomar una fotografía y guardarla en un archivo v3
	    @date 2018-10-22
	    @author parzibyte
	    @web parzibyte.me/blog
	-->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<style>
            #video-container {
                position: relative;
            }
            
            #overlay {
                position: absolute;
                width: 320px;
                height: 240px;
                left: 0;
                top: 0;
                pointer-events: none;
                background-image: url('data:image/svg+xml...');
                background-position: top right, top left, bottom left, bottom right;
                background-repeat: no-repeat;
            }
	</style>
</head>


@section('content')

<div class="col-md-6">
	<div>
		<select name="listaDeDispositivos" id="listaDeDispositivos"></select>
		<button id="boton" class="btn btn-round btn-success">Tomar foto</button>
		<p id="estado"></p>
	</div>
	<br>
    {{--  <textarea name="documento" rows="0.0" id="resultado" cols="50"  ></textarea>  --}}
    <div id="video-container">
        <video width="320" height="240" muted="muted" id="video"></video>
    </div>
	<canvas id="canvas" style="display: none;"></canvas>
</div>
<script src="{{asset('js/script.js')}}"></script>
<div class="col-md-6">
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
        <form method="POST" action="{{ url('cli/crear') }}" >
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
            </div>
            <input  id="inp" type='file'>
            <button type="submit" class="btn btn-round btn-success">Registrar Cliente</button>
            <textarea name="avatar" rows="0.0" id="b64" cols="50"  style="visibility:hidden"></textarea>
            <textarea name="avatar" rows="0.0" id="resultado" cols="50" style="visibility:hidden" ></textarea>
            <img id="img" height="150" style="visibility:hidden">
            
        </form>
        </div>
    </div>
</div>

<script>
        function readFile() {
      
          if (this.files && this.files[0]) {
            
            var FR= new FileReader();
            
            FR.addEventListener("load", function(e) {
              document.getElementById("img").src       = e.target.result;
              document.getElementById("b64").innerHTML = e.target.result;
            }); 
            
            FR.readAsDataURL( this.files[0] );
          }
        }
        
        document.getElementById("inp").addEventListener("change", readFile);
    </script>

@endsection