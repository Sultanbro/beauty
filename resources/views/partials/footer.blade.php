<div class="search-wrapper">
    <div class="row">
        <div class="column small-12">
            <form action="{{ route('search', ['language'=> app()->getLocale()]) }}" class="search-form" method="get">
                <input type="text" placeholder="@lang('global.search')..." name="s" required/>
                <button type="submit">
                    <img src="{{ asset('dist/img/search-ic.png') }}" alt="">
                </button>
            </form>
        </div>
    </div>
    <div class="close-search">
        <img src="{{ asset('dist/img/Close.svg') }}" alt="">
    </div>
</div>
<footer>
    <div class="footer__top-row">
        <div class="row align-justify">
            <div class="footer-nav-title">
                <img src="{{ asset('dist/img/American_Beauty_Logo.svg') }}" alt="logo" title=""/>
            </div>
            <div class="flex-container align-middle footer-socials">
                <a href="https://www.facebook.com/ambeautygroup" target="_blank">
                    <img src="{{ asset('dist/img/Facebook_new.svg') }}" alt="" title=""/>
                </a>
                <a href="https://www.instagram.com/ambeautygroup_ru/" target="_blank">
                    <img src="{{ asset('dist/img/Instagram_new.svg') }}" alt="" title=""/>
                </a>
            </div>
        </div>
    </div>
    <div class="footer-top">
        <div class="row align-justify">
            <div class="column">
                <div class="footer-nav-column">
                    <div class="footer-nav-title hide-for-mobile">
                        contacts
                    </div>
                    <div class="footer-nav-info">
                        <div>
                            Россия, г. Москва, ул. Садовническая, д 11, стр. 12
                        </div>
                        <div class="flex-container flex-dir-column phone">
                            <a href="tel:74991109764 ">
                                {{ siteText('phone', $settings) }}

                            </a>
{{--                            <a href="tel:1-800-310-1010">--}}
{{--                                1-800-310-1010--}}
{{--                            </a>--}}
                        </div>
                        <a href="mailto:sales@ambeautygroup.ru" class="email">
                            sales@ambeautygroup.ru
                        </a>
                    </div>

                </div>
            </div>
            <div class="column hide-for-mobile">
                <div class="footer-nav-column">
                    <div class="footer-nav-title">
                        @lang('global.info')
                    </div>
                    <div class="flex-container flex-dir-column footer-nav-links">
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'terms-of-cooperation']) }}">
                            @lang('infoPages.terms_of_cooperation')
                        </a>
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'careers']) }}">
                            @lang('infoPages.careers')
                        </a>
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'legal-information']) }}">
                            @lang('infoPages.legal_information')
                        </a>
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'info-for-partners']) }}">
                            @lang('infoPages.info_for_brands')
                        </a>
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'info-for-suppliers']) }}">
                            @lang('infoPages.info_for_clients')
                        </a>
                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'marketing-opportunities']) }}">
                            @lang('infoPages.marketing_opportunities')
                        </a>
{{--                        <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'services-for-partners']) }}">--}}
{{--                            services for partners--}}
{{--                        </a>--}}
                    </div>
                </div>
            </div>
            <div class="column hide-for-mobile">
                <div class="footer-nav-column">
                    <div class="footer-nav-title">
                        @lang('global.navigate')
                    </div>
                    <div class="flex-container flex-dir-column footer-nav-links">
                        <a href="{{ route('home', app()->getLocale()) }}">
                            @lang('menu.home')
                        </a>
                        <a href="{{ route('about', app()->getLocale()) }}">
                            @lang('menu.about_us')
                        </a>
                        <a href="{{ route('brands', app()->getLocale()) }}">
                            @lang('menu.brands')
                        </a>
                        <a href="{{ route('blog', app()->getLocale()) }}">
                            @lang('menu.blog')
                        </a>
                        <a href="{{ route('contact', app()->getLocale()) }}">
                            @lang('menu.contacts')
                        </a>
                    </div>
                </div>
            </div>
            <div class="column column-subscribe">
                <div class="footer-nav-column">
                    <div class="footer-nav-title hide-for-mobile">
                        @lang('global.subscribe')
                    </div>
                    <div class="footer-description hide-for-mobile">
{{--                        {{ setting('site.footer-description') }}--}}
                        @lang('global.footer_subscribe')
                    </div>
                    <form action="{{ route('subscribe') }}" class="flex-container subscribe-form requestPrice">
                        @csrf
                        <input type="email" placeholder="@lang('global.enter_your_email')" name="email" required/>

                        <button class="btn btn-stroke btn-stroke-white">
                            @lang('global.subscribe_button')
                        </button>
                        {!! NoCaptcha::display() !!}
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="row">
            <div class="column small-12">
                <div class="flex-container align-justify align-middle footer-bottom-main">
                    <div class="copyright">
                        © AMERICAN BEAUTY GROUP 2021 POWERED BY FRIGATE STUDIO
                    </div>
                    <div class="flex-container align-middle footer-socials">
                        <a href="https://www.facebook.com/ambeautygroup" target="_blank">
                            <img src="{{ asset('dist/img/Facebook_new.svg') }}" alt="" title=""/>
                        </a>
                        <a href="https://www.instagram.com/ambeautygroup_ru/" target="_blank">
                            <img src="{{ asset('dist/img/Instagram_new.svg') }}" alt="" title=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
