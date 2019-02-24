@extends('layout::index')

@section('title', 'Roles')

@section('content')
<div class="col col-lg-12 col-md-12 col-xs-12">
    @component('component::card', ['title' => 'FORMULARIO DE REGISTRO - NUEVO ROL'])
        {{ Form::open(['route' => 'roles.store', 'method' => 'post', 'role' => 'form']) }}
            @component('component::errors')@endcomponent
            <div class="col col-md-6">
                <div class="form-group">
                    {{ Form::label('name', 'NOMBRE') }}
                    {{ Form::text('name', old('name'), ['class' => 'form-control', 'required' => 'true', 'minlength' => '3', 'maxlength' => '150']) }}
                </div>
            </div>
            <div class="col col-md-6">
                <div class="form-group">
                    {{ Form::label('description', 'DESCRIPCION') }}
                    {{ Form::textarea('description', old('description'), ['class' => 'form-control', 'maxlength' => '250', 'style' => 'max-height:100px']) }}
                </div>
            </div>
            <div class="col col-md-12">
                {{ btn_cancel('roles.index') }} {{ btn_save() }}
            </div>
        {{ Form::close() }}
    @endcomponent
</div>
@endsection