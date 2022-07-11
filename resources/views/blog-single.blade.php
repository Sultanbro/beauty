<?php
$images = json_decode ($post->image);
?>

@extends('layouts.main')

@section('head')
    <meta name="keywords" content="{{ $post->meta_keywords ?? '' }}">
    <meta name="description" content="{{ $post->meta_description ?? '' }}">

    <meta property="og:url" content="{{ url()->current() }}"/>
    <meta property="og:type" content="blog"/>
    <meta property="og:title" content="{{ $post->getTranslatedAttribute('title', \App::getLocale()) }}"/>
    <meta property="og:description" content=" {{ $post->getTranslatedAttribute('description', \App::getLocale()) }}"/>
    <meta property="og:image"
          content="  @if($images != null && is_array($images))  {{ Voyager::image($images[0] ?? '') }} @endif"/>

    <script type="text/javascript"
            src="https://platform-api.sharethis.com/js/sharethis.js#property=60d2f5f96504e90013d7ddc6&product=inline-share-buttons"
            async="async"></script>
@stop

@section('content')
    <div class="main">
        <section>
            <div class="post__main container">
                <div class="post__image">
                    <img src="{{ Voyager::image($images[0] ?? '') }}" alt="" title=""/>
                </div>
                <div class="post__info">
                    {{--<h1>Презентация сезона 2022 от компании American Beauty Group</h1>--}}

                    <h1>{{ $post->getTranslatedAttribute('title', \App::getLocale()) }}</h1>

                    <div class="row ">
                        <div class="date info-item">
                            {{ formatCreatedAt($post->created_at) }}
                            <div class="separator"></div>
                        </div>
                        <div class="author info-item">
                            by {{ $author->getTranslatedAttribute('name', \App::getLocale()) }}

                            @if(isset($post->tags) && count($post->tags) > 0)
                                <div class="separator"></div>
                            @endif
                        </div>
                        <div class="category info-item">
                            @php
                                $tagsArr = [];
                            @endphp

                            @foreach($post->tags as $tag)
                                @php
                                    $tagsArr[] = $tag->getTranslatedAttribute('name');
                                @endphp
                            @endforeach

                            {{ implode( ', ', $tagsArr) }}

                            {{--World trends, New collections--}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="post__content">
                <div class="container">
                    <div class="row">
                        <div class="column">
                            {{--<h3>31 августа - 2 сентября в Москве состоится презентация сезона 2022 от American Beauty Group.</h3>--}}

                            @if(isset($post->description_2_title))
                                <h3>{{ $post->getTranslatedAttribute('description_2_title', \App::getLocale()) }}</h3>
                            @endif

                            {{--                            <p>В уютном лофте на территории Трёхгорной мануфактуры наша компания представит 15 мировых брендов купальников, пляжной и спортивной одежды. В рамка презентации, гостям мероприятия будут представлены уже известные и популярные в России марки и совершенно новые для рынка имена.</p>--}}
                            {!! $post->getTranslatedAttribute('description_2', \App::getLocale()) !!}
                        </div>
                        <div class="column">
                            {{-- <h3>В рамках ежедневной программы все гости смогут:</h3>--}}

                            @if(isset($post->description_3_title))
                                <h3>{{ $post->getTranslatedAttribute('description_3_title', \App::getLocale()) }}</h3>
                            @endif

                            {!! $post->getTranslatedAttribute('description_3', \App::getLocale()) !!}
                        </div>
                    </div>
                    <div class="announcement">
                        {{--                        <p>Вечером 1 сентября состоится показ – дефиле с участием образцов всех марок, которые на сегодняшний день представлены в дистрибьюторском портфеле компании (сбор гостей - 16:00, начало показа – 17:00).</p>--}}
                        {!! $post->getTranslatedAttribute('body', \App::getLocale()) !!}
                    </div>
                </div>
            </div>
        </section>

        <section class="collections">
            <div class="container">
                @if(isset($post->blogDescriptionSections) && count ($post->blogDescriptionSections) > 0)
                    @foreach($post->blogDescriptionSections as $section)
                        @if($loop->index % 2 === 0)
                            <div class="collection row">
                                <div class="column">
                                    <div class="collection__information">
                                        @if(isset($section->title))
                                            <div class="collection__title">
                                                <h3>{{ $section->getTranslatedAttribute('title', \App::getLocale()) }}</h3>
                                            </div>
                                        @endif

                                        @if(isset($section->description))
                                            <div class="colelction__description">
                                                {!! $section->getTranslatedAttribute('description', \App::getLocale()) !!}
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="collection__image">
                                        <img src="{{ Voyager::image($section->image) }}" alt="">
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="collection row">
                                <div class="column">
                                    <div class="collection__image">
                                        <img src="{{ Voyager::image($section->image) }}" alt="">
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="collection__information">
                                        @if(isset($section->title))
                                            <div class="collection__title">
                                                <h3>{{ $section->getTranslatedAttribute('title', \App::getLocale()) }}</h3>
                                            </div>
                                        @endif

                                        @if(isset($section->description))
                                            <div class="colelction__description">
                                                {!! $section->getTranslatedAttribute('description', \App::getLocale()) !!}
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        @endif
                    @endforeach
                @endif
                {{--<div class="collection row">
                    <div class="column">
                        <div class="collection__information">
                            <div class="collection__title">
                                <h3>Oceanus <br> Великобритания</h3>
                            </div>
                            <div class="colelction__description">
                                гибрид функциональных купальников и гламурных вечерних нарядов, где каждая вещь имеет свой неповторимый дизайн и вручную расшита кристаллами Swarovski.
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="collection__image">
                            <img src="../am-beauty/img/blog-1.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="collection row">
                    <div class="column">
                        <div class="collection__image">
                            <img src="../am-beauty/img/blog-2.jpg" alt="">
                        </div>
                    </div>
                    <div class="column">
                        <div class="collection__information">
                            <div class="collection__title">
                                <h3>Lenny Niemeyer <br> Бразилия</h3>
                            </div>
                            <div class="colelction__description">
                                элегантный женственный крой, изумительное качество ткани и изысканные детали.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="collection row">
                    <div class="column">
                        <div class="collection__information">
                            <div class="collection__title">
                                <h3>Michi<br> Канада</h3>
                            </div>
                            <div class="collection__description">
                                сочетание высокой моды и непревзойденного комфорта профессиональной спортивной экипировки.
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="collection__image">
                            <img src="../am-beauty/img/blog3.jpg" alt="">
                        </div>
                    </div>
                </div>--}}
            </div>
        </section>

        @if(isset($post->carousel_title) && isset($post->carousel_description) && isset($post->carousel_image))
            <section class="blog-slider">
                <div class="container">
                    <div class="row">
                        <div class="slide-content column">
                            @if(isset($post->carousel_title))
                                <div class="collection__title">
                                    {{--<h3>Сегменты<br> премиум и люкс</h3>--}}

                                    <h3>{{ $post->getTranslatedAttribute('carousel_title', \App::getLocale()) }}</h3>
                                </div>
                            @endif
                            <div class="collection__description">
                                {{--Премиальный и люксовый сегмент представят новые коллекции: Bound by bond – eye, Luli Fama, Beach Bunny, Beach Riot, PilyQ, Vitamin A.--}}

                                {!! $post->getTranslatedAttribute('carousel_description', \App::getLocale()) !!}
                            </div>
                            <div class="swiper-button-next">
                                <svg width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="1.13112" height="12.7853"
                                          transform="matrix(0.756759 -0.653694 0.756759 0.653694 0.0932617 1.40601)"/>
                                    <rect width="1.13112" height="12.4423"
                                          transform="matrix(-0.756759 -0.653694 -0.756759 0.653694 10.365 9.24902)"/>
                                </svg>
                            </div>
                            <div class="swiper-button-prev">
                                <svg width="12" height="18" viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="1.13112" height="12.7853"
                                          transform="matrix(-0.756759 0.653694 -0.756759 -0.653694 11.2401 16.5938)"/>
                                    <rect width="1.13112" height="12.4423"
                                          transform="matrix(0.756759 0.653694 0.756759 -0.653694 0.968262 8.75098)"/>
                                </svg>
                            </div>
                        </div>
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <?php
                                $carouselImages = json_decode ($post->carousel_image);
                                ?>

                                @if(isset($carouselImages))
                                    @foreach($carouselImages as $image)
                                        <div class="swiper-slide">
                                            <div class="slide-image">
                                                <img src="{{ Voyager::image($image) }}" alt="">
                                            </div>
                                        </div>
                                    @endforeach
                                @endif
                                {{--<div class="swiper-slide">
                                    <div class="slide-image">
                                        <img src="{{ asset("am-beauty/img/slide2.jpg") }}" alt="">
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slide-image">
                                        <img src="{{ asset("am-beauty/img/slide3.jpg") }}" alt="">
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slide-image">
                                        <img src="{{ asset("am-beauty/img/slide1.jpg") }}" alt="">
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slide-image">
                                        <img src="{{ asset("am-beauty/img/slide2.jpg") }}" alt="">
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slide-image">
                                        <img src="{{ asset("am-beauty/img/slide3.jpg") }}" alt="">
                                    </div>
                                </div>--}}
                            </div>
                            <div class="swiper-pagination"></div>

                        </div>
                    </div>
                </div>
            </section>
        @endif

        <section class="blog-post-brands">
            <div class="container">
                {{--<h2 class="blog-post-brands__title">Купальники и пляжная одежда категории «Plus Size» будет представлена марками: </h2>--}}
                <h2 class="blog-post-brands__title">
                    {{ $post->getTranslatedAttribute('brands_first_section_title', \App::getLocale ()) }}
                </h2>

                <?php
                $brandImages = json_decode ($post->brand_image);
                ?>

                <div class="grid blog-post-brands__grid">
                    <div class="item">
                        <div class="image">
                            {{--<img src="{{ asset("am-beauty/img/blog5.jpg") }}" alt="">--}}
                            <a href="{{ $post->brand_1_url }}" target="_blank">
                                <img src="{{ Voyager::image($brandImages[0] ?? '') }}" alt="">
                            </a>
                        </div>
                        <div class="item-title">
                            <a href="{{ $post->brand_1_url }}" target="_blank">
                                {{ $post->getTranslatedAttribute('brand_1_title', \App::getLocale()) }}
                            </a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-image">
                            {{--<img src="{{ asset("am-beauty/img/blog-6.jpg") }}" alt="">--}}
                            <a href="{{ $post->brand_2_url }}" target="_blank">
                                <img src="{{ Voyager::image($brandImages[1] ?? '') }}" alt="">
                            </a>
                        </div>
                        <div class="item-title">
                            <a href="{{ $post->brand_2_url }}" target="_blank">
                                {{ $post->getTranslatedAttribute('brand_2_title', \App::getLocale()) }}
                            </a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-image">
                            {{--<img src="{{ asset("am-beauty/img/blog-6.jpg") }}" alt="">--}}
                            <a href="{{ $post->brand_3_url }}" target="_blank">
                                <img src="{{ Voyager::image($brandImages[2] ?? '') }}" alt="">
                            </a>
                        </div>
                        <div class="item-title">
                            <a href="{{ $post->brand_3_url }}" target="_blank">
                                {{ $post->getTranslatedAttribute('brand_3_title', \App::getLocale()) }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="blog-post-brands">
            <div class="container">
                {{--<h2 class="blog-post-brands__title">Средний сегмент представят:</h2>--}}

                <h2 class="blog-post-brands__title">
                    {{ $post->getTranslatedAttribute('brands_second_section_title', \Illuminate\Support\Facades\App::getLocale ()) }}
                </h2>

                <div class="grid blog-post-brands__grid">
                    <?php
                    $brandImages1 = json_decode ($post->brand_image_1);
                    ?>

                    <div class="item">
                        <div class="image">
                            {{--<img src="{{ asset("am-beauty/img/blog-8.jpg") }}" alt="">--}}
                            <a href="{{ $post->brand_1_url_1 }}" target="_blank">
                                <img src="{{ Voyager::image($brandImages1[0] ?? '') }}" alt="">
                            </a>
                        </div>
                        <div class="item-title">
                            <a href="{{ $post->brand_1_url_1 }}" target="_blank">
                                {{ $post->getTranslatedAttribute('brand_1_title_1', \App::getLocale()) }}
                            </a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-image">
                            {{--<img src="{{ asset("am-beauty/img/blog-9.jpg") }}" alt="">--}}
                            <a href="{{ $post->brand_2_url_1 }}" target="_blank">
                                <img src="{{ Voyager::image($brandImages1[1] ?? '') }}" alt="">
                            </a>
                        </div>
                        <div class="item-title">
                            <a href="{{ $post->brand_2_url_1 }}" target="_blank">
                                {{ $post->getTranslatedAttribute('brand_2_title_1', \App::getLocale()) }}
                            </a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-image">
                            {{--<img src="{{ asset("am-beauty/img/blog-9.jpg") }}" alt="">--}}
                            <a href="{{ $post->brand_3_url_1 }}" target="_blank">
                                <img src="{{ Voyager::image($brandImages1[2] ?? '') }}" alt="">
                            </a>
                        </div>
                        <div class="item-title">
                            <a href="{{ $post->brand_3_url_1 }}" target="_blank">
                                {{ $post->getTranslatedAttribute('brand_3_title_1', \App::getLocale()) }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="blog-post-contacts">
            <div class="container">
                <div class="row">
                    <div class="column">
                        {{--<h3>Ждем Вас по адресу:</h3>
                        <div class="blog-post-contacts__address">
                            <p>Г. Москва, ул. Рочдельская, д. 15, стр. 16 (в пешей доступности от ЦВК «Экспоцентр»)<p>
                            <p>Режим работы шоу – рума: с 10:00 до 18:00.</p>
                        </div>--}}

                        {!! $post->getTranslatedAttribute('info_left_column', \App::getLocale()) !!}
                    </div>
                    <div class="column">
                        {{--<h3>Заказ пригласительных:</h3>
                        <div class="blog-post-contacts__phone">
                            <a href="tel:+7(499)1109764">+7 (499) 110 – 97 – 64</a>
                            <a href="tel:+7(499)1109764">+7 (499) 110 – 97 – 64</a>
                        </div>--}}

                        {!! $post->getTranslatedAttribute('info_right_column', \App::getLocale()) !!}
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container winged-words-container">
                @if(isset($wingedWords) && count ($wingedWords) > 0)
                    {{--<div class="slider-outer">
                        <img src="" class="prev" alt="Prev">

                        <div class="slider-inner">
                            @foreach($wingedWords as $word)
                                <img class="img active" src="{{ Voyager::image($word->word_image) }}" alt="">
                            @endforeach
                        </div>

                        <img src="" class="next" alt="Next">
                    </div>--}}

                    {{--<div class="slider-outer">

                    </div>--}}

                    <div class="blog-pagination-wrap">
                        <div class="website-info">
                            <div class="row">
                                @foreach($wingedWords as $word)
                                    <div class="blog row {{ $loop->index === 0 ? 'active' : null }}">
                                        <div class="blog-logo">
                                                {{--<img src="{{ asset("am-beauty/img/blog-logo.png") }}" alt="">--}}

                                                <img class="img" src="{{ Voyager::image($word->word_image) }}"
                                                     alt="">

                                        </div>
                                        <div class="blog-info">
                                            <h4 class="">{{ $word->getTranslatedAttribute('name', \App::getLocale()) }}</h4>

                                            <p class="">
                                                {{ $word->getTranslatedAttribute('text', \App::getLocale()) }}
                                            </p>
                                        </div>
                                    </div>
                                @endforeach

{{--                                    @foreach($wingedWords as $word)--}}
{{--                                        <div class="blog-info">--}}
{{--                                            <h4 class="active">{{ $word->getTranslatedAttribute('name', \App::getLocale()) }}</h4>--}}

{{--                                            <p class="active">--}}
{{--                                                {{ $word->getTranslatedAttribute('text', \App::getLocale()) }}--}}
{{--                                            </p>--}}
{{--                                        </div>--}}
{{--                                    @endforeach--}}
                            </div>
                        </div>

                        <div class="blog-pagination">
                            <div class="row">
                                <div class="blog-prev">
                                    <img src="{{ asset("am-beauty/img/blog-prev.svg") }}" alt="">
                                </div>
                                <div class="center">
                                    <a href="{{ route ('blog', \App::getLocale()) }}">
                                        <img src="{{ asset("am-beauty/img/blog-center.svg") }}" alt="">
                                    </a>
                                </div>
                                <div class="blog-next">
                                    <img src="{{ asset("am-beauty/img/blog-next.svg") }}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </section>
        <section class="blog-post-brands">
            <div class="container">
                <h2 class="blog-post-brands__title">похожие посты </h2>
                <div class="grid blog-post-brands__grid">
                    @foreach($related as $item)
                        <?php
                        $img = json_decode ($item->image);
                        ?>

                        <div class="item related-item">
                            <div class="image">
                                <img src="{{ Voyager::image($img[0] ?? '') }}"
                                     alt={{ $item->getTranslatedAttribute('title', \App::getLocale()) }}"">
                            </div>
                            <div class="related-item-info">
                                <div class="item-title">
                                    {{--КУЛЬТОВЫЙ СПОРТИВНЫЙ БРЕНД MICHI, ТЕПЕРЬ И В РОССИИ.--}}
                                    {{ $item->getTranslatedAttribute('title', \App::getLocale()) }}
                                </div>
                                <div class="item-date">
                                    {{--jan 11, 2022 | news--}}
                                    {{ formatCreatedAt($item->created_at) }} | news
                                </div>
                            </div>
                        </div>
                    @endforeach

                    {{--<div class="item related-item">
                        <div class="image">
                            <img src="{{ asset("am-beauty/img/blog-11.jpg") }}" alt="">
                        </div>
                        <div class="related-item-info">
                            <div class="item-title">
                                LENNY NIEMEYER В  ПОРТФЕЛЕ AMERICAN BEAUTY GROUP.
                            </div>
                            <div class="item-date">
                                dec 21, 2021 | news
                            </div>
                        </div>
                    </div>
                    <div class="item related-item">
                        <div class="image">
                            <img src="{{ asset("am-beauty/img/blog-12.jpg") }}" alt="">
                        </div>
                        <div class="related-item-info">
                            <div class="item-title">
                                «HIGH SUMMER 2021» ОТ КУЛЬТОВОГО  БРЕНДА BOND – EYE
                            </div>
                            <div class="item-date">
                                aug 17, 2021 | news
                            </div>
                        </div>
                    </div>--}}
                </div>
            </div>
        </section>
    </div>
@endsection
