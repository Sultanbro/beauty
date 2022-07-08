<!DOCTYPE html>
<html lang="{{ config('app.locale') }}" dir="{{ __('voyager::generic.is_rtl') == 'true' ? 'rtl' : 'ltr' }}">
<head>
    <title>Admin Panel</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">

    <!-- Favicon -->
    <?php $admin_favicon = Voyager::setting('admin.icon_image', ''); ?>
    @if($admin_favicon == '')
{{--                <link rel="shortcut icon" href="{{ voyager_asset('images/logo-icon.png') }}" type="image/png">--}}
    @else
{{--        <link rel="shortcut icon" href="{{ Voyager::image($admin_favicon) }}" type="image/png">--}}
    @endif



<!-- App CSS -->
    <link rel="stylesheet" href="{{ asset('assets/admin/app.css') }}">

    @yield('css')
    @if(__('voyager::generic.is_rtl') == 'true')
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.css">
        {{--        <link rel="stylesheet" href="{{ voyager_asset('css/rtl.css') }}">--}}
        <link rel="stylesheet" href="{{ asset('assets/admin/rtl.css') }}">
    @endif

<!-- Few Dynamic Styles -->
    <style type="text/css">
        .frigate_studio .side-menu .navbar-header {
            background: {{ config('voyager.primary_color','#22A7F0') }};
            border-color: {{ config('voyager.primary_color','#22A7F0') }};
        }

        .widget .btn-primary {
            border-color: {{ config('voyager.primary_color','#22A7F0') }};
        }

        .widget .btn-primary:focus, .widget .btn-primary:hover, .widget .btn-primary:active, .widget .btn-primary.active, .widget .btn-primary:active:focus {
            background: {{ config('voyager.primary_color','#22A7F0') }};
        }

        .frigate_studio .breadcrumb a {
            color: {{ config('voyager.primary_color','#22A7F0') }};
        }
    </style>

    @if(!empty(config('voyager.additional_css')))<!-- Additional CSS -->
    @foreach(config('voyager.additional_css') as $css)
        <link rel="stylesheet" type="text/css" href="{{ asset($css) }}">@endforeach
    @endif

    @yield('head')
</head>

<body class="frigate_studio @if(isset($dataType) && isset($dataType->slug)){{ $dataType->slug }}@endif">

{{--<div id="voyager-loader" class="frigate_studio-loader">--}}
{{--    <?php $admin_loader_img = Voyager::setting('admin.loader', ''); ?>--}}
{{--    @if($admin_loader_img == '')--}}
{{--        <img src="{{ voyager_asset('images/logo-icon.png') }}" alt="Voyager Loader">--}}
{{--    @else--}}
{{--        <img src="{{ Voyager::image($admin_loader_img) }}" alt="Voyager Loader">--}}
{{--    @endif--}}
{{--</div>--}}

<?php
if (\Illuminate\Support\Str::startsWith(Auth::user()->avatar, 'http://') || \Illuminate\Support\Str::startsWith(Auth::user()->avatar, 'https://')) {
    $user_avatar = Auth::user()->avatar;
} else {
    $user_avatar = Voyager::image(Auth::user()->avatar);
}
?>

