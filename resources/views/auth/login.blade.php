@extends('layouts.auth')
@section('title','Login')
@section('content')

    <div class="animate form login_form">
        <section class="login_content">
            <form role="form" method="POST" action="{{ url('/login') }}">
                {{csrf_field()}}
                <img src="/images/holas.png" width="150" height="150"/>
                <h1>Login</h1>
                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                    <input type="email" class="form-control" name="email" placeholder="email" required="" />
                    @if ($errors->has('email'))
                        <span class="help-block">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                    <input type="password" class="form-control" name="password" placeholder="Password" required="" />
                    @if ($errors->has('password'))
                        <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                    @endif
                </div>
                <div>
                    <button class="btn btn-round btn-success" type="submit">Ingresar</button>
                </div>

                <div class="clearfix"></div>

                <div class="separator">
                    <div>
                        <p>©{{date('Y')}} </p>
                    </div>
                </div>
            </form>
        </section>
    </div>
@endsection
