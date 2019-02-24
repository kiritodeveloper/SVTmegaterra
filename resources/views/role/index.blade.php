@extends('layout::index')

@section('title', 'Roles')

@section('content')
<div class="col col-lg-12 col-md-12 col-xs-12">
    @component('component::card', ['title' => 'ROLES DE USUARIO DEL SISTEMA'])
        @permission('roles.add')
        {{ btn_new('roles.create', 'NUEVO') }}
        @endpermission
        @component('component::table', ['name' => 'datatable'])
            @slot('head')
                <th>*ROL</th>
                <th>*DESCRIPCION</th>
                <th></th>
            @endslot
            @foreach ($roles as $role)
                <tr>
                    <td>{{ $role->name }}</td>
                    <td>{{ $role->description }}</td>
                    <td>
                        @component('component::buttons')
                            {{ btn_show('roles.show', $role->id) }}
                            @if($role->name != 'admin' && $role->name != 'pesaje')
                                @permission('roles.edit')
                                {{ btn_edit('roles.edit', $role->id) }}
                                @endpermission
                            @endif
                            @permission('roles.delete')
                            @if($role->name != 'admin' && $role->name != 'pesaje' && $role->users->count() === 0)
                                {{ btn_delete('roles.destroy', $role->id) }}
                            @endif
                            @endpermission
                        @endcomponent
                    </td>
                </tr>
            @endforeach
        @endcomponent
    @endcomponent
</div>
@endsection

@push('script')
    <script src="{{ asset('js/delete.js') }}"></script>
    <script>$('#datatable').DataTable();</script>
@endpush
