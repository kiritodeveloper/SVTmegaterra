@extends('layouts.app')

@section('title', 'Lista De Tipos De Terrrenos')

@section('content')
<style type="text/css">
    .cuadrado {
          width:25%;
          height:0;
          padding-top:25%;
          position:relative;
          background:red;
          border-radius: 25px;
        }
</style>
    <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="x_panel">
            <div class="x_title">
                <div class="clearfix">
                    @if ($tipos->isNotEmpty())
                    <table id="datatable" class="table table-striped table-bordered">
                        <thead>
                        <tr style="color: #000;">
                            <th scope="col">n</th>
                            <th scope="col">Tipos de Terrenos</th>
                            <th scope="col">Color</th>
                            <th scope="col">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($tipos as $tipo)
                        <tr>
                            <th scope="row" style="color: #000;" >{{ $tipo->id }}</th>
                            <td style="color: #000;">{{ $tipo->nombre }}</td>
                            <td style="color: #000;">
                                    <div class="cuadrado" style="background:{{ $tipo->color }}"></div>
                            </td>
                           <td>
                                <form action="{{ route('tipos.destroy', $tipo) }}" method="POST">
                                    {{ csrf_field() }}
                                    {{ method_field('DELETE') }}
                                    <button type="submit" class="btn btn-round btn-danger"><span class="glyphicon glyphicon-trash"></span></button>
                                </form>
                            </td> 
                        </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
                          
    @else
        <p>No hay usuarios registrados.</p>
    @endif
@endsection

@section('sidebar')
    @parent
@endsection