@extends('layouts.main')

@section('content')

    <main class="page">
        <div class="flex-container align-middle flex-dir-column search-page-head">
            <h1>your search for "swim" has 13 results.</h1>

            <form action="{{ route('search-b', ['language'=> app()->getLocale()]) }}" class="flex-container align-justify blog-search search-box" method="get">
                <input type="text" placeholder="Search" name="s">
                <button type="submit">
                    <img src="{{ asset('dist/img/Search.svg') }}" alt="" title="">
                </button>
            </form>
        </div>
    </main>

    <div class="row align-middle">

        <div class="search-result-item flex-container">
            <div class="image">
                <a href="#">
                    <img src="https://ambeautygroup.ru/storage/blogs/6/image-21-10-20-04-27-7-462x462.jpg" alt="">
                </a>
            </div>
            <div class="content">
                <h3 class="itemtitle">some nice heading goes here</h3>
                <p class="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sed! Deserunt repudiandae natus
                    itaque, voluptas pariatur optio mollitia rerum corporis quasi, officia, dolorum aut est nesciunt sequi
                    dignissimos ex sint?

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sed! Deserunt repudiandae natus
                    itaque, voluptas pariatur optio mollitia rerum corporis quasi, officia, dolorum aut est nesciunt sequi
                    dignissimos ex sint?
                </p>
            </div>
        </div>

             @foreach($blogResult AS $blog)
            <?php
            $images = json_decode($blog->image);
            ?>
            <div class="search-result-item">
                <div class="image">
                    <a href="{{'/' . app()->getLocale() . '/blog/' . $blog->slug }}">
                        <img src="{{ Voyager::image($images[0]) }}" alt="">
                    </a>
                </div>
                <div class="content">
                    <a href="{{'/' . app()->getLocale() . '/blog/' . $blog->slug }}">
                        <h3 class="itemtitle">{{ $blog->getTranslatedAttribute('title', \App::getLocale()) }}</h3>
                    </a>

                    <p class="description">
                        {{ $blog->getTranslatedAttribute('description', \App::getLocale()) }}
                    </p>
                </div>
            </div>
        @endforeach

    </div>

    {{ $blogResult->links('vendor.pagination.search', ['search' => app('request')->input('s')]) }}
{{--    <div class="flex-container align-center align-middle pagination search-pagination">--}}
{{--        <a class="disabled" aria-disabled="true" aria-label="« Previous"><i class="left chevron icon"></i></a>--}}
{{--        <a class="active" href="$" aria-current="page">1</a>--}}
{{--        <a href="#">2</a>--}}
{{--        <a href="#">3</a>--}}
{{--        <a href="#"><img src="$" alt=""></a>--}}
{{--    </div>--}}


@stop
