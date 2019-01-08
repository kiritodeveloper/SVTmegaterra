@extends('layouts.app')
@section('title','clientes')
@section('content')
@forelse ($clientes as $cliente)
<div class="row">
        <div class="col-lg-3 col-sm-6">
    
                <div class="card hovercard">
                    <div class="cardheader">

                    </div>
                    <div class="avatar">
                        <img class="result" src="{{ $cliente->avatar }}">
                    </div>
                    <div class="info">
                        <div class="title">
                            <a target="_blank" href="#"></a>
                        </div>
                        <legend style="color:white">{{ $cliente->nombre }} {{ $cliente->apellidos }}</legend>

                        <div class="x_panel" style="height: auto;">
                                <div class="x_title">
                                  <ul class="nav navbar-right panel_toolbox">
                                    <li><a class="collapse-link"><i class="fa fa fa-plus"></i></a>
                                    </li>
                                  </ul>
                                  <div class="clearfix"></div>
                                </div>
                                <div class="x_content" style="display: none;">
                                                            
                                    <div class="desc">CI: {{ $cliente->ci }}</div>
                                    <div class="desc">GENERO: {{ $cliente->genero }}</div>
                                    <div class="desc">NACIDO EL: {{ $cliente->fecha_nacimiento }}</div>
                                    <div class="desc">ESTADO CIVIL:{{ $cliente->estado_civil }}</div>
                                    <div class="desc">DIRECCION:{{ $cliente->direccion }}</div>
                                    <div class="desc">TELEFONO:{{ $cliente->telefono }}</div>
                                </div>

                              </div>
                    <div class="bottom">
                            <form action="{{ route('clientes.destroy', $cliente) }}" method="POST">
                                    {{ csrf_field() }}
                                    {{ method_field('DELETE') }}
                                    <button type="submit" class="btn btn-round btn-danger"><span class="glyphicon glyphicon-trash"></span></button>
                                    <a href="{{ route('clientes.edit', $cliente) }}" class="btn btn-round btn-success"><span class="glyphicon glyphicon-edit"></span></a>
                                </form>                           
                    </div>
                </div>
    
            </div>
    
      </div>
@empty

@endforelse
@endsection