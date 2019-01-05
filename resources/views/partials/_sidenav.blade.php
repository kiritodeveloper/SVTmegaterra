<div class="col-md-3 left_col">
    <div class="left_col scroll-view" style="background: linear-gradient(to right, rgb(19, 78, 94), rgb(113, 178, 128));
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

        <div class="clearfix"></div>

        <!-- menu profile quick info -->
        <div class="profile">
            <div class="profile_pic">
                <img src="/images/img.jpg" alt="..." class="img-circle profile_img">
            </div>
            <div class="profile_info">
                <span>Welcome,</span>
                <h2>{{auth()->user()->name}}</h2>
            </div>
        </div>
        <!-- /menu profile quick info -->

        <br />

        <!-- sidebar menu -->
        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
                <h3>General</h3>
                <ul class="nav side-menu">
                    <li><a href="{{route('dashboard')}}"><i class="fa fa-home"></i> Inicio</a>
                    </li>
                    <li><a><i class="fa fa-cogs"></i>Administracion <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="/map">Registro De Terrenos</a></li>
                            <li><a href="/usuarios"> Listar Usuarios</a></li>
                            <li><a href="{{ route('users.create') }}"> Registrar Usuarios Usuarios</a></li>
                            <li><a href="/cliente">lista de clientes</a></li>
                            <li><a href="/RegistroClientes">Resgistro De Clientes</a></li>
                            <li><a href="#">Resgistro De Planes</a></li>
                            <li><a href="#">Lista De Planes</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
        <!-- /sidebar menu -->

        @include('partials._sidenav_footer')
    </div>
</div>