@extends('layout::index')

@section('title', 'Roles')

@section('content')
<div class="col col-lg-12 col-md-12 col-xs-12">
    @component('component::card', ['title' => 'ASIGNAR PERMISOS A ROL => '. strtoupper($role->name)])
        <blockquote><b>Descripción de Rol: </b>{{ $role->description }}</blockquote>
        <hr>
        {{ Form::open(['route' => ['permission.store', hashid_encode($role->id)], 'method' => 'patch', 'role' => 'form']) }}
        @foreach ($permissions as $group)
        	<div class="row" style="border-bottom: 1px solid #ccc">
	        	<div class="col col-lg-12 col-md-12 col-xs-12">
	        		<label>
                        <input class="checkbox rounded" type="checkbox" id="id-{{ array_keys($permissions->toArray())[$loop->index] }}" style="display:none">
                        <span class="text-uppercase" style="color:#fe974b">{{ $loop->index+1 }}. {{ trans('app.'.array_keys($permissions->toArray())[$loop->index]) }}</span>
                    </label>
	        	</div>
	        	@php $key = array_keys($permissions->toArray())[$loop->index] @endphp
	        	@foreach($group as $permission)
			        <div class="col col-lg-3 col-md-3 col-xs-12">
			            <label>
			            	@unless($available->contains($permission->id))
                            	<input class="checkbox {{ $key }}" type="checkbox" name="permissions[]" style="display:none" value="{{ hashid_encode($permission->id) }}" checked="true">
                            @else
                            	<input class="checkbox {{ $key }}" type="checkbox" name="permissions[]" style="display:none" value="{{ hashid_encode($permission->id) }}">
                            @endunless
                            <span>{{ ucwords(change_string($permission->description)) }}</span>
                        </label>
			        </div>
		        @endforeach
	    	</div>
        @endforeach
        <br>
            {{ btn_cancel('roles.index', 'VOLVER ATRAS') }} {{ btn_save() }}
        {{ Form::close() }}
    @endcomponent
</div>
@endsection

@push('script')
	<script type="text/javascript">
		$("#id-backup").on('click', function(){if($(this).prop('checked')) {$(".backup").prop('checked', true);}else {$(".backup").prop('checked', false);}});
		$("#id-employee").on('click', function(){if($(this).prop('checked')) {$(".employee").prop('checked', true);}else {$(".employee").prop('checked', false);}});
		$("#id-load").on('click', function(){if($(this).prop('checked')) {$(".load").prop('checked', true);}else {$(".load").prop('checked', false);}});
		$("#id-location").on('click', function(){if($(this).prop('checked')) {$(".location").prop('checked', true);}else {$(".location").prop('checked', false);}});
		$("#id-order").on('click', function(){if($(this).prop('checked')) {$(".order").prop('checked', true);}else {$(".order").prop('checked', false);}});
		$("#id-partner").on('click', function(){if($(this).prop('checked')) {$(".partner").prop('checked', true);}else {$(".partner").prop('checked', false);}});
		$("#id-place").on('click', function(){if($(this).prop('checked')) {$(".place").prop('checked', true);}else {$(".place").prop('checked', false);}});
		$("#id-role").on('click', function(){if($(this).prop('checked')) {$(".role").prop('checked', true);}else {$(".role").prop('checked', false);}});
		$("#id-sanction").on('click', function(){if($(this).prop('checked')) {$(".sanction").prop('checked', true);}else {$(".sanction").prop('checked', false);}});
		$("#id-section").on('click', function(){if($(this).prop('checked')) {$(".section").prop('checked', true);}else {$(".section").prop('checked', false);}});
		$("#id-user").on('click', function(){if($(this).prop('checked')) {$(".user").prop('checked', true);}else {$(".user").prop('checked', false);}});
		$("#id-volqueta").on('click', function(){if($(this).prop('checked')) {$(".volqueta").prop('checked', true);}else {$(".volqueta").prop('checked', false);}});
		$("#id-category").on('click', function(){if($(this).prop('checked')) {$(".category").prop('checked', true);}else {$(".category").prop('checked', false);}});
		$("#id-item").on('click', function(){if($(this).prop('checked')) {$(".item").prop('checked', true);}else {$(".item").prop('checked', false);}});
		$("#id-debt").on('click', function(){if($(this).prop('checked')) {$(".debt").prop('checked', true);}else {$(".debt").prop('checked', false);}});
		$("#id-spreadsheet").on('click', function(){if($(this).prop('checked')) {$(".spreadsheet").prop('checked', true);}else {$(".spreadsheet").prop('checked', false);}});
		$("#id-site").on('click', function(){if($(this).prop('checked')) {$(".site").prop('checked', true);}else {$(".site").prop('checked', false);}});
		$("#id-weighing").on('click', function(){if($(this).prop('checked')) {$(".weighing").prop('checked', true);}else {$(".weighing").prop('checked', false);}});
		$("#id-invoice").on('click', function(){if($(this).prop('checked')) {$(".invoice").prop('checked', true);}else {$(".invoice").prop('checked', false);}});
	</script>
@endpush