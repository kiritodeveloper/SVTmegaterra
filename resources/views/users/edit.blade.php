@extends('layouts.app')

@section('title', "Editar Usuario")

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

    <form method="POST" action="{{ url("usuarios/{$user->id}") }}">
        {{ method_field('PUT') }}
        {{ csrf_field() }}
        <div class="form-group">
                <label for="name">Nombre:</label>
                <input type="text" class="form-control" name="name" id="name" placeholder="Nombre Completo" value="{{ old('name') }}">
            </div>

            <div class="form-group">
                <label for="email">Correo electrónico:</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="admin@admin.com" value="{{ old('email') }}">
            </div>

            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" class="form-control" name="password" id="password" placeholder="Mayor a 6 caracteres">
            </div>

        <button type="submit">Actualizar usuario</button>
    </form>
          </div>
        </div>
</div>

@endsection