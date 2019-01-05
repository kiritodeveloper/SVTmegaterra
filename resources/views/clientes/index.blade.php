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
                        <img alt="" src="images/img.jpg">
                    </div>
                    <div class="info">
                        <div class="title">
                            <a target="_blank" href="#"></a>
                        </div>
                        <legend style="color:white">{{ $cliente->nombre }} {{ $cliente->apellidos }}</legend>

                        <div class="x_panel">
                                <div class="x_title">
                                  <ul class="nav navbar-right panel_toolbox">
                                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                    </li>
                                  </ul>
                                  <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                                            
                                    <div class="desc">CI: {{ $cliente->ci }}</div>
                                    <div class="desc">GENERO: {{ $cliente->genero }}</div>
                                    <div class="desc">NACIDO EL {{ $cliente->fecha_nacimiento }}</div>
                                    <div class="desc">ESTADO CIVIL{{ $cliente->estado_civil }}</div>
                                    <div class="desc">DIRECCION{{ $cliente->direccion }}</div>
                                    <div class="desc">TELEFONO{{ $cliente->telefono }}</div>
                                </div>
                              </div>
                    <div class="bottom">

                    </div>
                </div>
    
            </div>
    
      </div>
    
@empty

<div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
      
                  <div class="card hovercard">
                      <div class="cardheader">
      
                      </div>
                      <div class="avatar">
                          <img alt="" src="img/clientes/ri.jpg">
                      </div>
                      <div class="info">
                          <div class="title">
                              <a target="_blank" href="https://scripteden.com/">Ricardo Rojas Cruz</a>
                          </div>
                          <div class="desc">pueden tus ideas cambiar al mundo</div>
                          <div class="desc">si ellos pueden por que tu no</div>
                          <div class="desc">adelante y nunca mires atras</div>
                      </div>
                      <div class="bottom">
                          <a class="btn btn-primary btn-twitter btn-sm" target="_blank" rel="noopener noreferrer" href="https://twitter.com/webmaniac">
                              <i class="fa fa-twitter"></i>
                          </a>
                          <a class="btn btn-info btn-sm" target="_blank" rel="noopener noreferrer"
                             href="https://plus.google.com/+ahmshahnuralam">
                              <i class="fa fa-commenting" aria-hidden="true"></i>
      
                          </a>
                          <a class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer"
                             href="https://www.facebook.com/ricky.rojasdelacruz">
                              <i class="fa fa-facebook"></i>
                          </a>
                          <a class="btn btn-warning btn-sm" target="_blank" rel="noopener noreferrer" href="https://plus.google.com/shahnuralam">
                              <i class="fa fa-linkedin"></i>
                          </a>
                          <a class="btn btn-success btn-sm" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=59167916774">
                              <i class="fa fa-whatsapp"></i>
                          </a>
                      </div>
                  </div>
      
              </div>
      
        </div>
      </div>
@endforelse
@endsection