@extends('layouts.app')
@section('title','Crear Clientes')
@section('content')
<div class="col-md-6 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <form method="POST" action="{{ url('/proyecto/crear') }}" >
            {{ csrf_field() }}
            <div class="form-group">
                <label for="nombre">NOMBRE DEL PROYECTO</label>
                <input type="text" class="form-control" required name="nombre" id="nombre" placeholder="nombres" value="{{ old('nombre') }}">
            </div>
            <textarea name="descripcion" rows="10" > descripcion</textarea>
            <input  id="inp" type='file'>
            <img id="img" height="150" >
            <button type="submit" class="btn btn-round btn-success">Registrar proyecto</button>
            <textarea name="imagen" rows="0.0" id="b64" cols="50"  style="visibility:hidden"></textarea>
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