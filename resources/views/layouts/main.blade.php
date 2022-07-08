<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="referrer" content="origin-when-cross-origin" />
        <link rel="apple-touch-icon" href="dist/img/fav.png"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#0c101b"/>
        <meta name="apple-mobile-web-app-title" content=""/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <base href=""/>
        <link rel="canonical" href="" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content=""/>
        <meta name='twitter:image' content=""/>
        <meta property="og:image" content=""/>
        <meta property="og:image" content="dist/img/fb-og.jpg"/>
        <meta name='twitter:title' content="" />
        <meta name='description' content="american group" />
        <meta name="keywords" content=""/>
        <meta name='og:description' content="" />
        <meta name="twitter:description" content="" />
        <meta name="author" content=""/>
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:site" content="" />
        <link rel="shortcut icon" href="dist/img/fav.png"/>
        <link rel="icon" sizes="512x512" href=""/>
        <link rel="manifest" href="manifest.json"/>
        <meta name="theme-color" content="#0c101b"/>
        <title>american group</title>
        <link rel="stylesheet" href="{{ asset('dist/css/en.min.css?v=2') }}"/>
        <link rel="stylesheet" href="{{ asset ('am-beauty/css/swiper-bundle.min.css?v=2') }}">
        <link rel="stylesheet" href="{{ asset('dist/css/app-new.css?v=2') }}"/>
        <link rel="stylesheet" href="{{ asset ('am-beauty/css/style.css') }}">
        @if(app()->getLocale() == 'ru')
            <link rel="stylesheet" href="{{ asset('dist/css/ru.min.css?v=2') }}"/>
        @endif
{{--        <link rel="stylesheet" href="{{ asset('dist/css/app.min.css?v=1') }}"/>--}}
{{--        <script defer src="{{ asset('dist/js/main.min.js?v=3') }}"></script>--}}
        <script defer src="{{ asset('dist/js/main-new.js?v=3') }}"></script>
        @yield('head')
        <script src="{{ asset ('assets/js/libs/jquery.min.js?v=1') }}"></script>
        <script src="{{ asset ('assets/js/libs/swiper-bundle.js?v=1') }}"></script>
        <script src="{{ asset ('assets/js/libs/simplebar.min.js?v=1') }}"></script>
        <script src="{{ asset ('am-beauty/common.js?v=1') }}"></script>
    </head>
    <body>

        @include('partials.header')

        @yield('content')

        @include('partials.footer')


        @yield('scripts')

        {!! NoCaptcha::renderJs() !!}

    </body>
</html>
