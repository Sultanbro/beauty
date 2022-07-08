<?php
$images = json_decode($brand->images);
?>
@extends('layouts.main')

@section('head')
<meta name="keywords" content="{{ $brand->meta_keywords ?? '' }}">
<meta name="description" content="{{ $brand->meta_description ?? '' }}">

<meta property="og:url" content="{{ url()->current() }}"/>
<meta property="og:type" content="brand"/>
<meta property="og:title" content="{{ $brand->getTranslatedAttribute('name', \App::getLocale()) }}"/>
<meta property="og:description" content=" {{ $brand->getTranslatedAttribute('listing_description', \App::getLocale()) }}"/>
<meta property="og:image"
      content="  @if($images != null && is_array($images))  {{ Voyager::image($images[0] ?? '') }} @endif"/>
@stop

@section('content')

    <main class="page brands">
        <div class="top">
            <div class="row">
                <div class="column small-12">
                    <div class="flex-container align-top align-justify top-container">
                        <h1 class="brands-top-title">
                            @lang('menu.brands')
                        </h1>
                        <div class="flex-container align-middle align-right breadcrumbs">
                            <a href="{{ route('home', app()->getLocale()) }}">
                                @lang('menu.home')
                            </a>
                            <a href="{{ route('brands', app()->getLocale()) }}">
                                @lang('menu.brands')
                            </a>
                            <a href="#">
                                   {{ $brand->getTranslatedAttribute('name', \App::getLocale()) }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="back-btn-wrap">
          <a href="https://americanbeauty.online/ru/brands" class="back-btn">Back to brands</a>
        </div>
        <div class="flex-container brands-single">
            <div class="brand-img">
                <img src="{{ Voyager::image($images[0]) }}" alt="" class="img-object-cover"/>
{{--                <img src="https://americanbeauty.online/assets/img/about-img.jpg" alt="" title="" class="img-object-cover"/>--}}
            </div>
            <div class="brand-in">
                <h2 class="extraLight">
                    {!! home_collection_title($brand->getTranslatedAttribute('name', \App::getLocale())) !!}
                </h2>
                <div class="brand-information">
                    <div class="brand-description">
                        {!! $brand->getTranslatedAttribute('description', \App::getLocale()) !!}
                    </div>

                    <div class="flex-container brand-inform hide-for-mobile">
                        <div class="brand-inform-bold">
                            <span>
                                  @lang('global.brand'):
                            </span>
                            <span>
                                @lang('global.website'):
                            </span>
                            <span>
                                @lang('global.producing_country'):
                            </span>
                            <span>
                                @lang('global.categories'):
                            </span>

                        </div>
                        <div class="brand-inform-light">
                            <span>
                                {{ $brand->getTranslatedAttribute('name', \App::getLocale()) }}
                            </span>
                            <span>
                                <a href="{{ $brand->websie }}" target="_blank">{{ $brand->websie }}</a>
                            </span>
                            <span>
                                {{ $brand->product_country }}
                            </span>
                            <span>
                                @foreach($brand->categories as $category)
                                    {{ $category->getTranslatedAttribute('name', \App::getLocale()) }},
                                    @endforeach
                            </span>

                        </div>
                    </div>
                </div>
                <div class="hide-on-mobile social-icons">
                  <div class="social-icon-item">
                    <a href="https://www.facebook.com/ambeautygroup">
                        <img src="{{ asset('dist/img/fb-dark.svg') }}" alt="" title=""/>
                    </a>
                  </div>
                  <div class="social-icon-item">
                    <a href="https://www.instagram.com/ambeautygroup_ru/">
                      <img src="{{ asset('dist/img/inst-dark.svg') }}" alt="" title=""/>
                    </a>
                  </div>
                </div>
                <div class="brand-qualif">
                  <div class="flex-container">
                    <div class="column">
                      <div class="qualif">
                        Бренд:
                      </div>
                      <div class="qualif">
                        Веб-сайт:
                      </div>
                      <div class="qualif">
                        Страна производитель:
                      </div>
                      <div class="qualif">
                        Категория:
                      </div>
                    </div>
                    <div class="column">
                      <div class="info">
                        Vitamin A
                      </div>
                      <div class="info">
                        www.vitaminaswim.com
                      </div>
                      <div class="info">
                        США
                      </div>
                      <div class="info">
                        Купальники,
                        Пляжная одежда,
                        Спортивная одежда,
                      </div>
                    </div>
                  </div>
                </div>
            <!--    <div class="flex-container align-middle brand-socials">
                    <a href="" target="_blank">
                        <img src="{{ asset('dist/img/facebook.svg') }}" alt="" title=""/>
                    </a>
                    <a href="" target="_blank">
                        <img src="{{ asset('dist/img/instagram.svg') }}" alt="" title=""/>
                    </a>
                </div>-->
            </div>
        </div>
        <div class="brand-images">

            <div class="brand-images-item grid-1">
                <div class="hide-on-desktop brand-images-item__mobile">
                      <img src="{{ Voyager::image($images[1]) }}" alt="" class="img-object-cover"/>
                </div>
            </div>
            <div class="brand-images-item grid-2">
                <div class="hide-on-desktop brand-images-item__mobile">
                    <img src="{{ Voyager::image($images[2]) }}" alt="" class="img-object-cover"/>
                </div>
            </div>
            <div class="brand-images-item grid-3">
                <div class="hide-on-desktop brand-images-item__mobile">
                    <img src="{{ Voyager::image($images[3]) }}" alt="" class="img-object-cover"/>
                </div>
            </div>
            <div class="brand-images-item grid-4">
                <div class="hide-on-desktop brand-images-item__mobile">
                    <img src="{{ Voyager::image($images[6]) }}" alt="" class="img-object-cover"/>
                </div>
            </div>
            <div class="brand-images-item grid-5">
                <div class="hide-on-desktop brand-images-item__mobile">
                    <img src="{{ Voyager::image($images[7]) }}" alt="" class="img-object-cover"/>
                </div>
            </div>
            <div class="brand-images-item grid-6">
                <div class="hide-on-desktop brand-images-item__mobile">
                    <img src="{{ Voyager::image($images[4]) }}" alt="" class="img-object-cover"/>
                </div>
            </div>
            <div class="brand-images-item grid-7">
                <div class="hide-on-desktop brand-images-item__mobile">
                    <img src="{{ Voyager::image($images[5]) }}" alt="" class="img-object-cover"/>
                </div>
            </div>
            @foreach ($images as $key => $image)
                @if($key != 0)
                    <div class="brand-images-item grid-{{$key}}">
{{--                        <div class="hide-on-desktop brand-images-item__mobile">--}}
{{--                              <img src="{{ Voyager::image($image) }}" alt="" class="img-object-cover"/>--}}
{{--                        </div>--}}
                        <div class="brand-images-item__desktop hide-on-mobile">
                            <img src="{{ Voyager::image($image) }}" alt="" class="img-object-cover"/>
                        </div>
                    </div>
                @endif
            @endforeach

        </div>
        <div class="brand-navigation__row row align-justify">
            <div class="column small-12">
                <div class="flex-container align-middle align-justify brand-navigation">
                    <a href="{{ $previous != null ? '/' . app()->getLocale() . '/brands/' . $previous->slug : '#'  }}" class="flex-container align-middle nav-item">
                        <img src="{{ asset('dist/img/prev-icon.png') }}" alt="" title=""/>
                        <span class="hide-for-mobile">
                            @lang('global.previews')
                        </span>
                    </a>
                    <a href="{{ route('brands', app()->getLocale()) }}" class="brand-list-link-icon">
                        <img src="{{ asset('dist/img/list-icon.png') }}" alt="{{ route('brands', app()->getLocale()) }}" title=""/>
                    </a>
                <!--    <a class="btn btn-stroke btn-stroke-white">
                        @lang('brand.request_price')
                    </a>-->
                    <a href="{{ $next != null ? '/' . app()->getLocale() . '/brands/' . $next->slug : '#'  }}" class="flex-container align-middle nav-item">
                        <span class="hide-for-mobile">
                            @lang('global.next')
                        </span>
                        <img src="{{ asset('dist/img/next-icon.png') }}" alt="" title=""/>
                    </a>
                </div>
            </div>

        </div>
        <div class="flex-container align-center text-center more-details">
            <div class="column small-12 medium-8">
                <div class="title">
                    <!--@lang('global.more')-->
                    обратная связь
                </div>
                <div class="more-description">
                    @lang('global.brand_footer_up')
                </div>
                <div class="flex-container align-middle align-center btn-wrap">
                    <a class="btn btn-stroke btn-stroke-black price-btn">
                        @lang('brand.request_price')
                    </a>
                    <a href="{{ route('contact', app()->getLocale()) }}" class="btn btn-stroke btn-fill-dark">
                        @lang('brand.get_contact')
                    </a>
                </div>
            </div>
        </div>
    </main>

    <x-price-modal slug="{{ request()->segment(3) }}"></x-price-modal>

@endsection
