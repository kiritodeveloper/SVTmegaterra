@extends('admin.layout')
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
<html>
    <head>
        {!! $map['js'] !!}
    </head>
<body>
    <div class="container">
        <div class="content">
            <div id="leftTopControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Left Top Control.
            </div>
            <div id="leftCenterControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Left Center Control.
            </div>
            <div id="leftBottomControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Left Bottom Control.
            </div>
            <div id="bottomRightControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Bottom Right Control.
            </div>
            <div id="bottomCenterControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Bottom Center Control.
            </div>
            <div id="bottomLeftControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Bottom Left Control.
            </div>
            <div id="rightTopControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Right Top Control.
            </div>
            <div id="rightCenterControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Right Center Control.
            </div>
            <div id="rightBottomControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Right Bottom Control.
            </div>
            <div id="topLeftControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Top Left Control.
            </div>
            <div id="topCenterControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Top Center Control.
            </div>
            <div id="topRightControl" style="padding: 5px; background-color:#fff; box-shadow: #101010; margin: 2px;">
                This is Top Right Control.
            </div>
            {!! $map['html'] !!}
        </div>
    </div>
</body>
</html>
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Laravel
                </div>

                <div class="links">
                    <a href="https://laravel.com/docs">Documentation</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://nova.laravel.com">Nova</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        </div>
    </body>

    @stop