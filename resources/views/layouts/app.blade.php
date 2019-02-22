<!DOCTYPE html>
<html lang="es">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name') }} | @yield('title')</title>
    <link rel="shortcut icon" href="{{{ asset('assets/images/sedegesaddds.png') }}}" type="image/x-icon" />
    @yield('before-style')
    {!! Html::style('assets/js/bootstrap/dist/css/bootstrap.css') !!}
    {!! Html::style('assets/js/font-awesome/css/font-awesome.min.css') !!}
    {!! Html::style('assets/js/nprogress/nprogress.css') !!}
    {!! Html::style('assets/css/custom.css') !!}
    {!! Html::style('assets/css/custom.css') !!}
    {!! Html::style('assets/js/pnotify/dist/pnotify.css') !!}
    {!! Html::style('assets/js/pnotify/dist/pnotify.buttons.css') !!}
    {!! Html::style('assets/js/pnotify/dist/pnotify.nonblock.css') !!}
    @yield('after-style')
    {!! Html::script('assets/js/jquery/dist/jquery.min.js') !!}
  </head>
  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
         @include('partials._sidenav')
            {{--/topnav--}}

            <!-- top navigation -->
            @include('partials._topnav')
            <!-- /top navigation -->
        <div class="top_nav">
          @section('bar_top')
          @show
        </div>
        <div class="right_col" role="main">
          @yield('content')
        </div>
      </div>
    </div>

      {!! Html::script('assets/js/bootstrap/dist/js/bootstrap.min.js') !!}
      {!! Html::script('assets/js/fastclick/lib/fastclick.js') !!}
      {!! Html::script('assets/js/nprogress/nprogress.js') !!}
      {!! Html::script('assets/js/custom.js') !!}
      {!! Html::script('assets/js/pnotify/dist/pnotify.js') !!}
      {!! Html::script('assets/js/pnotify/dist/pnotify.buttons.js') !!}
      {!! Html::script('assets/js/pnotify/dist/pnotify.nonblock.js') !!}
      @yield('after-script')
  </body>

</html>