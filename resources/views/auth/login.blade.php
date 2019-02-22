@extends('layouts.auth')
@section('title','Login')
@section('content')
        <section class="login_content">
            <form role="form" method="POST" action="{{ url('/login') }}">
                {{csrf_field()}}
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

                </div>
            </form>
        </section>

@endsection
