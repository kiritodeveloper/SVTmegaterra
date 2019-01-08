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
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3736489.7218514383!2d90.21589792292741!3d23.857125486636733!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1506502314230" width="100%" height="315" frameborder="0" style="border:0" allowfullscreen></iframe>
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