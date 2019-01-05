@extends('layouts.app')
@section('title', "Usuario {$user->id}")

@section('content')
<div class="clearfix"></div>

<div class="row">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>User Report <small></small></h2>
        <ul class="nav navbar-right panel_toolbox">
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">
        <div class="col-md-3 col-sm-3 col-xs-12 profile_left">
          <div class="profile_img">
            <div id="crop-avatar">
              <!-- Current avatar -->
              <img class="img-responsive avatar-view" src="/images/img.jpg" alt="Avatar" title="Change the avatar">
            </div>
          </div>
          <h3>{{ $user->name }}</h3>

          <ul class="list-unstyled user_data">
            <li class="m-top-xs">
              <i class="fa fa-external-link user-profile-icon"></i>
              {{ $user->email }}
            </li>
          </ul>

          <a href="{{ route('users.index') }}" class="btn btn-success"><i class="fa fa-edit m-right-xs"></i>regresar</a>
          <br />
        </div>
      </div>
    </div>
  </div>
</div>
@endsection