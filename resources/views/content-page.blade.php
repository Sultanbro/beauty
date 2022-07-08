@extends('layouts.main')

@section('content')

    <main class="page brands">
      <div class="modal thank-you-modal">
        <div class="close-modal">
          <img src="{{ asset('assets/img/close-popup.svg') }}" alt="">
        </div>
        <div class="thank-you__content">
          <div class="thank-you__title">
            Ваш запрос был успешно <br>отправлен.
          </div>
          <div class="thank-you__message">
            В данный момент ваш запрос, обрабатывается нашими менеджерами . Представитель свяжется с Вами в ближайшие сроки для предоставления  информации.
          </div>
          <div class="thank-you__text">
            спасибо!
          </div>
        </div>
      </div>
        <div class="top">
            <div class="row">
                <div class="column small-12 ">
                    <div class="flex-container align-top align-justify top-container">
                        <h1 class="content-title">
                            @lang('infoPages.'.str_replace('-', '_',request()->segment(2)))
                        </h1>
                        <div class="flex-container align-middle align-right breadcrumbs">
                            <a href="{{ route('home', app()->getLocale()) }}">
                                @lang('menu.home')
                            </a>
                            <a href="">
                                @lang('menu.about_us')
                            </a>
                            <a href="">
                                @lang('infoPages.'.str_replace('-', '_',request()->segment(2)))
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
    <div class="main-content default-content">
        <div class="row">

            <div class="column small-12 medium-3 hide-on-mobile">
                <aside>
                    <div class="aside-title">
                        @lang('infoPages.basic_company_info')
                    </div>
                    <div class="aside-links">
                        <div>
                            <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'terms-of-cooperation']) }}" class="{{ request()->segment(2) == 'terms-of-cooperation' ? 'active' : ''}}">
                                @lang('infoPages.terms_of_cooperation')
                            </a>
                        </div>
                        <div>
                            <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'marketing-opportunities']) }}" class="{{ request()->segment(2) == 'marketing-opportunities' ? 'active' : ''}}">
                                @lang('infoPages.marketing_opportunities')
                            </a>
                        </div>
                        <div>
                            <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'info-for-suppliers']) }}" class="{{ request()->segment(2) == 'services-for-partners' ? 'active' : ''}}">
                                @lang('infoPages.info_for_clients')
                            </a>
                        </div>
                        <div>
                            <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'info-for-partners']) }}" class="{{ request()->segment(2) == 'info-for-partners' ? 'active' : ''}}">
                                @lang('infoPages.info_for_brands')
                            </a>
                        </div>
                        <div>
                            <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'legal-information']) }}" class="{{ request()->segment(2) == 'legal-information' ? 'active' : ''}}">
                                @lang('infoPages.legal_information')
                            </a>
                        </div>
                        <div>
                            <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'careers']) }}" class="{{ request()->segment(2) == 'careers' ? 'active' : ''}}">
                                @lang('infoPages.careers')
                            </a>
                        </div>
                    </div>
                </aside>
            </div>

            <div class="column small-12 medium-9">
              <div class="categories pages-categories">
                  <div class="categories-picked">
                    Выберите раздел
                  </div>
                <div class="categories-items">
                <div class="category-item">
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'terms-of-cooperation']) }}">
                      Условия сотрудничества
                    </a>
                </div>
                <div class="category-item">
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'marketing-opportunities']) }}">
                      Маркетинговые возможности
                    </a>
                </div>
                <div class="category-item">
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'info-for-suppliers']) }}">
                      Для клиентов
                    </a>
                </div>
                <div class="category-item">
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'info-for-partners']) }}">
                      Для брендов
                    </a>
                </div>
                <div class="category-item">
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'legal-information']) }}">
                      Правовая информация
                    </a>
                </div>
                <div class="category-item">
                    <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'careers']) }}">
                      Вакансии
                    </a>
                </div>
                </div>
              </div>
                <div class="content-in">
                    <div class="content-in-title">
                        {!! $page->getTranslatedAttribute('title', \App::getLocale()) !!}
                    </div>
                    <div class="richText">
{{--                        Luctus et ultrices posuere cubilia Curae. Donec nibh sapien, molestie quis elementum et, dignissim non atino ipsum. Pesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed mauris lorem. Sed sit ammauris eu purus consectetur blandit sed et lacus.--}}

{{--                        Cras tellus enim, sagittis aer varius faucibus, molestie in dolor. Mauris molliadipisg elit, in vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliquam et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Nullam vel tellus massa. Vivamus porttitor rutrum libero ac mattis. Aliquam congue malesuada mauris vitae dignissim. Luctus et ultrices posuere cubilia Curae. Donec nibh sapien, molestie quis elementum et, dignissim non atino ipsum. Pesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed mauris lorem. Sed sit ammauris eu purus consectetur blandit sed et lacus.--}}

{{--                        Cras tellus enim, sagittis aer varius faucibus, molestie in dolor. Mauris molliadipisg elit, in vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliquam et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Nullam vel tellus massa. Vivamus porttitor rutrum libero ac mattis. Aliquam congue malesuada mauris vitae dignissim.--}}
{{--                        Donec sed mauris lorem. Sed sit ammauris eu purus consectetur blandit sed et lacus. Cras tellus enim, sagittis aer varius faucibus, molestie in dolor. Mauris molliadipisg elit, in vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliqua et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Nullam vel tellus massa. Vivamus porttitor rutrum libero ac mattis. Aliquam congue malesuada mauris vitae dignissim.--}}

{{--                        Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et etus sapien. Craes vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliqua et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Donec sed mauris lorem. Sed sit ammauris eu purus consectetur blandit sed et lacus. Cras tellus enim, sagittis aer varius faucibus, molestie in dolor. Mauris molliadipisg elit, in vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliqua et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Nullam vel tellus massa. Vivamus porttitor rutrum libero ac mattis. Aliquam congue malesuada mauris vitae dignissim.--}}

{{--                        Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et etus sapien. Craes vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliqua et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl.--}}
                        {!! $page->getTranslatedAttribute('body', \App::getLocale()) !!}
                    </div>
                </div>
                <div class="accordion-btn">
                  далее
                </div>
                <div class="accordion-text richText">
                  Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et etus sapien. Craes vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliqua et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl.
                  Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et etus sapien. Craes vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliqua et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl.
                  Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et etus sapien. Craes vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliqua et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl.
                  Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et etus sapien. Craes vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliqua et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl.
                  Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et etus sapien. Craes vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliqua et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl.
                </div>

                @if(Request::segment(2) == "info-for-suppliers" || Request::segment(2) == "info-for-partners")
                   <!--<x-contact-form segment="Request::segment(2)"/>-->
                   <x-contact-form-short/>
                @else
                    <x-contact-form-short/>
                @endif

            </div>
        </div>
    </div>
@endsection
