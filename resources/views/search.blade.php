@extends('layouts.main')

@section('content')

    <main class="page">
        <div class="flex-container align-middle flex-dir-column search-page-head">
            <h1>your search for "swim" has 13 results.</h1>
            <form action="{{ route('search', ['language'=> app()->getLocale()]) }}" class="flex-container align-justify blog-search search-box" method="get">
                <input type="text" placeholder="Search" name="s" value="{{ app('request')->input('s') ?? '' }}">
                <button type="submit">
                    <img src="{{ asset('dist/img/Search.svg') }}" alt="" title="">
                </button>
            </form>
        </div>
    </main>

    <div class="row align-middle">

        @foreach($pageResult AS $page)
        <div class="search-result-item">
            <div class="content">
                <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'info-for-partners']) }}">
                 <h3 class="itemtitle">{{ $page->getTranslatedAttribute('title', \App::getLocale()) }}</h3>
                </a>
                    <p class="description">
                    {{ $page->getTranslatedAttribute('excerpt', \App::getLocale()) }}
                </p>
            </div>
        </div>
        @endforeach

        @foreach($brandResult AS $brand)
                <?php
                $images = json_decode($brand->images);
                ?>
        <div class="search-result-item">
            <div class="image">
                <a href="{{'/' . app()->getLocale() . '/brands/' . $brand->slug }}">
                    <img src="{{ Voyager::image($images[0]) }}" alt="">
                </a>
            </div>
            <div class="content">
                <a href="{{'/' . app()->getLocale() . '/brands/' . $brand->slug }}">
                     <h3 class="itemtitle">{{ $brand->getTranslatedAttribute('name', \App::getLocale()) }}</h3>
                </a>
                <p class="description">
                    {{ $brand    ->getTranslatedAttribute('listing_description', \App::getLocale()) }}
                </p>
            </div>
        </div>
        @endforeach

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

        @if(count($pageResult) == 0 && count($blogResult) == 0 && count($brandResult ) == 0)
                <div class="search-result-item">
                    <div class="content">
                        <p class="description">
                            No search result
                        </p>
                    </div>
                </div>
            @endif

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
