<header class="flex-container align-middle align-justify">
    <a href="{{ route('home', app()->getLocale()) }}" class="header-logo">
        <img src="{{ asset('dist/img/American_Beauty_Logo.svg') }}" alt="logo" title=""/>
    </a>
    <div class="flex-container lang lang-mobile-header hide-for-not-mobile">
        <span class="active-border-lang"></span>
        <div class="lang-item">
            <a href="{{change_lang('en')}}" class="{{ lang_active('en') }}">
                en
            </a>
        </div>
        <div class="lang-item">
            <a href="{{change_lang('ru')}}" class="{{ lang_active('ru') }}">
                ru
            </a>
        </div>
    </div>
    <div class="burger-wrapper">
        <div class="burger">
            <div></div>
        </div>
    </div>
    <div class="flex-container header-right">
        <div class="header-right__logo hide-for-not-mobile">
            <a href="{{ route('home', app()->getLocale()) }}" class="header-logo">
                <img src="{{ asset('dist/img/American_Beauty_Logo.svg') }}" alt="logo" title=""/>
            </a>
        </div>
        <nav>
            <ul class="flex-container">
                <div class="active-border"></div>
                <li class="menu-item">
                    <a href="{{ route('home', app()->getLocale()) }}" class="{{ menu_active('') }}">
                        @lang('menu.home')
                    </a>
                </li>
                <li class="menu-item">
                   <a href="{{ route('about', app()->getLocale()) }}" class="{{ menu_active('about') }}">
                        @lang('menu.about_us')
                    </a>
                </li>
                <li class="menu-item">
                    <a href="{{ route('brands', app()->getLocale()) }}" class="{{ menu_active('brands')}}">
                        @lang('menu.brands')
                    </a>

                </li>
                <li class="menu-item">
                  <a href="{{ route('blog', app()->getLocale()) }}" class="{{ menu_active('blog') }}">
                        @lang('menu.blog')
                    </a>
                </li>
                <li class="menu-item">
                  <a href="{{ route('contact', app()->getLocale()) }}" class="{{ menu_active('contact') }}">
                        @lang('menu.contacts')
                    </a>
                </li>
            </ul>
        </nav>
        <div class="header-socials">
            <div class="header-socials__item">
                <a href="https://www.instagram.com/ambeautygroup_ru/">instagram</a>
            </div>
            <div class="header-socials__item">
                <a href="https://www.facebook.com/ambeautygroup">facebook</a>
            </div>
        </div>
        <div class="search-btn">
            <img src="{{ asset('dist/img/Search.svg') }}" alt="" title=""/>
        </div>
        <nav class="hide-for-not-mobile second-menu">
            <ul class="flex-container">
                <li>
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'terms-of-cooperation']) }}">
                        @lang('infoPages.terms_of_cooperation')
                    </a>
                </li>
                <li>
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'careers']) }}">
                        @lang('infoPages.careers')
                    </a>
                </li>
                <li>
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'legal-information']) }}">
                        @lang('infoPages.legal_information')

                    </a>
                </li>
                <li>
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'info-for-suppliers']) }}">
                        @lang('infoPages.info_for_clients')
                    </a>
                </li>
                <li>
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'marketing-opportunities']) }}">
                        @lang('infoPages.marketing_opportunities')
                    </a>
                </li>
                <li>
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'services-for-partners']) }}">
                        @lang('infoPages.info_for_brands')
                    </a>
                </li>
            </ul>
        </nav>
        <div class="mobile-header-buttons hide-for-not-mobile">
            <a href="#" class="btn btn-stroke btn-stroke-black">
                маркетинговые возможности
            </a>
            <a href="#" class="btn btn-stroke btn-stroke-black">
                маркетинговые возможности
            </a>
        </div>
        <div class="flex-container align-middle">
            <div class="flex-container lang">
                <span class="active-border-lang"></span>
                <div class="lang-item">
                    <a href="{{change_lang('en')}}" class="{{ lang_active('en') }}">
                        en
                    </a>
                </div>
                <div class="lang-item">
                    <a href="{{change_lang('ru')}}" class="{{ lang_active('ru') }}">
                        ru
                    </a>
                </div>
            </div>
            <div class="flex-container hide-for-not-mobile text-center mobile-header-socials">
                <a href="https://www.facebook.com/ambeautygroup">
                    <img src="{{ asset('dist/img/fb-dark.svg') }}" alt="" title=""/>
                </a>
                <a href="https://www.instagram.com/ambeautygroup_ru/">
                    <img src="{{ asset('dist/img/inst-dark.svg') }}" alt="" title=""/>
                </a>
            </div>
        </div>
        <div class="burger-wrapper-inner">
            <div class="burger">
                <div></div>
            </div>
        </div>
    </div>
