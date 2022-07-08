@extends('layouts.main')

@section('content')

<main class="page brands">
    <div class="top">
        <div class="row">
            <div class="column small-12">
                <div class="flex-container align-top align-justify top-container">
                    <h1>
                        @lang('menu.brands')

                    </h1>
                    <div class="flex-container align-middle align-right breadcrumbs">
                        <a href="{{ route('home', app()->getLocale()) }}">
                            @lang('menu.home')
                        </a>
                        <a href="{{ route('brands', app()->getLocale()) }}">
                            @lang('menu.brands')
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="column small-12">
            <div class="flex-container align-justify alphabet" id="brands-filter">
                <a href="" key="all">
                    @lang('global.all')
                </a>
                <a href="a" key="a">
                    a
                </a>
                <a href="b" key="b">
                    B
                </a>
                <a href="c" key="C">
                    c
                </a>
                <a href="d" key="d">
                    d
                </a>
                <a href="e" key="e ">
                    e
                </a>
                <a href="f" key="f">
                    f
                </a>
                <a href="g" key="g">
                    g
                </a>
                <a href="h" key="h">
                    h
                </a>
                <a href="#" key="i">
                    i
                </a>
                <a href="j" key="j">
                    j
                </a>
                <a href="" key="k">
                    k
                </a>
                <a href="" key="l">
                    l
                </a>
                <a href="" key="m">
                    m
                </a>
                <a href="" key="n">
                    n
                </a>
                <a href="" key="o">
                    o
                </a>
                <a href="" key="p">
                    p
                </a>
                <a href="" key="q">
                    Q
                </a>
                <a href="" key="r">
                    r
                </a>
                <a href="" key="s">
                    s
                </a>
                <a href="" key="t">
                    t
                </a>
                <a href="" key="u">
                    u
                </a>
                <a href="" key="v">
                    v
                </a>
                <a href="" key="w">
                    w
                </a>
                <a href="" key="x">
                    x
                </a>
                <a href="" key="y">
                    y
                </a>
                <a href="" key="z">
                    z
                </a>
            </div>
        </div>
    </div>
    <div class="grid-wrapper">

        @foreach ($brands as $item)

            <div class="flex-container brand-item">
                <div class="flex-container align-middle brand-info-wrapper">
                    <div class="brand-info">
                        <h2 class="light">
                            {{ $item->getTranslatedAttribute('name', \App::getLocale()) }}
                        </h2>
                        <div class="description">
                            {{ $item->getTranslatedAttribute('listing_description', \App::getLocale()) }}
                        </div>
                        <div class="hide-for-mobile">
                           {{-- <a href="{{ route('brand.single.slug', ['language' => app()->getLocale(),'slug' => $item->slug]) }}" class="btn btn-stroke btn-stroke-grey">
                                @lang('global.read_more')
                            </a>--}}
                            <a href="{{'/' . app()->getLocale() . '/brands/' . $item->slug }}" class="btn btn-stroke btn-stroke-grey">
                                @lang('global.read_more')
                            </a>
                        </div>
                    </div>
                </div>

                <div class="swiper-container brands-carousel">
                    <div class="swiper-wrapper">
                        <?php
                            // for ($i = 1; $i <= 3; $i++) {
                                $images = json_decode($item->images);
                                ?>
                                @foreach ($images as $image)

                                    <div class="swiper-slide brand-list-slide-item">
                                        <div>
                                            <img src="{{ Voyager::image($image) }}" alt="" title="" class="img-object-cover"/>
{{--                                            <img src="https://americanbeauty.online/assets/img/about-img.jpg" alt="" title="" class="img-object-cover"/>--}}
                                        </div>

                                    </div>

                                @endforeach
                                <?php
                            // }
                        ?>
                    </div>
                    <div class="brend-nav prev">
                        <img src="{{ asset('dist/img/Arrow_Left.svg') }}" alt="" title=""/>
                    </div>
                    <div class="brend-nav next">
                        <img src="{{ asset('dist/img/Arrow_Right.svg') }}" alt="" title=""/>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="hide-for-not-mobile brand-more">
                    <a href="{{'/' . app()->getLocale() . '/brands/' . $item->slug }}" class="btn btn-stroke btn-stroke-grey">
                        @lang('global.read_more')
                    </a>
                </div>
            </div>

        @endforeach

    </div>
    {{ $brands->links('vendor.pagination.semantic-ui') }}
    {{-- <div class="flex-container align-center align-middle pagination">
        <a href="" class="prev">
            <img src="dist/img/arrow_prev.png" alt="">
        </a>
        <a href="" class="active">
            1
        </a>
        <a href="">
            2
        </a>
        <a href="">
            3
        </a>
        <a href="">
            ...
        </a>
        <a href="" class="pagination__next-arrow">
            <img src="dist/img/arrow_next.png" alt="">
        </a>
    </div> --}}
    <div class="flex-container align-center text-center more-details">
        <div class="column small-12 medium-8">
            <div class="title">
                @lang('global.more')
            </div>
            <div class="more-description">
                @lang('global.brand_footer_up')
            </div>
            <div class="flex-container align-middle align-center btn-wrap">
                <a class="btn btn-stroke btn-stroke-black price-btn">
                    @lang('brand.request_price')
                </a>
                <a href="{{ route('contact', app()->getLocale()) }}" class="btn btn-stroke btn-fill-black">
                    @lang('brand.get_contact')
                </a>
            </div>
        </div>
    </div>

    <x-price-modal slug=""></x-price-modal>

</main>

@endsection