<div class="app-container expanded">
    <div class="fadetoblack visible-xs"></div>
    <div class="row content-container">
        @include('voyager::dashboard.navbar')
        {{--        @include('voyager::dashboard.sidebar')--}}
        <div class="side-menu sidebar-inverse ps ps--theme_default ps--active-y" style=""
             data-ps-id="1e99503e-d53a-fe24-561f-76024321d90a">
            <nav class="navbar navbar-default" role="navigation">
                <div class="side-menu-container">

                    <div class="panel widget center bgimage"
                         style="background-image:url(/admin/voyager-assets?path=images%2Fbg.jpg); background-size: cover; background-position: 0px;">
                        <div class="dimmer"></div>
                        <div class="panel-content">
                            <img src="https://ambeautygroup.ru//storage/users/default.png" class="avatar"
                                 alt="Admin2 avatar">
                            <h4>Admin2</h4>
                            <p>admin@admin.com</p>

                            <a href="/admin/profile" class="btn btn-primary">Profile</a>
                            <div style="clear:both"></div>
                        </div>
                    </div>

                </div>
                <div id="adminmenu">
                    <ul class="nav navbar-nav">
                        <li class=""><a target="_self" href="/admin"><span class="icon"></span>
                                <span class="title">Dashboard</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/roles"><span
                                    class="icon"></span> <span class="title">Roles</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/users"><span
                                    class="icon"></span> <span class="title">Users</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/media"><span
                                    class="icon"></span> <span class="title">Media</span></a> <!----></li>
                        <li class="active"><a target="_self" href="/admin/posts"><span
                                    class="icon"></span> <span class="title">Posts</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/pages"><span
                                    class="icon"></span> <span class="title">Pages</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/categories"><span
                                    class="icon"></span> <span class="title">Categories</span></a> <!----></li>
                        <li class="dropdown"><a target="_self" href="#5-dropdown-element" data-toggle="collapse"
                                                aria-expanded="false"><span class="icon"></span> <span class="title">Tools</span></a>
                            <div id="5-dropdown-element" class="panel-collapse collapse ">
                                <div class="panel-body">
                                    <ul class="nav navbar-nav">
                                        <li class=""><a target="_self" href="/admin/menus"><span
                                                    class="icon"></span> <span class="title">Menu Builder</span></a>
                                            <!----></li>
                                        <li class=""><a target="_self" href="/admin/database"><span
                                                    class="icon"></span> <span class="title">Database</span></a> <!---->
                                        </li>
                                        <li class=""><a target="_self" href="/admin/compass"><span
                                                    class="icon"></span> <span class="title">Compass</span></a> <!---->
                                        </li>
                                        <li class=""><a target="_self" href="/admin/bread"><span
                                                    class="icon"></span> <span class="title">BREAD</span></a> <!---->
                                        </li>
                                        <li class=""><a target="_self" href="/admin/hooks"><span
                                                    class="icon"></span> <span class="title">Hooks</span></a> <!---->
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class=""><a target="_self" href="/admin/settings"><span
                                    class="icon"></span> <span class="title">Settings</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/brands"><span
                                    class="icon"></span> <span class="title">Brands</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/sliders"><span
                                    class="icon "></span> <span class="title">Slider</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/home-collections"><span
                                    class="icon"></span> <span class="title">Home Collection</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/testimonials"><span
                                    class="icon"></span> <span class="title">Testimonials</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/partners"><span
                                    class="icon"></span> <span class="title">Partners</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/blogs"><span
                                    class="icon"></span> <span class="title">Blog</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/instagram-sections"><span
                                    class="icon"></span> <span class="title">Instagram Sections</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/tags"><span
                                    class="icon"></span> <span class="title">Tags</span></a> <!----></li>
                        <li class=""><a target="_self" href="/admin/authors"><span
                                    class="icon"></span> <span class="title">Authors</span></a> <!----></li>
                    </ul>
                </div>
            </nav>
            <div class="ps__scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                <div class="ps__scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
            </div>
            <div class="ps__scrollbar-y-rail" style="top: 0px; height: 338px; right: 0px;">
                <div class="ps__scrollbar-y" tabindex="0" style="top: 0px; height: 119px;"></div>
            </div>
        </div>
        <script>
            (function () {
                var appContainer = document.querySelector('.app-container'),
                    sidebar = appContainer.querySelector('.side-menu'),
                    navbar = appContainer.querySelector('nav.navbar.navbar-top'),
                    // loader = document.getElementById('voyager-loader'),
                    hamburgerMenu = document.querySelector('.hamburger'),
                    sidebarTransition = sidebar.style.transition,
                    navbarTransition = navbar.style.transition,
                    containerTransition = appContainer.style.transition;

                sidebar.style.WebkitTransition = sidebar.style.MozTransition = sidebar.style.transition =
                    appContainer.style.WebkitTransition = appContainer.style.MozTransition = appContainer.style.transition =
                        navbar.style.WebkitTransition = navbar.style.MozTransition = navbar.style.transition = 'none';

                if (window.innerWidth > 768 && window.localStorage && window.localStorage['frigate_studio.stickySidebar'] == 'true') {
                    appContainer.className += ' expanded no-animation';
                    // loader.style.left = (sidebar.clientWidth/2)+'px';
                    hamburgerMenu.className += ' is-active no-animation';
                }

                navbar.style.WebkitTransition = navbar.style.MozTransition = navbar.style.transition = navbarTransition;
                sidebar.style.WebkitTransition = sidebar.style.MozTransition = sidebar.style.transition = sidebarTransition;
                appContainer.style.WebkitTransition = appContainer.style.MozTransition = appContainer.style.transition = containerTransition;
            })();
        </script>
        <!-- Main Content -->
        <div class="container-fluid">
            <div class="side-body padding-top">
                @yield('page_header')
                <div id="voyager-notifications"></div>
                @yield('content')
            </div>
        </div>
    </div>
</div>
@include('voyager::partials.app-footer')

<!-- Javascript Libs -->


<script type="text/javascript" src="{{ voyager_asset('js/app.js') }}"></script>

<script>
    @if(Session::has('alerts'))
    let alerts = {!! json_encode(Session::get('alerts')) !!};
    helpers.displayAlerts(alerts, toastr);
    @endif

    @if(Session::has('message'))

    // TODO: change Controllers to use AlertsMessages trait... then remove this
    var alertType = {!! json_encode(Session::get('alert-type', 'info')) !!};
    var alertMessage = {!! json_encode(Session::get('message')) !!};
    var alerter = toastr[alertType];

    if (alerter) {
        alerter(alertMessage);
    } else {
        toastr.error("toastr alert-type " + alertType + " is unknown");
    }
    @endif
</script>
@include('voyager::media.manager')
@yield('javascript')
@stack('javascript')
@if(!empty(config('voyager.additional_js')))<!-- Additional Javascript -->
@foreach(config('voyager.additional_js') as $js)
    <script type="text/javascript" src="{{ asset($js) }}"></script>@endforeach
@endif
<script>
    $(".icon").remove()
    $('i').remove();

</script>
</body>
</html>
