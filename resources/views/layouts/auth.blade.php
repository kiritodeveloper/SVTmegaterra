<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
@include('partials._head')
<body class="login" style="linear-gradient(to right, rgb(19, 78, 94), rgb(113, 178, 128));
background-image: linear-gradient(to right, rgb(19, 78, 94), rgb(113, 178, 128));
background-position-x: initial;
background-position-y: initial;
background-size: initial;
background-repeat-x: initial;
background-repeat-y: initial;
background-attachment: initial;
background-origin: initial;
background-clip: initial;
background-color: initial;">
<div>
    <a class="hiddenanchor" id="signup"></a>
    <a class="hiddenanchor" id="signin"></a>

    <div class="login_wrapper">
        @yield('content')
    </div>
</div>
</body>
</html>
