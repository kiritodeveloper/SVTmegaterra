<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Super Admin 2.0</title>

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

            <header class="header">
                <div class="navigation-trigger hidden-xl-up" data-sa-action="aside-open" data-sa-target=".sidebar">
                    <i class="zmdi zmdi-menu"></i>
                </div>

                <div class="logo hidden-sm-down">
                    <h1><a href="index.html">Super Admin 2.0</a></h1>
                </div>

                <form class="search">
                    <div class="search__inner">
                        <input type="text" class="search__text" placeholder="Search for people, files, documents...">
                        <i class="zmdi zmdi-search search__helper" data-sa-action="search-close"></i>
                    </div>
                </form>

                <ul class="top-nav">
                    <li class="hidden-xl-up"><a href="" data-sa-action="search-open"><i class="zmdi zmdi-search"></i></a></li>

                    <li class="dropdown">
                        <a href="" data-toggle="dropdown" class="top-nav__notify"><i class="zmdi zmdi-email"></i></a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu--block">
                            <div class="dropdown-header">
                                Messages

                                <div class="actions">
                                    <a href="messages.html" class="actions__item zmdi zmdi-plus"></a>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li class="dropdown top-nav__notifications">
                        <a href="" data-toggle="dropdown" class="top-nav__notify">
                            <i class="zmdi zmdi-notifications"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu--block">
                            <div class="dropdown-header">
                                Notifications

                                <div class="actions">
                                    <a href="" class="actions__item zmdi zmdi-check-all" data-sa-action="notifications-clear"></a>
                                </div>
                            </div>

                            <div class="listview listview--hover">
                                <div class="listview__scroll scrollbar-inner">
                                    <a href="" class="listview__item">
                                        <adminlte/img src="adminlte/demo/adminlte/img/profile-pics/1.jpg" class="listview__adminlte/img" alt="">

                                        <div class="listview__content">
                                            <div class="listview__heading">David Belle</div>
                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                        </div>
                                    </a>

                                    <a href="" class="listview__item">
                                        <adminlte/img src="adminlte/demo/adminlte/img/profile-pics/2.jpg" class="listview__adminlte/img" alt="">

                                        <div class="listview__content">
                                            <div class="listview__heading">Jonathan Morris</div>
                                            <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                                        </div>
                                    </a>

                                    <a href="" class="listview__item">
                                        <adminlte/img src="adminlte/demo/adminlte/img/profile-pics/3.jpg" class="listview__adminlte/img" alt="">

                                        <div class="listview__content">
                                            <div class="listview__heading">Fredric Mitchell Jr.</div>
                                            <p>Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies</p>
                                        </div>
                                    </a>

                                    <a href="" class="listview__item">
                                        <adminlte/img src="adminlte/demo/adminlte/img/profile-pics/4.jpg" class="listview__adminlte/img" alt="">

                                        <div class="listview__content">
                                            <div class="listview__heading">Glenn Jecobs</div>
                                            <p>Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque</p>
                                        </div>
                                    </a>

                                    <a href="" class="listview__item">
                                        <adminlte/img src="adminlte/demo/adminlte/img/profile-pics/5.jpg" class="listview__adminlte/img" alt="">

                                        <div class="listview__content">
                                            <div class="listview__heading">Bill Phillips</div>
                                            <p>Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat</p>
                                        </div>
                                    </a>

                                    <a href="" class="listview__item">
                                        <adminlte/img src="adminlte/demo/adminlte/img/profile-pics/1.jpg" class="listview__adminlte/img" alt="">

                                        <div class="listview__content">
                                            <div class="listview__heading">David Belle</div>
                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                        </div>
                                    </a>

                                    <a href="" class="listview__item">
                                        <adminlte/img src="adminlte/demo/adminlte/img/profile-pics/2.jpg" class="listview__adminlte/img" alt="">

                                        <div class="listview__content">
                                            <div class="listview__heading">Jonathan Morris</div>
                                            <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                                        </div>
                                    </a>

                                    <a href="" class="listview__item">
                                        <adminlte/img src="adminlte/demo/adminlte/img/profile-pics/3.jpg" class="listview__adminlte/img" alt="">

                                        <div class="listview__content">
                                            <div class="listview__heading">Fredric Mitchell Jr.</div>
                                            <p>Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="p-1"></div>
                            </div>
                        </div>
                    </li>

                    <li class="dropdown hidden-xs-down">
                        <a href="" data-toggle="dropdown"><i class="zmdi zmdi-check-circle"></i></a>

                        <div class="dropdown-menu dropdown-menu-right dropdown-menu--block" role="menu">
                            <div class="dropdown-header">Tasks</div>

                            <div class="listview listview--hover">
                                <a href="" class="listview__item">
                                    <div class="listview__content">
                                        <div class="listview__heading">HTML5 Validation Report</div>

                                        <div class="progress mt-1">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </a>

                                <a href="" class="listview__item">
                                    <div class="listview__content">
                                        <div class="listview__heading">Google Chrome Extension</div>

                                        <div class="progress mt-1">
                                            <div class="progress-bar bg-warning" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </a>

                                <a href="" class="listview__item">
                                    <div class="listview__content">
                                        <div class="listview__heading">Social Intranet Projects</div>

                                        <div class="progress mt-1">
                                            <div class="progress-bar bg-success" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </a>

                                <a href="" class="listview__item">
                                    <div class="listview__content">
                                        <div class="listview__heading">Bootstrap Admin Template</div>

                                        <div class="progress mt-1">
                                            <div class="progress-bar bg-info" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </a>

                                <a href="" class="listview__item">
                                    <div class="listview__content">
                                        <div class="listview__heading">Youtube Client App</div>

                                        <div class="progress mt-1">
                                            <div class="progress-bar bg-danger" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </a>

                                <a href="" class="view-more">View all Tasks</a>
                            </div>
                        </div>
                    </li>

                    <li class="dropdown hidden-xs-down">
                        <a href="" data-toggle="dropdown"><i class="zmdi zmdi-apps"></i></a>

                        <div class="dropdown-menu dropdown-menu-right dropdown-menu--block" role="menu">
                            <div class="row app-shortcuts">
                                <a class="col-4 app-shortcuts__item" href="">
                                    <i class="zmdi zmdi-calendar"></i>
                                    <small class="">Calendar</small>
                                </a>
                                <a class="col-4 app-shortcuts__item" href="">
                                    <i class="zmdi zmdi-file-text"></i>
                                    <small class="">Files</small>
                                </a>
                                <a class="col-4 app-shortcuts__item" href="">
                                    <i class="zmdi zmdi-email"></i>
                                    <small class="">Email</small>
                                </a>
                                <a class="col-4 app-shortcuts__item" href="">
                                    <i class="zmdi zmdi-trending-up"></i>
                                    <small class="">Reports</small>
                                </a>
                                <a class="col-4 app-shortcuts__item" href="">
                                    <i class="zmdi zmdi-view-headline"></i>
                                    <small class="">News</small>
                                </a>
                                <a class="col-4 app-shortcuts__item" href="">
                                    <i class="zmdi zmdi-image"></i>
                                    <small class="">Gallery</small>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li class="dropdown hidden-xs-down">
                        <a href="" data-toggle="dropdown"><i class="zmdi zmdi-more-vert"></i></a>

                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="" class="dropdown-item" data-sa-action="fullscreen">Fullscreen</a>
                            <a href="" class="dropdown-item">Clear Local Storage</a>
                            <a href="" class="dropdown-item">Settings</a>
                        </div>
                    </li>

                    <li class="hidden-xs-down">
                        <a href="" class="top-nav__themes" data-sa-action="aside-open" data-sa-target=".themes"><i class="zmdi zmdi-palette"></i></a>
                    </li>
                </ul>

                <div class="clock hidden-md-down">
                    <div class="time">
                        <span class="time__hours"></span>
                        <span class="time__min"></span>
                        <span class="time__sec"></span>
                    </div>
                </div>
            </header>

            <aside class="sidebar">
                <div class="scrollbar-inner">

                    <div class="user">
                        <div class="user__info" data-toggle="dropdown">
                            <adminlte/img class="user__adminlte/img" src="adminlte/demo/adminlte/img/profile-pics/8.jpg" alt="">
                            <div>
                                <div class="user__name">Malinda Hollaway</div>
                                <div class="user__email">malinda-h@gmail.com</div>
                            </div>
                        </div>

                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="">View Profile</a>
                            <a class="dropdown-item" href="">Settings</a>
                            <a class="dropdown-item" href="">Logout</a>
                        </div>
                    </div>

                    <ul class="navigation">
                        <li class="navigation__active"><a href="index.html"><i class="zmdi zmdi-home"></i> Home</a></li>

                        <li class="navigation__sub @@variantsactive">
                            <a href=""><i class="zmdi zmdi-view-week"></i> Variants</a>

                            <ul>
                                <li class="@@sidebaractive"><a href="hidden-sidebar.html">Hidden Sidebar</a></li>
                                <li class="@@boxedactive"><a href="boxed-layout.html">Boxed Layout</a></li>
                                <li class="@@hiddensidebarboxedactive"><a href="hidden-sidebar-boxed-layout.html">Boxed Layout with Hidden Sidebar</a></li>
                            </ul>
                        </li>

                        <li class="@@typeactive"><a href="typography.html"><i class="zmdi zmdi-format-underlined"></i> Typography</a></li>

                        <li class="@@widgetactive"><a href="widgets.html"><i class="zmdi zmdi-widgets"></i> Widgets</a></li>

                        <li class="navigation__sub @@tableactive">
                            <a href=""><i class="zmdi zmdi-view-list"></i> Tables</a>

                            <ul>
                                <li class="@@normaltableactive"><a href="html-table.html">HTML Table</a></li>
                                <li class="@@datatableactive"><a href="data-table.html">Data Table</a></li>
                            </ul>
                        </li>

                        <li class="navigation__sub @@formactive">
                            <a href=""><i class="zmdi zmdi-collection-text"></i> Forms</a>

                            <ul>
                                <li class="@@formelementactive"><a href="form-elements.html">Basic Form Elements</a></li>
                                <li class="@@formcomponentactive"><a href="form-components.html">Form Components</a></li>
                                <li class="@@formvalidationactive"><a href="form-validation.html">Form Validation</a></li>
                            </ul>
                        </li>

                        <li class="navigation__sub @@uiactive">
                            <a href=""><i class="zmdi zmdi-swap-alt"></i> User Interface</a>

                            <ul>
                                <li class="@@colorsactive"><a href="colors.html">Colors</a></li>
                                <li class="@@cssanimationsactive"><a href="css-animations.html">CSS Animations</a></li>
                                <li class="@@buttonsactive"><a href="buttons.html">Buttons</a></li>
                                <li class="@@iconsactive"><a href="icons.html">Icons</a></li>
                                <li class="@@listviewactive"><a href="listview.html">Listview</a></li>
                                <li class="@@toolbarsactive"><a href="toolbars.html">Toolbars</a></li>
                                <li class="@@cardsactive"><a href="cards.html">Cards</a></li>
                                <li class="@@alertactive"><a href="alerts.html">Alerts</a></li>
                                <li class="@@badgesactive"><a href="badges.html">Badges</a></li>
                                <li class="@@breadcrumbsactive"><a href="breadcrumbs.html">Bredcrumbs</a></li>
                                <li class="@@jumbotronactive"><a href="jumbotron.html">Jumbotron</a></li>
                                <li class="@@navsactive"><a href="navs.html">Navs</a></li>
                                <li class="@@paginationactive"><a href="pagination.html">Pagination</a></li>
                                <li class="@@progressactive"><a href="progress.html">Progress</a></li>
                            </ul>
                        </li>

                        <li class="navigation__sub @@componentsactive">
                            <a href=""><i class="zmdi zmdi-group-work"></i> Javascript Components</a>

                            <ul class="navigation__sub">
                                <li class="@@carouselactive"><a href="carousel.html">Carousel</a></li>
                                <li class="@@collapseactive"><a href="collapse.html">Collapse</a></li>
                                <li class="@@dropdownsactive"><a href="dropdowns.html">Dropdowns</a></li>
                                <li class="@@modalsactive"><a href="modals.html">Modals</a></li>
                                <li class="@@popoveractive"><a href="popover.html">Popover</a></li>
                                <li class="@@tabsactive"><a href="tabs.html">Tabs</a></li>
                                <li class="@@tooltipsactive"><a href="tooltips.html">Tooltips</a></li>
                                <li class="@@notificationsactive"><a href="notifications-alerts.html">Notifications & Alerts</a></li>
                                <li class="@@treeactive"><a href="treeview.html">Tree View</a></li>
                            </ul>
                        </li>

                        <li class="navigation__sub @@chartsactive">
                            <a href=""><i class="zmdi zmdi-trending-up"></i> Charts</a>

                            <ul>
                                <li class="@@flotchartsactive"><a href="flot-charts.html">Flot</a></li>
                                <li class="@@otherchartsactive"><a href="other-charts.html">Other Charts</a></li>
                            </ul>
                        </li>

                        <li class="@@calendaractive"><a href="calendar.html"><i class="zmdi zmdi-calendar"></i> Calendar</a></li>

                        <li class="@@photogalleryactive"><a href="photo-gallery.html"><i class="zmdi zmdi-image"></i> Photo Gallery</a></li>

                        <li class="navigation__sub @@samplepagesactive">
                            <a href=""><i class="zmdi zmdi-collection-item"></i> Sample Pages</a>

                            <ul>
                                <li class="@@profileactive"><a href="profile-about.html">Profile</a></li>
                                <li class="@@messagesactive"><a href="messages.html">Messages</a></li>
                                <li class="@@contactsactive"><a href="contacts.html">Contacts</a></li>
                                <li class="@@newcontactsactive"><a href="new-contact.html">New Contact</a></li>
                                <li class="@@groupsactive"><a href="groups.html">Groups</a></li>
                                <li class="@@pricingtablesactive"><a href="pricing-tables.html">Pricing Tables</a></li>
                                <li class="@@invoiceactive"><a href="invoice.html">Invoice</a></li>
                                <li class="@@todoactive"><a href="todo-lists.html">Todo Lists</a></li>
                                <li class="@@notesactive"><a href="notes.html">Notes</a></li>
                                <li class="@@searchresultsactive"><a href="search-results.html">Search Results</a></li>
                                <li class="@@issuesactive"><a href="issue-tracker.html">Issues Tracker</a></li>
                                <li class="@@faqactive"><a href="faq.html">FAQ</a></li>
                                <li class="@@teamactive"><a href="team.html">Team</a></li>
                                <li class="@@blogactive"><a href="blog.html">Blog</a></li>
                                <li class="@@blogdetailactive"><a href="blog-detail.html">Blog Detail</a></li>
                                <li class="@@qaactive"><a href="questions-answers.html">Questions & Answers</a></li>
                                <li class="@@qadetailactive"><a href="questions-answers-details.html">Questions & Answers Details</a></li>
                                <li class="@@loginactive"><a href="login.html">Login & SignUp</a></li>
                                <li class="@@lockscreenactive"><a href="lockscreen.html">Lockscreen</a></li>
                                <li class="@@lockscreenactive"><a href="404.html">404</a></li>
                                <li class="@@emptyactive"><a href="empty.html">Empty Page</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>

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