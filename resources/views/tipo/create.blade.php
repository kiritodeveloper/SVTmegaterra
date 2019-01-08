@extends('layouts.app')
@section('title','Crear Clientes')
@section('content')
<div>
    <div class="x_panel">
      <div class="x_title">
        <form method="POST" action="{{ url('/tipo/crear') }}" >
            {{ csrf_field() }}
            <div class="form-group">
                <label for="nombre">NOMBRE DEL PROYECTO</label>
                <input type="text" class="form-control" required name="nombre" id="nombre" placeholder="nombres" value="{{ old('nombre') }}">
            </div>           
            <input type="color" name="color" value="#ff0000">
            <br>
            <br>
            <button type="submit" class="btn btn-round btn-success">Registrar proyecto</button>
        </form>
        </div>
    </div>
</div>


@endsection