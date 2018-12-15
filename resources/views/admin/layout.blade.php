<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>{{ config('app.name') }} - @yield('title')</title>

        <!-- Vendor styles -->
        <link rel="stylesheet" href="adminlte/vendors/bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css">
        <link rel="stylesheet" href="adminlte/vendors/bower_components/animate.css/animate.min.css">
        <link rel="stylesheet" href="adminlte/vendors/bower_components/jquery.scrollbar/jquery.scrollbar.css">
        <link rel="stylesheet" href="adminlte/vendors/bower_components/fullcalendar/dist/fullcalendar.min.css">

        <!-- App styles -->
        <link rel="stylesheet" href="adminlte/css/app.min.css">
    </head>

    <body data-sa-theme="1">
        <main class="main">
            <div class="page-loader">
                <div class="page-loader__spinner">
                    <svg viewBox="25 25 50 50">
                        <circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                    </svg>
                </div>
            </div>
            @include('admin.header')

            @include('admin.sidebar')


            <div class="themes">
    <div class="scrollbar-inner">
        <a href="" class="themes__item active" data-sa-value="1"><adminlte/img src="adminlte/img/bg/1.jpg" alt=""></a>
        <a href="" class="themes__item" data-sa-value="2"><adminlte/img src="adminlte/img/bg/2.jpg" alt=""></a>
        <a href="" class="themes__item" data-sa-value="3"><adminlte/img src="adminlte/img/bg/3.jpg" alt=""></a>
        <a href="" class="themes__item" data-sa-value="4"><adminlte/img src="adminlte/img/bg/4.jpg" alt=""></a>
        <a href="" class="themes__item" data-sa-value="5"><adminlte/img src="adminlte/img/bg/5.jpg" alt=""></a>
        <a href="" class="themes__item" data-sa-value="6"><adminlte/img src="adminlte/img/bg/6.jpg" alt=""></a>
        <a href="" class="themes__item" data-sa-value="7"><adminlte/img src="adminlte/img/bg/7.jpg" alt=""></a>
        <a href="" class="themes__item" data-sa-value="8"><adminlte/img src="adminlte/img/bg/8.jpg" alt=""></a>
        <a href="" class="themes__item" data-sa-value="9"><adminlte/img src="adminlte/img/bg/9.jpg" alt=""></a>
        <a href="" class="themes__item" data-sa-value="10"><adminlte/img src="adminlte/img/bg/10.jpg" alt=""></a>
    </div>
</div>

            <section class="content">
                @yield('content')
            </section>
        </main>

        <!-- Older IE warning message -->
            <!--[if IE]>
                <div class="ie-warning">
                    <h1>Warning!!</h1>
                    <p>You are using an outdated version of Internet Explorer, please upgrade to any of the following web browsers to access this website.</p>

                    <div class="ie-warning__downloads">
                        <a href="http://www.google.com/chrome">
                            <adminlte/img src="adminlte/img/browsers/chrome.png" alt="">
                        </a>

                        <a href="https://www.mozilla.org/en-US/firefox/new">
                            <adminlte/img src="adminlte/img/browsers/firefox.png" alt="">
                        </a>

                        <a href="http://www.opera.com">
                            <adminlte/img src="adminlte/img/browsers/opera.png" alt="">
                        </a>

                        <a href="https://support.apple.com/downloads/safari">
                            <adminlte/img src="adminlte/img/browsers/safari.png" alt="">
                        </a>

                        <a href="https://www.microsoft.com/en-us/windows/microsoft-edge">
                            <adminlte/img src="adminlte/img/browsers/edge.png" alt="">
                        </a>

                        <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">
                            <adminlte/img src="adminlte/img/browsers/ie.png" alt="">
                        </a>
                    </div>
                    <p>Sorry for the inconvenience!</p>
                </div>
            <![endif]-->

        <!-- Javascript -->
        <!-- Vendors -->
        <script src="adminlte/vendors/bower_components/jquery/dist/jquery.min.js"></script>
        <script src="adminlte/vendors/bower_components/popper.js/dist/umd/popper.min.js"></script>
        <script src="adminlte/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="adminlte/vendors/bower_components/jquery.scrollbar/jquery.scrollbar.min.js"></script>
        <script src="adminlte/vendors/bower_components/jquery-scrollLock/jquery-scrollLock.min.js"></script>

        <script src="adminlte/vendors/bower_components/salvattore/dist/salvattore.min.js"></script>
        <script src="adminlte/vendors/bower_components/flot/jquery.flot.js"></script>
        <script src="adminlte/vendors/bower_components/flot/jquery.flot.resize.js"></script>
        <script src="adminlte/vendors/bower_components/flot.curvedlines/curvedLines.js"></script>
        <script src="adminlte/vendors/bower_components/jqvmap/dist/jquery.vmap.min.js"></script>
        <script src="adminlte/vendors/bower_components/jqvmap/dist/maps/jquery.vmap.world.js"></script>
        <script src="adminlte/vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js"></script>
        <script src="adminlte/vendors/bower_components/peity/jquery.peity.min.js"></script>
        <script src="adminlte/vendors/bower_components/moment/min/moment.min.js"></script>
        <script src="adminlte/vendors/bower_components/fullcalendar/dist/fullcalendar.min.js"></script>

        <!-- Charts and maps-->
        <script src="adminlte/demo/js/flot-charts/curved-line.js"></script>
        <script src="adminlte/demo/js/flot-charts/line.js"></script>
        <script src="adminlte/demo/js/flot-charts/dynamic.js"></script>
        <script src="adminlte/demo/js/flot-charts/chart-tooltips.js"></script>
        <script src="adminlte/demo/js/other-charts.js"></script>
        <script src="adminlte/demo/js/jqvmap.js"></script>

        <!-- App functions and actions -->
        <script src="adminlte/js/app.min.js"></script>
    </body>
</html>