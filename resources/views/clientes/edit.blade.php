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
        <form method="POST" action="{{ url('cli/{$cliente->id}') }}" >
            {{ method_field('PUT') }}
            {{ csrf_field() }}
            <div class="form-group" >
                <label for="ci">CI:</label>
                <input type="text" class="form-control" name="ci" id="ci" placeholder="ci" value="{{ old('ci') }}">
            </div>
            <div class="form-group">
                <label for="nombre">NOMBRES</label>
                <input type="text" class="form-control" name="nombre" id="nombre" placeholder="nombres" value="{{ old('nombre') }}">
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
            <button type="submit" class="btn btn-round btn-success">Actulizar Cliente</button>
        </form>
        </div>
    </div>
</div>

@endsection