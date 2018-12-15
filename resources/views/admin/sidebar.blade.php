<aside class="sidebar">
        <div class="scrollbar-inner">

            <div class="user">
                <div class="user__info" data-toggle="dropdown">
                    <adminlte/img class="user__adminlte/img" src="adminlte/demo/adminlte/img/profile-pics/8.jpg" alt="">
                    <div>
                        <div class="user__name">Malinda Hollaway</div>
                        <div class="user__email">{{ __('Verify Your Email Address') }}</div>
                    </div>
                </div>

                <div class="dropdown-menu">
                    <a class="dropdown-item" href="{{ route('logout') }}"
                    onclick="event.preventDefault();
                                  document.getElementById('logout-form').submit();">
                     {{ __('Logout') }}
                 </a>
                </div>
            </div>

            <ul class="navigation">
            
                <li class="navigation__sub @@variantsactive">
                    <a href=""><i class="zmdi zmdi-assignment-account zmdi-hc-fw"></i> administracion</a>
                    <ul>
                     <li class="navigation__sub @@tableactive">
                        <a href=""><i class="zmdi zmdi-layers zmdi-hc-fw"></i>  Registros </a>
            
                         <ul>
                            <li class="@@tableactive"><a href="admin1"> <i class="zmdi zmdi-account-add zmdi-hc-fw"></i></i>registro de personal</a></li>
                            <li class="@@tableactive"><a href="admin1"> <i class="zmdi zmdi-account-add zmdi-hc-fw"></i>registro de clientes</a></li>
                            <li class="@@tableactive"><a href="admin1"><i class="zmdi zmdi-google-maps zmdi-hc-fw"></i>registro de proyectos</a></li>
                            <li class="@@tableactive"><a href="admin1"><i class="zmdi zmdi-google-maps zmdi-hc-fw"></i>registro de lotes</a></li>
                            <li class="@@tableactive"><a href="admin1"><i class="zmdi zmdi-view-carousel zmdi-hc-fw"></i>registro de planes </a></li>
                        </ul>
                    </li>
                        <li class="@@boxedactive"><a href="boxed-layout.html"><i class="zmdi zmdi-view-toc zmdi-hc-fw"></i>listar clientes</a></li>
                        <li class="@@boxedactive"><a href="boxed-layout.html"><i class="zmdi zmdi-view-toc zmdi-hc-fw"></i>listar proyectos</a></li>
                        <li class="@@boxedactive"><a href="boxed-layout.html"><i class="zmdi zmdi-view-toc zmdi-hc-fw"></i>listar proyectos</a></li>
                        <li class="@@hiddensidebarboxedactive"><a href="hidden-sidebar-boxed-layout.html">roles y permisos</a></li>
                    </ul>
                </li>
                <li class="navigation__sub @@tableactive">
                        <a href=""><i class="zmdi zmdi-view-list"></i> Tables</a>

                        <ul>
                            <li class="@@normaltableactive"><a href="html-table.html">HTML Table</a></li>
                            <li class="@@datatableactive"><a href="data-table.html">Data Table</a></li>
                        </ul>
                    </li>
            </ul>
        </div>
    </aside>