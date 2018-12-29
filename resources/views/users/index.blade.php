@extends('layouts.app')

@section('title', 'Usuarios')

@section('content')
    <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="x_panel">
            <div class="x_title">
                 <h1 class="pb-1">{{ $title }}</h1>
                    <p>
                        <a href="{{ route('users.create') }}" class="btn btn-round btn-info">+ Usuario</a>
                    </p>
                <div class="clearfix">
                    @if ($users->isNotEmpty())
                    <table id="datatable" class="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">n</th>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($users as $user)
                        <tr>
                            <th scope="row">{{ $user->id }}</th>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->email }}</td>
                            <td>
                                <form action="{{ route('users.destroy', $user) }}" method="POST">
                                    {{ csrf_field() }}
                                    {{ method_field('DELETE') }}
                                    <a href="{{ route('users.show', $user) }}" class="btn btn-round btn-warning"><span class="glyphicon glyphicon-eye-open"></span></a>
                                    <a href="{{ route('users.edit', $user) }}" class="btn btn-round btn-success"><span class="glyphicon glyphicon-edit"></span></a>
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