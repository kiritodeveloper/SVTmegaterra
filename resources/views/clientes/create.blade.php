@extends('layouts.app')
@section('title','clientes')
@section('content')

<form method="POST" action="{{ url('clientes') }}">
    {{ csrf_field() }}
    <input type="text" name="ci">
    <input type="text" name="nombre">
    <input type="text" name="apellidos">
    <input type="text" name="apellidos">
    <select name="genero">
        <option value="masculino">masculino</option>
        <option value="femenino">femenino</option>
    </select>
    <input type="date" name="fecha_nacimiento">
    <input type="text" name="estado_civil">
    <input type="text" name="direccion">
    <input type="text" name="telefono">
    <button type="submit">registrar</button>
</form>

@endsection