@extends('layouts.main')

@section('content')

    <div class="flex-container align-center align-middle home-cover">
        <div class="side-column">
            <div class=" text-center">
                <div class="flex-container flex-dir-column side-socials hide-for-mobile">
                    <a href="https://www.facebook.com/ambeautygroup" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="16px" viewBox="0 0 147 273" version="1.1">
                            <title>Fill 166</title>
                            <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Artboard" transform="translate(-217.000000, -83.000000)" fill="#555">
                                    <path d="M353.969362,236.815863 L361.536388,187.586199 L314.206129,187.586199 L314.206129,155.641889 C314.206129,142.173972 320.816757,129.049625 342.018204,129.049625 L363.541,129.049625 L363.541,87.1418048 C363.541,87.1418048 344.007513,83.813 325.33861,83.813 C286.355799,83.813 260.877338,107.389489 260.877338,150.068431 L260.877338,187.586199 L217.541,187.586199 L217.541,236.815863 L260.877338,236.815863 L260.877338,355.813 L314.206129,355.813 L314.206129,236.815863 L353.969362,236.815863" id="Fill-166"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/ambeautygroup_ru/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 274 274" version="1.1">
                            <title>Group</title>
                            <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Artboard" transform="translate(-154.000000, -83.000000)" fill="#555">
                                    <g id="Group" transform="translate(154.813000, 83.813500)">
                                        <path d="M207.996169,49 C199.163036,49 192,56.1630357 192,64.9961695 C192,73.8369643 199.163036,81 207.996169,81 C216.836964,81 224,73.8369643 224,64.9961695 C224,56.1630357 216.836964,49 207.996169,49" id="Fill-163"/>
                                        <path d="M137.187,179.1865 C113.47579,179.1865 94.187,159.89771 94.187,136.178849 C94.187,112.47529 113.47579,93.1865 137.187,93.1865 C160.89821,93.1865 180.187,112.47529 180.187,136.178849 C180.187,159.89771 160.89821,179.1865 137.187,179.1865 Z M137.183182,69.1865 C100.237151,69.1865 70.187,99.2442877 70.187,136.182682 C70.187,173.128712 100.237151,203.1865 137.183182,203.1865 C174.129212,203.1865 204.187,173.128712 204.187,136.182682 C204.187,99.2442877 174.129212,69.1865 137.183182,69.1865 L137.183182,69.1865 Z" id="Fill-164"/>
                                        <path d="M81.3329046,25.1865 C50.3716627,25.1865 25.187,50.3788037 25.187,81.3476866 L25.187,190.032954 C25.187,220.994196 50.3716627,246.1865 81.3329046,246.1865 L190.018172,246.1865 C220.987055,246.1865 246.187,220.994196 246.187,190.032954 L246.187,81.3476866 C246.187,50.3788037 220.987055,25.1865 190.018172,25.1865 L81.3329046,25.1865 Z M190.478585,272.1865 L81.8801455,272.1865 C36.8343924,272.1865 0.187,235.532502 0.187,190.488013 L0.187,81.8926218 C0.187,36.8404984 36.8343924,0.1865 81.8801455,0.1865 L190.478585,0.1865 C235.524338,0.1865 272.187,36.8404984 272.187,81.8926218 L272.187,190.488013 C272.187,235.532502 235.524338,272.1865 190.478585,272.1865 L190.478585,272.1865 Z" id="Fill-165"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="swiper-container cover-carousel">
            <div class="swiper-wrapper">
                @foreach ($slider as $item)
                    <div class="swiper-slide cover-slider">
                        <div class="cover-slider-img">
                            <img src="{{ Voyager::image($item->image) }}" alt="" title="" class="img-object-cover hide-for-mobile"/>
                            <img src="{{ Voyager::image($item->mobile_image) }}" alt="" title="" class="img-object-cover hide-for-not-mobile"/>
                            {{--                        <img src="../dist/img/home-slider-1.png" alt="" title="" class="img-object-cover"/>--}}
                        </div>
                        <div class="slide-info">
                            <a href="/{{ request()->segment(1) . '/' . $item->link }}">
                                <h2 class="bold">
                                <span>
                                {{ $item->getTranslatedAttribute('text_1', \App::getLocale())}}

                                </span>
                                    {{ $item->getTranslatedAttribute('text_2', \App::getLocale())}}
                                </h2>
                                <h3>
                                    {{ $item->getTranslatedAttribute('text_3', \App::getLocale())}}
                                </h3>
                                <div class="slide-info__mob-link hide-for-not-mobile">
                                    Explore The Collection
                                </div>
                            </a>
                            <div class="cover-button-prev">
                                <svg data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.11 54.07"><path d="M26.43 54.03a2.47 2.47 0 01-1.75-.73l-24-24a2.47 2.47 0 010-3.49L25.9.72a2.47 2.47 0 013.49 3.49L5.95 27.64l22.22 22.21a2.48 2.48 0 01-1.74 4.18z" fill=""></path></svg>
                            </div>
                            <div class="cover-button-next">
                                <svg data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.69 55.12"><path d="M2.51 55.15a2.48 2.48 0 01-1.78-.74 2.51 2.51 0 010-3.55l23.89-23.93L1.97 4.29A2.52 2.52 0 015.53.73l24.42 24.42a2.52 2.52 0 010 3.56L4.29 54.37a2.48 2.48 0 01-1.78.78z" fill=""></path></svg>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
            <div class="home-swiper-pagination"></div>

            <div class="slide-custom-menu">
                @foreach ($slider as $item)
                    <div class="tab-item">
                        {{ $item->getTranslatedAttribute('title', \App::getLocale())}}
                    </div>
                @endforeach
            </div>
        </div>
        <div class="side-column"></div>
    </div>

    <div class="story">
        <div class="row align-middle">
            <div class="column small-12 medium-6 story__content">
            <!-- <div class="story-label">
                @lang('home.our_story_small_title')
                </div> -->
                <div class="block-title">
                    @lang('home.our_story')
                </div>
                <div class="info-description">
                    @lang('home.our_story_text')
                </div>
                <a href="{{ route('about', app()->getLocale()) }}" class="btn story__readmore">
                    @lang('global.read_more')
                </a>
            </div>
            <div class="column small-12 medium-5 story__img">
                <img src="assets/img/img10.jpg" alt="" title=""/>
            </div>
        </div>
    </div>

    <div class="collection hide-for-mobile">
        @foreach ($collections as $key => $item)
            <a class="collection-item item-{{$key + 1}}" href="/{{ app()->getLocale() . '/' . $item->url }}">
                <img src="{{ Voyager::image($item->image) }}" alt="{{ $item->getTranslatedAttribute('title', \App::getLocale()) }}" title="{{ $item->getTranslatedAttribute('title', \App::getLocale()) }}" class="img-object-cover"/>
                <div class="flex-container align-justify flex-dir-column collection-item-info">
                    <div class="collection-title">
                        {!! home_collection_title($item->getTranslatedAttribute('title', \App::getLocale())) !!}
                    </div>
                    <div class="collection-description">
                        {{ $item->getTranslatedAttribute('description', \App::getLocale()) }}
                    </div>
                </div>
            </a>
        @endforeach
    </div>
    <div class="collection hide-for-not-mobile">
        {{--    <div class="collection__column">--}}
        {{--        <a class="collection-item item-1" href="/ru/brands/luli-fama">--}}
        {{--            <img src="https://americanbeauty.online/storage/home-collections/Luli_Fama_Grid.jpg" alt="LULI FAMA" title="LULI FAMA" class="img-object-cover">--}}
        {{--            <div class="flex-container align-justify flex-dir-column collection-item-info">--}}
        {{--                <div class="collection-title">--}}
        {{--                    LULI <b>FAMA</b>--}}
        {{--                </div>--}}
        {{--                <div class="collection-description">--}}
        {{--                    Звездный бренд, среди поклонниц которого Бейонсе...--}}
        {{--                </div>--}}
        {{--            </div>--}}
        {{--        </a>--}}
        {{--        <a class="collection-item item-2" href="/ru/brands/vitamin-a">--}}
        {{--            <img src="https://americanbeauty.online/storage/home-collections/Vitamin_A_Grid.jpg" alt="VITAMIN A" title="VITAMIN A" class="img-object-cover">--}}
        {{--            <div class="flex-container align-justify flex-dir-column collection-item-info">--}}
        {{--                <div class="collection-title">--}}
        {{--                    VITAMIN <b>A</b>--}}
        {{--                </div>--}}
        {{--                <div class="collection-description">--}}
        {{--                    новые инновационные ткани из переработанных волокон прочнее, долговечнее и практичнее, чем спандекс.--}}
        {{--                </div>--}}
        {{--            </div>--}}
        {{--        </a>--}}
        {{--    </div>--}}
        {{--    <div class="collection__column">--}}
        {{--        <a class="collection-item item-3" href="/ru/brands/beach-riot">--}}
        {{--            <img src="https://americanbeauty.online/storage/home-collections/Beach_Riot_Grid.jpg" alt="BEACH RIOT" title="BEACH RIOT" class="img-object-cover">--}}
        {{--            <div class="flex-container align-justify flex-dir-column collection-item-info">--}}
        {{--                <div class="collection-title">--}}
        {{--                    BEACH <b>RIOT</b>--}}
        {{--                </div>--}}
        {{--                <div class="collection-description">--}}
        {{--                    Создан для женщин, которые умеют любить жизнь, энергичны и всегда готовы к приключениям.--}}

        {{--                </div>--}}
        {{--            </div>--}}
        {{--        </a>--}}
        {{--        <a class="collection-item item-4" href="/ru/brands/pilyq">--}}
        {{--            <img src="https://americanbeauty.online/storage/home-collections/PilyQ_Grid.jpg" alt="PILYQ" title="PILYQ" class="img-object-cover">--}}
        {{--            <div class="flex-container align-justify flex-dir-column collection-item-info">--}}
        {{--                <div class="collection-title">--}}
        {{--                    PILYQ <b></b>--}}
        {{--                </div>--}}
        {{--                <div class="collection-description">--}}
        {{--                    Женственные и нежные коллекции элегантной одежды и купальников--}}
        {{--                </div>--}}
        {{--            </div>--}}
        {{--        </a>--}}
        {{--    </div>--}}
        <div class="collection__column">
            @foreach ($collections as $key => $item)
                @if($key < 2)
                    <a class="collection-item item-{{$key + 1}}" href="/{{ app()->getLocale() . '/' . $item->url }}">
                        <img src="{{ Voyager::image($item->image) }}" alt="{{ $item->getTranslatedAttribute('title', \App::getLocale()) }}" title="{{ $item->getTranslatedAttribute('title', \App::getLocale()) }}" class="img-object-cover"/>
                        <div class="flex-container align-justify flex-dir-column collection-item-info">
                            <div class="collection-title">
                                {!! home_collection_title($item->getTranslatedAttribute('title', \App::getLocale())) !!}
                            </div>
                            <div class="collection-description">
                                {{ $item->getTranslatedAttribute('description', \App::getLocale()) }}
                            </div>
                        </div>
                    </a>
                @endif
            @endforeach
        </div>
        <div class="collection__column">
            @foreach ($collections as $key => $item)
                @if($key >= 2 && $key < 4)
                    <a class="collection-item item-{{$key + 1}}" href="/{{ app()->getLocale() . '/' . $item->url }}">
                        <img src="{{ Voyager::image($item->image) }}" alt="{{ $item->getTranslatedAttribute('title', \App::getLocale()) }}" title="{{ $item->getTranslatedAttribute('title', \App::getLocale()) }}" class="img-object-cover"/>
                        <div class="flex-container align-justify flex-dir-column collection-item-info">
                            <div class="collection-title">
                                {!! home_collection_title($item->getTranslatedAttribute('title', \App::getLocale())) !!}
                            </div>
                            <div class="collection-description">
                                {{ $item->getTranslatedAttribute('description', \App::getLocale()) }}
                            </div>
                        </div>
                    </a>
                @endif
            @endforeach
        </div>
    </div>

    <div class="row align-center justify-content-center">
        <div class="column small-12">
            <div class="btn-wrapper collection__bottom-btn">
                <a href="{{ route('brands', app()->getLocale()) }}" class="btn btn-stroke btn-stroke-black">
                    {!! trans('home.see_all_new_collection') !!}
                </a>
            </div>
        </div>
    </div>

    <div class="flex-container gallery">
        <div class="side-column">

        </div>
        <div class="swiper-container gallery-carousel">
            <div class="swiper-wrapper">
                {{-- for ($i = 1; $i <= 3; $i++) { --}}
                @foreach($blogs as $item)
                    @php $images = json_decode($item->image); @endphp
                    <div class="swiper-slide gallery-slider-item">
                        <div class="flex-container gallery-slider-in">
                            <div class="gal-img">
                                <img src="{{ Voyager::image($images[0] ?? '') }}" alt="" title="" class="img-object-cover"/>
                            </div>
                            <div class="gal-info">
                                <div class="gal-title">
                                    {{ $item->getTranslatedAttribute('title', \App::getLocale()) }}
                                </div>
                                <div class="date">
                                    <a href="">
                                        MARCH 8, 2021
                                    </a>
                                    <a href="">
                                        NEWS
                                    </a>
                                </div>
                                <div class="info-description">
                                    {{ $item->getTranslatedAttribute('description', \App::getLocale()) }}
                                </div>
                                <div class="flex-container align-middle gal-actions">
                                    <a href="" class="btn">
                                        @lang('global.read_more')
                                    </a>
                                    {{--                                <div class="flex-container align-middle comment-like">--}}
                                    {{--                                        <a class="flex-container align-middle" href="">--}}
                                    {{--                                            <img src="{{ asset('dist/img/comment-icon.png')  }}" alt="" title=""/>--}}
                                    {{--                                            <span>--}}
                                    {{--                                                21--}}
                                    {{--                                            </span>--}}
                                    {{--                                        </a>--}}
                                    {{--                                    <a class="flex-container align-middle" href="">--}}
                                    {{--                                        <img src="{{ asset('dist/img/like-icon.png')  }}" alt="" title=""/>--}}
                                    {{--                                        <span>--}}
                                    {{--                                                21--}}
                                    {{--                                            </span>--}}
                                    {{--                                    </a>--}}
                                    {{--                                    <div class="share-icon">--}}
                                    {{--                                        <img src="{{ asset('dist/img/share-icon.png')  }}" alt="" title=""/>--}}
                                    {{--                                    </div>--}}
                                    {{--                                </div>--}}
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
                {{-- } --}}
            </div>
            <div class="gal-navigation prev">
                <div>
                    back
                </div>
            </div>
            <div class="gal-navigation next">
                <div>
                    next
                </div>
            </div>
        </div>
        <div class="side-column"></div>
    </div>

    <div class="instagram-section text-center hide-for-mobile">
        <div class="block-title">
            @lang('home.instagram_title')
        </div>
        <div class="instagram-description">
            {{--  Our fans @lulifamaswimwear tag us! --}}
            @lang('home.instagram_text')
        </div>
        <div class="instagram-photos">
            @if(count($instagramSection) >= 7)
                @for($i = 0; $i < 7; $i++)
                    <?php
                    $item = $instagramSection[$i];
                    $key = $i;
                    ?>
                    <div class="insta-item insta-{{$key + 1}}">
                        <div class="insta-img">
                            <img src="{{ Voyager::image($item->image) }}" alt="" class="img-object-cover"/>
                        </div>
                        <div class="insta-info">
                            <i>
                                <img src="{{ asset('dist/img/inst-white.png') }}" alt="">
                            </i>
                            <a href="{{ $item->url }}" target="_blank" class="btn btn-blue">
                                view account
                            </a>
                        </div>
                    </div>
                @endfor
            @endif

            {{--        <div class="insta-item insta-1">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src=https://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-2">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-3">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-4">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-5">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-6">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-7">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
        </div>

        <div class="instagram-photos-1 hide-for-mobile invisible">
            @if(count($instagramSection) >= 14)
                @for($i = 7; $i < 14; $i++)
                    <?php
                    $item = $instagramSection[$i];
                    $key = $i;
                    ?>
                    <div class="insta-item insta-{{$key -3}}">
                        <div class="insta-img">
                            <img src="{{ Voyager::image($item->image) }}" alt="" class="img-object-cover"/>
                        </div>
                        <div class="insta-info">
                            <i>
                                <img src="{{ asset('dist/img/inst-white.png') }}" alt="">
                            </i>
                            <a href="{{ Voyager::image($item->url) }}" target="_blank" class="btn btn-blue">
                                view account
                            </a>
                        </div>
                    </div>
                @endfor
            @endif
            {{--        <div class="insta-item insta-1">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-2">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-3">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-4">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-5">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-6">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-7">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}

        </div>
        @if(count($instagramSection) >13)

            <div class="instagram-photos-2 invisible">
                {{--        @for($i = 9; $i < 14; $i++)--}}
                {{--            <?php--}}
                {{--            $item = $instagramSection[$i];--}}
                {{--            $key = $i;--}}
                {{--            ?>--}}
                {{--            <div class="insta-item insta-{{$key - 8}}">--}}
                {{--                <div class="insta-img">--}}
                {{--                    <img src="{{ Voyager::image($item->image) }}" alt="" class="img-object-cover"/>--}}
                {{--                </div>--}}
                {{--                <div class="insta-info">--}}
                {{--                    <i>--}}
                {{--                        <img src="{{ asset('dist/img/inst-white.png') }}" alt="">--}}
                {{--                    </i>--}}
                {{--                    <a href="{{ Voyager::image($item->url) }}" target="_blank" class="btn btn-blue">--}}
                {{--                        view account--}}
                {{--                    </a>--}}
                {{--                </div>--}}
                {{--            </div>--}}
                {{--        @endfor--}}
            </div>
        @endif

        @if(!(count($instagramSection) <= 7))
            <div class="instagram-load">
                <button class="btn btn-large btn-stroke-dark">@lang('global.see_more')</button>
            </div>
        @endif
    </div>
    <div class="instagram-section text-center hide-for-not-mobile">
        <div class="block-title">
            @lang('home.instagram_title')
        </div>
        <div class="instagram-description">
            {{--  Our fans @lulifamaswimwear tag us! --}}
            @lang('home.instagram_text')
        </div>
        <div class="instagram-photos" data-simplebar>
            @if(count($instagramSection) >= 7)
                @for($i = 0; $i < 7; $i++)
                    <?php
                    $item = $instagramSection[$i];
                    $key = $i;
                    ?>
                    <div class="insta-item insta-{{$key + 1}}">
                        <div class="insta-img">
                            <img src="{{ Voyager::image($item->image) }}" alt="" class="img-object-cover"/>
                        </div>
                        <div class="insta-info">
                            <i>
                                <img src="{{ asset('dist/img/inst-white.png') }}" alt="">
                            </i>
                            <a href="{{ $item->url }}" target="_blank" class="btn btn-blue">
                                view account
                            </a>
                        </div>
                    </div>
                @endfor
            @endif

            {{--          <div class="insta-item insta-1">--}}
            {{--              <div class="insta-img">--}}
            {{--                  <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--              </div>--}}
            {{--              <div class="insta-info">--}}
            {{--                  <i>--}}
            {{--                      <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                  </i>--}}
            {{--                  <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                      view account--}}
            {{--                  </a>--}}
            {{--              </div>--}}
            {{--          </div>--}}
            {{--          <div class="insta-item insta-2">--}}
            {{--              <div class="insta-img">--}}
            {{--                  <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--              </div>--}}
            {{--              <div class="insta-info">--}}
            {{--                  <i>--}}
            {{--                      <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                  </i>--}}
            {{--                  <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                      view account--}}
            {{--                  </a>--}}
            {{--              </div>--}}
            {{--          </div>--}}
            {{--          <div class="insta-item insta-3">--}}
            {{--              <div class="insta-img">--}}
            {{--                  <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--              </div>--}}
            {{--              <div class="insta-info">--}}
            {{--                  <i>--}}
            {{--                      <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                  </i>--}}
            {{--                  <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                      view account--}}
            {{--                  </a>--}}
            {{--              </div>--}}
            {{--          </div>--}}
            {{--          <div class="insta-item insta-4">--}}
            {{--              <div class="insta-img">--}}
            {{--                  <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--              </div>--}}
            {{--              <div class="insta-info">--}}
            {{--                  <i>--}}
            {{--                      <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                  </i>--}}
            {{--                  <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                      view account--}}
            {{--                  </a>--}}
            {{--              </div>--}}
            {{--          </div>--}}
            {{--          <div class="insta-item insta-5">--}}
            {{--              <div class="insta-img">--}}
            {{--                  <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--              </div>--}}
            {{--              <div class="insta-info">--}}
            {{--                  <i>--}}
            {{--                      <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                  </i>--}}
            {{--                  <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                      view account--}}
            {{--                  </a>--}}
            {{--              </div>--}}
            {{--          </div>--}}
            {{--          <div class="insta-item insta-6">--}}
            {{--              <div class="insta-img">--}}
            {{--                  <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--              </div>--}}
            {{--              <div class="insta-info">--}}
            {{--                  <i>--}}
            {{--                      <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                  </i>--}}
            {{--                  <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                      view account--}}
            {{--                  </a>--}}
            {{--              </div>--}}
            {{--          </div>--}}
            {{--          <div class="insta-item insta-7">--}}
            {{--              <div class="insta-img">--}}
            {{--                  <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--              </div>--}}
            {{--              <div class="insta-info">--}}
            {{--                  <i>--}}
            {{--                      <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                  </i>--}}
            {{--                  <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                      view account--}}
            {{--                  </a>--}}
            {{--              </div>--}}
            {{--          </div>--}}

        </div>

        <div class="instagram-photos-1 hide-for-mobile">
            @if(count($instagramSection) >= 14)
                @for($i = 7; $i < 14; $i++)
                    <?php
                    $item = $instagramSection[$i];
                    $key = $i;
                    ?>
                    <div class="insta-item insta-{{$key -3}}">
                        <div class="insta-img">
                            <img src="{{ Voyager::image($item->image) }}" alt="" class="img-object-cover"/>
                        </div>
                        <div class="insta-info">
                            <i>
                                <img src="{{ asset('dist/img/inst-white.png') }}" alt="">
                            </i>
                            <a href="{{ Voyager::image($item->url) }}" target="_blank" class="btn btn-blue">
                                view account
                            </a>
                        </div>
                    </div>
                @endfor
            @endif

            {{--        <div class="insta-item insta-1">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-2">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-3">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-4">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-5">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-6">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}
            {{--        <div class="insta-item insta-7">--}}
            {{--            <div class="insta-img">--}}
            {{--                <img src="http://americanbeauty.online/storage/instagram-sections/October2021/rKBc8NbdA2vbN6ccR0Ev.jpg" alt="" class="img-object-cover">--}}
            {{--            </div>--}}
            {{--            <div class="insta-info">--}}
            {{--                <i>--}}
            {{--                    <img src="https://americanbeauty.online/dist/img/inst-white.png" alt="">--}}
            {{--                </i>--}}
            {{--                <a href="https://www.instagram.com/p/CVhr7TeAIxI/?utm_source=ig_web_copy_link" target="_blank" class="btn btn-blue">--}}
            {{--                    view account--}}
            {{--                </a>--}}
            {{--            </div>--}}
            {{--        </div>--}}

        </div>
        @if(count($instagramSection) >13)

            <div class="instagram-photos-2 invisible">
                {{--        @for($i = 9; $i < 14; $i++)--}}
                {{--            <?php--}}
                {{--            $item = $instagramSection[$i];--}}
                {{--            $key = $i;--}}
                {{--            ?>--}}
                {{--            <div class="insta-item insta-{{$key - 8}}">--}}
                {{--                <div class="insta-img">--}}
                {{--                    <img src="{{ Voyager::image($item->image) }}" alt="" class="img-object-cover"/>--}}
                {{--                </div>--}}
                {{--                <div class="insta-info">--}}
                {{--                    <i>--}}
                {{--                        <img src="{{ asset('dist/img/inst-white.png') }}" alt="">--}}
                {{--                    </i>--}}
                {{--                    <a href="{{ Voyager::image($item->url) }}" target="_blank" class="btn btn-blue">--}}
                {{--                        view account--}}
                {{--                    </a>--}}
                {{--                </div>--}}
                {{--            </div>--}}
                {{--        @endfor--}}
            </div>
        @endif

        @if(!(count($instagramSection) <= 8))
            <div class="instagram-load">
                <button class="btn btn-large btn-dark-grey">@lang('global.see_more')</button>
            </div>
        @endif
    </div>

    <div class="modal newsletter">
        <div class="flex-container newsletter-in">
            <div class="newsletter-image">
                <img src="{{ asset('assets/img/newsletter.jpg') }}" alt="" title="" class="img-object-cover"/>
            </div>
            <div class="newsletter-info text-center">
                <div class="close-modal">
                    <img src="{{ asset('assets/img/close-popup.svg') }}" alt="">
                </div>
                <div class="newsletter-title">
                    {{ siteText('modal-title', $settings) }}
                </div>
                <div class="newsletter-description">
                    {{ siteText('modal-description', $settings) }}
                </div>
                <form action="" class="flex-container flex-dir-column align-middle">
                    <input type="email" placeholder="Enter your mail..." required>
                    <button type="submit" class="btn">
                        {{ siteText('subscribe', $settings) }}

                    </button>
                </form>
                <div class="flex-container align-middle">
                    <input type="checkbox" id="not-show"/>
                    <label for="not-show">
                        {{ siteText('do_not_show_this_popup_again', $settings) }}
                    </label>
                </div>
            </div>
        </div>

    </div>


    @include('partials.partners-section', ['partners' => $partners])

@endsection
