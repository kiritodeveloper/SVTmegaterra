@extends('layouts.app')

@push("style")
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
            label{
                color:#000;
            }
    </style>
@endpush

@section('title','Editar Clientes')


@section('content')


<div class="col-md-12">
    <div class="row">   
       <form method="POST" action="{{ url('cli/{$cliente->id}') }}">
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
                                <option value="soltero">soltero</option>
                                <option value="casado">casado</option>
                                <option value="divorciado">divorciado</option>
                                <option value="viudo">viudo</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-round btn-success">Registrar Cliente</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">  
                    <div class="row">   
                        <div class="col-md-12"> 
                            <center>
                            <label> Imagen de Camara</label>
                                <div id="video-container">
                                    <video width="200px" height="200px" muted="muted" id="video"></video>
                                </div>
                            </center>    
                        </div>
                    </div>
                    <div class="row">   
                        <div class="col-md-12"> 
                            <center>
                            <label> Imagen de Cargada</label>
                            <br>    
                                <img id="img" src="{{asset('images/img.jpg')}}" width="150px" height="150px">        
                            </center>    
                        </div>
                    </div>
                <div>
                    <select name="listaDeDispositivos" id="listaDeDispositivos"></select>
                    <button id="boton" class="btn btn-round btn-success">Tomar foto</button>
                    <p id="estado"></p>
                    <input  id="inp" type='file'>
                </div>
                <br>
                <canvas id="canvas" style="display: none;"></canvas>
                <textarea name="avatar" id="b64"   style="visibility:hidden"></textarea>
            </div>
            </form>
    </div>
</div>

<script src="{{asset('js/script.js')}}"></script>
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

