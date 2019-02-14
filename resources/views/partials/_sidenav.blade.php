<div class="col-md-3 left_col">
    <div class="left_col scroll-view">

        <div class="clearfix"></div>

        <!-- menu profile quick info -->
        <div class="profile">
            <div class="profile_pic">
                <img src="{{asset('images/img.jpg')}}"  alt="..." class="img-circle profile_img">
            </div>
            <div class="profile_info">
                <span>Bienvenido</span>
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
                    <!--<li><a href="{{route('dashboard')}}"><i class="fa fa-home"></i> Inicio</a>
                    </li>-->
                    <li><a><i class="fa fa fa-group"></i> Administracion <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('clientes.create')}}">Registro De Clientes</a></li>
                            <li><a href="{{ route('users.create') }}"> Registro De Usuarios</a></li>
                            <li><a href="{{ route('users.index') }}"> Listar Usuarios</a></li>
                            <li><a href="{{ route('clientes.index') }}">Lista de clientes</a></li>
                            
                        </ul>
                    </li>
                    <li><a><i class="fa fa fa-home"></i>Terrenos <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{ route('proyecto.create') }}">Registro De Proyectos</a></li>
                            <li><a href="{{ route('tipo.create') }}">Registro De Tipos de Terreno</a></li>
                            <li><a href="{{ route('map.index') }}">registro de terrenos</a></li>
                            <li><a href="#">Resgistro De Planes</a></li>
                            <li><a href="{{ route('proyecto.index') }}">Lista De Proyectos</a></li>
                            <li><a href="{{ route('tipo.index') }}">Lista De Tipos de Terreno</a></li>
                            <li><a href="#">Lista De Terrenos</a></li>
                            <li><a href="#">Lista De Planes</a></li>
                        </ul>
                    </li>
                    <li><a><i class="fa fa-credit-card"></i>Venta De Terrenos <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="#">Venta De Terrenos</a></li>
                            <li><a href="#">lista De Ventas</a></li>
                            <li><a href="#">Reportes Del Dia</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
        <!-- /sidebar menu -->

        @include('partials._sidenav_footer')
    </div>
</div>