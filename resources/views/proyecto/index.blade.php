@extends('layouts.app')
@section('title','Proyectos')
@section('content')
@foreach ($proyectos as $proyecto )
    <div class="container">
            <div class="well well-sm">
              <h3><strong>{{ $proyecto->nombre }}</strong></h3>
            </div>
            
            <div class="row">
              <div class="col-md-7">
                  <img class="result" width="630" height="300" src="{{ $proyecto->imagen }}">
              </div>
        
              <div class="col-md-5">
                    <h4><strong>Descripcion Del Proyecto </strong></h4>
                  <div class="well well-sm">
                        <h5><strong>{{ $proyecto->descripcion }}</strong></h5>
                    </div>
              </div>
            </div>
          </div>
@endforeach
@endsection