</header>
<div class="menu-nav">
    <div class="menu-nav__top">
        <a href="{{ route('home', app()->getLocale()) }}" class="header-logo">
            <img src="{{ asset('dist/img/American_Beauty_Logo.svg') }}" alt="logo" title=""/>
        </a>
        <div class="flex-container align-middle header-right">
            <div class="header-socials">
                <div class="header-socials__item">
                    <a href="https://www.instagram.com/ambeautygroup_ru/">instagram</a>
                </div>
                <div class="header-socials__item">
                    <a href="https://www.facebook.com/ambeautygroup">facebook</a>
                </div>
            </div>
            <div class="search-btn">
                <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.28 53.26"><defs><style>.cls-1{fill:#fff}</style></defs><path class="cls-1" d="M48.63 70A23.64 23.64 0 0125 46.53 23.13 23.13 0 0131.8 30a23.57 23.57 0 0140.07 16.71A23.2 23.2 0 0148.63 70zm-.39-44.19a20.52 20.52 0 00-20.59 20.71A20.93 20.93 0 0063.2 61.38a20.5 20.5 0 006-14.66 21 21 0 00-21-20.87z" transform="translate(-25 -23.2)"/><path class="cls-1" d="M77 76.46a1.33 1.33 0 01-.94-.39L63.2 63.25a1.32 1.32 0 111.87-1.87L77.89 74.2a1.32 1.32 0 010 1.87 1.3 1.3 0 01-.89.39z" transform="translate(-25 -23.2)"/></svg>
            </div>
            <nav class="hide-for-not-mobile second-menu">
                <ul class="flex-container align-middle">
                    <li>
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'terms-of-cooperation']) }}">
                            @lang('infoPages.terms_of_cooperation')
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'careers']) }}">
                            @lang('infoPages.careers')
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'legal-information']) }}">
                            @lang('infoPages.legal_information')

                        </a>
                    </li>
                    <li>
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'info-for-suppliers']) }}">
                            @lang('infoPages.info_for_clients')
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'marketing-opportunities']) }}">
                            @lang('infoPages.marketing_opportunities')
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'services-for-partners']) }}">
                            @lang('infoPages.info_for_brands')
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="flex-container align-middle">
                <div class="flex-container lang">
                    <span class="active-border-lang"></span>
                    <div class="lang-item">
                        <a href="{{change_lang('en')}}" class="{{ lang_active('en') }}">
                            en
                        </a>
                    </div>
                    <div class="lang-item">
                        <a href="{{change_lang('ru')}}" class="{{ lang_active('ru') }}">
                            ru
                        </a>
                    </div>
                </div>
                <div class="flex-container hide-for-not-mobile text-center mobile-header-socials">
                    <a href="https://www.facebook.com/ambeautygroup">
                        <img src="{{ asset('dist/img/facebook.svg') }}" alt="" title=""/>
                    </a>
                    <a href="https://www.instagram.com/ambeautygroup_ru/">
                        <img src="{{ asset('dist/img/Instagram.svg') }}" alt="" title=""/>
                    </a>
                </div>
            </div>
            <div class="burger-wrapper-close close">
                <div class="burger">
                    <div></div>
                </div>
            </div>
        </div>
    </div>
    <div class="menu-nav__row">
        <div class="menu-nav__left">
            <div class="menu-nav__links">
                <ul>
                    <li><a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'terms-of-cooperation']) }}">условия сотрудничества</a></li>
                    <li><a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'careers']) }}">вакансии</a></li>
                    <li><a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'legal-information']) }}">правовая информация</a></li>
                    <li><a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'info-for-suppliers']) }}">для клиентов</a></li>
                    <li><a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'marketing-opportunities']) }}">маркетинговые возможности</a></li>
                    <li><a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'services-for-partners']) }}">для брендов</a></li>
                </ul>
            </div>
            <div class="menu-nav__copyright">
                © American Beauty Group 2021 Powered By Frigate Studio
            </div>
        </div>
        <div class="menu-nav__right">
            <div class="menu-nav__navigation">
                <ul>
                    <li>
                        <a href="{{ route('home', app()->getLocale()) }}">
                            Главная
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('about', app()->getLocale()) }}">
                            О компании
                        </a>
                    </li>
                    <li class="has-children">
                        <a href="{{ route('brands', app()->getLocale()) }}">
                            бренды
                        </a>
                        <div class="sub-menu hide-on-mobile">
                          <div class="menu-nav__top">
                              <a href="{{ route('home', app()->getLocale()) }}" class="header-logo">
                                  <img src="{{ asset('dist/img/American_Beauty_Logo_white.svg') }}" alt="logo" title=""/>
                              </a>
                          </div>
                          <div class="sub-menu__grid">
                            <div class="col-1">
                              <ul class="sub-menu__brands">
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/vitamin-a">vitamin a</a>
                                    <img  class="image-background hidden" src="{{ asset('dist/img/Vitamin_A_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/luli-fama">luli fama</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Luli_Fama_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/lenny-niemeyer">lenny niemeyer</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Lenny_Niemeyer_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/beach-bunny">beach bunny</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Beach_Bunny_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/oceanus">oceanus</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Oceanus_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/beach-riot">beach riot</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Beach_Riot_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/michi">michi</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Michi_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/heroine-sport">heroine sport</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Heroine_Sport_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/pilyq">pilyq</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Pilyq_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/bond-eye">bond-eye</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Bond_Eye_Menu.jpg') }}" alt="" title=""/>
                                </li>
                              </ul>
                            </div>
                            <div class="col-2">
                              <ul class="sub-menu__brands">
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/milonga">milonga</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Milonga_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/phax">phax</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Phax_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/cotazur">cotazur</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Cotazur_Menu.jpg') }}" alt="" title=""/>
                                </li>
                              </ul>
                            </div>
                            <div class="col-3">
                              <ul class="sub-menu__brands">
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/sea-level">sea level</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Sea_Level_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="https://americanbeauty.online/ru/brands/nuria-ferrer">nuria ferrer</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Nuria_Ferrer_Menu.jpg') }}" alt="" title=""/>
                                </li>
                                <li>
                                  <a href="#">jantzen</a>
                                  <img  class="image-background hidden" src="{{ asset('dist/img/Jantzen_Menu.jpg') }}" alt="" title=""/>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="menu-nav__copyright">
                              © American Beauty Group 2021 Powered By Frigate Studio
                          </div>
                        </div>
                    </li>
                    <li>
                        <a href="{{ route('blog', app()->getLocale()) }}">
                            блог
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('contact', app()->getLocale()) }}">
                            контакты
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
